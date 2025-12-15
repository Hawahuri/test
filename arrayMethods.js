// //immutable array methods
// Map()
//foreach()
// filter 
// slice 
// concat 
// reduce 
// flat

//mutable
//push pop shift unshift 

const nums = [1,2,3];
const twice = nums.map(n=>n*2);
console.log(twice);

const even =  nums.filter(n=>n%2===0);
console.log(even);

const odd = nums.filter(function(n){
    if(n%2!==0){
        return n;
    }
})
console.log(odd);

const sum = nums.reduce((acc,n)=>acc+n,0);
console.log(sum);


//find and find index
const users = [
    {id:1},
    {id:2}
];
console.log(users.find(u=>u.id===2));
console.log(users.findIndex(u=>u.id===2));

//some()->one match and every()->every match for form validation and checking permissions

console.log(nums.some(n=>n>19),
nums.every(n=>n>0))

//push->add at the end
nums.push(9);
console.log(nums);
//pop->remove the end item
nums.pop();
console.log(nums);

//shift remove the start
nums.shift()
console.log(nums);

//unshift-->add at front
nums.unshift(99);
console.log(nums);
