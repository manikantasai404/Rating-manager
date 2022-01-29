import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnbenchComponent } from './onbench.component';

describe('OnbenchComponent', () => {
  let component: OnbenchComponent;
  let fixture: ComponentFixture<OnbenchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnbenchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnbenchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
