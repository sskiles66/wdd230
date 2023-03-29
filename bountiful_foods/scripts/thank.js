let num = localStorage.getItem('numDrinks');

let convertedNum = Number(num);

localStorage.setItem('numDrinks', convertedNum + 1);

