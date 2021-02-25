import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideSelectorComponent } from './guide-selector.component';

describe('GuideSelectorComponent', () => {
  let component: GuideSelectorComponent;
  let fixture: ComponentFixture<GuideSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
