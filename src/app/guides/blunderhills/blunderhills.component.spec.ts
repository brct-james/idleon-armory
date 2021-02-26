import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlunderhillsComponent } from './blunderhills.component';

describe('BlunderhillsComponent', () => {
  let component: BlunderhillsComponent;
  let fixture: ComponentFixture<BlunderhillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlunderhillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlunderhillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
