const input = window.prompt("숫자를 입력하세요:");
const number = parseInt(input, 10);

if (isNaN(number)) {
    console.log("유효한 숫자를 입력하세요.");
} else {
    if (number % 2 === 0) {
        console.log("짝수입니다.");
    } else {
        console.log("홀수입니다.");
    }
}