import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantsComponent } from './resturants.component';

describe('ResturantsComponent', () => {
  let component: ResturantsComponent;
  let fixture: ComponentFixture<ResturantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResturantsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResturantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
