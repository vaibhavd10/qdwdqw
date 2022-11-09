import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,ScrollView  } from 'react-native'
import React from 'react'

const LvphList = ({navigation}) => {

    const floorAndChequer = ()=>{
        navigation.navigate('floorAndChequer')
    }

    const ceiling = ()=>{
        navigation.navigate('ceilingLVPH')
    }

    const panel = ()=>{
        navigation.navigate('panelLVPH')
    }

    const moudlingAndDoor = ()=>{
        navigation.navigate('mouldingAndDoorLVPH')
    }

    const airBrake = ()=>{
        navigation.navigate('airBrakeLVPH')
    }

    const coachLowering = ()=>{
        navigation.navigate('coachLoweringLVPH')
    }
    const paint = ()=>{
        navigation.navigate('paintLVPH')
    }

    const coachCleaning = ()=>{
        navigation.navigate('coachCleaningLVPH')
    }


  return (
      <ScrollView style={styles.containerHead}>
    <View style={styles.container}>

    <TouchableOpacity style={styles.forBomx} onPress={floorAndChequer}>
        <Text style={styles.forBomxText}>1:Floor And Chequer Sheet</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.forBomx} onPress={ceiling}>
        <Text style={styles.forBomxText}>2:Ceiling</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.forBomx} onPress={panel}>
        <Text style={styles.forBomxText}>3:Panel</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.forBomx} onPress={moudlingAndDoor}>
        <Text style={styles.forBomxText}>4:Moulding And Door</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.forBomx} onPress={airBrake}>
        <Text style={styles.forBomxText}>5:Air Brake</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.forBomx} onPress={coachLowering}>
        <Text style={styles.forBomxText}>6:Coach Lowering</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.forBomx} onPress={paint}>
        <Text style={styles.forBomxText}>7:Paint</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.forBomx} onPress={coachCleaning}>
        <Text style={styles.forBomxText}>8:Coach Cleaning</Text>
     </TouchableOpacity>
     
     

    </View>
    </ScrollView>
  )
}

export default LvphList

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