/**
 * Class에서 Generic 사용하기
 * 클래스에서 제너릭 사용하는 방법
 */
class Pagination<Data, Message> {
  data: Data[] = [];
  message?: Message;
  lastFetchedAt?: Date;
}

const pgData = new Pagination<number, string>();
pgData.data;
pgData.message;
pgData.lastFetchedAt;

class Pagination2<Data, Message> {
  data: Data[] = [];
  message?: Message;
  lastFetchedAt?: Date;

  constructor(data: Data[], message?: Message, lastFetchedAt?: Date) {
    this.data = data;
    this.message = message;
    this.lastFetchedAt = lastFetchedAt;
  }
}

const pagination2 = new Pagination2<number, string>([123, 456]); // 명시적으로 다가 제너릭 타입을 입력을 해야 값을 불러올 때 어떤 타입을 가져와야 하는지 알 수 있다.

pagination2.data;
pagination2.message;
pagination2.lastFetchedAt;

class DefaultGeneric<T = boolean> {
  data: T[] = [];
}

const defaultGeneric = new DefaultGeneric();
defaultGeneric.data;