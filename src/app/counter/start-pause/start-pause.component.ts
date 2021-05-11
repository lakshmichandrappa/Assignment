import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-pause',
  templateUrl: './start-pause.component.html',
  styleUrls: ['./start-pause.component.css']
})
export class StartPauseComponent implements OnInit {

  @Input() startCounter: any;
  @Input() pausedCounter: any;
  @Input() resetCounter: any;

  constructor() { }

  ngOnInit(): void {
  }

}
