import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    RefreshControl,
    TouchableWithoutFeedback,
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  import {SafeAreaView} from 'react-native-safe-area-context';
  import {ScrollView} from 'react-native-gesture-handler';
  import axios from 'axios';
  import LogInLogOutButton from './components/logInLogOutButton';

const RitesQci = ({navigation}) => {

    const [providers, setProviders] = useState([]);
    const [jobid,setJobId] = useState();

    async function getAllProvider() {
        try {
          const providers = await axios.get(
            ' http://10.109.148.232:8000/api/get',
          );
          // console.log(providers.data);
          const filtered = providers.data.filter((user)=>{
            if (user.ASSIGNED_TO_RITES_QCI){
                return user;
            }else return null;
            
          })
          setProviders(filtered);
        //   setJobId(providers.data._id);
    
        } catch (error) {
          console.log(error);
        }
      }
      
  useEffect(() => {
     
    getAllProvider();
    },[providers]);
    


    const bar=(coach,bogie,id)=>{
        
        navigation.navigate('Rites Jobs',{
            coachs:coach,
            bogies:bogie,
            user_id:id
          })
        console.log(`hi ${coach}`)
        console.log(`hiiii ${bogie}`)

    }

    const Logout=()=>{
      navigation.replace('Login')
    }
    

  return (

    <SafeAreaView>
      <ScrollView>
      <View
        style={{
          marginHorizontal: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <TouchableOpacity
          style={styles.button1}
          onPress={Logout}
          >
          <Text style={{color: 'white'}}>Logout</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
          JOB LIST
        </Text>
        <FlatList
          style={{marginTop: 50}}
          data={providers}
          keyExtractor={item => item._id}
          // refreshControl={
          //   <RefreshControl refreshing={false} onRefresh={getAllProvider} />
          // }
          renderItem={({item}) => {
            return (
              <View style={styles.container}>
                <TouchableOpacity onPress={()=>bar(item.COACH_TYPE,item.BOGIE_TYPE,item._id)}>
                  <View style={styles.gauge}>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <Text style={{marginHorizontal: 15, fontSize: 20}}>
                        Shop Type
                      </Text>
                      <Text style={{marginHorizontal: 15, fontSize: 20}}>
                        {item.SHOP_TYPE}
                      </Text>
                    </View>
                    {item.COACH_TYPE===undefined ?(
                      <View></View>
                    ):(<View style={{display: 'flex', flexDirection: 'row'}}>
                      <Text style={{marginHorizontal: 15, fontSize: 20}}>
                        Coach Type
                      </Text>
                      <Text style={{marginHorizontal: 15, fontSize: 20}}>
                        {item.COACH_TYPE}
                      </Text>
                    </View>)}

                    {item.BOGIE_TYPE===undefined ?(
                      <View></View>
                    ):(<View style={{display: 'flex', flexDirection: 'row'}}>
                      <Text style={{marginHorizontal: 15, fontSize: 20}}>
                        Bogie Type
                      </Text>
                      <Text style={{marginLeft: 10, fontSize: 20}}>
                        {item.BOGIE_TYPE}
                      </Text>
                    </View>)}

                    {item.REWORK_ASSIGNED === true ? (
                          <View style={{display: 'flex', flexDirection: 'row'}}>
                          <Text style={{marginHorizontal: 15, fontSize: 20}}>
                             Status -
                         </Text>
                       <Text style={{marginHorizontal: 15, fontSize: 20,color:"red"}}>
                          Rework
                       </Text>
                       </View>
                      ):(null)}
                    

                    
                 
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <Text style={{marginHorizontal: 15, fontSize: 20}}>
                        Date Created
                      </Text>
                      <Text style={{marginLeft: 10, fontSize: 20}}>
                        {item.DATE_CREATED}
                      </Text>
                    </View>
                  </View>
                  
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
      </ScrollView>
    </SafeAreaView>
   
   
  )
}

export default RitesQci

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
      headertext: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
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
        color: 'black',
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
        width: '50%',
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
      viewstyle1: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'lightblue',
      },
      viewstyle2: {
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 65,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
      },
      container: {marginTop: 25, backgroundColor: '#f2f4f3'},
      gauge: {
        width: '100%',
        paddingVertical: 10,
        borderRadius: 5,
        marginHorizontal: 15,
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