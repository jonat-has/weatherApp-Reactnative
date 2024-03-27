import axios from 'axios';

const weatherApi = axios.create({
  baseURL: 'https://api.hgbrasil.com/weather?array_limit=7&fields=only_results,condition,temp,city_name,forecast,max,min,date,weekday,description,wind_speedy,condition_slug,description,rain,humidity,currently&key=7251e743'
});


export default weatherApi;