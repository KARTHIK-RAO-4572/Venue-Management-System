import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteDataComponent } from './admin-delete-data.component';

describe('AdminDeleteDataComponent', () => {
  let component: AdminDeleteDataComponent;
  let fixture: ComponentFixture<AdminDeleteDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDeleteDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDeleteDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
