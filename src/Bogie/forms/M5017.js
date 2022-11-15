import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
  } from 'react-native';
  import React, {useState} from 'react';
  import moment from 'moment';
  import axios from 'axios';

  import {RadioButton} from 'react-native-paper';
  
  const M5017 = ({navigation,route}) => {
    const id = route.params.user_id;
    const coach = route.params.coachs;
    const bogie = route.params.bogies;

    const [date,setDate] = useState (new Date());
    const datee = `${moment(date).format('MMMM Do YYYY')}`
    const [providers,setProviders] = useState();

   const [compoNo, setcompoNo] = useState('');
   const[bolsterNo,setBolsterNo]=useState();
   const [remark1,setremark1]=useState();
    const [remark2,setremark2]=useState();
    const [remark3,setremark3]=useState();
    const [remark4,setremark4]=useState();
    const [remark5,setremark5]=useState();
    const [remark6,setremark6]=useState();
    const [remark7,setremark7]=useState();
    const [remark8,setremark8]=useState();
    const [observed1,setObserved1]=useState();
    const [observed2,setObserved2]=useState();
    const [observed3,setObserved3]=useState();
    const [observed4,setObserved4]=useState();
    const [observed5,setObserved5]=useState();
    const [observed6,setObserved6]=useState();
    const [observed7,setObserved7]=useState();
    
    const [checked1, setchecked1] = useState('');
    const [checked2, setchecked2] = useState('');
    const form = "M5017";
    const [user,setUser] = useState();
    const [providers3,setProviders3] = useState([]);
    var [count, setCount] = useState();
  

    const postDataUsingSimplePostCall1 = () => {
    
    
      axios
        .post(' http://192.168.2.122:8000/api/ac2t', {
          FORM_TYPE: form,
          M5008_Date:           datee,   
          M5008_Drawing_No:     compoNo,    
          M5008_bolster_no:   bolsterNo,
          M5008_Remark1:   remark1,
          M5008_Remark2:   remark2,
          M5008_Remark3:   remark3,
          M5008_Remark4:   remark4,
          M5008_Remark5:   remark5,
          M5008_Remark6:   remark6,
          M5008_Remark7:   remark7,
          M5008_Remark8:   remark8,
          
          M5008_Actual1:    observed1,
          M5008_Actual2:    observed2,
          M5008_Actual3:    observed3,
          M5008_Actual4:    observed4,
          M5008_Actual5:    observed5,
          M5008_Actual6:    observed6,
          M5008_Actual7:    observed7,

          M5008_Actual8:    checked1,
          M5008_Actual9:    checked2,
          
          TEST_PASSED:           true,
          requestid:id,
        })

        .then(function (response) {
          // handle success
          //alert(JSON.stringify(response.data));
          alert('Form Submitted Successfully')
          //setPostId(response.data._id)
          
          navigation.navigate('Rites Qci')
        })
        .catch(function (error) {
          // handle error
          alert(error.message);
        });
    
  };



 





  const postDataUsingSimplePostCall2 = () => {
    
    axios
    .post(' http://192.168.2.122:8000/api/ac2t', {
      FORM_TYPE: form,
                M5008_Date:           datee,   
               M5008_Drawing_No:     compoNo,    
               M5008_bolster_no:   bolsterNo,
               M5008_Remark1:   remark1,
               M5008_Remark2:   remark2,
               M5008_Remark3:   remark3,
               M5008_Remark4:   remark4,
               M5008_Remark5:   remark5,
               M5008_Remark6:   remark6,
               M5008_Remark7:   remark7,
               M5008_Remark8:   remark8,
               
               M5008_Actual1:    observed1,
               M5008_Actual2:    observed2,
               M5008_Actual3:    observed3,
               M5008_Actual4:    observed4,
               M5008_Actual5:    observed5,
               M5008_Actual6:    observed6,
               M5008_Actual7:    observed7,
     
               M5008_Actual8:    checked1,
               M5008_Actual9:    checked2,
      TEST_PASSED:           false,
     requestid:id,

        })

        .then(function (response) {
          // handle success
          //alert(JSON.stringify(response.data));
          
          alert('Form Submitted Successfully')
          navigation.navigate('Rites Qci');
        })
        .catch(function (error) {
          // handle error
          alert(error.message);
        });
    
  };


  async function getAllProvider() {
    try {
      const providers = await axios.get(`  http://192.168.2.122:8000/api/joblink/${id}`);
      setProviders([providers.data]);
      // setJobId(providers.data._id);
    } catch (error) {
      console.log(error);
    }
  }

  async function assign (){
    const providers2 = await axios
    .put(`  http://192.168.2.122:8000/api/get/${id}`, {
      JOB_ASSIGNED_C: true,
    })
    .then(function (response) {
     
    })
    .catch(function (response) {
      console.log(error);
    });
   }


   useEffect(() => {
    getAllProvider2();
    },[user]);

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

  async function getAllProvider3() {
    try {
      const providers = await axios.get(`  http://192.168.2.122:8000/api/get/${id}`);
      setProviders3(providers.data);
      // setJobId(providers.data._id);
      setCount(providers3.COUNTER_C)
      // console.log(providers.COACH_TYPE,"hkohj")
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    getAllProvider3();
  }, [providers3]);
     
     // 
  // console.log(providers3.REWORK_ASSIGNED_A,"rework stage 1")
  
  
  // setting counter
  async function assignRework (){
    const providers2 = await axios
    .put(`  http://192.168.2.122:8000/api/get/${id}`, {
      JOB_ASSIGNED_C: true,
      COUNTER_C: ++count,
      
    })
    .then(function (response) {
     
    })
    .catch(function (response) {
      console.log(error);
    });
   }
  
   async function assignReworkPass (){
    const providers2 = await axios
    .put(`  http://192.168.2.122:8000/api/get/${id}`, {
      JOB_ASSIGNED_C: true,
      COUNTER_C: ++count,
      REWORK_ASSIGNED_C:false
    })
    .then(function (response) {
     
    })
    .catch(function (response) {
      console.log(error);
    });
   }
  




  const passhandle= ()=>{
    postDataUsingSimplePostCall1();
   
   getAllProvider();
   assign();
   msgpass();
  };
  const failhandle= ()=>{
    postDataUsingSimplePostCall2();   
      getAllProvider();
      assign();
      msgfail();
  };

  const passhandlerework=()=>{
    postDataUsingSimplePostCall1();
    getAllProvider();
    assignReworkPass();
    msgpass();
  }

  const failhandlerework = ()=>{
    postDataUsingSimplePostCall2();
    getAllProvider();
    msgfail();
    assignRework();
  }
    

    const home = () =>{
      navigation.navigate('Bogie List')
     };
  
    return (
      <ScrollView style={{backgroundColor:"white"}}>
        <View style={styles.Maincontainer}>
        <View style={styles.MainHeadingContainer}>
          <View style={styles.imageTag}>
        <Image
            source={require('../../../assets/images.png')}
            style={{
              width: 70,
              height: 70,
              resizeMode: 'contain',
            }}
          />
        </View>
            <View style={styles.headerTag}>
                <Text style={styles.headerText}>Modern Coach Factory Raebareli</Text>
                <Text style={styles.headerText}>QUALITY CONTROL INSPECTION REPORT (QCI) </Text>
                
            </View>
          </View>
          
          <View style={styles.MainForm}>
  
            {/* Form Entery Section Start */}
  
            <View style={styles.MainFormEntry}>

{/* Form Entry First Section Start */}
<View style={styles.MainFormFirstEntery}>
                
                <View style={styles.FirstEntREMARKS}>
                  <Text style={{fontSize:20,color:"black",fontWeight:"bold"}}>Bogie Bolster no.: -</Text>
                  <TextInput
                    style={styles.FirstEntREMARKSInput}
                    onChangeText={bolsterNo => setBolsterNo(bolsterNo)}
                    value={bolsterNo}
                  />
                </View>
              </View>
              {/* Form Entry Third Section End */}

                {/* Form Entry First Section Start */}
                <View style={styles.MainFormFirstEntery}>
                  <View style={styles.FirstEntREMARKS}>
                  <Text style={styles.FirstEntREMARKSText1}>DATE</Text>
                  <Text style={styles.FirstEntREMARKSText1}>{datee}</Text>

                  
                </View>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>1. Nature of QC Inspection</Text>
                  <Text style={styles.FirstEntObserveText1}>Audit/100%</Text>
                </View>
              
                <View style={styles.FirstEntREMARKS}>
                  <Text style={styles.FirstEntREMARKSText1}>2.Sub Assembly/ Assembly/</Text>
                  <Text style={styles.FirstEntREMARKSText1}>Complete{'\n'} 
                   bogie bolster{'\n'} 
                  fabricated at{'\n'} 
                   MCF/RBL{'\n'} </Text>
                 
                </View>
                <View style={styles.FirstEntREMARKS}>
                  <Text style={styles.FirstEntREMARKSText1}>3.Component No.</Text>
                  <TextInput
                    style={styles.FirstEntREMARKSInput}
                    value={compoNo}
                    onChangeText={setcompoNo}
                  />
                </View>

                <View style={styles.FirstEntREMARKS}>
                  <Text style={styles.FirstEntREMARKSText1}>4.Stage</Text>
                  <Text style={styles.FirstEntREMARKSText1}>Bogie bolster fabrication</Text>
                </View>

                <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                5.Status	
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>Cleared</Text>
                  <RadioButton
                    value="Cleared"
                    status={checked1 === 'Cleared' ? 'checked' : 'unchecked'}
                    onPress={() => setchecked1('Cleared')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Cleared</Text>
                  <RadioButton
                    value="Not Cleared"
                    status={
                      checked1 === 'Not Cleared' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setchecked1('Not Cleared')}
                  />
                </View>
              </View>

              <View style={styles.FirstEntREMARKS}>
                  <Text style={styles.FirstEntREMARKSText1}>6.Observation as under</Text>
                  <TextInput
                    style={styles.FirstEntREMARKSInput}
                    onChangeText={setremark1}
                    value={remark1}
                  />
                </View>

              </View>
              {/* Form Entry Third Section End */}
                
              {/* Form Entry First Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>1 Length of bogie bolster</Text>
                <View style={styles.FirstEntREMARKS}>
                  <Text style={styles.FirstEntREMARKSText1}>ACTUAL (mm)</Text>
                 <Text style={styles.FirstEntREMARKSText1}>3030 ± 6.0</Text>
                </View>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>OBSERVED (mm)</Text>
                  <TextInput
                    style={styles.FirstEntREMARKSInput}
                    onChangeText={setObserved1}
                    value={observed1}
                  />
                </View>
              
                <View style={styles.FirstEntREMARKS}>
                  <Text style={styles.FirstEntREMARKSText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntREMARKSInput}
                    onChangeText={setremark2}
                    value={remark2}
                  />
                </View>
              </View>
              {/* Form Entry Third Section End */}

                {/* Form Entry First Section Start */}
                <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>2	Height of bogie bolster.</Text>
                <View style={styles.FirstEntREMARKS}>
                  <Text style={styles.FirstEntREMARKSText1}>ACTUAL (mm)</Text>
                 <Text style={styles.FirstEntREMARKSText1}>733 ± 3</Text>
                </View>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>OBSERVED (mm)</Text>
                  <TextInput
                    style={styles.FirstEntREMARKSInput}
                    onChangeText={setObserved1}
                    value={observed2}
                  />
                </View>
              
                <View style={styles.FirstEntREMARKS}>
                  <Text style={styles.FirstEntREMARKSText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntREMARKSInput}
                    onChangeText={setremark3}
                    value={remark3}
                  />
                </View>
              </View>
              {/* Form Entry Third Section End */}

                {/* Form Entry First Section Start */}
                <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>3	Outer width of bogie bolster (LH).</Text>
                <View style={styles.FirstEntREMARKS}>
                  <Text style={styles.FirstEntREMARKSText1}>ACTUAL (mm)</Text>
                 <Text style={styles.FirstEntREMARKSText1}>1040 ± 4</Text>
                </View>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>OBSERVED (mm)</Text>
                  <TextInput
                    style={styles.FirstEntREMARKSInput}
                    onChangeText={setObserved1}
                    value={observed3}
                  />
                </View>
              
                <View style={styles.FirstEntREMARKS}>
                  <Text style={styles.FirstEntREMARKSText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntREMARKSInput}
                    onChangeText={setremark4}
                    value={remark4}
                  />
                </View>
              </View>
              {/* Form Entry Third Section End */}

                {/* Form Entry First Section Start */}
                <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>4	Outer width of bogie bolster (RH).</Text>
                <View style={styles.FirstEntREMARKS}>
                  <Text style={styles.FirstEntREMARKSText1}>ACTUAL (mm)</Text>
                 <Text style={styles.FirstEntREMARKSText1}>1040 ± 4</Text>
                </View>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>OBSERVED (mm)</Text>
                  <TextInput
                    style={styles.FirstEntREMARKSInput}
                    onChangeText={setObserved1}
                    value={observed4}
                  />
                </View>
              
                <View style={styles.FirstEntREMARKS}>
                  <Text style={styles.FirstEntREMARKSText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntREMARKSInput}
                    onChangeText={setremark5}
                    value={remark5}
                  />
                </View>
              </View>
              {/* Form Entry Third Section End */}

                {/* Form Entry First Section Start */}
                <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>5	Distance between metal stop in length (LH).</Text>
                <View style={styles.FirstEntREMARKS}>
                  <Text style={styles.FirstEntREMARKSText1}>ACTUAL (mm)</Text>
                 <Text style={styles.FirstEntREMARKSText1}>~1945</Text>
                </View>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>OBSERVED (mm)</Text>
                  <TextInput
                    style={styles.FirstEntREMARKSInput}
                    onChangeText={setObserved1}
                    value={observed5}
                  />
                </View>
              
                <View style={styles.FirstEntREMARKS}>
                  <Text style={styles.FirstEntREMARKSText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntREMARKSInput}
                    onChangeText={setremark6}
                    value={remark6}
                  />
                </View>
              </View>
              {/* Form Entry Third Section End */}

                {/* Form Entry First Section Start */}
                <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>6	Distance between metal stop in length (RH).</Text>
                <View style={styles.FirstEntREMARKS}>
                  <Text style={styles.FirstEntREMARKSText1}>ACTUAL (mm)</Text>
                 <Text style={styles.FirstEntREMARKSText1}>3030 ± 6.0</Text>
                </View>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>OBSERVED (mm)</Text>
                  <TextInput
                    style={styles.FirstEntREMARKSInput}
                    onChangeText={setObserved1}
                    value={observed6}
                  />
                </View>
              
                <View style={styles.FirstEntREMARKS}>
                  <Text style={styles.FirstEntREMARKSText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntREMARKSInput}
                    onChangeText={setremark7}
                    value={remark7}
                  />
                </View>
              </View>
              {/* Form Entry Third Section End */}

                {/* Form Entry First Section Start */}
                <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>7	Visually Check Welding and grinding of bolster.</Text>
                
                <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  ACTUAL (mm)
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checked2 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setchecked2('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={
                      checked2 === 'NOT OK' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setchecked2('NOT OK')}
                  />
                </View>
              </View>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>OBSERVED (mm)</Text>
                  <TextInput
                    style={styles.FirstEntREMARKSInput}
                    onChangeText={setObserved1}
                    value={observed7}
                  />
                </View>
              
                <View style={styles.FirstEntREMARKS}>
                  <Text style={styles.FirstEntREMARKSText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntREMARKSInput}
                    onChangeText={setremark8}
                    value={remark8}
                  />
                </View>
              </View>
              {/* Form Entry Third Section End */}
  
              
            
            </View>
  
            {/* Form Entery Section 1St End */}
          </View>
          {providers3.REWORK_ASSIGNED_C === false ? (
          <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button1}
          onPress={passhandle}>
            <Text
              style={{color: 'white', fontSize: 20}}
             
              >
              Pass
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1} onPress={failhandle}>
            <Text style={{color: 'white', fontSize: 20}}>Fail</Text>
          </TouchableOpacity>
        </View>
        ):(
          <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button1}
          onPress={passhandlerework}>
            <Text
              style={{color: 'white', fontSize: 20}}>
              Pass
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1} onPress={failhandlerework}>
            <Text style={{color: 'white', fontSize: 20}}>Fail</Text>
          </TouchableOpacity>
        </View>
        )}
          </View>
      </ScrollView>
    );
  };
  
  export default M5017;
  
  const styles = StyleSheet.create({
    header:{
      margin:10,
      
     
  },
  headerTag:{
      justifyContent:'center',
      alignItems:'center',
      marginVertical:10
  },
  headerText:{
     color:'black',
     fontSize:20
  },

  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'black',
    height: 50,
    width: '35%',
  },
  
  headerInput:{
      marginTop:10,
      paddingTop:20,
      flexDirection:'row',
      justifyContent:"space-around",
      borderWidth:1,
      paddingBottom:10
      
  },
  
  headerInputRow:{
      width:'50%'
     
  },
  headerInputRowItem:{
      alignItems:'center',
     flexDirection:'row',
     paddingHorizontal:5
     
  },
  headerInputRowText:{
      flex:1,
   color:'black'
  },
  headerInputRowInput:{
      flex:2,
      backgroundColor:'white',
      margin:2,
      borderRadius:3
  },
    Maincontainer: {
      marginTop: 5,
      marginBottom: 10,
    },
    MainHeadingContainer: {
      flexDirection: 'column',
      backgroundColor: '#fff',
      marginTop: 10,
      marginHorizontal:5,
      borderStyle: 'solid',
    },
    Headerimage: {
      height: 80,
      width: 80,
      backgroundColor: '#fff',
      marginLeft: 5,
      marginTop: 5,
    },
    headerText1: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'purple',
    },
    viewText1: {
      flexDirection: 'column',
      marginLeft: 5,
      width:"50%",
      justifyContent:"center",
      alignItems:'center'
    },
    viewText2: {
      flexDirection: 'column',
      marginLeft: 10,
      width:"50%",
      justifyContent:"center",
      alignItems:'center'

    },
    MainContainers: {
      backgroundColor: '#FFFFFF',
      margin: 5,
    },
    imageTag:{
      justifyContent:'center',
      alignItems:'center',
  },
  headerTag:{
      justifyContent:'center',
      alignItems:'center',
      marginVertical:10
  },
  headerText:{
     color:'black',
     fontSize:20
  },
  
    MainFormTag: {
      alignItems: 'center',
      backgroundColor: '#e6fff9',
    },
  
    MainFormTagText: {
      fontFamily: 'Helvetica Neue',
      fontSize: 30,
      fontWeight: 'bold',
      color: 'black',
    },
  
    // FirstTagEntery css
  
    MainFormEntry: {
      marginBottom: 20,
      borderStyle: 'solid',
    },
  
    MainFormFirstEntery: {
      padding: 8,
      marginBottom: 20,
      borderWidth: 1,
      borderStyle: 'solid',
      marginHorizontal: 10,
      paddingVertical: 30,
      backgroundColor:"#ccffff"
    },
  
    FirstEntText: {
      textAlign: 'left',
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
    },
  
    FirstEntParaText1: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
    },
  
    FirstEntParaText2: {
      fontSize: 20,
      color: 'black',
      fontWeight: '500',
    },
  
    FirstEntSpeci: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 30,
      marginTop: 10,
    },
  
    FirstEntSpeciText1: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
    },
  
    FirstEntSpeciText2: {
      fontSize: 20,
      color: 'black',
      fontWeight: '500',
    },
  
    FirstEntObserve: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      marginTop: 10,
    },
  
    FirstEntObserveText1: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'black',
    },
  
    FirstEntObserveInput: {
      height: 40,
      width: 220,
      borderWidth: 1,
    },
  
    FirstEntREMARKS: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      marginTop: 10,
    },
  
    FirstEntREMARKSText1: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'black',
    },
  
    FirstEntREMARKSInput: {
      height: 40,
      width: "50%",
      borderWidth: 1,
      marginBottom: 5,
      backgroundColor:"white"
    },
  
    EntryObserveRadio: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 5,
    },
  
    FirstEntObserveRadio: {
      fontSize: 20,
      fontWeight: '500',
      color: 'black',
    },
  
    FiveEntryPart: {
      marginBottom: 10,
      borderWidth: 1,
      borderStyle: 'solid',
      padding: 10,
    },
  
    SubObserve: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      marginTop: 10,
    },
  
    SubObserveInput: {
      height: 40,
      width: 220,
      borderWidth: 1,
    },
  
    SubObserveText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
    },
  
    SubObserveREMARKS: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      marginTop: 10,
    },
  
    SubObserveREMARKSText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
    },
  
    SubObserveREMARKSInput: {
      height: 40,
      width: 220,
      borderWidth: 1,
    },
  
    shellinfo: {
      flexDirection: 'row',
      borderWidth: 1,
      borderStyle: 'solid',
    },
  
    ShellHeadingInput: {
     
      height: 35,
      width: 105,
      borderWidth: 1,
      marginTop:10,
      marginBottom:10,
      marginLeft:10
    },
    buttonView: {
      margin: 20,
      justifyContent: 'space-between',
      flexDirection:"row",
    },
  
    ShellText:{
      color:'black',
       fontSize:15,
      justifyContent:'center',
      alignItems:'center',
      marginTop:15,
      marginLeft:10
  
    }
  });
  