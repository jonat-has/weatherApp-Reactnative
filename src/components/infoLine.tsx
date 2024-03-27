import { Text, View } from "react-native";
import Grain from "../assets/infoLine/grain.svg"
import Termo from "../assets/infoLine/dew.svg"
import Wind from "../assets/infoLine/air.svg"

interface infoLine {
    chuva: number,
    umidade: number,
    vento: string
    tema: string
}


export default function InfoLine({ chuva, umidade, vento, tema }: infoLine) {
    return (
        <View className={`flex-row top-4 justify-around p-2 rounded-3xl ${tema}`}>
            <View className="flex-row items-center">
                <Grain/>
                <Text className="text-white"> {chuva}%</Text>
            </View>
            <View className="flex-row items-center">
                <Wind/>
                <Text className="text-white"> {vento}</Text>
            </View>
            <View className="flex-row items-center">
                <Termo/>
                <Text className="text-white"> {umidade}%</Text>
            </View>
        </View>
    )
}