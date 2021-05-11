import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterTimeComponent } from './counter-time.component';

describe('CounterTimeComponent', () => {
  let component: CounterTimeComponent;
  let fixture: ComponentFixture<CounterTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
