import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Temperature } from '../models/temperature';
import { Observable } from 'rxjs';
import { SaveTemperature } from '../models/save-temperature';

@Injectable({
  providedIn: 'root'
})
export class TemperatureServiceService {

  constructor( private httpClient: HttpClient) { }
  private baseUrl: string = environment.url.protocol + environment.url.url;

  urlGetTemperature: string =
  this.baseUrl + environment.services.temperature.getTemperatura;
  urlSetTemperatures : string =  this.baseUrl + environment.services.temperature.setRangeTemperature;

  getTemperature():Observable<Temperature>{
    return this.httpClient.get(this.urlGetTemperature);
  }

  setRangeTemperature(setRangeTemperature: SaveTemperature):Observable<any>{
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
  
    console.log(setRangeTemperature);    
    console.log(this.urlSetTemperatures);   
    return this.httpClient.post(this.urlSetTemperatures, setRangeTemperature, httpOptions);
  }

}
