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

const QMF_2011_E = ({navigation}) => {
    
  const [checkedk52, setCheckedk52] = useState('');
  const [checkedk53, setCheckedk53] = useState('');
  const [checkedk54, setCheckedk54] = useState('');
  const [checkedk55, setCheckedk55] = useState('');
  const [checkedk56, setCheckedk56] = useState('');
  const [checkedk57, setCheckedk57] = useState('');
  const [checkedk58, setCheckedk58] = useState('');
  const [checkedk59, setCheckedk59] = useState('');
  const [checkedk60, setCheckedk60] = useState('');
  const [checkedk61, setCheckedk61] = useState('');
  const [checkedk62, setCheckedk62] = useState('');
  const [checkedk63, setCheckedk63] = useState('');
  const [checkedk64, setCheckedk64] = useState('');
  const [checkedk65, setCheckedk65] = useState('');
  const [checkedk66, setCheckedk66] = useState('');
  const [checkedk67, setCheckedk67] = useState('');
  const [checkedk68, setCheckedk68] = useState('');
  const [checkedk69, setCheckedk69] = useState(''); 
  const [checkedk70, setCheckedk70] = useState('');
  const [checkedk71, setCheckedk71] = useState('');
  const [checkedk72, setCheckedk72] = useState('');
  const [checkedk73, setCheckedk73] = useState('');
  const [checkedk74, setCheckedk74] = useState('');
  const [checkedk75, setCheckedk75] = useState('');
  const [checkedk76, setCheckedk76] = useState('');
  const [checkedk77, setCheckedk77] = useState('');
  const [checkedk78, setCheckedk78] = useState('');
  const [checkedk79, setCheckedk79] = useState('');
  const [checkedk80, setCheckedk80] = useState('');
  const [checkedk81, setCheckedk81] = useState('');
  const [checkedk82, setCheckedk82] = useState('');
  const [checkedk83, setCheckedk83] = useState('');
  const [checkedk84, setCheckedk84 ]= useState('');
  const [checkedk85, setCheckedk85] = useState('');
  const [checkedk86, setCheckedk86] = useState('');
  const [checkedk87, setCheckedk87] = useState('');

  
  const [observedvaluek31, setobservedvaluek31] = useState('');
  const [observedvaluek32, setobservedvaluek32] = useState('');
  const [observedvaluek33, setobservedvaluek33] = useState('');
  const [observedvaluek34, setobservedvaluek34] = useState('');
  const [observedvaluek35, setobservedvaluek35] = useState('');
  const [observedvaluek36, setobservedvaluek36] = useState('');
  const [observedvaluek37, setobservedvaluek37] = useState('');
  const [observedvaluek38, setobservedvaluek38] = useState('');
  const [observedvaluek39, setobservedvaluek39] = useState('');
  const [observedvaluek40, setobservedvaluek40] = useState('');

  
  const [remarkk69, setremarkk69] = useState('');
  const [remarkk70, setremarkk70] = useState('');
  const [remarkk71, setremarkk71] = useState('');
  const [remarkk72, setremarkk72] = useState('');
  const [remarkk73, setremarkk73] = useState('');
  const [remarkk74, setremarkk74] = useState('');
  const [remarkk75, setremarkk75] = useState('');
  const [remarkk76, setremarkk76] = useState('');
  const [remarkk77, setremarkk78] = useState('');
  const [remarkk79, setremarkk79] = useState('');
  const [remarkk80, setremarkk80] = useState('');
  const [remarkk81, setremarkk81] = useState('');
  const [remarkk82, setremarkk82] = useState('');
  const [remarkk83, setremarkk83] = useState('');
  const [remarkk84, setremarkk84] = useState('');
  const [remarkk85, setremarkk86] = useState('');
  const [remarkk87, setremarkk87] = useState('');
  const [remarkk88, setremarkk89] = useState('');
  const [remarkk90, setremarkk90] = useState('');
  const [remarkk91, setremarkk91] = useState('');
  const [remarkk92, setremarkk92] = useState('');
  const [remarkk93, setremarkk93] = useState('');
  const [remarkk94, setremarkk94] = useState('');
  const [remarkk95, setremarkk95] = useState('');
  const [remarkk96, setremarkk96] = useState('');
  const [remarkk97, setremarkk97] = useState('');
  const [remarkk98, setremarkk98] = useState('');
  const [remarkk99, setremarkk99] = useState('');
  const [remarkk100, setremarkk100] = useState('');
  const [remarkk101, setremarkk101] = useState('');
  const [remarkk102, setremarkk102] = useState('');
  const [remarkk103, setremarkk103] = useState('');
  const [remarkk104, setremarkk104] = useState('');
  const [remarkk105, setremarkk105] = useState('');
  const [remarkk106, setremarkk106] = useState('');
  const [remarkk107, setremarkk107] = useState('');
  const [remarkk108, setremarkk108] = useState('');
  const [remarkk109, setremarkk109] = useState('')
  const [remarkk110, setremarkk110] = useState('')
  const [remarkk111, setremarkk111] = useState('')
  const [remarkk112, setremarkk112] = useState('')
  const [remarkk113, setremarkk113] = useState('')
  const [remarkk114, setremarkk114] = useState('')
  const [remarkk115, setremarkk115] = useState('')
  const [remarkk116, setremarkk116] = useState('')
  const [remarkk117, setremarkk117] = useState('')


   
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
         
          {/* Form Title End*/}

          {/* Form Entery Section Start */}

          <View style={styles.MainFormEntry}>
            {/* Form Entry First Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                1. Alignment of roof arch, carline arch, body pillar{'\n'} & U/F
                channel (L2T,L3T)
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>Ok</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk52 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk52('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Ok</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk52 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk52('NOT OK')}
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
            {/* Form Entry Third Section End */}

            {/* Form Entry Fourth Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                2. Welding &grinding of small RWG.
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>Ok</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk53 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk53('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Ok</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk53 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk53('NOT OK')}
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
            {/* Form Entry Fourth Section End */}

            {/* Form Entry Five Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                3. Door cut out back pieces
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk54 === 'PROVIDED' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk54('PROVIDED')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                  <RadioButton
                    value="NOT PROVIDED"
                    status={
                      checkedk54 === 'NOT PROVIDED' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk54('NOT PROVIDED')}
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
            {/* Form Entry Five Section End */}

            {/* Form Entry Six Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                4. Car line and roof sheet joint leakage test
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>Done</Text>
                  <RadioButton
                    value="DONE"
                    status={checkedk55 === 'DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk55('DONE')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                  <RadioButton
                    value="NOT DONE"
                    status={checkedk55 === 'NOT DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk55('NOT DONE')}
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
            {/* Form Entry Six Section End */}

            {/* Form Entry Seven Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                5. Welding of attachment wall holding BKT (683,1527mm)
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>Done</Text>
                  <RadioButton
                    value="DONE"
                    status={checkedk56 === 'DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk56('DONE')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                  <RadioButton
                    value="NOT DONE"
                    status={checkedk56 === 'NOT DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk56('NOT DONE')}
                  />
                </View>
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
            {/* Form Entry Seven Section End */}

            {/* Form Entry Eight Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                6. Welding of auxiliary water tank BKT (620mm)
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>Done</Text>
                  <RadioButton
                    value="DONE"
                    status={checkedk57 === 'DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk57('DONE')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                  <RadioButton
                    value="NOT DONE"
                    status={checkedk57 === 'NOT DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk57('NOT DONE')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk74 => {
                    setremarkk74(remarkk74);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Eight Section End */}

            {/* Form Entry Nine Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                7. Welding & grinding of side wall with sole bar
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>Done</Text>
                  <RadioButton
                    value="DONE"
                    status={checkedk58 === 'DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk58('DONE')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                  <RadioButton
                    value="NOT DONE"
                    status={checkedk58 === 'NOT DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk58('NOT DONE')}
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
            {/* Form Entry Nine Section End */}

            {/* Form Entry Ten Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                8. Welding of stiffening plate(both side)
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>Done</Text>
                  <RadioButton
                    value="DONE"
                    status={checkedk59 === 'DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk59('DONE')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                  <RadioButton
                    value="NOT DONE"
                    status={checkedk59 === 'NOT DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk59('NOT DONE')}
                  />
                </View>
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
            {/* Form Entry Ten Section End */}

            {/* Form Entry Eleven Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                9. Diagonal of RMPU mounting stud {'\n'}( Should be equal)
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <TextInput
                  style={styles. FirstEntRemarkInput}
                  onChangeText={observedvaluek31 => {
                    setobservedvaluek31(observedvaluek31);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk77 => {
                    setremarkk77(remarkk77);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Eleven Section End */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                10. Partition frame welding &{'\n'} alignment
                conduction(LSCN,LGS,LRR){' '}
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>Ok</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk60 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk60('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Ok</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk60 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk60('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk78 => {
                    setremarkk78(remarkk78);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Twelve Section Start */}

            {/* Form Entry Twelve Section End */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                11. Dimension for AC Opening for RMPU{'\n'}{' '}
                (Lateral/longitudinal)
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <TextInput
                  style={styles. FirstEntRemarkInput}
                  onChangeText={observedvaluek32 => {
                    setobservedvaluek32(observedvaluek32);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk79 => {
                    setremarkk79(remarkk79);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Thirteen Section Start */}

            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                12. Lav. Mounting bracket distance {'\n'}(L2T,L3T,LGS without
                PRT)
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <TextInput
                  style={styles. FirstEntRemarkInput}
                  onChangeText={observedvaluek33=> {
                    setobservedvaluek33(observedvaluek33);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk80 => {
                    setremarkk80(remarkk80);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Twenty Two Section End */}

            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                13. Carline and roof sheet welding both side
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>Done</Text>
                  <RadioButton
                    value="DONE"
                    status={checkedk61 === 'DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk61('DONE')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                  <RadioButton
                    value="NOT DONE"
                    status={checkedk61 === 'NOT DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk61('NOT DONE')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk81 => {
                    setremarkk81(remarkk81);
                  }}
                />
              </View>
            </View>
            {/* Form  entry thirtheen entry section  */}

            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                14. Roof arch & carline sheet both side welding
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>Done</Text>
                  <RadioButton
                    value="DONE"
                    status={checkedk62 === 'DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk62('DONE')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                  <RadioButton
                    value="NOT DONE"
                    status={checkedk62 === 'NOT DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk62('NOT DONE')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk82 => {
                    setremarkk82(remarkk82);
                  }}
                />
              </View>
            </View>
            {/* Form Entry thirteen  End  Section */}

            {/* Form Entry Fourteen Entry Section */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                15. Both side Sidewall vertical pillar & {'\n'} U/F covering
                plate welding
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>Done</Text>
                  <RadioButton
                    value="DONE"
                    status={checkedk63 === 'DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk63('DONE')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                  <RadioButton
                    value="NOT DONE"
                    status={checkedk63 === 'NOT DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk63('NOT DONE')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk83 => {
                    setremarkk83(remarkk83);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Fourteen End Section */}

            {/* Form Entry Fifteen Entry Section */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                16. Door cut out welding bottom side {'\n'}with Under frame door
                profile
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>Done</Text>
                  <RadioButton
                    value="DONE"
                    status={checkedk64=== 'DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk64('DONE')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                  <RadioButton
                    value="NOT DONE"
                    status={checkedk64=== 'NOT DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk64('NOT DONE')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk84 => {
                    setremarkk84(remarkk84);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Fifteen End Section */}

            {/* Form Entry Sixteen Entry Section */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                17. Roof element & Lav. Sidewall welding inside & out side
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>Done</Text>
                  <RadioButton
                    value="DONE"
                    status={checkedk65 === 'DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk65('DONE')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                  <RadioButton
                    value="NOT DONE"
                    status={checkedk65=== 'NOT DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk65('NOT DONE')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk85 => {
                    setremarkk85(remarkk85);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Sixteen End Section */}

            {/* Form Entry Seventeen Entry Section */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                18. Lav. sidewall & sidewall both side welding with door cut out
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>Done</Text>
                  <RadioButton
                    value="DONE"
                    status={checkedk66 === 'DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk66('DONE')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                  <RadioButton
                    value="NOT DONE"
                    status={checkedk66 === 'NOT DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk66('NOT DONE')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk86 => {
                    setremarkk86(remarkk86);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Seventeen End Section */}

            {/* Form Entry Eighteen Entry Section */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                19. Both side end wall with Lav. Sidewall, roof element &U/F
                front part welding
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>Done</Text>
                  <RadioButton
                    value="DONE"
                    status={checkedk67 === 'DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk67('DONE')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                  <RadioButton
                    value="NOT DONE"
                    status={checkedk67 === 'NOT DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk67('NOT DONE')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk87 => {
                    setremarkk87(remarkk87);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Eighteen End Section */}

            {/* Form Entry Nineteen Entry Section */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                20. Complete shell assembly outside & inside grinding work
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>Done</Text>
                  <RadioButton
                    value="DONE"
                    status={checkedk68 === 'DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk68('DONE')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                  <RadioButton
                    value="NOT DONE"
                    status={checkedk68 === 'NOT DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk68('NOT DONE')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk88 => {
                    setremarkk88(remarkk88);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Nineteen End Section */}

            {/* Form Entry Nineteen Entry Section */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                21. Roof element RMPU socket hole die and alignment with end
                wall
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>Done</Text>
                  <RadioButton
                    value="DONE"
                    status={checkedk69 === 'DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk69('DONE')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                  <RadioButton
                    value="NOT DONE"
                    status={checkedk69 === 'NOT DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk69('NOT DONE')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk89 => {
                    setremarkk89(remarkk89);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Nineteen End Section */}

            {/* Form Entry Twenty Entry Section */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                22. Roof bkt. Fitment in stage IV
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>37mm</Text>
                  <RadioButton
                    value="37"
                    status={checkedk70 === '37' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk70('37')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Ok</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk70 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk70('OK')}
                  />

                  <Text style={styles.FirstEntObserveRadio}>Not Ok</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk70 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk70('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk90 => {
                    setremarkk90(remarkk90);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Twenty End Section */}

            {/* Form Entry TwentyOne Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>23. Body width(inside)</Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <TextInput
                  style={styles. FirstEntRemarkInput}
                  onChangeText={observedvaluek34 => {
                    setobservedvaluek34(observedvaluek34);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk91 => {
                    setremarkk91(remarkk91);
                  }}
                />
              </View>
            </View>
            {/* Form Entry TwentyOne Section End */}

            {/* Form Entry TwentyTwo Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>24 Insulating pins</Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk71 === 'PROVIDED' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk71('PROVIDED')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                  <RadioButton
                    value="NOT PROVIDED"
                    status={
                      checkedk71 === 'NOT PROVIDED' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk71('NOT PROVIDED')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk92 => {
                    setremarkk92(remarkk92);
                  }}
                />
              </View>
            </View>
            {/* Form Entry TwentyTwo Section End */}

            {/* Form Entry TwentyThree Section End */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                25. Pull box distance from center line
              </Text>
              <View style={styles.FiveEntryPart}>
                <Text style={styles.FirstEntText}>L3T</Text>

                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={observedvaluek35 => {
                      setobservedvaluek35(observedvaluek35);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk93 => {
                      setremarkk93(remarkk93);
                    }}
                  />
                </View>
              </View>
              <View style={styles.FiveEntryPart}>
                <Text style={styles.FirstEntText}>L2T</Text>
                <View style={styles.SubObserve}>
                  <Text style={styles.SubObserveText}>
                    Observed value/condition
                  </Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={observedvaluek36 => {
                      setobservedvaluek36(observedvaluek36);
                    }}
                  />
                </View>
                <View style={styles.SubObserveRemark}>
                  <Text style={styles.SubObserveRemarkText}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk94=> {
                      setremarkk94(remarkk94);
                    }}
                  />
                </View>
              </View>
            </View>

            {/* Form Entry TwentyThree Section Start */}

            {/* Form Entry TwentyFour Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                26 Expended metal welding with partition frame(LSCN/LGS)
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>Ok</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk72 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk72('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Ok</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk72 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk72('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk95 => {
                    setremarkk95(remarkk95);
                  }}
                />
              </View>
            </View>
            {/* Form Entry TwentyFour Section End */}

            {/* Form Entry TwentyFive Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                27 Chair angle & J molding (LSCN/LGS)
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk73 === 'PROVIDED' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk73('PROVIDED')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                  <RadioButton
                    value="NOT PROVIDED"
                    status={
                      checkedk73 === 'NOT PROVIDED' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk73('NOT PROVIDED')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk96 => {
                    setremarkk96(remarkk96);
                  }}
                />
              </View>
            </View>
            {/* Form Entry TwentyFive Section End */}

            {/* Form Entry TwentySix Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                28 Partition frame with sidewall back piece welding(LSCN/LGS)
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>Ok</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk74 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk74('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Ok</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk74 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk74('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk97 => {
                    setremarkk97(remarkk97);
                  }}
                />
              </View>
            </View>
            {/* Form Entry TwentySix Section End */}

            {/* Form Entry TwentySix Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                29 Partition frame welding in lav. Area (LSCN/LGS)
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>Ok</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk75 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk75('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Ok</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk75 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk75('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk98 => {
                    setremarkk98(remarkk98);
                  }}
                />
              </View>
            </View>
            {/* Form Entry TwentySix Section End */}

            {/* Form Entry TwentySeven Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                30 Hole alignment part pillar to transverse side partition
                pillar(LSCN)
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>Ok</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk76 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk76('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Ok</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk76 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk76('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk99 => {
                    setremarkk99(remarkk99);
                  }}
                />
              </View>
            </View>
            {/* Form Entry TwentySeven Section End */}

            {/* Form Entry TwentyEight Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                31. Both side lav. Z member (LSCN/LGS)
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk77 === 'PROVIDED' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk77('PROVIDED')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                  <RadioButton
                    value="NOT PROVIDED"
                    status={
                      checkedk77 === 'NOT PROVIDED' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk77('NOT PROVIDED')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk100 => {
                    setremarkk100(remarkk100);
                  }}
                />
              </View>
            </View>
            {/* Form Entry TwentyEight Section End */}

            {/* Form Entry TwentyNine Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                32. All door above wago bracket and conduit bracket(LSCN/LGS)
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk78 === 'PROVIDED' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk78('PROVIDED')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                  <RadioButton
                    value="NOT PROVIDED"
                    status={
                      checkedk78 === 'NOT PROVIDED' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk78('NOT PROVIDED')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk101 => {
                    setremarkk101(remarkk101);
                  }}
                />
              </View>
            </View>
            {/* Form Entry TwentyNine Section End */}

            {/* Form Entry Thirty Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                33. 30L auxiliary Water tank bracket welding (LSCN)
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>Ok</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk79 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk79('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Ok</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk79 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk79('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk102 => {
                    setremarkk102(remarkk102);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Thirty Section End */}

            {/* Form Entry Thirty One Section Start */}

            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                34. Chair angle height from lower flange (LGS/LSCN)
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <TextInput
                  style={styles. FirstEntRemarkInput}
                  onChangeText={observedvaluek37 => {
                    setobservedvaluek37(observedvaluek37);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk103 => {
                    setremarkk103(remarkk103);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Thirty One Section End  */}

            {/* Form Entry Thirty One Section Start */}

            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                35. Part pillar height (lower hole centre) from under frame
                lower flange (upper/lower) for LSCN
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <TextInput
                  style={styles. FirstEntRemarkInput}
                  onChangeText={observedvaluek38 => {
                    setobservedvaluek38(observedvaluek38);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk104 => {
                    setremarkk104(remarkk104);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Thirty One Section End  */}

            {/* Form Entry Thirty two Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                36 Welding & fitment condition for channel for chair angle
                fixing(LGS/LSCN)
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>Ok</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk80 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk80('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Ok</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk80 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk80('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk105 => {
                    setremarkk105(remarkk105);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Thirty  two Section End */}

            {/* Form Entry Thirty One Section Start */}

            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                37. Cabin inner width(single side &cabin side) for LSCN
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <TextInput
                  style={styles. FirstEntRemarkInput}
                  onChangeText={observedvaluek39 => {
                    setobservedvaluek39(observedvaluek39);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk106 => {
                    setremarkk106(remarkk106);
                  }}
                />
              </View>
            </View>

            {/* Form Entry Thirty One Section End  */}

            {/* Form Entry Thirty One Section Start */}

            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                38. Cabin inner width longitudinal side & transverse side(LGS)
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <TextInput
                  style={styles. FirstEntRemarkInput}
                  onChangeText={observedvaluek40 => {
                    setobservedvaluek40(observedvaluek40);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk107 => {
                    setremarkk107(remarkk107);
                  }}
                />
              </View>
            </View>

            {/* Form Entry Thirty One Section End  */}

            {/* Form Entry Thirty One Section Start */}

            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                39. Upper berth height in longitudinal side cabin for LSCN
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <TextInput
                  style={styles. FirstEntRemarkInput}
                  onChangeText={observedvaluek41 => {
                    setobservedvaluek41(observedvaluek41);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk108 => {
                    setremarkk108(remarkk108);
                  }}
                />
              </View>
            </View>

            {/* Form Entry Thirty One Section End  */}

            {/* Form Entry Thirty One Section Start */}

            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                40. Lav. Partition frame distance from end wall for LSCN/LGS &
                gang way area gap
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <TextInput
                  style={styles. FirstEntRemarkInput}
                  onChangeText={observedvaluek42 => {
                    setobservedvaluek42(observedvaluek42);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk109 => {
                    setremarkk109(remarkk109);
                  }}
                />
              </View>
            </View>

            {/* Form Entry Thirty One Section End  */}

            {/* Form Entry Thirty One Section Start */}

            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                41. Distance from side wall pillar to partition pillar {'\n'}
                transverse side/longitudinal side for LSCN/LGS
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <TextInput
                  style={styles. FirstEntRemarkInput}
                  onChangeText={observedvaluek43 => {
                    setobservedvaluek43(observedvaluek43);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk110 => {
                    setremarkk110(remarkk110);
                  }}
                />
              </View>
            </View>

            {/* Form Entry Thirty One Section End  */}

            {/* Form Entry Thirty One Section Start */}

            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                42. Distance from side wall pillar to partition{'\n'} pillar
                transverse side/longitudinal side for LGS
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <TextInput
                  style={styles. FirstEntRemarkInput}
                  onChangeText={observedvaluek44 => {
                    setobservedvaluek44(observedvaluek44);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk111 => {
                    setremarkk111(remarkk111);
                  }}
                />
              </View>
            </View>

            {/* Form Entry Thirty One Section End  */}

            {/* Form Entry Thirty One Section Start */}

            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                43. Corridor area after partition frame(LSCN)
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <TextInput
                  style={styles. FirstEntRemarkInput}
                  onChangeText={observedvaluek45=> {
                    setobservedvaluek45(observedvaluek45);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk112 => {
                    setremarkk112(remarkk112);
                  }}
                />
              </View>
            </View>

            {/* Form Entry Thirty One Section End  */}

            {/* Form Entry Thirty One Section Start */}

            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                44. Roof height from trough sheet to roof sheet{'\n'}{' '}
                (L3T/LSCN,LGS,L2T,LPC
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <TextInput
                  style={styles. FirstEntRemarkInput}
                  onChangeText={observedvaluek46 => {
                    setobservedvaluek46(observedvaluek46);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk113 => {
                    setremarkk113(remarkk113);
                  }}
                />
              </View>
            </View>

            {/* Form Entry Thirty One Section End  */}

            {/* Form Entry Thirty One Section Start */}

            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                45. Height from roof pillar mounting bkt to trough sheet pillar
                mounting channel{'\n'}(LSCN/LGS- Lateral side-2625±6)(without
                PRT)
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <TextInput
                  style={styles. FirstEntRemarkInput}
                  onChangeText={observedvaluek47 => {
                    setobservedvaluek47(observedvaluek47);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk114 => {
                    setremarkk114(remarkk114);
                  }}
                />
              </View>
            </View>

            {/* Form Entry Thirty One Section End  */}

            {/* Form Entry TwentyThree Section End */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                46. Pull box distance from center line
              </Text>
              <View style={styles.FiveEntryPart}>
                <Text style={styles.FirstEntText}>PP</Text>

                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={observedvaluek48 => {
                      setobservedvaluek48(observedvaluek48);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk115 => {
                      setremarkk115(remarkk115);
                    }}
                  />
                </View>
              </View>
              <View style={styles.FiveEntryPart}>
                <Text style={styles.FirstEntText}>NPP</Text>
                <View style={styles.SubObserve}>
                  <Text style={styles.SubObserveText}>
                    Observed value/condition
                  </Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={observedvaluek49 => {
                      setobservedvaluek49(observedvaluek49);
                    }}
                  />
                </View>
                <View style={styles.SubObserveRemark}>
                  <Text style={styles.SubObserveRemarkText}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk116 => {
                      setremarkk116(remarkk116);
                    }}
                  />
                </View>
              </View>
            </View>

            {/* Form Entry TwentyThree Section Start */}

            {/* Form Entry Thirty One Section Start */}

            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                47.Distance between middle door center and pull box{'\n'}
                Bkt center in transverse side(LH/RH)LGS 1698,1702x4
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <TextInput
                  style={styles. FirstEntRemarkInput}
                  onChangeText={observedvaluek50 => {
                    setobservedvaluek50(observedvaluek50);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk117 => {
                    setremarkk117(remarkk117);
                  }}
                />
              </View>
            </View>

            {/* Form Entry Thirty One Section End  */}
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

export default QMF_2011_E;

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
