import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippingDialogComponent } from './zipping-dialog.component';

describe('ZippingDialogComponent', () => {
  let component: ZippingDialogComponent;
  let fixture: ComponentFixture<ZippingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZippingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZippingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
