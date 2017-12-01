import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClarityModule } from 'clarity-angular';

import { PostsService } from './posts-service.service';
import { LoadingIndicatorService } from './loading-indicator.service';
import { LoadingIndicatorInterceptor } from './loading-interceptor.service';

import { SpinnerComponent } from './spinner/spinner.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule
  ],
  declarations: [SpinnerComponent, HeaderComponent],
  providers: [
    PostsService,
    LoadingIndicatorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingIndicatorInterceptor,
      multi: true
    }],
  exports: [SpinnerComponent, HeaderComponent]
})
export class CoreModule { }
