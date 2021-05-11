import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPauseComponent } from './start-pause.component';

describe('StartPauseComponent', () => {
  let component: StartPauseComponent;
  let fixture: ComponentFixture<StartPauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartPauseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
