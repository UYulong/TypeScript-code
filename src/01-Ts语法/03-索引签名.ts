interface NameType {
  [key: string]: any
}

const names: string[] = ['niu', 'ma']

const logFn = (list: NameType) => {
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    console.log(element);
  }
}