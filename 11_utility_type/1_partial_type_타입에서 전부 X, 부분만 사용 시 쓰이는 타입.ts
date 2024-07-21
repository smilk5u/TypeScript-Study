/**
 * 유틸리티 Partial Type - 가장 많이 쓰이는 타입
 * 어떤 타입안의 내용을 전부다 말고 부분적으로만 입력하고 싶을 때 쓰이는 타입
 * 근데 그 값이 어떤값이든 상관없을 때
 */
interface Idol {
  name: string;
  age: number;
  groupName: string;
}

const yuJin: Idol = {
  name: '안유진',
  age: 23,
  groupName: '아이브',
}

/**
 * pick을 사용하면 어떤 값을 가져오고 싶은지 정해줄 수 있다.
 */
function updateIdol(original: Idol, updates: Pick<Idol, 'age' | 'groupName'>): Idol {
  return {
    ...original,
    ...updates,
  }
}
/**
 * Partial을 사용하면 타입안의 어떤값을 구체적으로 정하진 않았지만 
 * 해당 타입의 아무것이나 부분적으로 가져오고 싶을 때 사용할 수 있다.
 */

// function updateIdol(original: Idol, updates: Partial<Idol>): Idol {
//   return {
//     ...original,
//     ...updates,
//   }
// }

console.log(updateIdol(yuJin, { // 함수 실행 시 Idol 타입에 선언된 값의 부분적으로만 값을 넣을 수 있다.
  age: 27,
  groupName: '주식회사 코드팩토리',
}));