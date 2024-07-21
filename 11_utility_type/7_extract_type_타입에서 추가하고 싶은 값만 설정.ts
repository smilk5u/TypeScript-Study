/**
 * 값을 다 적고, 해당 값에서 추가하고 싶은 값만 , 클론 후 마지막에 넣어준다.
 */

type stringOnly = Extract<string | boolean | number, string>;

type functionOnly = Extract<string | (() => void), Function>;