/**
 * Exclude Type - 객체타입이 아닌 유니온 타입으로 설정할 수 있다. (Type)
 * Pick 과 Omit 이 interface (객체)형태였다면 Exclude 타입은 Type 유니온 타입으로 지정할 수 있다.
 */

type NoString = Exclude<string | boolean | number, string>; // 값을 다 적고, 제외하고 싶은 값만 , 클론 후 마지막에 넣어준다.

type NoFunction = Exclude<string | (() => void), Function>; 