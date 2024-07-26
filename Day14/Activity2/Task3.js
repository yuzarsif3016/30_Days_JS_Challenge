class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello ${this.name}, welcome to the App. Your age is ${this.age}.`);
    }
}

class Student extends Person {
    constructor(name, age, sId) {
        super(name, age);
        this.sId = sId;
    }

    getSId() {
        console.log(`Your Student Id is ${this.sId}.`);
    }
}

const s1 = new Student('Yusuf', 27, 101);
s1.greet();  // Output: Hello Yusuf, welcome to the App. Your age is 27.
s1.getSId(); // Output: Your Student Id is 101.
