import { TestBed } from '@angular/core/testing';

import { MyBlankService } from './my-blank.service';

describe('MyBlankService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyBlankService = TestBed.get(MyBlankService);
    expect(service).toBeTruthy();
  });
});
