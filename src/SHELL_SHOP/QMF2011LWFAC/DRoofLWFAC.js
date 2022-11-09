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
import {RadioButton} from 'react-native-paper';

const DRoofLWFAC = () => {
   //  -------------------MainForm Shell Info Variables-----------------
   const [shelltypes4, setShellTypes4] = useState('');
   const [shifts4, SetShifts4] = useState('');
   const [dates4, setDates4] = useState('');
 

  // Observed Values Variable
  const [observedValues25, setObservedValues25] = useState('');
  const [observedValues26, setObservedValues26] = useState('');

  // Checked Variable
  const [checked45, setChecked45] = useState(''); // 45
  const [checked46, setChecked46] = useState('');
  const [checked47, setChecked47] = useState('');
  const [checked48, setChecked48] = useState('');
  const [checked49, setChecked49] = useState('');
  const [checked50, setChecked50] = useState('');

  // Remarks Variables
  const [remarks69, setRemarks69] = useState(''); 
  const [remarks70, setRemarks70] = useState('');
  const [remarks71, setRemarks71] = useState('');
  const [remarks72, setRemarks72] = useState('');
  const [remarks73, setRemarks73] = useState('');
  const [remarks74, setRemarks74] = useState('');
  const [remarks75, setRemarks75] = useState('');
  const [remarks76, setRemarks76] = useState('');

  const onPress = () => {
    console.log('onPress');
  };

  return (
    <ScrollView style={styles.MainContainers}>
       {/* -------------------Header Part Start----------------- */}
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
      {/* -------------------Header Part End----------------- */}

      {/* -------------------MainForm Part Start----------------- */}

      <View style={styles.MainForm}>
       

        {/* Form Entery Section Start */}

        <View style={styles.MainFormEntry}>
          {/* Form Entry First Section Start */}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>1. Roof unwanted holes</Text>
            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <View style={styles.EntryObserveRadio}>
                <Text style={styles.FirstEntObserveRadio}>Observed</Text>
                <RadioButton
                  value="Observed"
                  status={checked45 === 'Observed' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked45('Observed')}
                />
                <Text style={styles.FirstEntObserveRadio}>Not Observed</Text>
                <RadioButton
                  value="Not Observed"
                  status={checked45 === 'Not Observed' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked45('Not Observed')}
                />
              </View>
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks69}
                value={remarks69}/>
            </View>
          </View>
          {/* Form Entry First Section End */}

          {/* Form Entry Second Section Start */}
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
                  value="Done"
                  status={checked46 === 'Done' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked46('Done')}
                />
                <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                <RadioButton
                  value="Not Done"
                  status={checked46 === 'Not Done' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked46('Not Done')}
                />
              </View>
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks70}
                value={remarks70}/>
            </View>
          </View>
          {/* Form Entry Second Section End */}

          {/* Form Entry Third Section Start */}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>3. Condition of roof arch </Text>

            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <View style={styles.EntryObserveRadio}>
                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                <RadioButton
                  value="OK"
                  status={checked47 === 'OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked47('OK')}
                />
                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                <RadioButton
                  value="NOT OK"
                  status={checked47 === 'NOT OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked47('NOT OK')}
                />
              </View>
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks71}
                value={remarks71}/>
            </View>
          </View>
          {/* Form Entry Third Section End */}

          {/* Form Entry Fourth Section Start */}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>
              4. Welding of cross brace joint (LWFAC) ***
            </Text>

            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <View style={styles.EntryObserveRadio}>
                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                <RadioButton
                  value="OK"
                  status={checked48 === 'OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked48('OK')}
                />
                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                <RadioButton
                  value="NOT OK"
                  status={checked48 === 'NOT OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked48('NOT OK')}
                />
              </View>
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks72}
                value={remarks72}/>
            </View>
          </View>
          {/* Form Entry Fourth Section End */}

          {/* Form Entry Five Section Start */}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>
              5. Cross brace height(roof center to top ) 
            </Text>

            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setObservedValues25}
                value={observedValues25}/>
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks73}
                value={remarks73}/>
            </View>
          </View>
          {/* Form Entry Five Section End */}

          {/* Form Entry Six Section Start */}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>6. Final roof end condition</Text>

            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <View style={styles.EntryObserveRadio}>
                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                <RadioButton
                  value="OK"
                  status={checked49 === 'OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked49('OK')}
                />
                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                <RadioButton
                  value="NOT OK"
                  status={checked49 === 'NOT OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked49('NOT OK')}
                />
              </View>
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks74}
                value={remarks74}/>
            </View>
          </View>
          {/* Form Entry Six Section End */}

          {/* Form Entry Seven Section Start */}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>
              7. Cross brace supporting bracket distance (LWFAC)
            </Text>

            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setObservedValues26}
                value={observedValues26}/>
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks75}
                value={remarks75}/>
            </View>
          </View>
          {/* Form Entry Seven Section End */}

          {/* Form Entry Eight Section Start */}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>
              8. Ventilator grill arrangement joint welding
            </Text>

            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <View style={styles.EntryObserveRadio}>
                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                <RadioButton
                  value="OK"
                  status={checked50 === 'OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked50('OK')}
                />
                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                <RadioButton
                  value="NOT OK"
                  status={checked50 === 'NOT OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked50('NOT OK')}
                />
              </View>
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks76}
                value={remarks76}/>
            </View>
          </View>
          {/* Form Entry Eight Section End */}

          {/* ********************    Submit Button Code Start   ************ */}

          <View style={styles.submitButton}>
            <TouchableOpacity style={styles.forBomx}>
              <Text style={styles.forBomxText}>Submit</Text>
            </TouchableOpacity>
          </View>
          {/* ********************    Submit Button Code End   ************ */}
        </View>

        {/* Form Entery Section 1St End */}
      </View>
    </ScrollView>
  );
};

export default DRoofLWFAC;

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
