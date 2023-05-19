// Implementing an alarm() API
const name = document.querySelector('#name');
const delay = document.querySelector('#delay');
const output = document.querySelector('#output');
const button = document.querySelector('#set-alarm');

// function setAlarm() {
//   setTimeout(() => {
//     output.textContent = 'Wake Up';
//   }, 1000);
// }

// function alarm(person, delay) {
//   return new Promise((resolve, reject) => {
//     if (delay < 0) {
//       throw new Error('Alarm delay must not be negative');
//     }
//     setTimeout(() => {
//       resolve(`wake up, ${person}`);
//     }, delay);
//   });
// }

// button.addEventListener('click', () => {
//   alarm(name.value, delay.value)
//     .then((msg) => (output.textContent = message))
//     .catch((err) => (output.textContent = `could not set alarm: ${error}`));
// });

// Using async and await with the alarm() API

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error('Alarm delay must not be negative');
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

button.addEventListener('click', async () => {
  try {
    const msg = await alarm(name.value, delay.value);
    output.textContent = msg;
  } catch (error) {
    output.textContent = `${error}`;
  }
});
