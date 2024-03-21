/**
 * Enum
 */

/**
 * API 요청을 한다
 * 상태는 4가지 상태
 * 
 * DONE - 요청 완료 상태
 * ERROR - 에러가 생긴 상태
 * LOADING - 로딩 상태
 * INITIAL - 초기 상태
 */

function runWork() {
  let state = 'INITIAL';
  try {
    state = 'LOADING';
    // 작업을 한다
    state = 'DONE';
  } catch (e) {
    state = 'ERROR';
  } finally {
    return state;
  }
}
console.log(runWork() === 'DONE');

const doneState = 'DONE';
const lodingState = 'LOADING';
const errorState = 'ERROR';
const initalState = 'INITIAL';

function runWork2() {
  let state = initalState;
  try {
    state = lodingState;
    // 작업을 한다
    state = doneState;
  } catch (e) {
    state = errorState;
  } finally {
    return state;
  }
}

console.log(runWork2() === doneState);


/**
 * enum 은 값을 설정해주지 않으면 index 값이 자동으로 설정된다 하지만 값을 변경해주면 그다음값은 이전에 설정한 값에 따라 값이 변경된다
 * 현재는 값을 지정해준 상태이다
 */
enum State {
  DONE = 'DONE',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  INITIAL = 'INITIAL',
}

function runWork3() {
  let state = State.INITIAL;
  try {
    state = State.LOADING;
    // 작업을 한다
    state = State.DONE;
  } catch (e) {
    state = State.ERROR;
  } finally {
    return state;
  }
}

console.log(runWork3() === State.DONE);