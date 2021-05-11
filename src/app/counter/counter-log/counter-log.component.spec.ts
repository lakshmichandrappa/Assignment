import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterLogComponent } from './counter-log.component';

describe('CounterLogComponent', () => {
  let component: CounterLogComponent;
  let fixture: ComponentFixture<CounterLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
