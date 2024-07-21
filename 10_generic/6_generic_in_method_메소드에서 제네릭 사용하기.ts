/**
 * Method에서 Generic 사용하기
 */

class Idol<T> {
  id: T; // id; 무슨 타입인지 명시하는 것이 좋다?
  name: string;

  constructor(id: T, name: string) {
    this.id = id;
    this.name = name;
  }

  sayHello<Time>(logTime: Time) {
    return `[${logTime}] 안녕하세요 제 이름은 ${this.name}이고 ID는 ${this.id}입니다.`;
  }
}

const yuJin = new Idol('a999', '안유진');

// 제너릭으로 타입을 지정해줬기 때문에 어떤값을 넣어주더라도 해당 값으로 타입이 설정된 다.
console.log(yuJin.sayHello('2023')); //  string 타입
console.log(yuJin.sayHello(1992)); // number 타입

class Message<T> {
  sayHello<Time>(logTime: Time, message: T) {
    console.log(`logTime: ${typeof logTime} / message: ${typeof message}`);
  }
}

const message = new Message<string>();
message.sayHello<number>(2000, '하이!');

class DuplicatedGenericName<T> { // 클래스와 메서드가 동시에 같은 제너릭을 선언하게 되면 메서드의 제너릭을 따라가게 된다.
  sayHello<T>(logTime: T) {
    console.log(`logTime: ${typeof logTime}`);
  }
}

const duplicate = new DuplicatedGenericName<string>(); // 클래스는 string 타입 선언

duplicate.sayHello<number>(123); // 메서드는 number 타입을 선언했기 때문에 number 값을 할당해 준다.