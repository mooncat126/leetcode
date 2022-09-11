/**
 * https://leetcode.com/problems/sqrtx/
 *
 * 69. Sqrt(x)
 *
 * Easy
 *
 * Runtime: 84 ms, faster than 97.99% of JavaScript online submissions for Sqrt(x).
 * Memory Usage: 40.3 MB, less than 11.32% of JavaScript online submissions for Sqrt(x).
 */

/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x:number):number => {
  let start = 1;
  let end = x;
  while (start < end) {
    let mid = Math.floor(start + (end - start)/2);
    let middle = mid * mid;
    if (middle < x) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  if(start * start === x) {
    return start
  }
  return start - 1
}
