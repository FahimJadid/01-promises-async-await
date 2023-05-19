// Promises vs Async/Await in JavaScript

// Before async/await, to make a promise we wrote this:

function order() {
  return new Promise((resolve, reject) => {
    // Write code here
  });
}

// Now using async/await, we write one like this:

//👇 the magical keyword
async function order() {
  // Write code here
}

// How to use the Try and Catch keywords

// Promises in JS -> resolve or reject
// We used resolve and reject in promises like this:
function kitchen() {
  return new Promise((resolve, reject) => {
    true ? reject('error') : resolve('promise done');
  });
}

kitchen().then().then().catch().finally();

// Async / Await in JS -> try, catch
// When we're using async/await, we use this format:

// Magical keyword
async function chef() {
  try {
    // Let's create a fake problem
    await abc;
  } catch (error) {
    console.log('abc', error);
  } finally {
    console.log('It is done');
  }
}

kitchen();
