import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';

import { Post } from '../shared/post.model';

@Injectable()
export class PostsService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts`);
  }

  getComments(postId: string): Observable<any> {
    const endPoint = `${this.apiUrl}/comments`;

    const params: HttpParams = new HttpParams().set('postId', postId);

    return this.http.get(endPoint, { params });
  }

  getPostWithComments(postId): Observable<any> {
    const postEndPoint = `${this.apiUrl}/posts/${postId}`;
    const post$: Observable<any> = this.http.get(postEndPoint);

    const comments$ = this.getComments(postId);

    const finalResponse$ = Observable.forkJoin(post$, comments$)
                                      .map((responses) => {
                                        const post: Post = { ...responses[0], comments: responses[1] };
                                        return post;
                                      })
                                      .catch((error) => Observable.throw(error));

    return finalResponse$;
  }

}
