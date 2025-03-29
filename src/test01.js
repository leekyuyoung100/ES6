// 상수 선언 예제
const PI = 3.14159;
const MAX_USERS = 100;
const WELCOME_MESSAGE = "Welcome to the application!";

console.log("PI:", PI);
console.log("Max Users:", MAX_USERS);
console.log(WELCOME_MESSAGE);

// 상수는 재할당이 불가능합니다.
// 아래 코드는 오류를 발생시킵니다.
// PI = 3.14; // TypeError: Assignment to constant variable.

// 문자열 연산자 예제
const firstName = "John";
const lastName = "Doe";
const fullName = firstName + " " + lastName;

console.log("Full Name:", fullName);

const greeting = "Hello, " + fullName + "!";
console.log(greeting);