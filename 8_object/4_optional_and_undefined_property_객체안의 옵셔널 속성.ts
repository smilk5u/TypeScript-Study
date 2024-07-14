/**
 * Optional and Undefined Property
 */
interface Dog {
  name: string;
  age: number;
  // 종을 모르면 undefined
  breed?: string;
}

const byulE: Dog = {
  name: '별이',
  age: 12,
  breed: '미니핀',
}

const ori: Dog = {
  name: '오리',
  age: 3,
}

interface Cat {
  name: string;
  age: number;
  breed?: string | undefined; // ?의 옵셔널 속성은 있어도되고, 아예 없어도 되는 값이다. ?가 없다면 undefined 여도 키값은 입력은 해줘야한다.
}

const nabi: Cat = {
  name: '나비',
  age: 7,
  // breed: undefined,
}