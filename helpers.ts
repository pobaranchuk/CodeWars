// constants
import { RANGE } from './constants'
import { EJobViewTypes } from '@md-constants/jobs'
// utils
import map from 'lodash/fp/map'
import max from 'lodash/fp/max'
import round from 'lodash/round'
import pipe from 'lodash/fp/pipe'
import keys from 'lodash/fp/keys'
import isEmpty from 'lodash/isEmpty'
// @ts-ignore
import filter from 'lodash/fp/filter'
import uniqWith from 'lodash/fp/uniqWith'
import { convertRange } from '@md-shared/utils/common'

const MIN_AREAS_PADDING_PX = 6

const swap = (arr: number[], leftIndex: number, rightIndex: number) => {
  let temp = 0

  temp = arr[leftIndex]
  arr[leftIndex] = arr[rightIndex]
  arr[rightIndex] = temp
}

type Entity = {
  index: number
  value: number
}

const checkClusterAreasHasMoreMinPadding = (
  arr: number[],
  minPadding = MIN_AREAS_PADDING_PX
) => {
  const filteredZeros = arr.filter(Boolean)

  return filteredZeros.some((_, index) => {
    if (!filteredZeros[index + 1]) {
      return false
    }

    return filteredZeros[index] - filteredZeros[index + 1] < minPadding
  })
}

const getIndexMap = (arr: number[]) => {
  const arr1 = arr.map((value, index) => ({ index: index, value }))
  const arr2 = [...arr1]
    .sort((a, b) => {
      {
        if (Number(a.value) === Number(b.value)) {
          return -1
        }

        return Number(a.value) - Number(b.value)
      }
    })
    .reverse()

  return pipe(
    (arr: Entity[]) =>
      arr.map((el, index) => [
        index,
        arr2.findIndex(
          (el1) => el1.value === el.value && el1.index === el.index
        ),
      ]),
    map((el) => el.sort()),
    uniqWith((a, b) => a.toString() === b.toString()),
    filter((el) => el[0] !== el[1])
  )(arr1)
}

const incrementalIncreaseAreaSizesToMinPadding = (
  values: number[],
  minPadding = MIN_AREAS_PADDING_PX
) => {
  const arr = [...values]
  const arrSorted = [...values].sort((a, b) => Number(a) - Number(b)).reverse()

  const indexMap = getIndexMap(arr)

  while (checkClusterAreasHasMoreMinPadding(arrSorted)) {
    arrSorted.forEach((value, index) => {
      const compareIndex = arrSorted
        .slice(index + 1, arrSorted.length)
        .findIndex((val) => !!val && val !== 0)

      const compareItem = arrSorted[compareIndex + index + 1]

      if (!arrSorted[index] || compareIndex === -1 || !compareItem) {
        return
      }

      if (value - compareItem < minPadding) {
        arrSorted[index] += minPadding - (value - compareItem)
      }

      return
    })
  }

  Object.values(indexMap).forEach(([leftIndex, rightIndex]) => {
    swap(arrSorted, leftIndex, rightIndex)
  })

  return arrSorted
}

export const getAreaZIndex = (value: number) => RANGE[1] - Math.round(value)
