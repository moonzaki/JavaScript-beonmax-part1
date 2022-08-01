'use strict';
let money, time;
let days = 30;

function start(){
    money = +prompt('Ваш бюджет на месяц,');
    while(isNaN(money) || money == '' || null) {
        money = +prompt('Ваш бюджет на месяц,');
    }
    time = prompt('Введите дату в формате YYYY-MM-DD');
}

start();

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
        let expense = prompt('Введите обязательную статью расходов в этом месяце'); 
        while (!isNaN(expense)){
            expense = prompt('Введите обязательную статью расходов в этом месяце'); 
        }        
        let howMuch = prompt('Во сколько обойдется?');
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

function chooseOptExpenses(){
    for (let i = 1; i < 4; i++) {
        let optionalExpens = prompt('Статья необязательных расходов?');
        if (typeof(optionalExpens) === 'string' && optionalExpens != '' 
            && optionalExpens.length < 50) {
                appData.optionalExpenses[i] = optionalExpens;
        } 
       
    }
} 

chooseOptExpenses();

function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / days).toFixed();
    alert(`Ежедневный бюджет: ${appData.moneyPerDay}`);
}

detectDayBudget();

function detectLevel(){
    appData.moneyPerDay < 100 ? console.log('Минимальный уровень достатка') 
    : appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ? console.log('Средий уровень достатка') 
    : appData.moneyPerDay > 2000 ? console.log('Высокий уровень достатка') : console.log('Произошла ошибка');
}

detectLevel();

function checkSavings(){
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений,'),
            percent = +prompt('Под какой процент?');

        appData.monthIncome = save / 100 / 12 * percent;
        alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`);
    }
}