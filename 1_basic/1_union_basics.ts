/**
 * Union Basics
 * 
 * 유니언 TS 에서 타입을 병한 할 수 있는 수많은 방법 중 하나이다.
 */

type StringOrBooleanType = string | boolean;

let stringOrBooleanType: StringOrBooleanType = '아이브';
stringOrBooleanType = true; // boolean 타입이기 때문에 재할당이 가능하다

// stringOrBooleanType = undefined; // undefined 는 재할당 가능하지 않은 타입이다

type StrBoolNullType = string | boolean | null;
type StateTypes = 'DONE' | 'LOADING' | 'ERROR';

let state: StateTypes = 'DONE';
state = 'LOADING';
// stete = 'INITIAL'; 해당 스트일은 할당 불가능하다

/**
 * 리스트의 유니언
 */
// string으로 구성된 리스트 또는 boolean 으로 구성된 리스트
type StringListOrBooleanList = string[] | boolean[];

let strListOrBooleanList: StringListOrBooleanList = [
  '아이유',
  '아이유2',
  '아이유1',
]

strListOrBooleanList = [
  true,
  false,
  true,
  false
]

// 각각 구성된 리스트로만 할당이 가능하고 동시에 할당은 불가능하다
// strListOrBooleanList = [
//   true,
//   '아이유'
// ]

// 같은 배열에 다른 타입의 값을 넣어주고 싶을때는 []앞에 유니언타입으로 지정해준다
type StrOrNumberList = (string | number)[];
let stringOrNumberList = [
  1, 2, 3,
  '아이유'
]
stringOrNumberList = ['아이유23', 2] // 동시에 모두 가능하다
stringOrNumberList = [1, 2, 3] // 동시에 모두 가능하다
// stringOrNumberList = [true] // boolean 값은 불가능하다

interface Animal {
  name: string,
  age: number,
}

interface Human {
  name: string,
  age: number,
  address: string,
}

type AnimalOrHuman = Animal | Human;

let animalOrHuman: AnimalOrHuman = {
  name: '신민주',
  age: 32,
  address: '이천시',
}

console.log(animalOrHuman)

animalOrHuman = {
  name: '오리',
  age: 9
}

console.log(animalOrHuman) // 마우스를 대면 객체 값을 Animal 로 변경되었기 때문에 Animal 로 변경되어있다
console.log(animalOrHuman.name)
console.log(animalOrHuman.age)
// console.log(animalOrHuman.address) // 타입이 Animal 이기때문에 Human 에 속하는 address 값은 없기때문에 에러가 난다

// 서로 관계가 없는 유니언을 선언하면 어떻게 되는가
type Person = {
  name: string,
  age: number
}

type Cat = {
  breed: string,
  country: string
}

type PersonOrCat = Person | Cat;

/**
 * 무조건 한 타입은 충족되고나서 초과되는 값은 괜찮지만, 
 * 어떤 타입도 충족되지 않으면 에러가 난다
 */
const personOrCat1: PersonOrCat = {
  name: '코드팩토리',
  // age: 32,
  // breed: '이천',
  country: '영국'
}
const personOrCat2: PersonOrCat = {
  name: '코드팩토리',
  // age: 32,
  breed: '이천',
  country: '영국'
}