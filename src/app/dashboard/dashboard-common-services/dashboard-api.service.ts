import { Injectable } from '@angular/core';
import { AppCommonService } from 'src/app/app-common.service';
import { DashboardService } from './dashboard.service';
import { DatePipe } from '@angular/common';
import { Observable,Subject } from 'rxjs';
import * as _ from "lodash";

@Injectable({
  providedIn: 'root'
})
export class DashboardApiService {

  countersDtl:any;
  InsQuestionSatisfactionObj:any;
  InsSatisfactionObj:any;
  CSI:any;
  SatisfactionObj:any;
  QuestionSatisfactionObj:any;
  RatingAnalysis:any;
  CSISurvey:any;
  ConvertedLeadCount:any;
  FreshLeadCount:any;
  FollowUpLeadCount:any;
  NonContactLeadCount:any;
  BookingLeadCount:any;
  ServiceDueObj:any;
  ServiceDue:any;
  IFC:any;
  Email:any;
  PSF:any;
  TGTData:any;
  TGTACH:any;
  AllMonth:any;
  CurrntDate:any;
  Month:any;
  CurrntYear:any;
  NewMonth:any;
  NewYear:any;
  Newdate:any;
  MNTHTGTData:any;
  SMRTGTList:any;

  QuestionTrendObj:any;

  
  toggleDashboardId:number; 


  private subject = new Subject<any>();

  constructor( private dashboardservice:DashboardService, private appService:AppCommonService,
    private datePipe: DatePipe) {

       
        this.toggleDashboardId=0; 
     }


  searchObj = {
    FromDate: null,
     ToDate:null,
     VehicleType: 0,
     Country_Id: 0,
     UserId: this.appService.takeSession().User_Id,
     SatisfactionType: '0',
     OutletId: 0,
     BrandType: 'All'
   };

    shareObj=this.searchObj;
    
 
  
 giveQuestionTrendObj(){
     this.dashboardservice.QuestionWiseTrend(this.shareObj).subscribe(data=>{
         this.QuestionTrendObj = data;
     },err=>{
      console.log("QuestionWiseTrend error...",err);
     })
 }
}
