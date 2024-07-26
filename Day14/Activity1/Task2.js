class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    ChangeAge(age) {
        this.age = age;
        
    }
    greet() {
        console.log(`Hello ${this.name} welcome to App your age is ${this.age}`);
    }
}

const obj = new person('Mustfa',15);

obj.ChangeAge(22)

obj.greet()