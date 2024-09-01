
/**
 * export default가 아닌 export 한 파일을 가져오려면 import에 {} 괄호 형식을 사용해야 한다.
 * {} 내부 값은 정확한 명칭을 입력해야 한다.
 */
import { IdolModel, rose, number, ICat } from './2_export_1_실질적인 업무에서는 export default 보다는 export'; 

const iu = new IdolModel('아이유', 32);
console.log(iu);
console.log(rose);
console.log(number);

const cat: ICat = {
  name: '냥냥이',
  age: 12,
}
console.log(cat);