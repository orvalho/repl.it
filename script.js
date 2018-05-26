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

// 11. getLengthOfTwoWords
// Write a function called "getLengthOfTwoWords".
// Given 2 words, "getLengthOfTwoWords" returns the sum of their lengths.

function getLengthOfTwoWords(word1, word2) {
  return word1.length + word2.length;
}

// 12. isGreaterThan10
// Write a function called "isGreaterThanTen".
// Given a number, "isGreaterThanTen" returns whether it is greater than 10.

function isGreaterThanTen(num) {
  return num > 10 ? true : false;
}

// 13. isLessThan30
// Write a function called "isLessThan30".
// Given a number, "isLessThan30" returns whether the given number is less than 30.

function isLessThan30(num) {
  return num < 30 ? true: false;
}

// 14. isLessThan
// Write a function called "isLessThan".
// Given 2 numbers, "isLessThan" returns whether num2 is less than num1.

function isLessThan(num1, num2) {
  return num2 < num1 ? true : false;
}

// 15. isGreaterThan
// Write a function called "isGreaterThan".
// Given 2 numbers, "isGreaterThan" returns whether num2 is greater than num1.

function isGreaterThan(num1, num2) {
  return num2 > num1 ? true : false;
}

// 16. isEqualTo
// Write a function called "isEqualTo".
// Given 2 numbers, "isEqualTo" returns whether num2 is equal to num1.

function isEqualTo(num1, num2) {
  return num1 === num2 ? true : false;
}

// 17. isEven
// Write a function called "isEven".
// Given a number, "isEven" returns whether it is even.

function isEven(num) {
  return num % 2 === 0 ? true : false;
}

// 18. isOdd
// Write a function called "isOdd".
// Given a number, "isOdd" returns whether the given number is odd.

function isOdd(num) {
  return num % 2 !== 0 ? true : false;
}

// 19. isSameLength
// Write a function called "isSameLength".
// Given two words, "isSameLength" returns whether the given words have the same length.

function isSameLength(word1, word2) {
  return word1.length === word2.length ? true : false;
}

// 20. areBothOdd
// Write a function called "areBothOdd".
// Given 2 numbers, "areBothOdd" returns whether or not both of the given numbers are odd.

function areBothOdd(num1, num2) {
  if (num1 % 2 !== 0 && num2 % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

// 21. isEitherEven
// Write a function called "isEitherEven".
// Given two numbers, "isEitherEven" returns whether or not either one of the given numbers is even.

function isEitherEven(num1, num2) {
  if (num1 % 2 === 0 || num2 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// 22. isOddLength
// Write a function called "isOddLength".
// Given a word, "isOddLength" returns whether the length of the given word is odd.

function isOddLength(word) {
  return word.length % 2 !== 0 ? true : false;
}

// 23. isEvenLength
// Write a function called "isEvenLength".
// Given a word, "isEvenLength" returns whether the length of the word is even.

function isEvenLength(word) {
  return word.length % 2 === 0 ? true: false;
}

// 24. isEvenAndGreaterThanTen
// Write a function called "isEvenAndGreaterThanTen".
// Given a number, "isEvenAndGreaterThanTen" returns whether it is both even and greater than 10.

function isEvenAndGreaterThanTen(num) {
  return num % 2 === 0 && num > 10 ? true : false;
}

// 25. average
// Write a function called "average".
// Given two numbers, "average" returns their average.

function average(num1, num2) {
  return (num1 + num2) / 2;
}

// 26. computeAreaOfATriangle
// Write a function called "computeAreaOfATriangle".
// Given the base and height of a triangle, "computeAreaOfATriangle" returns its area.

function computeAreaOfATriangle(base, height) {
  return 1/2 * base * height;
}

// 27. cube
// Write a function called "cube".
// Given a number, "cube" returns the cube of that number.

function cube(num) {
  return Math.pow(num, 3);
}

// 28. square
// Write a function called "square".
// Given a number, "square" should return the square of the given number.

function square(num) {
  return Math.pow(num, 2);
}

// 29. computeAverageLengthOfWords
// Write a function called "computeAverageLengthOfWords".
// Given two words, "computeAverageLengthOfWords" returns the average of their lengths.

function computeAverageLengthOfWords(word1, word2) {
  return (word1.length + word2.length) / 2;
}

// 30. addFullNameProperty
// Write a function called "addFullNameProperty".
// Given an object that has a "firstName" property and a "lastName" property, "addFullNameProperty" returns
// a "fullName" property whose value is a string with the first name and last name separated by a space.

function addFullNameProperty(obj) {
  obj.fullName = obj.firstName + ' ' + obj.lastName;
}

// 31. addObjectProperty
// Write a function called "addObjectProperty".
// Given two objects and a key, "addObjectProperty" sets a new property on the 1st object at the given key.
// The value of that new property is the entire 2nd object.

function addObjectProperty(obj1, key, obj2) {
  obj1[key] = obj2;
}

// 32. isPersonOldEnoughToDrinkAndDrive
// Write a function called "isPersonOldEnoughToDrinkAndDrive".
// Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrinkAndDrive" returns
// whether the given person is old enough to legally drink and drive in the United States.
// Notes:* The legal drinking age in the United States is 21.* The legal driving age in the United States
// is 16.* It is always illegal to drink and drive in the United States.

function isPersonOldEnoughToDrinkAndDrive(person) {
  return false;
}

// 33. isPersonOldEnoughToDrive
// Write a function called "isPersonOldEnoughToDrive".
// Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrive" returns whether
// the given person is old enough to drive.
// Notes:* The legal driving age in the United States is 16.

function isPersonOldEnoughToDrive(person) {
  return person.age >= 16 ? true : false;
}

// 34. isPersonOldEnoughToVote
// Write a function called "isPersonOldEnoughToVote".
// Given a "person" object, that contains an "age" property, "isPersonOldEnoughToVote" returns whether
// the given person is old enough to vote.
// Notes:* The legal voting age in the United States is 18.

function isPersonOldEnoughToVote(person) {
  return person.age >= 18 ? true : false;
}

// 35. isPersonOldEnoughToDrink
// Write a function called "isPersonOldEnoughToDrink".
// Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrink" returns whether
// the given person is old enough to drink.
// Notes:* The legal drinking age in the United States is 21.

function isPersonOldEnoughToDrink(person) {
  return person.age >= 21 ? true : false;
}

// 36. addArrayProperty
// Write a function called "addArrayProperty".
// Given an object, a key, and an array, "addArrayProperty" sets a new property on the object at the given key,
// with its value set to the given array.

function addArrayProperty(obj, key, arr) {
  obj[key] = arr;
}
