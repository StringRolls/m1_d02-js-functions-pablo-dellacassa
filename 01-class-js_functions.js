// Class code examples

// Function: a block of code that always returns a value

/* A function must have a 'human name' which describes what a function does
 The naming shoud have a name to be more descriptive. E.g, sumInteger(), calculatePrice(), etc */

 /* A functions always RETURN something, what returns depend of us, put a
 return clause is essential to clarify what we want to return */

// Declaration with parameters
function greetStudent(firstName, lastName) {
    console.log(`¡Hola ${firstName} ${lastName}!`);
    return 'I can finally return now';
}

// Invokation with arguments --> POSITIONAL PARAMETERS ALWAYS
greetStudent('Miguel', 'Delgado')
greetStudent('Iñigo', 'M')
greetStudent('Inés', 'García')
console.log("return value form my function", greetStudent('Sara'))

// Set a DEFAULT parameter value in case of it not being passed
function greetStudent2(firstName="Student", lastName="" ) {
    console.log(`¡Hola ${firstName} ${lastName}!`);
  }

greetStudent2("Sara");
greetStudent2();
greetStudent2("Sara", "Jones");

function isMultiple(number1, number2){
    /*
   const remainder = number1 % number2 // a number: the remainder of the division
   const result = remainder === 0 // a booelan: the result of the === comparison
   return result
   */
    return (number1 % number2 === 0) //I want to return a boolean that tell me if they are multiples
}

// Example when arrow functions (=>) are useful for short syntax
// I want to calculate the IVA (VAT) on a price and return the total

// Main "calling" function, is the one that uses the arrow funciton inside
function calculateTotal(price, VATCalculation){
    return price + VATCalculation(price)
}

calculateTotal(500, (price)=>price*0.20)
calculateTotal( 1000, (price)=>price*0.12)
