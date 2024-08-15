import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradesCarouselComponent } from './trades-carousel.component';

describe('TradesCarouselComponent', () => {
  let component: TradesCarouselComponent;
  let fixture: ComponentFixture<TradesCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradesCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TradesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
