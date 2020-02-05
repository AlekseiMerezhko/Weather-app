// ----------------------- Task 1 -----------------------
/*
Write a function that will return the count of distinct case-insensitive alphabetic
characters and numeric digits that occur more than once in the input string.
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
*/

function duplicateCount(text) {
  const textArray = text.toLowerCase().split("");
  const filterredAray = textArray
    .filter((char, i, arr) => {
      return arr.indexOf(char) !== i;
    })
    .reduce((prev, next) => {
      return prev !== next && !prev.includes(next) ? (prev += next) : prev;
    }, "");
  return filterredAray.length;
}

// duplicateCount("");
// duplicateCount("abcde");
// duplicateCount("aabbcdea");
// duplicateCount("aabBcde");
// duplicateCount("Indivisibility");
// duplicateCount("Indivisibilities");

// ----------------------- Task 2 -----------------------
/*
Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others.
Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers,
he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)
*/

function iqTest(numbers) {
  const intArray = numbers.split(" ").map(int => parseInt(int));

  const isOdd =
    intArray.filter(num => {
      return num % 2 ? num : null;
    }).length === 1;

  const value = intArray
    .filter(num => {
      if (isOdd) {
        return num % 2 ? num : null;
      } else {
        return num % 2 !== 0 ? null : num;
      }
    })
    .join();
  return intArray.indexOf(parseInt(value)) + 1;
}

// iqTest("2 4 7 8 10");
// iqTest("1 2 2");

// ----------------------- Task 3 -----------------------
/*
The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.
*/

// function tickets(peopleInLine){
//   function checkValue(arr, value){
//     return arr.includes(value)
//   }
//   const value = peopleInLine.reduce((prev, next) => {
//   console.log(prev, "prev");
//     if(next === 25){
//       return prev = [...prev, next]
//     }
//     if(next === 50){
//       const include = checkValue(prev, 25)
//       const i = prev.indexOf(25);
//       if(include){
//         prev[i] = 50
//       }
//       return include ? [...prev] : [...prev, false]
//     } else{
//       const include25 = checkValue(prev, 25)
//       const include50 = checkValue(prev, 50)
//       const i1 = prev.indexOf(25);
//       const i2 = prev.indexOf(50);
//       if(include25 && include50){
//         prev[i1] = 0
//         prev[i2] = 0
//       }
//       else if(include25 && !include50){
//         let prev2 = prev.filter((val, i, arr) => {
//           return val === 25
//         })
//         if(prev2.length > 2){

//           for(let i = 0; i<3; i++){
//             const i1 = prev.indexOf(25);
//             prev[i1] = 0
//           }
//           return [...prev]
//         }else{
//           return  [...prev, false]
//         }

//       }
//       else if(!include25 && !include50){
//           return  [...prev, false]
//         }
//       else{
//         prev = [...prev, false]
//       }
//       return [...prev]
//     }
//   }, [])

//   return value.includes(false) ? "NO" : "YES"
// }

function tickets(peopleInLine) {
  function checkValue(arr, value) {
    return arr.includes(value);
  }
  const value = peopleInLine.reduce((prev, next) => {
    if (next === 25) {
      return [...prev, next];
    }
    if (next === 50) {
      const include = checkValue(prev, 25);
      const i = prev.indexOf(25);
      if (include) {
        prev[i] = 50;
      }
      return include ? [...prev] : [...prev, false];
    } else {
      const include25 = checkValue(prev, 25);
      const include50 = checkValue(prev, 50);
      const i1 = prev.indexOf(25);
      const i2 = prev.indexOf(50);
      if (include25 && include50) {
        prev[i1] = 0;
        prev[i2] = 0;
      } else if (include25 && !include50) {
        let prev2 = prev.filter(val => {
          return val === 25;
        });
        if (prev2.length > 2) {
          for (let i = 0; i < 3; i++) {
            const i1 = prev.indexOf(25);
            prev[i1] = 0;
          }
          return [...prev];
        } else {
          return [...prev, false];
        }
      } else if (!include25 && !include50) {
        return [...prev, false];
      } else {
        prev = [...prev, false];
      }
      return [...prev];
    }
  }, []);

  return value.includes(false) ? "NO" : "YES";
}

// Test.assertEquals(tickets([25, 25, 50, 50]), "YES");
// Test.assertEquals(tickets([25, 100]), "NO");

// ----------------------- Task 3 -----------------------
// You are going to be given a word. Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

function getMiddle(s) {
  const lng = s.length;
  const middle = lng / 2;
  const isOdd = lng % 2 ? true : false;
  return isOdd ? s[Math.floor(middle)] : s.slice(middle - 1, middle + 1);
}

// Test.describe("GetMiddle", function() {
//   Test.it("Tests", function() {
//     Test.assertEquals(getMiddle("test"),"es");
//     Test.assertEquals(getMiddle("testing"),"t");
//     Test.assertEquals(getMiddle("middle"),"dd");
//     Test.assertEquals(getMiddle("A"),"A");
//   });
// });
