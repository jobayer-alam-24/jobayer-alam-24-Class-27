//pass or fail check from array
(function passFail() {
    let marks = [90, 54, 90, 32, 89, 87, 80, 56, 78, 95, 60, 23, 2];
    console.log(marks.join(', '));
    let len = marks.length;
    let passed = 0;
    let fail = 0;

    for (let i = 0; i < len; i++) {
        if (marks[i] < 33) {
            fail++;
        }
        else {
            passed++;
        }
    }
    console.log("Passed: " + passed + " (FROM ABOVE ARRAY ELEMENTS)");
    console.log("Failed: " + fail + " (FROM ABOVE ARRAY ELEMENTS)");
    console.log('----------------------------------')
})();

// grade calculate from array
(function gradeCalc() {
    let marks = [54, 90, 32, 89, 87, 80, 56, 78, 95, 60, 23, 2];
    console.log(marks.join(', '));
    let len = marks.length;

    let aplus = 0;
    let a = 0;
    let aminus = 0;
    let b = 0;
    let c = 0;
    let f = 0

    for(let i = 0; i < len; i++){
        if(marks[i] >= 80){
            aplus++;
        }
        else if(marks[i] >= 70){
            a++;
        }
        else if(marks[i] >= 60){
            aminus++;
        }
        else if(marks[i] >= 50){
            b++;
        }
        else if(marks[i] >= 40){
            c++;
        }
        else if(marks[i] >= 33){
            f++;
        }
    }
    console.log("Got A+ : " + aplus);
    console.log("Got A : " + a);
    console.log("Got A- : " + aminus);
    console.log("Got B : " + b);
    console.log("Got C : " + c);
    console.log("Got F : " + f);
})();

//max-min value in the array
function maxNum(){
    let myarray = [34, 455, 56, 76, 45, 87];
    console.log(myarray.join(', '));
    let max = myarray[0];
    let len = myarray.length;

    for(let i = 0; i < len; i++){
        if(myarray[i] > max){
            max = myarray[i];
        }
    }
    return max;
};

console.log("Maximum number: " + maxNum());
function minNum(){
    let myarray = [34, 455, 56, 76, 45, 87];
    let min = myarray[0];
    let len = myarray.length;

    for(let i = 0; i < len; i++){
        if(myarray[i] < min){
            min = myarray[i];
        }
    }
    return min;
};
console.log("Minimum number: " + minNum());

// prime number check 
(function isPrime(){
    let input = parseInt(prompt("Enter an integer: "));
    let count = 0;

    if(input === 1){
        console.log('Neighter prime nor composite!');
    }else{
        for(let i = 2; i < input; i++){
            if(input % i === 0){
                count++;
                break;
            }
        }
        if(count > 0){
            console.log("Not a prime: " + input);
        }
        else{
            console.log("Prime: " + input);
        }
    }
    
})();

// averagemarks
(function averageMarks(){
    let marks = [44, 81, 84, 40, 63, 43, 54];
    let len = marks.length;
    let sum = 0;

    for(let i = 0; i < len; i++){
        sum += marks[i];
    }
    let avr = (sum / len).toFixed(3);
    console.log("Average marks: " + avr);
})();

// *  
// * *  
// * * *  
// * * * *  
// * * * * *  
// trying to print pattern 
(function patternPrint(){
    let numberOfRows = parseInt(prompt("Row number: "));
    let numberOfCols = parseInt(prompt("Col number: "));

    for(let i = 0; i < numberOfCols; i++){
        let row = '';
        for(let j = 0; j < numberOfRows; j++){
            if(i >= j){
                row += ' *';
            }
            else{
                row += "";
            }
        }
        console.log(row);
    }
    
})();
