/**
 * Object Intersection
 */
type PrimitiveIntersection = string & number; // 프리미티브 타입에는 string과 number를 동시에 충족하는 것은 존재 할 수 없다.

type PersonType = {
  name: string;
  age: number;
}

type CompanyType = {
  company: string;
  companyRegistrationNumber: string;
}

type PersonAndCompany = PersonType & CompanyType;

const jisoo: PersonAndCompany = {
  name: '지수',
  age: 32,
  company: 'YG',
  companyRegistrationNumber: 'xxxyyyyzzzz',
}

type PetType = {
  petName: string;
  petAge: number;
}

type CompanyOrPet = PersonType & (CompanyType | PetType);

const companyOrPet: CompanyOrPet = {
  // PersonType
  name: '코드팩토리',
  age: 32,

  // CompanyType
  company: '주식회사 코드팩토리',
  companyRegistrationNumber: 'xxxyyyzzz',

  // PetType
  petName: '오리',
  petAge: 8,
}