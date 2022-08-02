'use strict';
let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц,');
    while (isNaN(money) || money =='' || money == null) {
        money = +prompt('Ваш бюджет на месяц,');
    }
    time = prompt('Введите дату в формате YYYY-MM-DD');
}
start();
let days = 30;

let appData = {
    budget : money,
    timeDate : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

function chooseExpenses(){
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
}
chooseExpenses();

function perDay() {
    appData.moneyPerDay = (appData.budget / days).toFixed();
    alert(`Ежедневный бюджет ${appData.moneyPerDay}`);
}
perDay();

appData.moneyPerDay < 100 ? console.log('Минимальный уровень достатка') 
: appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ? console.log('Средий уровень достатка') 
: appData.moneyPerDay > 2000 ? console.log('Высокий уровень достатка') : console.log('Произошла ошибка');

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент?');

            appData.monthIncome = save/100/12*percent;
            alert(`Доход с Вашего депозита в месяц:  + ${appData.monthIncome}`);
    }
}
checkSavings();

function chooseOptExpenses() {  

    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
}
chooseOptExpenses();