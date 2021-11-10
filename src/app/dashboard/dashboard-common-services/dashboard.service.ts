import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppCommonService } from 'src/app/app-common.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient:HttpClient, private appService:AppCommonService) { }

  appUrl="http://localhost:52268/api/";
  
  labelObject:any;
  shareObject:any;

  getLabel(){
    return this.httpClient.get(this.appUrl + 'Label/GetLabelConvertedLanguage');
  };
  
   takeLabelObj( labelObject:any){
    this.labelObject = labelObject;
   }

    //inuse
   dashboard_bkCounters(obj:any){
    return this.httpClient.post(this.appUrl + 'Dashboard_bk/Dashboard_bkCounters', obj, {});
   }

   instantSatisfactionTrend(obj:any){
    return this.httpClient.post(this.appUrl + 'Customer/InstantSatisfactionTrend', obj, {});
   }

   //inuse
   questionFeedbackReport(obj:any){
    return this.httpClient.post(this.appUrl + 'Customer/QuestionFeedbackReport', obj, {});
   }

   getDealerCSIForInstantFeedback(obj:any){
    return this.httpClient.post(this.appUrl + 'Customer/GetDealerCSIForInstantFeedback', obj, {});
   }

    //inuse
   surveyDashboard_bkCounters(obj:any) {

    return this.httpClient.post(this.appUrl + 'Dashboard_bk/SurveyDashboard_bkCounters', obj, {});
   };
  
