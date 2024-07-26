class person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello ${this.name} welcome to App your age is ${this.age}`);
    }
}

const obj = new person("Rambo",55);
obj.greet();