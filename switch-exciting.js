// ============================================================
//  EXCITING THINGS YOU CAN DO WITH SWITCH CASE STATEMENTS
//  Beyond the basics! Real-world, creative applications.
// ============================================================

// ------------------------------------------------------------
// 1. FALL-THROUGH: Grouping multiple cases together
//    (When several cases should do the SAME thing)
// ------------------------------------------------------------
function weekendChecker(day) {
    switch (day.toLowerCase()) {
        case "saturday":
        case "sunday":
            return "🎉 It's the WEEKEND! Time to relax!";
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
        case "friday":
            return "💼 It's a workday. Stay focused!";
        default:
            return "❓ That's not a valid day.";
    }
}

console.log("1. FALL-THROUGH (grouping cases):");
console.log(weekendChecker("Saturday")); // 🎉 Weekend
console.log(weekendChecker("monday"));   // 💼 Workday
console.log("----------------------------------------\n");

// ------------------------------------------------------------
// 2. SWITCH AS A DISPATCH TABLE (functions as values)
//    Instead of if/else chains, map actions to functions!
// ------------------------------------------------------------
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return b !== 0 ? a / b : "Cannot divide by zero!"; }

function calculator(operation, x, y) {
    switch (operation) {
        case "+": return add(x, y);
        case "-": return subtract(x, y);
        case "*": return multiply(x, y);
        case "/": return divide(x, y);
        default:  return "Unknown operation";
    }
}

console.log("2. SWITCH AS A CALCULATOR (dispatch table):");
console.log("5 + 3 =", calculator("+", 5, 3));
console.log("10 - 4 =", calculator("-", 10, 4));
console.log("6 * 7 =", calculator("*", 6, 7));
console.log("20 / 4 =", calculator("/", 20, 4));
console.log("----------------------------------------\n");

// ------------------------------------------------------------
// 3. SWITCH RETURNING OBJECTS (config/options pattern)
//    Great for themes, settings, or game characters!
// ------------------------------------------------------------
function getCharacter(hero) {
    switch (hero.toLowerCase()) {
        case "warrior":
            return { name: "Aragorn", hp: 150, attack: 30, weapon: "Sword" };
        case "mage":
            return { name: "Gandalf", hp: 80, attack: 50, weapon: "Staff" };
        case "archer":
            return { name: "Legolas", hp: 100, attack: 40, weapon: "Bow" };
        default:
            return { name: "Unknown", hp: 0, attack: 0, weapon: "None" };
    }
}

console.log("3. SWITCH RETURNING OBJECTS (game characters):");
const myHero = getCharacter("Mage");
console.log(`Hero: ${myHero.name} | HP: ${myHero.hp} | Attack: ${myHero.attack} | Weapon: ${myHero.weapon}`);
console.log("----------------------------------------\n");

// ------------------------------------------------------------
// 4. SWITCH FOR A STATE MACHINE (order tracking)
//    Perfect for tracking progress through stages!
// ------------------------------------------------------------
function orderStatus(status) {
    switch (status) {
        case "placed":
            return "📦 Order placed. Waiting for confirmation...";
        case "confirmed":
            return "✅ Order confirmed! Being prepared.";
        case "shipped":
            return "🚚 Your order is on the way!";
        case "delivered":
            return "🏠 Delivered! Enjoy your purchase!";
        case "cancelled":
            return "❌ Order cancelled.";
        default:
            return "❓ Unknown status.";
    }
}

console.log("4. SWITCH AS A STATE MACHINE (order tracking):");
console.log(orderStatus("shipped"));
console.log(orderStatus("delivered"));
console.log("----------------------------------------\n");

// ------------------------------------------------------------
// 5. SWITCH FOR A VENDING MACHINE (menu-driven program)
//    Combine with a loop for an interactive experience!
// ------------------------------------------------------------
function vendingMachine(itemCode) {
    switch (itemCode) {
        case "A1": return "🥤 Soda - $1.50";
        case "A2": return "🍫 Chocolate Bar - $1.00";
        case "B1": return "🍟 Chips - $1.25";
        case "B2": return "🍪 Cookies - $0.75";
        case "C1": return "💧 Water - $1.00";
        default:  return "❌ Invalid code. Try A1, A2, B1, B2, or C1.";
    }
}

