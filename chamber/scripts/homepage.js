const mainnav = document.body.querySelector('.navigation');

const hamButton = document.body.querySelector('.hamButton');

hamButton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive');
})


const date = new Date();
let year = date.getFullYear();
let month = date.getMonth();


document.querySelector("#year").innerHTML = year;


let currentDate = document.lastModified;

document.querySelector("#date").innerHTML = currentDate;

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let date1 = new Date(); 




let date_num2 = date1.getDate();

console.log(date_num2);

let month2 = months[date1.getMonth()]





let day = new Date().getDay(); //current day

name_day = days[day];



let headdate = `${name_day}, ${date_num2} ${month2} ${year}`


document.body.querySelector("#headdate").innerHTML = headdate;