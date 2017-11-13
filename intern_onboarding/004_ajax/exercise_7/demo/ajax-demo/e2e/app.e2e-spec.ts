import { AjaxDemoPage } from './app.po';

describe('ajax-demo App', () => {
  let page: AjaxDemoPage;

  beforeEach(() => {
    page = new AjaxDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
