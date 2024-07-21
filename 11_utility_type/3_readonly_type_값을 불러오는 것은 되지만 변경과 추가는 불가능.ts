/**
 * Readonly Type - const 와 같은 말? 
 * 값을 불러오는 것은 되지만 변경과 추가는 불가능하다.
 */
interface Cat {
  name: string;
  age: number;
}

const nyaong: Cat = {
  name: '냐옹이',
  age: 8
};

nyaong.name = '코드팩토리';

const bori: Readonly<Cat> = {
  name: '보리',
  age: 7,
}

// bori.name = '아이유'; // readonly 이기 때문에 값을 변경할 수 없다.

/**
 * 자바스크립트에서 readonly 와 같은 형태로 사용할 수 있는 방법
 * 오브젝트를 얼린다.
 */
Object.freeze(bori); 