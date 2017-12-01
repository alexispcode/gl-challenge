import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EventEmitter } from '@angular/core';

import { SpinnerComponent } from './spinner.component';
import { LoadingIndicatorService } from '../loading-indicator.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

class LoaderIndicatorServiceStub {
  onLoadingChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
}

describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;
  let service: LoadingIndicatorService;
  let spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpinnerComponent],
      providers: [{ provide: LoadingIndicatorService, useClass: LoaderIndicatorServiceStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
    service = TestBed.get(LoadingIndicatorService);
    spy = spyOn(service, 'onLoadingChanged');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize isLoading in false ', () => {
    expect(component.isLoading).toBeFalsy();
  });

  it('should set to true while isLoading', () => {
    service.onLoadingChanged.emit(true);
    expect(component.isLoading).toBeTruthy();
  });
});
