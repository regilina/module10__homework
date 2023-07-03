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

function checkAndPrintType(x) {
  if (typeof x === 'number') {
    console.log('x - число');
  } else if (typeof x === 'string') {
    console.log('x - строка');
  } else if (typeof x === 'boolean') {
    console.log('x - логический тип');
  } else {
    console.log('Тип х не определён');
  }
}

var x1 =  42;
var x2 = 'Hello, World!';
var x3 = true;
var x4 = null;

checkAndPrintType(x1);
checkAndPrintType(x2);
checkAndPrintType(x3);
checkAndPrintType(x4);