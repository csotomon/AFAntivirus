import { browser, by, element } from 'protractor';

export class AFAntivirusPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
