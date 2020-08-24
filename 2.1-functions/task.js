let result = {};
function getSolutions( a, b, c ) {
    let D = b **2 - 4 * a * c;
    let roots = [];
    if  (D < 0) {
        return result = {D: D, roots: []};
    } else if (D === 0) {
        let x1 = -b / (2 * a);
        return result = {D: D, roots: [x1]};
    } else {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        return result = {D: D, roots: [x1, x2]};
    }
  }

function showSolutionsMessage( a, b, c ) {
   console.log('Вычисляем корни квадратного уравнения ' + a + 'x²' + ' + ' + b + 'x' + ' + ' + c + '\n' +'Значение дискриминанта: ' + result.D);
  if  (result.D < 0) {
        console.log('Уравнение не имеет вещественных корней');
    } else if (result.D === 0) {
        console.log ('Уравнение имеет один корень X₁ = ' + result.roots);
    } else {
        console.log ('Уравнение имеет два корня X₁ = ' + result.roots[0] + 'X₂ = ' + result.roots[1]);
    }
}


let data = {
  algebra: [2, 4, 5, 2, 3, 4],
  geometry: [2, 4, 5], 
  russian: [3, 3, 4, 5],
  physics: [5, 5],
  music: [2, 2, 6],
  english: [4, 4, 3],
  poetry: [5, 3, 4],
  chemistry: [2],
  french: [4, 4]
  }
  
  function getAverageScore(data) {
  let count = 0;
  for (let key in data) {
      count++
  }
  let averageMark = 0;
  if (marks === []) {
    averageMark = 0
  } else {
  averageMark = (getAverageMark(data.algebra) + getAverageMark(data.geometry) + getAverageMark(data.russian) + getAverageMark(data.physics) + getAverageMark(data.music) + getAverageMark(data.english) + getAverageMark(data.poetry) + getAverageMark(data.chemistry) + getAverageMark(data.french)) / count
  }
  return {
    algebra: getAverageMark(data.algebra), 
    geometry: getAverageMark(data.geometry),   
    russian: getAverageMark(data.russian), 
    physics: getAverageMark(data.physics), 
    music: getAverageMark(data.music), 
    english: getAverageMark(data.english), 
    poetry: getAverageMark(data.poetry), 
    chemistry: getAverageMark(data.chemistry), 
    french: getAverageMark(data.french),
    average: averageMark
    };
  }
  
   let marks = [2, 4, 5];
   function getAverageMark(marks) {
    let sum = 0; 
    for (i = 0; i < marks.length; i++) {
      sum += marks[i];   
    }
    return sum / marks.length;
   }



let secretData = {aaa: 1, bbb: 0};

function getPersonData(secretData) {
return {firstname: getDecodedValue(secretData.aaa), lastname: getDecodedValue(secretData.bbb) }
}

function getDecodedValue(secret) {
  if (secret === 1) {
    return 'Эмильо';
  } else {
    return 'Родриго';
  }
}