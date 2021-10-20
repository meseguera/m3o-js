import * as m3o from '@m3o/m3o-node';

export class WeatherService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Get the weather forecast for the next 1-10 days
  forecast(request: WeatherForecastRequest): Promise<WeatherForecastResponse> {
    return this.client.call(
      'weather',
      'Forecast',
      request
    ) as Promise<WeatherForecastResponse>;
  }
  // Get the current weather report for a location by postcode, city, zip code, ip address
  now(request: WeatherNowRequest): Promise<WeatherNowResponse> {
    return this.client.call(
      'weather',
      'Now',
      request
    ) as Promise<WeatherNowResponse>;
  }
}

export interface WeatherForecast {
  // the average temp in celsius
  avgTempC?: number;
  // the average temp in fahrenheit
  avgTempF?: number;
  // chance of rain (percentage)
  chanceOfRain?: number;
  // forecast condition
  condition?: string;
  // date of the forecast
  date?: string;
  // forecast condition icon
  iconUrl?: string;
  // max temp in celsius
  maxTempC?: number;
  // max temp in fahrenheit
  maxTempF?: number;
  // minimum temp in celsius
  minTempC?: number;
  // minimum temp in fahrenheit
  minTempF?: number;
  // time of sunrise
  sunrise?: string;
  // time of sunset
  sunset?: string;
  // will it rain
  willItRain?: boolean;
}

export interface WeatherForecastRequest {
  // number of days. default 1, max 10
  days?: number;
  // location of the forecase
  location?: string;
}

export interface WeatherForecastResponse {
  // country of the request
  country?: string;
  // forecast for the next number of days
  forecast?: {
    // the average temp in celsius
    avgTempC?: number;
    // the average temp in fahrenheit
    avgTempF?: number;
    // chance of rain (percentage)
    chanceOfRain?: number;
    // forecast condition
    condition?: string;
    // date of the forecast
    date?: string;
    // forecast condition icon
    iconUrl?: string;
    // max temp in celsius
    maxTempC?: number;
    // max temp in fahrenheit
    maxTempF?: number;
    // minimum temp in celsius
    minTempC?: number;
    // minimum temp in fahrenheit
    minTempF?: number;
    // time of sunrise
    sunrise?: string;
    // time of sunset
    sunset?: string;
    // will it rain
    willItRain?: boolean;
  }[];
  // e.g 37.55
  latitude?: number;
  // the local time
  localTime?: string;
  // location of the request
  location?: string;
  // e.g -77.46
  longitude?: number;
  // region related to the location
  region?: string;
  // timezone of the location
  timezone?: string;
}

export interface WeatherNowRequest {
  // location to get weather e.g postcode, city
  location?: string;
}

export interface WeatherNowResponse {
  // cloud cover percentage
  cloud?: number;
  // the weather condition
  condition?: string;
  // country of the request
  country?: string;
  // whether its daytime
  daytime?: boolean;
  // feels like in celsius
  feelsLikeC?: number;
  // feels like in fahrenheit
  feelsLikeF?: number;
  // the humidity percentage
  humidity?: number;
  // the related icon
  iconUrl?: string;
  // e.g 37.55
  latitude?: number;
  // the local time
  localTime?: string;
  // location of the request
  location?: string;
  // e.g -77.46
  longitude?: number;
  // region related to the location
  region?: string;
  // temperature in celsius
  tempC?: number;
  // temperature in fahrenheit
  tempF?: number;
  // timezone of the location
  timezone?: string;
  // wind degree
  windDegree?: number;
  // wind direction
  windDirection?: string;
  // wind in kph
  windKph?: number;
  // wind in mph
  windMph?: number;
}
