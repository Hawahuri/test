//after es6 class was introduced in javascript

class Animal{
    constructor(name){
        this.name =  name;
    }

     speak() {
        console.log(`${this.name} makes a noise`);
    }
}

let dog = new Animal("Dog")
dog.speak();