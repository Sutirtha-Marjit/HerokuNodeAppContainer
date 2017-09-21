import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPreloaderComponent } from './common-preloader.component';

describe('CommonPreloaderComponent', () => {
  let component: CommonPreloaderComponent;
  let fixture: ComponentFixture<CommonPreloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonPreloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonPreloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
