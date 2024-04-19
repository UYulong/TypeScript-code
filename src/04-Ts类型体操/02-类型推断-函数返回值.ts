// 类型推断 - 获取 [函数] 的返回值
type foo = (arg1: number, arg2: number) => number

const bar = () => {
  return 'bar'
}

// 获取 foo [类型] 的返回值 类型
type fooType = ReturnType<foo>
// 获取 bar [函数] 的返回值 类型
type barType = ReturnType<typeof bar>

// 实现 ReturnType
type myReturnType<T extends (...arg: any[]) => void> = T extends (...arg: any[]) => infer R ? R : never

type myFooType = myReturnType<foo>
type myBarType = myReturnType<typeof bar>

export { }