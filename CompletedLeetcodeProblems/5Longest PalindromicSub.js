

/* https://leetcode.com/problems/longest-palindromic-substring/

Given a string s, return the longest palindromic substring in s.

A string is called a palindrome string if the reverse of that string is the same as the original string.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters. */



// s = "babad"
// s = "cbbd"
// s = "babab"


function longestPalindrome(s) {

    max_length = 0
    output_string = ""

    for(i = 0; s[i]; i++){
        for(j = 0; s[j]; j++){
            
            string_arr = s.slice(i, j + 1)

            if (string_arr == string_arr.split('').reverse().join('')){
                
                if(string_arr.length > max_length){
                    max_length = string_arr.length
                    output_string = string_arr
                }
            }
        }
    }

    console.log(output_string)
    return output_string
};

longestPalindrome(s)

