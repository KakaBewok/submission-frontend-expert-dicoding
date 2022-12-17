/* eslint-disable import/order */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-alert */
/* eslint-disable import/named */
/* eslint-disable operator-linebreak */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import Swal from 'sweetalert2';

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

    // fetch input review
    const form = document.querySelector('#form-input');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const content = new FormData(form);
      const result = Object.fromEntries(content);
      result.id = url.id;

      const fetchData = await fetch(
        'https://restaurant-api.dicoding.dev/review',
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(result),
        }
      );
      try {
        const response = await fetchData.json();
        Swal.fire({
          icon: 'success',
          title: 'Success!',
        });
        form.reset();
        console.log(response);
      } catch (error) {
        console.log(`Error ${error}`);
      }
    });
    // fetch input review end

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
