function Animal(name){
    this.name = name; 
}

Animal.prototype.speak = function ()  {
    console.log(`${this.name} makes a noise.`);
}

Animal.prototype.age = 5;

const dog  = new Animal("Dog");
dog.speak();


//before es6