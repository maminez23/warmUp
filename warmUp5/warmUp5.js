// 1-Choose the correct comparison operator to display "true", when: 5 is less than 7.
<<<<<<< HEAD

5 === 7; // the operator is :" // "


=======
// The correct comparison operator to display "true", when: 5 is less than 7 is: <:
5 < 7;
>>>>>>> 5376b93bff4e63df9dd0c62060f660e0e35ed9dc
//2- Write a function named helloWorld that:
//takes 1 argument, a language code (e.g. "fr", "es", "en")
//returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
//ex: helloWorld('fr') ==> 'Bonjour tout le monde'
//    helloWorld('es') ==> 'Hola, Mundo'
//    helloWorld('') ==> 'Hello, World'

<<<<<<< HEAD
function helloWorld(language) {
       if (language === 'fr'){
          return "Bonjour tout le monde";
       }

       else if (language === 'es') {
          return "Hola, Mundo"
       }

       return "Hello,World"
=======

// This function returns the traduction of the phrase: 'Hello word' in Frensh ('fr'), Spanish ('es'), and in English ('en'). It is by default is English
function helloWorld(languageCode) {
    if (languageCode === '' || languageCode === 'en') {
        return 'Hello, World';
    }
    else if (languageCode === 'fr') {
        return 'Bonjour tout le monde';
    }
    else if (languageCode === 'es') {
        return 'Hola, Mundo';
    }
    else {
        return "Language not available."
    }
>>>>>>> 5376b93bff4e63df9dd0c62060f660e0e35ed9dc
}



//3- write a function to Reverse an array without use array.reverse() method:
// ex: reverseArray([1,2,3]) ==> [3,2,1]

function reverseArray(array) {
<<<<<<< HEAD
   var arr=[];
   for (var i=0; i<array.length; i++) {
       arr.unshift(array[i])
   } // this for loop will add every array[i] before array[i-1] as the unshift add the value in the beginning of the arr

   return arr
}""
=======
    var arr = [];
    for (var i = array.length - 1; i >= 0; i--) {
        arr.push(array[i]);
    }
    return arr;
}
>>>>>>> 5376b93bff4e63df9dd0c62060f660e0e35ed9dc
