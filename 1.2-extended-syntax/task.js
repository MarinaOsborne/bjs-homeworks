'use strict'
function getResult(a, b, c) { 
  let d = b **2 - 4 * a * c;
  let x = [];
  if (d < 0) {
     x = [];
  } else if (d === 0) {
    x = [-b / (2 * a)];
  } else {
    x = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
     }
  return x;
  }

    // return x; [ 0.5811388300841898, -2.58113883008419 ]



let marks = [] 
function getAverageMark(marks) {
  let sum = 0;
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
  let average = Math.floor(sum / marks.length);

 if (marks.length === 0) {
   return 0;
  } else if (marks.length > 5) {
      marks.slice(0, 5);
      alert('Учитываются только первые 5 оценок! Средний балл: ' + average)
    } else {   
      alert('Средний балл: ' + average)
      }
   
}

function askDrink(name,dateOfBirthday){
  let yearOfBirthday = dateOfBirthday.getFullYear();
  let date = new Date();
  let currentYear = date.getFullYear();
  if ((currentYear - yearOfBirthday) > 18 ) {
    alert('Не желаете ли олд-фэшн, ' + name + '?');
  } else {
    alert('Сожалею, ' + name + ', но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!');
  }
    // return result;
}