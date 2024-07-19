/**
 * Visibility Keyword - TS에서만 존재하는 개념
 * 
 * 1) public (기본값) - 어디서든 접근이 가능하다
 * 2) protected - 현재 클래스 및 하위 (자식) 클래스에서 접근 가능하다.
 * 3) private - 현재 클래스 내부에서만 접근 가능하다.
 */
class PropertyTestParent {
  public publicProperty = 'public property';
  protected protectedProperty = 'protected property';
  private privateProperty = 'private property';
  #jsPrivateProperty = 'js private property'; // 이건 JS 에서 사용하는 프라이빗 형태

  // Class 내부에서 사용하는 것은 모두 가능하다.
  test() {
    this.publicProperty;
    this.protectedProperty;
    this.privateProperty;
    this.#jsPrivateProperty
  }
}

class PropertyTestChild extends PropertyTestParent {
  test() {
    this.publicProperty; // 기본값이라서 당연히 접근 가능
    this.protectedProperty; // 자식 클래스에서 접근 가능
    // this.privateProperty; // 접근 안됨
    // this.#jsPrivateProperty // 접근 안됨
  }
}

const instance = new PropertyTestChild();

instance.publicProperty; // 기본값만 접근 가능
// instance.