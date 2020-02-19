<<<<<<< HEAD
 // 1-implement the function mult that takes a single parameter n, and computes the multiplication of all integers up to n 
 //starting from 0, e.g.:
 mult(3); // => 6
 mult(4); // => 24
 function mult(n) {
   var p = 1;
   for (var i = 1; i <= n; i++){
     p = p * i;
   }
 return p;
=======
// 1-implement the function mult that takes a single parameter n, and computes the multiplication of all integers up to n 
//starting from 0, e.g.:
mult(3); // => 6
mult(4); // => 24
function mult(n) {
    var multp = 1;

    while (n >= 1) {
        multp = multp * n;
        n = n - 1;
    }
    return multp;
>>>>>>> 5376b93bff4e63df9dd0c62060f660e0e35ed9dc
}

// 2- Use a while loop to build a single string with the numbers 1 through n
// separated by the number next to the current number. 
//Have it return the new string.
// eg= 1 2 2 3 3 4 4 5 5 6 6 ...

<<<<<<< HEAD
function string(n){
  var str = "1";
  var i = 2;
  while(i < n){
    str = str + " "+ i + " "+i;
    i ++;

  }
  return str + " "+n+" "+n;
=======
function stringNumbers(n) {
    var str = "1";
    var x = 2;
    while (x <= n) {
        str = str + " " + x + " " + x;
        x = x + 1;
    }
    return str
>>>>>>> 5376b93bff4e63df9dd0c62060f660e0e35ed9dc
}