/**
 * intersection
 * 
 * And
 */

interface Human {
  name: string,
  age: number
}

interface Contacts {
  phone: string,
  address: string
}

type HumanAndContacts = Human & Contacts;

// 인터섹션한것은 모두 작성해주어야 에러가 안뜸
let humanAndContacts: HumanAndContacts = {
  name: '코드팩토리',
  age: 32,
  phone: '0101111111',
  address: '서울시'
}

type NumberAndString = number & string;

// 프리미티브 타입에 인터섹션은 성립 할 수 없고 never 가 뜬다
// let numberAndString: NumberAndString = undefined; // never 가 뜬다 