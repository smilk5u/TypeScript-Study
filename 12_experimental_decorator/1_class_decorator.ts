/**
 * Class Decorator - 맛있는 기능 - 코딩팩토리가 제일 좋아하는 기능입니다.
 * 아직은 타입스크립트의 기본으로 탑재되지는 않는 기능이고 현재는 실험적인 기능이다. 정규출시되지 않았지만 문제없이 사용할 수 있다.
 * nest.js 에서는 프레임워크에서는 헤비하게 많이 사용되는 기능이다.
 * 
 *  tsconfig.json 에서 하기 해당하는 내용 주석을 풀어야한다.
 * "experimentalDecorators": true,               
 * "emitDecoratorMetadata": true,       
 * 
 */
@Test
@Frozen
@LogTest('PROD')
// @ChangeClass
class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

/**
 * # 데코레이터 사용 방법 
 *    1. 함수를 만든다.
 */
function Test(constructor: Function) { // class 상위에 @내용의 파라미터를 받을 수가 있다.
  console.log(constructor); // 이 consturtor 를 데코레이터로 받아올 수가 있다(?)
}

/**
 * 해당 데코레이터를 어디에 사용할 수 있을까?
 */
function Frozen(constructor: Function) {
  Object.freeze(constructor); // 얼리기
  Object.freeze(constructor.prototype); // 얼리기
}

const yuJin = new Idol('안유진', 23); // 얼려있음.

console.log(Object.isFrozen(Object.getPrototypeOf(yuJin))); // class 상단에 데코레이터를 입력해주면 true / 아니면 false가 반환된다.

// decorator factory - 데코레이팅 함수가 실행 될 때 파라미터 값을 넘겨주고 싶을 때
function LogTest(env: string) {
  return function (constructor: Function) {
    console.log(`[${env}] ${constructor}가 실행됐습니다.`);
  }
}

const wonYoung = new Idol('장원영', 22);
// console.log(wonYoung);

function ChangeClass<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    groupName = '아이브';

    constructor(...params: any[]) {
      super(...params);

      // console.log('constructor instantiated');
    }
  }
}
