/* eslint-disable import/named */
/* eslint-disable operator-linebreak */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
       <div id="detail-restaurant" class="detail-restaurant"></div>
       <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailRestaurant = await RestaurantSource.detailRestaurant(url.id);
    const detailRestaurantContainer =
      document.querySelector('#detail-restaurant');

    detailRestaurantContainer.innerHTML =
      createRestaurantDetailTemplate(detailRestaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: detailRestaurant.id,
        name: detailRestaurant.name,
        pictureId: detailRestaurant.pictureId,
        city: detailRestaurant.city,
        rating: detailRestaurant.rating,
      },
    });
  },
};

export default Detail;
