import { Text, View } from "react-native";
import Grain from "../assets/infoLine/grain.svg"
import Termo from "../assets/infoLine/dew.svg"
import Wind from "../assets/infoLine/air.svg"

export default function InfoLine() {
    return (
        <View className="flex-row top-4 justify-around p-2 rounded-3xl bg-cyan-500/[.3]">
            <View className="flex-row items-center">
                <Grain/>
                <Text className="text-white">6%</Text>
            </View>
            <View className="flex-row items-center">
                <Termo/>
                <Text className="text-white">90%</Text>
            </View>
            <View className="flex-row items-center">
                <Wind/>
                <Text className="text-white">19 km/h</Text>
            </View>
        </View>
    )
}