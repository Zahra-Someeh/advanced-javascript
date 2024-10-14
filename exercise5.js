// Is it possible to change an object declared with const, how do you think and why?

const user = {
  name: "John"
}

// does it work?
// user.name = "Pete"
const newUser={...user,name:"Pete"}


console.log(newUser)