import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,ScrollView  } from 'react-native'
import React from 'react'



const QMF2011LWFACLIST= ({navigation}) => {
    
    const AUNDERFRAMELWFAC = ()=>{
        navigation.navigate('AunderframeLWFAC')
    }

    const BSIDEWALLLWFAC= ()=>{
        navigation.navigate('BSideWallLWFAC')
    }

    const CENDWALLLWFAC = ()=>{
      navigation.navigate('CEndWallLWFAC')
  }

  const DROOFLWFAC = ()=>{
   navigation.navigate('DRoofLWFAC')
}

const  ESHELLLWFAC= ()=>{
   navigation.navigate('EShellLWFAC')
}


  return (
    <ScrollView style={styles.containerHead}>
  <View style={styles.container}>

  <TouchableOpacity style={styles.forBomx} onPress={AUNDERFRAMELWFAC}>
      <Text style={styles.forBomxText}>1: A UNDERFRAME LWFAC </Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.forBomx} onPress={BSIDEWALLLWFAC}>
      <Text style={styles.forBomxText}>2: B- SIDEWALL LWFAC</Text>
   </TouchableOpacity>
   
   <TouchableOpacity style={styles.forBomx} onPress={CENDWALLLWFAC}>
      <Text style={styles.forBomxText}>3: C- ENDWALL LWFAC</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.forBomx} onPress={DROOFLWFAC}>
      <Text style={styles.forBomxText}>4: D- ROOF LWFAC</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.forBomx} onPress={ESHELLLWFAC}>
      <Text style={styles.forBomxText}>5: E- SHELL LWFAC</Text>
   </TouchableOpacity>

  


  </View>
  </ScrollView>
  )
}

export default QMF2011LWFACLIST

const styles = StyleSheet.create({
    containerHead:{
        backgroundColor:'#ccffff'
     },
  container:{
     marginVertical:10,
     justifyContent:'center',
     alignItems:'center'
  },
  forBomx:{
     justifyContent:'center',
     alignItems:'center',
     marginVertical:10,
     borderWidth:1,
     width:250,
     height:50,
     borderRadius:5,
     backgroundColor:"#00cc99"
  },
  forBomxText:{
     color:'black',
     fontsize:25
  }

})