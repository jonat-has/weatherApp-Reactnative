import { Text, View } from "react-native";
import Calendar from "../assets/nextForecast/calendar.svg";
import Day from "../assets/nextForecast/day.svg";

export default function NextForecast() {
    const forecastData = [
        {key: 'Monday', weather: <Day/>, max: "28º", min: "10º"},
        {key: 'Tuesday', weather: <Day/>, max: "28º", min: "10º"},
        {key: 'Wednesday', weather: <Day/>, max: "28º", min: "10º"},
        {key: 'Thursday', weather: <Day/>, max: "28º", min: "10º"},
        {key: 'Friday', weather: <Day/>, max: "28º", min: "10º"},
        {key: 'Saturday', weather: <Day/>, max: "28º", min: "10º"},
        {key: 'Sunday', weather: <Day/>, max: "28º", min: "10º"}
    ];

    return (
        <View className="px-4 py-3 top-8 rounded-3xl bg-cyan-500/[.3]" >
            <View className="flex-row justify-between">
                <Text className="text-white text-xl font-semibold">Next Forecast</Text>
                <Calendar/>
            </View>
            <View>
                {forecastData.map((item, index) => (
                    <View key={index} className="flex-row justify-between items-center py-1"> 
                        <View className="w-20">
                            <Text className="text-white font-medium">{item.key}</Text>
                        </View>
                        <View className="">
                            {item.weather}
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
