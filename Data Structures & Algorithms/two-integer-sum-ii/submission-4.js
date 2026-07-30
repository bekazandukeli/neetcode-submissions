class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0;
        let j = numbers.length - 1;
        while (i < j) {
            let num1 = numbers[i]; // 1
            let num2 = numbers[j]; // 3
            let remainder = target - num1; // 2
            
            if (num2 === remainder) return [i + 1, j + 1];
            if (num2 > remainder) j--;
            if (num2 < remainder) i++;
        }
    }
}
