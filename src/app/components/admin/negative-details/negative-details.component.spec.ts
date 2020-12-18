import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativeDetailsComponent } from './negative-details.component';

describe('NegativeDetailsComponent', () => {
  let component: NegativeDetailsComponent;
  let fixture: ComponentFixture<NegativeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegativeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NegativeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
