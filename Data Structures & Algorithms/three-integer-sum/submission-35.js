class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let results = [];
        /* LESSON LEARNED: default sort()/toSorted() behaviour without sorting function
         sorts negative numbers wrong way -1 is considered smaller then -4
        */
        nums.sort((a,b) => a-b); 
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break;
            let target = -nums[i];
            const sums = this.findTwoSumsAndTarget(nums, target, i + 1);
            sums.forEach(item => results.push(item))
        }

        console.log(results);
        
        let resultsMap = {}
        for (let i = 0; i < results.length; i++) {
            resultsMap[results[i].join('')] = results[i];
        }

        return Object.values(resultsMap);
    }

    findTwoSumsAndTarget(nums, target, initialStartIndex) {
        const answers = [];
        let i = initialStartIndex;
        let j = nums.length - 1;
        while (i < j) {
            let diff = target - nums[i];
            if (nums[j] === diff) {
                answers.push([nums[i], nums[j], -target]);
                i++;
            }
            else if (nums[j] > diff) j--;
            else if (nums[j] < diff) i++;
        }
        return answers;
    }
}