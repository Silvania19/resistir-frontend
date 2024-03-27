import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Temperature } from '../models/temperature';
import { Observable } from 'rxjs';
import { TemplateLiteralElement } from '@angular/compiler';

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

  setTemperature(temp:any):Observable<any>{
    let api = "/setTemperature";
    let url = this.baseUrl + api;
    let body = {"min": temp.minTemp, "max": temp.maxTemp};

    console.log(body);    

    return this.httpClient.post(url, body);
  }

}
