// today's forcasted temperature in Kelvin
const kelvin = 293;

// convert temperature from Kelvin to Celsius
let celsius = kelvin-273;

// convert temp from Celsius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// rounding down F temp to nearest integer
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);