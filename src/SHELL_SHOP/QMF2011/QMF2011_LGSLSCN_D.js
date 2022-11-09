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
  
  const QMF2011_LGLSCN_D = ({navigation}) => {
   
    
  
    const [checkedk122, setCheckedk122] = useState('');
    const [checkedk123, setCheckedk123] = useState('');
    const [checkedk124, setCheckedk124] = useState('');
    const [checkedk125, setCheckedk125] = useState('');
    const [checkedk126, setCheckedk126] = useState('');
    const [checkedk127, setCheckedk127] = useState('');
    const [checkedk128, setCheckedk128] = useState('');
    const [checkedk129, setCheckedk129] = useState('');
    const [checkedk130, setCheckedk130] = useState('');
   
    const [observedvaluek69, setobservedvaluek69] = useState('');
    const [observedvaluek70, setobservedvaluek70] = useState('');
    
   
   
    const [remarkk181, setremarkk181] = useState('');
    const [remarkk182, setremarkk182] = useState('');
    const [remarkk183, setremarkk183] = useState('');
    const [remarkk184, setremarkk184] = useState('');
    const [remarkk185, setremarkk185] = useState('');
    const [remarkk186, setremarkk186] = useState('');
    const [remarkk187, setremarkk187] = useState('');
    const [remarkk188, setremarkk188] = useState('');
    const [remarkk189, setremarkk189] = useState('');
    const [remarkk190, setremarkk190] = useState('');
    const [remarkk191, setremarkk191] = useState('');
  
  
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
                <Text style={styles.FirstEntText}>1 Roof unwanted holes.</Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>Observed</Text>
                    <RadioButton
                      value="OBSERVED"
                      status={checkedk122 === 'OBSERVED' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk122('OBSERVED')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Observed</Text>
                    <RadioButton
                      value="NOT OBSERVED"
                      status={
                        checkedk122=== 'NOT OBSERVED' ? 'checked' : 'unchecked'
                      }
                      onPress={() => setCheckedk122('NOT OBSERVED')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk181 => {
                      setremarkk181(remarkk181);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Third Section End */}
  
              {/* Form Entry Fourth Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  2. Spot welding between arch and roof sheet ***
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>Done</Text>
                    <RadioButton
                      value="DONE"
                      status={checkedk123 === 'DONE' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk123('DONE')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                    <RadioButton
                      value="NOT DONE"
                      status={checkedk123 === 'NOT DONE' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk123('NOT DONE')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk182 => {
                      setremarkk182(remarkk182);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Fourth Section End */}
  
              {/* Form Entry Five Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>3.Condition of roof arch</Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>Ok</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk124 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk124('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Ok</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk124 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk124('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk183=> {
                      setremarkk183(remarkk183);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Five Section End */}
  
              {/* Form Entry Six Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  4. Welding of cross brace joint ( L3T/2T) ***
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>Ok</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk125 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk125('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Ok</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk125 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk125('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk184=> {
                      setremarkk184(remarkk184);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Six Section End */}
  
              {/* Form Entry Seven Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  5. Cross brace height(roof center to top )
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>Ok</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk126=== 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk126('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Ok</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk126=== 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk126('NOT OK')}
                    />
                  
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk185 => {
                      setremarkk185(remarkk185);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Seven Section End */}
  
              {/* Form Entry Eight Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  6. Final roof end condition{' '}
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>OK</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk127 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk127('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="third"
                      status={checkedk127 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk127('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk186 => {
                      setremarkk186(remarkk186);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Eight Section End */}
  
              {/* Form Entry Nine Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  7. Fan bkt,FL bkt,Emergance light bkt, and wire clamping
                  bkt(LSCN,LGS,LDSLR)
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk128 === 'PROVIDED' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk128('PROVIDED')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                    <RadioButton
                      value="NOT PROVIDED"
                      status={
                        checkedk128 === 'NOT PROVIDED' ? 'checked' : 'unchecked'
                      }
                      onPress={() => setCheckedk128('NOT PROVIDED')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk187 => {
                      setremarkk187(remarkk187);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Nine Section End */}
  
              {/* Form Entry Ten Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  8.Berth suspension bkt condition
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk129=== 'PROVIDED' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk129('PROVIDED')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                    <RadioButton
                      value="NOT PROVIDED"
                      status={
                        checkedk129 === 'NOT PROVIDED' ? 'checked' : 'unchecked'
                      }
                      onPress={() => setCheckedk129('NOT PROVIDED')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                     onChangeText={remarkk188 => {
                      setremarkk188(remarkk188);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Ten Section End */}
  
              {/* Form Entry Eleven Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  9. Cross brace supporting bracket distance(L3T,L2T)
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <TextInput
                    style={styles. FirstEntRemarkInput}
                    onChangeText={observedvaluek69 => {
                      setobservedvaluek69(observedvaluek69);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk189 => {
                      setremarkk189(remarkk189);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Eleven Section End */}
  
              {/* Form Entry Twelve Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  10. Final roof bracket location from roof top to bottom bracket{' '}
                  {'\n'}& BKT to BKT distance from center line of roof in (L3T)
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <TextInput
                    style={styles. FirstEntRemarkInput}
                    onChangeText={observedvaluek70 => {
                      setobservedvaluek70(observedvaluek70);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk190=> {
                      setremarkk190(remarkk190);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Twelve Section End */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  11. Ventilator grill arrangement joint welding
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                    <RadioButton
                      value="PROVIDED"
                      status={checkedk130 === 'PROVIDED' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk130('PROVIDED')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                    <RadioButton
                      value="NOT PROVIDED"
                      status={
                        checkedk130 === 'NOT PROVIDED' ? 'checked' : 'unchecked'
                      }
                      onPress={() => setCheckedk130('NOT PROVIDED')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk191 => {
                      setremarkk191(remarkk191);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Thirteen Section Start */}
           
            </View>
  
            {/* Form Entery Section 1St End */}
            <View style={styles.submitButton}>
            <TouchableOpacity style={styles.forBomx} onPress={Submit}>
              <Text style={styles.forBomxText}>Submit</Text>
            </TouchableOpacity>
          </View>
          </View>
        </View>
      </ScrollView>
    );
  };
  
  export default QMF2011_LGLSCN_D;
  
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
  