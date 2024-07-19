/**
 * Abstract class - JS에서는 없는 문법이다. TS에서만 존재한다.
 * 단독으로는 사용하지 않고, 상속을 받을 때만 사용가능하게 끔 할 수 있는 방법이다. (그냥 활용 예시이다, 다른 이유로도 사용할 수 있겠지?)
 */
abstract class ModelWithId {
  id: number;

  constructor(id: number) {
    this.id = id;
  }
}

// const modelWithId = new ModelWithId(123);

class Product extends ModelWithId {

}

const product = new Product(1);
product.id;

abstract class ModelWithAbstractMethod {
  abstract shout(name: string): string;
}

class Person extends ModelWithAbstractMethod {
  shout(name: string): string {
    return '소리질러~';
  }
}