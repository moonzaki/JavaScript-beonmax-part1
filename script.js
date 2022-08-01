'use strict';
let money = +prompt('Ваш бюджет на месяц,'),
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
    let expense = prompt('Введите обязательную статью расходов в этом месяце'), 
        howMuch = prompt('Во сколько обойдется?');
    let checkTypeExpense = typeof(expense) != null,
        checkTypHowMuch = typeof(howMuch) != null,
        ckeckEmptyExpense = expense != '',
        checkEmptyHowMuch = howMuch != '';
    if (typeof(expense) === 'string' && checkTypeExpense && checkTypHowMuch
        && ckeckEmptyExpense && checkEmptyHowMuch && expense.length < 50) {
        appData.expenses[expense] = howMuch;
    } else {
        i--;
    }
}

/* WHILE CYCLE
let i = 0;
while(i < 2) {
    let expense = prompt('Введите обязательную статью расходов в этом месяце'), 
    howMuch = prompt('Во сколько обойдется?');
    let checkTypeExpense = typeof(expense) != null,
    checkTypHowMuch = typeof(howMuch) != null,
    ckeckEmptyExpense = expense != '',
    checkEmptyHowMuch = howMuch != '';
    if (typeof(expense) === 'string' && checkTypeExpense && checkTypHowMuch
        && ckeckEmptyExpense && checkEmptyHowMuch && expense.length < 50) {
        appData.expenses[expense] = howMuch;
    } else {
        i--;
    }
}
*/

/*DO...WHILE CYCLE
let i =0;
do {
        let expense = prompt('Введите обязательную статью расходов в этом месяце'), 
    howMuch = prompt('Во сколько обойдется?');
    let checkTypeExpense = typeof(expense) != null,
    checkTypHowMuch = typeof(howMuch) != null,
    ckeckEmptyExpense = expense != '',
    checkEmptyHowMuch = howMuch != '';
    if (typeof(expense) === 'string' && checkTypeExpense && checkTypHowMuch
        && ckeckEmptyExpense && checkEmptyHowMuch && expense.length < 50) {
        appData.expenses[expense] = howMuch;
    } else {
        i--;
    }
}
while(i < 2)
*/

appData.moneyPerDay = appData.budget / days;

alert(`Ежедневный бюджет ${appData.moneyPerDay}`);

appData.moneyPerDay < 100 ? console.log('Минимальный уровень достатка') 
: appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ? console.log('Средий уровень достатка') 
: appData.moneyPerDay > 2000 ? console.log('Высокий уровень достатка') : console.log('Произошла ошибка');
