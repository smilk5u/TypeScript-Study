/**
 * Parameter Type - Parameters의 typeof를 사용하여 함수의 파타미터 타입을 자동적으로 가져올 수가 있다.
 */

function sampleFunction(x: number, y: string, z: boolean) {
}

type Params = Parameters<typeof sampleFunction>;
type Params2 = Parameters<(one: number) => void>;