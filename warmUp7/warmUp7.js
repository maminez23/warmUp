//1. Write a JavaScript function to check whether an `input` is an array or not
// ex isArray([1,2])=>true
//    isArray(5)=>false
<<<<<<< HEAD
<<<<<<< HEAD

 function isArray(array){

     if (Array.isArray(array)){return true;}
     return false;
 }


//2-Write a JavaScript function to get the first n element of an array.
//ex  first([1,2,3],1)=>[1]
//    first([1,2,3,4]2)=>[1,2]

function first(array, n){

    var output = [];
    for (var i = 0; i < n; i++){
       output.push(array[i])    ;
    }
    return output;
}


=======
function isArray(input) {
    if (Array.isArray(input)) {
        return true;
    }
    else {
        return false;
    }
}
//2-Write a JavaScript function to get the first n element of an array.
//ex  first([1,2,3],1)=>[1]
//    first([1,2,3,4]2)=>[1,2]
function first(array, n) {
    var arr = [];
    if (n >= array.length) {
        arr = array;
    }
    else if (n < 0) {
        return "Please enter a positif number"
    }
    else {
        for (var i = 0; i < n; i++) {
            arr.push(array[i]);
        }
    }
    return arr;
}
>>>>>>> 5376b93bff4e63df9dd0c62060f660e0e35ed9dc
=======

//2-Write a JavaScript function to get the first n element of an array.
//ex  first([1,2,3],1)=>[1]
//    first([1,2,3,4]2)=>[1,2]

>>>>>>> b8a430e8ea2c4d0e1e78f81ef8a28a628ba965c6
//3- Write a JavaScript function to convert an object into a list of `[key, value]` pairs
//ex: convert({name:'ahmed',age:20})=>[['name','ahmed'],['age', 20]]

function convert(object){
    var result=[];
    for (var key in object){
      result.push([key, object[key]]);
    }
return result
}

