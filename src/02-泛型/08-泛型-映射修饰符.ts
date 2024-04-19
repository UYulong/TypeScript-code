// 类型映射，通过 - 符号，去除原类型中 readonly 和 ？修饰符
type MapPerson<T> = {
  -readonly [KEY in keyof T]-?: T[KEY]
}

interface IPerson {
  name: string
  readonly age: number
  hobby?: string
}

type NewPerson = MapPerson<IPerson>

export { }