import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { PostsService } from './posts-service.service';
export * from './posts-service.service';

export class PostsServiceStub {
  getPosts(): Observable<any> {
    const response = [
      {
        userId: 1,
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita'
      },
      {
        userId: 1,
        id: 2,
        title: 'qui est esse',
        body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores'
      }
    ];

    return Observable.of(response);
  }

  getComments(): Observable<any> {
    const mock = [
      {
        postId: 1,
        id: 1,
        name: 'id labore ex et quam laborum',
        email: 'Eliseo@gardner.biz',
        body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos'
      },
      {
        postId: 1,
        id: 2,
        name: 'quo vero reiciendis velit similique earum',
        email: 'Jayne_Kuhic@sydney.com',
        body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati '
      }];

    return Observable.of(mock);
  }

  getPostWithComments(): Observable<any> {
    const response = [
      {
        userId: 1,
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita',
        comments: [
          {
            postId: 1,
            id: 1,
            name: 'id labore ex et quam laborum',
            email: 'Eliseo@gardner.biz',
            body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos'
          },
          {
            postId: 1,
            id: 2,
            name: 'quo vero reiciendis velit similique earum',
            email: 'Jayne_Kuhic@sydney.com',
            body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati '
          }
        ]
      }
    ];
    return Observable.of(response);
  }
}
