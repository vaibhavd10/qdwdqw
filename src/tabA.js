import React, { useState ,useEffect} from 'react';
import { StyleSheet, Text, View,PermissionsAndroid,Platform, TouchableOpacity,ToastAndroid } from 'react-native';
import axios from 'axios';

// npm install @react-navigation/material-top-tabs react-native-tab-view
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import RNHTMLtoPDF from 'react-native-html-to-pdf';


export default function TabA({navigation,route}) {

 
  

    const id =route.params.idname;
  
  
    //console.log(id,"------TAB AAAAAAAAAAAAAAAAAAAAAAAAA")
   // console.log(id,"job detail")
   // const jb = route.params.jb
  //console.log(a,b,c,d,"props")
  //const [name,setName] =useState('');
  //console.log(id)
   
  const [providers,setProviders]= useState([]);
  const [ jobcondition1,setJobCondition1] = useState();
  const [ jobcondition2,setJobCondition2] = useState();
  const [ jobcondition3,setJobCondition3] = useState();
  const [ jobcondition4,setJobCondition4] = useState();
  const [ jobcondition5,setJobCondition5] = useState();

  const [formname,setFormname] = useState();
  const [formno,setFormno] = useState();
  const [shop,setShop] = useState();
  
  //console.log(jobcondition1,"hello")
  
  
   useEffect(() => {
  
     async function getAllProvider() {
    try {
      const providers = await axios.get(
        ` http://192.168.2.122:8000/api/get/${id}`,
      );
     // console.log(providers.data);
     setProviders([providers.data]);
      // setJobId(providers.data._id);
      setJobCondition1(providers.data.JOB_ASSIGNED_A)
      setJobCondition2(providers.data.JOB_ASSIGNED_B)
      setJobCondition3(providers.data.JOB_ASSIGNED_C)
      setJobCondition4(providers.data.JOB_ASSIGNED_D)
      setJobCondition5(providers.data.JOB_ASSIGNED_E)

      setFormname(providers.data.BOGIE_TYPE)
      setShop(providers.data.SHOP_TYPE)
  
     
  
    } catch (error) {
      console.log(error);
    }
  }
  
  
  getAllProvider();
  },[providers]);
  
  
  //console.log(jobcondition1)
  //console.log(shop,"shop")
  
  
    return (
   <ScrollView>
    <View>
    {shop === 'BOGIE' ? (
      <><View style={styles.container}>
              {jobcondition1 === false ? (
                <Text style={styles.text}>M5008</Text>
              ) : (null)}
            </View><View style={styles.container}>
                {jobcondition2 === false ? (
                  <Text style={styles.text}>{formname}</Text>
                ) : (null)}
              </View><View style={styles.container}>
                {jobcondition3 === false ? (
                  <Text style={styles.text}>M5017</Text>
                ) : (null)}
              </View><View style={styles.container}>
                {jobcondition4 === false ? (
                  <Text style={styles.text}>M5023</Text>
                ) : (null)}
              </View></>
    ): (<><View style={styles.container}>
              {jobcondition1 === false ? (
                <Text style={styles.text}>STAGE 1</Text>
              ) : (null)}
            </View><View style={styles.container}>
                {jobcondition2 === false ? (
                  <Text style={styles.text}>STAGE 2</Text>
                ) : (null)}
              </View><View style={styles.container}>
                {jobcondition3 === false ? (
                  <Text style={styles.text}>STAGE 3</Text>
                ) : (null)}
              </View><View style={styles.container}>
                {jobcondition4 === false ? (
                  <Text style={styles.text}>STAGE 4&5</Text>
                ) : (null)}
              </View>
              <View style={styles.container}>
                {jobcondition5 === false ? (
                  <Text style={styles.text}>STAGE 6</Text>
                ) : (null)}
              </View></>)}
    
      </View>
      </ScrollView>
     
      
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 30,
      fontWeight: 'bold',
    },
  });