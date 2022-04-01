const array = ["Diego","Carlos","Cristiane","Valeria", "Alejandro","Jorgelina","Linda","Javier","Ratel","Joao","Victor","Angel","Laeken","Ananda","Vanessa"]
console.log(`Estas son las personas en la sala de Zoom ${array.sort()}`);
console.log(`En la sala de Zoom hay ${array.length} personas`);

array.unshift("Juan")
array.push("Sofia")

console.log(`En la clase hay ${array.length} personas`);
const first = array[0];
const last = array[array.length -1]

console.log(`Los nuevos nombres son ${first} y ${last}`);