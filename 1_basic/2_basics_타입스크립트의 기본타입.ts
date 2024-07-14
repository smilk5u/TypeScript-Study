/**
 * Types
 */

let helloText: string = 'Hello';

/**
 * JS 에 존재하는 타입
 * 7개의 타입
 */
const stringVar: string = "String"; // 문자열
const numberVar: number = 3; // 숫자
/** 
 * 빅인트는 2020 이하에서는 자바스크립트 컴파일시 에러가 난다
 * 그래서 tsconfig.js 에서 "target": "es2020", 이상으로 설정해줘야한다
 */
const bigIntVar: bigint = BigInt(9999);
const booleanVar: boolean = true; // 불리언
const symbolVar: symbol = Symbol(1);
const nullVar: null = null; // 값 없음
const undefinedVar: undefined = undefined; // 찾지 못함

/**
 * # TS 에서만 존재하는 타입
 * Any, - 아무 타입이나 입력 할 수 있는 치트키 타입
 * never, - 절대 안바뀌는 타입
 */
// string, number 값 한줄로 생성되는 것(?) 프리미티브 타입이라고 함
let anyVar: any;
anyVar = 100;
anyVar = '코드팩토리';
anyVar = true;

let testNumber: number = anyVar;
let testString: string = anyVar;
let testBoolean: boolean = anyVar;

// unKonwn - 알 수 없는 타입
let unknownType: unknown;
unknownType = 100;
unknownType = true;
unknownType = '코딩팩토리';


// let testNumber2: number = unknownType; // 언논타입은 타입을 지정하면 에러를 발생한다.
// let testString2: string = unknownType;
// let testBooleand2: boolean = unknownType;
let unknownType2: unknown = unknownType;
let anyType2: any = unknownType;

// never - 어떤한 값도 저장되거나 반환되지 않을때 사용하는 타입
// let neverType: never = null;
// let neverType: never = undefined;
// let neverType: never = 'test';


/**
 * 배열(리스트) 타입
 */
const koreanGirlGroup: string[] = ['아이브', '블랙핑크', '레드벨벳']
const booleanList: boolean[] = [false, true, true];

/**
 * 타입스크립트는 자바스크립트로 컴파일되는 언어이다.
 * 빌드하기전에만 타입스크립트를 사용하기 때문에 빌드 후 실행되는것은 자바스크립트이다.
 * 그렇기 때문에 타입스크립트에서만 사용하는 any, unknown, never 타입을 남용하면 런타임(프로그램 동작)에서 문제가 생긴다
 */

