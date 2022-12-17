/* eslint-disable no-inner-declarations */
/* eslint-disable import/order */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-alert */
/* eslint-disable import/named */
/* eslint-disable operator-linebreak */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantDetailTemplate,
  createRestaurantDetailReviewsTemplate,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import Swal from 'sweetalert2';

const Detail = {
  async render() {
    return `
       <div id="detail-restaurant" class="detail-restaurant"></div>
       <div class="detail-restaurant large">
          <div class="detail-info" tabindex="0">
            <h3 tabindex="0">Reviews</h3>
            <div id="detail-review">
            </div>
          </div>
       </div>
       <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    // show detail
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailRestaurant = await RestaurantSource.detailRestaurant(url.id);
    const detailRestaurantContainer =
      document.querySelector('#detail-restaurant');
    const reviewContainer = document.querySelector('#detail-review');

    detailRestaurantContainer.innerHTML =
      createRestaurantDetailTemplate(detailRestaurant);

    reviewContainer.innerHTML =
      createRestaurantDetailReviewsTemplate(detailRestaurant);

    // fetch input review
    const form = document.querySelector('#form-input');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const content = new FormData(form);
      const result = Object.fromEntries(content);
      result.id = url.id;

      try {
        const response = await RestaurantSource.addReview(result);
        Swal.fire({
          icon: 'success',
          title: 'Success!',
        });
        form.reset();
        reviewContainer.innerHTML =
          createRestaurantDetailReviewsTemplate(response);

        // setTimeout(() => {
        //   location.reload(true);
        // }, 1500);

        console.log(response);
      } catch (error) {
        console.log(error);
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
