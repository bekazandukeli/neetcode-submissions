class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        return s.split('').toSorted().join('') === t.split('').toSorted().join('');
    }
}
