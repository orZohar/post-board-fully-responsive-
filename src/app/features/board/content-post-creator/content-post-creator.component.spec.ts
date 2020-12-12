import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPostCreatorComponent } from './content-post-creator.component';

describe('ContentPostCreatorComponent', () => {
  let component: ContentPostCreatorComponent;
  let fixture: ComponentFixture<ContentPostCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentPostCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPostCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
