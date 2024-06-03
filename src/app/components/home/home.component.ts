import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Temperature } from 'src/app/models/temperature';
import { TemperatureServiceService } from 'src/app/services/temperature-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  currentTemperature ? : Number;

  constructor(private temperatureService: TemperatureServiceService) { }

  ngOnInit(): void {
    this.getSubjects();
  }
  getSubjects(){
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
}
