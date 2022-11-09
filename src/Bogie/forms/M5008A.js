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

const M5008 = ({navigation,route}) => {
  const id = route.params.user_id;
const coach = route.params.coachs;
const bogie = route.params.bogies;
const[providers,setProviders] = useState();


  const [date,setDate] = useState (new Date());
  const datee = `${moment(date).format('MMMM Do YYYY')}`
  const[drawingNo,setDrawingNo]=useState();
  const[bogieNo,setBogieNo]=useState('');
  const[ffor,setFfor]=useState();
  const[bogieFrameNo,setBogieFrameNo]=useState('');
  const[bolsterNo,setBolsterNo]=useState();
  const[axle,setAxle]=useState();

  const[brakeCylinderNo1,setBrakeCylinderNo1]=useState();
  const[brakeCylinderNo2,setBrakeCylinderNo2]=useState();
  const[brakeCylinderNo3,setBrakeCylinderNo3]=useState();
  const[brakeCylinderNo4,setBrakeCylinderNo4]=useState();

  const[brakeCaliperNo1,setBrakeCaliperNo1]=useState();
   const[brakeCaliperNo2,setBrakeCaliperNo2]=useState();
  const[brakeCaliperNo3,setBrakeCaliperNo3]=useState();
  const[brakeCaliperNo4,setBrakeCaliperNo4]=useState();
  const [cross, setcross] = useState();
  const [nee, setnee] = useState();

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
  const [remark14,setremark14]=useState();
  const [remark15,setremark15]=useState();
  const [remark16,setremark16]=useState();
  const [remark17,setremark17]=useState();
  const [remark18,setremark18]=useState();
  const [remark19,setremark19]=useState();
  const [remark20,setremark20]=useState();
  const [remark21,setremark21]=useState();
  const [remark22,setremark22]=useState();
  const [remark23,setremark23]=useState();
  const [remark24,setremark24]=useState();
  const [remark25,setremark25]=useState();
  const [remark26,setremark26]=useState();
  const [remark27,setremark27]=useState();
  const [remark28,setremark28]=useState();
  const [remark29,setremark29]=useState();
  const [remark30,setremark30]=useState();
  const [remark31,setremark31]=useState();
  const [remark32,setremark32]=useState();

  const [checkedk43,setCheckedk43]=useState();
  const [checkedk44,setCheckedk44]=useState();
  const [checkedk45,setCheckedk45]=useState();
  const [checkedk46,setCheckedk46]=useState();
  const [checkedk47,setCheckedk47]=useState();
  const [checkedk48,setCheckedk48]=useState();
  const [checkedk49,setCheckedk49]=useState();
  const [checkedk50,setCheckedk50]=useState();
  const [checkedk51,setCheckedk51]=useState();
  const [checkedk52,setCheckedk52]=useState();
  const [checkedk53,setCheckedk53]=useState();
  const [checkedk54,setCheckedk54]=useState();
  const [checkedk55,setCheckedk55]=useState();
  const [checkedk56,setCheckedk56]=useState();
  const [checkedk57,setCheckedk57]=useState();
  const [checkedk58,setCheckedk58]=useState();
  const [checkedk59,setCheckedk59]=useState();
  const [checkedk60,setCheckedk60]=useState();
  const [checkedk61,setCheckedk61]=useState();
  const [checkedk62,setCheckedk62]=useState();
  const [checkedk63,setCheckedk63]=useState();
  const [checkedk64,setCheckedk64]=useState();
  const [checkedk65,setCheckedk65]=useState();
  const [checkedk66,setCheckedk66]=useState();
  const [checkedk67,setCheckedk67]=useState();
  const [checkedk68,setCheckedk68]=useState();
  const [checkedk69,setCheckedk69]=useState();
  const [checkedk70,setCheckedk70]=useState();
  const [checkedk71,setCheckedk71]=useState();
  const [checkedk72,setCheckedk72]=useState();
  const [checkedk73,setCheckedk73]=useState();
  const [checkedk74,setCheckedk74]=useState();
  const form = "M5008A";



  

  const postDataUsingSimplePostCall1 = () => {
  
  
    axios
      .post(' http://10.109.148.232:8000/api/ac2t', {
                 //M5008
          FORM_TYPE: form,
        M5008_Drawing_No:     drawingNo,
        M5008_Bogie_No:       bogieNo,
        M5008_for:           ffor,
        M5008_Bogie_Frame_No:bogieFrameNo,
        M5008_Date:           datee,        
        M5008_bolster_no:   bolsterNo,
        M5008_cross_section_No: cross,
        M5008_Axle_Nos_EE:    axle,
        M5008_Nee:   nee,
        M5008_Brake_Cylinder_No1:  brakeCylinderNo1,
        M5008_Brake_Cylinder_No2:brakeCylinderNo2,
        M5008_Brake_Cylinder_No3: brakeCylinderNo3,
        M5008_Brake_Cylinder_No4: brakeCylinderNo4,
        M5008_Brake_Caliper_No1:brakeCaliperNo1,
        M5008_Brake_Caliper_No2: brakeCaliperNo2,
        M5008_Brake_Caliper_No3: brakeCaliperNo3,
        M5008_Brake_Caliper_No4:brakeCaliperNo4,
        M5008_Remark1:   remark1,
        M5008_Remark2:   remark2,
        M5008_Remark3:   remark3,
        M5008_Remark4:   remark4,
        M5008_Remark5:   remark5,
        M5008_Remark6:   remark6,
        M5008_Remark7:   remark7,
        M5008_Remark8:   remark8,
        M5008_Remark9:   remark9,
        M5008_Remark10:  remark10,
        M5008_Remark11:  remark11,
        M5008_Remark12:  remark12,
        M5008_Remark13:  remark13,
        M5008_Remark14:  remark14,
        M5008_Remark15:  remark15,
        M5008_Remark16:  remark16,
        M5008_Remark17:  remark17,
        M5008_Remark18:  remark18,
        M5008_Remark19:  remark19,
        M5008_Remark20:  remark20,
        M5008_Remark21:  remark21,
        M5008_Remark22:  remark22,
        M5008_Remark23:  remark23,
        M5008_Remark24:  remark24,
        M5008_Remark25:  remark25,
        M5008_Remark26:  remark26,
        M5008_Remark27:  remark27,
        M5008_Remark28:  remark28,
        M5008_Remark29:  remark29,
        M5008_Remark30:  remark30,
        M5008_Remark31:  remark31,
        M5008_Remark32:  remark32,
        M5008_Actual1:    checkedk43,
        M5008_Actual2:    checkedk44,
        M5008_Actual3:    checkedk45,
        M5008_Actual4:    checkedk46,
        M5008_Actual5:    checkedk47,
        M5008_Actual6:    checkedk48,
        M5008_Actual7:    checkedk49,
        M5008_Actual8:    checkedk50,
        M5008_Actual9:    checkedk51,
        M5008_Actual10:   checkedk52,
        M5008_Actual11:   checkedk53,
        M5008_Actual12:   checkedk54,
        M5008_Actual13:   checkedk55,
        M5008_Actual14:   checkedk56,
        M5008_Actual15:   checkedk57,
        M5008_Actual16:   checkedk58,
        M5008_Actual17:   checkedk59,
        M5008_Actual18:   checkedk60,
        M5008_Actual19:   checkedk61,
        M5008_Actual20:   checkedk62,
        M5008_Actual21:   checkedk63,
        M5008_Actual22:   checkedk64,
        M5008_Actual23:   checkedk65,
        M5008_Actual24:   checkedk66,
        M5008_Actual25:   checkedk67,
        M5008_Actual26:   checkedk68,
        M5008_Actual27:   checkedk69,
        M5008_Actual28:   checkedk70,
        M5008_Actual29:   checkedk71,
        M5008_Actual30:   checkedk72,
        M5008_Actual31:   checkedk73,
        M5008_Actual32:   checkedk74,
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
  .post(' http://10.109.148.232:8000/api/ac2t', {
             //M5008
    FORM_TYPE: form,
    M5008_Drawing_No:     drawingNo,
    M5008_Bogie_No:       bogieNo,
    M5008_for:           ffor,
    M5008_Bogie_Frame_No:bogieFrameNo,
    M5008_Date:           datee,        
    M5008_bolster_no:   bolsterNo,
    M5008_cross_section_No: cross,
    M5008_Axle_Nos_EE:    axle,
    M5008_Nee:   nee,
    M5008_Brake_Cylinder_No1:  brakeCylinderNo1,
    M5008_Brake_Cylinder_No2:brakeCylinderNo2,
    M5008_Brake_Cylinder_No3: brakeCylinderNo3,
    M5008_Brake_Cylinder_No4: brakeCylinderNo4,
    M5008_Brake_Caliper_No1:brakeCaliperNo1,
    M5008_Brake_Caliper_No2: brakeCaliperNo2,
    M5008_Brake_Caliper_No3: brakeCaliperNo3,
    M5008_Brake_Caliper_No4:brakeCaliperNo4,
    M5008_Remark1:   remark1,
    M5008_Remark2:   remark2,
    M5008_Remark3:   remark3,
    M5008_Remark4:   remark4,
    M5008_Remark5:   remark5,
    M5008_Remark6:   remark6,
    M5008_Remark7:   remark7,
    M5008_Remark8:   remark8,
    M5008_Remark9:   remark9,
    M5008_Remark10:  remark10,
    M5008_Remark11:  remark11,
    M5008_Remark12:  remark12,
    M5008_Remark13:  remark13,
    M5008_Remark14:  remark14,
    M5008_Remark15:  remark15,
    M5008_Remark16:  remark16,
    M5008_Remark17:  remark17,
    M5008_Remark18:  remark18,
    M5008_Remark19:  remark19,
    M5008_Remark20:  remark20,
    M5008_Remark21:  remark21,
    M5008_Remark22:  remark22,
    M5008_Remark23:  remark23,
    M5008_Remark24:  remark24,
    M5008_Remark25:  remark25,
    M5008_Remark26:  remark26,
    M5008_Remark27:  remark27,
    M5008_Remark28:  remark28,
    M5008_Remark29:  remark29,
    M5008_Remark30:  remark30,
    M5008_Remark31:  remark31,
    M5008_Remark32:  remark32,
    M5008_Actual1:    checkedk43,
    M5008_Actual2:    checkedk44,
    M5008_Actual3:    checkedk45,
    M5008_Actual4:    checkedk46,
    M5008_Actual5:    checkedk47,
    M5008_Actual6:    checkedk48,
    M5008_Actual7:    checkedk49,
    M5008_Actual8:    checkedk50,
    M5008_Actual9:    checkedk51,
    M5008_Actual10:   checkedk52,
    M5008_Actual11:   checkedk53,
    M5008_Actual12:   checkedk54,
    M5008_Actual13:   checkedk55,
    M5008_Actual14:   checkedk56,
    M5008_Actual15:   checkedk57,
    M5008_Actual16:   checkedk58,
    M5008_Actual17:   checkedk59,
    M5008_Actual18:   checkedk60,
    M5008_Actual19:   checkedk61,
    M5008_Actual20:   checkedk62,
    M5008_Actual21:   checkedk63,
    M5008_Actual22:   checkedk64,
    M5008_Actual23:   checkedk65,
    M5008_Actual24:   checkedk66,
    M5008_Actual25:   checkedk67,
    M5008_Actual26:   checkedk68,
    M5008_Actual27:   checkedk69,
    M5008_Actual28:   checkedk70,
    M5008_Actual29:   checkedk71,
    M5008_Actual30:   checkedk72,
    M5008_Actual31:   checkedk73,
    M5008_Actual32:   checkedk74,
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
    const providers = await axios.get(`  http://10.109.148.232:8000/api/joblink/${id}`);
    setProviders([providers.data]);
    // setJobId(providers.data._id);
  } catch (error) {
    console.log(error);
  }
}



const passhandle= ()=>{
  postDataUsingSimplePostCall1();
 
 getAllProvider();
};
const failhandle= ()=>{
  postDataUsingSimplePostCall2();
  
    getAllProvider();
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
              <Text style={styles.headerText}>Self Inspection Proforma for Final Bogie General Arrangement </Text>
              <Text style={styles.headerText}> (EOG) LHB type coaches</Text>
              <Text style={styles.headerText}> Form No. : - MCF/RBL/QMF 5008A</Text>
              <Text style={styles.headerText}> Version: 10/2021</Text>

              
              
          </View>
        </View>
        
        <View style={styles.MainForm}>
          
          {/* Box Heading start */}
          <View style={styles.header}>
        
          <View style={styles.headerInput}>

                     <View style={{flex:1,flexDirection: "row",paddingHorizontal:5}}>
                         <Text style={{color:'black'}}>
                         Drawing   No. 
                         </Text>
                         <TextInput  style={{flex:1,
                                        backgroundColor:'white',
                                        margin:2,
                                        borderWidth:1,
                                        }}
                                        onChangeText={setDrawingNo}
                                        Value={drawingNo}
                                       />
                      </View>
          </View>
          <View style={styles.headerInput}>
          
                  <View style={styles.headerInputRow}>
                  
                      <View style={styles.headerInputRowItem}>
                         <Text style={styles.headerInputRowText}>
                            Bogie  No. 
                         </Text>
                         <TextInput 
                         style={styles.headerInputRowInput}
                         onChangeText={bogieNo => setBogieNo(bogieNo)}
                         defaultValue={bogieNo}/>
                      </View>

                      <View style={styles.headerInputRowItem}>
                        <Text style={styles.headerInputRowText}>
                          Bogie Frame No.:
                        </Text>
                        <TextInput
                        style={styles.headerInputRowInput}
                        onChangeText={bogieFrameNo => setBogieFrameNo(bogieFrameNo)}
                        defaultValue={bogieFrameNo}/>
                     </View>

                          <View style={styles.headerInputRowItem}>
                              <Text style={styles.headerInputRowText}>
                              Bolster No:</Text>
                              <TextInput
                              style={styles.headerInputRowInput}
                              onChangeText={bolsterNo => setBolsterNo(bolsterNo)}
                              value={bolsterNo}
                              />
                          </View>
                          <View style={styles.headerInputRowItem}>
                              <Text style={styles.headerInputRowText}>Axle Nos. EE:</Text>
                              <TextInput
                              style={styles.headerInputRowInput}
                              onChangeText={axle => setAxle(axle)}
                              value={axle}
                              />
                          </View>
                          <View style={styles.headerInputRowItem}>
                              <Text style={styles.headerInputRowText}>Brake Cylinder no.1</Text>
                              <TextInput
                              style={styles.headerInputRowInput}
                              onChangeText={brakeCylinderNo1 => setBrakeCylinderNo1(brakeCylinderNo1)}
                              />
                          </View>
                          <View style={styles.headerInputRowItem}>
                              <Text style={styles.headerInputRowText}>Brake Caliper no.1</Text>
                              <TextInput
                              style={styles.headerInputRowInput}
                              onChangeText={brakeCaliperNo1 => setBrakeCaliperNo1(brakeCaliperNo1)}
                              />
                          </View>
                         
                          <View style={styles.headerInputRowItem}>
                              <Text style={styles.headerInputRowText}>Brake Cylinder no.3</Text>
                              <TextInput  style={styles.headerInputRowInput}
                              onChangeText={brakeCylinderNo3 => setBrakeCylinderNo3(brakeCylinderNo3)}
                              />
                          </View>

                          <View style={styles.headerInputRowItem}>
                              <Text style={styles.headerInputRowText}>Brake Caliper no.3</Text>
                              <TextInput
                              style={styles.headerInputRowInput}
                              onChangeText={brakeCaliperNo3 => setBrakeCaliperNo3(brakeCaliperNo3)}
                              />
                          </View>
                         
                  </View>
                   
                     

                  <View style={styles.headerInputRow}>
                       
               

                     <View style={styles.headerInputRowItem}>
                         <Text style={styles.headerInputRowText}>
                               For 
                        </Text>
                              <TextInput
                              style={styles.headerInputRowInput}
                              onChangeText={ffor=>setFfor(ffor)}/>
                            <Text >
                            /coach
                            </Text>
                          </View>

                        <View style={styles.headerInputRowItem}>
                              <Text style={styles.headerInputRowText}>Date & Shift </Text>
                              <Text style={styles.headerInputRowText}>{datee} </Text>
                          </View>
                          <View style={styles.headerInputRowItem}>
                              <Text style={styles.headerInputRowText}>Cross Section No</Text>
                              <TextInput
                              style={styles.headerInputRowInput}
                              onChangeText={cross=>setcross(cross)}
                              />
                          </View>
                          <View style={styles.headerInputRowItem}>
                              <Text style={styles.headerInputRowText}>NEE</Text>
                              <TextInput
                              style={styles.headerInputRowInput}
                              onChangeText={setnee}
                              value={nee}
                              />
                          </View>
                          <View style={styles.headerInputRowItem}>
                              <Text style={styles.headerInputRowText}>Brake Cylinder no.2</Text>
                              <TextInput
                              style={styles.headerInputRowInput}
                              onChangeText={brakeCylinderNo2=>setBrakeCylinderNo2(brakeCylinderNo2)}
                              />
                          </View>
                          <View style={styles.headerInputRowItem}>
                              <Text style={styles.headerInputRowText}>Brake Caliper no.2</Text>
                              <TextInput
                              style={styles.headerInputRowInput}
                              onChangeText={brakeCaliperNo2=>setBrakeCaliperNo2(brakeCaliperNo2)}
                              />
                          </View>
                          <View style={styles.headerInputRowItem}>
                              <Text style={styles.headerInputRowText}>Brake Cylinder no.4</Text>
                              <TextInput
                              style={styles.headerInputRowInput}
                              onChangeText={brakeCylinderNo4=>setBrakeCylinderNo4(brakeCylinderNo4)}
                              />
                          </View>

                          <View style={styles.headerInputRowItem}>
                              <Text style={styles.headerInputRowText}>Brake Caliper no.4</Text>
                              <TextInput
                              style={styles.headerInputRowInput}
                              onChangeText={brakeCaliperNo4=>setBrakeCaliperNo4(brakeCaliperNo4)}
                              />
                          </View>
                  </View>
          </View> 
      </View>

           {/* Box Heading end */}
         

          {/* Form Entery Section Start */}

          <View style={styles.MainFormEntry}>
            {/* Form Entry First Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>1 Primary suspension spring color coding.</Text>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Specified</Text>
               <Text style={styles.FirstEntRemarkText1}>As prescribed</Text>
              </View>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                Actual 
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk43 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk43('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={
                      checkedk43 === 'NOT OK' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk43('NOT OK')}
                  />
                </View>
              </View>
            
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Remark</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  value={remark1}
                  onChangeText={setremark1}
                />
              </View>
             
              
            </View>
            {/* Form Entry Third Section End */}

            {/* Form Entry Fourth Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                2. Fitment  of  Anti  roll  bar assembly with screws, spring washer  & security plate.    
              </Text>

              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Specified</Text>
               <Text style={styles.FirstEntRemarkText1}>completed</Text>
              </View>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                Actual 
                </Text>

                
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk44 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk44('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk44 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk44('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Remark</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  value={remark2}
                  onChangeText={setremark2}
                />
              </View>
            </View>
            {/* Form Entry Fourth Section End */}

            {/* Form Entry Five Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>3.Fitment Longitudinal stop assembly</Text>

              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Specified</Text>
               <Text style={styles.FirstEntRemarkText1}>completed</Text>
              </View>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Actual
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk45 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk45('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk45 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk45('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Remark</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  value={remark3}
                  onChangeText={setremark3}
                />
              </View>
            </View>
            {/* Form Entry Five Section End */}

            {/* Form Entry Six Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                4. Fitment of Traction Lever joint with  Disc & nut 
              </Text>

              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Specified</Text>
               <Text style={styles.FirstEntRemarkText1}>completed</Text>
              </View>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Actual
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk46 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk46('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk46 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk46('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Remark</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  value={remark4}
                  onChangeText={setremark4}
                />
              </View>
            </View>
            {/* Form Entry Six Section End */}

            {/* Form Entry Seven Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                5. Fitment of Lateral dampers bkt. on cross section with Disc & screws  
              </Text>

              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Specified</Text>
               <Text style={styles.FirstEntRemarkText1}>completed</Text>
              </View>
              
              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Actual
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk47=== 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk47('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk47=== 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk47('NOT OK')}
                  />
                
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Remark</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  value={remark5}
                  onChangeText={setremark5}
                />
              </View>
            </View>
            {/* Form Entry Seven Section End */}

            {/* Form Entry Eight Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                6. Fitment of Lateral dampers with Disc, nut & screws  
              </Text>

              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Specified</Text>
               <Text style={styles.FirstEntRemarkText1}>completed</Text>
              </View>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Actual
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk48 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk48('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="third"
                    status={checkedk48 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk48('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Remark</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  value={remark6}
                  onChangeText={setremark6}
                />
              </View>
            </View>
            {/* Form Entry Eight Section End */}

            {/* Form Entry Nine Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                7. Fitment of secondary vertical dampers with Disc,  screws  &  nut 
              </Text>

             

              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Specified</Text>
               <Text style={styles.FirstEntRemarkText1}>completed</Text>
              </View>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Actual
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk49 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk49('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={
                      checkedk49 === 'NOT OK' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk49('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Remark</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  value={remark7}
                  onChangeText={setremark7}
                />
              </View>
            </View>
            {/* Form Entry Nine Section End */}

            {/* Form Entry Ten Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                8.Fitment of Cross section with distance bush, Disc & screw         
              </Text>

              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Specified</Text>
               <Text style={styles.FirstEntRemarkText1}>completed</Text>
              </View>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Actual
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk50 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk50('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={
                      checkedk50 === 'NOT OK' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk50('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Remark</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  value={remark8}
                  onChangeText={setremark8}
                />
              </View>
            </View>
            {/* Form Entry Ten Section End */}

 {/* Form Entry Ten Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                9.Fitment of lateral bump stop with shim, punch washer, screw & nut          
              </Text>

              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Specified</Text>
               <Text style={styles.FirstEntRemarkText1}>completed</Text>
              </View>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Actual
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk51 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setcheckedk51('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={
                      checkedk51 === 'NOT OK' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setcheckedk51('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Remark</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  value={remark9}
                  onChangeText={setremark9}
                />
              </View>
            </View>
            {/* Form Entry Ten Section End */}
               
                {/* Form Entry Ten Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
              10	Fitment on Control Arm top with bottom with disc, screw & nut          
              </Text>

              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Specified</Text>
               <Text style={styles.FirstEntRemarkText1}>completed</Text>
              </View>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Actual
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk52 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setcheckedk52('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={
                      checkedk52 === 'NOT OK' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setcheckedk52('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Remark</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  value={remark10}
                  onChangeText={setremark10}
                />
              </View>
            </View>
            {/* Form Entry Ten Section End */}

             {/* Form Entry Ten Section Start */}
             <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
              11	Fitment of Axle end cover with control arm with disc, screw & nut          
              </Text>

              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Specified</Text>
               <Text style={styles.FirstEntRemarkText1}>completed</Text>
              </View>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Actual
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk53 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setcheckedk53('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={
                      checkedk53 === 'NOT OK' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setcheckedk53('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Remark</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  value={remark11}
                  onChangeText={setremark11}
                />
              </View>
            </View>
            {/* Form Entry Ten Section End */}

{/* Form Entry Ten Section Start */}
<View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
              12	Fitment of Control Arm with control arm Bkt.</Text>

              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Specified</Text>
               <Text style={styles.FirstEntRemarkText1}>completed</Text>
              </View>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Actual
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk54 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setcheckedk54('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={
                      checkedk54 === 'NOT OK' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setcheckedk54('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Remark</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  value={remark12}
                  onChangeText={setremark12}
                />
              </View>
            </View>
            {/* Form Entry Ten Section End */}

             {/* Form Entry Ten Section Start */}
             <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
              13	Fitment of Primary Shock absorbers          
              </Text>

              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Specified</Text>
               <Text style={styles.FirstEntRemarkText1}>completed</Text>
              </View>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Actual
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk55 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setcheckedk55('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={
                      checkedk55 === 'NOT OK' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setcheckedk55('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Remark</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  value={remark13}
                  onChangeText={setremark13}
                />
              </View>
            </View>
            {/* Form Entry Ten Section End */}

             {/* Form Entry Ten Section Start */}
             <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
              14	Fitment of traction centre with pivot pin with silent block, disc, safety plate, screw & nut          
              </Text>

              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Specified</Text>
               <Text style={styles.FirstEntRemarkText1}>completed</Text>
              </View>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Actual
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk56 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setcheckedk56('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={
                      checkedk56 === 'NOT OK' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setcheckedk56('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Remark</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  value={remark14}
                  onChangeText={setremark14}
                />
              </View>
            </View>
            {/* Form Entry Ten Section End */}

             {/* Form Entry Ten Section Start */}
             <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
              15	Fitment of primary bump stop with centering disc & nut         
              </Text>

              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Specified</Text>
               <Text style={styles.FirstEntRemarkText1}>completed</Text>
              </View>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Actual
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk57 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setcheckedk57('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={
                      checkedk57 === 'NOT OK' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setcheckedk57('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Remark</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  value={remark15}
                  onChangeText={setremark15}
                />
              </View>
            </View>
            {/* Form Entry Ten Section End */}

             {/* Form Entry Ten Section Start */}
             <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
              16	Fitment of roll link on roll link bkt         
              </Text>

              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Specified</Text>
               <Text style={styles.FirstEntRemarkText1}>completed</Text>
              </View>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Actual
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk58 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setcheckedk58('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={
                      checkedk58 === 'NOT OK' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setcheckedk58('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Remark</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  value={remark16}
                  onChangeText={setremark16}
                />
              </View>
            </View>
            {/* Form Entry Ten Section End */}

             {/* Form Entry Ten Section Start */}
             <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
              17	Fitment  of Locking plate on Bracket control arm assembly           
              </Text>

              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Specified</Text>
               <Text style={styles.FirstEntRemarkText1}>completed</Text>
              </View>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Actual
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk59 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setcheckedk59('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={
                      checkedk59 === 'NOT OK' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setcheckedk59('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Remark</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  value={remark17}
                  onChangeText={setremark17}
                />
              </View>
            </View>
            {/* Form Entry Ten Section End */}

             {/* Form Entry Ten Section Start */}
             <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
              18	Fitment  of  Security  plate  and locking plate on axle with Disc & screw            
              </Text>

              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Specified</Text>
               <Text style={styles.FirstEntRemarkText1}>completed</Text>
              </View>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Actual
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk60 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setcheckedk60('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={
                      checkedk60 === 'NOT OK' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setcheckedk60('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Remark</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  value={remark18}
                  onChangeText={setremark18}
                />
              </View>
            </View>
            {/* Form Entry Ten Section End */}

             {/* Form Entry Ten Section Start */}
             <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
              19	Fitment of Air spring with side frame.         
              </Text>

              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Specified</Text>
               <Text style={styles.FirstEntRemarkText1}>completed</Text>
              </View>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Actual
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk61 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setcheckedk61('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={
                      checkedk61 === 'NOT OK' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setcheckedk61('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Remark</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  value={remark19}
                  onChangeText={setremark19}
                />
              </View>
            </View>
            {/* Form Entry Ten Section End */}

             {/* Form Entry Ten Section Start */}
             <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
              20	No. Plate of Shock Absorber should be in front            
              </Text>

              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Specified</Text>
               <Text style={styles.FirstEntRemarkText1}>completed</Text>
              </View>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Actual
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk62 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setcheckedk62('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={
                      checkedk62 === 'NOT OK' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setcheckedk62('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Remark</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  value={remark20}
                  onChangeText={setremark20}
                />
              </View>
            </View>
            {/* Form Entry Ten Section End */}

             {/* Form Entry Ten Section Start */}
             <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
              21	All Cotter  should  be Splited properly                          
              </Text>

              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Specified</Text>
               <Text style={styles.FirstEntRemarkText1}>completed</Text>
              </View>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Actual
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk63 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setcheckedk63('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={
                      checkedk63 === 'NOT OK' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setcheckedk63('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Remark</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  value={remark21}
                  onChangeText={setremark21}
                />
              </View>
            </View>
            {/* Form Entry Ten Section End */}

             {/* Form Entry Ten Section Start */}
             <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
              22	All Nut, Bolts & Screws  should be properly tightened        
              </Text>

              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Specified</Text>
               <Text style={styles.FirstEntRemarkText1}>Fitted properly</Text>
              </View>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Actual
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk64 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setcheckedk64('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={
                      checkedk64 === 'NOT OK' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setcheckedk64('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Remark</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  value={remark22}
                  onChangeText={setremark22}
                />
              </View>
            </View>
            {/* Form Entry Ten Section End */}

             {/* Form Entry Ten Section Start */}
             <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
              23	Welding of Bogie No. Plate and Bogie number punched properly    
              </Text>

              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Specified</Text>
               <Text style={styles.FirstEntRemarkText1}>completed</Text>
              </View>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Actual
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk65 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setcheckedk65('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={
                      checkedk65 === 'NOT OK' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setcheckedk65('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Remark</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  value={remark23}
                  onChangeText={setremark23}
                />
              </View>
            </View>
            {/* Form Entry Ten Section End */}

             {/* Form Entry Ten Section Start */}
             <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
              24	Painting  of complete Bogie         
              </Text>

              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Specified</Text>
               <Text style={styles.FirstEntRemarkText1}>Painted properly</Text>
              </View>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Actual
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk66 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setcheckedk66('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={
                      checkedk66 === 'NOT OK' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setcheckedk66('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Remark</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  value={remark24}
                  onChangeText={setremark24}
                />
              </View>
            </View>
            {/* Form Entry Ten Section End */}

             {/* Form Entry Ten Section Start */}
             <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
              25	Checking of pipes for any leakage by soap foam (check visually).                                
              </Text>

              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Specified</Text>
               <Text style={styles.FirstEntRemarkText1}>No leakage</Text>
              </View>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Actual
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk67 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setcheckedk67('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={
                      checkedk67 === 'NOT OK' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setcheckedk67('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Remark</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  value={remark25}
                  onChangeText={setremark25}
                />
              </View>
            </View>
            {/* Form Entry Ten Section End */}

             {/* Form Entry Ten Section Start */}
             <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
              26	Fitment of Brake cylinders /caliper with disc, screw & nut  
              </Text>

              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Specified</Text>
               <Text style={styles.FirstEntRemarkText1}>Fitted properly</Text>
              </View>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Actual
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk68 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setcheckedk68('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={
                      checkedk68 === 'NOT OK' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setcheckedk68('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Remark</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  value={remark26}
                  onChangeText={setremark26}
                />
              </View>
            </View>
            {/* Form Entry Ten Section End */}

             {/* Form Entry Ten Section Start */}
             <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
              27	Fitment of phonic wheel         
              </Text>

              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Specified</Text>
               <Text style={styles.FirstEntRemarkText1}>completed</Text>
              </View>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Actual
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk69 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setcheckedk69('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={
                      checkedk69 === 'NOT OK' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setcheckedk69('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Remark</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  value={remark27}
                  onChangeText={setremark27}
                />
              </View>
            </View>
            {/* Form Entry Ten Section End */}

             {/* Form Entry Ten Section Start */}
             <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
              28	Fitment of Air Pipes with clamps and screws etc                
              </Text>

              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Specified</Text>
               <Text style={styles.FirstEntRemarkText1}>completed</Text>
              </View>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Actual
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk70 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setcheckedk70('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={
                      checkedk70 === 'NOT OK' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setcheckedk70('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Remark</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  value={remark28}
                  onChangeText={setremark28}
                />
              </View>
            </View>
            {/* Form Entry Ten Section End */}

             {/* Form Entry Ten Section Start */}
             <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
              29	Movement of Brake rigging  should be free             
              </Text>

              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Specified</Text>
               <Text style={styles.FirstEntRemarkText1}>Free movement</Text>
              </View>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Actual
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk71 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setcheckedk71('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={
                      checkedk71 === 'NOT OK' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setcheckedk71('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Remark</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  value={remark29}
                  onChangeText={setremark29}
                />
              </View>
            </View>
            {/* Form Entry Ten Section End */}

             {/* Form Entry Ten Section Start */}
             <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
              30	Visually checked of all Rubber items should not be Painted.         
              </Text>

              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Specified</Text>
               <Text style={styles.FirstEntRemarkText1}>Not Painted</Text>
              </View>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Actual
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk72 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setcheckedk72('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={
                      checkedk72 === 'NOT OK' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setcheckedk72('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Remark</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  value={remark30}
                  onChangeText={setremark30}
                />
              </View>
            </View>
            {/* Form Entry Ten Section End */}

             {/* Form Entry Ten Section Start */}
             <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
              31	Visually checked of all ball joints for crack.       
              </Text>

              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Specified</Text>
               <Text style={styles.FirstEntRemarkText1}>Not Cracked</Text>
              </View>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Actual
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk73 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setcheckedk73('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={
                      checkedk73 === 'NOT OK' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setcheckedk73('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Remark</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  value={remark31}
                  onChangeText={setremark31}
                />
              </View>
            </View>
            {/* Form Entry Ten Section End */}

             {/* Form Entry Ten Section Start */}
             <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                32	All four side control arm locking pin visually checked for crack.      
              </Text>

              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Specified</Text>
               <Text style={styles.FirstEntRemarkText1}>Not Cracked</Text>
              </View>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Actual
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk74 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setcheckedk74('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={
                      checkedk74 === 'NOT OK' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setcheckedk74('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>Remark</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  value={remark32}
                  onChangeText={setremark32}
                />
              </View>
            </View>
            {/* Form Entry Ten Section End */}
          
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

export default M5008;

const styles = StyleSheet.create({
  header:{
    margin:10,
    
   
},
buttonView: {
  margin: 20,
  justifyContent: 'space-between',
  flexDirection:"row",
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

headerInput:{
    marginTop:10,
    paddingTop:20,
    flexDirection:'row',
    justifyContent:"space-around",
    borderWidth:1,
    paddingBottom:10,
    backgroundColor:"#ccffff"
    
},

headerInputRow:{
    width:'50%',
    borderRadius:20
   
},
headerInputRowItem:{
    alignItems:'center',
   flexDirection:'row',
   paddingHorizontal:5
   
},
headerInputRowText:{
    flex:1,
 color:'black',
 
},
headerInputRowInput:{
    flex:2,
    backgroundColor:'white',
    margin:2,
    borderRadius:3,
    borderWidth:1
},
  Maincontainer: {
    flex: 1,
    marginTop: 5,
    marginBottom: 10,
    padding:5,
    
  },
  MainHeadingContainer: {
    flex: 3,
    flexDirection: 'column',
    marginTop: 10,
   
  },
  
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'black',
    height: 50,
    width: '35%',
  },
  Headerimage: {
   padding:6,
   marginTop:10
  },
  headerText1: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'purple',
  },
  viewText1: {
    flexDirection: 'column',
    marginLeft: 5,
  },
  viewText2: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  MainContainers: {
    backgroundColor: 'white',
    margin: 5,
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
   padding:0,
   margin:0,
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
    borderRadius:15
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
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },

  FirstEntObserveInput: {
    height: 40,
    width: 220,
    borderWidth: 1,
  },

  FirstEntRemark: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },

  FirstEntRemarkText1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },

  FirstEntRemarkInput: {
    height: 40,
    width: 220,
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

  SubObserveRemark: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },

  SubObserveRemarkText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },

  SubObserveRemarkInput: {
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
});
