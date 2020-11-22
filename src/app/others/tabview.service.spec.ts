import { TestBed } from '@angular/core/testing';

import { TabviewService } from './tabview.service';

describe('TabviewService', () => {
  let service: TabviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
