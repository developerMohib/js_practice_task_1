/**
ei array teke odd num ebong even num gulu ber kore to ,alada alada

*/

document.write('-------------------------<br> <br> ');
const myArray = [50,51,52,62,43,82,96,37,32,39,50];
let evenArray = [];
let oddArray = [];
for (let i = 0; i < myArray.length; i++) {

    if( myArray[i] % 2 === 0){
        // document.write('even : ', myArray[i] , ' ');
        evenArray.push(myArray[i]);
    }
    else{
        oddArray.push(myArray[i]);
    }
}
document.write('even Array :', evenArray , '<br>');
document.write('odd Array :', oddArray);

document.write('<br> <br> ');