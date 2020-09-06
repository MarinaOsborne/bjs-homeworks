'use strict'

function parseCount(value) {
  
    let result = Number.parseInt(value);

      if (isNaN(result)) 
      throw new Error("Невалидное значение");

    return result;
}

function validateCount(value) {

    try {
        return parseCount(value);
        } catch(e) {
          return e;     
        }

    
}


//Задание 2.

class Triangle {

    constructor(a, b, c) {
      this.a = a
      this.b = b
      this.c = c

      if (((a+b) < c) || ((a+c) < b) || ((b+c) < a)) throw new Error("Треугольник с такими сторонами не существует");
      
}

   
getPerimeter() {

      return  (this.a + this.b + this.c).toFixed(3);     
}

getArea() {
      
      this.p =  this.getPerimeter(a, b, c) / 2;

      return this.s = ( Math.floor((Math.sqrt(this.p * (this.p - this.a) * (this.p - this.b) * (this.p - this.c))) * 1000) / 1000 );
      
    }  
}


function getTriangle(a, b, c) {
  
  try {
       return new Triangle(a, b, c);    
        } catch(e) {
          // return {'Периметр ': new Triangle(a, b, c).getPerimeter(a, b, c), 'Площадь ': new Triangle(a, b, c).getArea(a, b, c)};
          return {
            getPerimeter() {
              return "Ошибка! Треугольник не существует";  
            }
          ,
            getArea() {
            return "Ошибка! Треугольник не существует";  
          }
        };
      }   
}

