'use strict';

let startBtn = document.getElementById('start'),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


	expensesItem = document.getElementsByClassName('expenses-item'),
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),
    buttons = document.querySelectorAll('button');

    let money, time, checkerBtnStart = false; 
    

    startBtn.onclick = () => checkerBtnStart = true;
    if (checkerBtnStart === false) {
        for (let i = 0; i < buttons.length - 1; i++) {
            buttons[i].setAttribute('disabled', true);
            } 
    }

    startBtn.addEventListener('click', () => {
        for (let i = 0; i < buttons.length - 1; i++) {
            buttons[i].removeAttribute('disabled');
            } 
        money = +prompt('Ваш бюджет на месяц,', '');
        while (isNaN(money) || money =='' || money == null) {
            money = +prompt('Ваш бюджет на месяц,', '');
        }
        time = prompt('Введите дату в формате YYYY-MM-DD', '');
        appData.budget = money;
        appData.timeDate = time;
        budgetValue.textContent = money.toFixed();
        yearValue.value = new Date(Date.parse(time)).getFullYear(); 
        monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
        dayValue.value = new Date(Date.parse(time)).getDate();
    });


    expensesBtn.addEventListener('click', () => {
        let sum = 0;
        for (let i = 0; i < expensesItem.length; i++){
            let expense = expensesItem[i].value, 
                howMuch = expensesItem[++i].value;
            let checkTypeExpense = typeof(expense) != null,
                checkTypHowMuch = typeof(howMuch) != null,
                ckeckEmptyExpense = expense != '',
                checkEmptyHowMuch = howMuch != '';
            if (typeof(expense) === 'string' && checkTypeExpense && checkTypHowMuch
                && ckeckEmptyExpense && checkEmptyHowMuch && expense.length < 50) {
                appData.expenses[expense] = howMuch;
                sum += +howMuch;
            } else {
                i--;
            }
        }
        expensesValue.textContent = sum;
    });

    optionalExpensesBtn.addEventListener('click', () => {
        for (let i = 0; i <= optionalExpensesItem.length; i++) {
            let questionOptExpenses = optionalExpensesItem[i].value;
            appData.optionalExpenses[i] = questionOptExpenses;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';  
         }
    });

    countBtn.addEventListener('click', () => {
        if (appData.budget !== undefined) {
            if (+expensesValue.innerHTML > 0 ) {
                appData.moneyPerDay = ((appData.budget - +expensesValue.innerHTML)  / 30).toFixed();
                dayBudgetValue.textContent = appData.moneyPerDay;
                if (appData.moneyPerDay < 100) {
                    levelValue.textContent = 'Минимальный уровень достатка';
                } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                    levelValue.textContent = 'Средий уровень достатка';
                } else if (appData.moneyPerDay > 2000) {
                    levelValue.textContent = 'Высокий уровень достатка';
                } else {
                    levelValue.textContent  = 'Произошла ошибка';
                }
            } else {
                dayBudgetValue.textContent = 'Заполните обязательные расходы';
            }
    
        } else {
            dayBudgetValue.textContent = 'Произошла ошибка';
        }
    });

    
    incomeItem.addEventListener('input', () => {
        let items = incomeItem.value;
        appData.income = items.split(', ');
        incomeValue.textContent = appData.income;
    });
    
    checkSavings.addEventListener('click', () => {
        if (appData.savings == true) {
            appData.savings = false;
        } else {
            appData.savings = true;
        }
    });

    sumValue.addEventListener('input', () => {
        if (appData.savings == true) {
            let sum = +sumValue.value, 
                percent = +percentValue.value;

                appData.monthIncome = sum/100/12*percent;
                appData.monthIncome = sum/100*percent;

                monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
                yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    });

    percentValue.addEventListener('input', () => {
        if (appData.savings == true) {
            let sum = +sumValue.value, 
                percent = +percentValue.value;

                appData.monthIncome = sum/100/12*percent;
                appData.yearIncome = sum/100*percent;

                monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
                yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    });

    let appData = {
        budget : money,
        timeDate : time,
        expenses : {},
        optionalExpenses : {},
        income : [],
        savings : false
    };
    
