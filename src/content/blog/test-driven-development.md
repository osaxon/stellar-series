---
title: Test Driven Development
tags: ["Testing", "Jest"]
exerpt: "The code we write is not just for us. Our colleagues and potentially our users will see it, use it and try to understand it"
relatedPosts: []
image: "../images/E6841_022.svg"
---

# Test Driven Development (TDD)

When writing good quality code we need to make sure our functions are fully tested. The process we will use to achieve this is called test-driven-development.

When naming our test files they have all been using the `.test.js` extension. Jest will automatically find and run all test files ending with `.test.js` when we run our test script unless specified otherwise.

First we need to decide on what behaviour we would like to test. We will start with the simplest behaviour first. Once that is working we can add another piece of functionality and test that independently. This allows us to build up to an eventual solution so that we don't have to solve the whole problem at once.

## Red - green - refactor cycle

This process is referred to as the red-green-refactor cycle

1. We first decide what functionality we want to implement.
2. Write a test for it, watch it fail (red)
3. Write the minimum amount of code that will make that test pass (green)
4. Refactor code if necessary
5. Repeat.

We will test the behaviour of our function, not the implementation. Testing a particular implementation is brittle because if you change the way you do something, your tests will need to change too.

For example, we are not interested in whether a function uses a for loop or a while loop, so long as it produces the required result. As such our tests are focused on the input and output of the function.

It is important to see that our tests fail before we pass them. This way we avoid false positives and make sure that the tests are running correctly.

The function only has to do what is required of it by the tests. Writing the minimal amount of code and keeping the RGR loop tight helps us clearly see which parts of our code break stuff. Less code is better! Simple code is easier to debug!

As a whole the test-suite will test all of the functionality but implementing one feature at a time makes it significantly easier to solve complex problems.

The code we write is not just for us. Our colleagues and potentially our users will see it, use it and try to understand it.

For this reason the code we write needs to be:

- Clear
- Maintainable
- Readable
- Guaranteed to work

Without these guarantees whenever we write code there's always the possibility of making mistakes and introducing errors and bugs.

## Bugs and Errors

- Errors are incorrect code. They are fairly straight forward to find and fix because they generally stop the execution of our code.
- Bugs are code that is valid but doesn't behave the way we expected. Often with unintended side-effects.

As developers we spend more time debugging code than actually writing it. Bugs can be very hard to track down and are much harder to find, inside a large code-base, than when that code was first written.

Some classic cases of bugs are:

- [First record of a bug by Grace Hopper (1945)](https://thenextweb.com/shareables/2013/09/18/the-very-first-computer-bug/#.tnw_KA5QF5IB)
- USS Yorktown cruiser had a division by zero error that brought down the network and the propulsion system
- [A \$125M Mars Rover crashed in 1999 because of conflicts between metric and imperial units.](https://www.wired.com/2010/11/1110mars-climate-observer-report/)

There are several ways of preventing bugs, such as:

- Static typing (typed languages, TypeScript, Flow): the compiler lets us know of problems with data types
- Linting: statically analyse code (not running it!) to catch formatting errors that could lead to run-time errors. Limited efficacy due to static nature but good for consistent code style.
- Testing: a series of automated tasks that check the result or behaviour of our code against expectations.

Testing is a broad field and there are many types of tests that we use to make sure our code works, such as:

### Unit Testing

Testing a small unit of code (typically a function) for specific inputs /outputs. These are quick, small and are generally written to develop the code.

### Integration Testing

Testing that multiple (individually tested) units work together. We know all the units work, but we need to make sure they are connected in the right way. Slower and more complicated than unit testing.

### End to End Testing

Testing the application flow as a complete system. Typically used to test _critical paths_ such as user login or payment.

## Unit testing with jest

[Jest](https://jestjs.io/) is a testing framework for JavaScript. It can be installed locally to a project
with:

`npm i jest -D`

**note: `npm i` is short for `npm install` which also works. The `-D` option adds jest to our package.json as a devDependency**

We can then add a script to our `package.json` which will run our tests:

```json
"scripts" : {
  "test": "jest __tests__/myFunctionToBeTested.test.js"
}

```

We can give jest an individual file as above or simply give it `jest`, and it will run every file that follows the `.test.js` pattern.

```json
"scripts" : {
  "test": "jest"
}

```

We can also install jest globally by using `npm i jest -g` and this will allow us to use the jest command from anywhere with our terminal. Be aware that it is your responsibility to keep it up to date in this case, as you won't be using the latest version that you would get when installing locally each time.

When running a test, jest will run the file with node. It will define some functions, such as `describe`, `test`, and `it` in the global scope that we can use. These are used by the interface jest provides so we can see our results helpfully laid out at the end.

```
// __tests__/myFunc.test.js
describe('myFunc', () => {
  test('has some functionality', () => {
    // assert the functionality works as expected
  });
  // tests increasing in complexity...
});

```

We use a combination of describe and it/test blocks to test the behaviour of our function. Jest runs the code inside the callback function of the it block. If there are no errors, the test is considered a pass. If an exception is thrown, the test will fail, and show us what the exception was.

For this reason **jest tests will pass by default** if there is nothing to make them fail.

Jest also provides us with an assertion library: a collection of tools to help us test what we `expect` our functions to do.

```
const sumArgs = require('../index');

describe('sumArgs', () => {
  test('returns a single passed number', () => {
    const actual = sumArgs(1);
    const expected = 1;
    expect(actual).toBe(expected);
  });
});

```

[Expect](https://jestjs.io/docs/en/expect#expectvalue) allows us to use the semantic [matcher functions](https://jestjs.io/docs/en/using-matchers) that come with jest (e.g. `.toBe`, `.toEqual`, `.toBeLessThan`, and many more) so that our tests read like English sentences. In the example above, by using `.toBe` we are telling jest that we expect the result of `sumArgs(1)` to be strictly equal to 1.

## Misconceptions about TDD

- Test code is simple, repetitive and not _real_ code.
- Writing tests slows down the development process.
- Writing tests is boring and optional. It's a non-essential nice-to-have.

## Reality

- Testing software is a complex and far from trivial task.
- If you think it's boring and not real code it probably means that you are doing it wrong.
- Research studies demonstrate that TDD and pair-programming are the two techniques that have the most impact in the quality of the code developers write.
- We write code for the future. TDD practices have the potential to slightly slow down the development now, but the time savings in maintenance later completely outweigh them.

Remember this:

> TDD practices are so mature in the industry that, in a production environment, untested code will be treated as code that doesn't work correctly.
