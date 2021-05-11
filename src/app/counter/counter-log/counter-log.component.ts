import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-log',
  templateUrl: './counter-log.component.html',
  styleUrls: ['./counter-log.component.css']
})
export class CounterLogComponent implements OnInit, OnChanges{

  @Input() startTime: any;
  pausedTime: any[] = [];
  startedTime: any[] = [];

  constructor() { }

  ngOnInit(): void {

  }
  ngOnChanges(data: any) {
    const date = new Date();
    if(data.startTime.currentValue === true){
      this.startedTime.push(date);
    }
    else if(data.startTime.currentValue === 'reset'){
      this.startedTime = [];
      this.pausedTime = [];
    }
    else{
      this.pausedTime.push(date);
    }
  }

}
