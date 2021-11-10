import { Component, OnInit } from '@angular/core';
import { AppCommonService } from 'src/app/app-common.service';
import { DashboardService } from '../../dashboard-common-services/dashboard.service';
import { Observable } from 'rxjs';
import * as _ from "lodash";
import { DatePipe } from '@angular/common';
import { DashboardLabelService } from '../../dashboard-common-services/dashboard-label.service';
import { DashboardApiService } from '../../dashboard-common-services/dashboard-api.service';
import { DashboardRxService } from '../../dashboard-common-services/dashboard-rx.service';

@Component({
    selector: 'app-dashboard-filter',
    templateUrl: './dashboard-filter.component.html',
    styleUrls: ['./dashboard-filter.component.css'],
    providers: [DatePipe]
})
export class DashboardFilterComponent implements OnInit {
    SurveyType_Id: number;

    labelObj: any;
    defaultLanguage = true;
    session: any;
    searchObj: any;
    Role: any;
    countryObj: any;
    OutletObj: any;
    VehicleTypeObj: any;

    Instant: boolean;
    Survey: boolean;
    SMR: boolean;
    PSFS: boolean;
    PERF: boolean;
    PSFSales: boolean;


    countersDtl: any;
    InsSatisfactionObj: any;
    InsQuestionSatisfactionObj: any;
    CSI: any;
    QuestionSatisfactionObj: any;
    RatingAnalysis: any;
    CSISurvey: any;
    SatisfactionObj: any;
    FreshLeadCount: any;
    FollowUpLeadCount: any;
    NonContactLeadCount: any;
    BookingLeadCount: any;
    ServiceDueObj: any;
    ConvertedLeadCount: any;
    ServiceDue: any;
    TGTData: any;
    TGTACH: any;
    AllMonth: any;
    CurrntDate: any;
    Month: any;
    CurrntYear: any;
    NewMonth: any;
    NewYear: any;
    Newdate: any;
    IFC: any;
    Email: any;
    PSF: any;
    MNTHTGTData: any;
    SMRTGTList: any;



    CSSRKPILabel: string;
    CountryLabel: string;
    DealerOutletCodeLabel: string;
    SwitchToLabel: string;
    InstantFeedbackLabel: string;
    SurveyFeedbackLabel: string;
    ServiceRemindersLabel: string;
    SurveyAnalysisLabel: string;
    PostServiceFollowupLabel: string;
    PostSalesFollowupLabel: string;
    FromDateLabel: string;
    ToDateLabel: string;
    VehicleLabel: string;
    SearchLabel: string;
    TargetVsAchievementLabel: string;
    FEEDBACKTARGETLabel: string;
    SMRTARGETLabel: string;
    UPLOADTARGETLabel: string;
    EMAILTARGETLabel: string;
    PSFTARGETLabel: string;
    AchievementLabel: string;
    TargetVsAchievementServiceLoadLabel: string;
    TargetVsAchievementInstantFeedbackLabel: string;
    TargetVsAchievementSMRLabel: string;
    TargetVsAchievementEmailLabel: string;
    TargetVsAchievementPSFLabel: string;
    SERVICEDONELabel: string;
    FeedbackCapturedLabel: string;
    CSILabel: string;
    SATISFIEDLabel: string;
    QuestionWiseRatingLabel: string;
    DISSATISFIEDLabel: string;
    MonthwiseCustomerSatisfactionTrendLabel: string;
    SURVEYSENTLabel: string;
    TELEPHONICSURVEYLabel: string;
    SURVEYCOMPLETEDLabel: string;
    SatisfiedvsDissatisfiedCustomersLabel: string;
    ServicecalldueLabel: string;
    YETTOCONTACTLabel: string;
    CONTACTEDLabel: string;
    NONCONTACTABLELabel: string;
    BOOKINGLabel: string;
    SERVICECONVERTEDLabel: string;
    ServiceCallDueVsServiceDoneLabel: string;
    TOTALDUELabel: string;
    HighlySatisfiedLabel: string;
    HighlyDissatisfiedLabel: string;
    SurveysubmittedviaSMSLabel: string;
    SurveysubmittedviaMailLabel: string;
    SurveysubmittedviaTelephonicLabel: string;


