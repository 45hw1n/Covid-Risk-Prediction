import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativeListComponent } from './negative-list.component';

describe('NegativeListComponent', () => {
  let component: NegativeListComponent;
  let fixture: ComponentFixture<NegativeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegativeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NegativeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
