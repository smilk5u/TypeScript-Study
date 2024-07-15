/**
 * Key Value Mapping
 */

enum State { // 어떠한 상태값을 선언해준다.
  loading,
  done,
  error,
}

type GlobalApiStatus = { // 글로벌한 상태관리 객체를 관리한다.
  getUser: State;
  paginateUsers: State | undefined;
  banUser: State | null;
  getPosts: State;
}

type Adddd = {
  daa: {
    dddsss: {
      sdksdks: {

      }
    }
  },
  aaa: [1, 2, 2, 3, 3]
}

type UserApiStatus = { // 유저정보도 상태관리를 하는데 내용은 같을 때, 어떻게 내용을 복사할까?
  getUser: State;
  paginateUsers: State | undefined;
  banUser: State | null;
}

type UserApiStatus2 = { // (1) 이런식으로 타입과 value 값을 사용하여 복사하는 방법 (별로 좋은 방법은 아닌 것 같다)
  getUser: GlobalApiStatus['getUser'];
  paginateUsers: GlobalApiStatus['paginateUsers'];
  banUser: GlobalApiStatus['banUser'];
}


/**
 * (2) in 키워드를 사용하여 복사하는 방법 (타입객체 내 원하는 값만 골라서 가져올 수가 있다) 
 * - 딱 한 타입만 가져올 수 있는 듯? 중복안됨
 */
type UserApiStatus3 = {
  [k in 'getUser' | 'paginateUsers' | 'banUser']: GlobalApiStatus[k] // 키값이 다를 경우 에러 발생
  // getUser: 
  // paginateUsers:
  // banUser:
}

// (3) 유틸리티 타입을 이용해서 각 키값만 따와서 복사하는 방법
type PickedUserApiStatus = Pick<GlobalApiStatus, 'getUser' | 'banUser' | 'paginateUsers'>;
// (4) 유틸리티 타입을 객체 내 빼고싶은 타입만 빼고 복사하는 방법
type OmitUserApiStatus = Omit<GlobalApiStatus, 'getPosts'>;

type ddkdkd = Pick<Adddd, 'aaa'>; // 이거 되게 좋은 방법인 것 같다? 간편함..
type ddd = Omit<Adddd, 'daa'>

/**
 * keyof
 */
type AllKeys = keyof GlobalApiStatus; // 키값을 저장

const key: AllKeys = 'getUser'; // 키값을 가져올 수 있다.

type KeyOfUserApiStatus = { // (5) in 와 keyof 키워드를 사용하여 복사하는 방법 (모든 데이터 다 가져옴)
  [k in keyof GlobalApiStatus]: GlobalApiStatus[k];
}

type ddsjsjs = { [k in keyof Adddd]: Adddd[k] } // 완전 복사..모든것을 다 복사할때 이것 사용하면 좋을 듯?

type KeyOfUserApiStatus2 = { // (5) in 와 keyof 키워드를 사용하여 복사하는 방법 (빼고 싶은 것 빼고 가져옴 - 하나만...뺄 수 있나 봄)
  [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]: GlobalApiStatus[k];
}

type KeyOfUserApiStatus3 = { // ? 옵셔널도 전체적으로 추가할 수 있음
  [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]?: GlobalApiStatus[k];
}

interface LoadingStatus {
  type: 'loading';
  data: string[];
}

interface ErrorStatus {
  type: 'error';
  message: string;
}

type FetchStatus = LoadingStatus | ErrorStatus;

type StatusType1 = FetchStatus['type']; // 허용 됨
type StatusType2 = FetchStatus['data']; // 허용이 안됨