import { ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { NewPostComponent } from '../new-post/new-post.component';
import { PostComponent } from '../post/post.component';
import { BoardService } from '../services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class BoardComponent implements OnInit {
  postList = JSON.parse(localStorage.getItem("posts"));
  subscriptions: Subscription = new Subscription();
  ref: DynamicDialogRef;
  constructor(public dialogService: DialogService, private boardService: BoardService, public cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    // update board when after change
    this.subscriptions.add(this.boardService.subjectAsObs.subscribe(() => {
      this.postList = JSON.parse(localStorage.getItem("posts"));
      this.cd.detectChanges();
    }))
  }

  createPost() {
    this.ref = this.dialogService.open(NewPostComponent, {
      header: 'Add new note',
      width: '30%',
    });
  }

  editPost(post, index) {
    this.ref = this.dialogService.open(NewPostComponent, {
      header: 'Edit note',
      width: '30%',
      data: {
        post: post,
        index: index
      }
    });
  }

  trackByPostsFunction(index, item) {
    if (!item) {
      return null;
    }
    return index;
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
    this.subscriptions.unsubscribe();
  }
}