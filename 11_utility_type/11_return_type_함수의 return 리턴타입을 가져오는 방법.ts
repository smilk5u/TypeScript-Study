/**
 * Return Type - 어떠한 함수의 return 리턴값을 가져오고 싶을 때 사용하는 유틸리티 타입 
 */
type ReturnTypeSample = ReturnType<() => number>;

type FunctionSign = (x: number, y: number) => number;

type ReturnType2 = ReturnType<FunctionSign>;