import axios from 'axios';

const weatherApi = axios.create({
  baseURL: 'https://api.hgbrasil.com/weather?array_limit=7&fields=only_results,temp,city_name,forecast,max,min,date,weekday,description,wind_speedy,condition_slug,description,rain,humidity,currently&key=e22035c7&city_name=Jaboatao_dos_Guararapes,PE'
});


export default weatherApi;