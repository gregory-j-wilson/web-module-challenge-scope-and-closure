// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 *    Counter1 puts the count variable inside the function, and later defines counter1 as the same as counterMaker function, but outside of the counterMaker function.  Counter2 defines the count variable on the global scope outside of the counter2 function, and doesn't define counter2 later outside the function.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 *    Counter1 uses a closure, because outside of the function counterMaker, the variable counter1 uses closure to access the counterMaker function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 *    Counter1 would be better if you just want to use the count variable for this function, and counter2 would be better if you want to use count variable for other parts of your code as well.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {

    return Math.floor(Math.random() * 3)
    }

console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, numberOfInnings){

    let homeScore = 0;
    let awayScore = 0;

  for (i = 0; i < numberOfInnings; i++) {
     homeScore += inning();
     awayScore += inning();
  }

  return {
    Home: homeScore,
    Away: awayScore,
  }
}

console.log(finalScore(inning, 5));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each point in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */


function ordinalNumber(cardinal) {

    const lastDigit = cardinal % 10;
    const tens = cardinal % 100;

    if (tens >= 10 && tens <= 19) {
      return cardinal + 'th';
    } else if (lastDigit === 1) {
      return cardinal + 'st';
    } else if (lastDigit === 2) {
      return cardinal + 'nd';
    } else if (lastDigit === 3) {
      return cardinal + 'rd';
    } else {
      return cardinal + 'th';
    }

}

function scoreboard(inning, numberOfInnings) {

  let homeScore = 0;
  let awayScore = 0;

  for (i = 0; i < numberOfInnings; i++) {
     homeScore += inning();
     awayScore += inning();

     console.log(`${ordinalNumber(i + 1)} inning: ${homeScore} - ${awayScore}`)
  } 

  console.log(`Final Score: ${homeScore} - ${awayScore}`)
}

scoreboard(inning, 9)


