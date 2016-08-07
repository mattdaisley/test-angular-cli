import { TestAngularCliPage } from './app.po';

describe('test-angular-cli App', function() {
  let page: TestAngularCliPage;

  beforeEach(() => {
    page = new TestAngularCliPage();
  });

  it('should display message saying Angular CLI Testing', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angular CLI Testing');
  });
});
