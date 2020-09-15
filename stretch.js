//### Task 3 - Stretch Goals

//After you have completed the requirements, **create** a new file called `stretch.js` and practice more with closures. There are no tests for these problems.

//See if you can complete one or more of the following challenges:

//1. Predict the output of the code below and explain why this is the output using what you learned today. When you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions

//```js
(function(){
  var a = b = 3;
})();
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
//```

/*
output: 
false
true

Explanation: 
a is undefined because it was defined using var, which is function scoped, and the console.log statement was outside of the function. b is actually a global variable becuase it is not defined with var. (b = 3)
*/



//2. Write a function that would allow you to do this using a closure. (This is another interview question we've seen before - when you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions)).

//```js
function createBase(base)
{
    return function add(num)
    {
        return base+num;
    }
}


var addSix = createBase(6);
console.log(addSix(10)); // returns 16
addSix(21); // returns 27
//```

//3. Research the differences between functional programming and object oriented programming. Then, describe the pros and cons of functional programming vs object-oriented programming. This is a common interview question and great practice!

/*
functional programming: 
pros: -functions return exactly what you expect them to
      -allows for more organization in your code
      -eliminates repetition in code
cons: -can lack readability at times
      -functional programming is newer than OOP, and therefore it is easier to find info and documentation on OOP

OOP:
pros: -very readable and understandable
      -utilizes an imperative style, more straight forward
cons: -can cause duplication/repetition in code
      -steeper learning curve
      -more lines of code/larger program size
*/

