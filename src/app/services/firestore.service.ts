import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Temperature } from '../models/temperature';
import { Observable } from 'rxjs';
import { SaveTemperature } from '../models/save-temperature';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor( private httpClient: HttpClient) { }
  private baseUrl: string = environment.url.protocol + environment.url.url;

  urlGetTemperature: string = this.baseUrl + environment.services.temperature.getTemperatura;
  urlSetTemperatures : string =  this.baseUrl + environment.services.temperature.setRangeTemperature;


}
