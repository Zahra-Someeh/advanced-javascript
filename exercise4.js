// Exercise 4
// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

const user={
    firstName:'John',
    surname:'Smith'
}
user.firstName='Pete'
delete user.firstName;
//let newUser={...user, firstname:'Pete'}

console.log(user)
