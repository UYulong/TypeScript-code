// Record<Keys, Type>
// Record 用于构造一个新类型，新类型中 所有的键（key）都是keys类型，所有的值都是 Type 类型
type Person = {
  name: string
  age: number
}

type CityType = 'beijing' | 'shanghai' | 'guangzhou'

type newPerson = Record<CityType, Person>

const p: newPerson = {
  beijing: {
    name: '1',
    age: 1
  },
  shanghai: {
    name: '2',
    age: 2
  },
  guangzhou: {
    name: '3',
    age: 3
  }
}

// 实现 Record
type myRecord<K extends string | number, T> = {
  [P in K]: T
}

type myNewPerson = myRecord<CityType, Person>

export { }