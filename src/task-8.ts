// Функція fetchPosts робить GET-запит до API та повертає список постів.

// import axios from "axios";

// async function fetchPosts() {
//   const response = await axios.get(
//     '<https://jsonplaceholder.typicode.com/posts>'
//   );
//   return response.data;
// }

// fetchPosts().then((posts) => {
//   console.log(posts[0].title);
// });



// Завдання:

// Інсталюй бібліотеку axios командою npm i axios
// Створи інтерфейс Post, який описує об'єкт поста з такими полями:
// id: число
// title: рядок
// body: рядок
// 3. Типізуй axios.get, щоб вказати, що API повертає масив постів.

// 1. Імпортуємо axios
import axios from "axios";

// 2. Створюємо інтерфейс Post, який описує структуру об'єкта поста
interface Post {
  id: number;
  title: string;
  body: string;
}

// 3. Типізуємо функцію fetchPosts
async function fetchPosts(): Promise<Post[]> { 
  // Вказуємо axios, що він повертає масив Post
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data; // це масив Post
}

// Виклик функції та використання результату
fetchPosts().then((posts) => {
  console.log(posts[0].title); // TS знає, що це string
});
