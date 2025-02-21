import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookVenueComponent } from './book-venue.component';

describe('BookVenueComponent', () => {
  let component: BookVenueComponent;
  let fixture: ComponentFixture<BookVenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookVenueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
