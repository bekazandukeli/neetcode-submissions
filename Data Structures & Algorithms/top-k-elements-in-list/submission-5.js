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

        let leaderboard = [];
        for (let num of Object.keys(numberCountMap)) {
            leaderboard.push({number: num, frequency: numberCountMap[num]});
        }
        let sortedLeaderboard = leaderboard.toSorted((a, b) => b.frequency - a.frequency).map((obj) => obj.number);
        return sortedLeaderboard.slice(0, k)
    }
}
