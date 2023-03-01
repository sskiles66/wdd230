const url = "data.json";

async function getProphetData() {
    const response = await fetch(url);
    console.log(response)
    const data = await response.json();
    console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
    displayProphets(data.prophets);
  }
  
  getProphetData();

  
  const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let dob = document.createElement('p');
      let pob = document.createElement('p');
      let portrait = document.createElement('img');
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${prophet.name} ${prophet.lastname}`;
      dob.textContent = `Date of birth: ${prophet.birthdate}`;
      pob.textContent = `Place of birth: ${prophet.birthplace}`;
      
      
  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
      
      
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(dob);
      card.appendChild(pob);
      card.appendChild(portrait);
  
      cards.appendChild(card);
    } // end of forEach loop
  )} // end of function expression