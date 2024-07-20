/**
 * Generic in Inheritance
 */
class BaseCache<T> {
  data: T[] = [];
}

class StringCache extends BaseCache<string> { }

const stringCache = new StringCache();
stringCache.data;

class GenericChild<T, Message> extends BaseCache<T> {
  message?: Message;

  constructor(message?: Message) {
    super();
    this.message = message;
  }
}

const genericChild = new GenericChild<string, string>('error');
genericChild.data;
genericChild.message;

/**
 * 제너릭의 inheritance
 */
interface BaseGeneric {
  name: string;
}

class Idol<T extends BaseGeneric> {
  information: T;

  constructor(information: T) {
    this.information = information;
  }
}

const yuJin = new Idol({
  name: '안유진',
  // age: 23,
});

const yuJin2 = new Idol({ // Idol class 에서 BaseGeneric class 를 제네릭으로 익스텐즈 했기 때문에 name: string 을 무조건 입력해 줘야 한다.
  name: '안유진',
});

/**
 * keyof 함께 사용하기 - 실전에서 많이 사용하는 패턴의 타입
 * 
 */
const testObj = { // 현재는 타입을 입력하지 않은 상태이기 때문에 타입추론이 이루어진다. 
  a: 1,
  b: 2,
  c: 3,
}

function objectParser1<O>(obj: O, key: string) {
  /**
   * 여기서 에러를 발생시키는데, obj는 어떤 타입인지 알 수 없는데, 
   * number가 될 수도 있고, string 이 될 수도 있는데 어떤 값인지 
   * 모르는 상황에서 키 값을 넣으려고 하니까 에러를 발생시키는 것
   */
  // return obj[key]; 
}

/**
 * 절대적으로 오브젝트 안에 있는 키값 만을 입력한다는 조건을 타입에 명시해 줘야 한다. 
 */
function objectParser<O, K extends keyof O>(obj: O, key: K) { // K 는 O 타입 안의 키 중 하나라는 것을 명시해 준 것.
  return obj[key];
}

const val = objectParser(testObj, 'c');

/**
 * Ternary - 삼항연산자
 * 1=== 2 ? true : false
 */
class Idol2 {
  type?: string;
}

class FemaleIdol extends Idol2 {
  type: 'Female Idol' = 'Female Idol';
}

class MaleIdol extends Idol2 {
  type: 'Male Idol' = 'Male Idol';
}

/**
 * 제네릭의 삼항연산자
 * 만약에 T가 MaleIdol 를 익스텐즈 한다면 MaleIdol를 반환하고, 아니면 FemaleIdol를 반환해라.
 */
type SpecificIdol<T extends Idol2> = T extends MaleIdol ? 
  MaleIdol : FemaleIdol;

const idol2: SpecificIdol<MaleIdol> = new MaleIdol();