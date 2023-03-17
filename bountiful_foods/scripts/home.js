const mainnav = document.body.querySelector('nav');

const hamButton = document.body.querySelector('.hamButton');

hamButton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive');
})