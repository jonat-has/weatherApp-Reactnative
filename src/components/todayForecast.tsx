import { StyleSheet, Text, View } from "react-native";
import Calendar from "../assets/nextForecast/calendar.svg"
import Day from "../assets/nextForecast/day.svg"
import { ScrollView } from "react-native";

export default function TodayForecast() {
    const forecastData = [
        {key: '15:00', weather: <Day/>, temp: "28º"},
        {key: '18:00', weather: <Day/>, temp: "28º"},
        {key: '22:00', weather: <Day/>, temp: "28º"},
        {key: '02:00', weather: <Day/>, temp: "28º"}
    ];

    return (
        <View className="px-4 py-3 top-6 rounded-3xl bg-cyan-500/[.3]" >
            <View className="flex-row justify-between">
                <Text className="text-white text-xl font-semibold">Today</Text>
                <Text className="text-white text-lg">Mar, 9</Text>
            </View>
         
            <View className="flex-row justify-between">
                {forecastData.map((item, index) => (
                    <View key={index} className="flex-col justify-around p-2 h-28 items-center"> 
                        <Text className="text-white text-base font-medium">{item.temp}</Text>
                        {item.weather}
                        <Text className="text-white text-sm font-medium">{item.key}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}
