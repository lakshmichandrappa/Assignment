import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPauseServiceComponent } from './start-pause/start-pause.component';
import { CountDownTimerServiceComponent } from './count-down-timer/count-down-timer.component';
import { ResetCounterServiceComponent } from './reset-counter/reset-counter.component';
import { CounterLogServiceComponent } from './counter-log/counter-log.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StartPauseServiceComponent,
    CounterLogServiceComponent,
    ResetCounterServiceComponent,
    CountDownTimerServiceComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    StartPauseServiceComponent,
    CounterLogServiceComponent,
    ResetCounterServiceComponent,
    CountDownTimerServiceComponent
  ]
})
export class CounterTimeModule { }
