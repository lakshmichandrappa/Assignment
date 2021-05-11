import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reset-counter',
  templateUrl: './reset-counter.component.html',
  styleUrls: ['./reset-counter.component.css']
})
export class ResetCounterComponent implements OnInit {
  @Output() resetCounterTime = new EventEmitter<any>();
  @Output() timerEmitttedValue: EventEmitter<any>;
  @Output() pauseClicksCount = new EventEmitter<any>();
  @Output() startClicksCount = new EventEmitter<any>();
  @Output() pauseDateTime = new EventEmitter<any>();
  @Output() startDateTime = new EventEmitter<any>();
  @Input() pauseTimeCounter: any;
  @Output() inputFieldChange = new EventEmitter<any>();
  pauseTime: any[] = [];
  StartClickStatus: any;
  StartValue: number = -1;
  interval: any;
  getTimerValue: any = 500;
  pauseValue: number = 0;
  // countDownTimer: boolean;

  constructor() { 
    this.timerEmitttedValue = new EventEmitter();
  }

  ngOnInit() {
    this.emitTimmer(this.getTimerValue);
    this.StartClickStatus = false;
    this.startClicksCount.emit(this.StartValue);
    this.pauseClicksCount.emit(this.pauseValue)
  }

  dataChanged(event: any){
    this.pauseTime = [];
    this.inputFieldChange.emit(event);
    this.StartClickStatus = false;
    this.StartValue = 0;
    this.pauseValue = 0;
    this.startClicksCount.emit(this.StartValue);
    this.pauseClicksCount.emit(this.pauseValue);
  }

  sendtimmerToParent() {
    this.StartClickStatus = !this.StartClickStatus;
    this.startDateTime.emit(this.StartClickStatus);
      if (this.StartClickStatus){
        this.StartValue = this.StartValue + 1;
        this.startClicksCount.emit(this.StartValue);
      }
      else{
        this.pauseTime.push(this.pauseTimeCounter);
        this.pauseValue = this.pauseValue + 1;
        this.pauseClicksCount.emit(this.pauseValue);
      }
  }


  resetCounter() {
    this.StartValue = 0;
    this.pauseValue = 0;
    this.getTimerValue = 100;
    this.StartClickStatus = false;
    this.pauseTime = [];
    this.resetCounterTime.emit(this.getTimerValue);
    this.startDateTime.emit('reset');
    this.startClicksCount.emit(this.StartValue);
    this.pauseClicksCount.emit(this.pauseValue);
  }

  emitTimmer(value: any) {
    this.timerEmitttedValue.emit(value);
    this.sendtimmerToParent();
  }
}
