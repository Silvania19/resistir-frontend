import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Temperature } from '../models/temperature';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemperatureServiceService {

  constructor( private httpClient: HttpClient) { }
  private baseUrl: string = environment.url.protocol + environment.url.url;

  urlGetTemperature: string =
  this.baseUrl + environment.services.temperature.getTemperatura;

  getTemperature():Observable<Temperature>{
    return this.httpClient.get(this.urlGetTemperature);
  }

}
