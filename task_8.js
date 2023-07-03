const myMap = new Map();
myMap.set('ключ1', 'значение1');
myMap.set('ключ2', 'значение2');
myMap.set('ключ3', 'значение3');

for (let [key, value] of myMap) {
  console.log(`Ключ — ${key}, значение — ${value}`);
}

