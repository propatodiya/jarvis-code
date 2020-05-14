import { TestBed } from '@angular/core/testing';

import { ToastrMsgService } from './toastr-msg.service';

describe('ToastrMsgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToastrMsgService = TestBed.get(ToastrMsgService);
    expect(service).toBeTruthy();
  });
});
