// Задача 2
// У нас есть несколько функций, которые выполняются с использованием console.log, setTimeout и Promise. Нужно понять порядок их вызова. Рассмотрим следующий код:

console.log('A');

setTimeout(() => {
  console.log('B');
}, 1000);

Promise.resolve().then(() => {
  console.log('C');
  setTimeout(() => {
    console.log('H');
    Promise.resolve().then(() => {
      console.log('J');
    });
  }, 500);
});

console.log('D');

setTimeout(() => {
  console.log('E');
}, 0);

Promise.resolve().then(() => {
  console.log('F');
  Promise.resolve().then(() => {
    console.log('I');
  });
});

setTimeout(() => {
  console.log('K');
  Promise.resolve().then(() => {
    console.log('L');
  });
}, 200);

console.log('G');






// Объяснение:
//   Сначала выполняются все синхронные операции.
//   Затем микрозадачи из очереди микрозадач (например, .then у Promise).
// И только потом макрозадачи из очереди макрозадач (например, setTimeout).
//   Последовательность выполнения:
//   console.log('A'); - синхронная операция
// console.log('D'); - синхронная операция
// console.log('G'); - синхронная операция
// Выполняются все микрозадачи (обработчики .then):
// console.log('C');
// console.log('F');
// console.log('I');
// Выполняются все макрозадачи (setTimeout):
// console.log('E'); - после 0 мс
// console.log('K'); - после 200 мс
// Внутри console.log('K'); выполняется микрозадача:
//   console.log('L');
// console.log('H'); - после 500 мс
// Внутри console.log('H'); выполняется микрозадача:
//   console.log('J');
// console.log('B'); - после 1000 мс
// Итак, итоговый порядок вывода: A, D, G, C, F, I, E, K, L, H, J, B.
