// 1-using + operator combine your partner first and last name .
var str = "Firas" + "Mrad"
// 2-find if the number 13 is a multiple of 3 or not.
var x = 13%3; //if x = 0 then 13 is multiple of 3 otherwise it's not
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
function average(array){
    var sum = 0;
    for( var i =0; i < array.length; i++){
        sum += array[i];
    }
return sum/array.length
}
// 4-calculate your age in seconds.
function age(n){
return n*365*24*60*60;

}