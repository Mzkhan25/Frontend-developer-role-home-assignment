import { TestBed, inject } from '@angular/core/testing';

import { AppstateService } from './appstate.service';
import { StoreModule } from '@ngrx/store';
import * as fromFeature from '../store/reducers/invoice.reducer';
describe('AppstateService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [AppstateService],
    imports: [StoreModule.forRoot({})]
  }));

  it('should be created', () => {
    inject([AppstateService], (service: AppstateService) => {
      expect(service).toBeTruthy();
    });
  });
});
