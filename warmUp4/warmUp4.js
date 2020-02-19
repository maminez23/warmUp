// 1-Define a function called myTrueFun that returns true whenever its called.
<<<<<<< HEAD
function myTrueFun(){
      return true}

// 2-complete the following color function in which returns true if type of the input is string and returns
// 	false otherwise.

	function typeFunc(value){
          if (typeof value === 'string'){return true}
          else{return false}
=======
function myTrueFun() {
	return true;
}
// 2-complete the following color function in which returns true if type of the input is string and returns
// 	false otherwise.

function typeFunc(value) {
	if (typeof value === 'string') {
		return myTrueFun();
>>>>>>> 5376b93bff4e63df9dd0c62060f660e0e35ed9dc
	}
	return false;

}
// 3-Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not.
<<<<<<< HEAD
function Prime (x){
    if (x===1){
             return false}
    else if(x===2){
             return true }
    else {
         for (var i=2; i<x/2; i++){
               if (x%i === 0){
                    return false}
                    }
         return true}
    }


}


// 4-write a function that accepts two numbers as parameters and returns true if the two parameters have the same value , false if not
function isSame(x,y){
    if( typeof x !== 'number' || typeof y !== 'number' ){return alert('the inputs should be numbers') }
    if (x==y){return true}
    return false
=======
function prime(number) {
	if (typeof number !== 'number') {
		return "Please enter a number.";
	}
	else {
		if (number < 2) {
			return "Not a prime number.";
		}
		else if (number === 2) {
			return "2 is a prime number"
		}
		else {
			for (var i = 2; i < number; i++) {
				if (number % i === 0) {
					return "Not a prime number.";
				}
				else {
					return "Yey it is a prime number";
				}
			}
		}
	}
}
// 4-write a function that accepts two numbers as parameters and returns true if the two parameters have the same value , false if not
function sameValue(num1, num2) {
	if ((typeof num1 !== 'number') || (typeof num1 !== 'number')) {
		return "Please enter two numbers.";
	}
	else {
		if (num1 === num2) {
			return myTrueFun();
		}
		return !(myTrueFun());
	}
>>>>>>> 5376b93bff4e63df9dd0c62060f660e0e35ed9dc
}