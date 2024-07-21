/**
 * Generic in Type - 타입에서 제너릭 사용하는 방법
 */
type GenericSimpleType<T> = T;

const genericString: GenericSimpleType<string> = '코드팩토리';
// const genericString2: GenericSimpleType = '코드팩토리'; // 제너릭은 타입유추가 안된다.

/**
 * 인터페이스와 제너릭을 통합해서 사용하는 방법
 */
interface DoneState<T> { // 인터페이스에 제너릭을 설정해 주고,
  data: T[]; // data 키값에 제너럴 설정해준다.
}

interface LoadingState {
  requestedAt: Date;
}

interface ErrorState {
  error: string;
}

/**
 * state 타입에 T 제너럴이 DoneState 타입에 타입을 전달해준다.
 * 제너럴 T 값의 default 값을 number 로 설정 해줬기 때문에 값을 할당해 줄 때 타입을 지정해주지 않아도 된다. 
 * 하지만 number 가 default 값이여서 number 값만 넣을 수 있다. 다른 값을 설정하면 에러 발생
 */
type State<T = number> = DoneState<T> | LoadingState | ErrorState; 

let state: State<string> = { // 할당 타입을 설정해주지 않아도 
  data: ['123', '456'],
}

state = {
  requestedAt: new Date()
}

state = { error: 'error' };

console.log(state);

let state2: State = {
  data: [123, 456]
}
