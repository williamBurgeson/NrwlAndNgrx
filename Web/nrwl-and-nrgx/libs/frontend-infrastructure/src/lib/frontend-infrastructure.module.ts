import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherForecastService } from './weather-forecast/weather-forecast.service';

@NgModule({
  imports: [CommonModule],
  providers: [WeatherForecastService]
})
export class FrontendInfrastructureModule {}
