/* eslint-disable object-curly-newline */
const FirstInitiator = {
  init({ button, drawer, content, header, toTop, skipToContent }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, button);
    });
    content.addEventListener('click', (event) => {
      this._closeDrawer(event, button, drawer);
    });
    window.onscroll = () => {
      this._navBarToFixed(header);
      this._shortcutToTop(toTop, header);
    };
    this._skipToContent(skipToContent);
  },

  _toggleDrawer(event, drawer, button) {
    event.stopPropagation();
    button.classList.toggle('hamburger-active');
    drawer.classList.toggle('hidden');
  },
  _closeDrawer(event, button, drawer) {
    event.stopPropagation();
    button.classList.remove('hamburger-active');
    drawer.classList.add('hidden');
  },
  _navBarToFixed(header) {
    const fixedNavBar = header.offsetTop;
    if (window.scrollY > fixedNavBar) {
      header.classList.add('navbar-fixed');
    } else {
      header.classList.remove('navbar-fixed');
    }
  },
  _shortcutToTop(toTop, header) {
    const fixedNav = header.offsetTop;
    if (window.scrollY > fixedNav) {
      toTop.classList.remove('hidden');
    } else {
      toTop.classList.add('hidden');
    }
  },
  _skipToContent(skipToContent) {
    skipToContent.addEventListener('focus', () => {
      skipToContent.classList.add('skip-to-content');
    });
    skipToContent.addEventListener('blur', () => {
      skipToContent.classList.remove('skip-to-content');
    });
  },
};

export default FirstInitiator;
