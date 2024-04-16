class Person {
  constructor(public name: string, public age: number) {
    this.name = name
    this.age = 12
  }

  private run() {
    console.log(`${this.name} run`);
  }

  protected eat() {
    console.log(`${this.name} eat`);
  }
}

class Niuma extends Person {
  constructor(name: string, age: number) {
    super(name, age)
  }

  niuEat() {
    this.eat()
  }
}

const niu = new Niuma('🐮🐎', 23)
// console.log(p.name);
// console.log(p.age);

// niu.run() // private 修饰的方法或属性，无法在自身类之外的任何地方使用
// niu.eat() // protected 修饰的方法或属性，无法在自身类和子类之外的任何地方使用

