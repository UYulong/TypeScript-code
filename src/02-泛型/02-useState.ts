const useState = <T>(initialVal: T): [T, (newVal: T) => void] => {
  let value = initialVal

  const setVal = (newVal: T): void => {
    value = newVal
  }

  return [value, setVal]
}

const [count, setCount] = useState(0)
const [msg, setMsg] = useState('hello')
const [list, setList] = useState<any[]>([])