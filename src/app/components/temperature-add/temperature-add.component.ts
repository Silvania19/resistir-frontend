import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SaveTemperature } from 'src/app/models/save-temperature';
import { TemperatureServiceService } from 'src/app/services/temperature-service.service';

@Component({
  selector: 'app-temperature-add',
  templateUrl: './temperature-add.component.html',
  styleUrls: ['./temperature-add.component.css']
})
export class TemperatureAddComponent implements OnInit {

  formTemp: FormGroup = new FormGroup({})

  public tempMessage: string = "";

  constructor(private tempService: TemperatureServiceService) { }

  ngOnInit(): void {
    this.formTemp = new FormGroup({
      minTemp: new FormControl(null,[Validators.required, Validators.min(15), Validators.max(25)]),
      maxTemp: new FormControl(null,[Validators.required, Validators.min(20), Validators.max(30)])
    })

    this.formTemp.valueChanges.subscribe((value : any) => {
      
      if(value.minTemp != null && value.maxTemp != null){
        if(value.maxTemp < value.minTemp){
          this.tempMessage = "Maximo no puede ser menor a minimo"          
        } else if(this.formTemp.invalid){
          this.tempMessage = "error de rango";          
        }
        else{
          this.tempMessage = "";
        }
      }
    })    
  }

  saveRange(){
    let setRangeTemperature = new SaveTemperature();
    setRangeTemperature.maxTemperature = this.formTemp.value.maxTemp;
    setRangeTemperature.minTemperature = this.formTemp.value.minTemp;
    this.tempService.setRangeTemperature(setRangeTemperature).subscribe();
  }

}
