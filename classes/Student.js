const Person = require('./Person')
class Student extends Person {
    constructor(name){
        super(name)
        this.id = null
        this.grades = []
    }
    setId(id){
        if(this.id === null){
            this.id = id
        }
    }
    getId(){
        return this.id
    }
    getGrades(){
        return this.grades
    }
    addGrade(course, grade){
        const newGrade = {
            course:course,
            grade: grade
        }
        this.grades.push(newGrade)
    }
    getAverageGrade(){        
        if(this.grades.length === 0) {
            return -1
        } else {
        // Sum all the grades
        let sum = this.grades.reduce((acc, currentValue) => acc + currentValue.grade, 0);
        // Return the average grade
        return sum / this.grades.length;
        }
            
        } 
    description(){
        return `Student ${this.name}, id: ${this.getIf}, hinded: ${this.getGrades()}`
    }
}
module.exports = Student
