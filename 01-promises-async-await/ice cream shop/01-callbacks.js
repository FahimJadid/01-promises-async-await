// Synchronous
console.log('I');
console.log('Love');
console.log('U');

// Asynchronous
setTimeout(() => {
  console.log('Eat');
}, 2000);

console.log('Ice Cream');

// Callback
// When you pass a function inside another function as an argument, that's called a callback.

function One() {
  console.log('func 1');
}

function Two(One) {
  One();
}

Two(One); // Callback

// Lets make a Ice cream Shop

//  storing these ingredients in JavaScript objects like this
let stocks = {
  fruits: ['strawberry', 'grapes', 'banana', 'mango', 'lichi'],
  liquid: ['water', 'ice', 'milk'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};

// we'll create two functions ->
// order
// production

// Flow:
// 1. order from consumer
// 2. fetch ingredients
// 3. start production
// 4. serve

// creating order & production function with fat arrow

// let order = () => {};

// let production = () => {};

// Then let's establish a relationship between these two functions using a callback

// let order = (production) => {
//   console.log('Order placed. Please call production');
//   production();
// };

// let production = () => {
//   console.log('Production started');
// };

// //  Passing 👇 the name  of our second function as a parameter
// order(production);

// 1st function
let order = (fruitName, callProduction) => {
  setTimeout(function () {
    console.log(`${stocks.fruits[fruitName]} was selected`); // variable.object[array]
    // Order placed. Call production to start
    callProduction();
  });
};

// 2nd Function

let production = () => {
  setTimeout(() => {
    console.log('production has started');
    setTimeout(() => {
      console.log('The fruit has been chopped');
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`);
        setTimeout(() => {
          console.log('start the machine');
          setTimeout(() => {
            console.log(`Ice cream placed on ${stocks.holder[1]}`);
            setTimeout(() => {
              console.log(`${stocks.toppings[0]} as toppings`);
              setTimeout(() => {
                console.log('serve Ice cream');
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0000);
};

// Trigger
order(0, production);
