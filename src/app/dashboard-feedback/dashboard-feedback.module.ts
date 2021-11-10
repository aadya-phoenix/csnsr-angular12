import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardFbFilterComponent } from './dashboard-feedback/dashboard-fb-filter/dashboard-fb-filter.component';
import { DashboardFeedbackComponent } from './dashboard-feedback/dashboard-feedback.component';



@NgModule({
  declarations: [
    DashboardFbFilterComponent,
    DashboardFeedbackComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardFeedbackModule { }
