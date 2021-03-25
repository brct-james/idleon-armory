import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlunderHillsComponent } from './blunder-hills.component';

describe('BlunderHillsComponent', () => {
  let component: BlunderHillsComponent;
  let fixture: ComponentFixture<BlunderHillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlunderHillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlunderHillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
