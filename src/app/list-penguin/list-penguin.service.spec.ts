import { TestBed } from '@angular/core/testing';

import { ListPenguinService } from './list-penguin.service';

describe('ListPenguinService', () => {
  let service: ListPenguinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPenguinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
