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

// How to use the await keyword in JavaScript

function toppings_choice() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log('Which toppings would you love'));
    }, 3000);
  });
}

async function kitchen() {
  console.log('A');
  console.log('B');
  console.log('C');

  await toppings_choice();
  console.log('D');
}

kitchen();
console.log('doing the dishes');
console.log('cleaning the tables');
console.log('taking orders');

/*
We're gonna create two functions ->

kitchen: to make ice cream
time: to assign the amount of time each small task will take.
*/

let isShopOpen = true;
function time(ms) {
  return Promise((resolve, reject) => {
    isShopOpen ? reject(console.log(Closed)) : setTimeout(resolve, ms);
  });
}

async function kitch() {
  try {
    //
    await time(2000);
    console.log(`${stocks.Fruits[0]} was selected`);

    await time(0000);
    console.log('production has started');

    await time(2000);
    console.log('fruit has been chopped');

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);

    await time(1000);
    console.log('start the machine');

    await time(2000);
    console.log(`ice cream placed on ${stocks.holder[1]}`);

    await time(3000);
    console.log(`${stocks.toppings[0]} as toppings`);

    await time(2000);
    console.log('Serve Ice Cream');
  } catch (error) {
    console.log(error);
    //
  } finally {
    console.log('closed');
  }
}

kitch();
