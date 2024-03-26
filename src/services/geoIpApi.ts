import axios from "axios";

const geoIpApi = axios.create({
    baseURL: 'https://api.hgbrasil.com/geoip?fields=only_results,city,region_code,region,country_name&key=c45fecaf&address=remote'
  });
  
  export default geoIpApi;  