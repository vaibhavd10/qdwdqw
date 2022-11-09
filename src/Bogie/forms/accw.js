import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image
  } from 'react-native';
  import React, {useState} from 'react';
  import moment from 'moment';
import axios from 'axios';
  
  const Accw = ({navigation,route}) => {
    const id = route.params.user_id;
    const coach = route.params.coachs;
    const bogie = route.params.bogies;
    const [providers, setProviders] = useState();
  
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
    const [value11, setValue11] = useState('');
    const [value12, setValue12] = useState('');
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
    const [value37, setValue37] = useState('');
    const [value38, setValue38] = useState('');
    const [value39, setValue39] = useState('');
    const [value40, setValue40] = useState('');
    const [value41, setValue41] = useState('');
    const [value42, setValue42] = useState('');
    const [value43, setValue43] = useState('');
    const [value44, setValue44] = useState('');
    const [value45, setValue45] = useState('');
    const [value46, setValue46] = useState('');
    const [value47, setValue47] = useState('');
    const [value48, setValue48] = useState('');
    const [value49, setValue49] = useState('');
    const [value50, setValue50] = useState('');


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
    const [remarkValue37, setremarkValue37] = useState('');
    const [remarkValue38, setremarkValue38] = useState('');
    const [remarkValue39, setremarkValue39] = useState('');
    const [remarkValue40, setremarkValue40] = useState('');
    const [remarkValue41, setremarkValue41] = useState('');
    const [remarkValue42, setremarkValue42] = useState('');
    const [remarkValue43, setremarkValue43] = useState('');
    const [remarkValue44, setremarkValue44] = useState('');
    const [remarkValue45, setremarkValue45] = useState('');
    const [remarkValue46, setremarkValue46] = useState('');
    const [remarkValue47, setremarkValue47] = useState('');
    const [remarkValue48, setremarkValue48] = useState('');
    const [remarkValue49, setremarkValue49] = useState('');
  
  
  
    const [date,setDate] = useState (new Date());
  




    const home = () =>{
      navigation.navigate('Bogie List')
     };

     const postDataUsingSimplePostCall1 = () => {
   
      axios
        .post(' http://10.109.148.232:8000/api/ac2t', {
          BOGIE_TYPE_NO: value,
          SHIFT: value2,
          APPLICABLE_DRAWING_NO: value3,
          APPLICABLE_WI_NO: value4,
          FRAME_NO_MAKE: value5,
          WHEEL_AXLE_NO: value6,
          BRAKE_CYLINDER_NO_MAKE: value7,
          VSA_PRIMARY_SUSP_NO_MAKE: value8,
          VSA_SECONDARY_SUSP_NO_MAKE: value9,
          LATERAL_SHOCK_ABSORBER_NO_MAKE: value10,
          BOLSTER_NO_MAKE: value11,
          Z11_TARE: value12,
          Z11_GROSS: value13,
          Z31_TARE: value14,
          Z31_GROSS: value15,
          Z41_TARE: value16,
          Z41_GROSS: value17,
          Z21_TARE: value18,
          Z21_GROSS: value19,
          X_TARE: value20,
          X_GROSS: value21,
          Z12_PLUS_Z22_BY2_TARE: value22,
          Z12_PLUS_Z22_BY2_GROSS: value23,
          Z32_PLUS_Z42_BY2_TARE: value24,
          Z32_PLUS_Z42_BY2_GROSS: value25,
          Y_TARE: value26,
          Y_GROSS: value27,
          A_TARE: value28,
          B_TARE: value29,
          Z133_PLUS_Z23_BY2_TARE: value30,
          X_MINUS_1_TARE: value31,
          Y_MINUS_1_TARE: value32,
          X15_TARE: value33,
          X25_TARE: value34,
          Y14_TARE: value35,
          Y34_TARE: value36,

          Z11_TARE_REMARK: remarkValue12,
          Z11_GROSS_REMARK: remarkValue13,
          Z31_TARE_REMARK: remarkValue14,
          Z31_GROSS_REMARK: remarkValue15,
          Z41_TARE_REMARK: remarkValue16,
          Z41_GROSS_REMARK: remarkValue17,
          Z21_TARE_REMARK: remarkValue18,
          Z21_GROSS_REMARK: remarkValue19,
          X_TARE_REMARK: remarkValue20,
          X_GROSS_REMARK: remarkValue21,
          Z12_PLUS_Z22_BY2_TARE_REMARK: remarkValue22,
          Z12_PLUS_Z22_BY2_GROSS_REMARK: remarkValue23,
          Z32_PLUS_Z42_BY2_TARE_REMARK: remarkValue24,
          Z32_PLUS_Z42_BY2_GROSS_REMARK: remarkValue25,
          Y_TARE_REMARK: remarkValue26,
          Y_GROSS_REMARK: remarkValue27,
          A_TARE_REMARK: remarkValue28,
          B_TARE_REMARK: remarkValue29,
          Z133_PLUS_Z23_BY2_TARE_REMARK: remarkValue30,
          X_MINUS_1_TARE_REMARK: remarkValue31,
          Y_MINUS_1_TARE_REMARK: remarkValue32,
          X15_TARE_REMARK: remarkValue33,
          X25_TARE_REMARK: remarkValue34,
          Y14_TARE_REMARK: remarkValue35,
          Y34_TARE_REMARK: remarkValue36,
          TEST_PASSED: true,
          requestid: id,
        })

        .then(function (response) {
          // handle success
          //alert(JSON.stringify(response.data));
          alert('Form Submitted Successfully');
          //setPostId(response.data._id)

          navigation.navigate('Rites Qci');
        })
        .catch(function (error) {
          // handle error
          alert(error.message);
        });
    
  };


  const postDataUsingSimplePostCall2 = () => {
   
    axios
      .post(' http://10.109.148.232:8000/api/ac2t', {
        BOGIE_TYPE_NO: value,
        SHIFT: value2,
        APPLICABLE_DRAWING_NO: value3,
        APPLICABLE_WI_NO: value4,
        FRAME_NO_MAKE: value5,
        WHEEL_AXLE_NO: value6,
        BRAKE_CYLINDER_NO_MAKE: value7,
        VSA_PRIMARY_SUSP_NO_MAKE: value8,
        VSA_SECONDARY_SUSP_NO_MAKE: value9,
        LATERAL_SHOCK_ABSORBER_NO_MAKE: value10,
        BOLSTER_NO_MAKE: value11,
        Z11_TARE: value12,
        Z11_GROSS: value13,
        Z31_TARE: value14,
        Z31_GROSS: value15,
        Z41_TARE: value16,
        Z41_GROSS: value17,
        Z21_TARE: value18,
        Z21_GROSS: value19,
        X_TARE: value20,
        X_GROSS: value21,
        Z12_PLUS_Z22_BY2_TARE: value22,
        Z12_PLUS_Z22_BY2_GROSS: value23,
        Z32_PLUS_Z42_BY2_TARE: value24,
        Z32_PLUS_Z42_BY2_GROSS: value25,
        Y_TARE: value26,
        Y_GROSS: value27,
        A_TARE: value28,
        B_TARE: value29,
        Z133_PLUS_Z23_BY2_TARE: value30,
        X_MINUS_1_TARE: value31,
        Y_MINUS_1_TARE: value32,
        X15_TARE: value33,
        X25_TARE: value34,
        Y14_TARE: value35,
        Y34_TARE: value36,

        Z11_TARE_REMARK: remarkValue12,
        Z11_GROSS_REMARK: remarkValue13,
        Z31_TARE_REMARK: remarkValue14,
        Z31_GROSS_REMARK: remarkValue15,
        Z41_TARE_REMARK: remarkValue16,
        Z41_GROSS_REMARK: remarkValue17,
        Z21_TARE_REMARK: remarkValue18,
        Z21_GROSS_REMARK: remarkValue19,
        X_TARE_REMARK: remarkValue20,
        X_GROSS_REMARK: remarkValue21,
        Z12_PLUS_Z22_BY2_TARE_REMARK: remarkValue22,
        Z12_PLUS_Z22_BY2_GROSS_REMARK: remarkValue23,
        Z32_PLUS_Z42_BY2_TARE_REMARK: remarkValue24,
        Z32_PLUS_Z42_BY2_GROSS_REMARK: remarkValue25,
        Y_TARE_REMARK: remarkValue26,
        Y_GROSS_REMARK: remarkValue27,
        A_TARE_REMARK: remarkValue28,
        B_TARE_REMARK: remarkValue29,
        Z133_PLUS_Z23_BY2_TARE_REMARK: remarkValue30,
        X_MINUS_1_TARE_REMARK: remarkValue31,
        Y_MINUS_1_TARE_REMARK: remarkValue32,
        X15_TARE_REMARK: remarkValue33,
        X25_TARE_REMARK: remarkValue34,
        Y14_TARE_REMARK: remarkValue35,
        Y34_TARE_REMARK: remarkValue36,
        TEST_PASSED: false,
        requestid: id,
      })

      .then(function (response) {
        // handle success
        //alert(JSON.stringify(response.data));
        alert('Form Submitted Successfully');
        //setPostId(response.data._id)

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

//  useEffect(() => {
//    getAllProvider();
// }, [providers]);
// console.log("hii bahar hu")

const passhandle= ()=>{
  postDataUsingSimplePostCall1();
  // setTimeout(function() {
  //   getAllProvider();
  // }, 4000);
  getAllProvider();
};
const failhandle= ()=>{
  postDataUsingSimplePostCall2();
  
    getAllProvider();

};

  
    return (
      <SafeAreaView style = {styles.maincontainer}>
      <ScrollView style = {styles.maincontainer}>
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
                <Text style={styles.headerText}>Modern Coach Factory Raebareli</Text>
                <Text style={styles.headerText}>QUALITY CONTROL INSPECTION REPORT (QCI) </Text>
                
            </View>
          <View style={styles.boxstyleheader}>
            <Text style={styles.headertext}>
              SELF INSPECTION PROFORMA {'\n'}
              (FIAT BOGIE /EOG)
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
                <Text style={styles.text11}>ACCZ/ACCB/ACCW/ACFC</Text>
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
              <Text style={styles.text2}>MCF/RBL/QMF-5010</Text>
            </View>
            <View style={styles.boxstyle1}>
              <Text style={styles.text2}>VERSION</Text>
              <Text style={styles.text2}>03/2016</Text>
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
                <TextInput
                  style={{borderBottomWidth: 1}}
                  placeholder=" Applicable Drawing No"
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
                  value={value4}
                  onChangeText={setValue4}
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
                  value={value5}
                  onChangeText={setValue5}
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
                  value={value6}
                  onChangeText={setValue6}
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
                  value={value7}
                  onChangeText={setValue7}
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
                  value={value8}
                  onChangeText={setValue8}
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
                  value={value9}
                  onChangeText={setValue9}
                />
              </View>
              <View style={styles.boxstyle1}>
                <Text style={styles.text2}>
                  LATERAL SHOCK ABSORBER NO. & MAKE
                </Text>
                <TextInput
                  style={{borderBottomWidth: 1}}
                  placeholder="ABSORBER No."
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
                  value={value11}
                  onChangeText={setValue11}
                />
              </View>
            </View>
            <View style={styles.boxstyle3}>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '50%', height: 350, padding: 5}}>
                <View style={{flex: 3}}>
                  <Text style={styles.textBox}>
                    TESTING LOAD {'\n'}
                    IN TONNES
                  </Text>
                </View>
                <View style={{flex: 0.8}}>
                  <Text style={styles.textBox}>TARE 13.863</Text>
                </View>
                <View style={{flex: 0.8}}>
                  <Text style={styles.textBox}>GROSS 18.756</Text>
                </View>
              </View>
              <View style={{width: '50%', height: 350}}>
                <View style={{flex: 2}}>
                  <Text style={styles.textBox}>
                    RAIL LEVEL TO THE {'\n'}
                    CONTROL ARM BRACKET{'\n'}
                    462.5 +/-4 MM TARE {'\n'}
                    451.5 +/-4 MM GROSS{'\n'}
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
                      value={value19}
                      onChangeText={setValue19}
                    />
                  </View>
                </View>
              </View>
            
              </View>
              <View style={{marginHorizontal: 10}}>
                {!value12 ? (
                  <View></View>
                ) : value12 < 458.5 || value12 > 466.5 ? (
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
                      value={remarkValue12}
                      onChangeText={setremarkValue12}
                    />
                  </View>
                ) : (
                  <View></View>
                )}
                {!value16 ? (
                  <View></View>
                ) : value16 < 447.5 || value16 > 455.5 ? (
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
                      value={remarkValue16}
                      onChangeText={setremarkValue16}
                    />
                  </View>
                ) : (
                  <View></View>
                )}

                {!value13 ? (
                  <View></View>
                ) : value13 < 458.5 || value13 > 466.5 ? (
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
                      value={remarkValue13}
                      onChangeText={setremarkValue13}
                    />
                  </View>
                ) : (
                  <View>
                    <Text></Text>
                  </View>
                )}
                {!value17 ? (
                  <View>
                    <Text></Text>
                  </View>
                ) : value17 < 447.5  || value17 > 455.5 ? (
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
                      value={remarkValue17}
                      onChangeText={setremarkValue17}
                    />
                  </View>
                ) : (
                  <View>
                    <Text></Text>
                  </View>
                )}

                {!value14 ? (
                  <View></View>
                ) : value14 < 458.5 || value14 > 466.5 ? (
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
                      value={remarkValue14}
                      onChangeText={setremarkValue14}
                    />
                  </View>
                ) : (
                  <View></View>
                )}
                {!value18 ? (
                  <View></View>
                ) : value18 < 447.5  || value18 > 455.5 ? (
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
                      value={remarkValue18}
                      onChangeText={setremarkValue18}
                    />
                  </View>
                ) : (
                  <View></View>
                )}

                {!value15 ? (
                  <View></View>
                ) : value15 < 458.5 || value15 > 466.5 ? (
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
                      value={remarkValue15}
                      onChangeText={setremarkValue15}
                    />
                  </View>
                ) : (
                  <View>
                    <Text></Text>
                  </View>
                )}
                {!value19 ? (
                  <View></View>
                ) : value19 < 447.5  || value19 > 455.5 ? (
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
                      value={remarkValue19}
                      onChangeText={setremarkValue19}
                    />
                  </View>
                ) : (
                  <View></View>
                )}
              </View>

            </View>
            <View style={styles.boxstyle3}>
              <View style={{flexDirection:"row"}}>
              <View style={{width: '50%', height: 350, padding: 5}}>
                <View style={{flex: 3}}>
                  <Text style={styles.textBox}>
                    TESTING LOAD {'\n'}
                    IN TONNES
                  </Text>
                </View>
                <View style={{flex: 0.8}}>
                  <Text style={styles.textBox}>TARE 13.863</Text>
                </View>
                <View style={{flex: 0.8}}>
                  <Text style={styles.textBox}>GROSS 18.756</Text>
                </View>
              </View>
              <View style={{width: '50%', height: 350}}>
                <View style={{flex: 2}}>
                  <Text style={styles.textBox}>
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
                    value={value20}
                    onChangeText={setValue20}
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
                    value={value21}
                    onChangeText={setValue21}
                  />
                </View>
              </View></View>

              <View style={{marginHorizontal: 10}}>
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
                      value={remarkValue20}
                      onChangeText={setremarkValue20}
                    />
                  </View>
                ) : null}

                {value21 > 3 ? (
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
                      value={remarkValue21}
                      onChangeText={setremarkValue21}
                    />
                  </View>
                ) : null}
              </View>
            </View>
            <View style={styles.boxstyle3}>
              <View style={{flexDirection:"row"}}>
              <View style={{width: '50%', height: 350, padding: 5}}>
                <View style={{flex: 3}}>
                  <Text style={styles.textBox}>
                    TESTING LOAD {'\n'}
                    IN TONNES
                  </Text>
                </View>
                <View style={{flex: 0.8}}>
                  <Text style={styles.textBox}>TARE 13.863</Text>
                </View>
                <View style={{flex: 0.8}}>
                  <Text style={styles.textBox}>GROSS 18.756</Text>
                </View>
              </View>
              <View style={{width: '50%', height: 350}}>
                <View style={{flex: 2}}>
                  <Text style={styles.textBox}>
                    AVERAGE HEIGHT FROM {'\n'}
                    RAIL LEVEL TO MACHINING PORTION OF BOLSTER {'\n'}
                    930 +6/-2 MM TARE {'\n'}
                    870 +6/-2 MM GROSS {'\n'}
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
                      value={value22}
                      onChangeText={setValue22}
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
                      value={value23}
                      onChangeText={setValue23}
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
                      value={value24}
                      onChangeText={setValue24}
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
                      value={value25}
                      onChangeText={setValue25}
                    />
                  </View>
                </View>
              </View></View>

              <View style={{marginHorizontal: 10}}>
                {!value22 ? (
                  <View></View>
                ) : value22 < 928 || value22 > 936 ? (
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
                      value={remarkValue22}
                      onChangeText={setremarkValue22}
                    />
                  </View>
                ) : (
                  <View></View>
                )}
                {!value23 ? (
                  <View></View>
                ) : value23 < 928 || value23 > 936 ? (
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
                      value={remarkValue23}
                      onChangeText={setremarkValue23}
                    />
                  </View>
                ) : (
                  <View></View>
                )}

                {!value24 ? (
                  <View></View>
                ) : value24 < 868 || value24 > 876 ? (
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
                      value={remarkValue24}
                      onChangeText={setremarkValue24}
                    />
                  </View>
                ) : (
                  <View>
                    <Text></Text>
                  </View>
                )}
                {!value25 ? (
                  <View>
                    <Text></Text>
                  </View>
                ) : value25 < 868 || value25 > 876 ? (
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
                      value={remarkValue25}
                      onChangeText={setremarkValue25}
                    />
                  </View>
                ) : (
                  <View>
                    <Text></Text>
                  </View>
                )}
              </View>
            </View>
            <View style={styles.boxstyle3}>
              <View style={{flexDirection:"row"}}>
              <View style={{width: '50%', height: 350, padding: 5}}>
                <View style={{flex: 3}}>
                  <Text style={styles.textBox}>
                    TESTING LOAD {'\n'}
                    IN TONNES
                  </Text>
                </View>
                <View style={{flex: 0.8}}>
                  <Text style={styles.textBox}>TARE 13.863</Text>
                </View>
                <View style={{flex: 0.8}}>
                  <Text style={styles.textBox}>GROSS 18.756</Text>
                </View>
              </View>
              <View style={{width: '50%', height: 350}}>
                <View style={{flex: 2}}>
                  <Text style={styles.textBox}>
                    DIFFERENCE IN AVERAGE READING {'\n'}
                    OF TWO BOLSTER {'\n'}= OR {'<'} 4 MM {'\n'}
                  </Text>
                </View>

                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <Text style={styles.textBox}>Y</Text>
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
                    value={value26}
                    onChangeText={setValue26}
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
                    value={value27}
                    onChangeText={setValue27}
                  />
                </View>
              </View></View>
              <View style={{marginHorizontal: 10}}>
                {value26 > 4 ? (
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
                      Y Remark TARE
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
                ) : null}

                {value27 > 4 ? (
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
                      Y Remark GROSS
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
                      value={remarkValue27}
                      onChangeText={setremarkValue27}
                    />
                  </View>
                ) : null}
              </View>


            </View>
            <View style={styles.boxstyle3}>
              <View style={{flexDirection:"row"}}>
              <View style={{width: '50%', height: 350, padding: 5}}>
                <View style={{flex: 3}}>
                  <Text style={styles.textBox}>
                    TESTING LOAD {'\n'}
                    IN TONNES
                  </Text>
                </View>
                <View style={{flex:1.3}}>
                  <Text style={styles.textBox}>TARE 13.863</Text>
                </View>
                <View style={{flex:1.3}}>
                  <Text style={styles.textBox}>GROSS 18.756</Text>
                </View>
              </View>
              <View style={{width: '50%', height: 350}}>
                <View style={{flex: 3}}>
                  <Text style={styles.textBox}>
                    *VERTICAL STOP DISTANCE {'\n'}
                    95 +0/-5 MM TARE {'\n'}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 2,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <View>
                    <Text style={styles.textBox}>A</Text>
                  </View>
                  <View>
                    <Text style={styles.textBox}>B</Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 2,
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
                      value={value28}
                      onChangeText={setValue28}
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
                      value={value29}
                      onChangeText={setValue29}
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
                      value={value30}
                      onChangeText={setValue30}                    />
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
                      value={value31}
                      onChangeText={setValue31}                    />
                  </View>
                </View>
                <View>
                  <Text style={[styles.textBox,{marginTop:5}]}>
                    *Dimensions to be maintained by Coach Lowering.
                  </Text>
                </View>
              </View></View>

              <View style={{marginHorizontal: 10}}>
                {!value28 ? (
                  <View></View>
                ) : value28 < 90 || value28 > 95 ? (
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
                      Remark A TARE
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
                      value={remarkValue28}
                      onChangeText={setremarkValue28}
                    />
                  </View>
                ) : (
                  <View></View>
                )}
                {!value29 ? (
                  <View></View>
                ) : value29 < 90 || value29 > 95 ? (
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
                      REMARK B TARE
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

                
              </View>

            




            </View>
            <View style={styles.boxstyleheader1}></View>

            <View style={styles.boxstyle3}>
              <View style={{flexDirection:"row"}}>
              <View style={{width: '50%', height: 350, padding: 5}}>
                <View style={{flex: 3}}>
                  <Text style={styles.textBox}>
                    TESTING LOAD {'\n'}
                    IN TONNES
                  </Text>
                </View>
                <View style={{flex: 0.8}}>
                  <Text style={styles.textBox}>TARE 13.863</Text>
                </View>
                <View style={{flex: 0.8}}>
                  <Text style={styles.textBox}>GROSS 18.756</Text>
                </View>
              </View>
              <View style={{width: '50%', height: 350}}>
                <View style={{flex: 2}}>
                  <Text style={styles.textBox}>
                    AVERAGE HEIGHT FROM TOP PLATE OF SIDE FRAME TO UPPER FACE OF
                    SPRING SEAT 46 +/- 3 MM TARE
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text style={styles.textBox}>(Z13+Z23)/2</Text>
                  </View>
                  <View>
                    <Text style={styles.textBox}>(Z33+Z43)/2</Text>
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
                      value={value32}
                      onChangeText={setValue32}
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
                      value={value33}
                      onChangeText={setValue33}
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
                      value={value34}
                      onChangeText={setValue34}
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
                      value={value35}
                      onChangeText={setValue35}                    />
                  </View>
                </View>
              </View></View>
              <View style={{marginHorizontal: 10}}>
                {!value32 ? (
                  <View></View>
                ) : value32 < 43 || value32 > 49 ? (
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
                      Remark TARE 1
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
                      value={remarkValue32}
                      onChangeText={setremarkValue32}
                    />
                  </View>
                ) : (
                  <View></View>
                )}
                {!value33 ? (
                  <View></View>
                ) : value33 < 43 || value33 > 49 ? (
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
                      REMARK TARE 2
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

                
              </View>




            </View>
            <View style={styles.boxstyle3}>
              <View style={{flexDirection:"row"}}>
              <View style={{width: '50%', height: 350, padding: 5}}>
                <View style={{flex: 3}}>
                  <Text style={styles.textBox}>
                    TESTING LOAD {'\n'}
                    IN TONNES
                  </Text>
                </View>
                <View style={{flex: 0.8}}>
                  <Text style={styles.textBox}>TARE 13.863</Text>
                </View>
                <View style={{flex: 0.8}}>
                  <Text style={styles.textBox}>GROSS 18.756</Text>
                </View>
              </View>
              <View style={{width: '50%', height: 350}}>
                <View style={{flex: 2}}>
                  <Text style={styles.textBox}>
                    DIFFERENCE IN A1 & A2{'\n'}= OR{'<'} 6 MM{'\n'}
                  </Text>
                </View>

                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <Text style={styles.textBox}>X-1</Text>
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
                    value={value36}
                    onChangeText={setValue36}
                  />
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <TextInput
                    style={{margin: 2, height: 40, width: '100%'}}
                    placeholder="-"
                    placeholderTextColor="black"
                    autoCorrect={false}
                    backgroundColor="white"
                    keyboardType="number-pad"
                    underlineColor="white"
                    activeUnderlineColor="black"
                    value={value37}
                    onChangeText={setValue37}                  />
                </View>
              </View></View>

              <View style={{marginHorizontal: 10}}>
                {value36 > 6 ? (
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
                      X-1 Remark TARE
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
                      value={remarkValue36}
                      onChangeText={setremarkValue36}
                    />
                  </View>
                ) : null}

             
              </View>




            </View>
            <View style={styles.boxstyle3}>
              <View style={{flexDirection:"row"}}>
              <View style={{width: '50%', height: 350, padding: 5}}>
                <View style={{flex: 3}}>
                  <Text style={styles.textBox}>
                    TESTING LOAD {'\n'}
                    IN TONNES
                  </Text>
                </View>
                <View style={{flex: 0.8}}>
                  <Text style={styles.textBox}>TARE 13.863</Text>
                </View>
                <View style={{flex: 0.8}}>
                  <Text style={styles.textBox}>GROSS 18.756</Text>
                </View>
              </View>
              <View style={{width: '50%', height: 350}}>
                <View style={{flex: 2}}>
                  <Text style={styles.textBox}>
                    DIFFERENCE IN B1 & B2{'\n'}= OR{'<'} 6 MM{'\n'}
                  </Text>
                </View>

                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <Text style={styles.textBox}>Y-1</Text>
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
                    value={value38}
                    onChangeText={setValue38}
                  />
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <TextInput
                    style={{margin: 2, height: 40, width: '100%'}}
                    placeholder="-"
                    placeholderTextColor="black"
                    autoCorrect={false}
                    backgroundColor="white"
                    keyboardType="number-pad"
                    underlineColor="white"
                    activeUnderlineColor="black"
                    value={value39}
                    onChangeText={setValue39}
                  />
                </View>
              </View></View>
              <View style={{marginHorizontal: 10}}>
                {value38 > 6 ? (
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
                      Y-1 Remark TARE
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
                      value={remarkValue38}
                      onChangeText={setremarkValue38}
                    />
                  </View>
                ) : null}

             
              </View>




            </View>

            <View style={styles.boxstyle3}>
              <View style={{flexDirection:"row"}}>
              <View style={{width: '50%', height: 350, padding: 5}}>
                <View style={{flex: 3}}>
                  <Text style={styles.textBox}>
                    TESTING LOAD {'\n'}
                    IN TONNES
                  </Text>
                </View>
                <View style={{flex: 0.8}}>
                  <Text style={styles.textBox}>TARE 13.863</Text>
                </View>
                <View style={{flex: 0.8}}>
                  <Text style={styles.textBox}>GROSS 18.756</Text>
                </View>
              </View>
              <View style={{width: '50%', height: 350}}>
                <View style={{flex: 2}}>
                  <Text style={styles.textBox}>
                    LONGITUDINAL CLEARANCE BETWEEN {'\n'}
                    CROSS SECTION & BUMP STOP {'\n'}
                    08 +5/-2 TARE {'\n'}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <View>
                    <Text style={styles.textBox}>X15</Text>
                  </View>
                  <View>
                    <Text style={styles.textBox}>X25</Text>
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
                      value={value40}
                      onChangeText={setValue40}
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
                      value={value41}
                      onChangeText={setValue41}
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
                      value={value42}
                    onChangeText={setValue42}
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
                      value={value43}
                    onChangeText={setValue43}
                    />
                  </View>
                </View>
              </View></View>

              <View style={{marginHorizontal: 10}}>
                {!value40 ? (
                  <View></View>
                ) : value40 < 6 || value40 > 13 ? (
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
                      Remark X15 TARE 
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
                      value={remarkValue40}
                      onChangeText={setremarkValue40}
                    />
                  </View>
                ) : (
                  <View></View>
                )}
                {!value41 ? (
                  <View></View>
                ) : value41 < 6 || value41 > 13 ? (
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
                      REMARK X25 TARE 
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
                      value={remarkValue41}
                      onChangeText={setremarkValue41}
                    />
                  </View>
                ) : (
                  <View></View>
                )}

                
              </View>





            </View>

            <View style={styles.boxstyle3}>
             <View style={{flexDirection:"row"}}> 
              <View style={{width: '50%', height: 350, padding: 5}}>
                <View style={{flex: 3}}>
                  <Text style={styles.textBox}>
                    TESTING LOAD {'\n'}
                    IN TONNES
                  </Text>
                </View>
                <View style={{flex: 0.8}}>
                  <Text style={styles.textBox}>TARE 13.863</Text>
                </View>
                <View style={{flex: 0.8}}>
                  <Text style={styles.textBox}>GROSS 18.756</Text>
                </View>
              </View>
              <View style={{width: '50%', height: 350}}>
                <View style={{flex: 2}}>
                  <Text style={styles.textBox}>
                    LATERAL CLEARANCE BETWEEN {'\n'}
                    BOGIE ROTATION STOP & BUMP STOP {'\n'}
                    25 +/- 5 TARE {'\n'}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <View>
                    <Text style={styles.textBox}>Y14</Text>
                  </View>
                  <View>
                    <Text style={styles.textBox}>Y34</Text>
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
                      value={value44}
                      onChangeText={setValue44}
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
                      value={value45}
                      onChangeText={setValue45}
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
                      value={value46}
                    onChangeText={setValue46}
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
                      value={value47}
                    onChangeText={setValue47}
                    />
                  </View>
                </View>
              </View>
            </View>
            
            <View style={{marginHorizontal: 10}}>
                {!value44 ? (
                  <View></View>
                ) : value44 < 20 || value44 > 30 ? (
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
                      Remark Y14 TARE 
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
                      value={remarkValue44}
                      onChangeText={setremarkValue44}
                    />
                  </View>
                ) : (
                  <View></View>
                )}
                {!value45 ? (
                  <View></View>
                ) : value45 < 20 || value45 > 30 ? (
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
                      REMARK Y34 TARE 
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
                      value={remarkValue45}
                      onChangeText={setremarkValue45}
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
  
  export default Accw;
  
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
    maincontainer:{
       backgroundColor:"white"
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
      flexWrap:"wrap",
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
      flexDirection:"row"
    },
  
    imageTag:{
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"white"
  },
  headerTag:{
      justifyContent:'center',
      alignItems:'center',
      marginVertical:10,
      backgroundColor:"white"
  },
  headerText:{
     color:'black',
     fontSize:20
  },
  });
  