class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxVolume = 0;
        for (let i = 0; i < heights.length; i++) {
            for (let j = i + 1; j < heights.length; j++) {
                let width = j - i;
                let lowerBarHeight = Math.min(heights[i], heights[j]);
                let volume = width * lowerBarHeight;
                if (volume > maxVolume) maxVolume = volume;
            }
        }
        return maxVolume;
    }
}
