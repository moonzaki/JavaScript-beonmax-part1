'use strict';
let money = prompt('Ваш бюджет на месяц,'),
    time = prompt('Введите дату в формате YYYY-MM-DD');
let days = 30;
let appData = {
    budget : money,
    timeDate : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};
for (let i = 0; i < 2; i++){
    let expense = prompt('Введите обязательную статью расходов в этом месяце'); 
    let howMuch = prompt('Во сколько обойдется?');
    appData.expenses[`${expense}`] = howMuch;
}

alert(appData.budget / days);

console.log(appData);
