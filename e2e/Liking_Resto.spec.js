/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Resto');

Before((I) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked resto', (I) => {
  I.seeElement('#cards-wrapper');
  I.see('Tidak ada resto yang disukai.', '#cards-wrapper');
});

Scenario('liking one resto', async (I) => {
  I.see('Tidak ada resto yang disukai.', '#cards-wrapper');

  I.amOnPage('/');

  I.seeElement('.card-name a');

  const firstResto = locate('.card-name a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const likedRestoTitle = await I.grabTextFrom('.card-name');
  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});
