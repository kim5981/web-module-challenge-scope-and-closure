// ⭐️ Example Challenge START ⭐️

/**Example Task : processFirstItem()
 * This example shows how you might go about solving the rest of the tasks
 * 
 * Use the higher order function processFirstItem below to do the following:
 *  1. Receive an array of strings in a parameter
 *  2. Receive a callback function that takes a string as its argument in a parameter
 *  3. Return the result of invoking the callback function and passing in the FIRST 
 *     element in the array as the argument
 * 
 * The following code is demonstrating a way of completing this task
 * It returns the string `foofoo`
*/

function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}
console.log(processFirstItem(['foo','bar'],function(str){return str+str}));
//processFirstItem takes stringList..
//stringList is a placeholder that holds ['foo', 'bar']
//..and takes callback ..
//callback is a function that takes a variable str and returns that value + itself
//.. processFirstItem returns callback (callback does str+str) with input
//of stringList[0] which if you remember stringList holds ['foo', 'bar']
//so stringList[0] is 'foo'
//so if str here = 'foo' then str + str would = 'foofoo' 

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/*Task 1: counterMaker()
  
  Study the code for counter1 and counter2, then answer the questions below.
  
  1. What is the difference between counter1 and counter2?
 
  -counter 1 takes a nested function `counter ()` to increase the variable `count` from
 counterMaker. 

 -counter 2 declares and initializes count in the global scope instead of within the function
 and references it within the function th increase the count by one when counter2 is called


  2. Which of the two uses a closure? How can you tell?
  A closure occurs in counter one when counter() reaches out to counterMaker() for the variable count since 
  count only exists in the scope counterMaker(), not counter();
  
  3. In what scenario would the counter1 code be preferable? In what scenario would 
     counter2 be better?  
     - Counter 1 would be better when you want to create a function that creates a counter to increase every time, and update every time.
     Especially since count exists within the scope of counterMaker()
     - Counter 2 would be better when you simply want to make a counter and use it once 

*/

//--- counter1 code ---
function counterMaker() {
  //function called counterMaker with no param
  let count = 0;
  //count starts at 0
  return function counter() {
    //returns a new function called counter
   return count++;
   //counter increases count by one every time
  }
}
//so if we called counter(), it would ref counterMaker to get count and do count++
//if we called counterMaker(), it would also still return count++ using function counter


const counter1 = counterMaker();
//counterMaker is copied into variable counter1


//--- counter2 code ---
let count = 0;
//count starts at 0
function counter2() {
  //a new function counter is declared
  return count++;
  //that returns this count ^^ (from the global scope) and increases it by one
}


/* ⚾️⚾️⚾️ Task 2: inning() ⚾️⚾️⚾️
Use the inning function below to do the following:
  1. Return a random whole number of points between 0 and 2 scored by one team in an inning
  
  For example: invoking inning() should return a numerical score value of 0, 1, or 2
  
NOTE: This will be a callback function for the tasks below
*/

function inning(){
  return Math.floor(Math.random() * 3);   
}
console.log("- Task 2: ", inning());

/* ⚾️⚾️⚾️ Task 3: finalScore() ⚾️⚾️⚾️
Use the finalScore function below to do the following:
  1. Receive the callback function `inning` that was created in Task 2 
  2. Receive a number of innings to be played
  3. After each inning, update the score of the home and away teams
  4. After the last inning, return an object containing the final (total) score of the innings played
  
  For example: invoking finalScore(inning, 9) might return this object:
{
  "Home": 11,
  "Away": 5
}
*/ 

function finalScore(inning, numInnings){
  let homeScore =0;
  let awayScore = 0;
  for (let i = 0; i < numInnings; i++) {
    homeScore = inning() + homeScore;
    awayScore = inning() + awayScore;
  }
  return {"Home": homeScore, "Away": awayScore,};

}
//console.log("- Task 3: ", finalScore(inning, 9));


/* ⚾️⚾️⚾️ Task 4: getInningScore() ⚾️⚾️⚾️
Use the getInningScore() function below to do the following:
  1. Receive a callback function - you will pass in the --> inning <-- function from task 2 as your argument 
  2. Return an object with a score for home and a score for away that populates from invoking the inning callback function */
//inning is a random # gen of 1-2
function getInningScore(inning) {
  return {"Home" : inning(), "Away" : inning() };
}

console.log("- Task 4: ", getInningScore(inning));

/* ⚾️⚾️⚾️ Task 5: scoreboard() ⚾️⚾️⚾️
Use the scoreboard function below to do the following:
  1. Receive the callback function `getInningScore` from Task 4
  2. Receive the callback function `inning` from Task 2
  3. Receive a number of innings to be played
  4. Return an array where each of its index values equals a string stating the
  Home and Away team's scores for each inning.  Not the cumulative score.
  5. If there's a tie at the end of the innings, add this message containing the score to the end of the array:  "This game will require extra innings: Away 12 - Home 12"  (see tie example below)
     If there isn't a tie, add this message to the end of the array: "Final Score: Away 13 - Home 11"  (see no tie example below)
  
  NO TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 2", 
  "Inning 2: Away 2 - Home 1",
  "Inning 3: Away 0 - Home 2", 
  "Inning 4: Away 2 - Home 2", 
  "Inning 5: Away 2 - Home 0", 
  "Inning 6: Away 1 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 2",
  "Inning 9: Away 1 - Home 0", 
  "Final Score: Away 11 - Home 12"  
]

  TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 1", 
  "Inning 2: Away 2 - Home 2",
  "Inning 3: Away 1 - Home 0", 
  "Inning 4: Away 1 - Home 2", 
  "Inning 5: Away 0 - Home 0", 
  "Inning 6: Away 2 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 1",
  "Inning 9: Away 1 - Home 1", 
  "This game will require extra innings: Away 10 - Home 10"
]  
  */

function scoreboard(getInningScoreCB, inningCB, numInnings) {
  //new array stores home and away team scores in string 
  const newArray = [];
  //set scores to zero to start 
  let homeScore = 0;
  let awayScore = 0;
 //loop through innings (9)
  for (let i = 1; i < numInnings; i++) {   
    //currentInning declared as variable to store vvv which gives random inning scores for home and away: { Home: 0, Away: 1 }
    let currentInning = getInningScoreCB(inningCB);
    homeScore = homeScore + currentInning.Home // homeScore = (0) + random # from currentInning object ^^
    awayScore = awayScore + currentInning.Away // awayScore = (0) + random # from currentInning object ^^
    //push the string vvv 
    newArray.push( `Inning ${i}: Away ${currentInning.Away} - Home ${currentInning.Home}` )
  } //closes the loop
  
  if (homeScore === awayScore) {
    newArray.push(`This game will require extra innings: Away ${awayScore} - Home ${homeScore}`)
  } else { 
    return newArray.push(`Final Score: Away ${awayScore} - Home ${homeScore}`);
  } 
  return newArray;
}


console.log("- Task 5: ", scoreboard(getInningScore, inning, 9));




/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working');
  return 'bar';
}
foo();
module.exports = {
  foo,
  processFirstItem,
  counter1,
  counter2,
  inning,
  finalScore,
  getInningScore,
  scoreboard,
}
