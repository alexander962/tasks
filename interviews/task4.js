// На вход поступает строка 'aabbffdaacfc'
// нужно вывести сколько букв a, b, c, f, d

const func = (str) => {
  let obj = {};
  str.split('').map((item, index) => {
    obj[item] ? obj[item] += 1 : obj[item] = 1;
  });
  return obj;
}

console.log(func('aabbffdaacfc'));