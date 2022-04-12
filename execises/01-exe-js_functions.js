// Practice

/**
 * Create a function doTheMath(num1, sign, num2)
 * that will return the result of the mathematical operations of num1 operator num2.
 * Allowed operators (signs) are +, -, *, /, %, **.
 * Hint: you can use the switch statement.
 */

function doTheMath(num1, sign, num2){
    switch(sign){
        case '+':
            return num1 + num2; // a return breaks the code, its not neecessary to add break
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if(num2 === 0){
                return 'Division by zero not allowed'
            } else {
                return num1 / num2;
            }
        case '%':
            return num1 % num2
        case '**':
            return num1 ** num2
        default: 
        return 'Operation unknown!'
    }
}

console.log("Let's do the math: ", doTheMath(2, "+", 3));

/**
 * Create a function named isNameOddOrEven() that accepts a string as a parameter.
 * The function should return whether a received string has an odd or even number of letters.
 * The expected return should be in the following format - string: "has an even/odd number of letters".
 */

function isNameOddOrEven(){
    // your code here ...
}


/**
 * Refactor both the above functions to be arrow functions.
 */


