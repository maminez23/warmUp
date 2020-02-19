//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false


function isSubset(array1, array2){

    var test = true;
    var test1 = true;
    var ob = {};
    var ob2 = {};
    for(var i = 0; i < array2.length; i++){

        if (!array1.includes(array2[i])){
            test = false;
            break
        }
        else if (ob[array2[i]] === undefined){

            ob[array2[i]] = 1
        }
        else {
            ob[array2[i]] += 1;
        }
    }
    if(test === false){
        return test;
    }
    else {
           for(var i = 0; i < array1.length; i++){

               if (ob2[array1[i]] !== undefined){continue}
               else {
                 ob2[array1[i]] = 1;
                 for ( var j = i+1; j < array1.length; j++){
                   if (array1[j] === array1[i]){
                     ob2[array1[i]] += 1;

                   }
                     }
               }
           }
    }

    for( var key in ob){
        if(ob[key] !== ob2[key]){
            test1 = false;
            break
        }
    }
return (test && test1)
}
// this function check if all the elements in array2 are in array1 and then verify the occurency of an element in array2 if it's the same or less as the same element in array1
// otherwise return false
// so the second part calculate the occurence of the elements in array1 and test it with the array2
