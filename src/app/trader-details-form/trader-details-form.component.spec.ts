import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraderDetailsFormComponent } from './trader-details-form.component';

describe('TraderDetailsFormComponent', () => {
  let component: TraderDetailsFormComponent;
  let fixture: ComponentFixture<TraderDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraderDetailsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TraderDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
