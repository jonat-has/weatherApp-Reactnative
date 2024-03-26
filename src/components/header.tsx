import * as React from 'react'
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import PinSVG from "../assets/header/pin.svg"
import DownArrow from "../assets/header/downArrow.svg"
import Bell from "../assets/header/bell.svg"
import { useState } from 'react';

interface header {
    cidade: string,
    pesquisar: (text: string) => void;
}


export default function Header({ cidade, pesquisar }: header) {
    const [input, setInput] = useState<boolean>(true)
    const [ nomeCidade, setNomeCidade ] = useState<string>('')

    const handleInput = () => {
        setInput(!input)
    }

    const handleChangeText = (text: string) => {
        setNomeCidade(text);
      };

    return (
        <View>
        <View className='flex-row justify-between p-2'>
            <TouchableOpacity className='flex-row justify-evenly w-auto items-center' onPress={handleInput}>
              <PinSVG/>
              <Text className="text-white px-1">{cidade}</Text>
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
       value={nomeCidade}
       onChangeText={handleChangeText}
      />
      <TouchableOpacity onPress={() => pesquisar(nomeCidade)} className='bg-cyan-500/[.4] w-[72px] h-9 rounded-md justify-center items-center absolute mt-[40px] ml-[260px]'><Text className='text-white'>Pesquisar</Text></TouchableOpacity>
      </>}
        </View>
    )
}