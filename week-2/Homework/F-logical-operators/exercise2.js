/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.
*/

function isNegative(number) {
 return number < 0 
}
function isBetween5and10(number){
  return number >= 5 && number <= 10
}

// como el ejercicio no especifica a que se refiere con corto utilice el sgt nombre corto//
function isShortName(personName) {
  const nameLength = personName.length;
  return nameLength <= 6 
}

function startsWithD(personName) {
  const firstCharacter = personName[0];
  return firstCharacter === "D"
}


/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log("Is -10 is a negative number?", isNegative(-10));
console.log("Is 5 a negative number?", isNegative(5));
console.log("Is 10 in the range 5-10?", isBetween5and10(10));
console.log("Is Daniel a short name?", isShortName("Daniel"));
console.log("Does Daniel start with 'D'?", startsWithD("Daniel"));

/* 
  EXPECTED RESULT
  ---------------
  Is -10 is a negative number? true
  Is 5 a negative number? false
  Is 10 in the range 5-10? true
  Is Daniel a short name? true
  Does Daniel start with 'D'? true
*/
