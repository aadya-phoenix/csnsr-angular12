import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppCommonService } from 'src/app/app-common.service';
import { DashboardLabelService } from 'src/app/dashboard/dashboard-common-services/dashboard-label.service';

@Component({
  selector: 'app-csnsr',
  templateUrl: './csnsr.component.html',
  styleUrls: ['./csnsr.component.css']
})
export class CsnsrComponent implements OnInit {

  constructor(private router:Router, private dashboardlabel:DashboardLabelService,
    private appService:AppCommonService) {
      
     }

  ngOnInit(): void {
    this.dashboardlabel.takeLabelObject();
   
  }

  navigate(){
    this.router.navigateByUrl('csnsr/dashboard');
  }
  
}
