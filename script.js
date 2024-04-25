'use strict';
// SETTING DEFAULT PARAMETERS
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// createBooking('LH123', undefined, 1000);

// HOW PASSING ARGUMENTS WORKS: VALUE VS REFERENCE

// const flight = 'LH234';
// const qudus = {
//   name: 'Qudus Hussein',
//   passport: 35654654563,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr ' + passenger.name;

//   if (passenger.passport === 35654654563) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport');
//   }
// };

// checkIn(flight, qudus);
// console.log(flight);
// console.log(qudus);

// is the same as doing...
// const flightNum = flight
// const passenger = qudus

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(qudus);
// checkIn(flight, qudus);

// // Functions accepting callback functions
// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// // JS uses callbacks all the time
// const high5 = function () {
//   console.log('👋');
// };

// document.body.addEventListener('click', high5);

// ['jonas', 'Martha', 'Adam'].forEach(high5);

// FUnctions RETURNING FUNCTIONS

const greetMe = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name.toUpperCase()}`);
  };
};

greetMe('Yo')('Triggs');

// Challenge using arrow function
const greet = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey');
greeterHey('Qudus');
greeterHey('Jonas');

greet('Hello')('Bobo');
