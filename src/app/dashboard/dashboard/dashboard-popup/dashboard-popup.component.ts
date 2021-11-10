import { Component, OnInit } from '@angular/core';
import { DashboardApiService } from '../../dashboard-common-services/dashboard-api.service';

@Component({
  selector: 'app-dashboard-popup',
  templateUrl: './dashboard-popup.component.html',
  styleUrls: ['./dashboard-popup.component.css']
})
export class DashboardPopupComponent implements OnInit {

  QuestionTrendObj:any;

  constructor(private dashapi : DashboardApiService) { 
    
    this.QuestionTrendObj = this.dashapi.QuestionTrendObj;
  }

  ngOnInit(): void {
  }

}
