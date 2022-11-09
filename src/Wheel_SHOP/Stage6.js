import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from 'react-native';
import React, {useState,useEffect} from 'react';
import {RadioButton} from 'react-native-paper';
import axios from 'axios';

const Stage6 = ({navigation,route}) => {
  const id = route.params.user_id;
  console.log(id,"id")

  const [input1, setinput1] = useState();
  const [input2, setinput2] = useState();
  const [input3, setinput3] = useState();
  const [input4, setinput4] = useState();
  const [input5, setinput5] = useState();
  const [input6, setinput6] = useState();
  const [input7, setinput7] = useState();
  const [input8, setinput8] = useState();
  const [input9, setinput9] = useState();
  const [note, setnote] = useState();
  const [teststatus, setteststatus] = useState();
  const [providers, setProviders] = useState();
  const [user,setUser] = useState();



  const post1 = () => {
    axios
      .post('http://10.109.148.232:8000/api/ac2t', {
        FORM_TYPE: 'STAGE6',
        input1: input1,
        input2: input2,
        input3: input3,
        input4: input4,
        input5: input5,
        input6: input6,
        input7: input7,
        input8: input8,
        input9: input9,
        note: note,
        TEST_PASSED: true,
        requestid:id,
      })

      .then(function (response) {
        Alert.alert("form submitted");
        navigation.replace('Rites Qci');      })
      .catch(function (error) {
        // handle error
        Alert.alert(error.message);
      });
  };

  const post2 = () => {
    axios
      .post('http://10.109.148.232:8000/api/ac2t', {
        FORM_TYPE: 'STAGE6',
        input1: input1,
        input2: input2,
        input3: input3,
        input4: input4,
        input5: input5,
        input6: input6,
        input7: input7,
        input8: input8,
        input9: input9,
        note: note,
        TEST_PASSED: false,
        requestid:id,
      })

      .then(function (response) {
        Alert.alert('Form Submitted Successfully');
        navigation.replace('Rites Qci');      })
      .catch(function (error) {
        // handle error
        Alert.alert(error.message);
      });
  };



async function getAllProvider() {
    try {
      const providers = await axios.get(
        `  http://10.109.148.232:8000/api/joblink/${id}`,
      );
       setProviders([providers.data]);
      // setJobId(providers.data._id);
    } catch (error) {
      console.log(error);
    }
  }
  const text1 = 'MCF/RBL/QMF-5009';
  const [pushValue, setPushvalue] = useState('');

  useEffect(() => {
    getAllProvider2();
    },[user])

  //console.log(providers);
  const getAllProvider2= async() =>{
    try {
      const providers = await axios.get(
        'http://10.109.148.232:8000/api/userno',
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
   // sms part
  const msgpass = ()=>{
    var data = new FormData();
   data.append('cavcvd', 'vadsdvs vn ');
   data.append('aCCas mc ', 'acs, ns v,');
  
   
   
   var config = {
     method: 'post',
     url: `http://sms.heightsconsultancy.com/api/mt/SendSMS?user=software1&password=password&senderid=INFOMS&channel=TRANS&DCS=0&flashsms=0&number=${user[0].QA_NUMBER},${user[0].PROD_NUMBER}&text=Job_has_been_Passed`,
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


  const msgfail = ()=>{
    var data = new FormData();
   data.append('cavcvd', 'vadsdvs vn ');
   data.append('aCCas mc ', 'acs, ns v,');
  
   
   
   var config = {
     method: 'post',
     url: `http://sms.heightsconsultancy.com/api/mt/SendSMS?user=software1&password=password&senderid=INFOMS&channel=TRANS&DCS=0&flashsms=0&number=${user[0].QA_NUMBER},${user[0].PROD_NUMBER}&text=Job_has_been_Failed`,
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





  const passhandle = () => {
   post1();
   getAllProvider();
   msgpass();
  };

  const failhandle = () => {
    post2();
    getAllProvider();
    msgfail();
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.headerInput}>
          <Text style={styles.headerText}>M/S RITES LTD</Text>
          <Text style={styles.headerText}>
            Quality Inspection Report Wheel & Axle
          </Text>
        </View>

        <View style={styles.stage}>
          <View style={styles.headerTag}>
            <Text style={styles.text}>Stage6</Text>
          </View>

          <View style={styles.stageform}>
            <View style={styles.stageforminside}>
              <Text style={styles.text2}>Reference Drg. No:</Text>
              <Text style={styles.text2}>CRTB – LW02001</Text>
            </View>

            <View style={styles.stageforminside}>
              <Text style={styles.text2}>REF. DOC. No:</Text>
              <Text style={styles.text2}>MCF-QMS-2018-19- QC01</Text>
            </View>

            <View style={styles.stageforminside}>
              <Text style={styles.text2}>Brake Disc</Text>
              <Text style={styles.text2}>128336F81</Text>
            </View>

            <View style={styles.stageforminside}>
              <Text style={styles.text2}>Vol.</Text>
              <Text style={styles.text2}>-1</Text>
            </View>

            <View style={styles.stageforminside}>
              <Text style={styles.text2}>Dated</Text>
              <Text style={styles.text2}>17.08.2018</Text>
            </View>
          </View>
        </View>

        <View style={styles.stage}>
          <View>
            <Text style={styles.text}>Sr no.1</Text>
          </View>

          <View style={styles.stageform}>
            <View style={styles.stageforminside}>
              <Text style={styles.text2}>RBL no.</Text>
              <TextInput
                style={styles.input2}
                value={input1}
                onChangeText={setinput1}
               

              />
            </View>

            <View style={styles.headerTag}>
              <Text style={styles.text}>CTRB Left</Text>
            </View>
            <View style={styles.dateshift}>
              <View style={styles.dateshiftinside}>
                <Text style={{color: 'black'}}>CTRB No.</Text>
                <TextInput style={styles.input}
                  value={input2}
                  onChangeText={setinput2}
                 

                />
              </View>
              <View style={styles.dateshiftinside}>
                <Text style={{color: 'black'}}>Make/Date</Text>
                <TextInput style={styles.input} 
                  value={input3}
                  onChangeText={setinput3}
                 

                />
              </View>

              <View style={styles.dateshiftinside}>
                <Text style={{color: 'black'}}>Fitment Pressure</Text>
                <TextInput style={styles.input}   
                  value={input4}
                  onChangeText={setinput4}
                 

                />
              </View>

              <View style={styles.dateshiftinside}>
                <Text style={{color: 'black'}}>Lateral clearance</Text>
                <TextInput style={styles.input} 
                value={input5}
                onChangeText={setinput5}
               

                />
              </View>
            </View>

            <View style={styles.headerTag}>
              <Text style={styles.text}>CTRB Right</Text>
            </View>
            <View style={styles.dateshift}>
              <View style={styles.dateshiftinside}>
                <Text style={{color: 'black'}}>CTRB No.</Text>
                <TextInput style={styles.input} 
                value={input6}
                onChangeText={setinput6}
               

                />
              </View>
              <View style={styles.dateshiftinside}>
                <Text style={{color: 'black'}}>Make/Date</Text>
                <TextInput style={styles.input} 
                value={input7}
                onChangeText={setinput7}
               

                />
              </View>

              <View style={styles.dateshiftinside}>
                <Text style={{color: 'black'}}>Fitment Pressure</Text>
                <TextInput style={styles.input}
                value={input8}
                onChangeText={setinput8}
               

                />
              </View>

              <View style={styles.dateshiftinside}>
                <Text style={{color: 'black'}}>Lateral clearance</Text>
                <TextInput style={styles.input} 
                value={input9}
                onChangeText={setinput9}
               

                />
              </View>
            </View>

            <View style={[styles.dateshiftinside, {marginTop: 20}]}>
              <Text style={{color: 'black'}}>Note:</Text>
              <TextInput style={styles.input} 
              value={note}
                onChangeText={setnote}
               

              />
            </View>
          </View>
        </View>

        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button1} onPress={passhandle}>
            <Text style={{color: 'white', fontSize: 20}} >
              Pass
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1} onPress={failhandle}>
            <Text style={{color: 'white', fontSize: 20}} >
              Fail
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Stage6;

const styles = StyleSheet.create({
  headerTag: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'black',
    height: 50,
    width: '35%',
  },
  headerText: {
    color: 'black',
    fontSize: 15,
  },
  Maincontainer: {
    flex: 1,
    marginTop: 5,
    marginBottom: 10,
  },
  headerInput: {
    marginTop: 10,
    marginHorizontal: 5,
    padding: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#ccffff',
    borderRadius: 5,
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    marginBottom: 5,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  input2: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    marginBottom: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  text2: {
    fontSize: 15,
    color: 'black',
    flex: 1,
  },
  dateshift: {
    flexDirection: 'column',
    borderWidth: 1,
    backgroundColor: '#ccffff',
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 5,
    padding: 5,
  },
  dateshiftinside: {
    flex: 1,
    margin: 5,
  },
  stage: {
    borderWidth: 1,
    backgroundColor: '#ccffff',
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 5,
    padding: 5,
  },
  stageform: {},
  stageforminside: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  EntryObserveRadio: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  buttonView: {
    margin: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
