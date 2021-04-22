
/*----------Global Variables-------------*/
//Array with all destinations and details about them
const allDestinations = [
    {
        id: 1,
        rating: 4.98,
        reviews: 122,
        name: 'Cabin in Longddand',
        location: 'Bali, Indonesea',
        details: '2 guests, 2beds, 1 bath',
        img: '../img/img-1.jpg',
        category: 'Island'
    },
    {
        id: 2,
        rating: 4.05,
        reviews: 250,
        name: 'The Mykonos Experience',
        location: 'Mykonos, Greece',
        details: '2 guests, 1 suite',
        img: '../img/img-2.jpg',
        category: 'Island'
    },
    {
        id: 3,
        rating: 4.20,
        reviews: 95,
        name: 'Wai Chan District',
        location: 'Hong Kong',
        details: '3 guests, 2beds, 2 bath',
        img: '../img/img-3.jpg',
        category: 'City'
    },
    {
        id: 4,
        rating: 3.80,
        reviews: 205,
        name: 'City Apartment',
        location: 'Prague, Czech Republic',
        details: '1 guest, 1 bed, 1bath',
        img: '../img/img-4.jpg',
        category: 'City',
    },
    {
        id: 5,
        rating: 4.95,
        reviews: 100,
        name: 'Rayek River',
        location: 'Sweden',
        details: '1 man adventure',
        img: '../img/img-5.jpg',
        category: 'Adventure'
    },
]

//Grab the sections we need to added html to
const destinationsTabs = document.querySelector('.locations-content');
const categoriesSection = document.querySelector('.destination-categories');

/*-------------Event Listeners------------*/
window.addEventListener('DOMContentLoaded', ()=>{
    generateUI(allDestinations);
    generateButtons();
});


/*--------------Functions-------------------*/
function generateUI(options){
    /*
        generateUI simply takes in an array of objects. Each object has
        details about the current cell. Each cell represents a destination. Instead
        of statically adding the content with our html we are utilizing js to add dynamically the
        details to our content
    */
    let destinations = options.map( destination =>{
        return `
            <article 
                class="location-item" 
                style="background: linear-gradient(
                                                    180deg,
                                                    rgba(0, 0, 0, 0) 0%,
                                                    rgba(30, 30, 30, 0.5) 99.99%,
                                                    rgba(0, 0, 0, 0.32) 100%), 
                                                    url(${destination.img}) center/cover no-repeat;"
            >
                <div class="rating">
                    <h4>${destination.rating} Stars</h4>
                    <span>(${destination.reviews})</span>
                </div>
                <div class="details">
                    <h6>${destination.name}</h6>
                    <h6>${destination.location}</h6>
                    <h6>${destination.details}</h6>
                </div>
            </article>
        `
    });
    
    destinations = destinations.join('');
    destinationsTabs.innerHTML = destinations;
}

function generateButtons(){
    /*
        Since our filtering buttons are generated dynamically, it means they need to be
        generated after our content has loaded. This alone has it's challenges but we also need to 
        make the filtering adaptable. Essentially each destination belongs to a category. We are filtering through
        all destinations to find each possible category. From there; we create a new filtering button
        for each new category we encounter.
    */

    //Reduce the available unique categories. These get pushed to a ['all'] array
    const availableCategories = allDestinations.reduce((availableButtons, destination)=>{
        if(!availableButtons.includes(destination.category)){
            availableButtons.push(destination.category);
        }
        return availableButtons;
    }, ['all']);

    //From there we add a button for each category to our html
    let categoriesButtons = availableCategories.map( item=>{
        return `
            <button class="btn" type="button" data-id=${item}>${item}</button>
        `;
    });
    categoriesButtons = categoriesButtons.join('');
    categoriesSection.innerHTML = categoriesButtons;

    //At last we add an eventListener to each generated button
    const buttonsInDOM = document.querySelectorAll('.btn');
    buttonsInDOM.forEach( button=>{
        button.addEventListener('click', event=>{
            /*
                Whenever we are clicking a button we are searching for destinations 
                that share the same category. If we click on 'all' then we are displaying
                all destinations
            */
            const filteredOptions = allDestinations.filter( destination=>{
                if(destination.category === event.target.dataset.id){
                    return destination;
                }
            });

            if(event.target.dataset.id === 'all'){
                generateUI(allDestinations);
            } else{
                generateUI(filteredOptions);
            }
            
        });
    });
}