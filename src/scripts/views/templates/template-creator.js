/* eslint-disable no-use-before-define */
/* eslint-disable comma-dangle */
/* eslint-disable arrow-body-style */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
     
            <h2 class="detail-title" tabindex="0">${restaurant.name}</h2>
            <img class="detail-poster" src="${CONFIG.BASE_IMAGE_URL_SMALL}/${
  restaurant.pictureId
}"         
              alt="${restaurant.name}" tabindex="0" />
          
            <div class="detail-overview" tabindex="0">
                <h3 tabindex="0">Description</h3>
                <p tabindex="0">${restaurant.description}</p>
            </div>

            <div class="detail-info" tabindex="0">
                <h3 tabindex="0">Informasi:</h3>
                <h4 tabindex="0">Alamat</h4>
                <p tabindex="0">${restaurant.address}, ${restaurant.city}</p>
                <h4 tabindex="0">Rating</h4>
                <p tabindex="0">${restaurant.rating} ⭐</p>
                <h4 tabindex="0">Menu: </h4>
                <h4 tabindex="0">Makanan</h4>
                <ul>
                    ${createRestaurantDetailFoodsTemplate(restaurant)}
                </ul>
                <h4 tabindex="0">Minuman</h4>
                <ul>
                    ${createRestaurantDetailDrinksTemplate(restaurant)}
                </ul>
            </div>

            <div class="detail-info" tabindex="0">
              <h3 tabindex="0">Input Review</h4>
              <form id="form-input" tabindex="0">
                <input name="name" type="text" placeholder="Name" required id="input-name" tabindex="0" /><br />
                <textarea
                  tabindex="0"
                  name="review"
                  id="input-review"
                  cols="30"
                  rows="10"
                  id="form-review"
                  placeholder="Review"
                  required
                ></textarea
                ><br />
                <button type="submit" id="button-review" tabindex="0"> 
                  Button
                </button>
              </form>
            </div>
            
            <div class="detail-info" tabindex="0">
              <h3 tabindex="0">Reviews</h4>
              <ul>
                  ${createRestaurantDetailReviewsTemplate(restaurant)}
              </ul>
            </div>
            
`;

const createRestaurantDetailFoodsTemplate = (restaurant) => {
  const foods = restaurant.menus.foods
    .map(
      (food, index) => `
        <li tabindex="0">${index + 1}. ${food.name}</li>
    `
    )
    .join('\n');
  return foods;
};

const createRestaurantDetailDrinksTemplate = (restaurant) => {
  const drinks = restaurant.menus.drinks
    .map(
      (drink, index) => `
        <li tabindex="0">${index + 1}. ${drink.name}</li>
    `
    )
    .join('\n');
  return drinks;
};

const createRestaurantDetailReviewsTemplate = (restaurant) => {
  const reviews = restaurant.customerReviews
    .map(
      (review) => `
            <li class="name" tabindex="0">${review.name}</li>
            <li class="review" tabindex="0">"${review.review}"</li>
            <li class="date" tabindex="0">${review.date}</li>
            <br/>
            <hr/>
            <br/>
        `
    )
    .join('\n');
  return reviews;
};

const createRestaurantItemTemplate = (restaurant) => `
        <div class="card">
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
                    <a href="/#/detail/${restaurant.id}" class="resto-name">
                        ${restaurant.name}
                    <a href="/#/detail/${restaurant.id}">
                </div>
               
            </div>
        </div>
`;

const createLikeButtonTemplate = () => `
            <button aria-label="like this movie" id="likeButton" class="like">
                <i class="fa fa-heart-o" aria-hidden="true" tabindex="0"></i>
            </button>
`;

const createLikedButtonTemplate = () => `
            <button aria-label="unlike this movie" id="likeButton" class="like">
                <i class="fa fa-heart" aria-hidden="true" tabindex="0"></i>
            </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createRestaurantDetailFoodsTemplate,
  createRestaurantDetailDrinksTemplate,
  createRestaurantDetailReviewsTemplate,
};
