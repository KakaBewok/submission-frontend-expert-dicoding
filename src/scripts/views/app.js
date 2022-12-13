/* eslint-disable object-curly-newline */
/* eslint-disable lines-between-class-members */
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import FirstInitiator from '../utils/first-initiator';

class App {
  constructor({ button, drawer, content, header, toTop, skipToContent }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._header = header;
    this._skipToContent = skipToContent;
    this._toTop = toTop;

    this._initialAppShell();
  }

  _initialAppShell() {
    FirstInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      header: this._header,
      skipToContent: this._skipToContent,
      toTop: this._toTop,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
