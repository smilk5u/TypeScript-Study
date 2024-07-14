/**
 * Extension - 상속을 받는다는 의미
 */

// interface ----------------------------
// inhterface 상속을 받을때는 extends 로 사용을 한다.
interface IName {
  name: string;
}

interface IIdol extends IName { // 인터페이스끼리 상속을 받을 수 있음
  age: number;
}

const idol: IIdol = {
  name: '안유진',
  age: 23,
}

// Type ---------------------------- 
// type 상속을 받을때는 & 로 사용한다.
type TName = {
  name: string;
}

type TIdol = TName & {
  age: number
};

const idol2: TIdol = {
  name: '아이유',
  age: 29,
}

interface IIdol2 extends TName { // 인터페이스에서 type 을 상속받을 수도 있다.
  age: number;
}

const idol3: IIdol2 = {
  name: '제니',
  age: 29,
}

type TIdol2 = IName & { // 타입에서 인터페이스를 상속 받을 수도 있다.
  age: number;
}

const idol4: TIdol2 = {
  name: '지수',
  age: 31,
}

/**
 * extending multiple
 */
type DogName = {
  name: string;
}

type DogAge = {
  age: number;
}

type DogBreed = {
  breed: string;
}

type Dog = DogName & DogAge & DogBreed; // 타입을 여러개 오버라이딩(추가) 해줄 수 있다.

const dog: Dog = {
  name: '코드팩토리',
  age: 32,
  breed: 'Poodl',
}

interface CatName {
  name: string;
}
interface CatAge {
  age: number;
}
interface Cat extends CatName, CatAge { // 인터페이스를 여러개 추가해줄 수 있다.
  breed: string;
}

const cat: Cat = {
  name: '오리',
  age: 7,
  breed: '코리안 냥냥이',
}

/**
 * Overrding
 */
type THeight = {
  height: number;
}

type TRectangle = THeight & {
  height: string; // 타입은 성립은 안되지만 선언은 가능하다
  width: number;
}

// const rectangle: TRectangle = { 
//     height:, // height 가 오버라이딩이 되었지만, height의 값이 number와, string 타입 동시에 성립 되지 않기 때문에 never 타입으로 변한다. (프리미티브타입 지정시 오버라이딩은 하지 않는것을 권장한다.)
//     width: 100,
// }

type TWidth = {
  width: number | string; // 유티언 타입으로 조건을 나눠 놓으면, (네로잉을 해준다)
}
type TRectangle2 = TWidth & {
  width: number; // 정확한 타입 지정이 가능하다.
  height: number;
}

const rectangle: TRectangle2 = {
  height: 100,
  width: 200,
}

interface IHeight {
  height: number;
}

// interface IRectangle extends IHeight {
//   height: string; // 인터페이스는 선언 조차 안되게 된다.
//   width: number;
// }

interface IWidth {
  width: number | string;
}

interface IRectangle extends IWidth {
  width: number;
  height: number;
}

/**
 * 익스텐트 시 never 타입이 발생할 경우에 
 * type 경우에는 익스텐트가 가능하고 사용 시에만 에러를 띄우지만,
 * interface 는 익스텐트에서부터 에러를 띄워서 적용하지 못하게 막는다.
 */