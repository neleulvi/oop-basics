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
    

    description (){
        return `Course name ${this.name}, hinded: ${this.getGrades()}`
    }
}
module.exports = Course