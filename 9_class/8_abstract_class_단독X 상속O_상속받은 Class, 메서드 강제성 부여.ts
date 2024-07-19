/**
 * Abstract class - JS에서는 없는 문법이다. TS에서만 존재한다.
 * 단독으로는 사용하지 않고, 상속을 받을 때만 사용가능하게끔 할 수 있는 방법이다. (그냥 활용 예시이다, 다른 이유로도 사용할 수 있겠지?)
 * 상속받은 메서드의 구현을 강제할 수 있다.
 */
abstract class ModelWithId {
  id: number;

  constructor(id: number) {
    this.id = id;
  }
}

// const modelWithId = new ModelWithId(123); // 단독으로 직접적인 선언이 불가능하다 (익스텐즈 후 사용이 가능..)

class Product extends ModelWithId {
}

const product = new Product(1);
product.id;

abstract class ModelWithAbstractMethod {
  abstract shout(name: string): string; // 함수 내에서도 사용할 수 있다.
}

class Person extends ModelWithAbstractMethod {
  shout(name: string): string { // 자동완성이 된다. - 
    return 'dd'
  }
  // shout(name: string): string {
  //   return '소리질러~';
  // }
}