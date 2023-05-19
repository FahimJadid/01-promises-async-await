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
