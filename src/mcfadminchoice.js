import { StyleSheet, Text, View ,TouchableOpacity,FlatList,RefreshControl,TouchableWithoutFeedback} from 'react-native'
import React, { useState ,useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import LogInLogOutButton from './components/logInLogOutButton'
import axios from 'axios'


export default McfChoice = ({navigation,route}) => {
  

    const Bogie =() =>{
        navigation.navigate('QA')
    };
    const wheel =()=>{
      navigation.navigate('QA Wheel')
    }
    const rites =()=>{
      navigation.navigate('Rites Qci')
    }

    const Logout=()=>{
      navigation.replace('Login')
    }

    // const Home =()=>{
    //   navigation.navigate('Root')
    // }

  return (
    <SafeAreaView>
        <ScrollView>
           <TouchableOpacity
          style={styles.button1}
          onPress={Logout}
          >
          <Text style={{color: 'white'}}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button1}
          onPress={Bogie}
          >
          <Text style={{color: 'white'}}>Bogie</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button1}
          onPress={wheel}
          >
          <Text style={{color: 'white'}}>Wheel</Text>
        </TouchableOpacity>
      </ScrollView>
      </SafeAreaView>)
}

const styles = StyleSheet.create({
    checkbox: {
        alignSelf: 'center',
      },
      container: {
        backgroundColor: 'white',
        padding: 16,
      },
      dropdown: {
        height: 50,
        borderColor: 'white',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
      },
      headertext:{
    
        fontSize: 25, fontWeight: 'bold', textAlign: 'center'
      },
      icon: {
        marginRight: 5,
      },
      label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
        color:'black'
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
      button1: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        marginBottom: 20,
        borderRadius: 25,
        backgroundColor: 'black',
        marginHorizontal: 120,
        marginTop: 20,
        height: 40,
      },
      boxstyle: {
        borderRadius: 10,
        paddingVertical: 20,
        backgroundColor: 'white',
        marginBottom: 10,
      },
      textstyle: {
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        paddingBottom: 10,
        color: 'black',
      },
      viewstyle1:{
    
        padding: 10,
                alignItems: 'center',
                backgroundColor: 'lightblue',
      },
      viewstyle2:{
        borderRadius: 10,
                  paddingVertical: 15,
                  paddingHorizontal: 65,
                  backgroundColor: 'white',
                  display: 'flex',
                  flexDirection: 'row',
      },
      container: {marginTop: 25, backgroundColor: '#f2f4f3'},
  gauge: {
    width:"100%",
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal:15,
    backgroundColor: 'lightblue',

  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 20,
  },
  headertext: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Courier New',
    color: 'black',
  },
  headerv: {
    marginTop: 10,
  },
})