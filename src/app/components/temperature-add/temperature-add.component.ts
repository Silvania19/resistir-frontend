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

  constructor(private tempService: TemperatureServiceService) { }

  ngOnInit(): void {
    this.formTemp = new FormGroup({
      minTemp: new FormControl(null,[Validators.required]),
      maxTemp: new FormControl(null,[Validators.required])
    })
  }

  saveRange(){
    let setRangeTemperature = new SaveTemperature();
    setRangeTemperature.maxTemperature = this.formTemp.value.maxTemp;
    setRangeTemperature.minTemperature = this.formTemp.value.minTemp;
   this.tempService.setRangeTemperature(setRangeTemperature).subscribe();
    
  }

}
