'use strict'
class PrintEditionItem {

  constructor(name, releaseDate, pagesCount) {
    this.name = name
    this.releaseDate = releaseDate
    this.pagesCount = pagesCount
    this.state = 100
    this.type = null
  }

  fix() {
    return this.state = this.state * 1.5
  }

  get state() {
      return this._state;
    }

  set state(state) {
    if (state < 0) {
      this._state = 0
  } else if (state > 100) {
      this._state = 100
    } else {
      this._state = state
    }  
  }  
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount)   
    this.type = 'magazine'  
    } 
  }

class Book extends PrintEditionItem {     
      constructor(author, name, releaseDate, pagesCount) {    
      super(author, name, releaseDate, pagesCount) 
      this.type = 'book'
      this.author = author    
  } 
}
class NovelBook extends Book {
      constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount)   
      this.type = 'novel'  
  } 
} 
  
class FantasticBook extends Book {
      constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount)   
      this.type = 'fantastic'  
  } 
}    
  class DetectiveBook extends Book {
      constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount)   
      this.type = 'detective'  
  } 
}    



//Задание 2.

class Library {

  constructor(name) {
    this.name = name
    this.books = []
  }

addBook(book) {

  if (book.state > 30) {
    this.books.push(book)
   }      
}

findBookBy(type, value) {
  
  for (let i = 0; i < this.books.length; i++) {
     
    for (let key in this.books[i]) {
      
      if (this.books[i][key] == value) {
        return this.books[i]
      }  
    } 
  }
return null
}   
  
giveBookByName(bookName) {
  
  for (let i = 0; i < this.books.length; i++) {
     
    for (let key in this.books[i]) {
      
      if (this.books[i][key]  == bookName) {
        let removed = this.books.splice(i, 1)[0]
        return removed
      }  
    } 
  }
return null
}
  
}

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));




//Задание 3.

class StudentLog {

  constructor(name, releaseDate, pagesCount) {
    this.name = name
  }

}


  const log = new StudentLog('Олег Никифоров');
