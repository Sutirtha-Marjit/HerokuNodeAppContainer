import { TestBed, inject } from '@angular/core/testing';

import { AppPropertiesService } from './app-properties.service';

describe('AppPropertiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppPropertiesService]
    });
  });

  it('should be created', inject([AppPropertiesService], (service: AppPropertiesService) => {
    expect(service).toBeTruthy();
  }));
});
