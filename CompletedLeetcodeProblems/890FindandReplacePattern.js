https://leetcode.com/problems/find-and-replace-pattern/


/* Given a list of strings words and a string pattern, return a list of words[i] that match pattern. You may return the answer in any order.

A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we get the desired word.

Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.

 

Example 1:

Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
Output: ["mee","aqq"]
Explanation: "mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}. 
"ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation, since a and b map to the same letter.
Example 2:

Input: words = ["a","b","c"], pattern = "a"
Output: ["a","b","c"]
 

Constraints:

1 <= pattern.length <= 20
1 <= words.length <= 50
words[i].length == pattern.length
pattern and words[i] are lowercase English letters. */

words = ["abc","deq","mee","aqq","dkd","ccc"]
pattern = "abb"

// words = ["a","b","c"] 
// pattern = "a"

function replace(string) {

    arr_inserted_num = []
    for (let i = 0; i < string.length; i++) {

        if(!arr_inserted_num.includes(string[i])) {
            char = string[i]
            replaced_string = string.replaceAll(char, i.toString())

            string = replaced_string
            arr_inserted_num.push(i.toString())
        };


    };

    return string
}


function findAndReplacePattern(words, pattern) {

    output_array = []
    pattern = replace(pattern)

    for(let i = 0; i < words.length; i++){

        compare_string = replace(words[i])

        if(compare_string == pattern){
            output_array.push(words[i])            
        }
    }

    console.log(output_array)
    return output_array

}

findAndReplacePattern(words, pattern)
