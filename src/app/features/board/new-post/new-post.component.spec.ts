import { Pipe } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DialogModule} from 'primeng/dialog';
import { DynamicDialogConfig, DynamicDialogModule, DynamicDialogRef} from 'primeng/dynamicdialog';
import { NewPostComponent } from './new-post.component';


describe('NewPostComponent', () => {
  let component: NewPostComponent;
  let fixture: ComponentFixture<NewPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPostComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        DialogModule,
        DynamicDialogModule,
        FontAwesomeModule
    ],
    providers:[DynamicDialogRef,DynamicDialogConfig]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
