function checkArrayEquality (arr) {
  if (arr.length === 0) {
    return true
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
      return false
    }
  }
  return true
}

const array1 = [1, 1, 1, 1]
console.log(checkArrayEquality(array1))

const array2 = [1, 2, 1, 1]
console.log(checkArrayEquality(array2))
