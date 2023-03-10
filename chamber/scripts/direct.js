const url = "https://sskiles66.github.io/wdd230/chamber/data.json";
//const url = "data.json";

async function getBusinessData() {
    const response = await fetch(url);
    console.log(response)
    const data = await response.json();
    console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
    cards();
    document.body.querySelector('#cards').addEventListener('click', cards);
    document.body.querySelector('#list').addEventListener('click', table);

    function cards(){
      displayBusinesses(data.businesses);
    }

    function table(){
      displayTable(data.businesses);
    }
  }
  
  getBusinessData();

  
  const displayBusinesses = (businesses) => {
    const cards = document.querySelector('div.cards'); // select the output container element

    let row = document.querySelectorAll('tr');
    row.forEach((item)=>{
      item.remove();
    });

    let section = document.querySelectorAll('section');
    section.forEach((item)=>{
      item.remove();
    })

  
    businesses.forEach((business) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let address = document.createElement('p');
      let phone = document.createElement('p');
      let website = document.createElement('p');
      let portrait = document.createElement('img');
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = business.name;
      address.textContent = `Address: ${business.address}`;
      phone.textContent = `Phone: ${business.phone}`;
      website.textContent = `Website: ${business.website}`;
      
      
  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', business.imageurl);
      portrait.setAttribute('alt', `Image of ${business.name}`);
      
      
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(portrait);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(website);
      
  
      cards.appendChild(card);
    } // end of forEach loop
  )} // end of function expression


  function displayTable(businesses){

    let row = document.querySelectorAll('tr');
    row.forEach((item)=>{
      item.remove();
    });

    let section = document.querySelectorAll('section');
    section.forEach((item)=>{
      item.remove();
    })

    businesses.forEach((business) => {
      let tr = document.createElement('tr');
      let td_name = document.createElement('td');
      let td_address = document.createElement('td');
      let td_phone = document.createElement('td');
      let td_website = document.createElement('td');

      

      td_name.textContent = business.name;
      td_address.textContent = `Address: ${business.address}`;
      td_phone.textContent = `Phone: ${business.phone}`;
      td_website.textContent = `Website: ${business.website}`;

      tr.appendChild(td_name);

      tr.appendChild(td_address);

      tr.appendChild(td_phone);

      tr.appendChild(td_website);

      document.querySelector('table').appendChild(tr);


    })

  }