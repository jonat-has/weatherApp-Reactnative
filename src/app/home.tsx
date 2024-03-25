import Header from "../components/header";
import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import WheatherNow from "../components/weatherToday";
import InfoLine from "../components/infoLine";
import NextForecast from "../components/nextForecast";
import TodayForecast from "../components/todayForecast";
import { useState, useEffect } from "react";
import weatherApi from "../API/axiosConfig";
import axios from "axios";

export default function Home() {
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
  }
  
  const [dataWeather, setWeatherData] = useState<weather>();
  
  useEffect(() => {
    const requestApi = async () => {
      try {
        const response = await axios.get('https://api.hgbrasil.com/weather?array_limit=7&fields=only_results,temp,city_name,forecast,max,min,date,weekday,description,wind_speedy,condition_slug,description,rain,humidity,currently&key=ba975340');
        console.log(response.data); // Verifique se os dados derraa resposta estão corretos
        setWeatherData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    requestApi();
  }, []);

  console.log(dataWeather?.city_name)

  return (
    <LinearGradient
      colors={['#082655', '#124cb4', '#0c43ac']}
      className="w-full h-[980px] p-8"
    >
      <Header data={dataWeather}/>
      <WheatherNow />
      <InfoLine />
      <TodayForecast />
      <NextForecast />
    </LinearGradient>
  );
}