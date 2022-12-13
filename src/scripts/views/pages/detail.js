/* eslint-disable import/named */
/* eslint-disable operator-linebreak */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
       <div id="detail-restaurant" class="detail-restaurant"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailRestaurant = await RestaurantSource.detailRestaurant(url.id);
    console.log(detailRestaurant);
    const detailRestaurantContainer =
      document.querySelector('#detail-restaurant');
    detailRestaurantContainer.innerHTML =
      createRestaurantDetailTemplate(detailRestaurant);
  },
};

export default Detail;
