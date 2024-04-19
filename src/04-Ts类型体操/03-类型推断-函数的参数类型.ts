// 类型推断 - 获取 [函数] 的返回值
type foo = (arg1: number, arg2: number) => number

const bar = () => {
  return 'bar'
}

// 获取 foo [类型] 的参数 类型
type fooType = Parameters<foo>
// 获取 bar [函数] 的参数 类型
type barType = Parameters<typeof bar>

// 实现 Parameters
type myParameters<T extends (...arg: any[]) => void> = T extends (...arg: infer P) => void ? P : never

type myFooType = myParameters<foo>
type myBarType = myParameters<typeof bar>