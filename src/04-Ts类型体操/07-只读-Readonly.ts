// Readonly 将传入的类型 变为 全部必填
type Person = {
  name: string
  age?: number
  hobby?: string
}

const p: Person = {
  name: 'niuma',
  age: 23,
}

type newPerson = Readonly<Person>

const np1: newPerson = {
  name: 'xinniuma',
  age: 88,
  hobby: 'wokr'
}


// 实现 Readonly
type myReadonly<T> = {
  readonly [p in keyof T]-?: T[p]
}

type myNewPerson = myReadonly<Person>

const myp: myNewPerson = {
  name: 'niuba',
  age: 89,
  hobby: 'eat'
}

// myp.name = 'laoliu' // 只读

export { }
