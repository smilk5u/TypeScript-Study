/**
 * Export - 실질적인 업무에서는 export default 보다는 export를 더 많이 사용한다.
 */
export class IdolModel {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

export const rose = new IdolModel('로제', 28);

export const number = 999;

export interface ICat {
  name: string;
  age: number;
}

export default {
  name: '코드팩토리',
  age: 23,
}