/**
 * Generic in Interface - 인터페이스에서 제너릭을 사용하는 방법
 * 어떤 타입이든 들어가게 하고 싶은데, 타입체크는 하고 싶을 때 사용하면 좋은 것이 제너릭이다.
 */
interface Cache<T> { // 타입을 제너릭으로 설정
  data: T[]; // 타입 제너릭
  lastUpdate: Date;
}

const cache1: Cache<string> = { // 타입을 명시해준다.
  data: ['data1', 'data2'], // 할당
  lastUpdate: new Date(), // 할당
}

// const cach2: Cache = { // 제너릭에서는 타입유추가 되지 않는다. 타입을 설정해 줘야 한다.
//   data: [123, 456],
//   lastUpdate: new Date(),
// }

const cach2: Cache<number> = {
  data: [123, 456],
  lastUpdate: new Date(),
}

interface DefaultGeneric<T = string> { // default 값을 string 으로 설정
  data: T[];
}

const cache3: DefaultGeneric = {
  // data: [123, 456], // number 는 string이 될 수 없기 때문에 에러 발생
  data: ['123', '456'], // string 은 가능
}