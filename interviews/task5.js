// Написать что выведет консоль

function* generatorFunc() {
  yield 1;
  yield 2;
  yield 3;
}

const arrowFunc = (x) => {
  console.log(`Arrow function called with ${x}`);
  return x * 2;
};

function outerFunction() {
  let outerVar = "I'm outside!";

  function innerFunction() {
    console.log(outerVar);
    let innerVar = "I'm inside!";
    return function nestedFunction() {
      console.log(innerVar);
    };
  }

  return innerFunction;
}

const firstCall = outerFunction();
const secondCall = firstCall();
secondCall();

const obj = {
  prop: 42,
  getProp: function() {
    return this.prop;
  }
};

const getProp = obj.getProp;
console.log(getProp());
console.log(obj.getProp());

function a() {
  console.log('a');
  return () => {
    console.log('b');
    arrowFunc(5);
  };
}

const result = a();
result();

const gen = generatorFunc();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);






// ---------------- Ответ --------------





// I'm outside!
// I'm inside!
// undefined
// 42
// a
// b
// Arrow function called with 5
// 1
// 2
// 3
// undefined