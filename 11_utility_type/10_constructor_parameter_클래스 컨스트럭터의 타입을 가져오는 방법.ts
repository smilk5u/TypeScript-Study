/**
 * Constructor Parameter
 * Parameters의 typeof를 사용하여 클래스 constructor의 파타미터 타입을 자동적으로 가져올 수가 있다.
 */
class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

type ConstructorParamType = ConstructorParameters<typeof Idol>;