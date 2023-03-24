// Code your solution in this file!

let arrayOfDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo']


//First test:
const returnFirstTwoDrivers = function(arrayOfDrivers) {
 return arrayOfDrivers.slice(0,2);
}

//Second test:
const returnLastTwoDrivers = function(arrayOfDrivers) {
return arrayOfDrivers.slice(-2);
}

//Third test:

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

//createFareMultiplier();

function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
}
const quadruples = createFareMultiplier(4);

//fareDoubler();

function fareDoubler(fare) {
    return fare * 2;
}

//fareTripler();

function fareTripler(fare) {
    return fare * 3;
}

//selectedDifferDrivers();

function selectDifferentDrivers(drivers, fn) {
    return fn(drivers);
  }