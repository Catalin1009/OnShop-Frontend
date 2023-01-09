import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectrocasniceComponent } from './electrocasnice.component';

describe('ElectrocasniceComponent', () => {
  let component: ElectrocasniceComponent;
  let fixture: ComponentFixture<ElectrocasniceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectrocasniceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectrocasniceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
