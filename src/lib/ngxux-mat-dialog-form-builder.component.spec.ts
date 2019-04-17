import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxuxMatDialogFormBuilderComponent } from './ngxux-mat-dialog-form-builder.component';

describe('NgxuxMatDialogFormBuilderComponent', () => {
  let component: NgxuxMatDialogFormBuilderComponent;
  let fixture: ComponentFixture<NgxuxMatDialogFormBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxuxMatDialogFormBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxuxMatDialogFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
