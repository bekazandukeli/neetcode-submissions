class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(string => string.length + '#' + string).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let strLength = '';
        const decoded_strs = [];
        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            if (char !== '#') {
                strLength += char;
            }
            if (char === '#') {
                const startIndex = i + 1
                const endIndex = i + 1 + Number(strLength)
                const decoded_str = str.slice(startIndex, endIndex);
                decoded_strs.push(decoded_str);
                i += Number(strLength);
                strLength = '';
            }
        }
        return decoded_strs;
    }
}
