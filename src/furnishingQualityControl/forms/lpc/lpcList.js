import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,ScrollView  } from 'react-native'
import React from 'react'



const LPCList = ({navigation}) => {
    const floorAndPvcNav = ()=>{
        navigation.navigate('floorAndPvcLPC')

    }

    const partitionNav = ()=>{
        navigation.navigate('partitionLPC')

    }
    const panelNav = ()=>{
        navigation.navigate('panelLPC')

    }
    const windowAndCeilingNav = ()=>{
        navigation.navigate('windowAndCeilingLPC')

    }
    const mouldingNav = ()=>{
        navigation.navigate('mouldingLPC')

    }
    const seatAndBerthNav = ()=>{
        navigation.navigate('seatAndBerthLPC')

    }
    const lavatoryNav = ()=>{
        navigation.navigate('lavatoryLPC')

    }
    const plumbingNav = ()=>{
        navigation.navigate('plumbingLPC')

    }
    const airBrakeNav = ()=>{
        navigation.navigate('airBrakeLPC')

    }
    const coachLoweringNav = ()=>{
        navigation.navigate('coachLoweringLPC')

    }
    const paintNav = ()=>{
        navigation.navigate('paintLPC')

    }
    const coachCleaningNav = ()=>{
        navigation.navigate('coachCleaningLPC')

    }

    

  return (
    
      <ScrollView style={styles.containerHead}>
    <View style={styles.container}>

    <TouchableOpacity style={styles.forBomx} onPress={floorAndPvcNav}>
        <Text style={styles.forBomxText}>1:Floor And Pvc</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.forBomx} onPress={partitionNav}>
        <Text style={styles.forBomxText}>2:Partition</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.forBomx} onPress={panelNav}>
        <Text style={styles.forBomxText}>3:Panel</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.forBomx} onPress={windowAndCeilingNav}>
        <Text style={styles.forBomxText}>4:Window And Ceiling</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.forBomx} onPress={mouldingNav}>
        <Text style={styles.forBomxText}>5:Moulding</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.forBomx} onPress={seatAndBerthNav}>
        <Text style={styles.forBomxText}>6:Seat And Berth</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.forBomx} onPress={lavatoryNav}>
        <Text style={styles.forBomxText}>7:Lavatory</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.forBomx} onPress={plumbingNav}>
        <Text style={styles.forBomxText}>8:Plumbing</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.forBomx} onPress={airBrakeNav}>
        <Text style={styles.forBomxText}>9:Air Brake</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.forBomx} onPress={coachLoweringNav}>
        <Text style={styles.forBomxText}>10:Coach Lowering</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.forBomx} onPress={paintNav}>
        <Text style={styles.forBomxText}>11:Paint</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.forBomx} onPress={coachCleaningNav}>
        <Text style={styles.forBomxText}>12:Coach Cleaning</Text>
     </TouchableOpacity>

    </View>
    </ScrollView>
    
  )
}

export default LPCList

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