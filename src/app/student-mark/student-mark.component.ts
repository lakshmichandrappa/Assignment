import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../product-constant'

@Component({
  selector: 'app-student-mark',
  templateUrl: './student-mark.component.html',
  styleUrls: ['./student-mark.component.css']
})
export class StudentMarkComponent implements OnInit {
  details  = GlobalConstants.studentDetails;
  constructor() { 
  }

  ngOnInit(): void {
  }
}
