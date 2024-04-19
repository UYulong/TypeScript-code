type MapPerson<T> = {
  [KEY in keyof T]: T[KEY]
}

interface IPerson {
  name: string
  age: number
  hobby: string
}

type NewPerson = MapPerson<IPerson>

export { }