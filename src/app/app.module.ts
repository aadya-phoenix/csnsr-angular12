import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { CookieModule } from 'ngx-cookie';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CsnsrComponent } from './csnsr/csnsr/csnsr.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { CsnsrModule } from './csnsr/csnsr.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { SpinnerComponent } from './spinner/spinner.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NetworkInterceptor } from './network.interceptor';
import { DashboardFeedbackComponent } from './dashboard-feedback/dashboard-feedback/dashboard-feedback.component';



const appRoutes: Routes=[
  {
    path:'csnsr', component:CsnsrComponent,
  children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'dashboard_fb', component:DashboardFeedbackComponent},
  ]
  },
//{path:'dashboard', component:DashboardComponent},

{path:'login', component:LoginComponent},
 { path:'**', redirectTo:'/login'} 
]

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent
  ],
  imports: [
    LoginModule,
    DashboardModule,
    CsnsrModule,
    CookieModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule

    
    
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:NetworkInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent],
  exports:[ ]
})
export class AppModule { }
