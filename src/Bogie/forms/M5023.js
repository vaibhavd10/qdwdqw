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
  
  const M5023 = ({navigation,route}) => {
    const id = route.params.user_id;
    const coach = route.params.coachs;
    const bogie = route.params.bogies;
    const [date,setDate] = useState (new Date());
    const datee = `${moment(date).format('MMMM Do YYYY')}`
    const [providers,setProviders] = useState();

    const[bogieFrameNo,setBogieFrameNo]=useState('');
    const [compoNo, setcompoNo] = useState('');
    const [remark1,setremark1]=useState();
    const [remark2,setremark2]=useState();
    const [remark3,setremark3]=useState();
    const [remark4,setremark4]=useState();
    const [remark5,setremark5]=useState();
    const [remark6,setremark6]=useState();
    const [remark7,setremark7]=useState();
    const [remark8,setremark8]=useState();
    const [remark9,setremark9]=useState();
    const [remark10,setremark10]=useState();
    const [remark11,setremark11]=useState();
    const [remark12,setremark12]=useState();
    const [remark13,setremark13]=useState();

    const [observed1,setObserved1]=useState();
    const [observed2,setObserved2]=useState();
    const [observed3,setObserved3]=useState();
    const [observed4,setObserved4]=useState();
    const [observed5,setObserved5]=useState();
    const [observed6,setObserved6]=useState();
    const [observed7,setObserved8]=useState();
    const [observed8,setObserved7]=useState();
    const [observed9,setObserved9]=useState();
    const [observed10,setObserved10]=useState();
    const [observed11,setObserved11]=useState();
    const [observed12,setObserved12]=useState();

    const [checked1, setchecked1] = useState('');
    const [checked2, setchecked2] = useState('');
    const [checked3, setchecked3] = useState('');
    const form = "M5023";

    const postDataUsingSimplePostCall1 = () => {
    
    
      axios
        .post(' http://10.109.148.231:8000/api/ac2t', {
          FORM_TYPE :form,
          M5008_Date:           datee,   
          M5008_Drawing_No:     compoNo,    
          M5008_bolster_no:   bogieFrameNo,
          M5008_Remark1:   remark1,
          M5008_Remark2:   remark2,
          M5008_Remark3:   remark3,
          M5008_Remark4:   remark4,
          M5008_Remark5:   remark5,
          M5008_Remark6:   remark6,
          M5008_Remark7:   remark7,
          M5008_Remark8:   remark8,
          M5009_Remark9:   remark9,
          M5011_Remark10:   remark10,
          M5013_Remark11:   remark11,
          M5015_Remark12:   remark12,
          M5017_Remark13:   remark13,
          
          M5008_Actual1:    observed1,
          M5008_Actual2:    observed2,
          M5008_Actual3:    observed3,
          M5008_Actual4:    observed4,
          M5008_Actual5:    observed5,
          M5008_Actual6:    observed6,
          M5008_Actual7:    observed7,
          M5008_Actual8:    observed8,
          M5008_Actual9:    observed9,
          M5008_Actual10:    observed10,
          M5008_Actual11:    observed11,
          M5008_Actual12:    observed12,
          M5008_Actual13:    checked1,
          M5008_Actual14:    checked2,
          M5008_Actual15:    checked3,
         

          
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
    .post(' http://10.109.148.231:8000/api/ac2t', {
      FORM_TYPE :form,

      M5008_Date:           datee,   
      M5008_Drawing_No:     compoNo,    
      M5008_bolster_no:   bogieFrameNo,
      M5008_Remark1:   remark1,
      M5008_Remark2:   remark2,
      M5008_Remark3:   remark3,
      M5008_Remark4:   remark4,
      M5008_Remark5:   remark5,
      M5008_Remark6:   remark6,
      M5008_Remark7:   remark7,
      M5008_Remark8:   remark8,
      M5009_Remark9:   remark9,
      M5011_Remark10:   remark10,
      M5013_Remark11:   remark11,
      M5015_Remark12:   remark12,
      M5017_Remark13:   remark13,
      
      M5008_Actual1:    observed1,
      M5008_Actual2:    observed2,
      M5008_Actual3:    observed3,
      M5008_Actual4:    observed4,
      M5008_Actual5:    observed5,
      M5008_Actual6:    observed6,
      M5008_Actual7:    observed7,
      M5008_Actual8:    observed8,
      M5008_Actual9:    observed9,
      M5008_Actual10:    observed10,
      M5008_Actual11:    observed11,
      M5008_Actual12:    observed12,
      M5008_Actual13:    checked1,
      M5008_Actual14:    checked2,
      M5008_Actual15:    checked3,
     
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
      const providers = await axios.get(`  http://10.109.148.231:8000/api/joblink/${id}`);
      setProviders([providers.data]);
      // setJobId(providers.data._id);
    } catch (error) {
      console.log(error);
    }
  }

  async function assign (){
    const providers2 = await axios
    .put(`  http://10.109.148.231:8000/api/get/${id}`, {
      JOB_ASSIGNED_D: true,
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
  };
  const failhandle= ()=>{
    postDataUsingSimplePostCall2();
    
     getAllProvider();
     assign();
  };

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
                  <Text style={{fontSize:20,color:"black",fontWeight:"bold"}}>Bogie frame no.: -</Text>
                  <TextInput
                    style={styles.FirstEntREMARKSInput}
                    onChangeText={bogieFrameNo => setBogieFrameNo(bogieFrameNo)}
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
                  <Text style={styles.FirstEntREMARKSText1}>Complete {'\n'} 
                  bogie frame{'\n'} 
                  fabricated at{'\n'} 
                  MCF/RBL{'\n'} 
                  </Text>
                 
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
                  <Text style={styles.FirstEntREMARKSText1}>Bogie frame fabrication</Text>
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
                <Text style={styles.FirstEntText}>1	Bogie frame centre to centre distance</Text>
                <View style={styles.FirstEntREMARKS}>
                  <Text style={styles.FirstEntREMARKSText1}>ACTUAL (mm)</Text>
                 <Text style={styles.FirstEntREMARKSText1}>2240 ± 2.0</Text>
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
                <Text style={styles.FirstEntText}>2	Side frame length</Text>
                <View style={styles.FirstEntREMARKS}>
                  <Text style={styles.FirstEntREMARKSText1}>ACTUAL (mm)</Text>
                 <Text style={styles.FirstEntREMARKSText1}>3035 ± 6.0</Text>
                </View>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>OBSERVED (mm)</Text>
                  <TextInput
                    style={styles.FirstEntREMARKSInput}
                    onChangeText={setObserved2}
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
                <Text style={styles.FirstEntText}>3	Height of bogie frame.</Text>
                <View style={styles.FirstEntREMARKS}>
                  <Text style={styles.FirstEntREMARKSText1}>ACTUAL (mm)</Text>
                 <Text style={styles.FirstEntREMARKSText1}>699 ± 3</Text>
                </View>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>OBSERVED (mm)</Text>
                  <TextInput
                    style={styles.FirstEntREMARKSInput}
                    onChangeText={setObserved3}
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
                <Text style={styles.FirstEntText}>4	Outer width of bogie frame.</Text>
                <View style={styles.FirstEntREMARKS}>
                  <Text style={styles.FirstEntREMARKSText1}>ACTUAL (mm)</Text>
                 <Text style={styles.FirstEntREMARKSText1}>2946.5 ± 6</Text>
                </View>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>OBSERVED (mm)</Text>
                  <TextInput
                    style={styles.FirstEntREMARKSInput}
                    onChangeText={setObserved4}
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
                <Text style={styles.FirstEntText}>5	Distance between anti roll bar bkt.</Text>
                <View style={styles.FirstEntREMARKS}>
                  <Text style={styles.FirstEntREMARKSText1}>ACTUAL (mm)</Text>
                 <Text style={styles.FirstEntREMARKSText1}>1361 ± 4</Text>
                </View>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>OBSERVED (mm)</Text>
                  <TextInput
                    style={styles.FirstEntREMARKSInput}
                    onChangeText={setObserved5}
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
                <Text style={styles.FirstEntText}>6	Control arm support to control arm support distance.</Text>
                <View style={styles.FirstEntREMARKS}>
                  <Text style={styles.FirstEntREMARKSText1}>ACTUAL (mm)</Text>
                 <Text style={styles.FirstEntREMARKSText1}>2068 ± 2</Text>
                </View>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>OBSERVED (mm)</Text>
                  <TextInput
                    style={styles.FirstEntREMARKSInput}
                    onChangeText={setObserved6}
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
                <Text style={styles.FirstEntText}>7	Distance between brake support.</Text>
                
                <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  ACTUAL (mm)
                </Text>
                <Text style={styles.FirstEntREMARKSText1}>914 ± 2</Text>
               
              </View>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>OBSERVED (mm)</Text>
                  <TextInput
                    style={styles.FirstEntREMARKSInput}
                    onChangeText={setObserved7}
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

              {/* Form Entry First Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>8	Height of antiroll bar bkt. top plate.</Text>
                
                <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  ACTUAL (mm)
                </Text>
                <Text style={styles.FirstEntREMARKSText1}>605 ± 2</Text>
               
              </View>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>OBSERVED (mm)</Text>
                  <TextInput
                    style={styles.FirstEntREMARKSInput}
                    onChangeText={setObserved8}
                    value={observed8}
                  />
                </View>
              
                <View style={styles.FirstEntREMARKS}>
                  <Text style={styles.FirstEntREMARKSText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntREMARKSInput}
                    onChangeText={setremark9}
                    value={remark9}
                  />
                </View>
              </View>
              {/* Form Entry Third Section End */}

              {/* Form Entry First Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>9	Distance between control arm sup. in same side frame</Text>
                
                <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  ACTUAL (mm)
                </Text>
                <Text style={styles.FirstEntREMARKSText1}>170 ± 2</Text>
               
              </View>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>OBSERVED (mm)</Text>
                  <TextInput
                    style={styles.FirstEntREMARKSInput}
                    onChangeText={setObserved9}
                    value={observed9}
                  />
                </View>
              
                <View style={styles.FirstEntREMARKS}>
                  <Text style={styles.FirstEntREMARKSText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntREMARKSInput}
                    onChangeText={setremark10}
                    value={remark10}
                  />
                </View>
              </View>
              {/* Form Entry Third Section End */}

              {/* Form Entry First Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>10 Yaw damper bracket inner to side frame outer web.</Text>
                
                <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  ACTUAL (mm)
                </Text>
                <Text style={styles.FirstEntREMARKSText1}>169 ± 2</Text>
               
              </View>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>OBSERVED (mm)</Text>
                  <TextInput
                    style={styles.FirstEntREMARKSInput}
                    onChangeText={setObserved10}
                    value={observed10}
                  />
                </View>
              
                <View style={styles.FirstEntREMARKS}>
                  <Text style={styles.FirstEntREMARKSText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntREMARKSInput}
                    onChangeText={setremark11}
                    value={remark11}
                  />
                </View>
              </View>
              {/* Form Entry Third Section End */}

              {/* Form Entry First Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>11 Visually Check Welding and grinding of side frames.</Text>
                
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
                    onChangeText={setObserved11}
                    value={observed11}
                  />
                </View>
              
                <View style={styles.FirstEntREMARKS}>
                  <Text style={styles.FirstEntREMARKSText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntREMARKSInput}
                    onChangeText={setremark12}
                    value={remark12}
                  />
                </View>
              </View>
              {/* Form Entry Third Section End */}

              {/* Form Entry First Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>12	Visually Check control arm support for crack all four sides.</Text>
                
                <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  ACTUAL (mm)
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checked3 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setchecked3('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={
                      checked3 === 'NOT OK' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setchecked3('NOT OK')}
                  />
                </View>
              </View>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>OBSERVED (mm)</Text>
                  <TextInput
                    style={styles.FirstEntREMARKSInput}
                    onChangeText={setObserved12}
                    value={observed12}
                  />
                </View>
              
                <View style={styles.FirstEntREMARKS}>
                  <Text style={styles.FirstEntREMARKSText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntREMARKSInput}
                    onChangeText={setremark13}
                    value={remark13}
                  />
                </View>
              </View>
              {/* Form Entry Third Section End */}
  
              
            
            </View>
  
            {/* Form Entery Section 1St End */}
          </View>
          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.button1} 
            onPress={passhandle} >
              <Text style={{color: 'white', fontSize: 20}}>Pass</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button1} 
            onPress={failhandle} >
              <Text style={{color: 'white', fontSize: 20}}>Fail</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  };
  
  export default M5023;
  
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
  buttonView: {
    margin: 20,
    justifyContent: 'space-between',
    flexDirection:"row",
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
  
    ShellText:{
      color:'black',
       fontSize:15,
      justifyContent:'center',
      alignItems:'center',
      marginTop:15,
      marginLeft:10
  
    }
  });
  