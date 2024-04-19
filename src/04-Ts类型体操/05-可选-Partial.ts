// Partial 将传入的类型 变为 全部可选
type Person = {
  name: string
  age: number
  hobby: string
}

const p: Person = {
  name: 'niuma',
  age: 23,
  hobby: 'work'
}

type newPerson = Partial<Person>

const np1: newPerson = {
  name: 'xinniuma'
}


// 实现 Partial
type MyPartial<T> = {
  [p in keyof T]?: T[p]
}

type myNewPerson = MyPartial<Person>

export { }
