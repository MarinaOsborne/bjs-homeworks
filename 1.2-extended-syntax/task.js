'use strict'
function getResult(a, b, c) { 
  let d = b **2 - 4 * a * c;
  let x = [];
  if (d === 0) {
    x = [-b / (2 * a)];
  } else if (d > 0) {
    x = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
     }
  return x;
  }

    // return x; [ 0.5811388300841898, -2.58113883008419 ]



let marks = [] 
function getAverageMark(marks) {
  if (marks.length === 0) {
    return 0;
  } else {
     let newArr = marks.slice(0, 5);     
     let sum = 0;
     for (let i = 0; i < newArr.length; i++) {
      sum += newArr[i]
     }
     let result = Math.floor(sum / newArr.length);
     return result;
    }
}

function askDrink(name,dateOfBirthday){
  let yearOfBirthday = dateOfBirthday.getFullYear();
  let date = new Date();
  if ((date.getFullYear() - yearOfBirthday) > 18 ) {
    return 'Не желаете ли олд-фэшн, ' + name + '?';
  } else {
    return 'Сожалею, ' + name + ', но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!';
  }
    // return result;
}