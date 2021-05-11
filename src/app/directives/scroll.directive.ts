import { Directive, HostListener } from '@angular/core';
import { CounterService } from '../service/counter.service';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {
  firstScroll: boolean = false;
  @HostListener('window:scroll', ['$event']) 
    scrollHandler(event: any) { 
      {
        if(!this.firstScroll) {
          this.counterService.emitScrollValue(40);
          this.firstScroll = true;
        }
        else {
          this.firstScroll = false;
        }
      }
    }
  constructor(private counterService: CounterService) { }

}
