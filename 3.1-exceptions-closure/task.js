'use strict'

function parseCount(value) {
  
    let result = Number.parseInt(value);

      if (isNaN(result) == true) throw new Error("Невалидное значение");

    return result;
}

function validateCount(value) {

    try {
        isNaN(parseCount(value)) == false;
        } catch {
          return new Error("Невалидное значение");     
        }

    return parseCount(value);
}


//Задание 2.

class Triangle {

    constructor(a, b, c) {
      this.a = a
      this.b = b
      this.c = c

      if (((this.a+this.b) < this.c) || ((this.a+this.c) < this.b) || ((this.b+this.c) < this.a)) throw new Error("Треугольник с такими сторонами не существует");
      
}

   
getPerimeter(a, b, c) {

      return  this.x = (this.a + this.b + this.c).toFixed(3);     
}

getArea(a, b, c) {
      
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
          },
            getArea() {
            return "Ошибка! Треугольник не существует";  
          }
        };
      }   
}

