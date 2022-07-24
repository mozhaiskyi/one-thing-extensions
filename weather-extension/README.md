## Weather extension

[OpenWeather API](https://openweathermap.org/api) is used for weather fetching.

## Usage

[OpenWeather API](https://openweathermap.org/api) app id is mendatory. Please put it into `.env` as `WEATHER_APP_ID`

## API

```javascript
import weather from "./weather-extension/weather-extension.js"

let city = "Berlin"
let weater = await weather(city)
```