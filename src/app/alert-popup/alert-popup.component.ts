import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../product-constant'
import { CounterService } from '../service/counter.service';

@Component({
  selector: 'app-alert-popup',
  templateUrl: './alert-popup.component.html',
  styleUrls: ['./alert-popup.component.css']
})
export class AlertPopupComponent implements OnInit {
  blocks = GlobalConstants.products;
  item: any[] = [];
  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.counterService.getScrollValue.subscribe((val: any) => {
      this.scrollItem(val);
    })
  }

  productSelected(event: any, i: number){
    alert('You have clicked block ' + (i+1)!);
  }

  scrollHandler(evt: any) {
  }

  scrollItem(val: any){
    this.item = [];
    for (let i = 0; i< val; i++) {
      this.item.push(i);
    }
  }
}
