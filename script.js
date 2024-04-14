//  CHAPTER 31-34

var months = [
  "January",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
var days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
// Q1 SOL:
// var date = new Date();
// document.write(date);

// Q2 SOL:

// document.write(months[date.getMonth()]);

//Q3 SOL:

// document.write(days[date.getDay()]);

//Q4 SOL:
// if (days[date.getDay()] == "sat" || days[date.getDay()] == "sun") {
//   document.write("its fun day");
// }

//Q5 SOL:

// var a = date.getDate();
// if (a <= 15) {
//   document.write("first fifeteen days of month");
// } else {
//   document.write("last days of months");
// }

//Q6 SOL:

// document.write("Current date " + date + ",<br/>");
// document.write("Time elapsed in milliseconds " + date.getTime() + ",<br/>");
// document.write("Time elapsed in minutes " + date.getTime() / 60000 + ",<br/>");

//Q7

// if (date.getHours <= 12) {
//   document.write("its AM");
// } else {
//   document.write("its PM");
// }

//Q8

// var date2 = new Date("31-dec-2020");
// document.write(date2);

//Q10

// var date3 = new Date("01-jan-2015");

// var secdate3 = date3.getTime() / 1000;
// var milldate = date3.getTime() / 1000;
// var diff = milldate - secdate3;
// document.write(diff);

//Q11

// document.write("current date : " + date);

// var b = date.getHours();
// console.log(date.setHours(b - 2));

//q13
// var age = +prompt("enter your birh year");

// var yr = date.getFullYear();
// document.write("your birh year is " + (yr - age));

// CHAPTER 35 - 38

//Q1 sol:
// function date_func() {
//   return document.write(date);
// }

// date_func();

//Q2 sol:
// function user_name(firstname, lastname) {
//   document.write(firstname + lastname);
// }

// user_name("Abdul", "Rehman");

//Q3 sol:

// var num1 = +prompt('enter first number');
// var num2 = +prompt('enter second number');
// function num_sum(num1, num2) {
//   return document.write("sum of two number " + (num1 + num2));
// }

//Q4 sol:

// var val1 = +prompt("enter first no");
// var val2 = +prompt("enter second no");
// var opr = prompt("enter operator");

// function calc(val1, val2, opr) {
//   var res = 0;
//   if (opr == "+") {
//     res = val1 + val2;
//   } else if (opr == "-") {
//     res = val1 - val2;
//   } else if (opr == "/") {
//     res = val1 / val2;
//   } else if (opr == "*") {
//     res = val1 * val2;
//   }

//   return document.write(res);
// }

// calc(val1, val2, opr);

//Q5 sol:

// var sqNum = +prompt("enter no to square");

// function sqNum() {
//   document.write(sqNum * sqNum);
// }

//q7

// var st_no = +prompt("enter starting no ");
// var end_no = +prompt("enter ending no ");

// function counting() {
//   for (i = st_no; i <= end_no; i++) {
//     document.write(i);
//   }
// }

//Q9

// function area_calc() {
//   var a_height = +prompt("enter height of area ");

//   var a_width = +prompt("enter width of area ");
//   var area = a_height * a_width;
// }

// area_calc();

//q11
// function new_strings() {
//   var string = "enter your string value ";

//   var capLett = string[0].toUpperCase();
//   var newString = string.slice(1);
//   document.write(capLett + newString);
// }

// new_strings();
