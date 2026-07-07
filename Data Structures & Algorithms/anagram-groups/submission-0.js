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
      
      let anagramGroupArray = [];
      for (let anagramGroupKey in anagramMap) {
        anagramGroupArray.push(anagramMap[anagramGroupKey])
      }
      return anagramGroupArray;
}
}
