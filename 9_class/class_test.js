class Dog {
  name;

  constructor(name) {
    this.name = name;
  }

  setOpts(name) {
    console.log(`저는 ${this.name} 입니다.`);
  }
}

let Dog1 = new Dog('민두');

// Dog1.setOpts();

// Dog1 = 'dkdkdkd';

// console.log(typeof Dog1);

let dddd = {
  name: 'ddd',
  aaa() { }
}

console.log(dddd);