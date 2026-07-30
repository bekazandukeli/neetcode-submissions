class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let letterRange = ['A', 'z'];
        let numRange = ['0','9'];
        let numCharCodeRange = numRange.map(str => str.charCodeAt(0));
        let letterCharCodeRange = letterRange.map(str => str.charCodeAt(0));
        let parsedString = s.replaceAll(' ', '').toLowerCase().split('').filter(st => {
            let charCode = st.charCodeAt(0)
            return charCode >= numCharCodeRange[0] && charCode <= numCharCodeRange[1] ||
                charCode >= letterCharCodeRange[0] && charCode <= letterCharCodeRange[1]
        }).join('');
    
        for (let i=0; i<Math.floor(s.length/2);i++) {
            let letterFromStart = parsedString[i];
            let letterFromEnd=parsedString[parsedString.length-1-i];
            if (letterFromStart !== letterFromEnd) return false;
        }
        return true;
    }

}
