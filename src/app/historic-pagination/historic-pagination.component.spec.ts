import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricPaginationComponent } from './historic-pagination.component';

describe('HistoricPaginationComponent', () => {
  let component: HistoricPaginationComponent;
  let fixture: ComponentFixture<HistoricPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricPaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
