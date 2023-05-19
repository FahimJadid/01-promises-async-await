// async and await

async function myfunc() {
  // This is an async function
}

async function fetchProducts() {
  try {
    const res = await fetch(
      'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
    );
    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`);
    }
    const data = await res.json();
    console.log(data[0].name);
  } catch (error) {
    console.log(`${error}`);
  }
}

fetchProducts();

async function fetchProducts() {
  try {
    const res = await fetch(
      'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
    );
    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`);
    }
    const data = await res.json();
    console.log(data[0].name);
  } catch (error) {
    console.log(`${error}`);
  }
}

const promise = fetchProducts();
promise.then((data) => {
  console.log(data[0].name);
});
