import { Text, View } from "react-native";
import CloudyDay from '../assets/weatherToday/clouds-sun.svg'

export default function WeatherNow() {
    return (
        <View className="items-center w-full">
           <CloudyDay/>
            <View className="items-center">
                <Text className="text-white font-bold text-6xl">28º</Text>
                <Text className="text-white text-1xl">Precipitations</Text>
                <Text className="text-white text-1xl">Max:31º Min:25º</Text>
            </View>
        </View>
    )
}