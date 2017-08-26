import { AFAntivirusPage } from './app.po';

describe('afantivirus App', () => {
  let page: AFAntivirusPage;

  beforeEach(() => {
    page = new AFAntivirusPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
