import { Input } from '@/components/input'
import { Image, Text, View } from 'react-native'

import {MaterialCommunityIcons} from '@expo/vector-icons'
import { colors } from '@/styles/colors'
import { Button } from '@/components/button'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function Home() {
  return(
    <View className='flex-1 bg-green-500 items-center justify-center p-8'>

      <StatusBar style='light' />    
      
      <Image source={require("@/assets/logo.png")} className='h-16' resizeMode='contain' />
      <View className='w-full mt-12 gap-3'>
        <Input>
        <MaterialCommunityIcons name='ticket-confirmation-outline' size={20} color={colors.green[200]}/>
          <Input.Field placeholder='Código do Ingresso' />
        </Input>
        <Button title='acessar credencial' onPress={() => {}} />

        <Link href="/register" className='text-gray-100 text-base font-bold text-center mt-8'>Ainda nao possui ingresso?</Link>
      </View>
    </View>
  )
}