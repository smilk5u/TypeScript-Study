2_import_2_export default가 아닌 export 한 파일을 가져오려면 import에 {} 괄호 형식을 사용해야 한다# TypeScript Study

- TypeScript를 효과적으로 사용하는 방법

### 1. Basic

- 타입 스크립트의 기본 타입
- 타입과 인터페이스 이름 짓기
- 객체 형태처럼 내부에서 타입을 지정해 줄 수 있는 타입
- 타입 추론 캐스팅, 구체화된 값 지정
- 큐플 Array 안에서도 구체화된 값 지정
- 캐스팅 변수를 구체화 시키는 것의 위험성

### 2. Union And Intersection

- 유니언타입(합집합) A 또는 B의 개념
- 객체안에서 유니언타입 지정하는 방법
- 인터섹션 & and의 개념
- 네로잉 방법

### 3. Function

- 함수 내 매개변수의 타입 선언방법
- 사용 안하는것이 더 좋다 자바스크립트에는 없음
- 함수를 여러개 작성해야할 때, 표현식
- 어떤 타입인지만 판별하기 위해서 만들어지는 함수

### 4. Type And Interface

- 타입 선언과 인터페이스 선언의 차이점
- extension class extends type, interface 상속 방법

### 5. Any Unknown Never

- Any 타입의 문제점
- unknown type
- never type

### 6. Array

- 배열에서 타입 선언 방법과 에러
- 배열의 스프레드 복사하기
- 배열 여러개 타입 선언하기

### 7. Tuple

1_what_is_tuple_배열안에서 여러개의 타입을 넣는 방법

### 8. Object

- 타입스크립트 오프젝트 만들기_기본
- 객체 프로퍼티 초과 속성 허락이 안되는 것과 되는 방법
- 객체안의 객체의 타입선언
- 객체안의 옵셔널 속성
- 객체안의 유니언 타입 지정
- 객체안의 유니언과 인터섹션의 조합
- 동일한 객체를 사용 시 키 복사하는 다양한 방법(유용하다)

### 9. Class

- 클래스에서 타입 선언하기 기본
- property ReadOnly 사용방법
- initialization_프로퍼티 초기화 방법
- 클래스는 타입과 동일, 클래스 타입 사용 방법
- OOP 객체지향 프로그래밍 관점의 인터페이스
- 클래스 상속
- 클래스 extends 후 메서드 덮어 씌우기
- class 단독X 상속O 상속받은 Class, 메서드 강제성 부여
- keyword 접근 프로퍼티 종류

### 10. Generic

- <> 코멘트를 사용하여 타입을 변수화 하는 방법 (타입을 변수화 하는 방법)
- interface 에서 제네릭을 사용하는 방법
- Type 에서 제네릭을 사용하는 방법
- class 에서 제네릭을 사용하는 방법
- 제네릭의 삼항연산자, 제네릭의 keyof 사용방법
- 메소드에서 제네릭 사용방법
- class 에 타입을 지정, implements 사용방법
- 비동기 프로그래밍에서 제너릭 사용하는 방법

### 11. Utility Type

- 타입 전부 X, 부분만 사용 시 쓰이는 타입
- 전부 다 필 수로 만들고 싶은 타입
- Readonly Type, const 와 같은 말, 값을 불러오는 것은 되지만 변경과 추가는 불가능하다
- Pick Type, 타입내부에서 원하는 값만 픽해서 가져 올 수 있는 방법
- Omit Type, 내가 제외하고 싶은 타입 가져올 수 있는 방법
- Exclude Type, 객체타입이 아닌 유니온 타입으로 설정하는 방법
- extract_type, 타입에서 추가하고 싶은 값만 설정하는 방법
- non_nullable_type,  null, undefined 타입은 제외시켜주는 타입
- parameter_type, 함수의 파라미터 타입을 가져오는 방법
- constructor_parameter, 클래스 컨스트럭터의 타입을 가져오는 방법
- return_type, 함수의 return 리턴타입을 가져오는 방법
- template_literal, 대소문자 변경

### 12. Experimental_decorator

- ..study

### 13. Reflection3_multiple_ways_to_import_and_export__export 한 모든 값들을 객체처럼 가져오는 방법

- ..study

### 14. Namespace

- 현재 타입스크립트에서는 빠진 기능

### 15. Import And Export
- 현재 파일에서 작성한 것을 외부파일로 사용하는 방법
- import_default 한 것을 해당 문서에 import 시키는 파일
- 실질적인 업무에서는 export default 보다는 export
- export default가 아닌 export 한 파일을 가져오려면 import에 {} 괄호 형식을 사용
- 모든 값들을 객체처럼 가져오는 방법

### 16. Extras

- ..study