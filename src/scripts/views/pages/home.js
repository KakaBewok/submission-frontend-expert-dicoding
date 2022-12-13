/* eslint-disable import/named */
/* eslint-disable operator-linebreak */
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div class="cards-wrapper"></div>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.home();

    const restaurantsContainer = document.querySelector('.cards-wrapper');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML +=
        createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
