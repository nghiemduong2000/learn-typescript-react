import { GET_WEATHER } from './types';

export const getWeather = (city: string, country: string) => ({
  type: GET_WEATHER,
  data: { city, country },
});
