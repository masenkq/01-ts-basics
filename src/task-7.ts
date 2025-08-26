// Функція getMessage повертає проміс, який через затримку повертає рядок.

// function getMessage() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hello from TS");
//     }, 1000);
//   });
// }

// getMessage().then(result => console.log(result));


// Функція повертає проміс, який через затримку повертає рядок
function getMessage(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello from TS"); // Тип string, все ок
    }, 1000);
  });
}

// Виклик функції з обробкою результату
getMessage().then(result => console.log(result));



// Додай до функції явну типізацію, яка вказує, що вона повертає проміс.
// Переконайся, що значення, з яким виконається проміс, – це рядок (string).
