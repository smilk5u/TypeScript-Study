/**
 * interface 는 Type 와의 차이점!
 * - interface 는 Type 이 하지 못하는 몇가지 문제점들을 해결하기위해서 생겼고, 좀 더 추가적인 기능을 할 수 있다
 * - interface 는 = 이 없이 타입을 지정할 수 있지만 Type 은 = 을 적어 줘야한다.
 * ex: interface Name { name:'string' } / Type Name = { name: 'string' }
 * - interface 는 무조건 객체로만 타입을 지정해야하지만, Type은 객체 또는 string 하나씩만 선언 할 수도 있다
 * 
 * 그리고 interface는 프리미티브 타입 (한줄로 나열) 을 지정 할 수가 없다 (이것은 타입만 가능하다)
 */

/**
 * stringVar 변수가 다른파일에서도 중복적으로 같은 변수를 사용하면 에러가 뜨는 데 
 * 이것을 방지하기 위해서는 
 * tsconfig.js 에서 "moduleDetection": "auto" => "force", 로 변경
 * 해주면 중복된 이름이 다른파일에 존재해도 각자 스코프를 생성해서 만들기 때문에 중복이되어도 상관이 없어진다.
 */

/**
 * Type : 타입은 쉽게 말해서 TS 의 타입에 이름을 지어주는 역할을 한다
 */
type NewStringType = string;
type NewNullType = null;
type NewNumberType = number;
type MaleOrFemale = 'male' | 'female'; // || 를 유니언 타일이라고 한다. 이것 또는 이것
const stringVar: NewStringType = 'test';



type IdolType = {
  name: string;
  year: number;
}

const yuJin: IdolType = {
  name: '안유진',
  year: 2002
}

interface IdolInterface {
  name: string;
  year: number;
}

const yuJin2: IdolInterface = {
  name: '안유진',
  year: 2002
}

interface IdoIT {
  name: NewStringType;
  year: NewNumberType;
}

const yuJin3: IdoIT = {
  name: '안유진',
  year: 2002
}

interface IdolOptional {
  name: string,
  year?: number // 타입변수뒤에 ? 를 붙이면 옵셔널한 타입 지정이 가능하다 (있어도되고 없어도 되고)
}

const yuJin4: IdolOptional = {
  name: '안유진',
  // year: 2002
}

