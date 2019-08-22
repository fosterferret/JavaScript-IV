// CODE here for your Lambda Classes
class Person {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
    speak () {
        return `Hello, my name is ${this.name}, I'm from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(name, age, location, specialty, favLanguage, catchPhrase) {
        super(name, age, location);
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    demo (subject) {
        return `Today we are learning about subject!`;
    }

    grade (student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }

    //stretch

    gradeStudents(student) {
        let random = (Math.floor(Math.random()*20)) * (Math.random() > 0.5 ? 1 : -1);
        student.grade += random;
        student.grade >= 100 ? student.grade = 100 : student.grade += 1;
    };
}

class Student extends Person {
    constructor(name, age, location, prevBackground, className, favSubjects, grade) {
        super(name,age, location);
        this.prevBackground = prevBackground;
        this.className = className;
        this.favSubjects = favSubjects;
        this.grade = grade;
    }

    listsSubjects() {
        this.favSubjects.forEach(function(subject) {
            return `A favorite subject is: ${subject}`;
        });
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }

    //stretch

    graduate(student) {
        if (this.grade >= 70) {
            return `You get to graduate!`
        }

        else {
            let rescoreStudent = new Instructor();
            return recoreStudent.gradeStudents(student);
        }
    }
}

class ProjectManager extends Person {
    constructor(name, age, location, gradClassName, favInstructor) {
        super(name,age, location);
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @${channel} standy times!​​​​​`;
    } 

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s on ${subject}`;
    }
}