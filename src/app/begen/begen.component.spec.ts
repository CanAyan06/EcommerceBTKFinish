import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BegenComponent } from './begen.component';
describe('BegenComponent', () => {
  let component: BegenComponent;
  let fixture: ComponentFixture<BegenComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BegenComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(BegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
