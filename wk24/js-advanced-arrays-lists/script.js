// #################### map
var arrayDogs = [
    {
        name:'Kina',
        weight: 10
    },
    {
        name:'Gizmo',
        weight: 1
    },
    {
        name:'Dulux',
        weight: 20
    }
];

var feedDogs = arrayDogs.map(function(dog){
    dog.weight += 0.1
    return dog;
});

console.log(feedDogs);

//ex

var arrayNums = [3,2,4,6,4];

// var doubleNums = arrayNums.map(function(num){
//     num *= 2
//     return num;
// });

//only if 1 parameter
var doubleNums = arrayNums.map(e => e * 2);

console.log(doubleNums);

// ###################### filter
var arrayDogs2 = [
    {
        name:'Kina',
        weight: 10
    },
    {
        name:'Gizmo',
        weight: 1
    },
    {
        name:'Dulux',
        weight: 20
    },
    {
        name:'Bob',
        weight: 4
    }
];

var filterHeavy = arrayDogs2.filter(function(dog){
    return dog.weight >= 5;
});

console.log(filterHeavy);

//ex

var arrayNums2 = [3,2,4,6,7];

// var aSmallNums = arrayNums2.filter(function(num){
//     return num <= 5;
// });

var aSmallNums = arrayNums2.filter(num => num <= 5);

console.log(aSmallNums);