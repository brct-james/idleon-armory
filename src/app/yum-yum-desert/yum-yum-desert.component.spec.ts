import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YumYumDesertComponent } from './yum-yum-desert.component';

describe('YumYumDesertComponent', () => {
  let component: YumYumDesertComponent;
  let fixture: ComponentFixture<YumYumDesertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YumYumDesertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YumYumDesertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
