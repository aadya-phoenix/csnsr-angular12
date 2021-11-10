import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2'
import { CryptService } from './login-common-services/crypt.service';
import { LoginService } from './login-common-services/login.service';
import * as $ from 'jquery';
import { AppCommonService } from 'src/app/app-common.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
      userName:string;
      password:string;
      userData:any;
      Login :boolean;
      Forgot :boolean;
      FirstLogin :boolean;
      currentPassword:any;
      newPassword:any;
      forgotUserName:string;
      session:any;
  constructor( private router:Router, private cryptService:CryptService,private loginService:LoginService,
    private appService:AppCommonService)
     
  {
    this.userName="";
    this.password="";
    this.Login = true;
    this.Forgot = false;
    this.FirstLogin = false;
    this.currentPassword="";
    this.newPassword="";
    this.forgotUserName="";
    this.session = sessionStorage.setItem("app","");  
  }

   init(){
    this.Login = true;
    this.Forgot = false;
    this.FirstLogin = false;
    sessionStorage.setItem("app", "");
   /*  this.coords = geolocation.getLocation().then(function (data) {

        console.log("Check location", data);
    }); */
   }

  testLogin(username:string, pwd:string):any{
    sessionStorage.setItem("app", "");
    if (!username) {
      Swal.fire('Error', 'UserName can not empty', 'error');
        return false;
             }
      if (!pwd) {
        Swal.fire('Error', 'Password can not empty', 'error');
      return false;
               } 
    
       var password = this.cryptService.hash(pwd);
       let obs:Observable<any>=this.loginService.authincateLogin(username,password);
       obs.subscribe((data):any=>{
       console.log("Customer Login Data...",data);
       this.userData= data;
       if (data != null && data.ErrorMessage == null){
        if(data.Country_Id != 15){
         if (!data.IsGeoFencing) {
          sessionStorage.setItem("app",JSON.stringify(data));
          this.session = sessionStorage.getItem("app");
          console.log("mydata",JSON.parse(this.session)
          );
          console.log("session..",this.session);
          if (data.IsFirstLogin == true){
            this.FirstLogin = true;
            this.Login = false;
            this.Forgot = false;
          }
          else
          
              {
                if (this.userData.RoleName != 'TabletLogIn') {
                  this.router.navigateByUrl('/csnsr');
              }
              else {
                window.location.href = './partial/CustomerFeedbackTB.html';
               } 
            }  
         }  
           // if (data.LastAction != 'Login'){
             
                  // expireDate.setDate(expireDate.getDate() + 1);
               //    this.cookieService.set("CSSRGUID", success.data.GUID, { 'expires': expireDate });
             //   }
          else 
          {
            this.userName = username;
            this.password = password;
          //  this.prceedGeofencing();
          }
          
        }
        else{
          alert("Please use new link to login  http://smipl.suzukifeedback.com/login.html");
          window.location.href = 'http://smipl.suzukifeedback.com/login.html';
        }  
      }
      else
                 {
                  Swal.fire(data.ErrorMessage);
                 }
          },error=>{
              console.log(error);
            });
        };
    
 

forgotPassword(username:string):any{
  if (!username) {
    Swal.fire('Error', 'UserName can not empty', 'error');
    return false;
    }
  this.loginService.fortgotPassword(username).subscribe(
    success=>{
      console.log(success);
     
      Swal.fire(success);
      this.init();
      },error=>{
        console.log(error);
      });

};

toggleDiv(obj:string){
  
    if(obj=='forgot')
    {
        this.Login = false;
        this.Forgot = true;
        this.FirstLogin = false;
    }         
    else
    {
      this.Login = true;
      this.Forgot = false;
      this.FirstLogin = false;
    }
  }; 

  setNewPassword( currentPassword:string, newPassword:string):any{
    var fd = new FormData();
    if (currentPassword == null || currentPassword == '') {
        Swal.fire('error', 'Please enter current password', 'error');
        return false;

    }
    if (newPassword == null || newPassword == '') {
      Swal.fire('error', 'Please enter new password', 'error');
        return false;

    }
    if (currentPassword == newPassword)
    {
      Swal.fire('error', 'Current & new Password cannot be same', 'error');
        return false;
    }

   // var userdetails = JSON.parse(sessionStorage.getItem("app"));
    var CurrPassword = CryptoJS.SHA1(currentPassword).toString();
    var NewPassword = CryptoJS.SHA1(newPassword).toString();

    var obj = {
    //    UserId: userdetails.User_Id,
        CurrentPassword: CurrPassword,
        NewPassword: NewPassword,
    };

    this.loginService.saveForm(obj).subscribe(success=>{
      console.log(success);
      Swal.fire('Success'+ success + 'success');
               this.init();
           }, error=> {
            console.log(error);
    });
  };


  prceedGeofencing(){
    if (navigator.geolocation) {
      console.log("geolocation");
  }
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};
navigator.geolocation.getCurrentPosition( (position)=> {
  console.log(position);
  const lat = position.coords.latitude;
  const lan = position.coords.longitude;

  var Password = this.cryptService.hash(this.password);  

  let obs:Observable<any> = this.loginService.authenticateLoginWithCoordinates(this.userName,this.password,lat,lan);
   
  obs.subscribe(
    (data):any=>{
      console.log(data);
      if (data != null && data.ErrorMessage == null){

        sessionStorage.setItem("app", JSON.stringify(data));

        if (data.IsFirstLogin == true) {
            this.FirstLogin = true;
            
            this.Login = false;
            this.Forgot = false;
      }
      else {
        if (this.userData.RoleName != 'TabletLogIn') {
               window.location.href = './index.html';
           }
           else {
               window.location.href = './partial/CustomerFeedbackTB.html';
           } 
     }
      }
      else {

      //  this.ShowGeoFencingScreen = false;
        this.Login = true;
        this.Forgot = false;
        this.FirstLogin = false;

        this.userName = '';
        this.password = '';

        Swal.fire(data.ErrorMessage);
       }
    }, error=>{
      console.log(error);
    });
  },(error)=> {
    console.log(error);
    Swal.fire('Warning', "Please enable your location", 'warning');
}, options);
  } 

 ngOnInit(): void {
    $(document).ready(function () {
      $("#help-btn").click(function () {
          $("#helpdesk").toggleClass("main");
      });
  }); 
  }

}
