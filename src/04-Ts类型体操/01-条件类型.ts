// 函数重载
function sum(arg1: number, arg2: number): number
function sum(arg1: string, arg2: string): string

function sum(arg1: any, arg2: any) {
  return arg1 + arg2
}

sum(2, 3)
sum('3', '4')

// 条件类型可以简化 函数重载 定义
function add<T extends number | string>(arg1: T, arg2: T): T extends number ? number : string
function add(arg1: any, arg2: any) {
  return arg1 + arg2
}
const a1 = add(1, 2)
const a2 = add('2', '5')

export { }