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
 * counter1 is a function that stays within its own scope (only uses a variable that was declared in the function) and returns a function, while counter2 uses a closure, referencing a variable from the global scope, incrementing the variable, and does not include a return statement.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter2 uses a closure because it reaches out and references a variable from outside its function scope (references a variable from the global scope).
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * counter1 would be preferable when you want to create multiple instances of counters that you want to use. counter2 would be preferable when you simply want to increment a certain count variable.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
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

function inning()
{
  return Math.floor(Math.random()*3);
}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, num)
{
  let homeScore = 0;
  let awayScore = 0;
  for(let i=0; i<num; i++)
  {
    homeScore += inning();
    awayScore += inning();
  }
  return `Home: ${homeScore}\nAway: ${awayScore}`;
}

console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function getInningScore(home, away)
{
  return away+" - "+home;
}

function scoreboard(getInningScore, inning, num) 
{
  let score = "";
  let home = 0;
  let away = 0;
  for(let i=0; i<num; i++)
  {
    home += inning();
    away += inning();
    if(i===0)
    {
      score+="1st inning: "+getInningScore(away,home);
    }
    if(i===1)
    {
      score+="\n2nd inning: "+getInningScore(away,home);
    }
    if(i===2)
    {
      score+="\n3rd inning: "+getInningScore(away,home);
    }
    if(i===3)
    {
      score+="\n4th inning: "+getInningScore(away,home);
    }
    if(i===4)
    {
      score+="\n5th inning: "+getInningScore(away,home);
    }
    if(i===5)
    {
      score+="\n6th inning: "+getInningScore(away,home);
    }
    if(i===6)
    {
      score+="\n7th inning: "+getInningScore(away,home);
    }
    if(i===7)
    {
      score+="\n8th inning: "+getInningScore(away,home);
    }
    if(i===8)
    {
      score+="\n9th inning: "+getInningScore(away,home);
    }
  }
  score += "\n\nFinal Score "+getInningScore(away,home);
  return score;
}

console.log(scoreboard(getInningScore,inning,9));

