const API_KEY = 'adc4ed3f45bad9dd7d16f40398958ad8'
const ROOT_URL=  `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`

import Axios from "axios";

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},tr`
    const request = Axios.get(url)
    
    return{
        type:FETCH_WEATHER,
        payload:request
    }
}