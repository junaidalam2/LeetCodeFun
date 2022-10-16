

/* 
https://leetcode.com/problems/reverse-integer/


Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-231 <= x <= 231 - 1 */


// x = 123
// x = -123
// x = 120
x = 2**31


var reverse1 = function(x) {

    if(x > 2**31 - 1 || x < (-2)**31){
        return 0
    }

    num = Math.abs(x)
    num_str = num.toString(x)
    arr_num_str = num_str.split("")
    arr_num_str + arr_num_str.reverse()

    if (x < 0) {
        num_str_arr.splice(0, 0, "")
    }


    num = arr_num_str.join("")
    num = parseInt(num)
    console.log(num)

}


var reverse = function(x) {
  
    if(x > 2**31 -1 || x < (-2)**31){
        return 0
    }
    
    num = Math.abs(x)    
    num_str = num.toString()
    num_str_arr = num_str.split("")
    num_str_arr = num_str_arr.reverse()

    if (x < 0) {
        num_str_arr.splice(0, 0, "-")
    }

    num = num_str_arr.join("")


    console.log(parseInt(num))
    return parseInt(num)

};

reverse(x)

