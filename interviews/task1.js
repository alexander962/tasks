// Задачи с собеседований:

// Задача 1

// Давайте рассмотрим задачу с функциями в объекте, где есть как обычные функции, так и стрелочные функции.
// Задача будет включать в себя различие в контексте (this) и различие в поведении при использовании стрелочных и обычных функций.

const obj = {
  name: 'Alice',
  regularFunction: function() {
    return this.name;
  },
  arrowFunction: () => {
    return this.name;
  },
  innerRegularFunction: function() {
    return function() {
      return this.name;
    };
  },
  innerArrowFunction: function() {
    return () => {
      return this.name;
    };
  }
};

console.log(obj.regularFunction());            // Что вернет?
console.log(obj.arrowFunction());              // Что вернет?
console.log(obj.innerRegularFunction()());     // Что вернет?
console.log(obj.innerArrowFunction()());       // Что вернет?

// Решение и пояснение




obj.regularFunction()
// Пояснение: regularFunction - это обычная функция, и когда она вызывается через obj.regularFunction(), this указывает на obj. Поэтому this.name вернет 'Alice'.
//   Результат: 'Alice'

obj.arrowFunction()

// Пояснение: arrowFunction - это стрелочная функция, и стрелочные функции не имеют собственного контекста this. Внутри стрелочной функции this берется из внешнего контекста, который в данном случае является глобальным объектом (в браузере это window). Если в глобальном контексте нет переменной name, результат будет undefined.
//   Результат: undefined


obj.innerRegularFunction()()

// Пояснение: innerRegularFunction возвращает обычную функцию. Когда эта возвращенная функция вызывается как obj.innerRegularFunction()(), она вызывается в глобальном контексте, где this указывает на глобальный объект. В глобальном контексте this.name будет undefined.
//   Результат: undefined

obj.innerArrowFunction()()

// Пояснение: innerArrowFunction возвращает стрелочную функцию. Стрелочная функция, возвращаемая innerArrowFunction, использует контекст this функции innerArrowFunction, который указывает на obj. Поэтому this.name будет 'Alice'.
//   Результат: 'Alice'

// Итог
const obj = {
  name: 'Alice',
  regularFunction: function() {
    return this.name;
  },
  arrowFunction: () => {
    return this.name;
  },
  innerRegularFunction: function() {
    return function() {
      return this.name;
    };
  },
  innerArrowFunction: function() {
    return () => {
      return this.name;
    };
  }
};

console.log(obj.regularFunction());            // 'Alice'
console.log(obj.arrowFunction());              // undefined
console.log(obj.innerRegularFunction()());     // undefined
console.log(obj.innerArrowFunction()());       // 'Alice'