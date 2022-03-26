function studentsName(students) {
   
    for (let studentsList = 0; studentsList < students.lenght; studentsList++) {
        const student = students[studentsList];
        console.log(student);
    }
}

studentsName(["valeria", "Juan","Carla","Gabriela","Paula"]);