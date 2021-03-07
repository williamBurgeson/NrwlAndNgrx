import { Component,  OnInit } from '@angular/core';
import { WeatherForecastModel, WeatherForecastService } from '@nrwl-and-nrgx/frontend-infrastructure';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit {
  public forecasts: WeatherForecastModel[];

  constructor(private readonly _weatherForecastService: WeatherForecastService) {  }

  ngOnInit(): void {
    this._weatherForecastService.getWeatherForecast().subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}
