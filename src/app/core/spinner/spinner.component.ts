import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { LoadingIndicatorService } from '../../core/loading-indicator.service';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  isLoading = false;
  errorMessage: string;

  constructor(
    private loadingIndicatorService: LoadingIndicatorService) {

    loadingIndicatorService
      .onLoadingChanged
      .subscribe(status => this.isLoading = status);
  }

  ngOnInit() {}

}
