
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import moment from 'moment';
import axios from 'axios';

const LslrdAsp = ({navigation,route}) => {
  const id = route.params.user_id;
  const coach = route.params.coachs;
  const bogie = route.params.bogies;
  const[providers,setProviders] = useState();

  const [value, setValue] = useState('');
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('');
  const [value6, setValue6] = useState('');
  const [value7, setValue7] = useState('');
  const [value8, setValue8] = useState('');
  const [value9, setValue9] = useState('');
  const [value10, setValue10] = useState('');
  const [value11, setValue11] = useState();
  const [value12, setValue12] = useState(0);
  const [value13, setValue13] = useState('');
  const [value14, setValue14] = useState('');
  const [value15, setValue15] = useState('');
  const [value16, setValue16] = useState('');
  const [value17, setValue17] = useState('');
  const [value18, setValue18] = useState('');
  const [value19, setValue19] = useState('');
  const [value20, setValue20] = useState('');
  const [value21, setValue21] = useState('');
  const [value22, setValue22] = useState('');
  const [value23, setValue23] = useState('');
  const [value24, setValue24] = useState('');
  const [value25, setValue25] = useState('');
  const [value26, setValue26] = useState('');
  const [value27, setValue27] = useState('');
  const [value28, setValue28] = useState('');
  const [value29, setValue29] = useState('');
  const [value30, setValue30] = useState('');
  const [value31, setValue31] = useState('');
  const [value32, setValue32] = useState('');
  const [value33, setValue33] = useState('');
  const [value34, setValue34] = useState('');
  const [value35, setValue35] = useState('');
  const [value36, setValue36] = useState('');
  

  const [remarkValue11, setremarkValue11] = useState('');
  const [remarkValue12, setremarkValue12] = useState('');
  const [remarkValue13, setremarkValue13] = useState('');
  const [remarkValue14, setremarkValue14] = useState('');
  const [remarkValue15, setremarkValue15] = useState('');
  const [remarkValue16, setremarkValue16] = useState('');
  const [remarkValue17, setremarkValue17] = useState('');
  const [remarkValue18, setremarkValue18] = useState('');
  const [remarkValue19, setremarkValue19] = useState('');
  const [remarkValue20, setremarkValue20] = useState('');
  const [remarkValue21, setremarkValue21] = useState('');
  const [remarkValue22, setremarkValue22] = useState('');
  const [remarkValue23, setremarkValue23] = useState('');
  const [remarkValue24, setremarkValue24] = useState('');
  const [remarkValue25, setremarkValue25] = useState('');
  const [remarkValue26, setremarkValue26] = useState('');
  const [remarkValue27, setremarkValue27] = useState('');
  const [remarkValue28, setremarkValue28] = useState('');
  const [remarkValue29, setremarkValue29] = useState('');
  const [remarkValue30, setremarkValue30] = useState('');
  const [remarkValue31, setremarkValue31] = useState('');
  const [remarkValue32, setremarkValue32] = useState('');
  const [remarkValue33, setremarkValue33] = useState('');
  const [remarkValue34, setremarkValue34] = useState('');
  const [remarkValue35, setremarkValue35] = useState('');
  const [remarkValue36, setremarkValue36] = useState('');

  const [date,setDate] = useState (new Date());

  const postDataUsingSimplePostCall1 = () => {
    
    if (!value) {
      alert('Please fill Bogie Type');
      return;
    }
    if (!value2) {
      alert('Please fill Shift');
      return;
    }
    if (!value3) {
      alert('Please fill Applicable no.');
      return;
    }
    if (!value4) {
      alert('Please fill Frame No.');
      return;
    }
    if (!value5) {
      alert('Please fill Axle No.');
      return;
    }
    if (!value6) {
      alert('Please fill Cylinder No.');
      return;
    }
    if (!value7) {
      alert('Please fill VSA No.');
      return;
    } if (!value8) {
      alert('Please fill VSA No.');
      return;
    } if (!value9) {
      alert('Please fill Absorber No.');
      return;
    } if (!value10) {
      alert('Please fill bolster No.');
      return;
    } if (!value11) {
      alert('Please fill Z11 ');
      return;
    } if (!value12) {
      alert('Please fill Z12');
      return;
    } if (!value13) {
      alert('Please fill Z13');
      return;
    } if (!value14) {
      alert('Please fill Z14');
      return;
    } if (!value15) {
      alert('Please fill Z11');
      return;
    } if (!value16) {
      alert('Please fill Z12');
      return;
    } if (!value17) {
      alert('Please fill Z13');
      return;
    } if (!value18) {
      alert('Please fill Z14');
      return;
    } if (!value19) {
      alert('Please fill X Value');
      return;
    } if (!value20) {
      alert('Please fill X Value');
      return;
    } if (!value21) {
      alert('Please fill Value');
      return;
    } if (!value22) {
      alert('Please fill Value');
      return;
    } if (!value23) {
      alert('Please fill Value');
      return;
    } if (!value24) {
      alert('Please fill Value');
      return;
    } if (!value25) {
      alert('Please fill X14.');
      return;
    } if (!value26) {
      alert('Please fill X24');
      return;
    } if (!value27) {
      alert('Please fill X14');
      return;
    }  
    if (!value28) {
      alert('Please fill X24');
      return;
    }  if (!value29) {
      alert('Please fill Y13');
      return;
    }  if (!value30) {
      alert('Please fill Y33');
      return;
    }  if (!value31) {
      alert('Please fill Y13');
      return;
    }  if (!value32) {
      alert('Please fill Y33');
      return;
    }  if (!value33) {
      alert('Please fill A SIDE');
      return;
    }  if (!value34) {
      alert('Please fill B SIDE');
      return;
    }  if (!value35) {
      alert('Please fill A SIDE');
      return;
    }  if (!value36) {
      alert('Please fill B SIDE');
      return;
    }  
    else {
      axios
        .post(' http://10.109.148.231:8000/api/ac2t', {
          BOGIE_TYPE_NO:                              value,       
          SHIFT:                                      value2,
          APPLICABLE_WI_NO:                           value3,
          FRAME_NO_MAKE:                              value4,
          WHEEL_AXLE_NO:                              value5,
          BRAKE_CYLINDER_NO_MAKE:                     value6,
          VSA_PRIMARY_SUSP_NO_MAKE:                   value7,
          VSA_SECONDARY_SUSP_NO_MAKE:                 value8,
          LATERAL_SHOCK_ABSORBER_NO_MAKE:             value9,
          BOLSTER_NO_MAKE:                            value10,
          Z11_TARE:                                   value11,
          Z11_GROSS:                                  value12,
          Z31_TARE:                                   value13,
          Z31_GROSS:                                  value14,
          Z41_TARE:                                   value15,      
          Z41_GROSS:                                  value16,
          Z21_TARE:                                   value17,
          Z21_GROSS:                                  value18,
          X_TARE:                                     value19,
          X_GROSS:                                    value20,
          Z12_PLUS_Z22_BY2_TARE:                      value21,
          Z12_PLUS_Z22_BY2_GROSS:                     value22,
          Z32_PLUS_Z42_BY2_TARE:                      value23,
          Z32_PLUS_Z42_BY2_GROSS:                     value24,
          X14_TARE:                                   value25,
          X14_GROSS:                                  value26,
          X24_TARE:                                   value27,
          X24_GROSS:                                  value28,
          Y13_TARE:                                   value29,
          Y13_GROSS:                                  value30,
          Y33_TARE:                                   value31,
          Y33_GROSS:                                  value32,
          A_SIDE_TARE:                                value33,
          A_SIDE_GROSS:                               value34,
          B_SIDE_TARE:                                value35,
          B_SIDE_GROSS:                               value36,

          Z11_TARE_REMARK:                            remarkValue11,
          Z11_GROSS_REMARK:                           remarkValue12,
          Z31_TARE_REMARK:                            remarkValue13,
          Z31_GROSS_REMARK:                           remarkValue14,
          Z41_TARE_REMARK:                            remarkValue15,
          Z41_GROSS_REMARK:                           remarkValue16,
          Z21_TARE_REMARK:                            remarkValue17,
          Z21_GROSS_REMARK:                           remarkValue18,
          X_TARE_REMARK:                              remarkValue19,
          X_GROSS_REMARK:                             remarkValue20,
          Z12_PLUS_Z22_BY2_TARE_REMARK:               remarkValue21,
          Z12_PLUS_Z22_BY2_GROSS_REMARK:              remarkValue22,
          Z32_PLUS_Z42_BY2_TARE_REMARK:               remarkValue23,
          Z32_PLUS_Z42_BY2_GROSS_REMARK:              remarkValue24,
          X14_TARE_REMARK:                            remarkValue25,
          X14_GROSS_REMARK:                           remarkValue26,
          X24_TARE_REMARK:                            remarkValue27,
          X24_GROSS_REMARK:                           remarkValue28,
          Y13_TARE_REMARK:                            remarkValue29,
          Y13_GROSS_REMARK:                           remarkValue30,
          Y33_TARE_REMARK:                            remarkValue31,
          Y33_GROSS_REMARK:                           remarkValue32,
          A_SIDE_TARE_REMARK:                         remarkValue33,
          A_SIDE_GROSS_REMARK:                        remarkValue34,
          B_SIDE_TARE_REMARK:                         remarkValue35,
          B_SIDE_GROSS_REMARK:                        remarkValue36,
          TEST_PASSED:                                 true,
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
    }
  };


 
  // const foo =() =>{
  //   alert('Form Submitted Successfully')
  // }
  // const home = () => {
    
  //   navigation.navigate('Bogie List');
  // };


  const postDataUsingSimplePostCall2 = () => {
    
    if (!value) {
      alert('Please fill Bogie Type');
      return;
    }
    if (!value2) {
      alert('Please fill Shift');
      return;
    }
    if (!value3) {
      alert('Please fill Applicable no.');
      return;
    }
    if (!value4) {
      alert('Please fill Frame No.');
      return;
    }
    if (!value5) {
      alert('Please fill Axle No.');
      return;
    }
    if (!value6) {
      alert('Please fill Cylinder No.');
      return;
    }
    if (!value7) {
      alert('Please fill VSA No.');
      return;
    } if (!value8) {
      alert('Please fill VSA No.');
      return;
    } if (!value9) {
      alert('Please fill Absorber No.');
      return;
    } if (!value10) {
      alert('Please fill bolster No.');
      return;
    } if (!value11) {
      alert('Please fill Z11 ');
      return;
    } if (!value12) {
      alert('Please fill Z12');
      return;
    } if (!value13) {
      alert('Please fill Z13');
      return;
    } if (!value14) {
      alert('Please fill Z14');
      return;
    } if (!value15) {
      alert('Please fill Z11');
      return;
    } if (!value16) {
      alert('Please fill Z12');
      return;
    } if (!value17) {
      alert('Please fill Z13');
      return;
    } if (!value18) {
      alert('Please fill Z14');
      return;
    } if (!value19) {
      alert('Please fill X Value');
      return;
    } if (!value20) {
      alert('Please fill X Value');
      return;
    } if (!value21) {
      alert('Please fill Value');
      return;
    } if (!value22) {
      alert('Please fill Value');
      return;
    } if (!value23) {
      alert('Please fill Value');
      return;
    } if (!value24) {
      alert('Please fill Value');
      return;
    } if (!value25) {
      alert('Please fill X14.');
      return;
    } if (!value26) {
      alert('Please fill X24');
      return;
    } if (!value27) {
      alert('Please fill X14');
      return;
    }  
    if (!value28) {
      alert('Please fill X24');
      return;
    }  if (!value29) {
      alert('Please fill Y13');
      return;
    }  if (!value30) {
      alert('Please fill Y33');
      return;
    }  if (!value31) {
      alert('Please fill Y13');
      return;
    }  if (!value32) {
      alert('Please fill Y33');
      return;
    }  if (!value33) {
      alert('Please fill A SIDE');
      return;
    }  if (!value34) {
      alert('Please fill B SIDE');
      return;
    }  if (!value35) {
      alert('Please fill A SIDE');
      return;
    }  if (!value36) {
      alert('Please fill B SIDE');
      return;
    }  
    else {
      axios
        .post(' http://10.109.148.231:8000/api/ac2t', {
          BOGIE_TYPE_NO:                              value,       
          SHIFT:                                      value2,
          APPLICABLE_WI_NO:                           value3,
          FRAME_NO_MAKE:                              value4,
          WHEEL_AXLE_NO:                              value5,
          BRAKE_CYLINDER_NO_MAKE:                     value6,
          VSA_PRIMARY_SUSP_NO_MAKE:                   value7,
          VSA_SECONDARY_SUSP_NO_MAKE:                 value8,
          LATERAL_SHOCK_ABSORBER_NO_MAKE:             value9,
          BOLSTER_NO_MAKE:                            value10,
          Z11_TARE:                                   value11,
          Z11_GROSS:                                  value12,
          Z31_TARE:                                   value13,
          Z31_GROSS:                                  value14,
          Z41_TARE:                                   value15,      
          Z41_GROSS:                                  value16,
          Z21_TARE:                                   value17,
          Z21_GROSS:                                  value18,
          X_TARE:                                     value19,
          X_GROSS:                                    value20,
          Z12_PLUS_Z22_BY2_TARE:                      value21,
          Z12_PLUS_Z22_BY2_GROSS:                     value22,
          Z32_PLUS_Z42_BY2_TARE:                      value23,
          Z32_PLUS_Z42_BY2_GROSS:                     value24,
          X14_TARE:                                   value25,
          X14_GROSS:                                  value26,
          X24_TARE:                                   value27,
          X24_GROSS:                                  value28,
          Y13_TARE:                                   value29,
          Y13_GROSS:                                  value30,
          Y33_TARE:                                   value31,
          Y33_GROSS:                                  value32,
          A_SIDE_TARE:                                value33,
          A_SIDE_GROSS:                               value34,
          B_SIDE_TARE:                                value35,
          B_SIDE_GROSS:                               value36,

          Z11_TARE_REMARK:                            remarkValue11,
          Z11_GROSS_REMARK:                           remarkValue12,
          Z31_TARE_REMARK:                            remarkValue13,
          Z31_GROSS_REMARK:                           remarkValue14,
          Z41_TARE_REMARK:                            remarkValue15,
          Z41_GROSS_REMARK:                           remarkValue16,
          Z21_TARE_REMARK:                            remarkValue17,
          Z21_GROSS_REMARK:                           remarkValue18,
          X_TARE_REMARK:                              remarkValue19,
          X_GROSS_REMARK:                             remarkValue20,
          Z12_PLUS_Z22_BY2_TARE_REMARK:               remarkValue21,
          Z12_PLUS_Z22_BY2_GROSS_REMARK:              remarkValue22,
          Z32_PLUS_Z42_BY2_TARE_REMARK:               remarkValue23,
          Z32_PLUS_Z42_BY2_GROSS_REMARK:              remarkValue24,
          X14_TARE_REMARK:                            remarkValue25,
          X14_GROSS_REMARK:                           remarkValue26,
          X24_TARE_REMARK:                            remarkValue27,
          X24_GROSS_REMARK:                           remarkValue28,
          Y13_TARE_REMARK:                            remarkValue29,
          Y13_GROSS_REMARK:                           remarkValue30,
          Y33_TARE_REMARK:                            remarkValue31,
          Y33_GROSS_REMARK:                           remarkValue32,
          A_SIDE_TARE_REMARK:                         remarkValue33,
          A_SIDE_GROSS_REMARK:                        remarkValue34,
          B_SIDE_TARE_REMARK:                         remarkValue35,
          B_SIDE_GROSS_REMARK:                        remarkValue36,
          TEST_PASSED:                                 false,
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
    }
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

  //  useEffect(() => {
  //    getAllProvider();
  // }, [providers]);
  // console.log("hii bahar hu")
  async function assign (){
    const providers2 = await axios
    .put(`  http://10.109.148.231:8000/api/get/${id}`, {
      JOB_ASSIGNED_B: true,
    })
    .then(function (response) {
     
    })
    .catch(function (response) {
      console.log(error);
    });
   }

  const passhandle= ()=>{
    postDataUsingSimplePostCall1();
    // setTimeout(function() {
    //   getAllProvider();
    // }, 4000);
    getAllProvider();
    assign();
  };
  const failhandle= ()=>{
    postDataUsingSimplePostCall2();
    
      getAllProvider();
      assign();
  };

  return (
    <SafeAreaView style={styles.maincontainer}>
      <ScrollView style={styles.maincontainer}>
        <View>
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
            <Text style={styles.headerText}>
              Modern Coach Factory Raebareli
            </Text>
            <Text style={styles.headerText}>
              QUALITY CONTROL INSPECTION REPORT(QCI)
            </Text>
          </View>
          <View style={styles.boxstyleheader}>
            <Text style={styles.headertext}>
              SELF INSPECTION PROFORMA {'\n'}
              (FIAT BOGIE /EOG WITH AIR SPRING)
            </Text>
          </View>
          <View style={{padding: 10}}>
            <View style={styles.boxstyle}>
              <Text style={styles.text2}>BOGIE STAGE -</Text>
              <Text style={styles.text2}>STATIC TESTING</Text>
            </View>
            <View style={styles.boxstyle1}>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={styles.text1}>BOGIE TYPE & NO-</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  flex: 2,
                  paddingTop: 1,
                }}>
                <Text style={styles.text11}>
                  LSLRD  WITH AIR SPRING
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Type Here"
                  placeholderTextColor="black"
                  autoCorrect={false}
                  backgroundColor="#ccffff"
                  keyboardType="number-pad"
                  underlineColor="black"
                  activeUnderlineColor="black"
                  value={value}
                  onChangeText={setValue}
                />
              </View>
            </View>

            <View style={styles.boxstyle1}>
              <Text style={styles.text2}>FORM NO. -</Text>
              <Text style={styles.text2}>MCF/RBL/QMF-5028</Text>
            </View>
            <View style={styles.boxstyle1}>
              <Text style={styles.text2}>VERSION</Text>
              <Text style={styles.text2}>12/2021</Text>
            </View>
            <View style={styles.boxstyle1}>
              <Text style={styles.text2}>Date</Text>
              <Text style={styles.text2}>  {`${moment(date).format('MMMM Do YYYY')}`}</Text>

             
            </View>
            <View style={styles.boxstyle1}>
              <Text style={styles.text2}>Shift</Text>
              <TextInput
                style={{borderBottomWidth: 1}}
                placeholder="Shift"
                placeholderTextColor="black"
                autoCorrect={false}
                backgroundColor="#ccffff"
                keyboardType="number-pad"
                underlineColor="white"
                activeUnderlineColor="black"
                value={value2}
                onChangeText={setValue2}
              />
            </View>
            <View>
              <View style={styles.boxstyleheader1}>
                <Text style={styles.headertext1}>Applicability</Text>
              </View>

              <View style={styles.boxstyle1}>
                <Text style={styles.text2}>Applicable Drawing No. :</Text>
                <Text style={styles.text2}>LW90033 Alt.-c</Text>
              </View>
              <View style={styles.boxstyle1}>
                <Text style={styles.text2}>Applicable W.I No ( If Any) :</Text>
                <TextInput
                  style={{borderBottomWidth: 1}}
                  placeholder="Applicable  W.I  No"
                  placeholderTextColor="black"
                  autoCorrect={false}
                  backgroundColor="#ccffff"
                  keyboardType="number-pad"
                  underlineColor="white"
                  activeUnderlineColor="black"
                  value={value3}
                  onChangeText={setValue3}
                />
              </View>
              <View style={styles.boxstyleheader1}>
                <Text style={styles.headertext1}>Data of Traceability</Text>
              </View>

              <View style={styles.boxstyle1}>
                <Text style={styles.text2}>FRAME NO.& MAKE</Text>
                <TextInput
                  style={{borderBottomWidth: 1}}
                  placeholder="FRAME NO.& MAKE"
                  placeholderTextColor="black"
                  autoCorrect={false}
                  backgroundColor="#ccffff"
                  keyboardType="number-pad"
                  underlineColor="white"
                  activeUnderlineColor="black"
                  value={value4}
                  onChangeText={setValue4}
                />
              </View>
              <View style={styles.boxstyle1}>
                <Text style={styles.text2}>Type of Wheel</Text>
                <Text style={styles.text2}>FORGE</Text>
              </View>
              <View style={styles.boxstyle1}>
                <Text style={styles.text2}>Wheel Axle No. (PA / NPA)</Text>
                <TextInput
                  style={{borderBottomWidth: 1}}
                  placeholder="Axle No."
                  placeholderTextColor="black"
                  autoCorrect={false}
                  backgroundColor="#ccffff"
                  keyboardType="number-pad"
                  underlineColor="white"
                  activeUnderlineColor="black"
                  value={value5}
                  onChangeText={setValue5}
                />
              </View>
              <View style={styles.boxstyle1}>
                <Text style={styles.text2}>Brake Cylinder No & Make</Text>
                <TextInput
                  style={{borderBottomWidth: 1}}
                  placeholder="Cylinder No."
                  placeholderTextColor="black"
                  autoCorrect={false}
                  backgroundColor="#ccffff"
                  keyboardType="number-pad"
                  underlineColor="white"
                  activeUnderlineColor="black"
                  value={value6}
                  onChangeText={setValue6}
                />
              </View>
              <View style={styles.boxstyle1}>
                <Text style={styles.text2}>
                  V.S.A.(AT PRIMARY SUSP.)No& Make
                </Text>
                <TextInput
                  style={{borderBottomWidth: 1}}
                  placeholder="V.S.A No."
                  placeholderTextColor="black"
                  autoCorrect={false}
                  backgroundColor="#ccffff"
                  keyboardType="number-pad"
                  underlineColor="white"
                  activeUnderlineColor="black"
                  value={value7}
                  onChangeText={setValue7}
                />
              </View>
              <View style={styles.boxstyle1}>
                <Text style={styles.text2}>
                  V.S.A.(AT SECONDRY SUSP.)No& Make
                </Text>
                <TextInput
                  style={{borderBottomWidth: 1}}
                  placeholder="V.S.A No."
                  placeholderTextColor="black"
                  autoCorrect={false}
                  backgroundColor="#ccffff"
                  keyboardType="number-pad"
                  underlineColor="white"
                  activeUnderlineColor="black"
                  value={value8}
                  onChangeText={setValue8}
                />
              </View>
              <View style={styles.boxstyle1}>
                <Text style={styles.text2}>
                  LATERAL SHOCK ABSORBER NO. & MAKE
                </Text>
                <TextInput
                  style={{borderBottomWidth: 1}}
                  multiline={true}
                  placeholder="ABSORBER No."
                  placeholderTextColor="black"
                  autoCorrect={false}
                  backgroundColor="#ccffff"
                  keyboardType="number-pad"
                  underlineColor="white"
                  activeUnderlineColor="black"
                  value={value9}
                  onChangeText={setValue9}
                />
              </View>
              <View style={styles.boxstyle1}>
                <Text style={styles.text2}>Bolster No & Make</Text>
                <TextInput
                  style={{borderBottomWidth: 1}}
                  placeholder="Bolster No."
                  placeholderTextColor="black"
                  autoCorrect={false}
                  backgroundColor="#ccffff"
                  keyboardType="number-pad"
                  underlineColor="white"
                  activeUnderlineColor="black"
                  value={value10}
                  onChangeText={setValue10}
                />
              </View>
            </View>
            <View style={styles.boxstyle3}>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: '50%', height: 350, padding: 5}}>
                  <View style={{flex: 4}}>
                    <Text style={styles.textBox}>
                      TESTING LOAD {'\n'}
                      IN TONNES
                    </Text>
                  </View>
                  <View style={{flex: 1}}>
                    <Text style={styles.textBox}>TARE 13.59</Text>
                  </View>
                  <View style={{flex: 1}}>
                    <Text style={styles.textBox}>GROSS 18.03</Text>
                  </View>
                </View>
                <View style={{width: '50%', height: 350}}>
                  <View style={{flex: 3}}>
                    <Text style={styles.textBox}>
                      Under Test Load At Bogie Shop {'\n'}
                      ___________________________{'\n'}
                      RAIL LEVEL TO THE {'\n'}
                      CONTROL ARM BRACKET{'\n'}
                      462 +/-4 MM TARE {'\n'}
                      453 +/-4 MM GROSS{'\n'}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View>
                      <Text style={styles.textBox}>Z11</Text>
                    </View>
                    <View>
                      <Text style={styles.textBox}>Z31</Text>
                    </View>
                    <View>
                      <Text style={styles.textBox}>Z41</Text>
                    </View>
                    <View>
                      <Text style={styles.textBox}>Z21</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flex: 1}}>
                      <TextInput
                        style={{margin: 2, height: 40}}
                        backgroundColor="white"
                        keyboardType="number-pad"
                        onChangeText={value11 => {
                          setValue11(value11);

                        }}
                      />
                    </View>

                    <View style={{flex: 1, height: 40}}>
                      <TextInput
                        style={{margin: 2, height: 40}}
                        placeholder=""
                        placeholderTextColor="black"
                        autoCorrect={false}
                        backgroundColor="white"
                        keyboardType="number-pad"
                        underlineColor="white"
                        activeUnderlineColor="black"
                        value={value12}
                        onChangeText={setValue12}
                      />
                    </View>
                    <View style={{flex: 1}}>
                      <TextInput
                        style={{margin: 2, height: 40}}
                        placeholder=""
                        placeholderTextColor="black"
                        autoCorrect={false}
                        backgroundColor="white"
                        keyboardType="number-pad"
                        underlineColor="white"
                        activeUnderlineColor="black"
                        value={value13}
                        onChangeText={setValue13}
                      />
                    </View>
                    <View style={{flex: 1}}>
                      <TextInput
                        style={{margin: 2, height: 40}}
                        placeholder=""
                        placeholderTextColor="black"
                        autoCorrect={false}
                        backgroundColor="white"
                        keyboardType="number-pad"
                        underlineColor="white"
                        activeUnderlineColor="black"
                        value={value14}
                        onChangeText={setValue14}
                      />
                    </View>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flex: 1}}>
                      <TextInput
                        style={{margin: 2, height: 40}}
                        placeholder=""
                        placeholderTextColor="black"
                        autoCorrect={false}
                        backgroundColor="white"
                        keyboardType="number-pad"
                        underlineColor="white"
                        activeUnderlineColor="black"
                        value={value15}
                        onChangeText={setValue15}
                      />
                    </View>
                    <View style={{flex: 1}}>
                      <TextInput
                        style={{margin: 2, height: 40}}
                        placeholder=""
                        placeholderTextColor="black"
                        autoCorrect={false}
                        backgroundColor="white"
                        keyboardType="number-pad"
                        underlineColor="white"
                        activeUnderlineColor="black"
                        value={value16}
                        onChangeText={setValue16}
                      />
                    </View>
                    <View style={{flex: 1}}>
                      <TextInput
                        style={{margin: 2, height: 40}}
                        placeholder=""
                        placeholderTextColor="black"
                        autoCorrect={false}
                        backgroundColor="white"
                        keyboardType="number-pad"
                        underlineColor="white"
                        activeUnderlineColor="black"
                        value={value17}
                        onChangeText={setValue17}
                      />
                    </View>
                    <View style={{flex: 1}}>
                      <TextInput
                        style={{margin: 2, height: 40}}
                        placeholder=""
                        placeholderTextColor="black"
                        autoCorrect={false}
                        backgroundColor="white"
                        keyboardType="number-pad"
                        underlineColor="white"
                        activeUnderlineColor="black"
                        value={value18}
                        onChangeText={setValue18}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={{marginHorizontal: 10}}>
                {!value11 ? (
                  <View></View>
                ) : value11 < 458 || value11 > 466 ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        flex: 1,
                        fontWeight: '500',
                      }}>
                      Z11 Remark TARE
                    </Text>
                    <TextInput
                      style={{margin: 2, height: 40, flex: 4}}
                      placeholder="Remark"
                      placeholderTextColor="black"
                      autoCorrect={false}
                      backgroundColor="white"
                      keyboardType="number-pad"
                      underlineColor="white"
                      activeUnderlineColor="black"
                      value={remarkValue11}
                      onChangeText={setremarkValue11}
                    />
                  </View>
                ) : (
                  <View></View>
                )}
                {!value15 ? (
                  <View></View>
                ) : value15 < 449 || value15 > 457 ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        flex: 1,
                        fontWeight: '500',
                      }}>
                      Z11 Remark GROSS
                    </Text>
                    <TextInput
                      style={{margin: 2, height: 40, flex: 4}}
                      placeholder="Remark"
                      placeholderTextColor="black"
                      autoCorrect={false}
                      backgroundColor="white"
                      keyboardType="number-pad"
                      underlineColor="white"
                      activeUnderlineColor="black"
                      value={remarkValue15}
                      onChangeText={setremarkValue15}
                    />
                  </View>
                ) : (
                  <View></View>
                )}

                {!value12 ? (
                  <View></View>
                ) : value12 < 458 || value12 > 466 ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        flex: 1,
                        fontWeight: '500',
                      }}>
                      Z31 Remark TARE
                    </Text>
                    <TextInput
                      style={{margin: 2, height: 40, flex: 4}}
                      placeholder="Remark"
                      placeholderTextColor="black"
                      autoCorrect={false}
                      backgroundColor="white"
                      keyboardType="number-pad"
                      underlineColor="white"
                      activeUnderlineColor="black"
                      value={remarkValue12}
                      onChangeText={setremarkValue12}
                    />
                  </View>
                ) : (
                  <View>
                    <Text></Text>
                  </View>
                )}
                {!value16 ? (
                  <View>
                    <Text></Text>
                  </View>
                ) : value16 < 449 || value16 > 457 ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        flex: 1,
                        fontWeight: '500',
                      }}>
                      Z31 Remark GROSS
                    </Text>
                    <TextInput
                      style={{margin: 2, height: 40, flex: 4}}
                      placeholder="Remark"
                      placeholderTextColor="black"
                      autoCorrect={false}
                      backgroundColor="white"
                      keyboardType="number-pad"
                      underlineColor="white"
                      activeUnderlineColor="black"
                      value={remarkValue16}
                      onChangeText={setremarkValue16}
                    />
                  </View>
                ) : (
                  <View>
                    <Text></Text>
                  </View>
                )}

                {!value13 ? (
                  <View></View>
                ) : value13 < 458 || value13 > 466 ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        flex: 1,
                        fontWeight: '500',
                      }}>
                      Z41 Remark TARE
                    </Text>
                    <TextInput
                      style={{margin: 2, height: 40, flex: 4}}
                      placeholder="Remark"
                      placeholderTextColor="black"
                      autoCorrect={false}
                      backgroundColor="white"
                      keyboardType="number-pad"
                      underlineColor="white"
                      activeUnderlineColor="black"
                      value={remarkValue13}
                      onChangeText={setremarkValue13}
                    />
                  </View>
                ) : (
                  <View></View>
                )}
                {!value17 ? (
                  <View></View>
                ) : value17 < 449 || value17 > 457 ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        flex: 1,
                        fontWeight: '500',
                      }}>
                      Z41 Remark GROSS
                    </Text>
                    <TextInput
                      style={{margin: 2, height: 40, flex: 4}}
                      placeholder="Remark"
                      placeholderTextColor="black"
                      autoCorrect={false}
                      backgroundColor="white"
                      keyboardType="number-pad"
                      underlineColor="white"
                      activeUnderlineColor="black"
                      value={remarkValue17}
                      onChangeText={setremarkValue17}
                    />
                  </View>
                ) : (
                  <View></View>
                )}

                {!value14 ? (
                  <View></View>
                ) : value14 < 458 || value14 > 466 ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        flex: 1,
                        fontWeight: '500',
                      }}>
                      Z21 Remark TARE
                    </Text>
                    <TextInput
                      style={{margin: 2, height: 40, flex: 4}}
                      placeholder="Remark"
                      placeholderTextColor="black"
                      autoCorrect={false}
                      backgroundColor="white"
                      keyboardType="number-pad"
                      underlineColor="white"
                      activeUnderlineColor="black"
                      value={remarkValue14}
                      onChangeText={setremarkValue14}
                    />
                  </View>
                ) : (
                  <View>
                    <Text></Text>
                  </View>
                )}
                {!value18 ? (
                  <View></View>
                ) : value18 < 449 || value18 > 457 ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        flex: 1,
                        fontWeight: '500',
                      }}>
                      Z21 Remark GROSS
                    </Text>
                    <TextInput
                      style={{margin: 2, height: 40, flex: 4}}
                      placeholder="Remark"
                      placeholderTextColor="black"
                      autoCorrect={false}
                      backgroundColor="white"
                      keyboardType="number-pad"
                      underlineColor="white"
                      activeUnderlineColor="black"
                      value={remarkValue18}
                      onChangeText={setremarkValue18}
                    />
                  </View>
                ) : (
                  <View></View>
                )}
              </View>
            </View>
            <View style={styles.boxstyle3}>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: '50%', height: 458, padding: 5}}>
                  <View style={{flex: 4}}>
                    <Text style={styles.textBox}>
                      TESTING LOAD {'\n'}
                      IN TONNES
                    </Text>
                  </View>
                  <View style={{flex: 1}}>
                    <Text style={styles.textBox}>TARE 13.59</Text>
                  </View>
                  <View style={{flex: 1}}>
                    <Text style={styles.textBox}>GROSS 18.03</Text>
                  </View>
                </View>
                <View style={{width: '50%', height: 458}}>
                  <View style={{flex: 3}}>
                    <Text style={styles.textBox}>
                      Under Test Load At Bogie Shop {'\n'}
                      ____________________________{'\n'}
                      DIFFERENCE IN ALL FOUR{'\n'}
                      SIDE IN A {'\n'}= OR {'<'} 3 MM {'\n'}
                    </Text>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}>
                    <Text style={styles.textBox}>X</Text>
                  </View>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <TextInput
                      style={{margin: 2, height: 40, width: '100%'}}
                      placeholder=""
                      placeholderTextColor="black"
                      autoCorrect={false}
                      backgroundColor="white"
                      keyboardType="number-pad"
                      underlineColor="white"
                      activeUnderlineColor="black"
                      value={value19}
                      onChangeText={setValue19}
                    />
                  </View>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <TextInput
                      style={{margin: 2, height: 40, width: '100%'}}
                      placeholder=""
                      placeholderTextColor="black"
                      autoCorrect={false}
                      backgroundColor="white"
                      keyboardType="number-pad"
                      underlineColor="white"
                      activeUnderlineColor="black"
                      value={value20}
                      onChangeText={setValue20}
                    />
                  </View>
                </View>
              </View>
              <View style={{marginHorizontal: 10}}>
                {value19 > 3 ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        flex: 1,
                        fontWeight: '500',
                      }}>
                      X Remark TARE
                    </Text>
                    <TextInput
                      style={{margin: 2, height: 40, flex: 4}}
                      placeholder="Remark"
                      placeholderTextColor="black"
                      autoCorrect={false}
                      backgroundColor="white"
                      keyboardType="number-pad"
                      underlineColor="white"
                      activeUnderlineColor="black"
                      value={remarkValue19}
                      onChangeText={setremarkValue19}
                    />
                  </View>
                ) : null}

                {value20 > 3 ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        flex: 1,
                        fontWeight: '500',
                      }}>
                      X Remark GROSS
                    </Text>
                    <TextInput
                      style={{margin: 2, height: 40, flex: 4}}
                      placeholder="Remark"
                      placeholderTextColor="black"
                      autoCorrect={false}
                      backgroundColor="white"
                      keyboardType="number-pad"
                      underlineColor="white"
                      activeUnderlineColor="black"
                      value={remarkValue20}
                      onChangeText={setremarkValue20}
                    />
                  </View>
                ) : null}
              </View>
            </View>
            <View style={styles.boxstyle3}>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: '50%', height: 350, padding: 5}}>
                  <View style={{flex: 4}}>
                    <Text style={styles.textBox}>
                      TESTING LOAD {'\n'}
                      IN TONNES
                    </Text>
                  </View>
                  <View style={{flex: 1}}>
                    <Text style={styles.textBox}>TARE 13.59</Text>
                  </View>
                  <View style={{flex: 1}}>
                    <Text style={styles.textBox}>GROSS 18.03</Text>
                  </View>
                </View>
                <View style={{width: '50%', height: 350}}>
                  <View style={{flex: 3}}>
                    <Text style={styles.textBox}>
                      FOR REFERENCE ONLY {'\n'}
                      ________________________ AVERAGE HEIGHT FROM {'\n'}
                      RAIL LEVEL TO PIN BRACKET TOP {'\n'}
                      930.5 +6/-2 MM TARE {'\n'}
                      921.5 +6/-2 MM GROSS {'\n'}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View>
                      <Text style={styles.textBox}>(Z12+Z22)/2</Text>
                    </View>
                    <View>
                      <Text style={styles.textBox}>(Z32+Z42)/2</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flex: 1}}>
                      <TextInput
                        style={{margin: 2, height: 40}}
                        placeholder=""
                        placeholderTextColor="black"
                        autoCorrect={false}
                        backgroundColor="white"
                        keyboardType="number-pad"
                        underlineColor="white"
                        activeUnderlineColor="black"
                        value={value21}
                        onChangeText={setValue21}
                      />
                    </View>
                    <View style={{flex: 1, height: 40}}>
                      <TextInput
                        style={{margin: 2, height: 40}}
                        placeholder=""
                        placeholderTextColor="black"
                        autoCorrect={false}
                        backgroundColor="white"
                        keyboardType="number-pad"
                        underlineColor="white"
                        activeUnderlineColor="black"
                        value={value22}
                        onChangeText={setValue22}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flex: 1}}>
                      <TextInput
                        style={{margin: 2, height: 40}}
                        placeholder=""
                        placeholderTextColor="black"
                        autoCorrect={false}
                        backgroundColor="white"
                        keyboardType="number-pad"
                        underlineColor="white"
                        activeUnderlineColor="black"
                        value={value23}
                        onChangeText={setValue23}
                      />
                    </View>
                    <View style={{flex: 1}}>
                      <TextInput
                        style={{margin: 2, height: 40}}
                        placeholder=""
                        placeholderTextColor="black"
                        autoCorrect={false}
                        backgroundColor="white"
                        keyboardType="number-pad"
                        underlineColor="white"
                        activeUnderlineColor="black"
                        value={value24}
                        onChangeText={setValue24}
                      />
                    </View>
                  </View>
                </View>
              </View>

              <View style={{marginHorizontal: 10}}>
                {!value21 ? (
                  <View></View>
                ) : value21  < 928.5 || value21 > 936.5  ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        flex: 1,
                        fontWeight: '500',
                      }}>
                      Remark TARE
                    </Text>
                    <TextInput
                      style={{margin: 2, height: 40, flex: 4}}
                      placeholder="Remark"
                      placeholderTextColor="black"
                      autoCorrect={false}
                      backgroundColor="white"
                      keyboardType="number-pad"
                      underlineColor="white"
                      activeUnderlineColor="black"
                      value={remarkValue21}
                      onChangeText={setremarkValue21}
                    />
                  </View>
                ) : (
                  <View></View>
                )}
                {!value22 ? (
                  <View></View>
                ) : value22 < 928.5 || value22 > 936.5 ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        flex: 1,
                        fontWeight: '500',
                      }}>
                      TARE 2
                    </Text>
                    <TextInput
                      style={{margin: 2, height: 40, flex: 4}}
                      placeholder="Remark"
                      placeholderTextColor="black"
                      autoCorrect={false}
                      backgroundColor="white"
                      keyboardType="number-pad"
                      underlineColor="white"
                      activeUnderlineColor="black"
                      value={remarkValue22}
                      onChangeText={setremarkValue22}
                    />
                  </View>
                ) : (
                  <View></View>
                )}

                {!value23 ? (
                  <View></View>
                ) : value23 < 919.5 || value23 > 927.5 ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        flex: 1,
                        fontWeight: '500',
                      }}>
                      Remark GROSS
                    </Text>
                    <TextInput
                      style={{margin: 2, height: 40, flex: 4}}
                      placeholder="Remark"
                      placeholderTextColor="black"
                      autoCorrect={false}
                      backgroundColor="white"
                      keyboardType="number-pad"
                      underlineColor="white"
                      activeUnderlineColor="black"
                      value={remarkValue23}
                      onChangeText={setremarkValue23}
                    />
                  </View>
                ) : (
                  <View>
                    <Text></Text>
                  </View>
                )}
                {!value24 ? (
                  <View>
                    <Text></Text>
                  </View>
                ) : value24 < 919.5 || value24 > 927.5 ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        flex: 1,
                        fontWeight: '500',
                      }}>
                      Remark GROSS 2
                    </Text>
                    <TextInput
                      style={{margin: 2, height: 40, flex: 4}}
                      placeholder="Remark"
                      placeholderTextColor="black"
                      autoCorrect={false}
                      backgroundColor="white"
                      keyboardType="number-pad"
                      underlineColor="white"
                      activeUnderlineColor="black"
                      value={remarkValue24}
                      onChangeText={setremarkValue24}
                    />
                  </View>
                ) : (
                  <View>
                    <Text></Text>
                  </View>
                )}
              </View>
            </View>
            <View style={styles.boxstyleheader1}></View>

            <View style={styles.boxstyle3}>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: '50%', height: 350, padding: 5}}>
                  <View style={{flex: 4}}>
                    <Text style={styles.textBox}>
                      TESTING LOAD {'\n'}
                      IN TONNES
                    </Text>
                  </View>
                  <View style={{flex: 1}}>
                    <Text style={styles.textBox}>TARE 13.59</Text>
                  </View>
                  <View style={{flex: 1}}>
                    <Text style={styles.textBox}>GROSS 18.03</Text>
                  </View>
                </View>
                <View style={{width: '50%', height: 350}}>
                  <View style={{flex: 3}}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: 'darkgreen',
                        fontWeight: 'bold',
                        fontStyle: 'italic',
                      }}>
                      THESE SHALL BE ENSURED AT FURNISHING SHOP AFTER GIVING AIR
                      CONNECTION TO{'\n'}
                      THE AIR SPRING & CONTROL SYSTEM{'\n'}
                      __________________________________{'\n'}
                    </Text>
                    <View>
                      <Text style={styles.textBox1}>
                        LONGITUDINAL BUMP STOP GAP {'\n'}
                        08 +5/-2 TARE {'\n'}
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      marginBottom: -25,
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <View>
                      <Text style={styles.textBox}>X14</Text>
                    </View>
                    <View>
                      <Text style={styles.textBox}>X24</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flex: 1}}>
                      <TextInput
                        style={{margin: 2, height: 40}}
                        placeholder=""
                        placeholderTextColor="black"
                        autoCorrect={false}
                        backgroundColor="white"
                        keyboardType="number-pad"
                        underlineColor="white"
                        activeUnderlineColor="black"
                        value={value25}
                        onChangeText={setValue25}
                      />
                    </View>
                    <View style={{flex: 1, height: 40}}>
                      <TextInput
                        style={{margin: 2, height: 40}}
                        placeholder=""
                        placeholderTextColor="black"
                        autoCorrect={false}
                        backgroundColor="white"
                        keyboardType="number-pad"
                        underlineColor="white"
                        activeUnderlineColor="black"
                        value={value26}
                        onChangeText={setValue26}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flex: 1}}>
                      <TextInput
                        style={{margin: 2, height: 40}}
                        placeholder="-"
                        placeholderTextColor="black"
                        autoCorrect={false}
                        backgroundColor="white"
                        keyboardType="number-pad"
                        underlineColor="white"
                        activeUnderlineColor="black"
                        value={value27}
                        onChangeText={setValue27}
                      />
                    </View>
                    <View style={{flex: 1}}>
                      <TextInput
                        style={{margin: 2, height: 40}}
                        placeholder="-"
                        placeholderTextColor="black"
                        autoCorrect={false}
                        backgroundColor="white"
                        keyboardType="number-pad"
                        underlineColor="white"
                        activeUnderlineColor="black"
                        value={value28}
                        onChangeText={setValue28}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={{marginHorizontal: 10}}>
                {!value25 ? (
                  <View></View>
                ) : value25 < 6 || value25 > 13 ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        flex: 1,
                        fontWeight: '500',
                      }}>
                      Remark TARE X14
                    </Text>
                    <TextInput
                      style={{margin: 2, height: 40, flex: 4}}
                      placeholder="Remark"
                      placeholderTextColor="black"
                      autoCorrect={false}
                      backgroundColor="white"
                      keyboardType="number-pad"
                      underlineColor="white"
                      activeUnderlineColor="black"
                      value={remarkValue25}
                      onChangeText={setremarkValue25}
                    />
                  </View>
                ) : (
                  <View></View>
                )}
                {!value26 ? (
                  <View></View>
                ) : value26 < 6 || value26 > 13 ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        flex: 1,
                        fontWeight: '500',
                      }}>
                      Remark TARE X24
                    </Text>
                    <TextInput
                      style={{margin: 2, height: 40, flex: 4}}
                      placeholder="Remark"
                      placeholderTextColor="black"
                      autoCorrect={false}
                      backgroundColor="white"
                      keyboardType="number-pad"
                      underlineColor="white"
                      activeUnderlineColor="black"
                      value={remarkValue26}
                      onChangeText={setremarkValue26}
                    />
                  </View>
                ) : (
                  <View></View>
                )}

                
              </View>
            </View>

            <View style={styles.boxstyle3}>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: '50%', height: 350, padding: 5}}>
                  <View style={{flex: 4}}>
                    <Text style={styles.textBox}>
                      TESTING LOAD {'\n'}
                      IN TONNES
                    </Text>
                  </View>
                  <View style={{flex: 1}}>
                    <Text style={styles.textBox}>TARE 13.59</Text>
                  </View>
                  <View style={{flex: 1}}>
                    <Text style={styles.textBox}>GROSS 18.03</Text>
                  </View>
                </View>
                <View style={{width: '50%', height: 350}}>
                  <View style={{flex: 3}}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: 'darkgreen',
                        fontWeight: 'bold',
                        fontStyle: 'italic',
                      }}>
                      THESE SHALL BE ENSURED AT FURNISHING SHOP AFTER GIVING AIR
                      CONNECTION TO{'\n'}
                      THE AIR SPRING & CONTROL SYSTEM{'\n'}
                      __________________________________{'\n'}
                    </Text>
                    <View>
                      <Text style={styles.textBox1}>
                        LATERAL BUMP STOP GAP {'\n'}
                        25 +/- 5 TARE {'\n'}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <View>
                      <Text style={styles.textBox}>Y13</Text>
                    </View>
                    <View>
                      <Text style={styles.textBox}>Y33</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flex: 1}}>
                      <TextInput
                        style={{margin: 2, height: 40}}
                        placeholder=""
                        placeholderTextColor="black"
                        autoCorrect={false}
                        backgroundColor="white"
                        keyboardType="number-pad"
                        underlineColor="white"
                        activeUnderlineColor="black"
                        value={value29}
                        onChangeText={setValue29}
                      />
                    </View>
                    <View style={{flex: 1, height: 40}}>
                      <TextInput
                        style={{margin: 2, height: 40}}
                        placeholder=""
                        placeholderTextColor="black"
                        autoCorrect={false}
                        backgroundColor="white"
                        keyboardType="number-pad"
                        underlineColor="white"
                        activeUnderlineColor="black"
                        value={value30}
                        onChangeText={setValue30}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flex: 1}}>
                      <TextInput
                        style={{margin: 2, height: 40}}
                        placeholder="-"
                        placeholderTextColor="black"
                        autoCorrect={false}
                        backgroundColor="white"
                        keyboardType="number-pad"
                        underlineColor="white"
                        activeUnderlineColor="black"
                        value={value31}
                        onChangeText={setValue31}
                      />
                    </View>
                    <View style={{flex: 1}}>
                      <TextInput
                        style={{margin: 2, height: 40}}
                        placeholder="-"
                        placeholderTextColor="black"
                        autoCorrect={false}
                        backgroundColor="white"
                        keyboardType="number-pad"
                        underlineColor="white"
                        activeUnderlineColor="black"
                        value={value32}
                        onChangeText={setValue32}
                      />
                    </View>
                  </View>
                </View>
              </View>

              <View style={{marginHorizontal: 10}}>
                {!value29 ? (
                  <View></View>
                ) : value29 < 20 || value29 > 30 ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        flex: 1,
                        fontWeight: '500',
                      }}>
                      Remark TARE Y13
                    </Text>
                    <TextInput
                      style={{margin: 2, height: 40, flex: 4}}
                      placeholder="Remark"
                      placeholderTextColor="black"
                      autoCorrect={false}
                      backgroundColor="white"
                      keyboardType="number-pad"
                      underlineColor="white"
                      activeUnderlineColor="black"
                      value={remarkValue29}
                      onChangeText={setremarkValue29}
                    />
                  </View>
                ) : (
                  <View></View>
                )}
                {!value30 ? (
                  <View></View>
                ) : value30 < 20 || value30 > 30 ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        flex: 1,
                        fontWeight: '500',
                      }}>
                      Remark TARE Y33
                    </Text>
                    <TextInput
                      style={{margin: 2, height: 40, flex: 4}}
                      placeholder="Remark"
                      placeholderTextColor="black"
                      autoCorrect={false}
                      backgroundColor="white"
                      keyboardType="number-pad"
                      underlineColor="white"
                      activeUnderlineColor="black"
                      value={remarkValue30}
                      onChangeText={setremarkValue30}
                    />
                  </View>
                ) : (
                  <View></View>
                )}

              </View>
            </View>
            <View style={styles.boxstyle3}>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: '50%', height: 350, padding: 5}}>
                  <View style={{flex: 4}}>
                    <Text style={styles.textBox}>
                      TESTING LOAD {'\n'}
                      IN TONNES
                    </Text>
                  </View>
                  <View style={{flex: 1}}>
                    <Text style={styles.textBox}>TARE 13.59</Text>
                  </View>
                  <View style={{flex: 1}}>
                    <Text style={styles.textBox}>GROSS 18.03</Text>
                  </View>
                </View>
                <View style={{width: '50%', height: 350}}>
                  <View style={{flex: 3}}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: 'darkgreen',
                        fontWeight: 'bold',
                        fontStyle: 'italic',
                      }}>
                      THESE SHALL BE ENSURED AT FURNISHING SHOP AFTER GIVING AIR
                      CONNECTION TO{'\n'}
                      THE AIR SPRING & CONTROL SYSTEM{'\n'}
                      __________________________________{'\n'}
                    </Text>
                    <View>
                      <Text style={styles.textBox1}>
                        SECONDRY SPRING HEIGHT {'\n'}
                        294 +0/- 5 {'\n'}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <View>
                      <Text style={styles.textBox}>A SIDE</Text>
                    </View>
                    <View>
                      <Text style={styles.textBox}>B SIDE</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flex: 1}}>
                      <TextInput
                        style={{margin: 2, height: 40}}
                        placeholder=""
                        placeholderTextColor="black"
                        autoCorrect={false}
                        backgroundColor="white"
                        keyboardType="number-pad"
                        underlineColor="white"
                        activeUnderlineColor="black"
                        value={value33}
                        onChangeText={setValue33}
                      />
                    </View>
                    <View style={{flex: 1, height: 40}}>
                      <TextInput
                        style={{margin: 2, height: 40}}
                        placeholder=""
                        placeholderTextColor="black"
                        autoCorrect={false}
                        backgroundColor="white"
                        keyboardType="number-pad"
                        underlineColor="white"
                        activeUnderlineColor="black"
                        value={value34}
                        onChangeText={setValue34}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flex: 1}}>
                      <TextInput
                        style={{margin: 2, height: 40}}
                        placeholder="-"
                        placeholderTextColor="black"
                        autoCorrect={false}
                        backgroundColor="white"
                        keyboardType="number-pad"
                        underlineColor="white"
                        activeUnderlineColor="black"
                        value={value35}
                        onChangeText={setValue35}
                      />
                    </View>
                    <View style={{flex: 1}}>
                      <TextInput
                        style={{margin: 2, height: 40}}
                        placeholder="-"
                        placeholderTextColor="black"
                        autoCorrect={false}
                        backgroundColor="white"
                        keyboardType="number-pad"
                        underlineColor="white"
                        activeUnderlineColor="black"
                        value={value36}
                        onChangeText={setValue36}
                      />
                    </View>
                  </View>
                </View>
              </View>

              <View style={{marginHorizontal: 10}}>
                {!value33 ? (
                  <View></View>
                ) : value33 < 289 || value33 > 294 ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        flex: 1,
                        fontWeight: '500',
                      }}>
                      Remark TARE A SIDE
                    </Text>
                    <TextInput
                      style={{margin: 2, height: 40, flex: 4}}
                      placeholder="Remark"
                      placeholderTextColor="black"
                      autoCorrect={false}
                      backgroundColor="white"
                      keyboardType="number-pad"
                      underlineColor="white"
                      activeUnderlineColor="black"
                      value={remarkValue33}
                      onChangeText={setremarkValue33}
                    />
                  </View>
                ) : (
                  <View></View>
                )}
                {!value34 ? (
                  <View></View>
                ) : value34 < 287 || value34 > 294 ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        flex: 1,
                        fontWeight: '500',
                      }}>
                      Remark TARE B SIDE
                    </Text>
                    <TextInput
                      style={{margin: 2, height: 40, flex: 4}}
                      placeholder="Remark"
                      placeholderTextColor="black"
                      autoCorrect={false}
                      backgroundColor="white"
                      keyboardType="number-pad"
                      underlineColor="white"
                      activeUnderlineColor="black"
                      value={remarkValue34}
                      onChangeText={setremarkValue34}
                    />
                  </View>
                ) : (
                  <View></View>
                )}

               
               
              </View>
            </View>
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
    </SafeAreaView>
  );
};

