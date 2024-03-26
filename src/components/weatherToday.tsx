import { Text, View } from "react-native";
import { Svg, SvgFromXml, SvgUri, SvgXml } from 'react-native-svg';

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


interface weatherNow {
    temp: number,
    descricao: string,
    max: number,
    min: number,
    imgName: string
}

export default function WeatherNow({ temp, descricao, max, min, imgName }: weatherNow) {

    let SvgComponent;
    const defaultWidth = 256;
    const defaultHeight = 256;

    switch (imgName) {
        case 'storm':
            SvgComponent = <StormSVG width={defaultWidth} height={defaultHeight} />;
            break;
        case 'snow':
            SvgComponent = <SnowSVG width={defaultWidth} height={defaultHeight} />;
            break;
        case 'hail':
            SvgComponent = <HailSVG width={defaultWidth} height={defaultHeight} />;
            break;
        case 'rain':
            SvgComponent = <RainSVG width={defaultWidth} height={defaultHeight} />;
            break;
        case 'fog':
            SvgComponent = <FogSVG width={defaultWidth} height={defaultHeight} />;
            break;
        case 'clear_day':
            SvgComponent = <ClearDaySVG width={defaultWidth} height={defaultHeight} />;
            break;
        case 'clear_night':
            SvgComponent = <ClearNightSVG width={defaultWidth} height={defaultHeight} />;
            break;
        case 'cloud':
            SvgComponent = <CloudSVG width={defaultWidth} height={defaultHeight} />;
            break;
        case 'cloudly_day':
            SvgComponent = <CloudlyDaySVG width={defaultWidth} height={defaultHeight} />;
            break;
        case 'cloudly_night':
            SvgComponent = <CloudlyNightSVG width={defaultWidth} height={defaultHeight} />;
            break;
        default:
            SvgComponent = <ClearDaySVG width={defaultWidth} height={defaultHeight} />; // Usar ClearDaySVG como padrão
    }

    return (
        <View className="items-center w-full h-auto">
            {SvgComponent}
            <View className="items-center">
                <Text className="text-white font-bold text-6xl">{temp}º</Text>
                <Text className="text-white text-1xl">{descricao}</Text>
                <Text className="text-white text-1xl">Max:{max}º | Min:{min}º</Text>
            </View>
        </View>
    )
}