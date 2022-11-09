import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,ScrollView  } from 'react-native'
import React from 'react'
import ShellButton from './components/shellButton'
import LogInLogOutButton from './components/logInLogOutButton'


const QciList = ({navigation}) => {
    
    const refurnishingListNav = ()=>{
        navigation.navigate('Refurnishing List')
    }
    const bogieListNav = ()=>{
        navigation.navigate('Bogie List')
    }
    const shellListNav = ()=>{
        navigation.navigate('SHELLLIST')
    }
    const Logout=()=>{
      navigation.replace('Login')
    }


  return (

 <SafeAreaView style={styles.containerHead}>
   
   
 <View style={styles.container}>
   <ShellButton onPress={refurnishingListNav}>1:Refurnishing QCI</ShellButton>
   <ShellButton onPress={bogieListNav}>2:Bogie Shop QCI</ShellButton>
   <ShellButton onPress={shellListNav}>3:Shell Shop QCI</ShellButton>
   <View style={styles.logoutHeader}>
   <LogInLogOutButton onPress={Logout}>Logout</LogInLogOutButton>
   </View>
</View>
  
</SafeAreaView>
 
  )
}

export default QciList

const styles = StyleSheet.create({
    containerHead:{
        backgroundColor:'#ccffff',
        display:'flex',
        flex:1
     },
     logoutHeader:{
      position:'absolute',
      bottom:0,
      marginBottom:20
     },
  container:{
     
      height:'100%',
     marginVertical:10,
     justifyContent:'flex-start',
     alignItems:'center'
  },
 
})