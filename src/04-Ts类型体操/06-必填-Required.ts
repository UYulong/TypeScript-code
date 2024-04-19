// Required 将传入的类型 变为 全部必填
type Person = {
  name: string
  age?: number
  hobby?: string
}

const p: Person = {
  name: 'niuma',
  age: 23,
}

type newPerson = Required<Person>

const np1: newPerson = {
  name: 'xinniuma',
  age: 88,
  hobby: 'wokr'
}


// 实现 Required
type myRequired<T> = {
  [p in keyof T]-?: T[p]
}

type myNewPerson = myRequired<Person>

export { }
