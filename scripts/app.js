
//All menu items
const menu = [
    {
        id: 1,
        title: 'buttermilk pancakes',
        category: 'breakfast',
        price: 15,
        img: './img/img-1.jpg',
        description: `High calories? Yes, but we don't care. They are that good!`
    },
    {
        id: 2,
        title: 'buttermilk pancakes',
        category: 'dinner',
        price: 15,
        img: './img/img-1.jpg',
        description: `High calories? Yes, but we don't care. They are that good!`
    },
    {
        id: 3,
        title: 'buttermilk pancakes',
        category: 'breakfast',
        price: 15,
        img: './img/img-1.jpg',
        description: `High calories? Yes, but we don't care. They are that good!`
    },
    {
        id: 4,
        title: 'buttermilk pancakes',
        category: 'breakfast',
        price: 15,
        img: './img/img-1.jpg',
        description: `High calories? Yes, but we don't care. They are that good!`
    }
];

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded', ()=>{
    displayMenuItems(menu); 
    displayMenuButtons();
});

/*allButtons.forEach( button =>{
    button.addEventListener('click', (event)=>{
        const category = event.currentTarget.dataset.id; //dataset selects any html with data- attribute
        const menuCategory = menu.filter((item)=>{
            if(item.category === category){
                return item;
            }
        });

        if(category === 'all'){
            displayMenuItems(menu);
        } else {
            displayMenuItems(menuCategory);
        }
    });
});*/

function displayMenuItems(menuItem){
    let displayMenu = menuItem.map((item)=>{
        return `<article class="menu-item">
                <img src=${item.img} alt="item one" class="photo" />
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">£${item.price}</h4>
                    </header>
                    
                    <p class="item-text">
                        ${item.description}
                    </p>
                </div>
            </article>`;
    });
    
    displayMenu = displayMenu.join('');
    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons(){
    const categories = menu.reduce( (values, item)=>{
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    }, ['all']);

    const categoryButtons = categories.map(category=>{
        return `
            <button type="button" class="filter-btn" data-id=${category}>${category}</button>
        `;
    }).join('');

    container.innerHTML = categoryButtons;
    const allButtons = [...document.querySelectorAll('.filter-btn')];

    allButtons.forEach( button =>{
    button.addEventListener('click', (event)=>{
        const category = event.currentTarget.dataset.id; //dataset selects any html with data- attribute
        const menuCategory = menu.filter((item)=>{
            if(item.category === category){
                return item;
            }
        });

        if(category === 'all'){
            displayMenuItems(menu);
        } else {
            displayMenuItems(menuCategory);
        }
    });
});
}