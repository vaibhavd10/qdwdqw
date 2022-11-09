import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,ScrollView  } from 'react-native'
import React from 'react'



const QMF2011LdslrList = ({navigation}) => {
    
    const AUNDERFRAMELDSLR = ()=>{
        navigation.navigate('AunderframeLdslr')
    }

    const BSIDEWALLLDSLR= ()=>{
        navigation.navigate('BSideWallLdslr')
    }

    const CENDWALLLDSLR = ()=>{
      navigation.navigate('CEndWallLdslr')
  }

  const DROOFLDSLR = ()=>{
   navigation.navigate('DRoofLdslr')
}

const  ESHELLLDSLR= ()=>{
   navigation.navigate('EshellLdslr')
}


  return (
    <ScrollView style={styles.containerHead}>
  <View style={styles.container}>

  <TouchableOpacity style={styles.forBomx} onPress={AUNDERFRAMELDSLR}>
      <Text style={styles.forBomxText}>1: A UNDERFRAME LDSLR </Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.forBomx} onPress={BSIDEWALLLDSLR}>
      <Text style={styles.forBomxText}>2: B- SIDEWALL LDSLR</Text>
   </TouchableOpacity>
   
   <TouchableOpacity style={styles.forBomx} onPress={CENDWALLLDSLR}>
      <Text style={styles.forBomxText}>3: C- ENDWALL LDSLR</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.forBomx} onPress={DROOFLDSLR}>
      <Text style={styles.forBomxText}>4: D- ROOF LDSLR</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.forBomx} onPress={ESHELLLDSLR}>
      <Text style={styles.forBomxText}>5: E- SHELL LDSLR</Text>
   </TouchableOpacity>

  


  </View>
  </ScrollView>
  )
}

export default QMF2011LdslrList

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