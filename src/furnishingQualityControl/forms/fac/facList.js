import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,ScrollView  } from 'react-native'
import React from 'react'



const FacList = ({navigation}) => {

    const floorAndPvc = ()=>{

        navigation.navigate('FACfloorAndPvc')
     }
     const partition = ()=>{

        navigation.navigate('FACpartition')
     }
     const panel = ()=>{

        navigation.navigate('FACpanel')
     }

     const windowAndCeiling = ()=>{

        navigation.navigate('FACwindowAndCeiling')
     }

     const moulding = ()=>{

      navigation.navigate('FACmoulding')
   }
   const seatAndBerth = ()=>{

      navigation.navigate('FACseatAndBerth')
   }
   const lavatory = ()=>{

      navigation.navigate('FAClavatory')
   }
   const plumbing = ()=>{

      navigation.navigate('FACplumbing')
   }
   const airBrake = ()=>{

      navigation.navigate('FACairBrake')
   }
   const coachLowering = ()=>{

      navigation.navigate('FACcoachLowering')
   }
   const paint = ()=>{

      navigation.navigate('FACpaint')
   }
   const coachCleaning = ()=>{

      navigation.navigate('FACcoachCleaning')
   }

  return (
    
      <ScrollView style={styles.containerHead}>
    <View style={styles.container}>

    <TouchableOpacity style={styles.forBomx} onPress={floorAndPvc}>
        <Text style={styles.forBomxText}>1:Floor And Pvc</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.forBomx} onPress={partition}>
        <Text style={styles.forBomxText}>2:Partition</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.forBomx} onPress={panel}>
        <Text style={styles.forBomxText}>3:Panel</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.forBomx} onPress={windowAndCeiling}>
        <Text style={styles.forBomxText}>4:Window And Ceiling</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.forBomx} onPress={moulding}>
        <Text style={styles.forBomxText}>5:Moulding</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.forBomx} onPress={seatAndBerth}>
        <Text style={styles.forBomxText}>6:Seat And Berth</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.forBomx} onPress={lavatory}>
        <Text style={styles.forBomxText}>7:Lavatory</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.forBomx} onPress={plumbing}>
        <Text style={styles.forBomxText}>8:Plumbing</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.forBomx} onPress={airBrake}>
        <Text style={styles.forBomxText}>9:Air Brake</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.forBomx} onPress={coachLowering}>
        <Text style={styles.forBomxText}>10:Coach Lowering</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.forBomx} onPress={paint}>
        <Text style={styles.forBomxText}>11:Paint</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.forBomx} onPress={coachCleaning}>
        <Text style={styles.forBomxText}>12:Coach Cleaning</Text>
     </TouchableOpacity>

    </View>
    </ScrollView>
    
  )
}

export default FacList

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