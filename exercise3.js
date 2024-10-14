// Exercise 3
// Look at the code. What will be the result of the call at the last line and why?

let phrase = "Hello"

if (true) {
  let user = "John";
  function sayHi() {
    console.log(`${phrase}, ${user}`)
  }
}

sayHi()

//output:
//Hello,John
//because sayhi() is calling sayhi function and sayhi()will be execute.