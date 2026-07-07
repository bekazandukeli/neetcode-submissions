class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let numberCountMap = {}

        for (let num of nums) {
            numberCountMap[num] = (numberCountMap[num] ?? 0) + 1
        }
        // let sortedLeaderboard = Object.entries(numberCountMap).map(([key, value]) => ({number: Number(key), frequency: value})).toSorted((a, b) => b.frequency - a.frequency).map((obj) => obj.number);
        const heap = new MinPriorityQueue((x) => x[1]);

        for (const [num, count] of Object.entries(numberCountMap)) {
            heap.enqueue([num, count]);
            if (heap.size() > k) {
                heap.dequeue();
            }
        }

        const result = [];
        for (let i = 0; i < k; i++) {
            const [num, count] = heap.dequeue();
            console.log(num, count)
            result.push(num)
        }
        return result;
    }
}
