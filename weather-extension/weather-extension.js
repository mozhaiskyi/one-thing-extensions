import request from "axios";

const temperatureIcon = '🌡️';

// Generate weather log for a location
export default async function (location) {
    let weather = await getWeather(location)
    console.log(weather)


    let temp = weather.main.temp | 0
    let main = weather.weather[0].main
    let icon = weather.weather[0].icon

    let log = `${location} °${temp}${temperatureIcon} | ${main}${mapIcon(icon)}`
    return log
}

// Map weather icon to emoji
function mapIcon(icon) {
    switch (icon) {
        case "01d":
        case "01n":
            return "☀️"
        case "02d":
        case "02n":
            return "⛅"
        case "03d":
        case "03n":
            return "🌥️"
        case "04d":
        case "04n":
            return "☁️"
        case "09d":
        case "09n":
            return "🌧️"
        case "10d":
        case "10n":
            return "🌦️"
        case "11d":
        case "11n":
            return "⛈️"
        case "13d":
        case "13n":
            return "❄️"
        case "50d":
        case "50n":
            return "🌫️"
        default:
            return "🌡️"
    }
}

// Call weather API
async function getWeather(location) {
    const APP_ID = process.env.WEATHER_APP_ID;
    try {
        const response = await request.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${APP_ID}`
        )
        return response.data
    } catch (error) {
        console.log(error)
    }
}
