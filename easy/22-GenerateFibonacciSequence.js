// Write a generator function that returns a generator object which yields the fibonacci sequence.
//
//   The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.
//
// The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.
//
// Example 1:
//
// Input: callCount = 5
// Output: [0,1,1,2,3]
// Explanation:
//   const gen = fibGenerator();
// gen.next().value; // 0
// gen.next().value; // 1
// gen.next().value; // 1
// gen.next().value; // 2
// gen.next().value; // 3
// Example 2:
//
// Input: callCount = 0
// Output: []
// Explanation: gen.next() is never called so nothing is outputted

const fibGenerator = function*() {
  let prev = 0;
  let current = 1;
  let next = 1;
  while (true) {
    yield prev;
    next = current + prev;
    prev = current;
    current = next;
  }
};

const gen = fibGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);