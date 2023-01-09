import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatoareComponent } from './calculatoare.component';

describe('CalculatoareComponent', () => {
  let component: CalculatoareComponent;
  let fixture: ComponentFixture<CalculatoareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatoareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatoareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
