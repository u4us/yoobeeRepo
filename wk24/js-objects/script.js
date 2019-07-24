// ############################################### 1.create a straight object

var oDog1 = {
    name: 'Taro',
    weight: 10,
    eat: function(){
        this.weight += this.weight*0.01;
    },
    bark: function(){
        document.write('My name is ' + this.name);
    }
};

// var oDog2 = {
//     name: 'Nina',
//     weight: 10,
//     eat: function(){
//         this.weight += this.weight*0.01;
//     },
//     bark: function(){
//         document.write('My name is ' + this.name);
//     }
// };

// var oDog3 = {
//     name: 'Taro',
//     weight: 20,
//     eat: function(){
//         this.weight += this.weight*0.01;
//     },
//     bark: function(){
//         document.write('My name is ' + this.name);
//     }
// };

oDog1.eat();
oDog1.bark();
console.log(oDog1);

// ########################################### 2.Classical OOP

class Dog{
    constructor(name, weight){
        this.name = name;
        this.weight = weight;
        this.friends = [];
    }
    eat(){
        this.weight += this.weight*0.01;
    }
    bark(){
        document.writeln('My name is ' + this.name + '.');
    }
    like(oDog){
        this.friends.push(oDog);
    }
    describeFeelings(){
        document.writeln('I have ' + this.friends.length + 'friend(s).');
        if(this.friends.length<2){
            document.writeln(this.name + ' feels lonely.');
        }else{
            document.write(this.name + ' feels loved.');
        }
    }
}

var oDog2 = new Dog('Nina', 10);
var oDog3 = new Dog('Pedro', 20);

// decoration
// oDog2.talents = 'fly';

oDog2.like(oDog3);
oDog3.like(oDog2);

console.log(oDog2.friends[0].name);
oDog2.describeFeelings();
console.log(oDog3);

//inherit from dog

class Cat extends Dog{
    constructor(name, weight, color){
        super(name, weight);
        this._color = color;
    }
    
    climb(){
        this.weight -= 1;
    }
    meow(){
        document.write('<br>' + 'My name is ' + this.name + '. I am ' + this.color + '.');
    }

    get color(){
        return this._color;
    }

    set color(newColor){
        this._color = newColor;
    }
}

var oCat1 = new Cat('Whiskers', 15, "red");
oCat1.eat();
oCat1.climb();
oCat1.meow();

console.log(oCat1.color);
oCat1.color = 'blue';
console.log(oCat1.color);
console.log(oCat1);
