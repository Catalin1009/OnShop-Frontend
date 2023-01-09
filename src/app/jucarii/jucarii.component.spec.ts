import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JucariiComponent } from './jucarii.component';

describe('JucariiComponent', () => {
  let component: JucariiComponent;
  let fixture: ComponentFixture<JucariiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JucariiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JucariiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
