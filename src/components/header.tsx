import * as React from 'react'
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import PinSVG from "../assets/header/pin.svg"
import DownArrow from "../assets/header/downArrow.svg"
import Bell from "../assets/header/bell.svg"
import { useState } from 'react';

export default function Header( {data}: any ) {
    const [input, setInput] = useState(true)


    const cityName = data.city_name
    const handleInput = () => {
        setInput(!input)
    }

    return (
        <View>
        <View className='flex-row justify-between p-2'>
            <TouchableOpacity className='flex-row justify-evenly w-24 items-center' onPress={handleInput}>
              <PinSVG/>
              <Text className="text-white">{cityName}</Text>
              <DownArrow/>
            </TouchableOpacity>
            <View>
                <TouchableOpacity>
                <Bell/>
                </TouchableOpacity>
            </View>
        </View>
        {input ? <></> :<>
       <TextInput
       className='w-64 h-9 p-2 bg-white text-black rounded-md absolute mt-[40px]'
       placeholder="Digite o nome da cidade"
       autoCapitalize="none"
      />
      <TouchableOpacity className='bg-cyan-500/[.4] w-[72px] h-9 rounded-md justify-center items-center absolute mt-[40px] ml-[260px]'><Text className='text-white'>Pesquisar</Text></TouchableOpacity>
      </>}
        </View>
    )
}