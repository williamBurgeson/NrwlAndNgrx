import { Inject, Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { WeatherForecastModel } from '../weather-forecast-model';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  constructor(
    private readonly _http: HttpClient, @Inject('BASE_API_URL') 
    private readonly _baseApiUrl: string) { }

  getWeatherForecast() {
    return this._http.get<WeatherForecastModel[]>(this._baseApiUrl + 'weatherforecast')
  }
}