    constructor(private dashboardservice: DashboardService, private appService: AppCommonService,
        private datePipe: DatePipe, private dashboardlabel: DashboardLabelService, private dashboardapi: DashboardApiService,
        private dashboardrx: DashboardRxService) {

        this.SurveyType_Id = this.appService.giveSurveyId();
        this.session = this.appService.takeSession();

        this.Instant = true;
        this.Survey = true;
        this.SMR = true;
        this.PSFS = true;
        this.PERF = false;
        this.PSFSales = true;


        this.CSSRKPILabel = "";
        this.CountryLabel = "";
        this.DealerOutletCodeLabel = "";
        this.SwitchToLabel = "";
        this.InstantFeedbackLabel = "";
        this.SurveyFeedbackLabel = "";
        this.ServiceRemindersLabel = "";
        this.SurveyAnalysisLabel = "";
        this.PostServiceFollowupLabel = "";
        this.PostSalesFollowupLabel = "";
        this.FromDateLabel = "";
        this.ToDateLabel = "";
        this.VehicleLabel = "";
        this.SearchLabel = "";
        this.TargetVsAchievementLabel = "";
        this.FEEDBACKTARGETLabel = "";
        this.SMRTARGETLabel = "";
        this.UPLOADTARGETLabel = "";
        this.EMAILTARGETLabel = "";
        this.PSFTARGETLabel = "";
        this.AchievementLabel = "";
        this.TargetVsAchievementServiceLoadLabel = "";
        this.TargetVsAchievementInstantFeedbackLabel = "";
        this.TargetVsAchievementSMRLabel = "";
        this.TargetVsAchievementEmailLabel = "";
        this.TargetVsAchievementPSFLabel = "";
        this.SERVICEDONELabel = "";
        this.FeedbackCapturedLabel = "";
        this.CSILabel = "";
        this.SATISFIEDLabel = "";
        this.QuestionWiseRatingLabel = "";
        this.DISSATISFIEDLabel = "";
        this.MonthwiseCustomerSatisfactionTrendLabel = "";
        this.SURVEYSENTLabel = "";
        this.TELEPHONICSURVEYLabel = "";
        this.SURVEYCOMPLETEDLabel = "";
        this.SatisfiedvsDissatisfiedCustomersLabel = "";
        this.ServicecalldueLabel = "";
        this.YETTOCONTACTLabel = "";
        this.CONTACTEDLabel = "";
        this.NONCONTACTABLELabel = "";
        this.BOOKINGLabel = "";
        this.SERVICECONVERTEDLabel = "";
        this.ServiceCallDueVsServiceDoneLabel = "";
        this.TOTALDUELabel = "";
        this.HighlySatisfiedLabel = "";
        this.HighlyDissatisfiedLabel = "";
        this.SurveysubmittedviaSMSLabel = "";
        this.SurveysubmittedviaMailLabel = "";
        this.SurveysubmittedviaTelephonicLabel = "";

    }

    takeSearchObject() {
        var date = new Date();
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

        this.searchObj = {
            FromDate: this.datePipe.transform(firstDay, 'MMMM dd, yyyy'),
            ToDate: this.datePipe.transform(lastDay, 'MMMM dd, yyyy'),
            VehicleType: 0,
            Country_Id: 0,
            UserId: this.appService.takeSession().User_Id,
            SatisfactionType: '0',
            OutletId: 0,
            BrandType: 'All'
        };

    }
    init() {
        var date = new Date();
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        // this.searchObj.FromDate = this.datePipe.transform(firstDay, 'MMMM dd, yyyy');
        // this.searchObj.ToDate = this.datePipe.transform(lastDay, 'MMMM dd, yyyy');
    }

    takelabelObj() {
        this.dashboardservice.takeLabelObj(this.labelObj);
    }


