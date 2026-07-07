class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const result = strs.map(str => {
                console.log(str==='');
                if (str === '') return '∅';
                return str;
            }).join('🛸');
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = str.length ? str.split('🛸').map(str => {
            if (str === '∅') return '';
                return str;
        }) : [];
        return result;
    }
}
