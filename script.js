function daysOfAYear(year) {
  // Check if the year is a leap year
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return 366; // Leap year has 366 days
  } else {
    return 365; // Non-leap year has 365 days
  }
}

// Examples
console.log(daysOfAYear(2022)); // Output: 365
