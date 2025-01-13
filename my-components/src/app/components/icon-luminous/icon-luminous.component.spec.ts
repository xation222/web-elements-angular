import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconLuminousComponent } from './icon-luminous.component';

describe('IconLuminousComponent', () => {
  let component: IconLuminousComponent;
  let fixture: ComponentFixture<IconLuminousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconLuminousComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconLuminousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
