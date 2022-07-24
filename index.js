import oneThing from "one-thing"
import schedule from "node-schedule"
import weather from "./weather-extension/weather-extension.js"
import dotenv from "dotenv";

dotenv.config()

schedule.scheduleJob("*/5 * * * * *", async (date) => {
    let city = "Berlin"
    let weater = await weather(city)
    oneThing(weater)
    console.log(`Logged: ${weater}`)
})
