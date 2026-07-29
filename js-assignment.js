// Question 1

const name = "Olawale Sanmi-Afolabi";
const age = 90;
const isEnrolled = true;
console.log(name);
console.log(age);
console.log(isEnrolled);

// Question 1 explains that the values of name, age, and isEnrolled are constant and cannot be changed. The const keyword is used to declare these variables, indicating that their values are fixed and cannot be reassigned.

// Question 2
let walletBalance = 5000;
console.log(walletBalance);
walletBalance = 7500;
console.log(walletBalance);

//let is used in question 2 because the value of walletBalance can be changed, while const is used in question 1 because the values of name, age, and isEnrolled are constant and cannot be changed.

// Question 3
const itemsInCart = 3;
console.log(itemsInCart);
// The value of itemsInCart is a whole number(Integer) and it is a constant value that cannot be changed.
const itemPrice = 1.999;
console.log(itemPrice);
// The value of itemPrice is a decimal number and it is a constant value that cannot be changed.

//Question 4
const price = 2500
const quantity = 4
const total =price * quantity
console.log(total);

// Question 4 explains that the total cost of purchasing 4 items at a price of 2500 each is calculated by multiplying the price by the quantity. The final total cost is 10000.

//Question 5
const a = 17
const b = 5
const add = a + b
const subtract = a - b
const multiply = a * b
const divide = a / b
const modulus = a % b  
const raiseToPower = a ** b 
console.log(add)
console.log(subtract)
console.log(multiply)
console.log(divide)
console.log(modulus)
console.log(raiseToPower)

//Question 5 explains that the value of a is 17 and the value of b is 5. The addition of a and b is 22, the subtraction of a and b is 12, the multiplication of a and b is 85, the division of a and b is 3.4, the modulus of a and b is 2, and the raise to power of a and b is 1419857.

// Question 6
const jerseyCost = 12000;
const numberOfJerseys = 3;
const deliveryFee = 2000;
const totalCost = (jerseyCost * numberOfJerseys) + deliveryFee;
console.log(totalCost);

// Question 6 explains that the total cost of purchasing 3 jerseys at a cost of 12000 each, with a delivery fee of 2000, is calculated by multiplying the jersey cost by the number of jerseys and then adding the delivery fee. The final total cost is 38000.

// Question 7
const studentScore = 68;
const passMark = 50;
const isPassed = studentScore > passMark;
const isHigherThan70 = studentScore >= 70;
console.log(isPassed)
console.log(isHigherThan70);

//Question 7 explains that the student has passed the exam since their score is greater than the pass mark. However, they did not score higher than 70, so the second condition is false.

// Question 8
const priceA = 8000;
const priceB = 12000;
const isPriceAHigher = priceA > priceB;
const isPriceALower = priceA < priceB;
const isPriceALowerOrEqual = priceA <= priceB;
const isPriceAHigherOrEqual = priceA >= priceB;
console.log(isPriceAHigher)
console.log(isPriceALower)
console.log(isPriceALowerOrEqual)
console.log(isPriceAHigherOrEqual)  

// Question 8 explains that priceA is not higher than priceB, but it is lower than priceB. Additionally, priceA is also lower than or equal to priceB, but it is not higher than or equal to priceB.

//Question 9
const num = 7;
const str = "7";
const isEqual = num == str;
const isStrictlyEqual = num === str;
console.log(isEqual)
console.log(isStrictlyEqual);

//Qquestion 9 explains that the value of num is equal to the value of str, but they are not strictly equal because they are of different data types. The double equals operator (==) checks for equality of values, while the triple equals operator (===) checks for equality of both values and data types.

// Question 10
const isInEqual = num != str;
const isStrictlyInEqual = num !== str;
console.log(isInEqual)
console.log(isStrictlyInEqual);

// what ! does is that it negates the value of the variable. For example, if the variable is true, it will become false and vice versa.

//Question 11
const isRaining = true;
const isWeekend = false;
console.log(!isRaining)
console.log(!isWeekend);

// Question 11 explains that the value of isRaining is true, but when negated with the ! operator, it becomes false. Similarly, the value of isWeekend is false, but when negated, it becomes true.

//Question 12
const correctPin = 1234;
const enteredPin = "1234";
const isPinCorrect = correctPin === enteredPin;
console.log(isPinCorrect);

// Question 12 explains that the value of correctPin is not strictly equal to the value of enteredPin because they are of different data types. The correctPin is a number, while the enteredPin is a string. Therefore, the result of the comparison is false.