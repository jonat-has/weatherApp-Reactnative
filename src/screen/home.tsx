import Header from "../components/header";
import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import WheatherNow from "../components/weatherToday";
import InfoLine from "../components/infoLine";
import NextForecast from "../components/nextForecast";
import TodayForecast from "../components/todayForecast";
import { useEffect, useState } from "react";
import geoIpApi from "../services/geoIpApi";
import weatherApi from "../services/axiosConfig"

const initialState: weather = {
  temp: 0,
  date: "",
  description: "",
  currently: "",
  humidity: 0,
  rain: 0,
  wind_speedy: "",
  condition_slug: "",
  city_name: "",
  forecast: [{
    date: '',
    weekday: '',
    max: 0, 
    min: 0,
    rain: 0,
    wind_speedy: '',
    description: '',
    condition: 'clear_day'
  }]
};

interface weather {
  temp: number
  date: string
  description: string
  currently: string
  humidity: number
  rain: number
  wind_speedy: string
  condition_slug: string
  city_name: string
  forecast: Forecast[]
}


interface Forecast {
  date: string
  weekday: string
  max: number
  min: number
  rain: number
  wind_speedy: string
  description: string
  condition: string
}
export default function Home() {
    
    const [dataWeather, setWeatherData] = useState<weather>(initialState);
    const [ cityName, setCityName] = useState<string>('Jaboatao_dos_Guararapes,PE')
    const dia = {
      gradient: ['#2daedd','#31b6e1','#2ec5e8'],
      bg_components: "bg-cyan-700/[.3]"
    }
    const noite = {
      gradient: ['#082655', '#124cb4', '#0c43ac'],
      bg_components: "bg-cyan-500/[.3]"
    }

    useEffect(() => {

      const params = {
        city_name: cityName
      };

      weatherApi.get('', { params })
        .then((response) => {
          console.log('Resposta da API:', response.data);
          setWeatherData(response.data);
        })
        .catch((error) => {
          console.error('Erro ao buscar dados:', error);
        });
    }, [cityName]);

    const handleSearch = ( name: string ) => {
      const formattedCityName = name.trim().replace(/\s+/g, '_')
      setCityName(formattedCityName)
      console.log(formattedCityName)
    }

    let themeColor = dia;
    
    if (dataWeather.currently === 'dia') {
      themeColor = dia; 
    } else if (dataWeather.currently === 'noite') {
      themeColor = noite;
    }

    

  return (
    <LinearGradient
      colors={themeColor.gradient}
      className="w-full h-[980px] p-8"
    >
      <Header cidade={dataWeather.city_name} pesquisar={handleSearch}/>
     <WheatherNow imgName={dataWeather.condition_slug} temp={dataWeather.temp} descricao={dataWeather.description} max={dataWeather?.forecast[0].max} min={dataWeather.forecast[0].min} />
      <InfoLine tema={themeColor.bg_components} chuva={dataWeather.rain} umidade={dataWeather.humidity} vento={dataWeather.wind_speedy}/>
      <TodayForecast tema={themeColor.bg_components}/>
      <NextForecast tema={themeColor.bg_components} forecast={dataWeather.forecast}/>
    </LinearGradient>
  );
}