/**
 * Export - namespace 대신에 사용하는 import 기능이다.
 * ECMAsciprt 스탠다드에서 채택이 된 ECMAScript 모듈이라는 기능이다.
 * 
 * 현재 파일에서 작성한 것을 외부파일로 사용하는 방법
 * 
 * export default 는 한파일안에 한번만 사용이 가능하다.
 */
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

/**
 * 인터페이스는 타입스크립트 타입이기 때문에
 * export는 할 수 있지만 객체 형태로는 담을 수가 없다.
 */
export default {
  IdolModel,
  number,
}