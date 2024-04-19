// Extract<Type, Union> 针对 联合类型
// Extract 用于从 Type 类型中 提取与 Union 中都存在的类型
type infoA = 'name' | 'age' | 'hobby'
type infoB = 'name' | 'age'

type newPerson = Extract<infoA, infoB>

const info: newPerson = 'name'

// 实现 Extract
type myExtract<T, U> = T extends U ? T : never

type newInfo = myExtract<infoA, infoB>

export { }