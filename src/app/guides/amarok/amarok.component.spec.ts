import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmarokComponent } from './amarok.component';

describe('AmarokComponent', () => {
  let component: AmarokComponent;
  let fixture: ComponentFixture<AmarokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmarokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmarokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
