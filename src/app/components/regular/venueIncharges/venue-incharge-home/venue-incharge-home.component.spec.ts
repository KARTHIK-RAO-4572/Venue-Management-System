import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueInchargeHomeComponent } from './venue-incharge-home.component';

describe('VenueInchargeHomeComponent', () => {
  let component: VenueInchargeHomeComponent;
  let fixture: ComponentFixture<VenueInchargeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenueInchargeHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenueInchargeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
