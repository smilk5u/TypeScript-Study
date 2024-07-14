/**
 * Nested Object - 객체안의 객체의 타입을 지정해주는 방법
 */

type NestedPerson = {
  identity: {
    name: string;
    age: number;
  },
  nationality: string;
}

const codefactory: NestedPerson = {
  identity: {
    // name: '코드팩토리', // 에러가 발생했을 때, 구체적인 타입 지정을 안해준다면, 데이터가 길어질 때 확인하기가 어렵다.
    age: 32,
  },
  nationality: '한국인',
}

/**
 * 객체안에 객체 타입을 지정할 때 따로 바로 안에 객체를 넣는 것이 아니라
 * 타입을 지정후에 넣어주면 에러발생 시 바로 어떠한 타입에서 에러가 발생했는지 구체적인 확인이 가능하다.
 */
type TPerson = {
  identity: TPersonIdentity, 
  nationality: string;
}

type TPersonIdentity = {
  name: string;
  age: number;
}

const iu: TPerson = {
  identity: {
    // name: '아이유', // 위에서 처럼 타입을 지정해준다면 에러가 생겼을 때, 타입 명칭을 명확하게 알려주기 때문에 에러 확인이 쉽다.
    age: 32,
  },
  nationality: '한국인',
}

interface IPerson {
  identity: IPersonIdentity;
  nationality: string;
}

interface IPersonIdentity {
  name: string;
  age: number;
}

const yuJin: IPerson = {
  identity: {
    name: '안유진',
    age: 22,
  },
  nationality: '한국인',
}