

import { colors } from '@/styles/colors';
import { Feather } from '@expo/vector-icons';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { QRCode } from './qrcode';

type CredentialProps = {
  image?: string
  onChangeAvatar?: () => void
  onExpandQRCode?: () => void
}

export  function Credential({onChangeAvatar, onExpandQRCode, image}: CredentialProps) {
  return (
    <View className='w-full self-stretch items-center'>
      <Image source={require('@/assets/ticket/band.png')} className='h-52 w-24 z-10' />
      <View className=' bg-black/20 self-stretch items-center pb-6 border border-white/10 mx-3 -mt-5 rounded-2xl'>
        <ImageBackground 
        source={require('@/assets/ticket/header.png')} 
        className='px-6 py-8 h-40 items-center self-stretch border-b border-white/10 overflow-hidden'>
          <View className=' w-full flex-row items-center justify-between'>
            <Text className='text-zinc-50 text-sm font-bold'>Unite summit</Text>
            <Text className='text-zinc-50 text-sm font-bold'>#123</Text>
          </View>
          <View className='size-40 bg-black rounded-full' />
        </ImageBackground>

        {
          image ? 
          <TouchableOpacity  activeOpacity={0.9} onPress={onChangeAvatar}>
          <Image source={{uri: image}} className='size-36 rounded-full -mt-24' /> 
          </TouchableOpacity>
          :

          <TouchableOpacity activeOpacity={0.9} className='size-36 rounded-full -mt-24' onPress={onChangeAvatar}>
            <View className='size-36 rounded-full -mt-24 bg-gray-400 items-center justify-center'>
            <Feather name='camera' color={colors.green[400]} size={32} />
            </View>
          
          </TouchableOpacity>
        }
        

        


        <Text className='font-bold text-2xl text-zinc-50 mt-4'>Francisco Menezes</Text>
        <Text className='font-regular text-base text-zinc-300 mb-4'>francisco@email.com</Text>

        {/* <Image source={require('@/assets/ticket/qrcode.png')} className='size-32 mb-6' /> */}
        <QRCode value='Rubia te amo' size={120} />


      <TouchableOpacity activeOpacity={0.7} className='' onPress={onExpandQRCode}>
              <Text className='font-body text-orange-500 text-sm mt-6 '>Ampliar QRCode</Text>
      </TouchableOpacity>
       
      </View>
    </View>
  );
}