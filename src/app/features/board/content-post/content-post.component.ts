import { ChangeDetectionStrategy, Component, ContentChild, Input, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { Post } from 'src/app/shared/interfaces';

@Component({
  selector: 'content-post',
  templateUrl: './content-post.component.html',
  styleUrls: ['./content-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentPostComponent implements OnInit {

  @Input() postData: Post;

  constructor() { }
  ngOnInit(): void {
  }

}
