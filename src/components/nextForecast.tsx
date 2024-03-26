import { Text, View } from "react-native";
import Calendar from "../assets/nextForecast/calendar.svg"

import StormSVG from '../assets/condition/reshot-icon-electric-clouds-DKLY6EF9H5.svg';
import SnowSVG from '../assets/condition/reshot-icon-snow-cloud-TPC7FB3GAV.svg';
import HailSVG from '../assets/condition/reshot-icon-snow-cloud-TPC7FB3GAV.svg';
import RainSVG from '../assets/condition/reshot-icon-rain-5YXUMGH6ZB.svg';
import FogSVG from '../assets/condition/reshot-icon-cloud-9CKD27R8UZ.svg';
import ClearDaySVG from '../assets/condition/reshot-icon-sun-S9ZW4T6UGQ.svg';
import ClearNightSVG from '../assets/condition/reshot-icon-night-moon-Q26HA4B35F.svg';
import CloudSVG from '../assets/condition/reshot-icon-cloud-9CKD27R8UZ.svg';
import CloudlyDaySVG from '../assets/condition/reshot-icon-sun-and-cloud-65PMRJT84G.svg';
import CloudlyNightSVG from '../assets/condition/reshot-icon-cloud-moon-BMWVYDZEUA.svg';

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

export default function NextForecast({ forecast }: { forecast: Forecast[] }) {

    const defaultWidth = 28;
    const defaultHeight = 28;

    const getSvgComponent = (condition: string) => {
        switch (condition) {
            case 'storm':
                return <StormSVG width={defaultWidth} height={defaultHeight} />;
            case 'snow':
                return <SnowSVG width={defaultWidth} height={defaultHeight} />;
            case 'hail':
                return <HailSVG width={defaultWidth} height={defaultHeight} />;
            case 'rain':
                return <RainSVG width={defaultWidth} height={defaultHeight} />;
            case 'fog':
                return <FogSVG width={defaultWidth} height={defaultHeight} />;
            case 'clear_day':
                return <ClearDaySVG width={defaultWidth} height={defaultHeight} />;
            case 'clear_night':
                return <ClearNightSVG width={defaultWidth} height={defaultHeight} />;
            case 'cloud':
                return <CloudSVG width={defaultWidth} height={defaultHeight} />;
            case 'cloudly_day':
                return <CloudlyDaySVG width={defaultWidth} height={defaultHeight} />;
            case 'cloudly_night':
                return <CloudlyNightSVG width={defaultWidth} height={defaultHeight} />;
            default:
                return <ClearDaySVG width={defaultWidth} height={defaultHeight} />;
        }
    }

    return (
        <View className="px-4 py-3 top-8 rounded-3xl bg-cyan-500/[.3]" >
            <View className="flex-row justify-between pb-2">
                <Text className="text-white text-xl font-semibold">Previsão Da Semana </Text>
                <Calendar />
            </View>
            <View>
                {forecast.map((item, index) => (
                    <View key={index} className="flex-row justify-between items-center py-1">
                        <View className="w-20">
                            <Text className="text-white font-medium">{item.weekday}, {item.date}</Text>
                        </View>
                        <View className="">
                            {getSvgComponent(item.condition)}
                        </View>
                        <View className="flex-row justify-between w-14">
                            <Text className="text-white font-normal">{item.max}º</Text>
                            <Text className="text-gray-300">{item.min}º</Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
}
