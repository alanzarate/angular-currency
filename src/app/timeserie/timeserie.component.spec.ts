import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeserieComponent } from './timeserie.component';

describe('TimeserieComponent', () => {
  let component: TimeserieComponent;
  let fixture: ComponentFixture<TimeserieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeserieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeserieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
