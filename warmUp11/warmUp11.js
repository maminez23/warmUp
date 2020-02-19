/*
1. create a data model to represent your classmates
    • think of different attributes of your classmates? what do all of them have ?
    • create a factory function.
    • create an array to hold the classmates that you created and what you created to it .
    • write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
    • write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
    • calculate the number of male friends that your class have by writing a function called nbOfMale.
    • Write a function searchMates that, given a query and an array of Mates,
      searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.
*/

<<<<<<< HEAD
function classMates(fullName, sex, age){
   return {
   FullName: fullName,
   Sex:sex,
   Age: age
   };
}

var person1 = classMates(Abdulhadi Addeeb, male, 30);
var person2 = classMates(Amine Hassine, male, 41);
var person3 = classMates(Nouha Chorfi, female, 28);
var person4 = classMates(Omar Yakoubi, male, 18);
var person5 = classMates(Firas Mrad, male, 22);
var person6 = classMates(Siwar Hkimi, female, 27);

var acc = [person1, person2, person3, person4, person5, person6];

function displayFriend(name){
    for (var i =0; i < acc.length; i++){
       if ( acc[i].FullName === name){
        console.log(acc[i]);
        }
    }
}

function addFriend(fullName, sex, age){
    acc.push(classMates(fullName, sex, age));
}

function nbOfMale(array){
    var nbo = 0;
    for (var i = 0; i < array.length; i++){
        if( array[i].Sex === "male"){
          nbo += 1;
        }
    }
}

function searchMates(query, array){
      for (var i = 0; i < array.length; i++){
          for (var key in array[i]){
      }

// I did't finish it because I did't understand what type of query I have to take in consideration



}
=======
function myClassMates(name, hair, gender, age, glasses) {
  return {
    name: name,
    hair: hair,
    gender: gender,
    age: age,
    glasses: glasses
  };
}

var houssem1 = myClassMates("Houssem", "Black", "Male", "30", true);
var houssem2 = myClassMates("Houssem", "Black", "Male", "19", false);
var nouha = myClassMates("Nouha", "Black", "Female", "33", true);
var taha = myClassMates("Taha", "Black", "Male", "40", true);
var souha = myClassMates("Souha", "Red", "Female", "23", false);
var classMates = [houssem1, houssem2, nouha, taha, souha];

function displayFriend(mate) {
  if (mate.gender === "Male") {
    if (mate.glasses === true) {
      return "My mate " + mate.name + " has a " + mate.hair + " hair " + " and he is " + mate.age + " years old.\n He also wears glasses.";
    }
    else {
      return "My mate " + mate.name + " has a " + mate.hair + " hair " + " and he is " + mate.age + " years old.\n He doesn't wear glasses.";
    }
  }
  else {
    if (mate.glasses === true) {
      return "My mate " + mate.name + " has a " + mate.hair + " hair " + " and she is " + mate.age + " years old.\n She also wears glasses.";
    }
    else {
      return "My mate " + mate.name + " has a " + mate.hair + " hair " + " and she is " + mate.age + " years old.\n She doesn't wear glasses.";
    }
  }
}

function addFriend(mate) {
  var arr = classMates.push(mate);

  return arr;
}

function nbOfMale(array) {
  var counter = 0;

  for (var i = 0; i < array.length; i++) {
    if (array[i].gender === 'Male') {
      counter = counter + 1;
    }
  }
  return counter;
}


function searchMates(query, array) {
  var arr = [];
  var str = "";

  for (var i = 0; i < array.length; i++) {
    arr = Object.keys(array[i]);
    for (var j = 0; j < arr.length; j++) {
      if ((arr[j].query !== undefined) && (arr[j].query === query)) {
        str = str + array[i]["name"] + "\n";
      }
    }
  }
  return str + "\n the people above match together.";
}

// I didn't verify the functions in the console because of the time so I think there exist plenty mistakes :'( especially the last one
>>>>>>> 5376b93bff4e63df9dd0c62060f660e0e35ed9dc
