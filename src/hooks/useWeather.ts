import { useState, useEffect } from "react";
import api from "../api";

export interface UseWeatherReturn {
  weather: any;
  city: any;
  isLoading: boolean;
}

export const useWeather = (lat: any, long: any): UseWeatherReturn => {
  const [weather, setWeather] = useState(Array);
  const [city, setCity] = useState(Array);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const weatherFromApi = await api.getWeather(lat, long);
      setCity(weatherFromApi.timezone.split("/")[1]);
      setWeather(weatherFromApi.daily.slice(0, 4));
      setIsLoading(false);
    };

    fetchData();
  }, [lat, long]);
  return { weather, city, isLoading };
};
