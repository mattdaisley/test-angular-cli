/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { AuthenticateService } from './authenticate.service';

describe('Service: Authenticate', () => {
  beforeEach(() => {
    addProviders([AuthenticateService]);
  });

  it('should ...',
    inject([AuthenticateService],
      (service: AuthenticateService) => {
        expect(service).toBeTruthy();
      }));
});
