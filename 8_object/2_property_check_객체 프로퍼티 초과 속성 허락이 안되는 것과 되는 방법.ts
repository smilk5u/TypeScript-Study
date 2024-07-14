/**
 * Property Check
 * 
 * 초과 속성 검사
 */
type TName = {
  name: string;
}

type TAge = {
  age: number;
}

const iu = {
  name: '아이유',
  age: 30,
}

// const iu: TName = { // 에러발생 초과속성이 허락이 안된다.
//   name: '아이유',
//   age: 30,
// }
// const iu: TAge = { // 에러발생 초과속성이 허락이 안된다.
//   name: '아이유',
//   age: 30,
// }

/**
 * 타입을 지정한 새로운 변수를 생성해서 다시 객체를 할당하는 것은 가능하다.
 * 이 부분은 네로잉 한 것이나 마찬가지이기 때문에 가능한 것 같다(?)
 */
const testName: TName = iu;
const testAge: TAge = iu;