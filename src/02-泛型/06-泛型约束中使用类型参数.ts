interface infoType {
  name: string
  age: number
}

const info: infoType = {
  name: 'niuma',
  age: 12
}

const getValue = <O, k extends keyof O>(object: O, key: k) => {
  return object[key]
}

const myName = getValue(info, 'name')
const myAge = getValue(info, 'age')
// const myHeight = getValue(info, 'height') // height 不在info中，所以无法获取