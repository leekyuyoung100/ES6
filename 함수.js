// 1. 함수 선언식
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // 5

// 2. 함수 표현식
const subtract = function (a, b) {
    return a - b;
};
console.log(subtract(5, 3)); // 2

// 3. 화살표 함수
const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // 20

// 4. 기본 매개변수
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet()); // Hello, Guest!
console.log(greet("Alice")); // Hello, Alice!

// 5. 나머지 매개변수
function sumAll(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10

// 6. 익명 함수 (즉시 실행 함수)
(function () {
    console.log("This is an IIFE (Immediately Invoked Function Expression).");
})();

// 7. 함수 내부에서 다른 함수 반환 (클로저)
function outerFunction(x) {
    return function innerFunction(y) {
        return x + y;
    };
}
const addFive = outerFunction(5);
console.log(addFive(3)); // 8

// 8. 함수의 매개변수로 함수 전달 (콜백)
function processUserInput(callback) {
    const name = "John";
    callback(name);
}
processUserInput((name) => console.log(`Hello, ${name}!`)); // Hello, John!

// 9. 생성자 함수
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person1 = new Person("Alice", 25);
console.log(person1.name); // Alice

// 10. 재귀 함수
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// 11. 비동기 함수 (async/await)
async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
}
// fetchData(); // Uncomment to test in a browser environment

// 12. 함수 바인딩 (bind)
const obj = { value: 10 };
function printValue() {
    console.log(this.value);
}
const boundFunction = printValue.bind(obj);
boundFunction(); // 10