// ************************Question-1********************
// let input = "PW Skills";

// function reverseString(inputString) {
//     return inputString.split("").reverse().join("");
// }

// function reverseWithDelay(inputString) {
//     setTimeout(function () {
//         let reversed = reverseString(inputString);
//         console.log("Reversed String: " + reversed);
//     }, 2000);
// }

// reverseWithDelay(input);

// ************************Question-2********************

function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
}


function generateRandomNumberWithDelay(delayInSeconds) {
    console.log(`Generating a random number after a delay of ${delayInSeconds} seconds...`);
    let countdown = 3;
    const countdownInterval = setInterval(() => {
        console.log(`${countdown} seconds remaining...`);
        countdown--;

        if (countdown === 0) {
            clearInterval(countdownInterval);
            const randomNumber = generateRandomNumber();
            console.log(`Random number generated: ${randomNumber}`);
        }
    }, 1000);
}

generateRandomNumberWithDelay(3);

// ************************Question-3**********************


const items = [
    {
        name: "Iphone 15",
        category: "Mobile",
        priceUSD: 999,
    },
    {
        name: "Macbook Air",
        category: "Laptops",
        priceUSD: 1499,
    },
    {
        name: "Apple Watch",
        category: "Watches",
        priceUSD: 499,
    },
];
const exchangeRate = 80;

function convertToINR(priceInUSD) {
    return priceInUSD * exchangeRate;
}

const itemsInINR = items.map((item) => ({
    ...item,
    priceINR: convertToINR(item.priceUSD),
}));

console.log(itemsInINR);

// ************************Question-4**********************

const books = [
    {
        title: "The Namesake",
        author: "Jhumpa Lahiri",
        year: 2010,
    },
    {
        title: "The God of Small Things",
        author: "Arundhati Roy",
        year: 1997,
    },
    {
        title: "A Suitable Boy",
        author: "Vikram Seth",
        year: 1993,
    },
    {
        title: "The White Tiger",
        author: "Aravind Adiga",
        year: 2018,
    },
    {
        title: "Midnight's Children",
        author: "Salman Rushdie",
        year: 1981,
    },
];

const filteredBooks = books.filter((book) => {
    return book.year >= 2010;
})

const result = filteredBooks.map((book) => {
    return {
        ...book,
        author: book.author.toUpperCase(),
    };
});

console.log(result);

// ************************Question-5**********************

const urlPattern = /^(https?:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]+[.][a-zA-Z]+$/;

function isValidURL(input) {
    return urlPattern.test(input);
}

const url = "https://pwskills.com"


if (isValidURL(url)) {
    console.log(`"${url}" is a valid URL.`);
} else {
    console.log(`"${url}" is not a valid URL.`);
}
// ************************Question-6**********************

const linkedinProfileRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]\/$/;

function isValidLinkedInProfileURL(url) {
    return linkedinProfileRegex.test(url);
}

let url = 'https://www.linkedin.com/in/mithun-s-83a8a3186/'

if (isValidLinkedInProfileURL(url)) {
    console.log(`"${url}" is a valid LinkedIn profile URL.`);
} else {
    console.log(`"${url}" is not a valid LinkedIn profile URL.`);
}
