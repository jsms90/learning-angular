import { CatAppPage } from './app.po';

describe('cat-app App', () => {
  let page: CatAppPage;

  beforeEach(() => {
    page = new CatAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
