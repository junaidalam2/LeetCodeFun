

// https://leetcode.com/problems/evaluate-reverse-polish-notation/


/*
Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, and /. Each operand may be an integer or another expression.

Note that division between two integers should truncate toward zero.

It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.
*/


// tokens = ["2","1","+","3","*"]  
// Explanation: ((2 + 1) * 3) = 9
// tokens = ["4","13","5","/","+"]
// Explanation: (4 + (13 / 5)) = 6
tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
/*
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
*/


var evalRPN = function(tokens) {

    for(i = 2; tokens[i]; i++){
        
        if(isNaN(parseInt(tokens[i]))) {

            if(tokens[i] == "/") {
                
                result =(parseInt(tokens[i-2]) - parseInt(tokens[i-2]) % parseInt(tokens[i-1])) / parseInt(tokens[i-1]) 
                
            } else {
                
                result = [tokens[i-2], tokens[i], tokens[i-1]].join('')
                result = eval(result)

            }

            tokens[i-2] = result.toString()
            tokens.splice(i-1, 2)
            i = i -2
        
        }
    } 

    console.log(parseInt(tokens[0]))

    return parseInt(tokens[0])

};

evalRPN(tokens)

