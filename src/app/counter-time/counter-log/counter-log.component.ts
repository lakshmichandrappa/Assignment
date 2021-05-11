import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/service/counter.service';

@Component({
  selector: 'app-counter-log-service',
  templateUrl: './counter-log.component.html',
  styleUrls: ['./counter-log.component.css']
})
export class CounterLogServiceComponent implements OnInit {
  startTime: any[] = [];
  pauseTime: any[] = [];
  date = new Date();
  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.counterService.getPausedClickTime.subscribe((value: any)=>{
      if(value === 0){
        this.pauseTime = [];
      }
      else{
        this.pauseTime.push(value);
      }
    });
    this.counterService.getStartedClickTime.subscribe((value: any)=>{
      if(value === 0){
        this.startTime = [];
      }
      else{
        this.startTime.push(value);
      }
    });
  }

}
