/**
 * Property Initialization - 프로퍼티 초기화 방법
 */
class Person {
  // 일반적인 필수값 선언법
  name: string;
  // 초기값 제공 선언법
  age: number = 23;
  // optional 값 선언법
  pet?: string;
  // type of undefined 선언법
  petAge: number | undefined;

  constructor(name: string, pet?: string) {
    this.name = name;
    this.pet = pet;
  }
}

/**
 * 옵셔널과 반대인 ! 느낌표 관한 내용 - 이것은 Class 문법 사용 시 많이 쓰인다.
 */
class RouteStack {
  stack!: string[]; // 컨스트럭터에서 값을 초기화하지 않을 때, ! 느낌표를 뒤에 붙여 초기화가 된 상태를 알려준다? - 사실 잘 모르겠다 의미를...

  constructor() {
    this.initialize();
  }

  initialize() {
    this.stack = [];
  }
}

const routeStack = new RouteStack();
console.log(routeStack);