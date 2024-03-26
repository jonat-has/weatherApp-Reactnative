import { Text, View } from "react-native";
import Calendar from "../assets/nextForecast/calendar.svg";
import Day from "../assets/nextForecast/day.svg";

interface Forecast {
    date: string
    weekday: string
    max: number
    min: number
    rain: number
    wind_speedy: string
    description: string
  }

export default function NextForecast( { forecast }: { forecast: Forecast[] } ) {

    return (
        <View className="px-4 py-3 top-8 rounded-3xl bg-cyan-500/[.3]" >
            <View className="flex-row justify-between pb-2">
                <Text className="text-white text-xl font-semibold">Previsão Da Semana </Text>
                <Calendar/>
            </View>
            <View>
                {forecast.map((item, index) => (
                    <View key={index} className="flex-row justify-between items-center py-1"> 
                        <View className="w-20">
                            <Text className="text-white font-medium">{item.weekday}, {item.date}</Text>
                        </View>
                        <View className="">
                            <Day/>
                        </View>
                        <View className="flex-row justify-between w-14">
                            <Text className="text-white font-normal">{item.max}</Text>
                            <Text className="text-gray-300">{item.min}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
}
