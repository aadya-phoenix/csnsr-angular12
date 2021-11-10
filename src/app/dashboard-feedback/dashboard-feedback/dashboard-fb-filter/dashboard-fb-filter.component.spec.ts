import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFbFilterComponent } from './dashboard-fb-filter.component';

describe('DashboardFbFilterComponent', () => {
  let component: DashboardFbFilterComponent;
  let fixture: ComponentFixture<DashboardFbFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardFbFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFbFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
