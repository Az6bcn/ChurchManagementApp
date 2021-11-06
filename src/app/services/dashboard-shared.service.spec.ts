/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DashboardSharedService } from './dashboard-shared.service';

describe('Service: DashboardShared', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardSharedService]
    });
  });

  it('should ...', inject([DashboardSharedService], (service: DashboardSharedService) => {
    expect(service).toBeTruthy();
  }));
});
