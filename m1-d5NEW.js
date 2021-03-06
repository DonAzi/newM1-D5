/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

/* WRITE YOUR ANSWER HERE */

const area = (l1, l2) => {
  return l1 * l2;
};

// console.log(area(2, 5));

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

/* WRITE YOUR ANSWER HERE */

const crazySum = (two, one) => {
  if (two === one) {
    console.log((two + one) * 3);
  } else {
    console.log(two + one);
  }
};
// crazySum(9, 9);

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

/* WRITE YOUR ANSWER HERE */

const crazyDiff = (giveNum) => {
  giveNum > 19
    ? console.log(Math.abs(giveNum - 19) * 3)
    : console.log(Math.abs(giveNum - 19));
};
// crazyDiff(20);

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

/* WRITE YOUR ANSWER HERE */

const boundary = (n) => ((n >= 20 && n <= 100) || n === 400 ? false : true);

// if ((n >= 20 && n <= 100) || n === 400) {
//   return true;
// } else {
//   return false;
// }

console.log("");
// console.log(boundary(200));

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR ANSWER HERE */
const strivify = (str) => (str.startsWith("Strive") ? str : "Strive " + str);
// const striviFy = function (str) {
//   if (str.startsWith("Strive")) {
//     return str;
//   } else {
//     return "Strive" + str;
//   }
// };
// console.log(strivify("STRIVE is Good ?"));

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

/* WRITE YOUR ANSWER HERE */
const check3and7 = (int) => (int % 3 === 0 || int % 7 === 0 ? true : false);

// function check3and7(int) {
//   if (int % 3 === 0 || int % 7 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(check3and7(601));

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR ANSWER HERE */

const reverseString1 = (str) => str.split("").reverse().join("");

// console.log(reverseString1("loohcS evirtS"));

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

const upperFirst = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
// console.log(upperFirst("bueno"));

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

function cutString(str) {
  return str.slice(1, str.length - 1);
}
// console.log(cutString("GgreatExplanationTetianaa"));

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */

function giveMeRandom(n) {
  let arr = [];
  for (let i = 0; i <= n; i++);
  {
    const random = Math.floor(Math.random() * 5);
    arr.push(random);
  }
  return arr;
}
//  MY FUNCTION DOES NOT PRINTING 5 RANDOM DIGITS ON CONSOLE ????? PLS GET BACK TO ME !!!
console.log(giveMeRandom(5));

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
