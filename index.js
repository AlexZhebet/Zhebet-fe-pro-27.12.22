let numeric = +prompt(`Введіть перше число`)
while (numeric == "" || Number.isNaN(numeric)) {
  alert(`Введіть число`)
  numeric = +prompt(`Введіть перше число`)
}

let result = prompt(`Ви хочете додати, відняти, множення, ділення, -,+,*,/ ? Введіть один з варіантів`)
let resultGap = result.trim()
while (resultGap == "" || resultGap == Number(resultGap)) {
  alert(`Ви ввели число, а потрібно -,+,*,/ або додати, відняти, множення, ділення`)
  resultGap = prompt(`Ви хочете додати, відняти, множення, ділення, -,+,*,/ ? Введіть один з варіантів`)
}

let numeric1 = +prompt(`Введіть друге число`)
while (numeric1 == "" || Number.isNaN(numeric1)) {
  alert(`Введіть число`)
  numeric1 = +prompt(`Введіть друге число`)
}

let addition = (`додати`)
let symbolAddition = (`+`)
let resultAddition = numeric + numeric1
let subtraction = (`відняти`)
let symbolSubtraction = (`-`)
let resultSubtraction = numeric - numeric1
let multiplication = ('множення')
let symbolMultiplication = (`*`)
let resultMultiplication = numeric * numeric1
let division = (`ділення`)
let symbolDivision = (`/`)
let resultDivision = numeric / numeric1

if (resultGap === addition || resultGap === symbolAddition) {
  alert(resultAddition)
}
if (resultGap === subtraction || resultGap === symbolSubtraction) {
  alert(resultSubtraction)
}
if (resultGap === multiplication || resultGap === symbolMultiplication) {
  alert(resultMultiplication)
}
if (resultGap === division || resultGap === symbolDivision) {
  alert(resultDivision)
}
