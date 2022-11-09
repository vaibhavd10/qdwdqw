import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,ScrollView  } from 'react-native'
import React from 'react'



const ShellList = ({navigation}) => {
    
    const QMF2011= ()=>{
        navigation.navigate('QMF List')
    }

    const QMF2011LDSLR = ()=>{
        navigation.navigate('QMF2011LDSLR_LIST')
    }

    const QMF2011LWFAC= ()=>{
      navigation.navigate('QMF2011LWFAC_LIST')
  }

  const QMF2011TEJAS = ()=>{
   navigation.navigate('QMF2011TEJAS_LIST')
}




  return (
    <ScrollView style={styles.containerHead}>
  <View style={styles.container}>

  <TouchableOpacity style={styles.forBomx} onPress={QMF2011}>
      <Text style={styles.forBomxText}>1:QMF2011</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.forBomx} onPress={QMF2011LDSLR}>
      <Text style={styles.forBomxText}>2:QMF2011LDSLR</Text>
   </TouchableOpacity>
   
   <TouchableOpacity style={styles.forBomx} onPress={QMF2011LWFAC}>
      <Text style={styles.forBomxText}>3: QMF2011LWFAC</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.forBomx} onPress={QMF2011TEJAS}>
      <Text style={styles.forBomxText}>4: QMF2011TEJAS</Text>
   </TouchableOpacity>

  

  </View>
  </ScrollView>
  )
}

export default ShellList

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