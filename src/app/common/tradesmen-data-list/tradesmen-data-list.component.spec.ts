import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradesmenDataListComponent } from './tradesmen-data-list.component';

describe('TradesmenDataListComponent', () => {
  let component: TradesmenDataListComponent;
  let fixture: ComponentFixture<TradesmenDataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradesmenDataListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TradesmenDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
