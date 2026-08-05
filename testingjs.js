const user = (ui, ux)=>{
    return ui * ux
}

function user2(j, k){
    return j * k
}

const HS = user(3, 9)
console.log(HS)


const modulus1 = (m,d)=> {
    return m % d;
}

const mduser1 = modulus1(10,4);
console.log("modulus = ", mduser1);

//**************************************** */

const elegibityAge= 18

function checkElegibility(age){
    if(age >= elegibityAge){
        return "You are eligible to vote."
    }else{
        return "You are not eligible to vote.";
    }
}

const voter1 = checkElegibility(10);
console.log(voter1);



//*************************************************** */

function customerCare(ls, ly, lz="Thank you for shopping with us."){
    return `Hello, your last purchase was ${ls} and your last visit was ${ly}.`
    
    
    ;
}

const customer1 = customerCare("laptop", "01/09/2026");
console.log(customer1);

const customer2 = customerCare("phone", "03/09/2026");
console.log(customer2);

const consumer3 = customerCare(null,"04/09/2026");
console.log(consumer3);


// I need to activate js 


function writewords(go, gw){
    return "Welcome to the center MR/MISS " + go + " Your last loggin was " + gw 
}

const twogo = writewords("Wale", "April")
console.log(twogo)

const twogo2 = writewords("Emmanuel", "December")
console.log(twogo2)

function modulus(io, ip){
    return io % ip
}

const firstnodule = modulus(20, 3)
console.log(firstnodule)

//************************************************
// 

function pensionAge(retirementAge){
    switch (true) {
        case (retirementAge > 90):
            return "You are too old for pension";
        case (retirementAge >= 60):
            return "You are eligible for pension";
        case (retirementAge < 60):
            return "You are not eligible for pension";
        default:
            return "Invalid retirement age";
    }
}

const worker1 = pensionAge(50)
console.log(worker1)

function carMilage(milage){
    switch (true) {
        case (milage > 0 && milage <=500):
            return "Your car is new"
            case (milage > 500 && milage <2000):
                return "Your car is fairly used"
                case (milage >=2000):
                    return "You car is too old and you need to replace some componets immediately"
    
        default:
            return "Invalid input"
    }
}

const toyotaVenza = carMilage("ui")
console.log(toyotaVenza)


function ecomm(cart){
    switch (cart) {
        case 1: return "Phone section"
            
            case 2 : return "Ipad section"
            
            case 3 : return "computer section"
    
        default:
           return "Please select an item"
    }
}

const fayosemk = ecomm(6)
console.log(fayosemk)




const paytool = ()=>{
    return a % b
}

const payOone = paytool(30, 7)
console.log(payOone)





