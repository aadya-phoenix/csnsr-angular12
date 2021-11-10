import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppCommonService implements OnInit{

   
  SelectedLang:number;
  sess:any;
  sess2:any;
  session :any;
  Role:any;
  DealerName:any;
  Username:any;
  Userdetail:any;
  SurveyType_Id= 5

   constructor() { 
    this.SelectedLang = 2;
    this.SurveyType_Id= 5
   }
  
  init(){
    this.SelectedLang = 2;
    this.Role = this.session.RoleName;
    if (this.Role == 'Distributor') {
     this.DealerName = 'Suzuki ' + this.session.CountryName;
       }
 else {
     this.DealerName = this.session.DealerName + '(' + this.session.OutletName + ')';
     }

     this.Username = this.session.UserName;
       console.log(this.session);
        this.Userdetail= this.session;
  }
  ngOnInit(): void {
    //this.SelectedLang = 2;
   
    
  }

  giveSurveyId(){
    return this.SurveyType_Id = 5;
  }

  giveSelectedLang(){
    return this.SelectedLang = 2;
  }
  takeSession(){
    
     this.sess = sessionStorage.getItem("app");
     this.session = JSON.parse(this.sess);
     return this.session;
  
  }
}