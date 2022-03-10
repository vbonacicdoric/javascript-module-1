var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";


function makemayus(text){
 return text.toUpperCase()
}

function shoutygreeting(name){
    const greeting = `hello ${name}`
    const mayusGreeting = makemayus(greeting)
    return mayusGreeting;

} 

console.log(shoutygreeting(mentor1));
console.log(shoutygreeting(mentor2));
console.log(shoutygreeting(mentor3));
console.log(shoutygreeting(mentor4));
console.log(shoutygreeting(mentor5));