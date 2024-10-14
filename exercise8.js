// Exercise 8
// Rewrite if..else using multiple ternary operators '?'.

// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }


// const login='Employee'
// const login='Director'
const login=' '
let message= login =='Employee' ? 'Hello' : login=='Director' ? 'Greeting' : login==' ' ? 'No login' : ' ';
console.log(message)
