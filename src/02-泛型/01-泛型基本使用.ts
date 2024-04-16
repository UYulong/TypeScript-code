const getResult = <T>(value: T): T => {
  return value
}

const res1 = getResult(123)
const res2 = getResult('hello')
const res3 = getResult({ name: '牛马' })
const res4 = getResult(['🐮', '🐎'])

let res11 = getResult(123)
let res22 = getResult('hello')
let res33 = getResult({ name: '牛马' })
let res44 = getResult(['🐮', '🐎'])
