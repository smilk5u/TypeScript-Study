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
@ChangeClass
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

function Frozen(constructor: Function) {
  Object.freeze(constructor);
  Object.freeze(constructor.prototype);
}

const yuJin = new Idol('안유진', 23);

console.log(Object.isFrozen(Object.getPrototypeOf(yuJin)));

// decorator factory
function LogTest(env: string) {
  return function (constructor: Function) {
    console.log(`[${env}] ${constructor}가 실행됐습니다.`);
  }
}

console.log('-----------------------');

const wonYoung = new Idol('장원영', 22);
console.log(wonYoung);

function ChangeClass<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    groupName = '아이브';

    constructor(...params: any[]) {
      super(...params);

      console.log('constructor instantiated');
    }
  }
}
