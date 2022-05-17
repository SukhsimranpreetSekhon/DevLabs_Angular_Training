import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FramedDetailsComponent } from './framed-details.component';

describe('FramedDetailsComponent', () => {
  let component: FramedDetailsComponent;
  let fixture: ComponentFixture<FramedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FramedDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FramedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
