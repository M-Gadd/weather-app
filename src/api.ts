import axios from "axios";

const OpenWeatherKey = process.env.REACT_APP_WEATHER_KEY;

export default {
  async getWeather(lat: number, long: number) {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=${OpenWeatherKey}`,
    );
    return response.data;
  },
};
