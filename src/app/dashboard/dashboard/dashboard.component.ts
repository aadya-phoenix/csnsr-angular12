import { Component, OnInit } from '@angular/core';
import { DashboardFilterComponent } from './dashboard-filter/dashboard-filter.component';
import { DashboardCountersComponent } from './dashboard-counters/dashboard-counters.component';
import { DashboardGraphsComponent } from './dashboard-graphs/dashboard-graphs.component';
import { DashboardLabelService } from '../dashboard-common-services/dashboard-label.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}
