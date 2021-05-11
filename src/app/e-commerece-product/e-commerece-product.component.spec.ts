import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommereceProductComponent } from './e-commerece-product.component';

describe('ECommereceProductComponent', () => {
  let component: ECommereceProductComponent;
  let fixture: ComponentFixture<ECommereceProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECommereceProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ECommereceProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
