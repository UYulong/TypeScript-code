// Pick<Type, Keys>
// Pick 用于从 Type 类型中 挑选一部分类型
type Person = {
  name: string
  age: number
  hobby: string
}

type newPerson = Pick<Person, 'age' | 'hobby'>

const p: newPerson = {
  age: 18,
  hobby: 'work'
}

// 实现 Pick
type myPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

type myNewPerson = myPick<Person, 'name' | 'age'>

export { }