import { Comment } from './comment.model';

export class Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments?: Comment[];
}
