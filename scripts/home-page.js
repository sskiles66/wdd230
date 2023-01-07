const date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
console.log(year);

document.querySelector("#year").innerHTML = year;


let currentDate = document.lastModified;

document.querySelector("#date").innerHTML = currentDate;