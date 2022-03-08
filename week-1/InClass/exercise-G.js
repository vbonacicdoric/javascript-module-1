const numberOfStudents = 15 

const numberOfMentors = 8;

const totalNumberOfClass = numberOfStudents + numberOfMentors;

const percentageStudents = Math.round((100 * numberOfStudents)/totalNumberOfClass);

const percentageMentors = Math.round((100 * numberOfMentors)/totalNumberOfClass);

console.log("Percentage Students: "+ percentageStudents + "%" );

console.log(`Percentage Mentors: ${percentageMentors}%`);