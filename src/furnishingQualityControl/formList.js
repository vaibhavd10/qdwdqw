import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,ScrollView  } from 'react-native'
import React from 'react'
import ShellButton from '../components/shellButton'

const FormList = ({navigation}) => {
    
    const lwbacListNav = ()=>{
        navigation.navigate('Lwbac List')
    }

    const facListNav = ()=>{
        navigation.navigate('FAC List')
    }

    const lvphListNav = ()=>{
      navigation.navigate('LVPH List')
  }

  const tejasListNav = ()=>{
   navigation.navigate('HUMSAFAR,TEJAS List')
}

const lpcListNav = ()=>{
   navigation.navigate('LPC List')
}

const lwsListNav = ()=>{
   navigation.navigate('LWS List')
}

const sczListNav = ()=>{
   navigation.navigate('SCZ List')
}

const slrdListNav = ()=>{
   navigation.navigate('SLRD List')
}

const sczacListNav = ()=>{
   navigation.navigate('SCZAC List')
}


  return (
    <ScrollView style={styles.containerHead}>
  <View style={styles.container}>

   <ShellButton onPress={lwbacListNav}>1:LWBAC FORMS</ShellButton>
   <ShellButton onPress={facListNav}>2:FAC FORMS</ShellButton>
   <ShellButton onPress={lvphListNav}>3:LVPH FORMS</ShellButton>
   <ShellButton onPress={tejasListNav}>4:L2T,L3T,L2T(T),HUMSAFAR,TEJAS Forms</ShellButton>
   <ShellButton onPress={lpcListNav}>5:LPC Forms</ShellButton>
   <ShellButton onPress={lwsListNav}>6:LSCN,LSCNG,LSCNM,DDG ,LWS Forms</ShellButton>
   <ShellButton onPress={sczListNav}>7:SCZ Forms</ShellButton>
   <ShellButton onPress={slrdListNav}>8:LDSLR &SLRD</ShellButton>
   <ShellButton onPress={sczacListNav}>9:SCZAC Forms</ShellButton>
  </View>
  </ScrollView>
  )
}

export default FormList

const styles = StyleSheet.create({
    containerHead:{
        backgroundColor:'#ccffff'
     },
  container:{
     marginVertical:10,
     justifyContent:'center',
     alignItems:'center'
  },
  

})