    toggleDashboard(id: number) {
        //this.dashboardrx.toggleSubject.next({id:id,obj:this.searchObj})
        this.dashboardrx.sendToggleEvent({ id: id, obj: this.searchObj });


        if (id == 1) {
            this.Instant = false;
            this.Survey = true;
            this.SMR = true;
            this.PSFS = true;
            this.PERF = true;
            this.PSFSales = true;


            this.dashboardservice.dashboard_bkCounters(this.searchObj).subscribe(data => {
                if (data != null) {
                    this.countersDtl = data;
                    console.log("CountersDtl", this.countersDtl);
                }

            }, (error) => {
                console.log(error);
            });

            this.dashboardservice.instantSatisfactionTrend(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.InsSatisfactionObj = data;

                }
            }, (error) => {
                console.log(error);
            });

            this.dashboardservice.questionFeedbackReport(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.InsQuestionSatisfactionObj = data;
                }

            }, (error) => {
                console.log(error);
            });


            this.dashboardservice.getDealerCSIForInstantFeedback(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.CSI = data;
                }

            }, (error) => {
                console.log(error);
            });

        }
        else if (id == 2) {
            this.Instant = true;
            this.Survey = false;
            this.SMR = true;
            this.PSFS = true;
            this.PERF = true;
            this.PSFSales = true;


            this.dashboardservice.surveyDashboard_bkCounters(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.countersDtl = data;
                    console.log("CountersDtl", this.countersDtl);
                }

            }, (error) => {
                console.log(error);
            });

            this.dashboardservice.questionSurveyAvgScore(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.QuestionSatisfactionObj = data;
                }
            }, (error) => {
                console.log(error);
            });


            this.dashboardservice.dashboard_bkSurveyRatingAnalysis(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.RatingAnalysis = data;
                }

            }, (error) => {
                console.log(error);
            });

            this.dashboardservice.getDealerCSIForSurvey(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.CSISurvey = data;
                }

            }, (error) => {
                console.log(error);
            });

            //Survey
            this.dashboardservice.getCustomerSatisfaction(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.SatisfactionObj = data;
                }

            }, (error) => {
                console.log(error);
            });

        }
        else if (id == 3) {
            this.Instant = true;
            this.Survey = true;
            this.SMR = false;
            this.PSFS = true;
            this.PERF = true;
            this.PSFSales = true;


            //SMR
            this.dashboardservice.getFreshLeadCount(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.FreshLeadCount = data;
                }

            }, (error) => {
                console.log(error);
            });


            //SMR
            this.dashboardservice.getFollowUpLeadCount(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.FollowUpLeadCount = data;
                }

            }, (error) => {
                console.log(error);
            });

            //SMR
            this.dashboardservice.getNonContactLeadCount(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.NonContactLeadCount = data;
                }

            }, (error) => {
                console.log(error);
            });


            //SMR
            this.dashboardservice.getBookingLeadCount(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.BookingLeadCount = data;
                }

            }, (error) => {
                console.log(error);
            });



            //SMR
            if (this.session.RoleName == 'DealerAdmin') { this.searchObj.Country_Id = this.session.Country_Id; }
            this.dashboardservice.getServiceDueVsDoneForVehicle(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.ServiceDueObj = data;
                }

            }, (error) => {
                console.log(error);
            });

            //SMR
            this.dashboardservice.getSMRConvertedCountDashboard(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.ConvertedLeadCount = data;
                }

            }, (error) => {
                console.log(error);
            });
            //SMR
            this.dashboardservice.getServiceDue(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.ServiceDue = data;
                }

            }, (error) => {
                console.log(error);
            });

        }
        else if (id == 4) {
            this.Instant = true;
            this.Survey = true;
            this.SMR = true;
            this.PSFS = false;
            this.PERF = true;
            this.PSFSales = true;


            this.dashboardservice.PSFServiceDashboard_bkCounters(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.countersDtl = data;
                    console.log("CountersDtl", this.countersDtl);
                }

            }, (error) => {
                console.log(error);
            });


        }
        else if (id == 5) {
            this.Instant = true;
            this.Survey = true;
            this.SMR = true;
            this.PSFS = true;
            this.PERF = false;
            this.PSFSales = true;
        }
        else if (id == 6) {
            this.Instant = true;
            this.Survey = true;
            this.SMR = true;
            this.PSFS = true;
            this.PERF = true;
            this.PSFSales = false;



            this.dashboardservice.PSFSalesDashboard_bkCounters(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.countersDtl = data;
                    console.log("CountersDtl", this.countersDtl);
                }

            }, (error) => {
                console.log(error);
            });


        }

    }

    selectLanguage(id: number) {
        // this.takeLabelObject();
        console.log("id is..", id);
        console.log("label object", this.labelObj);
        if (id == 2) {
            this.defaultLanguage = true;
            for (var i = 0; i < this.labelObj.length; i++) {
                if (this.labelObj[i].DefaultLanguage == '"CS+SR" - KPI') {
                    this.CSSRKPILabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'Country') {
                    this.CountryLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'Dealer Outlet Code') {
                    this.DealerOutletCodeLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'Switch To') {
                    this.SwitchToLabel = this.labelObj[i].ConvertedLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'Instant Feedback') {
                    this.InstantFeedbackLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'Survey Feedback') {
                    this.SurveyFeedbackLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'Service Reminders') {
                    this.ServiceRemindersLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'Survey Analysis') {
                    this.SurveyAnalysisLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'Post Service Follow-up') {
                    this.PostServiceFollowupLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'Post Sales Follow-up') {
                    this.PostSalesFollowupLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'From Date') {
                    this.FromDateLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'To Date') {
                    this.ToDateLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'Vehicle') {
                    this.VehicleLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'Search') {
                    this.SearchLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'Target Vs Achievement') {
                    this.TargetVsAchievementLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'UPLOAD TARGET') {
                    this.UPLOADTARGETLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'INSTANT FEEDBACK TARGET') {
                    this.FEEDBACKTARGETLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'SERVICE REMINDER TARGET') {
                    this.SMRTARGETLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'EMAIL TARGET') {
                    this.EMAILTARGETLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'POST SERVICE FOLLOWUP TARGET') {
                    this.PSFTARGETLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'Achievement') {
                    this.AchievementLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'Target Vs Achievement - Service Load') {
                    this.TargetVsAchievementServiceLoadLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'Target Vs Achievement - Instant Feedback') {
                    this.TargetVsAchievementInstantFeedbackLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'Target Vs Achievement - Service Reminder') {
                    this.TargetVsAchievementSMRLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'Target Vs Achievement - Email') {
                    this.TargetVsAchievementEmailLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'Target Vs Achievement -Post Service Followup') {
                    this.TargetVsAchievementPSFLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'SERVICE DONE') {
                    this.SERVICEDONELabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'Feedback Captured') {
                    this.FeedbackCapturedLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'CSI') {
                    this.CSILabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'SATISFIED') {
                    this.SATISFIEDLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'Question Wise Rating') {
                    this.QuestionWiseRatingLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'DISSATISFIED') {
                    this.DISSATISFIEDLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'Month wise Customer Satisfaction Trend') {
                    this.MonthwiseCustomerSatisfactionTrendLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'SURVEY SENT') {
                    this.SURVEYSENTLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'TELEPHONIC SURVEY') {
                    this.TELEPHONICSURVEYLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'SURVEY COMPLETED') {
                    this.SURVEYCOMPLETEDLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'Satisfied vs Dis-satisfied Customers') {
                    this.SatisfiedvsDissatisfiedCustomersLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'Service call due') {
                    this.ServicecalldueLabel = this.labelObj[i].DefaultLanguage;
                } if (this.labelObj[i].DefaultLanguage == 'YET TO CONTACT') {
                    this.YETTOCONTACTLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'CONTACTED') {
                    this.CONTACTEDLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'NON CONTACTABLE') {
                    this.NONCONTACTABLELabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'BOOKING') {
                    this.BOOKINGLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'SERVICE CONVERTED') {
                    this.SERVICECONVERTEDLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'Service Call Due Vs Service Done') {
                    this.ServiceCallDueVsServiceDoneLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'TOTAL DUE') {
                    this.TOTALDUELabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'Highly Satisfied') {
                    this.HighlySatisfiedLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'Highly Dissatisfied') {
                    this.HighlyDissatisfiedLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'Survey submitted via SMS') {
                    this.SurveysubmittedviaSMSLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'Survey submitted via Mail') {
                    this.SurveysubmittedviaMailLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'Survey submitted via Telephonic') {
                    this.SurveysubmittedviaTelephonicLabel = this.labelObj[i].DefaultLanguage;
                }
                if (this.labelObj[i].DefaultLanguage == 'SURVEY COMPLETED') {
                    this.SURVEYCOMPLETEDLabel = this.labelObj[i].DefaultLanguage;
                }
            }
        }

        if (id > 2) {
            this.defaultLanguage = false;
            for (var i = 0; i < this.labelObj.length; i++) {
                if (this.labelObj[i].Language_Id == id) {
                    if (this.labelObj[i].DefaultLanguage == '"CS+SR" - KPI') {
                        this.CSSRKPILabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'Switch To') {
                        this.SwitchToLabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'Instant Feedback') {
                        this.InstantFeedbackLabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'Survey Feedback') {
                        this.SurveyFeedbackLabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'Service Reminders') {
                        this.ServiceRemindersLabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'Survey Analysis') {
                        this.SurveyAnalysisLabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'Post Service Follow-up') {
                        this.PostServiceFollowupLabel = this.labelObj[i].DefaultLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'Post Sales Follow-up') {
                        this.PostSalesFollowupLabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'From Date') {
                        this.FromDateLabel = this.labelObj[i].ConvertedLanguage;
                    } if (this.labelObj[i].DefaultLanguage == 'To Date') {
                        this.ToDateLabel = this.labelObj[i].ConvertedLanguage;
                    } if (this.labelObj[i].DefaultLanguage == 'Vehicle') {
                        this.VehicleLabel = this.labelObj[i].ConvertedLanguage;
                    } if (this.labelObj[i].DefaultLanguage == 'Search') {
                        this.SearchLabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'Target Vs Achievement') {
                        this.TargetVsAchievementLabel = this.labelObj[i].ConvertedLanguage;
                    } if (this.labelObj[i].DefaultLanguage == 'UPLOAD TARGET') {
                        this.UPLOADTARGETLabel = this.labelObj[i].ConvertedLanguage;
                    } if (this.labelObj[i].DefaultLanguage == 'INSTANT FEEDBACK TARGET') {
                        this.FEEDBACKTARGETLabel = this.labelObj[i].ConvertedLanguage;
                    } if (this.labelObj[i].DefaultLanguage == 'SERVICE REMINDER TARGET') {
                        this.SMRTARGETLabel = this.labelObj[i].ConvertedLanguage;
                    } if (this.labelObj[i].DefaultLanguage == 'EMAIL TARGET') {
                        this.EMAILTARGETLabel = this.labelObj[i].ConvertedLanguage;
                    } if (this.labelObj[i].DefaultLanguage == 'POST SERVICE FOLLOWUP TARGET') {
                        this.PSFTARGETLabel = this.labelObj[i].ConvertedLanguage;
                    } if (this.labelObj[i].DefaultLanguage == 'Achievement') {
                        this.AchievementLabel = this.labelObj[i].ConvertedLanguage;
                    }

                    if (this.labelObj[i].DefaultLanguage == 'Target Vs Achievement - Service Load') {
                        this.TargetVsAchievementServiceLoadLabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'Target Vs Achievement - Instant Feedback') {
                        this.TargetVsAchievementInstantFeedbackLabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'Target Vs Achievement - Service Reminder') {
                        this.TargetVsAchievementSMRLabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'Target Vs Achievement - Email') {
                        this.TargetVsAchievementEmailLabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'Target Vs Achievement -Post Service Followup') {
                        this.TargetVsAchievementPSFLabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'SERVICE DONE') {
                        this.SERVICEDONELabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'Feedback Captured') {
                        this.FeedbackCapturedLabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'CSI') {
                        this.CSILabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'SATISFIED') {
                        this.SATISFIEDLabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'Question Wise Rating') {
                        this.QuestionWiseRatingLabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'DISSATISFIED') {
                        this.DISSATISFIEDLabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'Month wise Customer Satisfaction Trend') {
                        this.MonthwiseCustomerSatisfactionTrendLabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'SURVEY SENT') {
                        this.SURVEYSENTLabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'TELEPHONIC SURVEY') {
                        this.TELEPHONICSURVEYLabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'SURVEY COMPLETED') {
                        this.SURVEYCOMPLETEDLabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'Satisfied vs Dis-satisfied Customers') {
                        this.SatisfiedvsDissatisfiedCustomersLabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'Service call due') {
                        this.ServicecalldueLabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'YET TO CONTACT') {
                        this.YETTOCONTACTLabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'CONTACTED') {
                        this.CONTACTEDLabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'NON CONTACTABLE') {
                        this.NONCONTACTABLELabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'BOOKING') {
                        this.BOOKINGLabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'SERVICE CONVERTED') {
                        this.SERVICECONVERTEDLabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'Service Call Due Vs Service Done') {
                        this.ServiceCallDueVsServiceDoneLabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'TOTAL DUE') {
                        this.TOTALDUELabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'Highly Satisfied') {
                        this.HighlySatisfiedLabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'Highly Dissatisfied') {
                        this.HighlyDissatisfiedLabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'Survey submitted via SMS') {
                        this.SurveysubmittedviaSMSLabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'Survey submitted via Mail') {
                        this.SurveysubmittedviaMailLabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'Survey submitted via Telephonic') {
                        this.SurveysubmittedviaTelephonicLabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'SURVEY COMPLETED') {
                        this.SURVEYCOMPLETEDLabel = this.labelObj[i].ConvertedLanguage;
                    }
                    if (this.labelObj[i].DefaultLanguage == 'Country') {
                        this.CountryLabel = this.labelObj[i].ConvertedLanguage;
                    }

                    if (this.labelObj[i].DefaultLanguage == 'Dealer Outlet Code') {
                        this.DealerOutletCodeLabel = this.labelObj[i].ConvertedLanguage;
                    }
                }
            }
        }
    }


    GetDealerByCountry(id: number) {
        if (id == 0) {
            this.dashboardservice.getDealerOutletList(this.session.User_Id).subscribe((data) => {
                this.OutletObj = data;
            }, (error) => {
                console.log(error);
            });
        }
        else {
            this.dashboardservice.getOutLetListByCountry(id).subscribe((data) => {
                this.OutletObj = data;
            }, (error) => {
                console.log(error);
            });
        }

    }



    changeCountry(id: number) {
        this.dashboardrx.sendChangeCountryEvent({ id: id, obj: this.searchObj });


        if (id == 1) {
            //IFC
            this.dashboardservice.dashboard_bkCounters(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.countersDtl = data;
                    console.log("CountersDtl", this.countersDtl);
                }
            }, (error) => {
                console.log(error);
            });

            this.dashboardservice.instantSatisfactionTrend(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.InsSatisfactionObj = data;
                }
            }, (error) => {
                console.log(error);
            });

            //IFC
            this.dashboardservice.questionFeedbackReport(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.InsQuestionSatisfactionObj = data;
                }
            }, (error) => {
                console.log(error);
            });

            //IFC
            this.dashboardservice.getDealerCSIForInstantFeedback(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.CSI = data;
                }

            }, (error) => {
                console.log(error);
            });

        };
        if (id == 2) {

            this.dashboardservice.surveyDashboard_bkCounters(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.countersDtl = data;
                    console.log("surveyDashboard_bkCountersCountersDtl", this.countersDtl);
                }

            }, (error) => {
                console.log(error);
            });


            //Survey
            this.dashboardservice.getCustomerSatisfaction(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.SatisfactionObj = data;

                }

            }, (error) => {
                console.log(error);
            });

            //Survey
            this.dashboardservice.questionSurveyAvgScore(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.QuestionSatisfactionObj = data;
                }
            }, (error) => {
                console.log(error);
            });


            //Survey
            this.dashboardservice.dashboard_bkSurveyRatingAnalysis(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.RatingAnalysis = data;
                }

            }, (error) => {
                console.log(error);
            });


            //Survey
            this.dashboardservice.getDealerCSIForSurvey(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.CSISurvey = data;
                }

            }, (error) => {
                console.log(error);
            });
        };
        if (id == 3) {
            //SMR
            this.dashboardservice.getSMRConvertedCountDashboard(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.ConvertedLeadCount = data;
                }

            }, (error) => {
                console.log(error);
            });


            //SMR
            this.dashboardservice.getFreshLeadCount(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.FreshLeadCount = data;
                }

            }, (error) => {
                console.log(error);
            });

            //SMR

            this.dashboardservice.getFollowUpLeadCount(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.FollowUpLeadCount = data;
                }

            }, (error) => {
                console.log(error);
            });

            //SMR
            this.dashboardservice.getNonContactLeadCount(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.NonContactLeadCount = data;
                }

            }, (error) => {
                console.log(error);
            });

            //SMR
            this.dashboardservice.getBookingLeadCount(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.BookingLeadCount = data;
                }

            }, (error) => {
                console.log(error);
            });


            //SMR
            if (this.appService.takeSession().RoleName == 'DealerAdmin') { this.searchObj.Country_Id = this.appService.takeSession().Country_Id; }

            this.dashboardservice.getServiceDueVsDoneForVehicle(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.ServiceDueObj = data;
                }

            }, (error) => {
                console.log(error);
            });

            //SMR
            this.dashboardservice.getServiceDue(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.ServiceDue = data;
                }

            }, (error) => {
                console.log(error);
            });

        };
        if (id == 4) {


            this.dashboardservice.PSFServiceDashboard_bkCounters(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.countersDtl = data;
                    console.log("CountersDtl", this.countersDtl);
                }

            }, (error) => {
                console.log(error);
            });

            //PSF
            //DashboardService.PSFSatisfactionTrend($scope.SerachObj).then(function (success) {
            //    if (success.data != null) {
            //        $scope.PSFSatisfactionObj = success.data;

            //    }

            //}, function (error) {
            //    console.log(error);
            //});


        };
        if (id == 6) {

            this.dashboardservice.PSFSalesDashboard_bkCounters(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.countersDtl = data;
                    console.log("CountersDtl", this.countersDtl);
                }

            }, (error) => {
                console.log(error);
            });

        };
        if (id == 5) {

            //CS&SRKPI
            this.dashboardservice.getTargetAchivement(this.searchObj).subscribe((data: any) => {
                if (data != null) {
                    this.TGTData = data;
                    console.log(this.TGTData);
                    this.TGTACH = [
                        {
                            'TGT': data.SerTarget,
                            'ACH': (data.SerAch * 100).toFixed(2),
                            'TGTType': 'Regularity - Data Uplaod (%)'

                        },
                        {
                            'TGT': data.IFCTarget,
                            'ACH': (data.IFCAch * 100).toFixed(2),
                            'TGTType': 'IFC (%)'
                        },
                        {
                            'TGT': data.SMRTarget,
                            'ACH': (data.SMRAch * 100).toFixed(2),
                            'TGTType': 'SMR (%)'
                        },
                        {
                            'TGT': data.EmailTarget,
                            'ACH': (data.EmailAch * 100).toFixed(2),
                            'TGTType': 'EMAIL (%)'
                        },
                        {
                            'TGT': data.PSFTarget,
                            'ACH': (data.PSFAch * 100).toFixed(2),
                            'TGTType': 'PSF (%)'
                        },
                    ];

                    console.log(this.TGTACH);
                }

            }, (error) => {
                console.log(error);
            });

            this.AllMonth = _.cloneDeep(this.searchObj);
            this.AllMonth.FromDate = '';

            this.CurrntDate = new Date();
            this.Month = this.CurrntDate.getMonth() + 1;
            this.CurrntYear = this.CurrntDate.getFullYear();
            if (this.Month < 6) {

                this.NewMonth = 13 + (this.Month - 6);
                this.NewYear = this.CurrntYear - 1;

                this.Newdate = new Date(this.NewYear, this.NewMonth - 1, 1);

                this.Newdate = this.datePipe.transform(this.Newdate, 'dd-MMM-yyyy');
                console.log(this.Newdate);
                this.AllMonth.FromDate = this.Newdate;

            }
            if (this.Month >= 6) {

                this.NewMonth = 1 + (this.Month - 6);
                this.NewYear = this.CurrntYear;
                this.Newdate = new Date(this.NewYear, this.NewMonth - 1, 1);
                console.log(this.Newdate);

                this.AllMonth.FromDate = this.Newdate;
            }


            this.AllMonth.ToDate = this.datePipe.transform(this.searchObj.ToDate, 'dd-MMM-yyyy');


            //CS&SRKPI
            this.dashboardservice.getMonthWiseTargetAchivementForService(this.AllMonth).subscribe((data) => {
                if (data != null) {
                    this.MNTHTGTData = data;

                }

            }, (error) => {
                console.log(error);
            });


            //CS&SRKPI
            this.dashboardservice.getMonthWiseTargetAchivementForIFC(this.AllMonth).subscribe((data) => {
                if (data != null) {
                    this.IFC = data;

                }

            }, (error) => {
                console.log(error);
            });

            //CS&SRKPI
            this.dashboardservice.getMonthWiseTargetAchivementForSMR(this.AllMonth).subscribe((data) => {
                if (data != null) {
                    this.SMRTGTList = data;

                }

            }, (error) => {
                console.log(error);
            });


            //CS&SRKPI
            this.dashboardservice.getMonthWiseTargetAchivementForEmail(this.AllMonth).subscribe((data) => {
                if (data != null) {
                    this.Email = data;

                }

            }, (error) => {
                console.log(error);
            });

            //CS&SRKPI
            this.dashboardservice.getMonthWiseTargetAchivementForPSF(this.AllMonth).subscribe((data) => {
                if (data != null) {
                    this.PSF = data;

                }

            }, (error) => {
                console.log(error);
            });


        };

    }

    takeLabelObject() {
        let obs: Observable<any> = this.dashboardservice.getLabel();
        obs.subscribe(
            (data: any) => {
                console.log("label object data is", data);
                this.labelObj = data;
                this.selectLanguage(this.appService.giveSelectedLang());
                console.log("label object in label service", this.labelObj.length);
                //this.SurveyType_Id = 5;

                //  this.selectLanguage(this.appService.giveSelectedLang());

                // console.log("session is....",this.appService.takeSession().RoleName);
                /*  console.log("post servicelabel is...",this.PostServiceFollowupLabel);
                 console.log("post servicelabel2 is...",this.SurveyAnalysisLabel); */
            }, (err: any) => {
                console.log("error is", err);
            }
        );
    }

    ngOnInit(): void {
        this.takeLabelObject();
        this.takeSearchObject();

        this.Instant = true;
        this.Survey = true;
        this.SMR = true;
        this.PSFS = true;
        this.PERF = false;
        this.PSFSales = true;

        this.Role = this.appService.takeSession().RoleName;



        //this.dashboardlabel.selectLanguage(this.appService.giveSelectedLang());



        this.dashboardservice.getDealerOutletList(this.appService.takeSession().User_Id).subscribe(data => {
            this.OutletObj = data;
        }, error => {
            console.log(error);
        })

        this.dashboardservice.getVehicleTypeForDDL().subscribe((data) => {
            this.VehicleTypeObj = data;

        }, (error) => {
            console.log(error);
        });



        this.dashboardservice.getCountryList().subscribe((data) => {
            this.countryObj = data;

        }, (error) => {
            console.log(error);
        });

        //  console.log("get country list--counterdtl",this.countersDtl);
        console.log("CSSRKPILabel infilter on init is..", this.CSSRKPILabel);
        console.log("search object is..", this.searchObj);
    }

}