console.log("5. SWITCH FOR A VENDING MACHINE:");
console.log("Code B1:", vendingMachine("B1"));
console.log("Code C1:", vendingMachine("C1"));
console.log("Code Z9:", vendingMachine("Z9"));
console.log("----------------------------------------\n");

// ------------------------------------------------------------
// 6. SWITCH FOR A GRADING SYSTEM (with ranges via switch(true))
//    You already know this trick - here's another use!
// ------------------------------------------------------------
function gradeStudent(score) {
    switch (true) {
        case (score >= 90): return "A+ 🏆 Excellent!";
        case (score >= 80): return "A  🌟 Great job!";
        case (score >= 70): return "B  👍 Good work!";
        case (score >= 60): return "C  📖 Keep practicing!";
        case (score >= 50): return "D  ⚠️ Needs improvement!";
        case (score >= 0):  return "F  ❌ Failed. Try again!";
        default:            return "❓ Invalid score.";
    }
}

console.log("6. SWITCH WITH RANGES (grading system):");
console.log("Score 95:", gradeStudent(95));
console.log("Score 72:", gradeStudent(72));
console.log("Score 45:", gradeStudent(45));
console.log("----------------------------------------\n");

// ------------------------------------------------------------
// 7. SWITCH FOR A CHATBOT (simple AI responses)
//    Build a mini customer service bot!
// ------------------------------------------------------------
function chatbot(userMessage) {
    const message = userMessage.toLowerCase();
    switch (true) {
        case message.includes("hello"):
        case message.includes("hi"):
            return "👋 Hello! How can I help you today?";
        case message.includes("price"):
            return "💰 Our products start from $10. What are you interested in?";
        case message.includes("refund"):
            return "🔄 Refunds are processed within 5-7 business days.";
        case message.includes("shipping"):
            return "🚚 We offer free shipping on orders over $50!";
        case message.includes("bye"):
            return "👋 Goodbye! Have a great day!";
        default:
            return "🤔 I'm not sure I understand. Try asking about price, refund, or shipping.";
    }
}

console.log("7. SWITCH FOR A CHATBOT:");
console.log("User: Hi there");
console.log("Bot:", chatbot("Hi there"));
console.log("User: What's the price?");
console.log("Bot:", chatbot("What's the price?"));
console.log("User: I want a refund");
console.log("Bot:", chatbot("I want a refund"));
console.log("----------------------------------------\n");

// ------------------------------------------------------------
// 8. SWITCH FOR A ROCK-PAPER-SCISSORS GAME
//    Determine the winner between two players!
// ------------------------------------------------------------
function rockPaperScissors(player1, player2) {
    const p1 = player1.toLowerCase();
    const p2 = player2.toLowerCase();

    if (p1 === p2) return "🤝 It's a TIE!";

    switch (p1) {
        case "rock":
            return p2 === "scissors" ? "🪨 Rock crushes scissors! Player 1 wins!" : "📄 Paper covers rock! Player 2 wins!";
        case "paper":
            return p2 === "rock" ? "📄 Paper covers rock! Player 1 wins!" : "✂️ Scissors cut paper! Player 2 wins!";
        case "scissors":
            return p2 === "paper" ? "✂️ Scissors cut paper! Player 1 wins!" : "🪨 Rock crushes scissors! Player 2 wins!";
        default:
            return "❌ Invalid move! Use rock, paper, or scissors.";
    }
}

console.log("8. SWITCH FOR ROCK-PAPER-SCISSORS:");
console.log("Rock vs Scissors:", rockPaperScissors("rock", "scissors"));
console.log("Paper vs Rock:", rockPaperScissors("paper", "rock"));
console.log("Scissors vs Paper:", rockPaperScissors("scissors", "paper"));
console.log("Rock vs Rock:", rockPaperScissors("rock", "rock"));
console.log("----------------------------------------\n");

