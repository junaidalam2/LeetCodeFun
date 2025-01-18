
x = 11;

function isPalindrome(x) {


    if (x.toString().length < 2) return false;

    //let numObj = {};
    let xString = x.toString()
    console.log(xString)
    let halfXLen = xString.length / 2;

    console.log(halfXLen)
    if (halfXLen % 2 != 0) {
        console.log(halfXLen % 2, halfXLen % 2 != 0)
        halfXLen = halfXLen - halfXLen % 2;
        halfXLen = Math.max(halfXLen, 1)
    }

    console.log(halfXLen)


    for (let i = 0; i < halfXLen; i++) {

        console.log(xString[i], xString[x.length - i])
        if (xString[i] != xString[x.length - i]) return false;

    }

    return true;


}


console.log(isPalindrome(x));