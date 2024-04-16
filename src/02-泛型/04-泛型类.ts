class Point<T> {
  constructor(public x: T, public y: T) {
    this.x = x
    this.y = y
  }
}

const p1 = new Point(10, 20)
const p2 = new Point<string>('10', '20')
const p3: Point<number> = new Point(11, 22)