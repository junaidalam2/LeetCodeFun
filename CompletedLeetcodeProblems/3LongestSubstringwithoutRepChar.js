
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/*
Given a string s, find the length of the longest substring without repeating characters.

 
Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104

*/


// s = "abcabcbb"
// s = "bbbbb"
// s =  "pwwkew"
s =  "wkertzcvbnm"

var lengthOfLongestSubstring = function(s) {
  
    let counter = 1
    let max = 0

    for(i = 1; i <s.length - 1; i++){

        let k = 0

        if (!((s.slice(k, i)).includes(s[i]))){
            
            counter++
       } else {

            k = i
            counter = 1
            
       }

       if(counter > max ) {
        max = counter
        }

    }

    console.log(max)
    return max
};

lengthOfLongestSubstring(s)



