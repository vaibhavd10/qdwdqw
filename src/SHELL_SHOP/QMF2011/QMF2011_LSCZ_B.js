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
  
  const QMF2011_LSCZ_B = ({navigation}) => {
    const [checkedk99, setCheckedk99] = useState('');
    const [checkedk100, setCheckedk100] = useState('');
    const [checkedk101, setCheckedk101] = useState('');
    const [checkedk102, setCheckedk102] = useState('');
    const [checkedk103, setCheckedk103] = useState('');
    const [checkedk104, setCheckedk104] = useState('');
    const [checkedk105, setCheckedk105] = useState('');
    const [checkedk106, setCheckedk106] = useState('');
    const [checkedk107, setCheckedk107] = useState('');
    const [checkedk108, setCheckedk108] = useState('');
    const [checkedk109, setCheckedk109] = useState('');
    const [checkedk110, setCheckedk110] = useState('');
    const [checkedk111, setCheckedk111] = useState('');
    const [checkedk112, setCheckedk112] = useState('');
    const [checkedk113, setCheckedk113] = useState('');
   
  
    const [observedvaluek61, setobservedvaluek61] = useState('');
    const [observedvaluek62, setobservedvaluek62] = useState('');
    const [observedvaluek63, setobservedvaluek63] = useState('');
    const [observedvaluek64, setobservedvaluek64] = useState('');
    const [observedvaluek65, setobservedvaluek65] = useState('');
    const [observedvaluek66, setobservedvaluek66] = useState('');
    
  
    const [remarkk152, setremarkk152] = useState('');
    const [remarkk153, setremarkk153] = useState('');
    const [remarkk154, setremarkk154] = useState('');
    const [remarkk155, setremarkk155] = useState('');
    const [remarkk156, setremarkk156] = useState('');
    const [remarkk157, setremarkk157] = useState('');
    const [remarkk158, setremarkk158] = useState('');
    const [remarkk159, setremarkk159] = useState('');
    const [remarkk160, setremarkk160] = useState('');
    const [remarkk161,setremarkk161] = useState('');
    const [remarkk162, setremarkk162] = useState('');
    const [remarkk163, setremarkk163] = useState('');
    const [remarkk164, setremarkk164] = useState('');
    const [remarkk165, setremarkk165] = useState('');
    const [remarkk166, setremarkk166] = useState('');
    const [remarkk167, setremarkk167] = useState('');
    const [remarkk168, setremarkk168] = useState('');
    const [remarkk169, setremarkk169] = useState('');
    const [remarkk170, setremarkk170] = useState('');
    const [remarkk171, setremarkk171] = useState('');
    const [remarkk172, setremarkk172] = useState('');
     
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
                      status={checkedk99 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk99('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk99 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk99('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk152 => {
                      setremarkk152(remarkk152);
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
                      status={checkedk100 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk100('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk100 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk100('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk153 => {
                      setremarkk153(remarkk153);
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
                      status={checkedk101 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk101('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk101 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk101('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk154 => {
                      setremarkk154(remarkk154);
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
                      status={checkedk102 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk102('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk102 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk102('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk155 => {
                      setremarkk155(remarkk155);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Six Section End */}
  
              {/* Form Entry Seven Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  5. Dents in side wall
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>OK</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk103 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk103('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk103 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk103('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk156 => {
                      setremarkk156(remarkk156);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Seven Section End */}
  
              {/* Form Entry Eight Section Start */}
             
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
                      status={checkedk105 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk105('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk105 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk105('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk158 => {
                      setremarkk158(remarkk158);
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
                      status={checkedk106 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk106('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk106 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk106('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk159 => {
                      setremarkk159(remarkk159);
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
                      status={checkedk107 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk107('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk107 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk107('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk160 => {
                      setremarkk160(remarkk160);
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
                    status={checkedk108 === 'Provided' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk108('Provided')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                  <RadioButton
                    value="Not Provided"
                    status={
                      checkedk108 === 'Not Provided' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk108('NOT Provided')}
                  /></View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk161 => {
                      setremarkk161(remarkk161);
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
                      status={checkedk109 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk109('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk109 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk109('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk162 => {
                      setremarkk162(remarkk162);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Thirteen Section End */}
  
              {/* Form Entry Fourteen Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  11. Bkt fitment for wider window
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>OK</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk109 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk109('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk109 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk109('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk162 => {
                      setremarkk162(remarkk162);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Fourteen Section End */}
  
              {/* Form Entry Fifteen Section Start */}
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
                    status={checkedk108 === 'Provided' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk108('Provided')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                  <RadioButton
                    value="Not Provided"
                    status={
                      checkedk108 === 'Not Provided' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk108('NOT Provided')}
                  /></View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk161 => {
                      setremarkk161(remarkk161);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Fifteen Section End */}
  
              {/* Form Entry Sixteen Section Start */}
  
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  13. Exhaust profile cutting in Lav. side wall 
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>OK</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk109 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk109('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk109 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk109('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk162 => {
                      setremarkk162(remarkk162);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Sixteen Section End */}
  
              {/* Form Entry Seventeen Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  14. Car line with side wall joint brazing  
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>Done</Text>
                    <RadioButton
                      value="DONE"
                      status={checkedk111 === 'DONE' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk111('DONE')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                    <RadioButton
                      value="NOT DONE"
                      status={checkedk111 === 'NOT DONE' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk111('NOT DONE')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk170 => {
                      setremarkk170(remarkk170);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Seventeen Section End */}
  
              {/* Form Entry Eighteen Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  15. Side wall channel for Wider window
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.flexcorrect}><Text style={styles.FirstEntObserveRadio}>Provided</Text>
                  <RadioButton
                    value="Provided"
                    status={checkedk112 === 'Provided' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk112('Provided')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                  <RadioButton
                    value="Not Provided"
                    status={
                      checkedk112 === 'Not Provided' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk112('Not Provided')}
                  /></View>
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
                  16. Side wall member  joint grinding work
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>Done</Text>
                    <RadioButton
                      value="DONE"
                      status={checkedk111 === 'DONE' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk111('DONE')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                    <RadioButton
                      value="NOT DONE"
                      status={checkedk111 === 'NOT DONE' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk111('NOT DONE')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk170 => {
                      setremarkk170(remarkk170);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Twenty Section End */}
  
              {/* Form Entry Twenty One Section Start */}
            
              {/* Form Entry Twelve Section End */}
  
              {/* Form Entry Thirteen Section Start */}
  
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
  
  export default QMF2011_LSCZ_B;
  
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
  