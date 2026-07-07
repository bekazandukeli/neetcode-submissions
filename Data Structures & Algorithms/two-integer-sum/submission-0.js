class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {};

        nums.forEach((num, i) => {
            map[num] = i;
        });

        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i];
            if (map[diff] !== undefined && map[diff] !== i)
                return [i, map[diff]];
        }
    }
}
