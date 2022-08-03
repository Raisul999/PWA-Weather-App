import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'b2928ffc9882dde5ff54df1c885f2960'

export const fetchWeather =  (query)=>{
   const response = axios.get(URL,{
    params:{
        q:query,
        units:'metric',
        APPID:API_KEY
    }
   }).then(res=>res)
   .catch((err)=>alert(err.response.data.message))
   return response
}