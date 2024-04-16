interface Person<T> {
  name: T
  hobby: T
}

const p: Person<string> = {
  name: '牛马',
  hobby: '搞钱',
}