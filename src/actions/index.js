import axios from 'axios';

const API_KEY = 'be3c8029f2f5dd15f658c543531aa237';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},au`;
    const request = axios.get(url);

    return{
        type: FETCH_WEATHER,
        payload: request
    };
}