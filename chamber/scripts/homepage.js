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

document.querySelector("#date2").innerHTML = currentDate;

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


if (day == 1 || day == 2){
    let banner_message = document.createElement("h1");
    banner_message.innerHTML = "Come to the meet and greet on Wednesday at 7:00PM!";
    document.body.querySelector("#headdate").appendChild(banner_message);
}

/*Storage local and session*/

localStorage.setItem('name', 'Stephen Skiles - Permanent');

/*this will just run everytime, most JS is required*/
sessionStorage.setItem('class', 'WDD230 - not Permanent');