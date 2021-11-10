import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardFilterComponent } from './dashboard/dashboard-filter/dashboard-filter.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule}  from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { DashboardCountersComponent } from './dashboard/dashboard-counters/dashboard-counters.component';
import { DashboardGraphsComponent } from './dashboard/dashboard-graphs/dashboard-graphs.component';
import { DashboardPopupComponent } from './dashboard/dashboard-popup/dashboard-popup.component';



@NgModule({
  declarations: [
    DashboardComponent,
   DashboardFilterComponent,
   DashboardCountersComponent,
   DashboardGraphsComponent,
   DashboardPopupComponent,
  
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatDialogModule
  ],
  providers:[
    DatePipe
  ]
  
})
export class DashboardModule { }
