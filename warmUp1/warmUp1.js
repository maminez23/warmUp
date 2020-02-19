// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here

<<<<<<< HEAD
<<<<<<< HEAD
x = "belgacem" + "zabbes";
console.log(x);

function div(x){
if (x%3===0){
return(x +"is multiple of 3")
}
return(x +"is not multiple of 13")
}


var arr=[13,14,13,15,16,17,19,13,16,15];
for (var idx in arr){
        m+=arr[idx]
        }
        return m/arr.length;
        }


function indexOf(arr,mon){
    var x;
for (var idx in arr){
if arr[idx]===arr1[0]{
return idx+1
}
}

function ageInSeconds(birth){
alert("put your birthday in this format jan/01/2000")
var x = Date();
var arr1=[];
var arr2=[];
arr1=x.split(' ');
arr2= birth.split('/')
var month=['Jan','Feb','Mar','Apr','Mai','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
indexOf(arr,arr1[0]);

}




=======
>>>>>>> 01c877036a1e0d6c8a3d36f209116fb35292c680
=======
//1
function name(firstName, lastName) {
	return firstName + ' ' + lastName;
}
//'Siwar'+' Hkimi';
>>>>>>> 5376b93bff4e63df9dd0c62060f660e0e35ed9dc

//2
function multipleOrNot(x, y) {
	if (x % y === 0) {
		return x + " is a multiple of " + y + ".";
	}
	else {
		return x + " is not a multiple of " + y + ".";
	}
}
//13%3===1 different from 0 so 13 isn't a multiple of 3

//3
function average(arr) {
	var i = 0;
	var average = 0;
	while (i < arr.length) {
		average = average + arr[i]
		i++
	}
	return average / arr.length
}

//average=(13+14+13+15+16+17+19+13+16+15)/10;

//4
// function ageInSeconds(day,month,year){
// var ageYear=0;
// var ageMonth=0;
// var ageDay=0;
// ageYear=(2020-year)*365*24*60;
// var array=['January','February','March','April','May','June','July','August','Septembre','October','November','December']
// if(month==='January'||month==='March'||month==='May'||month==='July'||month==='Septembre'||month==='Novembre'){
// 	ageMonth=31*24*60;
// }	
// else if(month==='April'||month==='June'||month==='August'||month==='October'||month==='December'){
// 	ageMonth=30*24*60;
// }
// else {
// 	ageMonth=28*24*60;
// }
// 
// }
//age=26*365*24*60
=======

>>>>>>> c07720253c870302a2825e47eeb180a082689769
