/**
 * Type Predicate 어떠한 값이 어떤 타입인지만 판별하기 위해서 만들어지는 함수.
 * - 함수 뒤에 input is number 이런식으로 작성한다.
 */
function isNumber(input: any): input is number{
    return typeof input === 'number';
}

console.log(isNumber(10));

function isNumberRetBool(input: any): boolean{
    return typeof input === 'number';
}

let number: any = 5;

if(isNumberRetBool(number)){
    number;
}

if(isNumber(number)){
    number;
}

interface Doge{
    name: string;
    age: number;
}

interface Cat{
    name: string;
    breed: string;
}

type DogeOrCat = Doge | Cat;

function isDoge(animal: DogeOrCat): animal is Doge{
    return (animal as Doge).age !== undefined;
}

const doge: DogeOrCat = Math.random() > 0.5 ? {
    name: '도지',
    age: 32,
} : {
    name: '오리',
    breed: '코리안 길냥이'
}

if(isDoge(doge)){
    doge;
}else{
    doge;
}