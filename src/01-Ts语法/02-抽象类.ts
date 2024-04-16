abstract class Shape {
  abstract getArea()
}

class Rectangle extends Shape {
  constructor() {
    super()
  }

  // 继承抽象类，子类必须实现抽象类中的方法
  getArea() {
    return 'rectangle'
  }
}