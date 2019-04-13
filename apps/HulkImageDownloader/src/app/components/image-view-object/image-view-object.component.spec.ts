import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageViewObjectComponent } from './image-view-object.component';

describe('ImageViewObjectComponent', () => {
  let component: ImageViewObjectComponent;
  let fixture: ComponentFixture<ImageViewObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageViewObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageViewObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
