import { ImageDownloaderRoutingModule } from './image-downloader-routing.module';

describe('ImageDownloaderRoutingModule', () => {
  let imageDownloaderRoutingModule: ImageDownloaderRoutingModule;

  beforeEach(() => {
    imageDownloaderRoutingModule = new ImageDownloaderRoutingModule();
  });

  it('should create an instance', () => {
    expect(imageDownloaderRoutingModule).toBeTruthy();
  });
});
