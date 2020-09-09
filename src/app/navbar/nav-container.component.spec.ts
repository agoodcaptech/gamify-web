import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavContainer } from './nav-container.component';

describe('NavigationComponent', () => {
  let component: NavContainer;
  let fixture: ComponentFixture<NavContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavContainer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
