class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      const anagramMap = {};
      const sortStringLetters = (str) => str.split("").toSorted().join("");
      
      for (let i = 0; i < strs.length; i++) {
        let sortedString = sortStringLetters(strs[i])
        if(anagramMap[sortedString] !== undefined) {
          anagramMap[sortedString] = [strs[i], ...anagramMap[sortedString]];
        } else {
          anagramMap[sortedString] = [strs[i]];
        }
      }
      
      return Object.values(anagramMap);
}
}
