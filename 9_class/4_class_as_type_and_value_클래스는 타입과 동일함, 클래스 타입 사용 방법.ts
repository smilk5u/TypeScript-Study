/**
 * Class as Type and Value
 */
class Dog {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  bark() {
    return `${this.name}가 짖습니다`;
  }
}


/**
 * ori 에 마우스를 갖다대면 Dog 라는 타입을 생성하지 않았는데 ori 는 Dog 타입으로 나온다.  
 * Class 자체가 타입이 될 수 있다.
 * Class 는 타입스크립트와 자바스크립트가 공존하는 형태이다.
 */
let ori = new Dog('오리');
console.log(ori.bark());

// ori = '오리'; // 이렇게 값을 변경할 수 없다. Dog 타입이 아니기 때문에, 하지만 객체로는 변경이 가능하다.

ori = {
  name: '별이',
  bark() {
    return `${this.name}가 짖습니다.`;
  }
}

console.log(ori);