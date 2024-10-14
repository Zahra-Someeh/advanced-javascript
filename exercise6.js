// Exercise 6
// We have an object storing the salaries of our team:

let salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130
}
// Write a code to sum all salaries and store in the variable sum. If salaries is empty, 
// then the result must be 0.

// const sum=Object.values(salaries).reduce((acc,curr)=> acc+curr,0);
let sum=0;
Object.values(salaries).forEach(value =>{
sum=sum+value;
});
console.log(sum)