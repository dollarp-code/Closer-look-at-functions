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

const flight = 'LH234';
const qudus = {
  name: 'Qudus Hussein',
  passport: 35654654563,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr ' + passenger.name;

  if (passenger.passport === 35654654563) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, qudus);
// console.log(flight);
// console.log(qudus);

// is the same as doing...
// const flightNum = flight
// const passenger = qudus

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(qudus);
checkIn(flight, qudus);
