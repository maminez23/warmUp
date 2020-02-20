// 1-Write a function that takes a string as an input and returns the reverse of each letter

// reverse function for every letter from the first to the last index 'i' adds the element at first in result after the 'j' which decrement with the while loop
function reverse(str){
    var result = '';
    var i = 0;
    var j = str.length - 1;
    while(i < str.length){
       result = j + str[i] + result ;
       i++ ;
       j-- ;
    }
    return result;

}

//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"


// 2-write a function that takes array of strings and returns an array of the strings that have the same length
<<<<<<< HEAD
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]

<<<<<<< HEAD
function sameLength(array){
    var result = [];
    for(var i = 0; i < array.length; i++){
      var acc =[];
      acc.push(array[i]);
      for (var j = i+1; j < array.length; j++){

        if(array[i].length == array[j].length){
          acc.push(array[j]);
          array.splice(j, 1);
          console.log(array)
        }
      }
      if (acc.length > 1){
        result.push(acc);
      }
    }
return result;

}
// same length function loop through an array with the index 'i'. at every index another loop with 'j' will loop through the array from i+1 to the end and search for elements with the samelength
// once it find an element it push it to an accumulator acc wich will be added to the result and delete the element so that with the next array[i] won't take in consideration again  and redo the same in the index i+1







=======
function sameLength(arrayOfStrings) {
    var arraySameLength = [];

    for (var i = 0; i < arrayOfStrings.length; i++) {
        if (arrayOfStrings[i].length === arrayOfStrings[i + 1].length) {
            arraySameLength.push(arrayOfStrings[i], arrayOfStrings[i + 1]);
        }
    }
    return arraySameLength;
}
>>>>>>> 5376b93bff4e63df9dd0c62060f660e0e35ed9dc
=======
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]
>>>>>>> b8a430e8ea2c4d0e1e78f81ef8a28a628ba965c6
