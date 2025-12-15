// const Hey= () => {
//     console.log("hello");
// }

// const name = "shreyan"
// const string = `hello my name is ${name}`;
// console.log(string);

// //spread operator ...
// const arr1=[1,2,3] , arr2 = [4,5,6]
// const comb1 = [...arr1,...arr2]
// const comb2 = [arr1,arr2]
// console.log(comb1)
// console.log(comb2)

// //rest operator ...
// function sum(...numbers){
//     return numbers;
// }
// let arr = sum(21,1,2,3,4,5)
// console.log(arr)


//destructuring
const person = {
    name: "shreyan",
    age: 23,
    college: "bernhardt"
}

const { name, age, college } = person;

console.log(name);  
