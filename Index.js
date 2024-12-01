const Person = require('./classes/Person')
const Student = require('./classes/Student')
const Course = require('./classes/Course')
const School = require('./classes/School')

const school = new School("Awesome School")
//console.log(school)

const student1 = new Student("John Smith")
student1.setDateOfBirth(1995)
school.addStudent(student1)
console.log(student1)

const student2 = new Student("Mary Lee")
student2.setDateOfBirth(2000)
school.addStudent(student2)
//console.log(student2)

const student3 = new Student("Jon Doe")
student3.setDateOfBirth(2001)
school.addStudent(student3)
//console.log(student3)

//we cannot add one student twice
//school.addStudent(student1)

//console.log(school.getStudents().length)  // 2


const course1 = new Course("Math")
const course2 = new Course("Physics")
const course3 = new Course("Bio")

school.addCourse(course1)
school.addCourse(course2)
school.addCourse(course3)

//we cannot add one course twice
school.addCourse(course1)

console.log(school.getCourses().length) // 3
console.log(school.getCourses())

school.addStudentGrade(student1, course1, 4)
school.addStudentGrade(student1, course2, 5)
school.addStudentGrade(student1, course3, 3)
school.addStudentGrade(student2, course1, 5)
school.addStudentGrade(student2, course2, 1)
school.addStudentGrade(student2, course3, 5)
school.addStudentGrade(student3, course1, 3)
school.addStudentGrade(student3, course2, 2)
school.addStudentGrade(student3, course3, 1)

//cannot add grades to the student who is not in the school


//console.log(student3.getGrades().length) // 0

//school.addStudent(student3)


console.log(student1.getGrades())
console.log(student2.getGrades())
//console.log(student3.getGrades().length) // 2


//console.log(course1.getGrades())  
//console.log(course2.getGrades()) 
//console.log(course3.getGrades()) 

//console.log("Students ordered by average grade:")
//console.log("Student - avg grade")
//console.log("-".repeat(30))
//console.log(school.getStudentsOrderedByAverageGrade())
//console.log("-".repeat(30))
//school.getStudentsOrderedByAverageGrade().forEach((student) => {
//    console.log(student.name, student.getAverageGrade())
//})
//console.log() see andis tühja rea
//console.log("Course average grades")
school.getCourses().forEach((course) => {
    console.log(course.name, course.getAverageGrade())
})
