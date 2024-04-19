// instanceType 获取 构造函数 示例的类型

class Person { }
class Dog { }

const d: InstanceType<typeof Dog> = new Dog()