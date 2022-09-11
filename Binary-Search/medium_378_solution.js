/**
 * https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/
 *
 * 378. kth-smallest-element-in-a-sorted-matrix
 *
 * Easy
 *
 * Runtime: 84 ms, faster than 97.99% of JavaScript online submissions for Sqrt(x).
 * Memory Usage: 40.3 MB, less than 11.32% of JavaScript online submissions for Sqrt(x).
 */

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  return binarySearch(matrix, k);
};

function binarySearch(matrix, k) {
  let arrayList = [];
  // 将所有的数字拆开放入数组
  matrix.forEach(array => {
    array.forEach(num => {
      arrayList.push(num);
    })
  });

  // 对数组进行冒泡排序
  arrayList = arrayList.sort((a, b) => {
    return a - b
  });

  return arrayList[k - 1];
}

