/**
 * Generic 함수에서 사용하기
 * - 내가 미리 타입을 지정하지 않고, T라는 변수를 정의해놓고 타입을 사용할 때 타입을 지정해 줄 수 있다(?)
 */

function whatValue(value: any) {
  return value;
}

const value = whatValue('test');

function genericWhatValue<T>(value: T): T { // 일반적으로 type의 T 를 많이 사용한다. 대문자!
  return value;
}

const genericResult1 = genericWhatValue<number>(123);

let genericResult2 = genericWhatValue('123')

function multipleGenerics<X, Y, Z>(x: X, y: Y, z: Z) {
  return {
    x,
    y,
    z,
  }
}

const multipleGenericResult = multipleGenerics<number, boolean, string>(
  123,
  true,
  '123',
);

const multipleGenericResult2 = multipleGenerics(
  123,
  true,
  '123',
);

function getTuple<X, Y, Z>(val1: X, val2: Y, val3: Z) {
  console.log([val1, val2]);
  return [val1, val2, val3] as const;
}
console.log('----------------');
function getTuple1<X, Y>(val1: X, val2: Y) {
  console.log([val1, val2]);
  return [val1, val2];
}

const tuple = getTuple('ddd', 100, 100);
const tuple2 = getTuple1('ddd', 100);


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