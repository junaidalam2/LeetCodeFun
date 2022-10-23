/* 

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters. */

// strs = ["flower","flow","flight"]
//strs = ["dog","racecar","car"]
strs = ["dog walker","dog walker","dog walking"]


function longestCommonPrefix (strs) {
    
    let outter_min_index = 200 // max in constraints above
    for(i = 1; strs[i]; i++){

        let inner_min_index
        for(j = 0; strs[i][j]; j++){
            if(strs[0][j] != strs[i][j]){

                inner_min_index = j
                
            }

            if(outter_min_index > inner_min_index){
                outter_min_index = inner_min_index
            }
        }
    }
    
    output = (strs[0]).slice(0,outter_min_index)
    console.log(output)

};

longestCommonPrefix (strs)
