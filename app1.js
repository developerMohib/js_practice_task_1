/**
 Task-1: 
Write a function to convert temperature from Celsius to Fahrenheit.
*/
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
let numbers = [5,6,11,12,98, 5]


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
### Task-4: 
Write a function to find the longest word in a given string.

sample-input: 
I am learning Programming to become a programmer

sample-output: Programming

### Task-5: 
Generate a random number between 10 to 20.

 */
let random = Math.random();
let inTeger = (random * 10) ;
let upToTen = inTeger +10 ;
document.write('<br> My Random Number = ', upToTen , '<br>');

