import axios from 'axios';

export const getWeatherApi = async (city: string, country: string) => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=6a68a970d426f335e36b1b7be485566a&units=metric&lang=vi`,
  );
  return res;
};
