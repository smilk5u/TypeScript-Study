/**
 * Generic in Promise - 비동기 프로그래밍에서 제네릭 사용하는 방법
 */
const afterTwoSeconds = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('done');
    }, 2000)
  })
}

const runner = async function () {
  const res = await afterTwoSeconds();
  console.log(res);
}

runner();

const afterOneSecond = function (): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('done');
    }, 1000)
  })
}

const runner2 = async function () {
  const res = await afterOneSecond();
  console.log(res);
}

runner2();

const runner3 = async function () { // 함수에 async 를 입력하게 되면 타입을 무조건 Promise로 선언된다는 것을 명심해라.
  return 'string return';
}