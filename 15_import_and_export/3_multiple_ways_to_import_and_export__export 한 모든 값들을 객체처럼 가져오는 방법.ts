/**
 * Multiple Ways to Import and Export
 */
// import { IdolModel as IM, rose, number, ICat } from "./2_export_1";

// console.log(new IM('아이유', 32));
// console.log(new IdolModel('아이유', 32));


/**
 * 와일드 카드 * as 를 사용하면 export 한 모든 값들을 객체처럼 하나로 묶어서 가져올 수 있다.
 */
// import * as allTogether from './2_export_1';

// console.log(allTogether.number);
// console.log(allTogether.rose);


/**
 * export default 와 export 를 동시에 import 하는 방법
 */
// import cf, {rose, number} from './2_export_1'; // 그냥 같이 써주면 된다.

// console.log(cf);
// console.log(rose);

// baseUrl
import { IdolModel } from "15_import_and_export/2_export_1";