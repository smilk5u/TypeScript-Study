/**
 * Casing
 * TS 에서 Casing 을 하면 JS 에서는 적용이 안된다
 * 
 */

let codefactory = 'code factory';
let testNumber = 3;

console.log(codefactory.toUpperCase());
// console.log(testNumber.toUpperCase()); // 숫자이기 때문에 에러를 뱉어낸다

let sampleNumber: any = 5;
console.log(sampleNumber as string);
let stringVar = sampleNumber as string; // 캐스팅을 하게 되면 실제 그 타입이 아니더라도 캐스팅한 값으로 가정하게 된다

/**
 * JS 에서는 캐스팅을 인식하지 못하기 때문에 TS 에서 스트링을 남발해선 안된다
 */
console.log(typeof (sampleNumber as string)); // TS 에서는 string 이 맞지만 JS 에서 typeof 를 실행하면 number 로 뜬다

let number = 5;


// 캐스팅의 위험성... 초보는 사용하지 않는게 좋다
// console.log(number.toUpperCase()); // 타입이 number 이기 때문에 에러를 뱉어낸다
console.log((number as any).toUpperCase()); // 하지만 any 로 캐스팅하게되면 에러를 뱉어내지 않는다
