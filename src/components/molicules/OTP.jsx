import { StyleSheet , View , Text } from "react-native"
import { OtpInput } from "react-native-otp-entry"
const Otp = ({setCode}) => {
    return (
            <OtpInput
            numberOfDigits={5}
            focusColor="green"
            focusStickBlinkingDuration={500}
            onFilled={(text) => setCode(text)}
            textInputProps={{
                accessibilityLabel: "One-Time Password",
            }}
            theme={{
                containerStyle: styles.container,
                pinCodeContainerStyle: styles.pinCodeContainer,
                pinCodeTextStyle: styles.pinCodeText,
                focusStickStyle: styles.focusStick,
                focusedPinCodeContainerStyle: styles.activePinCodeContainer,
            }}
/>
    
    )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor:'#fff'
    },
    pinCodeContainer: {
       borderColor:'#808080',
       width:55,
       height:55
      },
      pinCodeText:{
      color:'#000',
      fontWeight:'600',
      fontSize:19
    },
    focusStick:{
      backgroundColor:'#9A0B09',
      fontWeight:'600',
      fontSize:15
    },
    activePinCodeContainer:{
       borderColor:'#9A0B09'
    }
   
  })

export {Otp}