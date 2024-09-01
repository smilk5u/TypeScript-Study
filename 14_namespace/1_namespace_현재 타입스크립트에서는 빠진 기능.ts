/**
 * Namespace - ECMAscript 모듈이라는게 허가가 나기 전, 자바스크립트로 기능이 업데이트 전에 생긴 기능이라서 ECMAscript 모듈 대신에 쓰던 기능
 * 현재에는 사용하지 않는 기술이고, 새로운 프로젝트에서는 없는 기능이다. 한마디로 지금은 사용하지 않는 옛날 기능이다...
 * 
 * - 특정 관련 있는 코드들을 하나의 모듈로 묶을 수 있는 기능이다.
 * 배우지 않음...
 */
namespace Home {
  class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  export const yuJin = new Idol(
    '안유진',
    23,
  );
}

namespace Post {
  class User {
    email: string;
    name: string;

    constructor(email: string, name: string) {
      this.email = email;
      this.name = name;
    }
  }

  const admin = new User('admin@codefactory.ai', Home.yuJin.name);

  console.log(admin);
}

namespace Comment {
  const name = 'comment';

  namespace Detail {
    const page = 'detail';

    console.log(name);
    console.log(page);
  }

  console.log('----------');
  console.log(name);
  // console.log(page);
}