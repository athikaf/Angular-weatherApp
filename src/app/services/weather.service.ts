import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(env.weatherApiBaseURL, {
      headers: new HttpHeaders()
        .set(env.XRapidAPIHostHeaderName, env.XRapidAPIHostHeaderValue)
        .set(env.XRapidAPIKeyHeaderName, env.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
        .set('q', cityName)
        .set('units', 'metric')
        .set('mode', 'json'),
    });
  }
}
