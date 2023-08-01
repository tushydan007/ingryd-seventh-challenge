// Solution for question number one
const year = new Date().getFullYear();

if (year % 4 === 0 && year % 100 !== 0) {
  alert("It is a leap year");
} else {
  alert("It's not a leap year");
}

// Solution for question number two
const value = 7;

if (value % 3 === 0 && value % 5 === 0) {
  alert("Fizz Buzz");
} else if (value % 5 === 0) {
  alert("Fizz");
} else if (value % 3 === 0) {
  alert("Buzz");
} else {
  alert("Number not divisible by both 5 and 3");
}
