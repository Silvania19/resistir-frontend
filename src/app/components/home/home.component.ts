import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RangeTemperature } from 'src/app/models/range-temperature';
import { Temperature } from 'src/app/models/temperature';
import { TemperatureServiceService } from 'src/app/services/temperature-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  currentTemperature ? : Number;
   rangeTemperature = new RangeTemperature();

  constructor(private temperatureService: TemperatureServiceService) { }

  ngOnInit(): void {
    this.getCurrentTemperature();
    this.getRangeTemperature();
  }
  getCurrentTemperature(){
    this.temperatureService.getTemperature().pipe(
      map((val: Temperature)=>{
        this.currentTemperature= val.numberTemperature;
      })
    )
    .subscribe(
      (val) => {
    
      }
    );    
  }
  getRangeTemperature(){
    this.temperatureService.getRangeTemperature().pipe(
      map((val: RangeTemperature)=>{
        this.rangeTemperature?.maxTemperature = val.maxTemperature;
        this.rangeTemperature?.minTemperature = val.minTemperature;
      })
    )
    .subscribe(
      (val) => {
    
      }
    );    
  }
}