export default LslrdAsp;

const styles = StyleSheet.create({
  viewstyle1: {
    padding: 10,
    alignItems: 'center',
  },
  headertext: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  headertext1: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  text2: {
    fontSize: 12,
    color: 'black',
    paddingTop: 15,
    padding: 10,
  },
  inputVal: {
    borderWidth: 1,
    color: 'black',
  },
  text1: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    paddingTop: 15,
  },
  text11: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
    flex: 1,
    paddingLeft: 15,
    paddingRight: 10,
  },
  maincontainer: {
    backgroundColor: 'white',
  },
  input: {
    borderBottomWidth: 1,
    width: '15%',
    flex: 2,
  },
  boxstyle: {
    borderRadius: 5,
    paddingVertical: 10,
    backgroundColor: '#ccffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxstyle1: {
    flexWrap: 'wrap',
    marginTop: 5,
    borderRadius: 5,
    paddingVertical: 10,
    backgroundColor: '#ccffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxstyle2: {
    marginTop: 10,
    borderRadius: 5,
    paddingVertical: 10,
    backgroundColor: '#ccffff',
    flexDirection: 'row',
  },
  boxstyle3: {
    marginTop: 5,
    borderRadius: 5,
    paddingVertical: 10,
    backgroundColor: '#ccffff',
    flexDirection: 'column',
  },
  boxstyleheader: {
    paddingHorizontal: 5,
    borderRadius: 5,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  boxstyleheader1: {
    marginTop: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  textBox: {
    color: 'black',
    fontWeight: '500',
    fontSize: 15,
  },
  textBox1: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'black',
    height: 50,
    width: '35%',
  },
  buttonView: {
    margin: 20,
    justifyContent: 'space-between',
    flexDirection:"row"  },

  imageTag: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headerTag: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: 'white',
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    flexWrap: 'wrap',
  },
});

