// Logical Operators
// And && logic
//************************ */

//left   right   result
// true   true    true
// true   false   false
// false  true    false
// false  false   false

//************************* */

//OR logical operators
// left   right   result
// true   true    true
// true   false   true
// false  true    true
// false  false   false

//************************* */

const a = true;
const b = false;

const resultAnd = a && b; // false
const resultOr = a || b; // true

const total = 5000 * 2;
const ageofbuyer = 17;
const elegibletobuy = total > 10000 && ageofbuyer >= 21;

//Personal assignment: Create a program that determines
// if a user is eligible to vote based on their age.

const score = 70

if(score >= 70) {
    console.log("You passed the test!");
}else if (score < 7){
    console.log("You failed the test!");
}else{
    console.log("Invalid score.");
}

// switch and case statements
// default represent else statement

const status = "paid";

switch (status){
    case "paid":
        console.log("show your receipt.");
        break;
    case "refund":
        console.log("please visit your branch, there has been an issue.");
        break;
    default:
        console.log("check status, because we are not sure what your status is.");
        // code to execute if no case matches
}

const candidateAge = 18;
const isEligibleforExam = 16

