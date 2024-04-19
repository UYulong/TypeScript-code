// Exclude<Type, Keys> 针对 联合类型
// Exclude 用于从 Type 类型中 排除[删除]部分类型 
type infoA = 'name' | 'age' | 'hobby'
type infoB = 'name' | 'age'

type newPerson = Exclude<infoA, infoB>

const info: newPerson = 'hobby'

// 实现 Exclude
type myExclude<T, U> = T extends U ? never : T

type newInfo = myExclude<infoA, infoB>

export { }