let celcius = 10;
let farenheit = celcius * 1.8 + 32;

console.log(farenheit)

let cash = 10;
let price = 10;
isStoreOpen = true;

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

let str = "";

for (let i = 1; i < 21; i++) {
    if (i % 15 === 0) {
        str = `${i} -> Frontend Simplified`;
    } else if (i % 3 === 0) {
        str = `${i} -> Frontend`;
    } else if (i % 5 === 0) {
        str = `${i} -> Simplified`;
    } else {
        str = `${i} -> ${i}`;
    }
    console.log(str);
}

let str2 = "Frontend Simplified";

for (let i = 0; i < str2.length; i++) {
    console.log(str2[i]);
}

function convertCelciusToFarenheit(celcius) {
    return celcius * 1.8 + 32;
}

console.log(convertCelciusToFarenheit(0));
console.log(convertCelciusToFarenheit(10));
console.log(convertCelciusToFarenheit(30));

function filterGrades(array) {
    return array.filter(grade => grade !== "FAIL");
}

console.log(filterGrades(["A+", "A", "FAIL"]));
console.log(filterGrades(["FAIL", "FAIL", "B"]));
console.log(filterGrades(["FAIL"]));

function filterGrades2(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];
        if (currentElement !== "FAIL") {
            newArray.push(currentElement);
        }
    }
    return newArray;
}

console.log(filterGrades2(["A+", "A", "FAIL"]));
console.log(filterGrades2(["FAIL", "FAIL", "B"]));
console.log(filterGrades2(["FAIL"]));

function returnCents(array) {
    return array.map((element) => {
        return element * 100;
    })
}

function returnCents2(array) {
    return array.map(element => element * 100);
}

console.log(returnCents([1, 5, 10, 3]));
console.log(returnCents([1, 10, 20]));
console.log(returnCents2([1, 5, 10, 3]));
console.log(returnCents2([1, 10, 20]));

function returnCents3(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = i * 100;
    }
    return array;
}

console.log(returnCents3([1, 5, 10, 3]));
console.log(returnCents3([1, 10, 20]));

let users = [];

function register(username, email, password, subscriptionStatus, discordID, lessonsCompleted) {
    users.push(
        {
            username: username,
            email: email,
            password: password,
            susbscriptionStatus: subscriptionStatus,
            discordID, discordID,
            lessonsCompleted: lessonsCompleted
        }
    );
}

register("Aly", "this@gmail.com", "lksdfjslfj", "VIP", "slkfjsljfs#0001", [1, 2, 5]);
console.log(users);

function register2(user) {
    users.push(user)
}

register2({
    username: "Aly",
    email: "this@gmail.com",
    password: "lskflskfj",
    subscriptionStatus: "VIP",
    discordID: "sklf#003",
    lessonsCompleted: [3, 5]
})
console.log(users);

document.querySelector(".title").innerHTML = "Frontend Simplified"

function onClicked() {
    document.querySelector(".title").style.color = "red";
}

function getVideo(status) {
    return new Promise((resolve, reject) => {
        if (status === "VIP") {
            resolve("show video");
        } else if (status === "FREE") {
            resolve("show trailer");
        } else {
            reject("no video");
        }
    });
}

async function returnVideoStatus (promise) {
    try {
        console.log(await promise);
    } catch(rejection) {
        console.log(rejection);
    }
}

function loadSubscriptionStatus() {
    returnVideoStatus(getVideo("VIP"));
    returnVideoStatus(getVideo("FREE"));
    returnVideoStatus(getVideo("gibberish"));
}

loadSubscriptionStatus();