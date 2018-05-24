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

// 5. getProperty
// Write a function called "getProperty".
// Given an object and a key, "getProperty" returns the value of the property at the given key. 
// Notes:* If there is no property at the given key, it should return undefined.

function getProperty(obj, key) {
  return obj.key;
}

// 6. addProperty
// Write a function called "addProperty".
// Given an object, and a key, "addProperty" sets a new property on the given object with a value of true.

function addProperty(obj, key) {
  return obj.myProperty = true;
}

// 7. removeProperty
// Write a function called "removeProperty".
// Given an object and a key, "removeProperty" removes the given key from the given object.


function removeProperty(obj, key) {
  delete obj[key];
}

// 8. checkAge
// Write a function called "checkAge". 
// Given a person's name and age, "checkAge" returns one of two messages:
// "Go home, {insert_name_here}!", if they are younger than 21."Welcome, {insert_name_here}!", if they are 21 or older.
// Naturally, replace "{insert_name_here}" with the given name. :)

function checkAge(name, age) {
  if(age < 21) {
    return "Go home, " + name + "!";
  } else {
    return "Welcome, " + name + "!";
  }
}

// 9. getFullName
// Write a function called "getFullName".
// Given a first and a last name, "getFullName" returns a single string with the given first and last names separated
// by a single space.

function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

// 10. getLengthOfWord
// Write a function called "getLengthOfWord".
// Given a word, "getLengthOfWord" returns the length of the given word.

function getLengthOfWord(word) {
  return word.length;
}
