const myAge = 50; // my age... these comments are redundant @ Code Academy
let earlyYears = 2; // # of years a dog lives through that are defined as "early years"

earlyYears *= 10.5;
let laterYears = myAge - 2; // years a dog lives after their early years

laterYears *= 4; // scaling later years to dog years

let myAgeInDogYears = earlyYears + laterYears; // total age in dog years

let myName = "Anon".toLowerCase(); // my name in all lower case

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years 
old in dog years`);