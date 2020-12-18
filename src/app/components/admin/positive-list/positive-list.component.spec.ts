import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositiveListComponent } from './positive-list.component';

describe('PositiveListComponent', () => {
  let component: PositiveListComponent;
  let fixture: ComponentFixture<PositiveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositiveListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
