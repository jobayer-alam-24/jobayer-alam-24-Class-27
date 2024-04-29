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