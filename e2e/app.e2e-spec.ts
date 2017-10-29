import { StudentrentPage } from './app.po';

describe('studentrent App', function() {
  let page: StudentrentPage;

  beforeEach(() => {
    page = new StudentrentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
