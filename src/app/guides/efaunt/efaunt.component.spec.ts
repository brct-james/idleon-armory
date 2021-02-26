import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfauntComponent } from './efaunt.component';

describe('EfauntComponent', () => {
  let component: EfauntComponent;
  let fixture: ComponentFixture<EfauntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EfauntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EfauntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
