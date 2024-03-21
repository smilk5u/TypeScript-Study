/**
 * interface 는 Type 와의 차이점!
 * - interface 는 Type 이 하지 못하는 몇가지 문제점들을 해결하기위해서 생겼고, 좀 더 추가적인 기능을 할 수 있다
 * - interface 는 = 이 없이 타입을 지정할 수 있지만 * Type 은 = 을 적어 줘야한다.
 * ex: interface Name { name:'string' } / Type Name = { name: 'string' }
 * - interface 는 무조건 객체로만 타입을 지정해야하지만, Type 은 객체 또는 string 하나씩만 선언 할 수도 있다
 */

/**
 * Type : 타입은 쉽게 말해서 TS 의 타입에 이름을 지어주는 역할을 한다
 */
type NewStringType = string;
type NewNullType = null;
type NewNumberType = number;
type MaleOrFemale = 'male' | 'female';
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

// 옵셔널한 타입을 지정할 수 있다 - 있어도되고 없어도 되고
interface IdolOptional {
  name: string,
  year?: number
}

const yuJin4: IdolOptional = {
  name: '안유진',
  // year: 2002
}

