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

const McfJobAssign = ({navigation, route}) => {
  const id = route.params.user_id;
  const number = 8602822069
  const [providers, setProviders] = useState([]);
  const [providers2, setProviders2] = useState([]);
  const [user,setUser]= useState();

  async function getAllProvider() {
    try {
      const providers = await axios.get(`  http://192.168.2.122:8000/api/get/${id}`);
      setProviders([providers.data]);
      // setJobId(providers.data._id);
      // console.log(providers.COACH_TYPE,"hkohj")
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllProvider();
  }, [providers]);
  
  // console.log(providers.SHOP_TYPE,"shop")
  async function handleApprove() {
    const providers2 = await axios
      .put(`  http://192.168.2.122:8000/api/get/${id}`, {
        ASSIGNED_TO_RITES_QCI: true,
      })
      .then(function (response) {
        alert('Job has been assigned');

      })
      .catch(function (response) {
        console.log(error);
      });


  }

  const rites = () => {
    navigation.navigate('Rites Qci');
  };

  const getAllProvider2= async() =>{
    try {
      const providers = await axios.get(
        'http://192.168.2.122:8000/api/userno',
      );
      // console.log(providers.data);
      setUser(providers.data);
      // console.log(providers.data)
      // setJobId(providers.data._id);
      // setQA(user.QA_NUMBER)
      // setProd(user.PROD_NUMBER)
  
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {;
    getAllProvider2();
    // console.log(pushValue, 'useeffect se saayaz hai');
  },[user]);
   // sms part
  const msg = ()=>{
    var data = new FormData();
   data.append('cavcvd', 'vadsdvs vn ');
   data.append('aCCas mc ', 'acs, ns v,');
  
   
   
   var config = {
     method: 'post',
     url: `http://sms.heightsconsultancy.com/api/mt/SendSMS?user=software1&password=password&senderid=INFOMS&channel=TRANS&DCS=0&flashsms=0&number=${user[0].QCI_NUMBER}&text=Job_has_been_Assigned_BOGIE`,
     headers: data.getHeaders ? data.getHeaders() : { 'Content-Type': 'multipart/form-data' },
     data : data
   };
   
   axios(config)
   .then(function (response) {
     console.log(JSON.stringify(response.data));
   })
   .catch(function (error) {
     console.log(error);
   });
  }

  const msg2 = ()=>{
    var data = new FormData();
   data.append('cavcvd', 'vadsdvs vn ');
   data.append('aCCas mc ', 'acs, ns v,');
  
   
   
   var config = {
     method: 'post',
     url: `http://sms.heightsconsultancy.com/api/mt/SendSMS?user=software1&password=password&senderid=INFOMS&channel=TRANS&DCS=0&flashsms=0&number=${user[0].QCI_NUMBER}&text=Job_has_been_Assigned_WHEEL`,
     headers: data.getHeaders ? data.getHeaders() : { 'Content-Type': 'multipart/form-data' },
     data : data
   };
   
   axios(config)
   .then(function (response) {
     console.log(JSON.stringify(response.data));
   })
   .catch(function (error) {
     console.log(error);
   });
  }


  const postsms=()=>{
    handleApprove();
    // msg();
    console.log("BOGIE")
  }

  const postsms2=()=>{
    handleApprove();
    // msg2();
    console.log("Wheel")
  }


  return (
    <SafeAreaView>
      <View
        style={{
          marginHorizontal: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
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
                <TouchableOpacity>
                  <View style={styles.gauge}>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <Text style={{marginHorizontal: 15, fontSize: 20}}>
                        Shop Type
                      </Text>
                      <Text style={{marginHorizontal: 15, fontSize: 20}}>
                        {item.SHOP_TYPE}
                      </Text>
                    </View>
                    {item.COACH_TYPE === undefined ? (
                      <View></View>
                                        ):(<View style={{display: 'flex', flexDirection: 'row'}}>
                      <Text style={{marginHorizontal: 15, fontSize: 20}}>
                        Coach Type
                      </Text>
                      <Text style={{marginHorizontal: 15, fontSize: 20}}>
                        {item.COACH_TYPE}
                      </Text>
                    </View>)}
                    {item.BOGIE_TYPE === undefined ?(
                      <View></View>
                    ):(<View style={{display: 'flex', flexDirection: 'row'}}>
                      <Text style={{marginHorizontal: 15, fontSize: 20}}>
                        Bogie Type
                      </Text>
                      <Text style={{marginLeft: 10, fontSize: 20}}>
                        {item.BOGIE_TYPE}
                      </Text>
                    </View>)}
                    {item.REF_WHEEL===undefined ?(
                        <View></View>
                      ):(<View style={{display: 'flex', flexDirection: 'row'}}>
                        <Text style={{marginHorizontal: 15, fontSize: 20}}>
                           Applicable Drawing No.
                        </Text>
                        <Text style={{marginLeft: 10, fontSize: 20}}>
                          {item.REF_WHEEL}
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
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    
                    {item.ASSIGNED_TO_RITES_QCI === false && item.SHOP_TYPE === "BOGIE" ? (
                        <TouchableOpacity
                      style={styles.button1}
                      onPress={postsms}>
                      <Text style={{color: 'white'}}>
                        Assign Job to RITES QCI
                      </Text>
                    </TouchableOpacity>
                    ): item.ASSIGNED_TO_RITES_QCI === false && item.SHOP_TYPE === "Wheel" ? (
                      <TouchableOpacity
                      style={styles.button1}
                      onPress={postsms2}>
                      <Text style={{color: 'white'}}>
                        Assign Job to RITES QCI
                      </Text>
                    </TouchableOpacity>
                    ):
                    (null)}
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default McfJobAssign;

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
});