// ------------------------------------------------------------
// 9. SWITCH FOR A CURRENCY CONVERTER
//    Convert amounts between different currencies!
// ------------------------------------------------------------
function currencyConverter(amount, currency) {
    const rates = {
        usd: 1.0,
        eur: 0.92,
        gbp: 0.79,
        ngn: 1550,   // Nigerian Naira (your local currency!)
        jpy: 149.5
    };

    switch (currency.toLowerCase()) {
        case "usd": return `$${amount} USD`;
        case "eur": return `€${(amount * rates.eur).toFixed(2)} EUR`;
        case "gbp": return `£${(amount * rates.gbp).toFixed(2)} GBP`;
        case "ngn": return `₦${(amount * rates.ngn).toFixed(2)} NGN`;
        case "jpy": return `¥${(amount * rates.jpy).toFixed(2)} JPY`;
        default:    return "❌ Unknown currency. Try usd, eur, gbp, ngn, or jpy.";
    }
}

console.log("9. SWITCH FOR A CURRENCY CONVERTER:");
console.log("$100 to Naira:", currencyConverter(100, "ngn"));
console.log("$50 to Euro:", currencyConverter(50, "eur"));
console.log("$200 to Yen:", currencyConverter(200, "jpy"));
console.log("----------------------------------------\n");

// ------------------------------------------------------------
// 10. SWITCH FOR A TRAFFIC LIGHT (timing system)
//     Control how long each light stays on!
// ------------------------------------------------------------
function trafficLight(color) {
    switch (color.toLowerCase()) {
        case "red":
            return { action: "🛑 STOP", duration: "30 seconds" };
        case "yellow":
            return { action: "⚠️ SLOW DOWN", duration: "5 seconds" };
        case "green":
            return { action: "✅ GO", duration: "25 seconds" };
        default:
            return { action: "❓ Invalid color", duration: "0 seconds" };
    }
}

console.log("10. SWITCH FOR A TRAFFIC LIGHT:");
const light = trafficLight("green");
console.log(`Light: ${light.action} for ${light.duration}`);
console.log("----------------------------------------\n");

// ------------------------------------------------------------
// 11. SWITCH FOR A MONTHLY PLANNER (season + activity)
//     Combine switch with date logic!
// ------------------------------------------------------------
function monthActivity(month) {
    switch (month.toLowerCase()) {
        case "december":
        case "january":
        case "february":
            return "❄️ Winter - Time for hot chocolate and warm clothes!";
        case "march":
        case "april":
        case "may":
            return "🌸 Spring - Perfect for planting flowers and outdoor walks!";
        case "june":
        case "july":
        case "august":
            return "☀️ Summer - Beach time, swimming, and ice cream!";
        case "september":
        case "october":
        case "november":
            return "🍂 Autumn - Great for hiking and enjoying the falling leaves!";
        default:
            return "❓ That's not a valid month.";
    }
}

console.log("11. SWITCH FOR A SEASONAL PLANNER:");
console.log("July:", monthActivity("july"));
console.log("December:", monthActivity("december"));
console.log("----------------------------------------\n");

// ------------------------------------------------------------
// 12. SWITCH FOR A PASSWORD STRENGTH CHECKER
//     Evaluate how strong a password is!
// ------------------------------------------------------------
function passwordStrength(password) {
    const length = password.length;
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*]/.test(password);

    switch (true) {
        case (length >= 12 && hasNumber && hasSymbol):
            return "🟢 STRONG - Excellent password!";
        case (length >= 8 && (hasNumber || hasSymbol)):
            return "🟡 MEDIUM - Good, but could be stronger.";
        case (length >= 6):
            return "🟠 WEAK - Add numbers and symbols.";
        default:
            return "🔴 VERY WEAK - Use at least 6 characters.";
    }
}

console.log("12. SWITCH FOR PASSWORD STRENGTH:");
console.log("'pass123!@#word' :", passwordStrength("pass123!@#word"));
console.log("'hello123'       :", passwordStrength("hello123"));
console.log("'abc'            :", passwordStrength("abc"));
console.log("----------------------------------------\n");

// ------------------------------------------------------------
// 13. SWITCH FOR A MENU SYSTEM (with a loop)
//     Build an interactive console menu!
// ------------------------------------------------------------
function showMenu() {
    console.log("\n===== 🍽️ RESTAURANT MENU =====");
    console.log("1. 🍕 Pizza - $12");
    console.log("2. 🍔 Burger - $8");
    console.log("3. 🍜 Noodles - $10");
    console.log("4. 🥗 Salad - $7");
    console.log("5. 🍰 Cake - $5");
    console.log("0. ❌ Exit");
}

