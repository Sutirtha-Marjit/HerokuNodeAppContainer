import { TestBed, inject } from '@angular/core/testing';

import { CommonImageTrackerService } from './common-image-tracker.service';

describe('CommonImageTrackerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonImageTrackerService]
    });
  });

  it('should be created', inject([CommonImageTrackerService], (service: CommonImageTrackerService) => {
    expect(service).toBeTruthy();
  }));
});
