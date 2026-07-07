class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      const anagramMap = {};
      for (let i = 0; i < strs.length; i++) {
        const charCountAsKey = Array(25).fill(0);
        strs[i].split("").forEach(char => {
          charCountAsKey[char.charCodeAt() - "a".charCodeAt()] += 1
        });
        if(anagramMap[charCountAsKey] !== undefined) {
          anagramMap[charCountAsKey].push(strs[i]);
        } else {
          anagramMap[charCountAsKey] = [strs[i]];
        }
      }
      
      return Object.values(anagramMap);
}
}
