type toArray<T> = T extends any ? T[] : never

type s = toArray<string | number>

const ages: s = [1, 2, 3, 4]
const names: s = ['1', '3', '5', '7']