interface ILength {
  length: number
}

const getLen = <T extends ILength>(value: T) => {
  return value
}

const r1 = getLen('1234')
const r2 = getLen(['1', '2'])
const r3 = getLen({ length: 80 })
// const r4 = getLen(4545) // 入参必须符合 ILength 规范