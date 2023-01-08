let celcius = 10;
let farenheit = celcius * 1.8 + 32;

console.log(farenheit)

let cash = 10;
let price = 10;
isStoreOpen = true

if (cash > price) {
    console.log(`you paid extra - here's ${cash-price} dollars change`)
} else if (cash === price) {
    console.log("you paid the exact amount, have a nice day!")
} else {
    console.log(`you still owe ${price-cash} dollars`)
}

isStoreOpen && cash >= price ? console.log("give receipt") : console.log("do not give receipt")

let count = 1;

while (count <= 100) {
    count += 1;
    console.log(count);
}