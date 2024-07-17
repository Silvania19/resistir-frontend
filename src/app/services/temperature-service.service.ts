import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Temperature } from '../models/temperature';
import { Observable } from 'rxjs';
import { RangeTemperature } from '../models/range-temperature';

@Injectable({
  providedIn: 'root',
})
export class TemperatureServiceService {
  constructor(private httpClient: HttpClient) {}
  private baseUrl: string = environment.url.protocol + environment.url.url;

  urlGetTemperature: string =
    this.baseUrl + environment.services.temperature.getTemperatura;
  urlSetTemperatures: string =
    this.baseUrl + environment.services.temperature.setRangeTemperature;

  urlGetRangeTemperature: string =
    this.baseUrl + environment.services.temperature.getRangeTemperature;

  getTemperature(): Observable<Temperature> {
    return this.httpClient.get(this.urlGetTemperature);
  }

  setRangeTemperature(
    setRangeTemperature: RangeTemperature
  ): Observable<RangeTemperature> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.httpClient.post(
      this.urlSetTemperatures,
      setRangeTemperature,
      httpOptions
    );
  }

  getRangeTemperature(): Observable<RangeTemperature> {
    return this.httpClient.get(this.urlGetRangeTemperature);
  }
}
