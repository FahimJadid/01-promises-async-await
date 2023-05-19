// Promises:

// Using the fetch() API

/*
To do this,
we'll make an HTTP request to the server. 
In an HTTP request, we send a request message 
to a remote server, and it sends us back a response. 
In this case, we'll send a request to get a JSON file from the server. 
we'll use the fetch() API
*/

const fetchPromise = fetch(
  'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
);

console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`Response: ${response.status}`);
});

console.log('Started Request...');

// The complete output should be something like:

// Promise { <state>: "pending" }
// Started request…
// Received response: 200

// Chaining promises
const fetchProm = fetch(
  'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
);

fetchProm.then((res) => {
  const jsonProm = res.json();
  jsonProm.then((data) => {
    console.log(data[0].name);
  });
});

const fetchprms = fetch(
  'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
);

fetchprms
  .then((res) => res.json())
  .then((data) => {
    console.log(data[0].name);
  });

const fetchProm = fetch(
  'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
);

fetchProm
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Http error: ${response.status}`);
    }
    return res.json();
  })
  .then((data) => {
    console.log(data[0].name);
  });

//   Catching errors

const fetchPromise = fetch(
  'bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
);
fetchPromise
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error)=>{
    console.error(${error})
  })
