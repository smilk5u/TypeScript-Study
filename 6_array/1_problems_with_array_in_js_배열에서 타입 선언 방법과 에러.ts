/**
 * Problems with Array in JS - 자바스크립트의 array 의 문제점, 아무거나 넣을 수 있다
 */
const number = [1, '2', 3, '4', 5];

let strings: string[] = ['1', '2', '3'];

// strings.push(1);

let stringsOrNumbersArray: (string | number)[] = [
  1,
  '2',
  3,
  '4',
]

let stringArrNumberArr: string[] | number[] = [
  1,
  2,
  3,
]

stringArrNumberArr = [
  '1', '2', '3',
]

let stringOrNumberArr: string | number[] = [
  1, 2, 3
]

stringOrNumberArr = '3';

/**
 * 타입 추론
 */
let boolsArr = [true, false, true];

boolsArr.push(false); // 타입 추론이 되었기 때문데 boolean 값만 push 가 가능하다.

// boolsArr.push(1); // number 타입을 추가 할 수 없음

const onlyString = ['1', '2', '3'];
const onlyNumbers = [1, 2, 3];

for (let i = 0; i < onlyString.length; i++) {
  let item = onlyString[i];
}

for (let item of onlyNumbers) {
  console.log(item);
}

let number3 = onlyNumbers[0];

let number4 = onlyNumbers[9999];