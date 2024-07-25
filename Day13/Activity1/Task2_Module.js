// userModule.js
const user = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    greet() {
      console.log(`Hello, my name is ${this.name}.`);
    },
    updateEmail(newEmail) {
      this.email = newEmail;
      console.log(`My new email is ${this.email}.`);
    }
  };
  
  module.exports = user;
  