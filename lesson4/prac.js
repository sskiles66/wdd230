const button = document.querySelector(".btn");

//can use functions or arrow notation functions
function show(){
    //button.classList.add('newstyle');
    button.classList.toggle('newstyle');
}


button.addEventListener('click', show);


//Arrow notation
//button.addEventListener('click', () => {
    //button.classList.add('newstyle');
//})



// Hamburger Button JS

const mainnav = document.body.querySelector('.navigation');

const hamButton = document.body.querySelector('.ham');

hamButton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive');
})
