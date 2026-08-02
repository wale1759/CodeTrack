const modulus1 = (m,d)=> {
    return m % d;
}

const mduser1 = modulus1(10,4);
console.log("modulus = ", mduser1);

//**************************************** */

const elegibityAge= 18

function checkElegibility(age){
    if(age >= elegibityAge){
        return "You are eligible to vote.";
    }else{
        return "You are not eligible to vote.";
    }
}

const voter1 = checkElegibility(10);
console.log(voter1);


//*************************************************** */

function customerCare(ls, ly, lz="Thank you for shopping with us."){
    return `Hello, your last purchase was ${ls} and your last visit was ${ly}. ${lz}`;
}

const customer1 = customerCare("laptop", "01/09/2026");
console.log(customer1);

const customer2 = customerCare("phone", "03/09/2026");
console.log(customer2);

const consumer3 = customerCare(null,"04/09/2026");
console.log(consumer3);


// I need to activate js 