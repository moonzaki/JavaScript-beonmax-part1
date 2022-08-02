'use strict';
let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц,', '');
    while (isNaN(money) || money =='' || money == null) {
        money = +prompt('Ваш бюджет на месяц,', '');
    }
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
}
start();

let days = 30;
let appData = {
    budget : money,
    timeDate : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false,
    chooseExpenses: function(){
        for (let i = 0; i < 2; i++){
            let expense = prompt('Введите обязательную статью расходов в этом месяце', ''), 
                howMuch = prompt('Во сколько обойдется?', '');
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
    },
    perDay : function() {
        appData.moneyPerDay = (appData.budget / days).toFixed();
        alert(`Ежедневный бюджет ${appData.moneyPerDay}`);
    },
    checkSavings : function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?', ''),
                percent = +prompt('Под какой процент?', '');
    
                appData.monthIncome = save/100/12*percent;
                alert(`Доход с Вашего депозита в месяц:  + ${appData.monthIncome}`);
        }
    },
    detectLevel : function() {
        appData.moneyPerDay < 100 ? console.log('Минимальный уровень достатка') 
        : appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ? console.log('Средий уровень достатка') 
        : appData.moneyPerDay > 2000 ? console.log('Высокий уровень достатка') : console.log('Произошла ошибка');        
    },
    chooseOptExpenses : function() {  
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt('Статья необязательных расходов?');
            appData.optionalExpenses[i] = questionOptExpenses;
         }
    },
    chooseIncome : function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислети через запятую)', '');
        while(!isNaN(items) || typeof(items) != 'string' || items == '' || items == null) {
            alert('Вы ввели некорректное значение, пустую строку или отменили ввод. Пожалуйста, повторите ввод.');
            items = prompt('Что принесет дополнительный доход? (Перечислети через запятую)', '');
        }
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еще?', ''));
        appData.income.sort();
        appData.income.forEach((el, i) => alert(`Способы доп. заработка: ${++i} - ${el}`));
    },
    ourSoft : function() {
        let components = [];
        for (let key in appData) {
            if (typeof appData[key] != 'function') {
                components.push(key);
            }
        }
        let textStr = 'Наша программа включает в себя данные:';
        console.log(JSON.stringify(components, null, '\n').replace(/\[/g, textStr).replace(/]|"|,/g, ''));
    }
};

appData.ourSoft();
