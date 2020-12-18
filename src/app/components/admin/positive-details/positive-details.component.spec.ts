import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositiveDetailsComponent } from './positive-details.component';

describe('PositiveDetailsComponent', () => {
  let component: PositiveDetailsComponent;
  let fixture: ComponentFixture<PositiveDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositiveDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositiveDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
