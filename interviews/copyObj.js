const deepCopy = (obj, cache = new WeakMap()) => {
  // Примитивы, null, undefined, функции
  if (typeof obj !== 'object' || obj === null) return obj;
  if (cache.has(obj)) return cache.get(obj);

  // Специальные объекты (Date, RegExp и т. д.)
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Map) return new Map(obj);
  if (obj instanceof Set) return new Set(obj);

  // Массивы и объекты
  const copy = Array.isArray(obj) ? [] : {};
  cache.set(obj, copy);

  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy;
};

const obj = {
  a: 1,
  b: [2, { c: 3 }],
  d: new Date(),
  e: /regex/g,
  self: null
};

obj.self = obj; // Циклическая ссылка

const copied = deepCopy(obj);
console.log(copied); // Корректная глубокая копия