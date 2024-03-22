/**
 * Type Inference
 * 
 * 타입 추론
 */
let stringType = 'string';
let booleanType = true;
let numberType = 20;

booleanType = false;
booleanType = true;

// 아래 상수는 무조건 const string 값만 오게됨
const constStringType = 'const string';
const constBooleanType = true;

let yuJin = {
  name: '안유진',
  age: 2003
}

const yuJin2 = {
  name: '안유진',
  age: 2003
}
yuJin2.name = '코딩팩토리';
console.log(yuJin2);

/**
 * 캐스팅 - 특정타입으로 지정을 한다 프로퍼티를 구체화한다, 뒤에 as const 이런식으로 붙임
 * 객체안에서 구체화된 값을 지정할 수 있다
 */
const yuJin3 = {
  name: '안유진' as const, // 스트링도 무조건 안유진 만 지정 (캐스팅해준다)
  age: 2003 as const  // 무조건 2003 만 지정
}

// yuJin3.name = '안유진'; // 값 변경 된다
// yuJin3.name = '코딩팩토리'; // 값 변경 안됨

console.log(yuJin3.name) // 마우스를 대면 구체화 값을 알 수 있음
console.log(yuJin2.name) // 구체화 된 값을 알 수 없음

/**
 * Array
 */
let numbers = [1, 2, 3, 4, 5];
let numberAndString = [1, 2, 3, '4', '5', '6'];

// numbers.push('6');  // 넣을 수 없음
const number = numbers[0]; // 마우스를 대면 number 값이 나온다, 배열안에 number 만 존재하기 때문에 
const nos = numberAndString[0]; // 마우스를 대면 string | number 값이 나온다, 어떤 값이 나오는지는 정확히 추론 할 수 없음
const nos2 = numberAndString[100]; // 마우스를 대면 100 인 배열에 값이 없는데도 에러나지 않고 string | number 라고 추론함... 

/**
 * tuple 튜플
 */
const twoNumbers = [1, 3] as const;
// twoNumbers[0] = 10; // 넣을 수 없음
// twoNubmers.push(100); // 넣을 수 없음

const first = twoNumbers[0];
// const first2 = twoNumbers[3]; // 튜플은 값이 존재하지 않으면 에러가 난다


