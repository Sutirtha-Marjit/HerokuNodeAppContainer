import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokeTextComponent } from './broke-text.component';

describe('BrokeTextComponent', () => {
  let component: BrokeTextComponent;
  let fixture: ComponentFixture<BrokeTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokeTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
