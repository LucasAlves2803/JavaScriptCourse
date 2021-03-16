console.log('Hello');
// alert('eii!');  gera um alerta na página

/*
console.log(someNumber); 
var age = prompt("What is your age?");
console.log(age);
document.getElementById('someText').innerHTML = age;  
Adicionei um texto no interior da tag que tem o id 'someText'
 ======== FUNCTIONS ========

 function greeting(){
     var name = prompt("What is your name?");
     var result = "Hello " + name;
     console.log(result);    
}

// function call
greeting()

function greeting(YourName){
    var result = "Hello " + YourName;
    console.log(result);    
}

var name = prompt("What is your name?");
// function call
greeting(name);

/*var sum = 0;
while (sum < 100){
    sum++;
    console.log(sum);
}
*/
for (let num =0; num < 100; num++){
    console.log(num);
}
/*
    Strings

let fruit = 'banana';
let moreFruits = 'banana\napple';
console.log(fruit.length);
console.log(fruit.indexOf('a'));
console.log(fruit.slice(2,6));
console.log(fruit.replace('ba','an'));
console.log(fruit.toUpperCase());
console.log(fruit.charAt(2));
console.log(fruit[0]);
console.log(fruit.split(''));
*/
// Array
let fruits = ['banana','apple', 'orange','pineapples'];
fruits = new Array('banana','apple', 'orange','pineapples');

fruits[0] = 'pear';

for (let i =0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// array common methods
console.log('to string', fruits.toString());
console.log(fruits.join(' % '));
console.log(fruits.pop(), fruits); // remove last element of array
console.log(fruits.push("blackberies"),fruits); // appends
fruits[fruits.length] = 'new fruit'; // when a element is appended in the end of array, the length of array change for length plus one
fruits[fruits.length] = 'azeitona';
console.log(fruits);
fruits.shift(); // remove first element from a list
fruits.unshift('maçã'); // adiciona um elemento no início do array
console.log(fruits);

let vegetables = ['asparagus', 'tomato', 'brocoli'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries.slice(1,6));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumber = [512,412,51,3,4,51,35,1,6,164,5,4,2,1];

console.log(someNumber.sort(function(a,b) {return a-b})); // ordena em ordem crescente
console.log(someNumber.sort(function(a,b) {return b-a})); // ordena em ordem decrescente

let emptyarray = [];
for (let i=0; i < 10; i++){
    emptyarray.push(i);
}
console.log(emptyarray);

switch (6){
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';
}

console.log(text);
