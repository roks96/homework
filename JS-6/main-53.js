// Задание 1.
// Дан массив пользователей:
// const users = [
//   { name: 'Alex', age: 24, isAdmin: false },
//   { name: 'Bob', age: 13, isAdmin: false },
//   { name: 'John', age: 31, isAdmin: true },
//   { name: 'Jane', age: 20, isAdmin: false },
//]
// Добавьте в конец массива двух пользователей:
// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }

const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];

users.push(
  {
    name: "Ann",
    age: 19,
    isAdmin: false,
  },
  {
    name: "Jack",
    age: 43,
    isAdmin: true,
  },
);
console.log(users);
// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

// const users = [
//   { name: "Alex", age: 24, isAdmin: false },
//   { name: "Bob", age: 13, isAdmin: false },
//   { name: "John", age: 31, isAdmin: true },
//   { name: "Jane", age: 20, isAdmin: false },
// ];

// users.push(
//   {
//     name: "Ann",
//     age: 19,
//     isAdmin: false,
//   },
//   {
//     name: "Jack",
//     age: 43,
//     isAdmin: true,
//   },
// );

function getAverageAge(users) {}
console.log(users);
const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];

users.push(
  {
    name: "Ann",
    age: 19,
    isAdmin: false,
  },
  {
    name: "Jack",
    age: 43,
    isAdmin: true,
  },
);

function getAverageAge(users) {
  let sum = 0;
  for (let i = 0; i < users.length; i++) {
    sum += users[i].age;
  }
  return sum / users.length;
}
console.log(getAverageAge(users));

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];

users.push(
  {
    name: "Ann",
    age: 19,
    isAdmin: false,
  },
  {
    name: "Jack",
    age: 43,
    isAdmin: true,
  },
);

function getAllAdmins(users) {
  let admins = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin) {
      admin.push(users[i]);
    }
  }
  return admins;
}

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

function first(arr, n) {
  if (n == 0) {
    return [];
  }
  if (n == undefined) {
    return [arr[0]];
  } else return arr.slice(0, n);
}
