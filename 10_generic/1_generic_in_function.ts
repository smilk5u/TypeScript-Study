/**
 * Generic 함수에서 사용하기
 * <> 코멘트를 사용하여 타입을 변수화 하는 방법
 * 미리 타입을 지정하지 않고, T라는 변수를 정의해놓고 타입을 사용할 때 타입을 지정해 줄 수 있다
 * test
 */

function whatValue(value: any) {
  return value;
}

const value = whatValue('test');

function genericWhatValue<T>(value: T): T { // 일반적으로 type의 T 를 많이 사용한다. 대문자!
  return value; // 어떤 값을 넣어도 반환되는 값은 object 이다.
  // return { name: value }; 
}

const genericResult1 = genericWhatValue<number>(123);
/**
 * const로 선언하고 제너럴 값을 입력하지 않았기에 
 * 타입스크립트에서 타입을 자동적으로 유추하여 '123'로 타입으로 설정된다.
 */
const genericResult2 = genericWhatValue('123');

function multipleGenerics<X, Y, Z>(x: X, y: Y, z: Z) {
  return {
    x,
    y,
    z,
  }
}

const multipleGenericResult = multipleGenerics<number, boolean, string>( // 실제 타입을 입력해 주었다.
  123,
  true,
  '123',
);

const multipleGenericResult2 = multipleGenerics( // 타입유추를 한 것 같다.
  123,
  true,
  '123',
);

function getTuple<X, Y, Z>(val1: X, val2: Y, val3: Z) {
  return [val1, val2, val3] as const;
}

function getTuple1<X, Y>(val1: X, val2: Y) {
  return [val1, val2];
}

const tuple = getTuple('ddd', 100, 100); // 값은 같지만, 타입선언이 const (readonly) 형태로 정해진다.
const tuple2 = getTuple1('ddd', 100); // 

console.log(tuple);
console.log(tuple2);

/**
 * 인터페이스에서 컨스럭터 타입을 받을 수 있게하는 방법을 제너럴 방식으로 변환
 */
class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Car {
  brand: string;
  codeName: string;

  constructor(brand: string, codeName: string) {
    this.brand = brand;
    this.codeName = codeName;
  }
}

function instantiator<T extends { new(...args: any[]): {} }>(constructor: T,
  ...args: any[]) {
  return new constructor(...args);
}

console.log(instantiator(Idol, '아이유', 23));
console.log(instantiator(Car, 'BMW', 1111));