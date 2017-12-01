import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Comment } from '../shared/comment.model';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostCommentsComponent implements OnInit {
  @Input() comments: Comment[];

  constructor() { }

  ngOnInit() {
  }

}
