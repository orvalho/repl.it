// 1. isOldEnoughToDrink
// Write a function called "isOldEnoughToDrink".
// Given a number, in this case an age, "isOldEnoughToDrink" returns whether a person of this given age is old enough
// to legally drink in the United States.
// Notes:* The legal drinking age in the United States is 21.

function isOldEnoughToDrink(age) {
  return age >= 21 ? true : false;
}

// 2. isOldEnoughToDrive
// Write a function called "isOldEnoughToDrive".
// Given a number, in this case an age, "isOldEnoughToDrive" returns whether a person of this given age is old enough
// to legally drive in the United States.
// Notes:* The legal driving age in the United States is 16.

function isOldEnoughToDrive(age) {
  return age >= 16 ? true : false;
}

// 3. isOldEnoughToVote
// Write a function called "isOldEnoughToVote".
// Given a number, in this case an age, 'isOldEnoughToVote' returns whether a person of this given age is old enough
// to legally vote in the United States.
// Notes:* The legal voting age in the United States is 18.

function isOldEnoughToVote(age) {
  return age >= 18 ? true : false;
}

// 4. isOldEnoughToDrinkAndDrive
// Write a function called "isOldEnoughToDrinkAndDrive".
// Given a number, in this case an age, "isOldEnoughToDrinkAndDrive" returns whether a person of this given age is old enough
// to legally drink and drive in the United States.
// Notes:* The legal drinking age in the United States is 21.* It is always illegal to drink and drive in the United States.

function isOldEnoughToDrinkAndDrive(age) {
  return false;
}
