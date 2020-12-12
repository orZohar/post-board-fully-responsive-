import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from 'src/app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  subject = new Subject<any>(); // subject to update board in any change
  subjectAsObs = this.subject.asObservable();

  constructor() { }

  savePost(item: Post) {
    var postList = null;
    item.date = new Date();
    
    postList = JSON.parse(localStorage.getItem("posts"));
    if (postList && postList.length > 0) {
      postList.unshift(item);
    } else {
      postList = [];
      postList.unshift(item);
    }
    localStorage.setItem("posts", JSON.stringify(postList));
    this.subject.next();
  }

  editPost(item, index) {
    var postList = JSON.parse(localStorage.getItem("posts"));
    postList[index] = item;
    localStorage.setItem("posts", JSON.stringify(postList));
    this.subject.next();
  }

  deletePost(index) {
    var postList = JSON.parse(localStorage.getItem("posts"));
    postList.splice(index, 1);
    localStorage.setItem('posts', JSON.stringify(postList));
    this.subject.next();
  }
}