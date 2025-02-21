import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddDataComponent } from './admin-add-data.component';

describe('AdminAddDataComponent', () => {
  let component: AdminAddDataComponent;
  let fixture: ComponentFixture<AdminAddDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAddDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
