/**
 * Export - namespace 대신에 사용하는 import 기능이다.
 * ECMAsciprt 스탠다드에서 채택이 된 ECMAScript 모듈이라는 기능이다.
 */
// export default 
class IdolModel {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const number = 12;

// export default number;

interface ICat {
  name: string;
  breed: string;
}

export default {
  IdolModel,
  number,
}