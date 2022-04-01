// 
// You can drive in the UK at the age of 17.
// Write another function that takes a birth year and returns a 
// string Born in {year} can drive or Born in {year} can drive in {x} years
// Use the array of birth years, [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ],
//  to get an array of strings saying if these people can drive
// console.log the answers

function getAge(birthYear){
    return 2022 - birthYear
}

function getDrivingStatus(birthYear) {
    const age = getAge(birthYear)
    if (age >= 17){
        return `Born in ${birthYear} can drive`
    }else {
        const yearsToDrive = 17 - age 
        return `Born in ${birthYear} can drive in ${yearsToDrive} years`
    }
}

const birthYears = [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ]
birthYears.map(getDrivingStatus).forEach(console.log)



birthYears.forEach((age) => { 
    if (age - 2022 >= 17){
    console.log(`Born in ${age} can drive`); 
}else {
    const yearsToDrive = 17 - age 
    console.log(`Born in ${age} can drive in ${yearsToDrive} years`); 
}})