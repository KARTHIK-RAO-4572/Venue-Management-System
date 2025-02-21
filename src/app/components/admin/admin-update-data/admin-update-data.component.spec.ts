import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateDataComponent } from './admin-update-data.component';

describe('AdminUpdateDataComponent', () => {
  let component: AdminUpdateDataComponent;
  let fixture: ComponentFixture<AdminUpdateDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUpdateDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUpdateDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
