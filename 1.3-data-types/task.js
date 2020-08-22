'use strict'
let percent = 0;
let contribution = 0;
let amount = 0;
let date = 0;

function calculateTotalMortgage(percent, contribution, amount, date) {
    
   if (isNaN(percent) === true) {
    return 'Параметр Процентная ставка содержит неправильное значение'
    } else if (isNaN(contribution) === true) {
        return 'Параметр Начальный взнос содержит неправильное значение'
    } else if (isNaN(amount) === true) {
        return 'Параметр Общая стоимость содержит неправильное значение'
    } else {
   let mortgageBody = (parseFloat(amount) - parseFloat(contribution));
   let monthLeft = Math.floor((new Date("08/22/2021") - new Date())/ (1000 * 3600 * 24)/29);
   let p = parseFloat(percent) / 1200;
   let monthlyPayment = mortgageBody * (p + p /(Math.pow((1 + p), monthLeft) - 1));
   let totalAmount = monthLeft * monthlyPayment;
   return +totalAmount.toFixed(2);
   }
   
}

function getGreeting(name) {
    if (name === "" || name === null || name === undefined) {
        return 'Привет, мир! Меня зовут Аноним.'
        } else {
            return 'Привет, мир! Меня зовут ' + name + '.'
        }
    // код для задачи №2 писать здесь
    // return greeting;
}