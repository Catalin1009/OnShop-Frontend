import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelevizoareComponent } from './televizoare.component';

describe('TelevizoareComponent', () => {
  let component: TelevizoareComponent;
  let fixture: ComponentFixture<TelevizoareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelevizoareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelevizoareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
