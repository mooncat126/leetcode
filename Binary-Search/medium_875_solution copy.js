/**
 * https://leetcode.com/problems/koko-eating-bananas/
 *
 * 875. Koko Eating Bananas
 *
 * Easy
 *
 * Runtime: 144 ms, faster than 5.03% of JavaScript online submissions for Peak Index in a Mountain Array.
 * Memory Usage: 39 MB, less than 93.74% of JavaScript online submissions for Peak Index in a Mountain Array.
 */

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = function(piles, h) {
    let start = 1
    let end = Math.max(...piles)
    while(start < end) {
      const mid = Math.floor(start + (end - start)/2);
      let hour = computeHour(piles, mid)
      if (hour > h) {
        start = mid + 1
      } else {
        end = mid
      }
    }
    return start
};

function computeHour (piles, per) {
  let hours = 0
  for (let p of piles) {
    hours += Math.ceil(p / per)
  }
  return hours
}