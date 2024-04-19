// Omit<Type, Keys> 针对 对象类型
// Omit 用于从 Type 类型中 排除[删除]部分类型 
type Person = {
  name: string
  age: number
  hobby: string
}

type newPerson = Omit<Person, 'age' | 'hobby'>

const p: newPerson = {
  name: 'niuma'
}

// 实现 Omit
type myOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}

type myNewPerson = myOmit<Person, 'name' | 'age'>

export { }