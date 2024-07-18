const repeatFunction = (func, times) => {
    for (let i = 0; i < times; i++) {
      func();
    }
  };
  
  // Example usage:
  const sayHello = () => console.log("Hello!");
  
repeatFunction(sayHello, 3);

  