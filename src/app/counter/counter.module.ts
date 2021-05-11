import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';
import { ResetCounterComponent } from './reset-counter/reset-counter.component';
import { CounterLogComponent } from './counter-log/counter-log.component';
import { StartPauseComponent } from './start-pause/start-pause.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CountDownTimerComponent,
    ResetCounterComponent,
    CounterLogComponent,
    StartPauseComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CountDownTimerComponent,
    ResetCounterComponent,
    CounterLogComponent,
    StartPauseComponent
  ]
})
export class CounterModule { }
