class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxVolume = 0;
        let i = 0;
        let j = heights.length - 1;
        while (i < j) {
            let width = j - i;
            let lowerBarHeight = Math.min(heights[i], heights[j]);
            let volume = width * lowerBarHeight;
            if (volume > maxVolume) maxVolume = volume;
            if (heights[i] < heights[j]) i++;
            else j--;
        }
        return maxVolume;
    }
}
