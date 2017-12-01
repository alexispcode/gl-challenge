import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PostsService } from '../core/posts-service.service';
import { Post } from '../shared/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Observable<Post[]>;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
  }

}
