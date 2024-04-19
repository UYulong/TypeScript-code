// NonNullabel 用于排除 Type 中的所有 null、undefined 类型
// NonNullable<Type>
type info = string | number | null | undefined

type newInfo = NonNullable<info>

// 实现  NonNullabel
type myNonNullable<T> = T extends null | undefined ? never : T
type myInfo = myNonNullable<info>