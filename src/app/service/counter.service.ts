import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
date= new Date();
  getTimerValue = new BehaviorSubject(0);
  getStatedClick = new BehaviorSubject(0);
  getPausedClick = new BehaviorSubject(0);
  getPausedClickTime = new BehaviorSubject(0);
  getStartedClickTime = new BehaviorSubject(0);
  getScrollValue = new BehaviorSubject(15);
  counterClicks = new BehaviorSubject(false);
  resetCounterClicks = new BehaviorSubject(0);
  pauseCountervalue = new BehaviorSubject(0)
  constructor() { }

  emitTimerValue(value: any){
    this.getTimerValue.next(value);
  }

  emitStartedClickValue(value: any){
    this.getStatedClick.next(value);
  }

  emitPausedClickValue(value: any){
    this.getPausedClick.next(value);
  }

  emitStartTime(value: any){
    this.getStartedClickTime.next(value);
  }

  emitPauseTime(value: any){
    this.getPausedClickTime.next(value);
  }

  emitScrollValue(value: any){
    this.getScrollValue.next(value);
  }

  emitCounterClicks(value: any){
    this.counterClicks.next(value);
  }

  emitResetCounts(value: any){
    this.resetCounterClicks.next(value);
  }

  emitPauseCounts(value: any){
    this.pauseCountervalue.next(value);
  }
}
