/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-useless-path-segments */
import 'regenerator-runtime';
import App from './views/app';
import '../styles/main.css';
import '../styles/responsive.css';
import '../scripts/views/components/footer.js';
import '../scripts/views/components/navbar.js';
import '../scripts/views/components/hero.js';
import '../scripts/views/components/content.js';
import '../scripts/views/components/shortcut-to-top.js';
import '../scripts/views/components/skip-to-content.js';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const START = 10;
const NUMBER_OF_IMAGES = 100;

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#nav-menu'),
  content: document.querySelector('#cards-wrapper'),
  header: document.querySelector('header'),
  skipToContent: document.querySelector('#skip'),
  toTop: document.querySelector('#to-top'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
