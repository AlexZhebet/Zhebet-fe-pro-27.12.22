const userName = prompt('Як Вас звати?')
const userAge = prompt('Скільки Вам років?')
const userSmoge = confirm('Ви курите?')

if (userAge > 18) {
    if (userSmoge) {
        alert(`Привіт ${userName}, що ж, ти сам обрав цей шлях...`)
        console.log(`Привіт ${userName}, що ж, ти сам обрав цей шлях...`)
    }
    else {
        alert(`Привіт ${userName}, чудово!Ти мабуть ще й спортом займаєшся!`)
        console.log(`Привіт ${userName}, чудово!Ти мабуть ще й спортом займаєшся!`);
    }
} else if (userAge < 18) {
    if (userSmoge) {
        alert(`Привіт ${userName}! А батьки знають про це?`)
        console.log(`Привіт ${userName}! А батьки знають про це?`);
    }
    else {
        alert(`Привіт ${userName}! Правильно, зараз головне добре вчитися!`)
        console.log(`Привіт ${userName}! Правильно, зараз головне добре вчитися!`);
    }
}