import { colors } from "@/styles/colors";
import { View } from "react-native";
import QRCodeSvg from 'react-native-qrcode-svg'

type QrCodeProps = {
  value: string,
  size: number
}

export function QRCode({value, size}: QrCodeProps){
  return(
    <QRCodeSvg value={value} size={size} color={colors.white} backgroundColor="transparent" />
     )
}