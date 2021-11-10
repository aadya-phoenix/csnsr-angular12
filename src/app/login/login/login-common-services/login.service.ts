import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private httpClient:HttpClient) { }
  appUrl="http://localhost:52268/api/";

  authincateLogin(username:string, password:string){
    return this.httpClient.get( this.appUrl + 'Login/Login/?UserName=' + username + '&Password=' + password);
   };
    
   loginLog(data:any){
    return this.httpClient.post( this.appUrl + 'Login/LoginLog/', data, {});
   };

   fortgotPassword(username:string){
    return this.httpClient.get( this.appUrl + 'Login/FortgotPassword/?UserName=' + username);
   };

   saveForm(data:any){
    return this.httpClient.post( this.appUrl + 'Login/FreshLogin/', data, {});
   }

   authenticateLoginWithCoordinates(username:string, password:string, lat:any, lan:any){
  return this.httpClient.get( this.appUrl + 'Login/LoginWithCoordinates/?UserName=' + username + '&Password=' + password + '&lat=' + lat + '&lan=' + lan);
   }
}
