import { SerisPhotoDownloaderPage } from './app.po';

describe('seris-photo-downloader App', () => {
  let page: SerisPhotoDownloaderPage;

  beforeEach(() => {
    page = new SerisPhotoDownloaderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
