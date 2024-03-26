import { Text, View } from "react-native";
import CloudyDay from '../assets/weatherToday/clouds-sun.svg'

interface weatherNow {
    temp: number,
    descricao: string,
    max: number,
    min: number
}

export default function WeatherNow({ temp, descricao, max, min }: weatherNow) {
    return (
        <View className="items-center w-full">
           <CloudyDay/>
            <View className="items-center">
                <Text className="text-white font-bold text-6xl">{temp}º</Text>
                <Text className="text-white text-1xl">{descricao}</Text>
                <Text className="text-white text-1xl">Max:{max}º | Min:{min}º</Text>
            </View>
        </View>
    )
}