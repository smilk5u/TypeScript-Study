/**
 * Loopholes of Any - any 타입의 문제점... 그냥 쓰지말자!!!!! 절대!!!!
 */
let number: number;
number = 10;

// number.toUpperCase();

// (number as any).toUpperCase();

const multiplyTwo = (x: number, y: number) => {
  return x * y;
}

let args1: any = '코드팩토리';
let args2: any = true;

multiplyTwo(args1, args2);
// multiplyTwo('코드팩토리', true);

let iu: any = { name: '아이유', age: 30 };
iu;

const callbackRunner = (x: number, y: number, callback: any) => {
  return callback(x); // 이렇게 x 값만 받고 y 값을 받지 않았는데도 에러를 발생하지 않아서, 어디서 오류가 났는지 확인하기가 어렵다.
}

const callback = (x: number, y: number) => {
  return x * y;
}

console.log(callbackRunner(5, 4, callback));