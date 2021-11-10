import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { CsnsrRoutingModule } from './csnsr-routing.module';
import { CsnsrComponent } from './csnsr/csnsr.component';


@NgModule({
  declarations: [
    CsnsrComponent
  ],
  imports: [
    CommonModule,
    CsnsrRoutingModule,
    RouterModule
  ]
})
export class CsnsrModule { }