function orderFood(choice) {
    switch (choice) {
        case 1: return "🍕 You ordered Pizza! That'll be $12.";
        case 2: return "🍔 You ordered a Burger! That'll be $8.";
        case 3: return "🍜 You ordered Noodles! That'll be $10.";
        case 4: return "🥗 You ordered a Salad! That'll be $7.";
        case 5: return "🍰 You ordered Cake! That'll be $5.";
        case 0: return "👋 Thanks for visiting! Goodbye!";
        default: return "❌ Invalid choice. Please pick a number from the menu.";
    }
}

console.log("13. SWITCH FOR A MENU SYSTEM:");
showMenu();
console.log(orderFood(3));
console.log(orderFood(9));
console.log("----------------------------------------\n");

// ------------------------------------------------------------
// 14. SWITCH FOR A NUMBER-TO-WORD CONVERTER
//     Convert digits to their word form!
// ------------------------------------------------------------
function numberToWord(num) {
    switch (num) {
        case 0: return "zero";
        case 1: return "one";
        case 2: return "two";
        case 3: return "three";
        case 4: return "four";
        case 5: return "five";
        case 6: return "six";
        case 7: return "seven";
        case 8: return "eight";
        case 9: return "nine";
        default: return "Number must be between 0 and 9";
    }
}

function phoneNumberInWords(phone) {
    const digits = String(phone).split("");
    return digits.map(d => numberToWord(Number(d))).join(" ");
}

console.log("14. SWITCH FOR NUMBER-TO-WORD CONVERTER:");
console.log("Phone 08123456789 in words:");
console.log(phoneNumberInWords(8123456789));
console.log("----------------------------------------\n");

// ------------------------------------------------------------
// 15. SWITCH FOR A SIMPLE ENCRYPTION (Caesar-style)
//     Shift letters using a switch!
// ------------------------------------------------------------
function secretCode(letter) {
    switch (letter.toLowerCase()) {
        case "a": return "x";
        case "b": return "y";
        case "c": return "z";
        case "d": return "a";
        case "e": return "b";
        case "f": return "c";
        case "g": return "d";
        case "h": return "e";
        case "i": return "f";
        case "j": return "g";
        case "k": return "h";
        case "l": return "i";
        case "m": return "j";
        case "n": return "k";
        case "o": return "l";
        case "p": return "m";
        case "q": return "n";
        case "r": return "o";
        case "s": return "p";
        case "t": return "q";
        case "u": return "r";
        case "v": return "s";
        case "w": return "t";
        case "x": return "u";
        case "y": return "v";
        case "z": return "w";
        default: return letter; // keep spaces and symbols
    }
}

function encryptMessage(message) {
    return message.split("").map(secretCode).join("");
}

console.log("15. SWITCH FOR A SECRET CODE (encryption):");
console.log("'hello world' becomes:");
console.log(encryptMessage("hello world"));
console.log("----------------------------------------\n");

// ============================================================
//  BONUS: A COMBINED "SUPER APP" using multiple switch ideas!
// ============================================================
function superApp(choice, data) {
    switch (choice) {
        case "weather":
            switch (data) {
                case "sunny": return "☀️ Wear sunglasses and sunscreen!";
                case "rainy": return "🌧️ Bring an umbrella!";
                case "snowy": return "❄️ Wear a heavy coat!";
                default: return "❓ Unknown weather.";
            }
        case "mood":
            switch (data) {
                case "happy": return "😄 Great! Keep smiling!";
                case "sad": return "😢 It's okay. Tomorrow is a new day!";
                case "tired": return "😴 Get some rest!";
                default: return "❓ Unknown mood.";
            }
        case "day":
            return weekendChecker(data);
        default:
            return "❓ Unknown app. Try 'weather', 'mood', or 'day'.";
    }
}

console.log("BONUS: NESTED SWITCHES (Super App):");
console.log(superApp("weather", "rainy"));
console.log(superApp("mood", "happy"));
console.log(superApp("day", "Sunday"));
console.log("========================================\n");

console.log("🎉 That's 15+ exciting ways to use switch case statements!");
console.log("Key takeaways:");
console.log("  • Use FALL-THROUGH to group cases");
console.log("  • Use switch(true) for ranges/conditions");
console.log("  • Use switch to return objects, functions, or configs");
console.log("  • Nest switches for complex logic");
console.log("  • Combine with loops for interactive programs");