//inuse
questionSurveyAvgScore(obj:any) {
  return this.httpClient.post(this.appUrl + 'Customer/QuestionSurveyAvgScore', obj, {});
   };

    //inuse
    dashboard_bkSurveyRatingAnalysis(obj:any) {
      return this.httpClient.post(this.appUrl + 'Dashboard_bk/Dashboard_bkSurveyRatingAnalysis', obj, {});
  }; 

  
    //inuse
    getDealerCSIForSurvey(obj:any){
      return this.httpClient.post(this.appUrl + 'Customer/GetDealerCSIForSurvey', obj, {});
  };

  //inuse
   getCustomerSatisfaction(obj:any) {
    return this.httpClient.post(this.appUrl + 'Customer/GetCustomerSatisfaction', obj, {});
  };

  getFreshLeadCount(obj:any) {

        		if ((this.appService.session.Country_Id === 15) || (this.appService.session.RoleName === 'HOAdmin' && obj.Country_Id === 15)) {

              return this.httpClient.post(this.appUrl + 'CustomerSMR/GetFreshLeadCountIndia2W', obj, {});

        }
        else {

          return this.httpClient.post(this.appUrl + 'CustomerSMR/GetFreshLeadCount', obj, {});
        }
		
    };

    getFollowUpLeadCount(obj:any) {

      if ((this.appService.session.Country_Id === 15) || (this.appService.session.RoleName === 'HOAdmin' && obj.Country_Id === 15)) {

        return this.httpClient.post(this.appUrl + 'CustomerSMR/GetFollowUpLeadCountDashboardIndia2W', obj, {});

      }
      else {

        return this.httpClient.post(this.appUrl + 'CustomerSMR/GetFollowUpLeadCountDashboard', obj, {});
      }
  
     };

     getNonContactLeadCount(obj:any) {

             if ((this.appService.session.Country_Id === 15) || (this.appService.session.RoleName === 'HOAdmin' && obj.Country_Id === 15)) {
  
              return this.httpClient.post(this.appUrl + 'CustomerSMR/GetNonContactLeadCountDashboardIndia2W', obj, {});
  
          }
          else {
  
            return this.httpClient.post(this.appUrl + 'CustomerSMR/GetNonContactLeadCountDashboard', obj, {});
          }
      
      };

      getBookingLeadCount(obj:any) {

        if ((this.appService.session.Country_Id === 15) || (this.appService.session.RoleName === 'HOAdmin' && obj.Country_Id === 15)) {
  
          return this.httpClient.post(this.appUrl + 'CustomerSMR/GetBookingLeadCountDashboardIndia2W', obj, {});
  
          }
          else {
  
            return this.httpClient.post(this.appUrl + 'CustomerSMR/GetBookingLeadCountDashboard', obj, {});
          }
      
      };

      getServiceDueVsDoneForVehicle(obj:any) {

        if ((this.appService.session.Country_Id === 15) || (this.appService.session.RoleName === 'HOAdmin' && obj.Country_Id === 15)) 
		{

      return this.httpClient.post(this.appUrl + 'CustomerSMR/GetServiceDueVsDoneForVehicleIndia2W', obj, {});

        }
        else {

          return this.httpClient.post(this.appUrl + 'CustomerSMR/GetServiceDueVsDoneForVehicle', obj, {});
        }
		
    };

    getSMRConvertedCountDashboard(obj:any) {

      		
      if ((this.appService.session.Country_Id === 15) || (this.appService.session.RoleName === 'HOAdmin' && obj.Country_Id === 15)) {
  
        return this.httpClient.post(this.appUrl + 'CustomerSMR/GetSMRConvertedCountDashboardIndia2W', obj, {});
  
          }
          else {
  
            return this.httpClient.post(this.appUrl + 'CustomerSMR/GetSMRConvertedCountDashboard', obj, {});
          }
      
      };
      
      getServiceDue(obj:any){

        if ((this.appService.session.Country_Id === 15) || (this.appService.session.RoleName === 'HOAdmin' && obj.Country_Id === 15)) {

          return this.httpClient.post(this.appUrl + 'CustomerSMR/GetServiceDueIndia2W', obj, {});
        }
        else {

          return this.httpClient.post(this.appUrl + 'CustomerSMR/GetServiceDue', obj, {});
        }
	    };

      //inuse
    PSFServiceDashboard_bkCounters(obj:any) {

      return this.httpClient.post(this.appUrl + 'Dashboard_bk/PSFServiceDashboard_bkCounters', obj, {});
  };

   //inuse
   PSFSalesDashboard_bkCounters(obj:any){

    return this.httpClient.post(this.appUrl + 'Dashboard_bk/PSFSalesDashboard_bkCounters', obj, {});
  };


  getDealerOutletList(id:number) {

    return this.httpClient.get(this.appUrl + 'Dealer/GetOutLetListForDDLByUser?UserId=' + id);
};

  getOutLetListByCountry(id:number) {

    return this.httpClient.get(this.appUrl + 'Dealer/GetOutLetListByCountry?CountryId=' + id);
};

  getTargetAchivement(obj:any){

    return this.httpClient.post(this.appUrl + 'Customer/GetTargetAchivement', obj, {});
};

  getMonthWiseTargetAchivementForIFC(obj:any) {
    return this.httpClient.post(this.appUrl + 'Customer/GetMonthWiseTargetAchivementForIFC', obj, {});
};

  getMonthWiseTargetAchivementForService(obj:any) {
    return this.httpClient.post(this.appUrl + 'Customer/GetMonthWiseTargetAchivementForService', obj, {});
};

  getMonthWiseTargetAchivementForSMR(obj:any) {
    return this.httpClient.post(this.appUrl + 'Customer/GetMonthWiseTargetAchivementForSMR', obj, {});
};

  getMonthWiseTargetAchivementForEmail(obj:any) {
    return this.httpClient.post(this.appUrl + 'Customer/GetMonthWiseTargetAchivementForEmail', obj, {});
};

   getMonthWiseTargetAchivementForPSF(obj:any) {
    return this.httpClient.post(this.appUrl + 'Customer/GetMonthWiseTargetAchivementForPSF', obj, {});
};

getCountryList() {
  return this.httpClient.get(this.appUrl + 'Country/GetCountryListForDDL');
};

getVehicleTypeForDDL() {

  return this.httpClient.get(this.appUrl + 'Company/GetVehicleTypeForDDL');
};

QuestionWiseTrend(obj:any){
  return this.httpClient.post(this.appUrl +'Customer/QuestionWiseTrend', obj, {})
};


} 
  

