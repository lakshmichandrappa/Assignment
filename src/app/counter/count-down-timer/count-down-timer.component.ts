import { Component, Input, OnInit, EventEmitter, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.css']
})
export class CountDownTimerComponent implements OnInit, OnChanges {
  @Input() intialInput: any;
  @Input() receiveParentTimer: any;
  @Input() resetCounter: any;
  @Input() inputValueCounter: any;

  @Output() pausedTime = new EventEmitter();
  receivedChangeTimer: any;
  interval: any;
  intiation: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.receivedChangeTimer = 500;
  }

  ngOnChanges(data: any) {
    if(data.inputValueCounter){
      this.receivedChangeTimer = data.inputValueCounter.currentValue;
      this.stopInterval();
    }
    else if(data.receiveParentTimer && data.intialInput.currentValue && !this.intiation){
      this.receivedChangeTimer = data.receiveParentTimer.currentValue;
      this.startInterval();
    }
    else if(data.receiveParentTimer && !data.intialInput.currentValue){
      this.receivedChangeTimer = data.receiveParentTimer.currentValue;
    }
    else if(data.receiveParentTimer){
      this.receivedChangeTimer = data.receiveParentTimer.currentValue;
    }
    else if(data.resetCounter){
      this.receivedChangeTimer = 100;
      this.stopInterval();
     }
    else if(data.intialInput.currentValue === true){
        this.startInterval()
      }
      else if(data.intialInput.currentValue === false){
        this.stopInterval();
      }
      else {
        this.stopInterval();
      }
      this.intiation = false;
  }

  startInterval(){
    this.interval = setInterval(() => {
      this.receivedChangeTimer--; 
      this.pausedTime.emit(this.receivedChangeTimer);
   },  1000);
  }
  
  stopInterval() {
    clearInterval(this.interval)
  }

}
