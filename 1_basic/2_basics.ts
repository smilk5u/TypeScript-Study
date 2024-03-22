/**
 * Types
 */

let helloText: string = 'Hello';

/**
 * JS 에 존재하는 타입
 * 7개의 타입
 */
const stringVar: string = "String";
const numberVar: number = 3;
const bigIntVar: bigint = BigInt(9999);
const booleanVar: boolean = true;
const symbolVar: symbol = Symbol(1);
const nullVar: null = null;
const undefinedVar: undefined = undefined;

/**
 * TS 에서만 존재하는 타입
 * Any, never, 
 */
// 일자로 정렬되는것을 프리미티브 타입이라고 함
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


// let testNumber2: number = unknownType;
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
 * 빌드하기전에만 타입스크립트를 사용하기 때문에 빌드 후 실행되는것은 자바스크립트이다.
 * 그렇기 때문에 타입스크립트에서만 사용하는 any, unknown, never 타입을 남용하면 런타임(프로그램 동작)에서 문제가 생긴다
 */