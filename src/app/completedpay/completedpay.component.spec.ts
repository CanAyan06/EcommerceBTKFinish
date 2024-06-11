import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedpayComponent } from './completedpay.component';

describe('CompletedpayComponent', () => {
  let component: CompletedpayComponent;
  let fixture: ComponentFixture<CompletedpayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletedpayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompletedpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
