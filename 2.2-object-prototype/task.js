'use strict'

let str = 'anna';

String.prototype.isPalindrome = function(str) {
  str = this.toLowerCase().replace(/\s/g,'');
  return str === str.split('').reverse().join(''); 
}



let marks = [];

function getAverageMark(marks) {
  if (marks.length === 0) {
    return 0;
  } else {
      let sum = 0; 
         for (let i = 0; i < marks.length; i++) {
          sum += marks[i];  
         }  

      let average = sum / marks.length; 
      let roundedAverage = Math.round(average);
      return roundedAverage;
    }
    
  }
    
    



function checkBirthday(birthday) {
    
    let date = new Date(birthday);
    let now = Date.now();
    birthday = +date;
    let diff = now - birthday;
    let age = diff / 31536000000;
 
    return age > 18;   
}