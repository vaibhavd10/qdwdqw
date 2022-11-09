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

const CEndWallLBACT = () => {
  //  -------------------MainForm Shell Info Variables-----------------
  const [shelltypes3, setShellTypes3] = useState('');
  const [shifts3, SetShifts3] = useState('');
  const [dates3, setDates3] = useState('');

  // Observed Values Variable
  const [observedValues23, setObservedValues23] = useState('');
  const [observedValues24, setObservedValues24] = useState('');

  // Checked Variable
  const [checked37, setChecked37] = useState('');
  const [checked38, setChecked38] = useState('');
  const [checked39, setChecked39] = useState('');
  const [checked40, setChecked40] = useState('');
  const [checked41, setChecked41] = useState('');
  const [checked42, setChecked42] = useState('');
  const [checked43, setChecked43] = useState('');
  const [checked44, setChecked44] = useState('');

  // Remarks Variables
  const [remarks59, setRemarks59] = useState('');
  const [remarks60, setRemarks60] = useState('');
  const [remarks61, setRemarks61] = useState('');
  const [remarks62, setRemarks62] = useState('');
  const [remarks63, setRemarks63] = useState('');
  const [remarks64, setRemarks64] = useState('');
  const [remarks65, setRemarks65] = useState('');
  const [remarks66, setRemarks66] = useState('');
  const [remarks67, setRemarks67] = useState('');
  const [remarks68, setRemarks68] = useState('');

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
      

        {/* *********************Form Entery Section Start ******************* */}

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
                  status={checked37 === 'OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked37('OK')}
                />
                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                <RadioButton
                  value="NOT OK"
                  status={checked37 === 'NOT OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked37('NOT OK')}
                />
              </View>
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks59}
                value={remarks59}/>
            </View>
          </View>
          {/* Form Entry First Section End */}

          {/* Form Entry Second Section Start */}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>2. EFT cover & lock </Text>
            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <View style={styles.EntryObserveRadio}>
                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                <RadioButton
                  value="OK"
                  status={checked38 === 'OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked38('OK')}
                />
                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                <RadioButton
                  value="NOT OK"
                  status={checked38 === 'NOT OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked38('NOT OK')}
                />
              </View>
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks60}
                value={remarks60}/>
            </View>
          </View>
          {/* Form Entry Second Section End */}

          {/* Form Entry Third Section Start */}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>
              3. Condition of tail lamp BKT.{' '}
            </Text>

            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <View style={styles.EntryObserveRadio}>
                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                <RadioButton
                  value="OK"
                  status={checked39 === 'OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked39('OK')}
                />
                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                <RadioButton
                  value="NOT OK"
                  status={checked39 === 'NOT OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked39('NOT OK')}
                />
              </View>
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks61}
                value={remarks61}/>
            </View>
          </View>
          {/* Form Entry Third Section End */}

          {/* Form Entry Fourth Section Start */}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>4. Dents in end wall</Text>

            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <View style={styles.EntryObserveRadio}>
                <Text style={styles.FirstEntObserveRadio}>Observed</Text>
                <RadioButton
                  value="Observed"
                  status={checked40 === 'Observed' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked40('Observed')}
                />
                <Text style={styles.FirstEntObserveRadio}>Not Observed</Text>
                <RadioButton
                  value="Not Observed"
                  status={checked40 === 'Not Observed' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked40('Not Observed')}
                />
              </View>
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks62}
                value={remarks62}/>
            </View>
          </View>
          {/* Form Entry Fourth Section End */}

          {/* Form Entry Five Section Start */}
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
                  status={checked41 === 'OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked41('OK')}
                />
                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                <RadioButton
                  value="NOT OK"
                  status={checked41 === 'NOT OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked41('NOT OK')}
                />
              </View>
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks63}
                value={remarks63}/>
            </View>
          </View>
          {/* Form Entry Five Section End */}

          {/* Form Entry Six Section Start */}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>
              6. End wall back pieces for sliding door
            </Text>

            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <View style={styles.EntryObserveRadio}>
                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                <RadioButton
                  value="OK"
                  status={checked42 === 'OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked42('OK')}
                />
                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                <RadioButton
                  value="NOT OK"
                  status={checked42 === 'NOT OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked42('NOT OK')}
                />
              </View>
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks64}
                value={remarks64}/>
            </View>
          </View>
          {/* Form Entry Six Section End */}

          {/* Form Entry Seven Section Start */}
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
                onChange={setObservedValues23}
                value={observedValues23}/>
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks65}
                value={remarks65}/>
            </View>
          </View>
          {/* Form Entry Seven Section End */}

          {/* Form Entry Eight Section Start */}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>
              8. End wall exhaust cutting (in AC shell)
            </Text>

            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <View style={styles.EntryObserveRadio}>
                <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                <RadioButton
                  value="Provided"
                  status={checked43 === 'Provided' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked43('Provided')}
                />
                <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                <RadioButton
                  value="Not Provided"
                  status={checked43 === 'Not Provided' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked43('Not Provided')}
                />
              </View>
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks66}
                value={remarks66}/>
            </View>
          </View>
          {/* Form Entry Eight Section End */}

          {/* Form Entry Nine Section Start */}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>9. End wall unwanted hole</Text>

            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <View style={styles.EntryObserveRadio}>
                <Text style={styles.FirstEntObserveRadio}>Observed</Text>
                <RadioButton
                  value="Observed"
                  status={checked44 === 'Observed' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked44('Observed')}
                />
                <Text style={styles.FirstEntObserveRadio}>Not Observed</Text>
                <RadioButton
                  value="Not Observed"
                  status={checked44 === 'Not Observed' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked44('Not Observed')}
                />
              </View>
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks67}
                value={remarks67}/>
            </View>
          </View>
          {/* Form Entry Nine Section End */}

          {/* Form Entry Ten Section Start */}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>
              10. Distance between U channel{' '}
            </Text>

            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setObservedValues24}
                value={observedValues24}/>
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks68}
                value={remarks68}/>
            </View>
          </View>
          {/* Form Entry Ten Section End */}
          {/* ********************    Submit Button Code Start   ************ */}

          <View style={styles.submitButton}>
            <TouchableOpacity style={styles.forBomx}>
              <Text style={styles.forBomxText}>Submit</Text>
            </TouchableOpacity>
          </View>
          {/* ********************    Submit Button Code End   ************ */}
        </View>

        {/* ***************  Form Entery Section  End  ********************* */}
      </View>
       {/* -------------------MainForm Part Start----------------- */}
    </ScrollView>
  );
};

export default CEndWallLBACT;

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
