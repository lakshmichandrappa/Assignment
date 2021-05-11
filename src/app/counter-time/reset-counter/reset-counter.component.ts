import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/service/counter.service';

@Component({
  selector: 'app-reset-counter-service',
  templateUrl: './reset-counter.component.html',
  styleUrls: ['./reset-counter.component.css']
})
export class ResetCounterServiceComponent implements OnInit {

  getTimerValue: any = 500;
  StartClickStatus: boolean = false;
  countDownTimer: boolean = false;
  pauseTime: any[] = [];
  resetClicks: number = 0;
  pauseValue: number = 0;
  StartValue: number = 0;
  
  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.counterService.emitTimerValue(this.getTimerValue);
    this.counterService.pauseCountervalue.subscribe((data: any) => {
      if(this.countDownTimer) {
        this.pauseTime.push(data);
      }
    })
  }

  startCounter(value: any){
    this.StartClickStatus = !this.StartClickStatus;
    const date = new Date();
    if (this.StartClickStatus){
      this.counterService.emitCounterClicks(true);
      this.StartValue = this.StartValue + 1;
      this.counterService.emitStartedClickValue(this.StartValue);
      this.counterService.emitStartTime(date);
     this.countDownTimer = true;
    }
    else{
      this.counterService.emitCounterClicks(false);
      this.pauseValue = this.pauseValue + 1;
      this.counterService.emitPausedClickValue(this.pauseValue);
      this.counterService.emitPauseTime(date);
    }
  }

  resetCounter() {
    this.resetClicks++;
    this.StartValue = 0;
    this.pauseValue = 0;
    this.counterService.emitStartTime(0);
    this.counterService.emitPauseTime(0);
    this.counterService.emitTimerValue(500);
    this.counterService.emitCounterClicks(false);
    this.counterService.emitStartedClickValue(0);
    this.counterService.emitPausedClickValue(0);
    this.counterService.emitResetCounts(this.resetClicks);
    this.StartClickStatus = false;
    this.pauseTime = [];
  }

  
  dataChanged(event: any){
    this.pauseTime = [];
    this.StartValue = 0;
    this.pauseValue = 0;
    this.counterService.emitTimerValue(this.getTimerValue);
    this.counterService.emitStartTime(0);
    this.counterService.emitPauseTime(0);
    this.counterService.emitStartedClickValue(this.StartValue);
    this.counterService.emitPausedClickValue(this.pauseValue);
  }

}
