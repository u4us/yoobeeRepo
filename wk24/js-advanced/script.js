// Declarative functions
// function saySomething(){
//     document.write('Hello.');
// }

// Anonymous functions
// var saySomething = function(){
//     document.write('Hello.');
// }

// Arrow functions
// var saySomething = ()=>{
//     document.write('Hello.');
// }

// console.log(saySomething); //to check but not run function
// saySomething();

// write an arrow function to take in a number
// display that many stars

// var printStars = (stars)=>{
//     var temp = '';
//     for (let i = 0; i < stars; i++) {
//         temp += '*'
//     }
//     return temp;
// }
// document.write(printStars(10));

class Dog{
    constructor(name, weight){
        this.name = name;
        this.weight = weight;
    }

    // bark(){
    // arrow function notation locks the attributes of the object onto the method
    bark = () => {
        document.writeln('My name is ' + this.name + '.');
    }
}
var oDog1 = new Dog('Nina', 10);

oDog1.bark();

//first-class object
//functions can stored in a variable and passed around.
var makeNoise = oDog1.bark;
makeNoise();

// var oBoat = {
//     name: 'Titanic',
//     speed: 100,
//     honk: makeNoise
// };
// oBoat.honk();
// console.log(oBoat);