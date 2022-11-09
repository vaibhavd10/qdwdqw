import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,ScrollView  } from 'react-native'
import React from 'react'



const QMF2011TEJAS_LIST = ({navigation}) => {
    
    const AUNDERFRAMELBACT = ()=>{
        navigation.navigate('AUnderFrameLBACT')
    }

    const BSIDEWALLLBACT= ()=>{
        navigation.navigate('BSideWallLBACT')
    }

    const CENDWALLLBACT = ()=>{
      navigation.navigate('CEndWallLBACT')
  }

  const DROOFLBACT = ()=>{
   navigation.navigate('DRoofLBACT')
}

const  ESHELLLBACT= ()=>{
   navigation.navigate('EShellLBACT')
}


  return (
    <ScrollView style={styles.containerHead}>
  <View style={styles.container}>

  <TouchableOpacity style={styles.forBomx} onPress={AUNDERFRAMELBACT}>
      <Text style={styles.forBomxText}>1: A UNDERFRAME LBACT </Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.forBomx} onPress={BSIDEWALLLBACT}>
      <Text style={styles.forBomxText}>2: B- SIDEWALL LBACT</Text>
   </TouchableOpacity>
   
   <TouchableOpacity style={styles.forBomx} onPress={CENDWALLLBACT}>
      <Text style={styles.forBomxText}>3: C- ENDWALL LBACT</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.forBomx} onPress={DROOFLBACT}>
      <Text style={styles.forBomxText}>4: D- ROOF LBACT</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.forBomx} onPress={ESHELLLBACT}>
      <Text style={styles.forBomxText}>5: E- SHELL LBACT</Text>
   </TouchableOpacity>

  


  </View>
  </ScrollView>
  )
}

export default QMF2011TEJAS_LIST

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