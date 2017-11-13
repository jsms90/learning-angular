import { ServiceDemoAppPage } from './app.po';

describe('service-demo-app App', () => {
  let page: ServiceDemoAppPage;

  beforeEach(() => {
    page = new ServiceDemoAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
