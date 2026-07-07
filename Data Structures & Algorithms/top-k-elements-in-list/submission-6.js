class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let numberCountMap = {}

        for (let num of nums) {
            if (numberCountMap[num] !== undefined) {
                numberCountMap[num]++
            } else {
                numberCountMap[num] = 1
            }
        }

        let sortedLeaderboard = Object.entries(numberCountMap).map(([key, value]) => ({number: Number(key), frequency: value})).toSorted((a, b) => b.frequency - a.frequency).map((obj) => obj.number);
        return sortedLeaderboard.slice(0, k)
    }
}
