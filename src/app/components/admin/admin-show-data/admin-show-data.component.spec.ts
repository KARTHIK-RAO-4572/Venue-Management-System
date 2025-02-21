import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShowDataComponent } from './admin-show-data.component';

describe('AdminShowDataComponent', () => {
  let component: AdminShowDataComponent;
  let fixture: ComponentFixture<AdminShowDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminShowDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminShowDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
