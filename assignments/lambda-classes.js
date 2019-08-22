// CODE here for your Lambda Classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
    speak () {
        return `Hello, my name is ${this.name}, I'm from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(name, age, specialty, favLanguage, catchPhrase) {
        super(name, age);
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
}

class Student extends Person {
    constructor(name, age, prevBackground, className, favSubjects) {
        super(name,age);
        this.prevBackground = prevBackground;
        this.className = className;
        this.favSubjects = favSubjects;
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
}

class ProjectManager extends Person {
    constructor(name, age, gradClassName, favInstructor) {
        super(name,age);
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