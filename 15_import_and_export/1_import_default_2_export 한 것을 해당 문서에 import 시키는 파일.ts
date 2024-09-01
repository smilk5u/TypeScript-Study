/**
 * ./ -> 현재 위치
 * ../14_namespace -> 상위 폴더
 */
import Example from './1_export_default_1_현재 파일에서 작성한 것을 외부파일로 사용하는 방법'; // 현문서 시점에서의 경로를 적어준다.
import { IdolModel } from './2_export_1_실질적인 업무에서는 export default 보다는 export';

const iu = new IdolModel('아이유', 23);
console.log(iu.name);

// console.log(IdolModel);

// const cat: IdolModel = {
//     name: '냥냥이',
//     breed: '스코티시폴드',
// };

const yuJin = new Example.IdolModel('안유진', 23);

// console.log(yuJin);
// console.log(Example.number);