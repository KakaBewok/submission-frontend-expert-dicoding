import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
     
            <h2 class="detail-title">${restaurant.name}</h2>
            <img class="detail-poster" src="${CONFIG.BASE_IMAGE_URL_SMALL}/${restaurant.pictureId}" alt="${restaurant.name}" />
          
        <div class="detail-info">
            <h3>Informasi:</h3>
            <h4>Alamat</h4>
            <p>${restaurant.address}, ${restaurant.city}</p>
            <h4>Menu</h4>
            <p>1. ${restaurant.menus.foods[0].name}</p>
            <p>2. ${restaurant.menus.foods[1].name}</p>
            <p>3. ${restaurant.menus.drinks[0].name}</p>
            <p>4. ${restaurant.menus.drinks[1].name}</p>
            <h4>Rating</h4>
            <p>${restaurant.rating} ⭐</p><br/>
            <h3>Customer Reviews</h3>
            <p class="name">- ${restaurant.customerReviews[0].name} -</p>
            <p class="review">"${restaurant.customerReviews[0].review}"</p>
            <p class="date">${restaurant.customerReviews[0].date}</p>
            <br/>
            
        </div>
        <div class="detail-overview">
        <h3>Description</h3>
        <p>${restaurant.description}</p>
            
        </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
        <div tabindex="0" class="card">
            <a href="/#/detail/${restaurant.id}">
            <img
                tabindex="0"
                src="${CONFIG.BASE_IMAGE_URL_MEDIUM}/${restaurant.pictureId}"
                alt="${restaurant.name}"
            />
            </a>
            <div class="card-body">
                <div class="card-city-wrapper">
                    <div tabindex="0" class="card-city">${restaurant.city}</div>
                </div>
                <div tabindex="0" class="card-rating">${restaurant.rating} ⭐</div>
                <div tabindex="0" class="card-name">
                    <a href="/#/detail/${restaurant.id}">
                        ${restaurant.name}
                    <a href="/#/detail/${restaurant.id}">
                </div>
               
            </div>
        </div>
`;

export { createRestaurantDetailTemplate, createRestaurantItemTemplate };
