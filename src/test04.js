// 복합 연산자 예제
// x &&= y는 다음과 동일합니다:
if (x) {
    x = y;
  }
// x ||= y는 다음과 동일합니다:
if (!x) {
    x = y;
  }
// 1. 논리 연산자 복합 할당
let a = true;
let b = false;
let c = null;

// &&= (논리 AND 할당 연산자)
a &&= 42; // a가 true이므로 42가 할당됩니다.
console.log(a); // 출력: 42

b &&= 42; // b가 false이므로 아무 작업도 하지 않습니다.
console.log(b); // 출력: false

// ||= (논리 OR 할당 연산자)
c ||= "default"; // c가 falsy(null)이므로 "default"가 할당됩니다.
console.log(c); // 출력: "default"

let d = "value";
d ||= "newValue"; // d가 truthy이므로 아무 작업도 하지 않습니다.
console.log(d); // 출력: "value"

// ??= (Nullish 병합 할당 연산자)
let e = null;
e ??= "fallback"; // e가 null이므로 "fallback"이 할당됩니다.
console.log(e); // 출력: "fallback"

let f = 0;
f ??= 100; // f가 null이나 undefined가 아니므로 아무 작업도 하지 않습니다.
console.log(f); // 출력: 0

// 2. 산술 연산자 복합 할당
let x = 10;

// += (더하기 할당 연산자)
x += 5; // x = x + 5
console.log(x); // 출력: 15

// -= (빼기 할당 연산자)
x -= 3; // x = x - 3
console.log(x); // 출력: 12

// *= (곱하기 할당 연산자)
x *= 2; // x = x * 2
console.log(x); // 출력: 24

// /= (나누기 할당 연산자)
x /= 4; // x = x / 4
console.log(x); // 출력: 6

// %= (나머지 할당 연산자)
x %= 5; // x = x % 5
console.log(x); // 출력: 1

// **= (지수 할당 연산자)
x **= 3; // x = x ** 3
console.log(x); // 출력: 1 (1의 세제곱)

// 3. 비트 연산자 복합 할당
let y = 5; // 5는 2진수로 101

// &= (비트 AND 할당 연산자)
y &= 3; // y = y & 3 (101 & 011 = 001)
console.log(y); // 출력: 1

// |= (비트 OR 할당 연산자)
y |= 2; // y = y | 2 (001 | 010 = 011)
console.log(y); // 출력: 3

// ^= (비트 XOR 할당 연산자)
y ^= 1; // y = y ^ 1 (011 ^ 001 = 010)
console.log(y); // 출력: 2

// <<= (왼쪽 시프트 할당 연산자)
y <<= 2; // y = y << 2 (010 << 2 = 1000)
console.log(y); // 출력: 8

// >>= (오른쪽 시프트 할당 연산자)
y >>= 1; // y = y >> 1 (1000 >> 1 = 0100)
console.log(y); // 출력: 4

// >>>= (부호 없는 오른쪽 시프트 할당 연산자)
y >>>= 1; // y = y >>> 1 (0100 >>> 1 = 0010)
console.log(y); // 출력: 2