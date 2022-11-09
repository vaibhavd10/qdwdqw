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
  
  const QMF2011_LGLSCN_B = ({navigation}) => {
    const [checkedk172, setCheckedk172] = useState('');
    const [checkedk173, setCheckedk173] = useState('');
    const [checkedk174, setCheckedk174] = useState('');
    const [checkedk175, setCheckedk175] = useState('');
    const [checkedk176, setCheckedk176] = useState('');
    const [checkedk177, setCheckedk177] = useState('');
    const [checkedk178, setCheckedk178] = useState('');
    const [checkedk179, setCheckedk179] = useState('');
    const [checkedk180, setCheckedk180] = useState('');
    const [checkedk181, setCheckedk181] = useState('');
    const [checkedk182, setCheckedk182] = useState('');
    const [checkedk183, setCheckedk183] = useState('');
    const [checkedk184, setCheckedk184] = useState('');
    const [checkedk185, setCheckedk185] = useState('');
    const [checkedk186, setCheckedk186] = useState('');
    const [checkedk187, setCheckedk187] = useState('');
    const [checkedk188, setCheckedk188] = useState('');
    const [checkedk189, setCheckedk189] = useState('');
   
  
    const [observedvaluek95, setobservedvaluek95] = useState('');
    const [observedvaluek62, setobservedvaluek62] = useState('');
    const [observedvaluek63, setobservedvaluek63] = useState('');
    const [observedvaluek64, setobservedvaluek64] = useState('');
    const [observedvaluek65, setobservedvaluek65] = useState('');
    const [observedvaluek66, setobservedvaluek66] = useState('');
    
  
    const [remarkk247, setremarkk247] = useState('')
    const [remarkk248, setremarkk248] = useState('')
    const [remarkk249, setremarkk249] = useState('')
    const [remarkk250, setremarkk250] = useState('')
    const [remarkk251, setremarkk251] = useState('')
    const [remarkk252, setremarkk252] = useState('')
    const [remarkk253, setremarkk253] = useState('')
    const [remarkk254, setremarkk254] = useState('')
    const [remarkk255, setremarkk255] = useState('')
    const [remarkk256, setremarkk256] = useState('')
    const [remarkk257, setremarkk257] = useState('')
    const [remarkk258, setremarkk258] = useState('')
  

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
            <View style={styles.MainFormTag}>
              <Text style={styles.MainFormTagText}>B-SIDEWALL:</Text>
            </View>
            {/* Form Title End*/}
  
            {/* Form Entery Section Start */}
  
            <View style={styles.MainFormEntry}>
              {/* Form Entry First Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  1. Side wall laser joint (visually check)
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>OK</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk172 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk172('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk172 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk172('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk247 => {
                      setremarkk247(remarkk247);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Third Section End */}
  
              {/* Form Entry Fourth Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  2. welding & grinding of Side wall sheet joint ***
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>OK</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk173 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk173('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk173 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk173('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk248 => {
                      setremarkk248(remarkk248);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Fourth Section End */}
  
              {/* Form Entry Five Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  3.Condition of window profile
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>OK</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk174 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk174('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk174 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk174('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk249 => {
                      setremarkk249(remarkk249);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Five Section End */}
  
              {/* Form Entry Six Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  4. Welding of vertical & horizontal members ***
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>OK</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk175 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk175('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk175 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk175('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk250 => {
                      setremarkk250(remarkk250);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Six Section End */}
  
              {/* Form Entry Seven Section Start */}
             
              {/* Form Entry Seven Section End */}
  
              {/* Form Entry Eight Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>5. Dents in side wall</Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>OK</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk176 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk176('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="third"
                      status={checkedk176 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk176('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk251 => {
                      setremarkk251(remarkk251);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Eight Section End */}
  
              {/* Form Entry Nine Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>6. Condition of RWG</Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>OK</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk177 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk177('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk177 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk177('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk252 => {
                      setremarkk252(remarkk252);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Nine Section End */}
  
              {/* Form Entry Ten Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  7.Side wall and Lav. side wall with member spots welding
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>OK</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk178=== 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk178('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk178 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk178('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk253 => {
                      setremarkk253(remarkk253);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Ten Section End */}
  
              {/* Form Entry Eleven Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  8.Roof flange joint leveling and welding
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>OK</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk179 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk179('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk179 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk179('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk254 => {
                      setremarkk254(remarkk254);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Eleven Section End */}
  
              {/* Form Entry Twelve Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  9. Conduit hole on roof flange
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.flexcorrect}><Text style={styles.FirstEntObserveRadio}>Provided</Text>
                  <RadioButton
                    value="Provided"
                    status={checkedk180 === 'Provided' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk180('Provided')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                  <RadioButton
                    value="Not Provided"
                    status={
                      checkedk180=== 'Not Provided' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk180('NOT Provided')}
                  /></View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk255 => {
                      setremarkk255(remarkk255);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Twelve Section End */}
  
              {/* Form Entry Thirteen Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  10. Car line joint welding and leakage test
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>OK</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk181 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk181('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk181 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk181('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk256 => {
                      setremarkk256(remarkk256);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Thirteen Section End */}
  
              {/* Form Entry Fourteen Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  11. Window seal joint elevation and leakage test
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>OK</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk182 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk182('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk182 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk182('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk257=> {
                      setremarkk257(remarkk257);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Fourteen Section End */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  12. Power panel indictor hole at Lav. side wall(PP side)
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.flexcorrect}><Text style={styles.FirstEntObserveRadio}>Provided</Text>
                  <RadioButton
                    value="Provided"
                    status={checkedk183 === 'Provided' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk183('Provided')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                  <RadioButton
                    value="Not Provided"
                    status={
                      checkedk183 === 'Not Provided' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk183('NOT Provided')}
                  /></View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk258 => {
                      setremarkk258(remarkk258);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Fifteen Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  13. Exhaust profile cutting in Lav. side wall( LSCN/LGS)
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>OK</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk184 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk184('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk184 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk184('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk259 => {
                      setremarkk259(remarkk259);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Fifteen Section End */}
  
              {/* Form Entry Sixteen Section Start */}
  
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  14. Wogo bkt for electrical(LSCN/LGS)
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.flexcorrect}><Text style={styles.FirstEntObserveRadio}>Provided</Text>
                  <RadioButton
                    value="Provided"
                    status={checkedk185=== 'Provided' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk185('Provided')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                  <RadioButton
                    value="Not Provided"
                    status={
                      checkedk185 === 'Not Provided' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk185('NOT Provided')}
                  /></View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk260 => {
                      setremarkk260(remarkk260);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Sixteen Section End */}
  
              {/* Form Entry Seventeen Section Start */}
           
              {/* Form Entry Seventeen Section End */}
  
              {/* Form Entry Eighteen Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  15. Car line with side wall joint brazing
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.flexcorrect}><Text style={styles.FirstEntObserveRadio}>DONE</Text>
                  <RadioButton
                    value="DONE"
                    status={checkedk186 === 'DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk186('DONE')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>DONE</Text>
                  <RadioButton
                    value="DONE"
                    status={
                      checkedk186 === 'DONE' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk186('Not Provided')}
                  /></View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk261 => {
                      setremarkk261(remarkk261);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Eighteen Section End */}
  
              {/* Form Entry Nineteen Section Start */}
              {/* <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  17. Car line with side wall joint brazing
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <Text style={styles.FirstEntObserveRadio}>DONE</Text>
                  <RadioButton
                    value="DONE"
                    status={checkedk116 === 'DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk116('DONE')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT DONE</Text>
                  <RadioButton
                    value="NOT DONE"
                    status={checkedk116 === 'NOT DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk116('NOT DONE')}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk171 => {
                      setremarkk171(remarkk171);
                    }}
                  />
                </View>
              </View> */}
              {/* Form Entry Nineteen Section End */}
  
              {/* Form Entry Twenty Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  16. Side wall channel for Wider window
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.flexcorrect}><Text style={styles.FirstEntObserveRadio}>Provided</Text>
                  <RadioButton
                    value="Provided"
                    status={checkedk187=== 'Provided' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk187('Provided')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                  <RadioButton
                    value="Not Provided"
                    status={
                      checkedk187 === 'Not Provided' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk187('NOT Provided')}
                  /></View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk262 => {
                      setremarkk262(remarkk262);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Twenty Section End */}
  
              {/* Form Entry Twenty One Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  17. Side wall member  joint grinding work
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.flexcorrect}><Text style={styles.FirstEntObserveRadio}>DONE</Text>
                  <RadioButton
                    value="DONE"
                    status={checkedk188 === 'DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk188('DONE')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>DONE</Text>
                  <RadioButton
                    value="DONE"
                    status={
                      checkedk188 === 'DONE' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk188('Not Provided')}
                  /></View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk263 => {
                      setremarkk263(remarkk263);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Twelve Section End */}
  
              {/* Form Entry Thirteen Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  18. Mounting angle for lower luggage rake bkt height  {'\n'}from bottom of side wall(LGS in without 
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={observedvaluek95 => {
                      setobservedvaluek95(observedvaluek95);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk264 => {
                      setremarkk264(remarkk264);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Twenty Two Section End */}
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
  
  export default QMF2011_LGLSCN_B;
  
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
  