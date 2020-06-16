# Scope and Closure Challenge

The module challenge is the afternoon project or assignment that students work through independently. This expands on the guided project completed earlier with the instructor.

## JavaScript Foundations

## Scope and Closures

## Objectives

- Explain function scope
- Describe what closure is, how closure is created in a program and why it is important to understand closures in JavaScript  

## Introduction

This challenge focuses on both scope and closures.

In this challenge you will be working to build a `scoreboard` (in the console) that takes randomly generated data and keeps track of a game's progress. If you're not familiar with the rules of baseball what you need to know is this: there are 9 innings and teams take turns "at-bat." Teams can only score while they are at bat. A team stops being at bat once they have gotten 3 `outs` by either striking out or through game play. You can read more about baseball rules [here](https://www.rulesofsport.com/sports/baseball.html).

A scoreboard in a major league stadium looks something like this. In fact, the scoreboard at Fenway Park in Boston is actually quite famous. 

![Fenway Scoreboard](https://storage.googleapis.com/afs-prod/media/media:e959506330fd4e5890023c93cfbaac55/800.jpeg)

There are layers upon layers of nested functions within the game of baseball. Your challenge today will be to work through tasks associated with these layers, and ultimately to produce a scoreboard that logs in the console.

## Instructions

### Task 1 - Set Up Project and Tests

1. Fork repo and add TL as collaborator on Github
2. Clone _your_ fork (not Lambda's repo by mistake!)
3. `cd` into your newly cloned repository
4. Create a new branch by typing `git checkout -b <firstName-lastName>`
5. Work on your branch, push commits and create PR as usual

### Task 2a - MVP code

Find the file `index.js` and complete the tasks.

### Task 2b - Written questions

Edit the `ReadMe` file with your answers.

1. In your own words, define closure (1-2 sentences).

    Closure is when you are within the local scope - inside a function or curly braces, and it has to reach outside the local scope to access a variable or function that is needed inside the local scope.

2. Study the following code, then answer the questions below.

```js
function personalDice(name){
  return function(){
      // generate random number between 1 and 6
    const newRoll = Math.floor(Math.random() * 6);
    console.log(`${name} rolled a ${newRoll}`)
  }
}

const dansRoll = personalDice("Dan");

const zoesRoll = personalDice("Zoe");


dansRoll();
dansRoll();
```

a. Where is closure used in this code? How can you tell?

    The const functions dansRoll and zoesRoll use closure to reach out and use and execute the instructions inside the personalDice function.  I can tell because dansRoll and zoesRoll use the personalDice function, and put in the parameter of the name.  And the function personalDice is guarded in curly braces, but is being accessed by dansRoll and zoesRoll.

b. Compare and contrast calling `dansRoll` the first and second time. What is always the same? What could change?

    What is the same is that it will run the personalDice function both times.  What is different is that it will generate a different number for newRoll and thus display that Dan rolled a different number.  

c. What is the lexical scope of `newRoll`? 

    It extends beyond the personalDice function, because it can be accessed via invoking personalDice with an argument.

### Task 2c - Exit Ticket

Once you begin, you will have 15 minutes to answer the questions [here](https://app.codesignal.com/public-test/WjSzNh9gDrD8Xn8hw/enY3yPRP3nEm7E).

The completion of these questions is mandatory for MVP. However, passing the quiz doesn't affect your standing as a Lambda School student whatsoever. This is Lambda School testing itself! Please answer honestly and to the best of your ability without using external references.

### Task 3 - Stretch Goals

After you have completed the requirements, **create** a new file called `stretch.js` and practice more with closures. There are no tests for these problems.

See if you can complete one or more of the following challenges:

1. Predict the output of the code below and explain why this is the output using what you learned today. When you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions

```js
(function(){
  var a = b = 3;
})();
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

2. Write a function that would allow you to do this using a closure. (This is another interview question we've seen before - when you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions)).

```js
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
```

Did it.  See stretch.js



3. Research the differences between functional programming and object oriented programming. Then, describe the pros and cons of functional programming vs object-oriented programming. This is a common interview question and great practice!

    For functional programming, the code is made up mostly of variables and functions - driven by functions, whereas in
    object oriented programming, objects and methods make up the bulk.  Functional programming uses unchangeable data, and object oriented uses changeable data.  Functional follows declarative programming model, Object oriented follows imperative programming model.  Functional programming is used only when there are a few things with a greater number of operations.  Whereas object oriented has many things or objects with fewer operations.


    Pros of functional programming include that it can works well in an INTERACTIVE environment.  It is also efficient, can have nested functions, and less bugs.  Also, statements can be executed in any order.  It works well when complexity is present.  It works well in front end because it's less object oriented, and back end usually gives a lot of objects for the front end.

    Cons of functional programming is that it can have too many dependency statements thus creating "spaghetti code" - chaos... It can be harder to debug too. 

    Pros of Object Oriented Programming are that it gets useful data to the user, methods, functions, properties can be inherited, and it hids irrelevant data from users and prevents unauthorized access.  It can store data from outsiders securely.  Works good in back end, because it packages things nicely.

    Cons of Object Oriented Programming could include that statements have to be executed in particular order.  And there can be too many layers, causing difficulty.

    If you want to focus more on the function part - the action that happens, functional programming is better.  If you first want to emphasize the object that's going to do something, object oriented might suit you better.
  



## Resources

📚 [Scope and Closures Guide](https://css-tricks.com/javascript-scope-closures/)

🧠 ["I never Understood Closures" Blog](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)

## Submission Format

Follow these steps for completing your project.

- [ ] Submit a pull request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**
- [ ] Add your Team Lead as a reviewer on the pull request
- [ ] Your Team Lead will count the project as complete by merging the branch back into master
