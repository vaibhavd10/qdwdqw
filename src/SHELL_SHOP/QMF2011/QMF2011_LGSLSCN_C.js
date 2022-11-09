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
  
  import {RadioButton} from 'react-native-paper';
  
  const QMF2011_LGLSCN_C = ({navigation}) => {
    

    const [checkedk114, setCheckedk114] = useState('');
    const [checkedk115, setCheckedk115] = useState('');
    const [checkedk116, setCheckedk116] = useState('');
    const [checkedk117, setCheckedk117] = useState('');
    const [checkedk118, setCheckedk118] = useState('');
    const [checkedk119, setCheckedk119] = useState('');
    const [checkedk120, setCheckedk120] = useState('');
    const [checkedk121, setCheckedk121] = useState('');
   
  
    
    const [observedvaluek67, setobservedvaluek67] = useState('');
    const [observedvaluek68, setobservedvaluek68] = useState('');
   
    
  
    
    const [remarkk173, setremarkk173] = useState('');
    const [remarkk174, setremarkk174] = useState('');
    const [remarkk175, setremarkk175] = useState('');
    const [remarkk176, setremarkk176] = useState('');
    const [remarkk177, setremarkk177] = useState('');
    const [remarkk178, setremarkk178] = useState('');
    const [remarkk179, setremarkk179] = useState('');
    const [remarkk180, setremarkk180] = useState('');
   


    const Submit=()=>{

      navigation.navigate('QMF List')}
  
    return (
      <ScrollView>
        <View style={styles.Maincontainer}>
        <View style={styles.header}>
            {/* -------------------Header Image  Part Start----------------- */}
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
            {/* -------------------Header Image  Part End----------------- */}

            {/* -------------------Header Tag  Part Start----------------- */}
            <View style={styles.headerTag}>
            <Text style={styles.headerText}>Modern Coach Factory Raebareli</Text>
            <Text style={styles.headerText}>FINAL INSPECTION REPORT </Text>
            </View>
            {/* -------------------Header Tag  Part Start----------------- */}

            {/* -------------------Header Input  Part Start----------------- */}
            <View style={styles.headerInput}>
                <View style={styles.headerInputRow}>
                    <View style={styles.headerInputRowItem}>
                        <Text style={styles.headerInputRowText}>Doc No:</Text>
                        <TextInput style={styles.headerInputRowInput} />
                    </View>
                    <View style={styles.headerInputRowItem}>
                        <Text style={styles.headerInputRowText}>Rev No:</Text>
                        <TextInput style={styles.headerInputRowInput} />
                    </View>
                    <View style={styles.headerInputRowItem}>
                        <Text style={styles.headerInputRowText}>Date:</Text>
                        <TextInput style={styles.headerInputRowInput} />
                    </View>
                </View>

                <View style={styles.headerInputRow}>
                    <View style={styles.headerInputRowItem}>
                        <Text style={styles.headerInputRowText}>Shell Type:</Text>
                        <TextInput style={styles.headerInputRowInput} />
                    </View>

                    <View style={styles.headerInputRowItem}>
                        <Text style={styles.headerInputRowText}>Shell No:</Text>
                        <TextInput style={styles.headerInputRowInput} />
                    </View>
                    <View style={styles.headerInputRowItem}>
                        <Text style={styles.headerInputRowText}>Shift:</Text>
                        <TextInput style={styles.headerInputRowInput} />
                    </View>
                    <View style={styles.headerInputRowItem}>
                        <Text style={styles.headerInputRowText}>Date:</Text>
                        <TextInput style={styles.headerInputRowInput} />
                    </View>
                </View>
            </View>
            {/* -------------------Header Input  Part End----------------- */}
        </View>
          <View style={styles.MainForm}>
        
            {/* Form Title Start*/}
          
            {/* Form Title End*/}
  
            {/* Form Entery Section Start */}
  
            <View style={styles.MainFormEntry}>
              {/* Form Entry First Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  1. Leveling of both side end wall vestibule plate
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>OK</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk114 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk114('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk114 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk114('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk173 => {
                      setremarkk173(remarkk173);
                      console.log(remarkk173)
                    }}/>
                </View>
              </View>
              {/* Form Entry Third Section End */}
  
              {/* Form Entry Fourth Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  2. EFT cover & lock
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>OK</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk115 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk115('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk115 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk115('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk174 => {
                      setremarkk174(remarkk174);
                    }}/>
                </View>
              </View>
              {/* Form Entry Fourth Section End */}
  
              {/* Form Entry Five Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  3.Condition of tail lamp BKT.
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>OK</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk116 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk116('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk116=== 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk116('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk175 => {
                      setremarkk175(remarkk175);
                    }}/>
                </View>
              </View>
              {/* Form Entry Five Section End */}
  
              {/* Form Entry Six Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  4. Dents in end wall
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>OBSERVED</Text>
                    <RadioButton
                      value="OBSERVED"
                      status={checkedk117 === 'OBSERVED' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk117('OBSERVED')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OBSERVED</Text>
                    <RadioButton
                      value="NOT OBSERVED"
                      status={checkedk117 === 'NOT OBSERVED' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk117('NOT OBSERVED')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk175 => {
                      setremarkk175(remarkk175);
                    }}/>
                    
                  
                </View>
              </View>
              {/* Form Entry Six Section End */}
  
              {/* Form Entry Seven Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  5. Welding &grinding of End wall joint
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>OK</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk118 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk118('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk118 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk118('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk176 => {
                      setremarkk176(remarkk176);
                    }}/>
                </View>
              </View>
              {/* Form Entry Seven Section End */}
  
              {/* Form Entry Eight Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  6. End wall back pieces for sliding door </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>OK</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk119 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk119('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="third"
                      status={checkedk119 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk119('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk177 => {
                      setremarkk177(remarkk177);
                    }}/>
                </View>
              </View>
              {/* Form Entry Eight Section End */}
  
              {/* Form Entry Nine Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  7. End wall RMPU reject hole
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={observedvaluek67 => {
                      setobservedvaluek67(observedvaluek67);
                    }}/>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk177 => {
                      setremarkk177(remarkk177);
                    }}/>
                </View>
              </View>
              {/* Form Entry Nine Section End */}
  
              {/* Form Entry Ten Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  8.End wall exhaust cutting (in AC shell)
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk120 === 'PROVIDED' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk120('PROVIDED')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                    <RadioButton
                      value="NOT PROVIDED"
                      status={checkedk120 === 'NOT PROVIDED' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk120('NOT PROVIDED')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk178 => {
                      setremarkk178(remarkk178);
                    }}/>
                </View>
              </View>
              {/* Form Entry Ten Section End */}
  
              {/* Form Entry Eleven Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  9. End wall unwanted hole
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>Observed</Text>
                    <RadioButton
                      value="OBSERVED"
                      status={checkedk121=== 'OBSERVED' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk121('OBSERVED')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Observed</Text>
                    <RadioButton
                      value="NOT OBSERVED"
                      status={checkedk121 === 'NOT OBSERVED' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk121('NOT OBSERVED')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk179=> {
                      setremarkk179(remarkk179);
                    }}/>
                </View>
              </View>
              {/* Form Entry Eleven Section End */}
  
              {/* Form Entry Twelve Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  10. Distance between U channel 
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={observedvaluek68 => {
                      setobservedvaluek68(observedvaluek68);
                    }}/>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk180=> {
                      setremarkk180(remarkk180);
                    }}/>
                </View>
                
                
              </View>
              
              {/* Form Entry Twelve Section End */}
  
              {/* Form Entry Thirteen Section Start */}
          
              
              {/* Form Entry Twenty Two Section End */}
            </View>
            <View style={styles.submitButton}>
            <TouchableOpacity style={styles.forBomx} onPress={Submit}>
              <Text style={styles.forBomxText}>Submit</Text>
            </TouchableOpacity>
          </View>
            {/* Form Entery Section 1St End */}
          </View>
        </View>
      </ScrollView>
    );
  };
  
  export default QMF2011_LGLSCN_C;
  
  const styles = StyleSheet.create({
    Maincontainer: {
      flex: 1,
      marginTop: 5,
      marginBottom: 10,
    },
    MainHeadingContainer: {
      flex: 3,
      flexDirection: 'row',
      backgroundColor: '#fff',
      marginTop: 10,
      borderWidth: 1,
      borderStyle: 'solid',
    },
    header: {
      margin: 10,
    },
    imageTag: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerTag: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
    },
    headerText: {
      color: 'black',
      fontSize: 25,
      fontWeight: 'bold',
    },
  
    headerInput: {
      marginTop: 10,
      paddingTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderWidth: 1,
      paddingBottom: 10,
      backgroundColor: '#CCFFFF',
    },
  
    headerInputRow: {
      width: '50%',
    },
    headerInputRowItem: {
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 5,
    },
    headerInputRowText: {
      flex: 1,
      color: 'black',
  
      fontSize: 17,
    },
    headerInputRowInput: {
      flex: 2,
      backgroundColor: 'white',
      margin: 2,
      borderRadius: 3,
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
    },
    viewText2: {
      flexDirection: 'column',
      marginLeft: 10,
    },
    MainContainers: {
      backgroundColor: '#FFFFFF',
      margin: 5,
    },
  
    MainForm: {
      marginTop: 0,
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
      // marginVertical : 40,
      marginBottom: 10,
      borderStyle: 'solid',
    },
  
    MainFormFirstEntery: {
      padding: 8,
      marginBottom: 10,
      borderWidth: 1,
      borderStyle: 'solid',
      marginHorizontal: 10,
      marginVertical: 15,
      paddingVertical: 20,
      backgroundColor: '#CCFFFF',
    },
  
    FirstEntText: {
      textAlign: 'center',
      fontSize: 20,
  
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
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginTop: 20,
    },
  
    FirstEntObserveText1: {
      fontSize: 20,
      marginBottom: 5,
      color: 'black',
    },
  
    FirstEntRemark: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginTop: 10,
    },
  
    FirstEntRemarkText1: {
      fontSize: 20,
  
      color: 'black',
    },
  
    FirstEntRemarkInput: {
      height: 40,
      width: 220,
  
      marginBottom: 5,
      backgroundColor: 'white',
      borderWidth: 1,
    },
  
    EntryObserveRadio: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 5,
    },
  
    FirstEntObserveRadio: {
      fontSize: 20,
  
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
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
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
  
      color: 'black',
    },
  
    SubObserveRemark: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginTop: 10,
    },
  
    SubObserveRemarkText: {
      fontSize: 20,
  
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
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 10,
    },
  
    ShellText: {
      color: 'black',
      fontSize: 15,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 15,
      marginLeft: 10,
    },
  
    forBomx: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
      borderWidth: 1,
      width: '35%',
      height: 50,
      borderRadius: 5,
      backgroundColor: 'black',
    },
    forBomxText: {
      color: 'white',
      fontSize: 25,
      fontWeight: '400',
    },
  
    flexcorrect: {
      flexDirection: 'row',
    },
  
    submitButton: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  