/**
 * Spread Operator - 스프레드 오퍼레이터
 * - 서로 다른 타입을 스프레드 해줬을때도 똑같이 된다..음음 이해가지??
 */
const onlyString = ['1', '2', '3', '4'];
const onlyNumbers = [1, 2, 3, 4];

const arr1 = [
  ...onlyString,
];

const arr2 = [
  ...onlyString,
  ...onlyNumbers,
]