import { Ng1c2ng2dPage } from './app.po';

describe('ng1c2ng2d App', () => {
  let page: Ng1c2ng2dPage;

  beforeEach(() => {
    page = new Ng1c2ng2dPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
