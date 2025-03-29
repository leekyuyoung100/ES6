/**
 * 주어진 숫자(day)에 해당하는 요일 이름을 반환합니다.
 * 
 * @function
 * @param {number} day - 요일을 나타내는 숫자 (1: 월요일, 2: 화요일, 3: 수요일, 4: 목요일, 5: 금요일, 그 외: 주말 또는 잘못된 입력).
 * @returns {string} 주어진 숫자에 해당하는 요일 이름 또는 잘못된 입력 메시지.
 * 
 * @example
 * // 3을 입력하면 "수요일"을 반환합니다.
 * console.log(getDayName(3)); // "수요일"
 * 
 * @description
 * 화살표 함수는 ES6에서 도입된 간결한 문법으로, 함수 표현식을 작성할 때 사용됩니다.
 * 화살표 함수는 `function` 키워드 대신 `=>`를 사용하며, `this` 바인딩이 정적으로 결정됩니다.
 * 이 함수는 switch 문을 사용하여 입력된 숫자에 따라 적절한 요일 이름을 반환합니다.
 */
// switch 문 예제
const day = 3;

switch (day) {
    case 1:
        console.log("월요일");
        break;
    case 2:
        console.log("화요일");
        break;
    case 3:
        console.log("수요일");
        break;
    case 4:
        console.log("목요일");
        break;
    case 5:
        console.log("금요일");
        break;
    default:
        console.log("주말 또는 잘못된 입력");
        break;
}
(function() {
    const day = 6;

    switch (day) {
        case 1:
            console.log("월요일");
            break;
        case 2:
            console.log("화요일");
            break;
        case 3:
            console.log("수요일");
            break;
        case 4:
            console.log("목요일");
            break;
        case 5:
            console.log("금요일");
            break;
        default:
            console.log("주말 또는 잘못된 입력");
            break;
    }
})();
const getDayName = (day) => {
    switch (day) {
        case 1:
            return "월요일";
        case 2:
            return "화요일";
        case 3:
            return "수요일";
        case 4:
            return "목요일";
        case 5:
            return "금요일";
        default:
            return "주말 또는 잘못된 입력";
    }
};

console.log(getDayName(3)); // Example usage
