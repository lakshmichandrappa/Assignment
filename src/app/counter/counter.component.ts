import { Component, Input, OnInit, EventEmitter, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  getTimer: any;
  startClicks:any;
  pauseClicks:any;
  resetClicks: any;
  pauseClickTime:any;
  IntialValue: boolean = true;
  startDateTimes: any;
  resetValue: any;
  inputValueChanges: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.resetClicks = 0;
  }

  getTimerValue(event: any){
    this.getTimer = event;
    this.IntialValue = !this.IntialValue;
  }

  getPauseTimerValue(event: any){
    this.pauseClickTime = event;
  }

  resetConter(event: any){
    this.resetValue = !this.resetValue;
    this.IntialValue = false;
    this.startDateTimes = 'reset';
    this.resetClicks = this.resetClicks + 1;
  }

  onInputFieldChange(event: any){
    this.inputValueChanges = event;
    this.IntialValue = false;
  }

  startCounts(event: any){
    this.startClicks = event;
  }

  pauseCounts(event: any){
    this.pauseClicks = event;
  }

  getStartDateTime(event: any){
    this.startDateTimes = event;
  }

}
