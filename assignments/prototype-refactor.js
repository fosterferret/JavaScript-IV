/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
//Refactored code - Task 1
class PersonRF {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.stomach = [];
    }
    greet() {
        return `Hellow my name is ${this.name} and I'm ${this.age} years old!`;
    }

    eat(edible) {
        this.stomach.push(edible);
    }

    poop() {
        this.stomach = [];
    };
}


//Refactored code - Task 2
class Car {
    constructor(model, make) {
        this.model = model;
        this.make = make;
        this.odometer = 0;
        carGood = true;
    }

    drive(distance) {
        if (carGood === true) {
            return this.odometer += distance;
        }
        else return `I crashed my car at ${this.odometer} miles!`;
    }

    crash() {
        carGood = false;
    }

    repair() {
        carGood = true;
    }
}

// Refactored code - Task 3
class Baby extends PersonRF {
    constructor(name, age, favoriteToy) {
        super(name, age);
        this.favoriteToy = favoriteToy;
    }
    playWithToy () {
        return `I love playing with my ${this.favoriteToy}!`;
    }
}

/*Test
var newboy = new Baby ("fdff", 34, "dsss") 
console.log(newboy.playWithToy())*/

// Refactored code - Task 4
class Room {
    constructor(roomNumber, numOfOccupants) {
        this.roomNumber = roomNumber;
        this.numOfOccupants = numOfOccupants;
        this.isStdTemperature = true;
    }

    roomAnnouncer () {
        if (this.isStdTemperature === true) {
            return `Room ${this.roomNumber}, no need to put on your jackets - to all ${this.numOfOccupants} of you.`;
        }
        else return `Room ${this.roomNumber}, please put on your jackets - to all ${this.numOfOccupants} of you.`
    }

    crankUpAC() {
        this.isStdTemperature = false;
    }

    repair() {
        this.isStdTemperature = true;
    }
}