import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import * as _ from "lodash";
import { AppCommonService } from 'src/app/app-common.service';
import { DashboardApiService } from '../../dashboard-common-services/dashboard-api.service';
import { DashboardLabelService } from '../../dashboard-common-services/dashboard-label.service';
import { DashboardService } from '../../dashboard-common-services/dashboard.service';
import { DashboardRxService } from '../../dashboard-common-services/dashboard-rx.service';


@Component({
    selector: 'app-dashboard-counters',
    templateUrl: './dashboard-counters.component.html',
    styleUrls: ['./dashboard-counters.component.css']
})
export class DashboardCountersComponent implements OnInit {


    labelObj: any;
    defaultLanguage = true;
    session: any;

    Instant: boolean;
    Survey: boolean;
    SMR: boolean;
    PSFS: boolean;
    PERF: boolean;
    PSFSales: boolean;

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

    searchObj: any;
    countersDtl: any;
    InsSatisfactionObj: any;
    InsQuestionSatisfactionObj: any;
    CSI: any;
    SatisfactionObj: any;
    QuestionSatisfactionObj: any;
    RatingAnalysis: any;
    CSISurvey: any;
    ConvertedLeadCount: any;
    FollowUpLeadCount: any;
    FreshLeadCount: any;
    NonContactLeadCount: any;
    BookingLeadCount: any;
    ServiceDueObj: any;
    ServiceDue: any;
    TGTData: any;
    TGTACH: any;
    IFC: any;
    SMRTGTList: any;
    Email: any;
    PSF: any;


    AllMonth: any;
    CurrntDate: any;
    Month: any;
    CurrntYear: any;
    NewMonth: any;
    NewYear: any;
    Newdate: any;
    MNTHTGTData: any;

    toggleEventSubscription: Subscription;
    changeCountrySubscription: Subscription;




    constructor(private dashboardlabel: DashboardLabelService, private dashapi: DashboardApiService,
        private appService: AppCommonService, private dashboardservice: DashboardService, private datePipe: DatePipe,
        private dashboardrx: DashboardRxService) {
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


        this.Instant = false;
        this.Survey = false;
        this.SMR = false;
        this.PSFS = false;
        this.PERF = true;
        this.PSFSales = false;

        this.toggleEventSubscription = this.dashboardrx.getToggleEvent().subscribe((data) => {
            this.searchObj = data.obj;
            this.toggleDashboard(data.id);
        });

        this.changeCountrySubscription = this.dashboardrx.getChangeCountryEvent().subscribe((data) => {
            this.searchObj = data.obj;
            this.changeCountry(data.id);
        })

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

    changeCountry(id: number) {

        if (id == 1) {
            //IFC
            console.log("inside change country", id);
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
            console.log("inside change country", id);
            this.dashboardservice.surveyDashboard_bkCounters(this.searchObj).subscribe((data) => {
                if (data != null) {
                    this.countersDtl = data;
                    console.log("CountersDtl survey", this.countersDtl);
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
            console.log("inside change country", id);
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
            console.log("inside change country", id);

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
            console.log("inside change country", id);
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
                    console.log("TGTdata", this.TGTData);
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


    toggleDashboard(id: number) {
        //this.dashapi.toggleDashboard(id);
        if (id == 1) {
            this.Instant = true;
            this.Survey = false;
            this.SMR = false;
            this.PSFS = false;
            this.PERF = false;
            this.PSFSales = false;


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
            this.Instant = false;
            this.Survey = true;
            this.SMR = false;
            this.PSFS = false;
            this.PERF = false;
            this.PSFSales = false;


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
                    console.log("CSISurvey", this.CSISurvey);
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
            this.Instant = false;
            this.Survey = false;
            this.SMR = true;
            this.PSFS = false;
            this.PERF = false;
            this.PSFSales = false;


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
            this.Instant = false;
            this.Survey = false;
            this.SMR = false;
            this.PSFS = true;
            this.PERF = false;
            this.PSFSales = false;


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
            this.Instant = false;
            this.Survey = false;
            this.SMR = false;
            this.PSFS = false;
            this.PERF = true;
            this.PSFSales = false;
        }
        else if (id == 6) {
            this.Instant = false;
            this.Survey = false;
            this.SMR = false;
            this.PSFS = false;
            this.PERF = false;
            this.PSFSales = true;



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

    takeLabelObject() {
        let obs: Observable<any> = this.dashboardservice.getLabel();
        obs.subscribe(
            (data: any) => {
                console.log("data is", data);
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
        this.session = this.appService.takeSession();
        this.takeLabelObject();
        this.takeSearchObject();
        //this.dashboardlabel.takeLabelObject();
        //this.selectLanguage(this.appService.giveSelectedLang());
        //this.dashapi.changeCountry(this.appService.SurveyType_Id);
        //this.toggleDashboard(this.dashapi.toggleDashboardId);
        //this.changeCountry(this.dashapi.changeCountryId);
        //console.log("this.countersDtl...",this.countersDtl);
    }

    /*  showDetail(){
      DashboardService.ShareObj = $scope.SerachObj;
      $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'partial/QuestionTrend.html',
          controller: 'DashboardPopupController',
          size: 'lg',
          resolve: {
              items: function () {
                  return 1;
              }
          }
      }).result.then(
  function () {
  
  },
  function () {
  
  });
  }; */

}
