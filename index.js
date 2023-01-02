const userName = prompt('Як Вас звати?')
const userAge = prompt('Скільки Вам років?')
const userSmoge = confirm('Ви курите?')

if (userAge > 18) {
    if (userSmoges) {
        console.log(`Привіт ${userName}, що ж, ти сам обрав цей шлях...`)
    }
    else {
        console.log(`Привіт ${userName}, чудово!Ти мабуть ще й спортом займаєшся!`);
    }
} else if (userAge < 18) {
    if (userSmoges) {
        console.log(`Привіт ${userName}! А батьки знають про це?`);
    }
    else {
        console.log(`Привіт ${userName}! Правильно, зараз головне добре вчитися!`);
    }
}