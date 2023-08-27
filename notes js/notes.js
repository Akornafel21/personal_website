// const - в першу чергу, стала , коонстанта
// let - звичайна змінна
// var - не використовувати
//const message = 'Hello, Java Script';
//alert(message)

// типи даних
//БУДЕМО ВИВЧАТИ

// Number - число, Nan (not a number), +/-Infinity
// String - текст, будб-який розмір
// Boolean - true, false
// undefined - невизначено
// null - (позначають пустоту), очищено
// Object - об'єкт

console.log(typeof 42);
console.log(typeof '42');
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof true);

// НЕ БУДЕМО ВИВЧАТИ

// Symbol - не має віднощення до тексту
// BigInt = великі цілі числа

const num = 100000000000000000n + 1n;
console.log(num);

const userAge = Number(prompt('Enter your age'));
// console.log(typeof userAge)
console.log('Your age', userAge);

const nextAge = userAge + 1;
console.log('Next age', nextAge);

// <, >, <=, >=, === -дорівнює, !== -не дорівнює, && -i, || -або
  
// ЛИШЕ в одному випадку ми можемо перевіряти умову '==' коли перевіряємо чи змінна дорівнює null або undefined, 
// НАПРИКЛАД: someObjectPrimitive == null/undefined

// блок else - опційний
// воно завжди заходить в один блок, або ifб або else, залежить чи умова true, чи false


//ЯК СТВОРЮВАТИ ФУНКЦІЮ

const userкAge = Number(prompt('Введіть свій вік'));
console.log('Your age', userAge);

const nextеAge = add(userAge, 1);
console.log('Наступний вік', nextAge);

  if (userAge >= 18) {
  console.log('Повнолітній');
} else {
  console.log('Неповнолітній');
}

function add(a, b) {
  const sum = a + b;
  return sum;
}


for (let i = 0; i < cars.lenght; i--) {
  console.log(i);
}


const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];

// In this example, subarray has the value [[10, 11, 12], 13, 14], 
// nestedSubarray has the value [10, 11, 12], 
// and element has the value 11 .

// Тобто, якщо я хочу вибрати наприклад елемент 9, мені потрібно вибрати номер елемента в рядку,
// в якому він знаходиться і тоді номер самого елемента в рядку рядка:
// ТАК Я ВИВЕДУ 9:
const array = [ [1, 2, 3],
             [4, 5, 6],
             [[7, 8, 9, 10, 11], 12, 13]
             ];
const myArray = array[2][0][2]
console.log(myArray)

// МЕТОДИ В РЯДКАХ
// .push() takes one or more parameters and "pushes" them onto the end of the array
// .pop() removes the last element from an array and returns that element
// .shift() works just like .pop(), except it removes the first element instead of the last
// .unshift() works exactly like .push(), 
//            but instead of adding the element at the end of the array, 
//           .unshift() adds the element at the beginning of the array

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
const oneFirst = threeArr.shift();
console.log(oneDown); // виведе 6, бо ми застовули .pop() і воно повернуло те число, яке забрало з рядка
console.log(threeArr); // виведе [1, 4], бо ми методом .pop() забрали один елемент [6]
console.log(oneFirst); // виведе 1, бо застосували .shift() і воно повернуло те число, яке забрало з рядка
                       // але в попередньому рядку тоді буде виведено лише [4]

const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
console.log(ourArray); // виведе ["Happy", "Stimpson", "J", "cat"]   


// ВИКОРИСТАННЯ ОПЕРАТОРА "=" :
// "=" використовується для присвоєння значень.
// "==" використовується для порівняння значень, з автоматичним перетворенням типів.
// "===" використовується для точного порівняння значень і типів даних.

//    Оператор "=" використовується для присвоєння значення змінній. Наприклад, якщо ти пишеш x = 5;
//    це означає, що ти присвоюєш змінній x значення 5.

//    Оператор "==" використовується для порівняння значень.
//    Наприклад, 10 == 10 буде істинним, тому що обидва числа однакові.
//    Він автоматично перетворює типи даних, щоб порівняти значення.

//    Оператор "===" також використовується для порівняння значень,
//    але він також перевіряє, чи співпадають типи даних.
//    Наприклад, 10 === "10" буде хибним, бо хоча значення подібні, типи даних різні (число і рядок).