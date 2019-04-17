import { TestBed } from '@angular/core/testing';

import { NgxuxMatDialogFormBuilderService } from './ngxux-mat-dialog-form-builder.service';

describe('NgxuxMatDialogFormBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxuxMatDialogFormBuilderService = TestBed.get(NgxuxMatDialogFormBuilderService);
    expect(service).toBeTruthy();
  });
});
