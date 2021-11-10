import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-feedback',
  templateUrl: './dashboard-feedback.component.html',
  styleUrls: ['./dashboard-feedback.component.css']
})
export class DashboardFeedbackComponent implements OnInit {

  SurveyType_Id:number=5;
  Instant:boolean = false;
  Survey:boolean= true;
  constructor() { }

  ngOnInit(): void {
  }

  ToggleDashboard(){
    
  }

}
