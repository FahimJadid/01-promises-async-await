// Promises

/*
A promise has three states:

$ Pending: This is the initial stage. Nothing happens here. Think of it like this, your customer is taking their time giving you an order. But they haven't ordered anything yet.
$ Resolved: This means that your customer has received their food and is happy.
$ Rejected: This means that your customer didn't receive their order and left the restaurant.
*/

/*
Our promise has 2 parts:

Resolved [ ice cream delivered ]
Rejected [ customer didn't get ice cream ]
*/

let stocks = {
  fruits: ['strawberry', 'grapes', 'banana', 'mango', 'lichi'],
  liquid: ['water', 'ice', 'milk'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};

// let isShopOpen = true;
let isShopOpen = false;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        // work is 👇 getting done here
        resolve(work());
        // 👇 Setting time here for 1 work
      }, time);
    } else {
      reject(console.log('Our shop is closed'));
    }
  });
};

function flavour() {
  console.log(`${stocks.fruits[0]} was taken`);
}

function flavour() {
  console.log('production has started');
}

function production() {
  console.log('Fruit has been chopped');
}

function chopped() {
  console.log('Fruit has been chopped');
}

function liquid() {
  console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);
}

function holder() {
  console.log(`ice cream placed on ${stocks.holder[1]}`);
}

function toppings() {
  console.log(`${stocks.toppings[0]} as toppings`);
}

function toppings() {
  console.log(`${stocks.toppings[0]} as toppings`);
}

// Promise chaining
// Note: don't forget to write the return word inside your .then handler.

// Set 👇 time here
order(2000, flavour())
  .then(() => {
    return order(0, production());
  })
  .then(() => {
    return order(2000, chopped());
  })
  .then(() => {
    return order(1000, liquid());
  })
  .then(() => {
    return order(2000, holder());
  })
  .then(() => {
    return order(3000, toppings());
  })
  .catch(() => {
    console.log('Customer left');
  })
  .finally(() => {
    console.log('end of day');
  });

// Error handling

// To catch our errors, let's change our variable to false.

// let is_shop_open = false;

// A small reminder here:

// .then works when a promise is resolved
// .catch works when a promise is rejected
