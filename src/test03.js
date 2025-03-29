// Animal 클래스 정의 (기본 클래스)
class Animal {}

// Dog 클래스 정의 (Animal 클래스를 상속받음)
class Dog extends Animal {}

// Dog 클래스의 인스턴스 생성
const dog = new Dog();

// dog가 Dog 클래스의 인스턴스인지 확인
console.log(dog instanceof Dog); // true (dog는 Dog의 인스턴스)

// dog가 Animal 클래스의 인스턴스인지 확인
console.log(dog instanceof Animal); // true (Dog는 Animal을 상속받았으므로)

// dog가 Object의 인스턴스인지 확인
console.log(dog instanceof Object); // true (모든 객체는 기본적으로 Object를 상속)

// dog가 Array의 인스턴스인지 확인
console.log(dog instanceof Array); // false (dog는 배열이 아님)

// CustomType 클래스 정의
// Symbol.hasInstance를 사용하여 instanceof 동작을 커스터마이징
class CustomType {
  static [Symbol.hasInstance](instance) {
    // 객체에 canRun 속성이 true인지 확인
    return instance.canRun === true;
  }
}

// canRun 속성이 true인 객체 생성
const obj = { canRun: true };

// obj가 CustomType의 인스턴스인지 확인
// Symbol.hasInstance에 정의된 조건에 따라 true 반환
console.log(obj instanceof CustomType); // true (기본적인 instanceof 동작을 변경)