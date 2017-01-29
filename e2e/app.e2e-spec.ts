import { LenguaMeetingPage } from './app.po';

describe('lengua-meeting App', function() {
  let page: LenguaMeetingPage;

  beforeEach(() => {
    page = new LenguaMeetingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
