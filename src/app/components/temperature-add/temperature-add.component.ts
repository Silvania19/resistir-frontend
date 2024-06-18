import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { RangeTemperature } from 'src/app/models/range-temperature';
import { SaveTemperature } from 'src/app/models/save-temperature';
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

    this.formTemp.valueChanges.subscribe((value : any) => {
      
      if(value.minTemp != null && value.maxTemp != null){
        if(value.maxTemp <= value.minTemp){
          this.tempMessage = "Maximo no puede ser menor a minimo ni igual";          
        } else if(this.formTemp.invalid){
          this.tempMessage = "Error de rango, valores aceptados desde 15 grados hasta 30";          
        }
        else{
          this.tempMessage = "";
        }
      }
    })    
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
    let setRangeTemperature = new SaveTemperature();
    setRangeTemperature.maxTemperature = this.formTemp.value.maxTemp;
    setRangeTemperature.minTemperature = this.formTemp.value.minTemp;
    this.tempService.setRangeTemperature(setRangeTemperature).subscribe();
  }

}
