if (!localStorage.getItem('lastVisit')){
    localStorage.setItem('lastVisit', Date.now());
    document.body.querySelector("#days").innerHTML = "Welcome!";

}else{
    let currentDate = Date.now();
    let lastDate = Number(window.localStorage.getItem("lastVisit"));
    let diff = (currentDate - lastDate) / 1000 / 60 / 60 / 24;
    document.body.querySelector("#diff").innerHTML = Math.floor(diff);
    lastDate = currentDate;
    localStorage.setItem('lastVisit', lastDate);


}

const images = document.body.querySelectorAll('[data-src');    //Body or no body?

const options = {threshold: .5,
                rootMargin: '0px 0px 100px 0px'};

function preloadImage(img){
  const source = img.getAttribute('data-src');
  if(!source){
    return;
  }
  
  img.src = source;

  
}

const io = new IntersectionObserver (
    (entries) => {
        entries.forEach(entry => {
          if(!entry.isIntersecting){
            return;
          }else{
            preloadImage(entry.target);
            io.unobserve(entry.target);
          }
          
        })
        
        
    }, options
    

);

images.forEach(image => {
  io.observe(image);
})

/*let numVisits = Number(window.localStorage.getItem("visits-ls")) + 1; // Using the Number() function ensures that if the storage item does not exist, it will be converted into a zero (0) which helps on the if block condition.

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	document.body.querySelector("#diff").textContent = numVisits;
} else {
	document.body.querySelector("#diff").textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
// show todays date demonstration
   //todayDisplay.textContent = Date.now();
//84600000 equals the number of miliseconds in one day.*/
