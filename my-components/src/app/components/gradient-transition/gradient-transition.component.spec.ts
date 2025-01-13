import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientTransitionComponent } from './gradient-transition.component';

describe('GradientTransitionComponent', () => {
  let component: GradientTransitionComponent;
  let fixture: ComponentFixture<GradientTransitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradientTransitionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradientTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
