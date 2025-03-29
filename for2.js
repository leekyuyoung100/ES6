const numbers2 = [1, 2, 3, 4, 5];
numbers2.some((num) => {    
    // console.log(num); // 1, 2, 3, 4, 5 출력    
    return num == 3; // num이 3보다 크면 true 반환
    console.log(num); // 1, 2, 3, 4, 5 출력    
})

const doubledNumbers = numbers2.map((num) => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

const uesers = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
]

for (let user of uesers) {
    console.log(user.name); // Alice, Bob, Charlie
}