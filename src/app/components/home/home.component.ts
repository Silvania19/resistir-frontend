import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, map, takeWhile } from 'rxjs';
import { RangeTemperature } from 'src/app/models/range-temperature';
import { Temperature } from 'src/app/models/temperature';
import { TemperatureServiceService } from 'src/app/services/temperature-service.service';
const INTERVAL_API = 2000;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  currentTemperature?: Number;
  public rangeTemperature = new RangeTemperature();

  intervalSubscription?: Subscription;
  source = interval(INTERVAL_API);

  constructor(private temperatureService: TemperatureServiceService) {}

  ngOnInit(): void {
    this.getCurrentTemperature();
    this.getRangeTemperature();

    this.intervalSubscription = this.source.subscribe(() => {
      //this.setInitialRange();      
      this.getCurrentTemperature();
    });
  }

  ngOnDestroy(): void {
    this.intervalSubscription?.unsubscribe();
  }

  getCurrentTemperature() {
    this.temperatureService
      .getTemperature()
      .pipe(
        map((val: Temperature) => {
          this.currentTemperature = val.numberTemperature;
        })
      )
      .subscribe();
  }

  getRangeTemperature() {
    this.temperatureService
      .getRangeTemperature()
      .pipe(
        map((val: RangeTemperature) => {
          this.rangeTemperature.maxTemperature = val.maxTemperature;
          this.rangeTemperature.minTemperature = val.minTemperature;
        })
      )
      .subscribe();
  }

  setInitialRange() {
    let setRangeTemperature = new RangeTemperature();

    this.temperatureService
      .getRangeTemperature()
      .pipe(
        map((val: RangeTemperature) => {
          setRangeTemperature.maxTemperature = val.maxTemperature;
          setRangeTemperature.minTemperature = val.minTemperature;
        })
      )
      .subscribe(() => {
        this.temperatureService
          .setRangeTemperature(setRangeTemperature)
          .subscribe();
      });
  }
}
