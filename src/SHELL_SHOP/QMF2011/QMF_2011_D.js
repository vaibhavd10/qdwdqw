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

const QMF_2011_D = ({navigation}) => {
 
  const [checkedk43, setCheckedk43] = useState('');
  const [checkedk44, setCheckedk44] = useState('');
  const [checkedk45, setCheckedk45] = useState('');
  const [checkedk46, setCheckedk46] = useState('');
  const [checkedk47, setCheckedk47] = useState('');
  const [checkedk48, setCheckedk48] = useState('');
  const [checkedk49, setCheckedk49] = useState('');
  const [checkedk50, setCheckedk50] = useState('');
  const [checkedk51, setCheckedk51] = useState('');


  
  const [observedvaluek26, setobservedvaluek26] = useState('');
  const [observedvaluek27, setobservedvaluek27] = useState('');
  const [observedvaluek28, setobservedvaluek28] = useState('');
  const [observedvaluek29, setobservedvaluek29] = useState('');
  const [observedvaluek30, setobservedvaluek30] = useState('');
 
 
  const [remarkk65, setremarkk65] = useState('');
  const [remarkk66, setremarkk66] = useState('');
  const [remarkk67, setremarkk67] = useState('');
  const [remarkk68, setremarkk68] = useState('');


     
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
                    status={checkedk43 === 'OBSERVED' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk43('OBSERVED')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Observed</Text>
                  <RadioButton
                    value="NOT OBSERVED"
                    status={
                      checkedk43 === 'NOT OBSERVED' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk43('NOT OBSERVED')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk65 => {
                    setremarkk65(remarkk65);
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
                    status={checkedk44 === 'DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk44('DONE')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                  <RadioButton
                    value="NOT DONE"
                    status={checkedk44 === 'NOT DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk44('NOT DONE')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk66 => {
                    setremarkk66(remarkk66);
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
                    status={checkedk45 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk45('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Ok</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk45 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk45('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk67=> {
                    setremarkk67(remarkk67);
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
                    status={checkedk46 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk46('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Ok</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk46 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk46('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk68=> {
                    setremarkk68(remarkk68);
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
                    status={checkedk47=== 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk47('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Ok</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk47=== 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk47('NOT OK')}
                  />
                
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk69 => {
                    setremarkk69(remarkk69);
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
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk70 => {
                    setremarkk70(remarkk70);
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
                    status={checkedk49 === 'PROVIDED' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk49('PROVIDED')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                  <RadioButton
                    value="NOT PROVIDED"
                    status={
                      checkedk49 === 'NOT PROVIDED' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk49('NOT PROVIDED')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk71 => {
                    setremarkk71(remarkk71);
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
                    status={checkedk50 === 'PROVIDED' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk50('PROVIDED')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                  <RadioButton
                    value="NOT PROVIDED"
                    status={
                      checkedk50 === 'NOT PROVIDED' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk50('NOT PROVIDED')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                   onChangeText={remarkk72 => {
                    setremarkk72(remarkk72);
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
                  style={styles.FirstEntRemarkInput}
                  onChangeText={observedvaluek26 => {
                    setobservedvaluek26(observedvaluek26);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk73 => {
                    setremarkk73(remarkk73);
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
                  style={styles.FirstEntRemarkInput}
                  onChangeText={observedvaluek27 => {
                    setobservedvaluek27(observedvaluek27);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk74=> {
                    setremarkk74(remarkk74);
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
                    status={checkedk51 === 'PROVIDED' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk51('PROVIDED')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                  <RadioButton
                    value="NOT PROVIDED"
                    status={
                      checkedk51 === 'NOT PROVIDED' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk51('NOT PROVIDED')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk75 => {
                    setremarkk75(remarkk75);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Thirteen Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                12. Bkt for PRT fixing distance for center(LGS)
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={observedvaluek28=> {
                    setobservedvaluek28(observedvaluek28);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk76 => {
                    setremarkk76(remarkk76);
                  }}
                />
              </View>
            </View>
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                12. Bkt for PRT fixing distance for center(LGS)
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={observedvaluek29 => {
                    setobservedvaluek29(observedvaluek29);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk63 => {
                    setremarkk63(remarkk63);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Twenty Two Section End */}

            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                13. Bkt for PRT fixing distance for center(LSCN)
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={observedvaluek30 => {
                    setobservedvaluek30(observedvaluek30);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk64 => {
                    setremarkk64(remarkk64);
                  }}
                />
              </View>
            </View>
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

export default QMF_2011_D;

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
