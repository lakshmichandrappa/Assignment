import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/service/counter.service';

@Component({
  selector: 'app-count-down-timer-service',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.css']
})
export class CountDownTimerServiceComponent implements OnInit {
  counterValues: any;
  interval: any;
  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.counterService.getTimerValue.subscribe((res: any)=>{
      this.counterValues = res;
    });
    this.counterService.counterClicks.subscribe((value: any)=>{
      if(value === true){
        this.startInterval();
      }
      else{
        this.stopInterval();
      }
    });
  }

  startInterval(){
    this.interval = setInterval(() => {
      this.counterValues--; 
   },  1000);
  }

  stopInterval() {
    clearInterval(this.interval);
    this.counterService.emitPauseCounts(this.counterValues);
  }

}
