import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaineComponent } from './haine.component';

describe('HaineComponent', () => {
  let component: HaineComponent;
  let fixture: ComponentFixture<HaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
