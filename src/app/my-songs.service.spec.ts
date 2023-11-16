import { TestBed } from '@angular/core/testing';

import { MySongsService } from './service/my-songs.service';

describe('MySongsService', () => {
  let service: MySongsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MySongsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
