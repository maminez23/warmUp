// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
<<<<<<< HEAD
<<<<<<< HEAD
function greatestCommonDivisor(number1, number2){



}



// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.

 function sum(num1, num2){
  if(num1 < num2){
    var x = num1;
    num1 = num2;
    num2 = x
  }

  if(num1 >= 0){
    if(num2 < 0){
       if (num2 === 0){if(num1 === 0){return 0}
        return(1 + sum((num1 - 1),0))}
       return (-1 + sum(num1, num2 + 1))
    }
    else if (num2 >= 0){
    if(num2 === 0){if(num1 === 0){return 0}
        return(1 + sum((num1 - 1),0))}
    return(2 + sum((num1 - 1), (num2 - 1)))

    }
  }
  if(num1 < 0){alert("this code works only if num1 > 0")}
}²
=======

function gcd(number1, number2) {
    if ((typeof number1 !== 'number') || (typeof number1 !== 'number') || (number1 < 0) || (number2 < 0)) {
        return "Please enter two positive numbers.";
    }
    else {
        if (number2 === 0) {
            return number1;
        }
        else {
            return gcd(number2, number1 % number2);
        }
    }
}


// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without
// suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.

function sum(number1, number2) {
    if (number2 !== 0) {
        return sum(number1 + 1, number2 - 1);
    }
    return number1;
}
>>>>>>> 5376b93bff4e63df9dd0c62060f660e0e35ed9dc
=======
// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.
>>>>>>> b8a430e8ea2c4d0e1e78f81ef8a28a628ba965c6
