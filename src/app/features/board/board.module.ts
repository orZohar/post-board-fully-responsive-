import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board/board.component';
import { PostComponent } from './post/post.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewPostComponent } from './new-post/new-post.component';
import { DialogService } from 'primeng/dynamicdialog';
import { ContentPostCreatorComponent } from './content-post-creator/content-post-creator.component';
import { ContentPostComponent } from './content-post/content-post.component';

@NgModule({
  declarations: [BoardComponent, PostComponent, NewPostComponent, ContentPostCreatorComponent, ContentPostComponent],
  imports: [
    CommonModule,
    BoardRoutingModule,
    SharedModule,
  ],
  providers :[DialogService]
})
export class BoardModule { }