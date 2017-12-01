import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';

import { PostsService } from '../core/posts-service.service';
import { Post } from '../shared/post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Observable<Post>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postService: PostsService
  ) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    const postId = this.route.snapshot.paramMap.get('id');

    this.post = this.postService.getPostWithComments(postId);
  }

  goBack(): void {
    this.location.back();
  }

}
