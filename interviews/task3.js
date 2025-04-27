// На вход функции поступает любое колличество аргументов и она должна вывести
// сколько строк, чисел и так далее

let func = (...args) => {
  const obj = {}
  args.map((item, index) => {
    obj[typeof item] ? obj[typeof item] += 1 : obj[typeof item] = 1;
  });
  return obj;
}

console.log(func(11, 22, 'erf', null, 13, 'ew'));