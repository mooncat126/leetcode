/**
 * https://leetcode.com/problems/peak-index-in-a-mountain-array/
 *
 * 852. Peak Index in a Mountain Array
 *
 * Easy
 *
 * Runtime: 144 ms, faster than 5.03% of JavaScript online submissions for Peak Index in a Mountain Array.
 * Memory Usage: 39 MB, less than 93.74% of JavaScript online submissions for Peak Index in a Mountain Array.
 */

 /**
 * @param {number[]} arr
 * @return {number}
 */
const peakIndexInMountainArray = A => {
    return binarySearch(A, 0, A.length - 1)
  }

  function binarySearch(array, start, end) {
    while (start < end) {
      const mid = Math.floor(start + (end - start) / 2)
      if (array[mid + 1] > array[mid]) {
        start = mid + 1
      } else {
        end = mid
      }
    }
    return start
  }
