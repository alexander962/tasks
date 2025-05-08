// Задача 4 (задача фибаначи)

function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Пример использования:
console.log(fibonacciRecursive(10)); // 55