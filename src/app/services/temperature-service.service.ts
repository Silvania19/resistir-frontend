import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Temperature } from '../models/temperature';
import { Observable } from 'rxjs';
import { TemplateLiteralElement } from '@angular/compiler';
import { SaveTemperature } from '../models/save-temperature';

@Injectable({
  providedIn: 'root'
})
export class TemperatureServiceService {

  constructor( private httpClient: HttpClient) { }
  private baseUrl: string = environment.url.protocol + environment.url.url;

  urlGetTemperature: string =
  this.baseUrl + environment.services.temperature.getTemperatura;
  urlSetTemperature : string =  this.baseUrl + environment.services.temperature.setTemperature;

  getTemperature():Observable<Temperature>{
    return this.httpClient.get(this.urlGetTemperature);
  }

  setTemperature(saveTemperature: SaveTemperature):Observable<any>{
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
  
    console.log(saveTemperature);    
    console.log(this.urlSetTemperature);   
    return this.httpClient.post(this.urlSetTemperature, saveTemperature, httpOptions);
  }

}
