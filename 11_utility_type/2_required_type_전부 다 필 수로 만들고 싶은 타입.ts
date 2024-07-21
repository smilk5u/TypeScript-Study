/**
 * Required Type - 전부 다 필 수로 만들고 싶은 타입
 */
interface Dog {
  name: string;
  age?: number;
  country?: string;
}

const requiredDog: Required<Dog> = { // Required 를 입력 시에는 타입 내부 옵셔널 값이 존재하더라도 모두 입력해 줘야 한다.
  name: '모찌',
  age: 7,
  country: '한국'
}