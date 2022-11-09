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
  
  const QMF2011_LSCZ_C = ({navigation}) => {
    const [checkedk35, setCheckedk35] = useState('');
    const [checkedk36, setCheckedk36] = useState('');
    const [checkedk37, setCheckedk37] = useState('');
    const [checkedk38, setCheckedk38] = useState('');
    const [checkedk39, setCheckedk39] = useState('');
    const [checkedk40, setCheckedk40] = useState('');
    const [checkedk41, setCheckedk41] = useState('');
    const [checkedk42, setCheckedk42] = useState('');
    
  
    
    const [observedvaluek24, setobservedvaluek24] = useState('');
    const [observedvaluek25, setobservedvaluek25] = useState('');
    
  
    
    const [remarkk56, setremarkk56] = useState('');
    const [remarkk57, setremarkk57] = useState('');
    const [remarkk58, setremarkk58] = useState('');
    const [remarkk59, setremarkk59] = useState('');
    const [remarkk60, setremarkk60] = useState('');
    const [remarkk61, setremarkk61] = useState('');
    const [remarkk62, setremarkk62] = useState('');
    const [remarkk63, setremarkk63] = useState('');
   
  const Submit=()=>{

navigation.navigate('QMF List')

  }
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
            <View style={styles.MainFormTag}>
              <Text style={styles.MainFormTagText}>C-ENDWALL:</Text>
            </View>
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
                      status={checkedk35 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk35('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk35 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk35('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk56 => {
                      setremarkk56(remarkk56);
                      console.log(remarkk56)
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
                      status={checkedk36 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk36('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk36 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk36('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk57 => {
                      setremarkk57(remarkk57);
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
                      status={checkedk37 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk37('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk37 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk37('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk58 => {
                      setremarkk58(remarkk58);
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
                      status={checkedk38 === 'OBSERVED' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk38('OBSERVED')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OBSERVED</Text>
                    <RadioButton
                      value="NOT OBSERVED"
                      status={checkedk38 === 'NOT OBSERVED' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk38('NOT OBSERVED')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk38 => {
                      setremarkk58(remarkk38);
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
                      status={checkedk39 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk39('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk39 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk39('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk59 => {
                      setremarkk59(remarkk59);
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
                      status={checkedk40 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk40('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="third"
                      status={checkedk40 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk40('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk60 => {
                      setremarkk60(remarkk60);
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
                    onChangeText={observedvaluek24 => {
                      setobservedvaluek24(observedvaluek24);
                    }}/>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk61 => {
                      setremarkk61(remarkk61);
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
                      status={checkedk41 === 'PROVIDED' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk41('PROVIDED')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                    <RadioButton
                      value="NOT PROVIDED"
                      status={checkedk41 === 'NOT PROVIDED' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk41('NOT PROVIDED')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk61 => {
                      setremarkk61(remarkk61);
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
                      status={checkedk42 === 'OBSERVED' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk42('OBSERVED')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Observed</Text>
                    <RadioButton
                      value="NOT OBSERVED"
                      status={checkedk42 === 'NOT OBSERVED' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk42('NOT OBSERVED')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk62=> {
                      setremarkk62(remarkk62);
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
                    onChangeText={observedvaluek25 => {
                      setobservedvaluek25(observedvaluek25);
                    }}/>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk63=> {
                      setremarkk63(remarkk63);
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
  
  export default QMF2011_LSCZ_C;
  
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
      fontWeight : 'bold',
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
      
      fontSize : 17
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
      paddingVertical : 20,
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
      alignItems:'center',
      paddingHorizontal: 20,
      marginTop: 20,
    },
  
    FirstEntObserveText1: {
      fontSize: 20,
     marginBottom:5,
      color: 'black',
    },
  
    FirstEntRemark: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems:'center',
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
      alignItems:'center',
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
      alignItems:'center',
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
  
    submitButton: {
      justifyContent: 'center',
      alignItems: 'center',
    },
   
  });
  