const ages = [3, 9, 23, 64, 2, 8, 28, 93];
//let difference = 0;
ages.push(111);
var a1 = ages[ages.length - 1]; //last age in array
var a2 = ages[0]; //first age in array

function subtraction(){
    let difference = a1 - a2;
    console.log(a1 + "-" + a2 + "=" + difference); // what the directions asked for plus my own addition to clarify it
}
subtraction();

var agesTotal = 0;
for (age of ages){
    agesTotal += age;
}
var average = agesTotal / ages.length;
console.log(ages);// for me 
console.log(agesTotal); // for me
console.log(ages.length); // for me
//need to see all the moving parts
console.log(average);

//BELOW IS ALL FAILED CODE THAT LED UP TO THE COMPLETED CODE
// ages.push("111"); 
//console.log(ages[ages.length - 1]); //  Just to see what the last index and if it worked.
//let average;
//let agesSum = 0;
//var divisor;
//let average = agesSum / ages.length;
/*
for (age of ages){
    agesSum += age;
    agesSum / ages.length = average; 
    //agesSum / ages.length == average;
}
console.log(average);

for (let i = 0; i < ages.length; i++){

}

// let ;
/*
for (let i = 0; i < ages.length; i++) {
    let numberOfAges = ages.length; 
    let agesSum = 0;
    let average = numberOfAges / agesSum;
    agesSum += ages[i];
    console.log(average);
}
*/
var lettersTotal = 0;
let names = ["Sam", "Tommy", "Tim", 'Sally', 'Buck', 'Bob']; //addded spaces after the fact
var lengthOfWords = names.map(function(element){
    return element.length;
});
console.log(lengthOfWords); // for me to see if it worked so far
for (length of lengthOfWords){
    lettersTotal += length;
}
var averageLetters = lettersTotal / lengthOfWords.length;
console.log(lettersTotal);//for me
console.log(averageLetters);

let newNames = "";
for (name of names){
    newNames += name + " ";
}
console.log(newNames + " ");

let namesLengths = 0;
//for (new of newNames){
for (length of lengthOfWords){
    namesLengths += length;
    //namesLengths.push(lengthOfWords);
    //return namesLengths.values;
}
console.log(namesLengths);

//#7
var wordMultiplied = "";
function nameMultiplier (word, _x) {
    for(i=0; i < _x; i++) {
        wordMultiplied += word;
    }
}
nameMultiplier("Hello", "3");
console.log(wordMultiplied);


//8
var newName = ("");
function nameMaker (firstName, lastName){
   newName = firstName + lastName;
   return newName; 
}
nameMaker ("Nicolas ", "Otey");
console.log(newName);

//9
var sum = 0; //since its asking for the sum to find true or false start the count at 0 with a var sum
var greaterThan100; //empty string to spit out true or false
let sumsArray = [23, 13, 9, 22, 39];
function arrayTFSum (){
    for (i = 0; i < sumsArray.length; i++){
        sum += sumsArray[i];
    }
    if (sum > 100){
        console.log("true");
        } else {
            console.log("false");
        }
}
arrayTFSum();
console.log (sum);

//10 - Average of numbers in array
var numbersArray = [1,4,5,2,8,7,9];
var sumofArray = 0;
let arrayAverage;
function averageMaker (){
    for (i=0; i < numbersArray.length; i++){
        sumofArray += numbersArray[i];
    }
    arrayAverage = sumofArray/numbersArray.length;
}

averageMaker();
console.log(arrayAverage);
console.log(sumofArray); //to see what the sum is coming up as for me

//11
var array1 = [1, 2, 3, 4]; 
var array2 = [2, 4, 6, 8];
var sum1 = 0; //sum of array 1
var sum2 = 0; //sum of array 2
let arraysAverage1; //avg of array1
let arraysAverage2; //avg of array2
function averageMaker2(){
    for (i=0; i < array1.length; i++){
        sum1 += array1[i];
    }
    arraysAverage1 = sum1/array1.length;

    for(i=0; i < array2.length; i++){
        sum2 += array2[i];
    }
    arraysAverage2 = sum2/array2.length;
}

    if (arraysAverage1 > arraysAverage2){
        console.log("true");
    } else {
        console.log('false');
    }
averageMaker2();
console.log (sum1); //this and the bottom are to see if the vars are functioning properly
console.log (sum2);

//12
var isHotOutside = true;
var moneyInPocket = 5;
function willBuyDrink(){
    if (isHotOutside == true && moneyInPocket > 10.50){
        console.log(true);
    } else {
        console.log(false);
    }
}
willBuyDrink();

//13
var isRaining = true;
var temp = 67;
function willPlaySoccer(){ //This function will determine whether or not it is suitable to play soccer based on booleans and if/else statements.
    if (isRaining == true && temp >= 60){
        console.log("You'll get wet but its warm so go play!")
    } else if (isRaining == true && temp < 60){
        console.log ("Too cold and wet to play.")
    } else if (isRaining ==false && temp < 60){
        console.log ("Up to you!")
    } else {
        console.log("Perfect weather to play!")
    }
}
willPlaySoccer();











