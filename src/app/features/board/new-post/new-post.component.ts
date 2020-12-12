import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BoardService } from '../services/board.service';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewPostComponent implements OnInit {
  postForm: FormGroup;
  errorMessage: string;
  isEdit: boolean;
  postIndex: number;

  constructor(private formBuilder: FormBuilder, private boardService: BoardService, private ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit() {
    this.buildForm();
    if (this.config.data) {
      this.isEdit = true;
      this.postIndex = this.config.data.index;
      this.postForm.patchValue(this.config.data.post);
    }
  }

  buildForm() {
    this.postForm = this.formBuilder.group({
      authorName: ['', [ Validators.required, Validators.maxLength(16) ]],
      content: ['', Validators.required]
    });
  }

  submit() {
    if (!this.isEdit) {
      this.boardService.savePost(this.postForm.value);
    } else{
      this.boardService.editPost(this.postForm.value, this.postIndex);
    }

    this.ref.close();
  }

  deletePost(){
      this.boardService.deletePost(this.postIndex);
      this.ref.close();
  }

}
