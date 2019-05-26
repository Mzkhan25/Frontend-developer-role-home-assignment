import { TestBed } from '@angular/core/testing';

import { BankService } from './bank.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('BankService', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [HttpClientTestingModule] }));

  it('should be created', () => {
    const service: BankService = TestBed.get(BankService);
    expect(service).toBeTruthy();
  });
});
