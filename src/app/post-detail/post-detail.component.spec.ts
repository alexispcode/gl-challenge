import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Location } from '@angular/common';

import { PostDetailComponent } from './post-detail.component';
import { CapitalizePipe } from '../shared/capitalize.pipe';
import { PostsServiceStub, PostsService } from '../core/posts-service.stub';

const locationServiceStub = {
  back: jasmine.createSpy('back')
};

describe('PostDetailComponent', () => {
  let component: PostDetailComponent;
  let fixture: ComponentFixture<PostDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostDetailComponent, CapitalizePipe],
      imports: [RouterTestingModule],
      providers: [
        { provide: Location, useValue: locationServiceStub },
        { provide: PostsService, useClass: PostsServiceStub },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go back', () => {
    component.goBack();
    expect(locationServiceStub.back).toHaveBeenCalled();
  });
});
