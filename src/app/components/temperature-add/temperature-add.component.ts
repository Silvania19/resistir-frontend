import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { RangeTemperature } from 'src/app/models/range-temperature';
import { TemperatureServiceService } from 'src/app/services/temperature-service.service';
import { maxHigherMin } from 'src/app/validators/max-higher-min';

@Component({
  selector: 'app-temperature-add',
  templateUrl: './temperature-add.component.html',
  styleUrls: ['./temperature-add.component.css']
})
export class TemperatureAddComponent implements OnInit {

  formTemp: FormGroup = new FormGroup({})

  public rangeTemperature = new RangeTemperature();
  public tempMessage: string = "";

  constructor(private tempService: TemperatureServiceService) { }

  ngOnInit(): void {
    this.getRangeTemperature();
    
    this.formTemp = new FormGroup({
      minTemp: new FormControl(null,[Validators.required, Validators.min(15), Validators.max(30)]),
      maxTemp: new FormControl(null,[Validators.required, Validators.min(15), Validators.max(30)])
    }, {validators: maxHigherMin()});
  }

  getRangeTemperature(){
    this.tempService.getRangeTemperature().pipe(
      map((val: RangeTemperature)=>{
        this.rangeTemperature.maxTemperature = val.maxTemperature;
        this.rangeTemperature.minTemperature = val.minTemperature;
      })
    )
    .subscribe();    
  }

  saveRange(){
    let setRangeTemperature = new RangeTemperature();
    setRangeTemperature.maxTemperature = this.formTemp.value.maxTemp;
    setRangeTemperature.minTemperature = this.formTemp.value.minTemp;
    this.tempService.setRangeTemperature(setRangeTemperature).subscribe();
  }
}
