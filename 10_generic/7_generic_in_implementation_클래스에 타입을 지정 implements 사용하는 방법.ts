/**
 * Generic in Implementation - 어려운게 없기 때문에 빠르게 진행한다.
 * implements란? - 클래스에 타입을 지정해주는 것!
 */

interface Singer<T, V> {
  name: T;
  sing(year: V): void;
}

class Idol implements Singer<string, number> { // class 에 인터페이스를 implement 시키고, 타입을 지정해준다.
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sing(year: number): void { // sing 엔터 치면 자동 완성 기능 사용할 수 있다.
    console.log(`[${year}] ${this.name}이 노래를 부릅니다.`)
  }
}

const yuJin = new Idol('안유진'); // 해당 값을 입력한다.
yuJin.sing(2003); // number 타입을 입력한다.

class Idol2<T, V> implements Singer<T, V> {
  name: T;

  constructor(name: T) {
    this.name = name;
  }

  sing(year: V): void {
    console.log(`[${year}] ${this.name}이 노래를 부릅니다.`)
  }
}

const wonYoung = new Idol2<string, number>('장원영');
wonYoung.sing(2003);