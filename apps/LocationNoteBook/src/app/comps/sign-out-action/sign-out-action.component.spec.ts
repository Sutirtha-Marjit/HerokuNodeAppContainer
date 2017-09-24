import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignOutActionComponent } from './sign-out-action.component';

describe('SignOutActionComponent', () => {
  let component: SignOutActionComponent;
  let fixture: ComponentFixture<SignOutActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignOutActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignOutActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
