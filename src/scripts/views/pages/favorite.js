/* eslint-disable operator-linebreak */
import FavoriteResto from '../../data/favorite-resto';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
          <h2 class="favorite_heading">Your Favorite Resto</h2>
          <div class="cards-wrapper" id="cards-wrapper"></div>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteResto.getAllResto();
    const restaurantsContainer = document.querySelector('#cards-wrapper');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML +=
        createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
