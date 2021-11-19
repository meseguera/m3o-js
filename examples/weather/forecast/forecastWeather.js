const { WeatherService } = require("m3o/weather");
// Get the weather forecast for the next 1-10 days

const weatherService = new WeatherService(process.env.M3O_API_TOKEN);

async function forecastWeather() {
  const rsp = await weatherService.forecast({
    days: 2,
    location: "London",
  });
  console.log(rsp);
}

forecastWeather();
