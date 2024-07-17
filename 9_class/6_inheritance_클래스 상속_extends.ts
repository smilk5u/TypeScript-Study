/**
 * Inheritance - 클래스 상속
 */
class Parent {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  dance() {
    console.log(`parent: ${this.name}이 춤을 춥니다.`);
  }
}

class Child extends Parent {
  age: number;

  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }

  sing() {
    console.log(`child : ${this.name}이 노래를 부릅니다.`);
  }
}

const codefactory = new Parent('코드팩토리');
const ahri = new Child('아리', 12);

codefactory.dance();
// codefactory.sing();

ahri.dance();
ahri.sing();



let person: Parent; // 최로 부모 타입으로 선언했기 때문에, 부모와 자식 인스턴스를 할당 할 수 있다.
person = codefactory; // 부모타입을 넣을 수 있다.
person = ahri; // 자식타입도 넣을 수 있다. 

let person2: Child;
person2 = ahri;
// person2 = codefactory;

/**
 * optional 프로퍼티를 유의하자
 * 타입스크립트에서만 되는 게 있는데 구조가 비슷하면 같은 타입이라고 본다.
 * 
 */
class Parent2 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}


/**
 * 자식 프로퍼티가 전체 옵셔널 값일 경우에는 자식 타입으로 정의한 변수에 부모 인스턴스를 할당할 수 있다.
 * 하지만 자식 프러퍼티에서 옵셔널값이 아니라 값을 지정해 준 경우에는 자식 타입으로 정의한 변수에 부모 인스턴스를 할당할 수 없다.
 */
class Child2 extends Parent2 {
  age?: number;

  constructor(name: string, age?: number) { // age 옵셔널값
    super(name);
    this.age = age;
  }
}

/**
 * 타입스크립트에서 타입 추론해서 Class 로 설정됨
 * 
 */
const cf2 = new Parent2('코드팩토리'); 
const ahri2 = new Child2('아리', 20); 

let child: Child2; // 변수에 자식 타입 선언
child = ahri2; // 자식은 당연히 가능
child = cf2; // 부모도 예외적으로 가능