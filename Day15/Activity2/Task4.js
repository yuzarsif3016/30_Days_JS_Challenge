function greetUser(userName){
    return function(){
        console.log(`Welcome to the closure ${userName}`);
    }
}

const greet = greetUser('Yusuf')

greet()