import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,ScrollView  } from 'react-native'
import React from 'react'



const LwbacList = ({navigation}) => {

   const floorAndPvc = ()=>{

      navigation.navigate('Floor And PVC')
   }
   const coachLoweringNav = ()=>{
      navigation.navigate('Coach Lowering')
   }
   const paintNav = ()=>{
      navigation.navigate('Paint')
   }
   const airBreakNav = ()=>{
      navigation.navigate('Air Brake')
   }
   
   const windowAndCeilingNav=()=>{
      navigation.navigate('Window Ceiling')
   }

   const mouldingNav=()=>{
      navigation.navigate('Moulding')
   }
   const coachCleaningNav=()=>{
      navigation.navigate('Coach CLeaning')
   }
   const partitionNav=()=>{
      navigation.navigate('Partition')
   }
   const panelNav=()=>{
      navigation.navigate('Panel')
   }
   const seatANdBerthNav=()=>{
      navigation.navigate('Seat And Berth')
   }
   const lavatoryNav=()=>{
      navigation.navigate('Lavatory')
   }
   const plumbingNav=()=>{
      navigation.navigate('Plumbing')
   }
  

  return (
    
      <ScrollView style={styles.containerHead}>
    <View style={styles.container}>

    <TouchableOpacity style={styles.forBomx} onPress={floorAndPvc}>
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

     
     <TouchableOpacity style={styles.forBomx} onPress={seatANdBerthNav}>
        <Text style={styles.forBomxText}>6:Seat And Berth</Text>
     </TouchableOpacity>


     <TouchableOpacity style={styles.forBomx} onPress={lavatoryNav}>
        <Text style={styles.forBomxText}>7:Lavatory</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.forBomx} onPress={plumbingNav}>
        <Text style={styles.forBomxText}>8:Plumbing</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.forBomx} onPress={airBreakNav}>
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

export default LwbacList

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