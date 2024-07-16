/**
 * readonly 프로퍼티
 */
class Idol {
  readonly name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const yuJin = new Idol('안유진', 23);

yuJin.age = 32;
// yuJin.name = '코드팩토리';



// 연습
interface Minju {
  aaa: string,
}

class Minju {
  readonly name;

  constructor(name: string) {
    this.name = 'ddd'
  }
}