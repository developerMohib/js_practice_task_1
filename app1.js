/**
 Task-1: 
Write a function to convert temperature from Celsius to Fahrenheit.
*/
document.write('<br> ------------ Task 1 ---------------- <br>');
function celsius(temper){
    let fahrenheit = temper * (9/5) +32 ;
    return fahrenheit;
}
let fahrenheit = celsius(Number(35));
document.write( 'Fahrenheit = ', fahrenheit , '<br>');

function fahrenheit_(temper){
    let celsius = temper;
    return celsius;
}
let celsius_ = fahrenheit_(Number(113));
document.write( 'Celsius = ', celsius_ , '<br>');

/*
Task-2: 
You are given an array of numbers. Count how many times the a number is repeated in the array. 
sample-input: 
numbers = [5,6,11,12,98, 5]
find: 5
output: 2
 */
document.write('<br> ------------ Task 2 ---------------- <br>');

let numbers = [5,6,11,12,98, 5];
let singleOne = 0 ;
for (const item of numbers) {
    document.write(' ', item )
    if(item === 5){
        singleOne++;
    }
}
document.write('<br> 5 comes here = ', singleOne );


/**
sample-input: 
numbers = [5,6,11,12,98, 5]
find: 25
output: 0
*/

/*
### Task-3: 
Write a function to count the number of vowels in a string.
 */
document.write('<br> ------------ Task 3 ---------------- <br>');
function text(text_string){
    document.write( '<br>', text_string , '<br>');

    text_array = text_string.split('');
    document.write(text_array , '<br>') ;

    let count = 0;
    for (const letter of text_array) {
        // document.write(letter , '<br>') ;

        if(letter === 'a'){
            count++;
        }
        else if(letter === 'e'){
            count++;
        }
        else if(letter === 'i'){
            count++;
        }
        else if(letter === 'o'){
            count++;
        }
        else if(letter === 'u'){
            count++;
        }
    }
    return count;
    // document.write( '<br>', count , ' vowels in this string. <br>');
}
let countVowels = text('a brown fox jump over the the lazy dog');
document.write( '<br>', countVowels , ' vowels in this string. peo peo <br>');

/**
Task-4: 
    Write a function to find the longest word in a given string.
sample-input: 
I am learning Programming to become a programmer
sample-output: Programming
 */
document.write('<br> ------------ Task 4 ---------------- <br>');

function myString(myInput){
    document.write('<br>', myInput , '<br>');

    let myArray = myInput.split(' ');
    document.write('<br>', myArray ,'<br>');

    let longestWord = ' ';
    // document.write('longest word length = ', longestWord.length , '<br>');

    for (const word of myArray) {
        document.write(' ', word ,' ');

        let len = word.length;
        document.write('length = ' , len , '<br>');

        if(longestWord.length < word.length){
            longestWord = word;
        }
    }
    return longestWord;
}
let longestWordFind = myString('I am learning Programming to become a programmer . okay');
document.write('Longest Word from my given string = ', longestWordFind , '<br>');


/**
 * Task-5: 
Generate a random number between 10 to 20.
 */
document.write('<br> ------------ Task 5 ---------------- <br>');
let random = Math.random();
let inTeger = (random * 10) ;
let upToTen = inTeger +10 ;
document.write('<br> My Random Number = ', upToTen , '<br>');

