const square = require('.././square.js')

it('has coords 1,1 for a1', () => {
  const a1 = new Square('a1');
  expect(a1.x).toBe(1)
  expect(a1.y).toBe(1)
});

it('has coords 5,2 for e2', () => {
  const e2 = new Square('e2');
  expect(e2.x).toBe(5)
  expect(e2.y).toBe(2)
});

it('has coords 2,7 for b7', () => {
  const b7 = new Square('b7');
  expect(b7.x).toBe(2)
  expect(b7.y).toBe(7)
});

it('starts unfilled', () => {
  const a1 = new Square('a1');
  expect(a1.filled).toBe(false)
});

it('starts changes to filled=true when method called', () => {
  const a1 = new Square('a1');
  a1.fillSquare()
  expect(a1.filled).toBe(true)
});
