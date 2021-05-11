import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/service/counter.service';

@Component({
  selector: 'app-start-pause-service',
  templateUrl: './start-pause.component.html',
  styleUrls: ['./start-pause.component.css']
})
export class StartPauseServiceComponent implements OnInit {
  startedValue: any;
  pausedValue: any;
  resetCounter: any;

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.counterService.getStatedClick.subscribe((value: any) =>{
      this.startedValue = value;
    });
    this.counterService.getPausedClick.subscribe((value: any) =>{
      this.pausedValue = value;
    });
    this.counterService.resetCounterClicks.subscribe((value: any) =>{
      this.resetCounter = value;
    })
  }

}
