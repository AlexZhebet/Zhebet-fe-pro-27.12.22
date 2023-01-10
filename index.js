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
let subtraction = (`відняти`)
let symbolSubtraction = (`-`)
let multiplication = ('множення')
let symbolMultiplication = (`*`)
let division = (`ділення`)
let symbolDivision = (`/`)

if (resultGap === addition || resultGap === symbolAddition) {
  alert(`${numeric} + ${numeric1} = ${numeric + numeric1}`)
}
if (resultGap === subtraction || resultGap === symbolSubtraction) {
  alert(`${numeric} - ${numeric1} = ${numeric - numeric1}`)
}
if (resultGap === multiplication || resultGap === symbolMultiplication) {
  alert(`${numeric} * ${numeric1} = ${numeric * numeric1}`)
}
if (resultGap === division || resultGap === symbolDivision) {
  alert(`${numeric} / ${numeric1} = ${numeric / numeric1}`)
}
