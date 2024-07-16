/**
 * Interface - 객체지향 프로그래밍 관점에서의 인터페이스 
 * 자바스크립트에서는 존재하지 않음
 */

/**
 * 클래스에 타입을 지정해준다. 
 * class 에 implements 시켜준다면 내부에 적인 값을 모두 입력해줘야한다.
 */
interface Animal { 
  name: string;
  age: number; 
  jump(): string; // 함수 스트링을 반환한다.
}

class Dog implements Animal { // Dog Class에 Animal 타입을 선언한다.
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  jump(): string {
    return `${this.name}이 점프를 합니다.`;
  }

  dance() {
    return `${this.name}가 댄스를 춥니다.`;
  }
}

let ori: any = new Dog('오리', 3); // 할당 값은 Class 이지만, 타입 선언은 any 이다.

/**
 * 오브젝트를 반환하는데, 타입은 any 이다. 
 * 하지만, 함수 내 조건이 만족된다면 Animal 로 타입을 변경해준다.
 */
function instanceOfAnimal(object: any): object is Animal { // 리턴값을 Animal 로 변경
  return 'dance' in object; // object 안에서 dance 값을 탐색
}

if (instanceOfAnimal(ori)) { // 조건이 맞다면 Animal 타입으로 변경된다.
  ori;
  // console.log('맞다');
} else {
  ori;
  // console.log('아니다');
}

/**
 * 다중 인터페이스 구현
 */
interface Pet {
  legsCount: number;
  bark(): void
}

class Cat implements Animal, Pet {
  // Animal
  name: string;
  age: number;

  // Pet
  legsCount: number;

  constructor(name: string, age: number, legsCount: number) {
    this.name = name;
    this.age = age;
    this.legsCount = legsCount;
  }

  // Aniaml
  jump(): string {
    return `${this.name}이 점프를 합니다.`;
  }

  // Pet
  bark(): void {
    console.log('냐옹');
  }
}

type AnimalAndPet = Animal & Pet; // 타입 객체를 선언해놓고, 인터섹션(&) 해서 타입을 추가해도 된다.

class Cat2 implements AnimalAndPet { // 이런식으로 또 타입을 선언해서 가져온다.
  // Animal
  name: string;
  age: number;

  // Pet
  legsCount: number;

  constructor(name: string, age: number, legsCount: number) {
    this.name = name;
    this.age = age;
    this.legsCount = legsCount;
  }

  // Aniaml
  jump(): string {
    return `${this.name}이 점프를 합니다.`;
  }

  // Pet
  bark(): void {
    console.log('냐옹');
  }
}

// implements 가 안되는 상황 예시

interface WrongInterface1 {
  name: string | number;
}

interface WrongInterface2 {
  name: number;
}

// class Person implements WrongInterface1, WrongInterface2{
// name: number; // 프러퍼티 통일시키기, 중복되는 프러퍼티가 없는지 미리 확인해야한다.
// name: number | string; 
// }

class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

interface IdolConstructor {
  new(name: string, age: number): Idol;
}

function createIdol(constructor: IdolConstructor, name: string, age: number) {
  // return new Idol(name, age);
  return new constructor(name, age);
}

// console.log(createIdol(Idol, '아이유', 32));