class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let longestSequence = 0;

        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            if (!set.has(num - 1)) {
                buildSequence(num);
            }
        }

        function buildSequence(startNumber) {
            let sequence = [];
            let num = startNumber;
            do {
                sequence.push(num);
                num++;
            } while (set.has(num));
            longestSequence = Math.max(sequence.length, longestSequence);
        }

        return longestSequence;
    }
}
