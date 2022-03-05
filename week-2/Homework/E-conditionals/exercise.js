/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

var name = "Daniel";
var danielsRole = "mentor";

if(danielsRole === "mentor" || danielsRole === "students" ){
  console.log(`Hi, i'm $(name) i'm a $(danielsrole) `)
}

/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/
