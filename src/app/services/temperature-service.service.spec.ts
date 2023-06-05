import { TestBed } from '@angular/core/testing';

import { TemperatureServiceService } from './temperature-service.service';

describe('TemperatureServiceService', () => {
  let service: TemperatureServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemperatureServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
