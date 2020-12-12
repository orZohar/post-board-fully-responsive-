import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Post } from 'src/app/shared/interfaces';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'content-post-creator',
  templateUrl: './content-post-creator.component.html',
  styleUrls: ['./content-post-creator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentPostCreatorComponent implements OnInit {
  faPlus = faPlus;

  constructor() { }
  ngOnInit(): void {
  }

  
}