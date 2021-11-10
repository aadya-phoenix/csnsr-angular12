import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../common-services/loading.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  constructor(private loader:LoadingService) { }

   loading$ = this.loader.loading$; 

  ngOnInit(): void {
  }

}
