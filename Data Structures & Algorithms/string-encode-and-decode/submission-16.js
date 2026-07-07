class Solution {
    spaceSymbol = "🤣"
    emptyStringSymbol = "😹"
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const result = strs.map(str => {
                if (str === '') return this.emptyStringSymbol;
                return str;
            }).join(this.spaceSymbol);
            console.log(result)
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = str.length ? str.split(this.spaceSymbol).map(str => {
            if (str === this.emptyStringSymbol) return '';
                return str;
        }) : [];
        return result;
    }
}
