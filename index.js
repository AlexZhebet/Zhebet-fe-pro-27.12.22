
let age = +prompt(`Вкажіть Ваш рік народження`)
let city = prompt(`В якому місті Ви проживаєте?`)
let sport = prompt(`Якому вид спорту надаєте перевагу?`)

let quantityAge = 2023 - age
if (age) {
    alert(`Вам ${quantityAge} років`)
} else {
    alert(`Шкода, що Ви не захотіли ввести рік народження`)
}


if (city === "Київ" || city === "київ") {
    alert(`Ти живеш у столиці України`)
} else if (city === "Вашингтон" || city === "вашингтон") {
    alert(`Ти живеш у столиці США`)
} else if (city === "Лондон" || city === "лондон") {
    alert(`Ти живеш у столиці Англії`)
} else if (city) {
    alert(`ти живеш у місті ${city}`)
} else {
    alert(`Шкода, що Ви не захотіли ввести своє улюблене місто`)
}


if (sport == `футбол` || sport == `футбол`) {
    alert(`Круто! Хочеш стати Шевченко?`)
} else if (sport === "Бокс" || sport === "бокс") {
    alert(`Круто! Хочеш стати Усик?`)
} else if (sport === "Баскетбол" || sport === "баскетбол") {
    alert(`Круто! Хочеш стати Лень?`)
} else if (sport) {
    alert(`Ваш улюблений вид спорту ${sport}`)
} else {
    alert(`Шкода, що Ви не захотіли ввести свій улюблений вид спорту`)
}

let breedingYears = age ? `тобі ${numberAge}` : `Ти не вказав свій вік`
let breedingCity = city ? `Ти живеш в ${city}` : 'Ти не вказав місто в якому ти живеш'
let breedingSport = sport ? `Твій улюблений спорт ${sport}` : 'Ти не вказав свій улюблений спорт'

alert(`${breedingYears}, ${breedingCity}, ${breedingSport}`);
