/**
 * Type vs Interface
 * 인터페이스가 타입을 완전히 대체할 수 있는 것은 아니다.
 * 타입이 할 수 있는 일이 있고, 인터페이스가 할 수 있는 일이 정해져있다.
 */

// Object 선언할때
interface IObject {
  x: number;
  y: number;
}

type TObject = {
  x: number;
  y: number;
}

// function을 선언할때
interface IFunction {
  (x: number, y: number): number;
}

type TFunction = (x: number, y: number) => number;

/**
 * Type에서는 할 수 있지만
 * interface에서는 할 수 없는것들
 */

// (1) primitive 타입 선언하기
type Name = string;

// (2) union 타입 선언하기
type UnionType = string | number;

// (3) primitive list 또는 tuple 타입 선언하기
type TupleType = [number, string];

/**
 * Interface는 할 수 있고
 * Type은 못하는 것
 * 
 * 1. 인터페이스 중복 선언이 가능하다! (오 되게 기가막히네.. 이것.. 좀 헷갈릴수동..ㅋㅋ)
 * - 인터페이스로 중복 선언 후, 해당 타입을 사용할 때는 무조건 합쳐진 내용을 모두 작성해줘야 한다. 
 * - 하나라도 입력을 안하게 되면 에러 발생한다.
 */

// interface merging
interface IRectangle {
  height: number;
}

interface IRectangle {
  width: number;
}

let rectangle: IRectangle = {
  height: 200,
  width: 100,
}

// type TRectangle = {
//     height: number;
// }

// type TRectangle = {
//     width: number;
// }

/**
 * Interface Merging
 */
class Review {
  // 프로퍼티 : JS에서 프로퍼티는 instance 에 귀속이 된다.
  getY = (x: number) => { return x };

  // 메서드 : JS에서 메서드는 prototype 에 귀속이 된다.
  getX(x: number) {
    return x;
  }
}

// 프러퍼티로 타입을 지정할 경우에는 오버로딩(합치기)가 불가능하다.
interface GetXnY {
  getX: (x: number) => number;
  getY: (y: number) => number;
}

interface GetXnY {
  getX: (x: number) => number;
  getY: (y: number) => number; // 값을 위에와 같게 작성해줘야한다.
}

// 함수(메서드) 로 작성 시에는 오버로딩(합치기)가 가능하다.
interface GetXnY2 {
  getX(x: number): number;
  getY(y: number): number;
}

interface GetXnY2 {
  getX(x: number): number;
  getY(y: string): number;
}

const testMethod: GetXnY2 = {
  getX(x) {
    return x;
  },
  getY(y) {
    return 1;
  }
}