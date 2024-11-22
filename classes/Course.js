class Course {
    constructor(name){
        this.name = name
        this.grades = []
    }
    getGrades(){
        return this.grades
    }
    addGrade(student, grade){
        const newGrade = {
            student: student,
            grade: grade
        }
        this.grades.push(newGrade)
    }
}
module.exports = Course