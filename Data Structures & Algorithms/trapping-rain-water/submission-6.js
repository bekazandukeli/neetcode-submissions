class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    trap(heights) {
        const peaks = [];
        const peaksOverWater = [];
        let maxTrappedWaterArea = 0;
        // Find All Peaks
        for (let i = 0; i < heights.length; i++) {
            if (heights[i] === 0) continue;
            let higherThenLeftBar = heights[i] >= (heights[i-1] ?? 0);
            let higherThenRightBar = heights[i] >= (heights[i+1] ?? 0);
            if (higherThenLeftBar && higherThenRightBar) {
                peaks.push({index: i, height: heights[i]});
            }
        }
        // Find Peaks Which Are Not Under Water
        for (let i = 0; i < peaks.length; i++) {
            let peak = peaks[i];
            let leftSlice = peaks.slice(0,i).map(peak => peak.height);
            let rightSlice = peaks.slice(i+1, peaks.length).map(peak => peak.height);
            let lowerThenLeftPeak = peak.height < Math.max(...leftSlice);
            let lowerThenRightPeak = peak.height < Math.max(...rightSlice);
            console.log({peak, lowerThenLeftPeak, lowerThenRightPeak, leftSlice, rightSlice, maxLeft: Math.max(...peaks.slice(0,i)), maxRight: Math.max(...peaks.slice(i+1, peaks.length))})
            if (lowerThenLeftPeak && lowerThenRightPeak) continue;
            peaksOverWater.push(peak);
        }
        console.log(peaksOverWater)
        // Calculate Total Trapped Rain Area
        for (let i = 0; i < peaksOverWater.length; i++) {
            let leftPeak = peaksOverWater[i];
            let rightPeak = peaksOverWater[i+1];
            if (!rightPeak) break;
            let pondWidth = rightPeak.index - leftPeak.index - 1;
            let lowerPeakHeight = Math.min(leftPeak.height, rightPeak.height);
            let trappedRainAreaBetweenTwoPeaks = pondWidth * lowerPeakHeight; // Starting Values is Max Rain Area Between Two Peaks
            // Substract Bar Heights Between Peaks From Max Rain Area
            for (let j = leftPeak.index + 1; j < rightPeak.index; j++) {
                let barHeight = heights[j];
                trappedRainAreaBetweenTwoPeaks -= Math.min(barHeight, lowerPeakHeight);
            }
            maxTrappedWaterArea += trappedRainAreaBetweenTwoPeaks;
        }
        return maxTrappedWaterArea;
    }
}


[5,5,1,7,1,1,5,2,7,6]
[5,5,1,7,1,1,5,2,7,6]
