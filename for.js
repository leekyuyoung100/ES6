/**
 * 반복문을 사용하여 특정 작업을 여러 번 실행할 수 있는 for 문에 대한 예제입니다.
 * 
 * for 문은 세 가지 주요 부분으로 구성됩니다:
 * 1. 초기화 (initialization): 반복문이 시작될 때 한 번 실행됩니다.
 * 2. 조건 (condition): 조건이 참일 경우 반복문이 실행됩니다.
 * 3. 증감식 (increment/decrement): 각 반복이 끝날 때 실행됩니다.
 * 
 * 아래 예제는 0부터 4까지의 숫자를 출력하는 for 문을 보여줍니다.
 */

for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4 출력
}
/**
 * 사용 시 주의점:
 * 1. 무한 루프를 방지하기 위해 조건이 항상 false가 될 수 있도록 설계해야 합니다.
 * 2. 반복문 내부에서 실행되는 코드가 너무 복잡하거나 시간이 오래 걸리면 성능 문제가 발생할 수 있습니다.
 * 3. 반복문 내부에서 배열이나 객체를 수정할 경우, 의도치 않은 결과가 발생할 수 있으니 주의해야 합니다.
 * 
 * 언제 사용하는지:
 * 1. 특정 작업을 정해진 횟수만큼 반복해야 할 때 사용합니다.
 * 2. 배열이나 객체의 요소를 순회하며 작업을 수행할 때 유용합니다.
 * 3. 반복적으로 계산하거나 데이터를 처리해야 하는 경우 적합합니다.
 */
// 배열 순회 예제
const fruits = ['apple', 'banana', 'cherry'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // apple, banana, cherry 출력
}

// 중첩 for 문 예제
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// for 문을 사용한 합계 계산
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(`1부터 10까지의 합: ${sum}`);

// for 문을 사용한 조건부 작업
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i}는 짝수입니다.`);
    }
}

// for 문을 사용한 문자열 순회
const str = "hello";
for (let i = 0; i < str.length; i++) {
    console.log(str[i]); // h, e, l, l, o 출력
}
// 응용문제 1: 1부터 100까지의 숫자 중 3의 배수 출력
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// 응용문제 2: 배열의 모든 요소를 대문자로 변환
const words = ['hello', 'world', 'javascript'];
for (let i = 0; i < words.length; i++) {
    console.log(words[i].toUpperCase());
}

// 응용문제 3: 1부터 10까지의 숫자 중 홀수의 합 계산
let oddSum = 0;
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        oddSum += i;
    }
}
console.log(`홀수의 합: ${oddSum}`);

// 응용문제 4: 2차원 배열 순회
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}

// 응용문제 5: 문자열에서 모음 개수 세기
const sentence = "This is a sample sentence.";
let vowelCount = 0;
for (let i = 0; i < sentence.length; i++) {
    if ('aeiouAEIOU'.includes(sentence[i])) {
        vowelCount++;
    }
}
console.log(`모음 개수: ${vowelCount}`);

// 응용문제 6: 1부터 50까지의 숫자 중 5의 배수와 7의 배수 출력
for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0 || i % 7 === 0) {
        console.log(i);
    }
}

// 응용문제 7: 배열에서 최대값 찾기
const numbers = [3, 7, 2, 9, 4];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log(`최대값: ${max}`);

// 응용문제 8: 피보나치 수열의 첫 10개 숫자 출력
let a = 0, b = 1;
console.log(a);
console.log(b);
for (let i = 2; i < 10; i++) {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
}

// 응용문제 9: 구구단 중 짝수 단만 출력
for (let i = 2; i <= 9; i++) {
    if (i % 2 === 0) {
        for (let j = 1; j <= 9; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
    }
}

// 응용문제 10: 1부터 100까지의 숫자 중 소수 출력
for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i);
    }
}
// in 연산자를 사용한 객체 순회
const person = { name: 'John', age: 30, city: 'New York' };
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// in 연산자를 사용한 배열 인덱스 순회
const colors = ['red', 'green', 'blue'];
for (let index in colors) {
    console.log(`Index ${index}: ${colors[index]}`);
}

// in 연산자를 사용한 프로퍼티 존재 확인
const car = { brand: 'Toyota', model: 'Corolla' };
if ('brand' in car) {
    console.log('The car has a brand property.');
}
if ('year' in car) {
    console.log('The car has a year property.');
} else {
    console.log('The car does not have a year property.');
}
// for...of 문을 사용한 배열 순회
const animals = ['dog', 'cat', 'rabbit'];
for (const animal of animals) {
    console.log(animal); // dog, cat, rabbit 출력
}

// for...of 문을 사용한 문자열 순회
const greeting = "hello";
for (const char of greeting) {
    console.log(char); // h, e, l, l, o 출력
}

// for...of 문을 사용한 Set 순회
const uniqueNumbers = new Set([1, 2, 3, 4, 5]);
for (const num of uniqueNumbers) {
    console.log(num); // 1, 2, 3, 4, 5 출력
}

// for...of 문을 사용한 Map 순회
const userMap = new Map([
    ['name', 'Alice'],
    ['age', 25],
    ['city', 'Seattle']
]);
for (const [key, value] of userMap) {
    console.log(`${key}: ${value}`);
}

// for...of 문을 사용한 이터러블 객체 순회
const iterable = {
    *[Symbol.iterator]() {
        yield 'a';
        yield 'b';
        yield 'c';
    }
};
for (const value of iterable) {
    console.log(value); // a, b, c 출력
}
// JavaScript에는 Python의 enumerate와 같은 내장 함수는 없지만, 유사한 기능을 구현할 수 있습니다.

// 배열과 인덱스를 함께 출력하는 예제
const items = ['a', 'b', 'c', 'd'];
items.forEach((item, index) => {
    console.log(`Index ${index}: ${item}`);
});

// 또는 for...of와 entries()를 사용하여 구현
for (const [index, item] of items.entries()) {
    console.log(`Index ${index}: ${item}`);
}
// 배열의 요소를 거꾸로 출력하는 예제 (ES6 기능 사용)
const reverseArray = ['one', 'two', 'three', 'four'];
for (const [index, item] of reverseArray.reverse().entries()) {
    console.log(`Index ${index}: ${item}`); // Index와 함께 four, three, two, one 출력
}
// 딕셔너리(객체)를 순회하며 키와 값을 출력하는 예제
const dictionary = {
    apple: 'A fruit that is sweet and crisp.',
    banana: 'A yellow fruit that is soft and sweet.',
    cherry: 'A small, round, red fruit.'
};

for (const key in dictionary) {
    console.log(`${key}: ${dictionary[key]}`);
}
// 딕셔너리(객체)는 기본적으로 이터러블이 아니므로 for...of를 직접 사용할 수 없습니다.
// Object.entries()를 사용하여 키-값 쌍을 배열로 변환한 후 for...of를 사용할 수 있습니다.

for (const [key, value] of Object.entries(dictionary)) {
    console.log(`${key}: ${value}`);
}

