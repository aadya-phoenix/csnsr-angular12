import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsnsrComponent } from './csnsr.component';

describe('CsnsrComponent', () => {
  let component: CsnsrComponent;
  let fixture: ComponentFixture<CsnsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsnsrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsnsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
