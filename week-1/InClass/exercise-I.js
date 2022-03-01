function returnYear(edad){
return 2022 - edad 
}

returnYear (27)

console.log(returnYear(27));
console.log(returnYear(31));

function nombreYYear(name,edad){
return `my name is ${name} I born in ${returnYear(edad)}` 
}

console.log(nombreYYear("Valeria", "31")); 