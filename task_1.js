const userInput = prompt('Введите значение:');
const numberValue = +userInput;

if (typeof numberValue === 'number' && !isNaN(numberValue)) {
  if (numberValue % 2 === 0) {
    console.log('Введенное число является четным.');
  } else {
    console.log('Введенное число является нечетным.');
  }
} else {
  console.log('Упс, кажется вы ошиблись.');
}

