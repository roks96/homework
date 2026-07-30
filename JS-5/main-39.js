// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

// const person = {
//   name: "Dmitriy",
//   age: 29,
//   "user-city": "Kirov",
//   job: "engineer",
//   hobby: "leatherworking",
// };

// console.log(user);
// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

// function isEmpty(object) {
//   for (const key in object) {
//     return false;
//   }
//   return true;
// }

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

// const task = {
//   title: "workout",
//   description: "working out at the gym",
//   isCompleted: true,
// };

// function cloneAndModify(object, modifications) {
//   return { ...object, ...modifications };
// }

// const newTask = cloneAndModify(task, { isCompleted: false });

// for (let key in newTask) {
//   console.log(`${key}: ${newTask[key]}`);
// }
// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);

const callAllMethod = object => {
  for (let key in object) {
    if (typeof object[key] === "function") {
      object[key]();
    }
  }
};

const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
};

callAllMethod(myObject);
