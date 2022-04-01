const arrayClassSpanish = ['Alejandro','Carlos','Cristiane','Angel']
const arrayClassEnglish = ['gloria', 'Juan','Maria','Alisa']

const arrayTotal = arrayClassSpanish.concat(arrayClassEnglish).sort();

function studentIsInClass(array,student){
    let studentIndex = array.indexOf(student);

    if (!array.includes(student)){
        return `${student} is not at the class with ${array.join(", ")}`;
    }
    array.splice(studentIndex, 1)
    console.log(array);
  return `${student} is at the class with ${array.join(", ")}`;
}
 console.log(studentIsInClass(arrayTotal,"Alejandro"))