/**
 * Object Union
 */

/**
 * 유추된 객체 타입 유니언
 */
const dogOrCat = Math.random() > 0.5 ?
  /**
   * 변수에 마우스를 대보면 강아지는 breed가 없는데 옵셔널로 생겨있고, 
   * 고양이에는 age가 없는데 옵셔널로 생성이 되어있다. 이 것을 방지하기 위해
   * Dog 와 Cat 모두 타입을 지정 후 유니언 타입을 만들어준다.
   */
  // 강아지
  {
    name: '별이',
    age: 12,
  } :
  // 고양이
  {
    name: '오리',
    breed: '코리안 길냥이',
  }

dogOrCat.name;
dogOrCat.age;
dogOrCat.breed;

interface Dog { // 타입 지정
  name: string;
  age: number;
}

interface Cat { // 타입 지정
  name: string;
  breed: string;
}

type DogOrCat = Dog | Cat; // 유니언 타입으로 생성해준다.

const dogOrCat2: DogOrCat = Math.random() > 0.5 ?
  // 강아지
  {
    name: '별이',
    age: 12,
  } :
  // 고양이
  {
    name: '오리',
    breed: '코리안 길냥이',
  }

dogOrCat2.name;
// dogOrCat2.age; // 어떤 타입이 들어올지 유추할 수 없기 때문에 에러 발생한다.
// dogOrCat2.breed; // 어떤 타입이 들어올지 유추할 수 없기 때문에 에러 발생한다.

/** 
 * in 키워드를 사용해서 네로잉 후에 타입을 가져온다. (조건문..이랄까?)
 */
if ('age' in dogOrCat2) {
  dogOrCat2;
  dogOrCat2.age;
  dogOrCat2.name;
} else {
  dogOrCat2;
  dogOrCat2.name;
  dogOrCat2.breed;
}