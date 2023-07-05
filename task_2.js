function checkAndPrintType (x) {
  if (typeof x === 'number') {
    console.log('x - число')
  } else if (typeof x === 'string') {
    console.log('x - строка')
  } else if (typeof x === 'boolean') {
    console.log('x - логический тип')
  } else {
    console.log('Тип х не определён')
  }
}

const x1 = 42
const x2 = 'Hello, World!'
const x3 = true
const x4 = null

checkAndPrintType(x1)
checkAndPrintType(x2)
checkAndPrintType(x3)
checkAndPrintType(x4)
