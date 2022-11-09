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
  
  const QMF2011_LPC_E = ({navigation}) => {
      
    const [checkedk131, setCheckedk131] = useState('');
    const [checkedk132, setCheckedk132] = useState('');
    const [checkedk133, setCheckedk133] = useState('');
    const [checkedk134, setCheckedk134] = useState('');
    const [checkedk135, setCheckedk135] = useState('');
    const [checkedk136, setCheckedk136] = useState('');
    const [checkedk137, setCheckedk137] = useState('');
    const [checkedk138, setCheckedk138] = useState('');
    const [checkedk139, setCheckedk139] = useState('');
    const [checkedk140, setCheckedk140] = useState('');
    const [checkedk141, setCheckedk141] = useState('');
    const [checkedk142, setCheckedk142] = useState('');
    const [checkedk143, setCheckedk143] = useState('');
    const [checkedk144, setCheckedk144] = useState('');
    const [checkedk145, setCheckedk145] = useState('');
    const [checkedk146, setCheckedk146] = useState('');
    const [checkedk147, setCheckedk147] = useState('');
    const [checkedk148, setCheckedk148] = useState('');
    const [checkedk149, setCheckedk149] = useState('');
    const [checkedk150, setCheckedk150] = useState('');
    const [checkedk151, setCheckedk151] = useState(''); 
   
   
  
    
    const [observedvaluek70, setobservedvaluek70] = useState('');
    const [observedvaluek71, setobservedvaluek71] = useState('');
    const [observedvaluek72, setobservedvaluek72] = useState('');
    const [observedvaluek73, setobservedvaluek73] = useState('');
    const [observedvaluek74, setobservedvaluek74] = useState('');
    const [observedvaluek75, setobservedvaluek75] = useState('');
    
  
    
    const [remarkk191, setremarkk191] = useState('');
    const [remarkk192, setremarkk192] = useState('');
    const [remarkk193, setremarkk193] = useState('');
    const [remarkk194, setremarkk194] = useState('');
    const [remarkk195, setremarkk195] = useState('');
    const [remarkk196, setremarkk196] = useState('');
    const [remarkk197, setremarkk197] = useState('');
    const [remarkk198, setremarkk198] = useState('');
    const [remarkk199, setremarkk199] = useState('');
    const [remarkk200, setremarkk200] = useState('');
    const [remarkk201, setremarkk201] = useState('');
    const [remarkk202, setremarkk202] = useState('');
    const [remarkk203, setremarkk203] = useState('');
    const [remarkk204, setremarkk204] = useState('');
    const [remarkk205, setremarkk205] = useState('');
    const [remarkk206, setremarkk206] = useState('');
    const [remarkk207, setremarkk207] = useState('');
    const [remarkk208, setremarkk208] = useState('');
    const [remarkk209, setremarkk209] = useState('');
    const [remarkk210, setremarkk210] = useState('');
    const [remarkk211, setremarkk211] = useState('');
    const [remarkk212, setremarkk212] = useState('');
    const [remarkk213, setremarkk213] = useState('');
    const [remarkk214, setremarkk214] = useState('');
    const [remarkk215, setremarkk215] = useState('');
    
  
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
                      status={checkedk131 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk131('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Ok</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk131 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk131('NOT OK')}
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
                      status={checkedk132 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk132('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Ok</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk132=== 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk132('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk192 => {
                      setremarkk192(remarkk192);
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
                      status={checkedk133 === 'PROVIDED' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk133('PROVIDED')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                    <RadioButton
                      value="NOT PROVIDED"
                      status={
                        checkedk133 === 'NOT PROVIDED' ? 'checked' : 'unchecked'
                      }
                      onPress={() => setCheckedk133('NOT PROVIDED')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk193 => {
                      setremarkk193(remarkk193);
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
                      status={checkedk134 === 'DONE' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk134('DONE')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                    <RadioButton
                      value="NOT DONE"
                      status={checkedk134 === 'NOT DONE' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk134('NOT DONE')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk194=> {
                      setremarkk194(remarkk194);
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
                      status={checkedk135 === 'DONE' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk135('DONE')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                    <RadioButton
                      value="NOT DONE"
                      status={checkedk135 === 'NOT DONE' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk135('NOT DONE')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk195 => {
                      setremarkk195(remarkk195);
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
                      status={checkedk136 === 'DONE' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk136('DONE')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                    <RadioButton
                      value="NOT DONE"
                      status={checkedk136 === 'NOT DONE' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk136('NOT DONE')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk196 => {
                      setremarkk196(remarkk196);
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
                      status={checkedk137== 'DONE' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk137('DONE')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                    <RadioButton
                      value="NOT DONE"
                      status={checkedk137=== 'NOT DONE' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk137('NOT DONE')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk197 => {
                      setremarkk197(remarkk197);
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
                      status={checkedk138 === 'DONE' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk138('DONE')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                    <RadioButton
                      value="NOT DONE"
                      status={checkedk138 === 'NOT DONE' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk138('NOT DONE')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk198=> {
                      setremarkk198(remarkk198);
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
                    style={styles.FirstEntRemarkInput}
                    onChangeText={observedvaluek70 => {
                      setobservedvaluek70(observedvaluek70);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk199 => {
                      setremarkk199(remarkk199);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Eleven Section End */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  10.Roof element with end wall joint level{' '}
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>Ok</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk139 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk139('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Ok</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk139 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk139('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk200 => {
                      setremarkk200(remarkk200);
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
                    style={styles.FirstEntRemarkInput}
                    onChangeText={observedvaluek71 => {
                      setobservedvaluek71(observedvaluek71);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk201 => {
                      setremarkk201(remarkk201);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Thirteen Section Start */}
  
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  12. Lav. Mounting bracket distance (L2T,L3T)
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={observedvaluek72=> {
                      setobservedvaluek72(observedvaluek72);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk202=> {
                      setremarkk202(remarkk202);
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
                      status={checkedk140 === 'DONE' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk140('DONE')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                    <RadioButton
                      value="NOT DONE"
                      status={checkedk140 === 'NOT DONE' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk140('NOT DONE')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk202 => {
                      setremarkk202(remarkk202);
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
                      status={checkedk141 === 'DONE' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk141('DONE')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                    <RadioButton
                      value="NOT DONE"
                      status={checkedk141 === 'NOT DONE' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk141('NOT DONE')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk203 => {
                      setremarkk203(remarkk203);
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
                      status={checkedk142 === 'DONE' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk142('DONE')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                    <RadioButton
                      value="NOT DONE"
                      status={checkedk142 === 'NOT DONE' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk142('NOT DONE')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk204 => {
                      setremarkk204(remarkk204);
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
                      status={checkedk143=== 'DONE' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk143('DONE')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                    <RadioButton
                      value="NOT DONE"
                      status={checkedk143=== 'NOT DONE' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk143('NOT DONE')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk205=> {
                      setremarkk205(remarkk205);
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
                      status={checkedk144 === 'DONE' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk144('DONE')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                    <RadioButton
                      value="NOT DONE"
                      status={checkedk144=== 'NOT DONE' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk144('NOT DONE')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk206 => {
                      setremarkk206(remarkk206);
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
                      status={checkedk145 === 'DONE' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk145('DONE')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                    <RadioButton
                      value="NOT DONE"
                      status={checkedk145 === 'NOT DONE' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk145('NOT DONE')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk207 => {
                      setremarkk207(remarkk207);
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
                      status={checkedk146 === 'DONE' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk146('DONE')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                    <RadioButton
                      value="NOT DONE"
                      status={checkedk146 === 'NOT DONE' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk146('NOT DONE')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk208 => {
                      setremarkk208(remarkk208);
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
                      status={checkedk147 === 'DONE' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk147('DONE')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                    <RadioButton
                      value="NOT DONE"
                      status={checkedk147 === 'NOT DONE' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk147('NOT DONE')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk209=> {
                      setremarkk209(remarkk209);
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
                      status={checkedk148 === 'DONE' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk148('DONE')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                    <RadioButton
                      value="NOT DONE"
                      status={checkedk148 === 'NOT DONE' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk148('NOT DONE')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk210 => {
                      setremarkk210(remarkk210);
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
                      status={checkedk149 === '37' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk149('37')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Ok</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk149 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk149('OK')}
                    />
  
                    <Text style={styles.FirstEntObserveRadio}>Not Ok</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk149 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk149('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk211=> {
                      setremarkk211(remarkk211);
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
                    style={styles.FirstEntRemarkInput}
                    onChangeText={observedvaluek72 => {
                      setobservedvaluek72(observedvaluek72);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk212 => {
                      setremarkk212(remarkk212);
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
                      value="PROVIDED"
                      status={checkedk150 === 'PROVIDED' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk150('PROVIDED')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                    <RadioButton
                      value="NOT PROVIDED"
                      status={
                        checkedk150=== 'NOT PROVIDED' ? 'checked' : 'unchecked'
                      }
                      onPress={() => setCheckedk150('NOT PROVIDED')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk213 => {
                      setremarkk213(remarkk213);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry TwentyTwo Section End */}
  
              {/* Form Entry TwentyThree Section End */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  25.Cross brace height
                </Text>
                <View style={styles.FiveEntryPart}>
                  <Text style={styles.FirstEntText}>LH</Text>
  
                  <View style={styles.FirstEntObserve}>
                    <Text style={styles.FirstEntObserveText1}>
                      Observed value/condition
                    </Text>
                    <TextInput
                      style={styles.FirstEntRemarkInput}
                      onChangeText={observedvaluek73=> {
                        setobservedvaluek73(observedvaluek73);
                      }}
                    />
                  </View>
                  <View style={styles.FirstEntRemark}>
                    <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                    <TextInput
                      style={styles.FirstEntRemarkInput}
                      onChangeText={remarkk214 => {
                        setremarkk214(remarkk214);
                      }}
                    />
                  </View>
                </View>
                <View style={styles.FiveEntryPart}>
                  <Text style={styles.FirstEntText}>RH</Text>
                  <View style={styles.SubObserve}>
                    <Text style={styles.SubObserveText}>
                      Observed value/condition
                    </Text>
                    <TextInput
                      style={styles.FirstEntRemarkInput}
                      onChangeText={observedvaluek74 => {
                        setobservedvaluek74(observedvaluek74);
                      }}
                    />
                  </View>
                  <View style={styles.SubObserveRemark}>
                    <Text style={styles.SubObserveRemarkText}>REMARKS</Text>
                    <TextInput
                      style={styles.FirstEntRemarkInput}
                      onChangeText={remarkk215=> {
                        setremarkk215(remarkk215);
                      }}
                    />
                  </View>
                </View>
              </View>


              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  26. 30L auxiliary Water tank bracket welding 
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    
                    <Text style={styles.FirstEntObserveRadio}>Ok</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk149 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk149('OK')}
                    />
  
                    <Text style={styles.FirstEntObserveRadio}>Not Ok</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk149 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk149('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk211=> {
                      setremarkk211(remarkk211);
                    }}
                  />
                </View>
              </View>
              
  
              {/* Form Entry TwentyThree Section Start */}
  
              {/* Form Entry TwentyFour Section Start */}
             
              {/* Form Entry TwentyFour Section End */}
  
              {/* Form Entry TwentyFive Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  27. Roof height from trough sheet to roof sheet (LPC)
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk151 === 'PROVIDED' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk151('PROVIDED')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                    <RadioButton
                      value="NOT PROVIDED"
                      status={
                        checkedk151 === 'NOT PROVIDED' ? 'checked' : 'unchecked'
                      }
                      onPress={() => setCheckedk151('NOT PROVIDED')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk217 => {
                      setremarkk217(remarkk217);
                    }}
                  />
                </View>
              </View>

               {/* Form Entry Twenty Eight section start */}

               <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>28 .Sliding door height and width</Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={observedvaluek72 => {
                      setobservedvaluek72(observedvaluek72);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk212 => {
                      setremarkk212(remarkk212);
                    }}
                  />
                </View>
              </View>

  {/* Form Entry Twenty Eight section End */}
                     

                      {/* Form Entry Twenty Nine section start */}

                      <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  29. Both side Sliding door conduction
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    
                    <Text style={styles.FirstEntObserveRadio}>Ok</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk149 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk149('OK')}
                    />
  
                    <Text style={styles.FirstEntObserveRadio}>Not Ok</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk149 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk149('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk211=> {
                      setremarkk211(remarkk211);
                    }}
                  />
                </View>


              </View>


                {/* Form Entry Twenty Nine section End */}


{/* Form Entry Thirty section start */}

               <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>30.  Sliding door stopper</Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                    <RadioButton
                      value="PROVIDED"
                      status={checkedk150 === 'PROVIDED' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk150('PROVIDED')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                    <RadioButton
                      value="NOT PROVIDED"
                      status={
                        checkedk150=== 'NOT PROVIDED' ? 'checked' : 'unchecked'
                      }
                      onPress={() => setCheckedk150('NOT PROVIDED')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk213 => {
                      setremarkk213(remarkk213);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Thirty One section start */}

              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>31.  Both side Duct bkt  </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                    <RadioButton
                      value="PROVIDED"
                      status={checkedk150 === 'PROVIDED' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk150('PROVIDED')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                    <RadioButton
                      value="NOT PROVIDED"
                      status={
                        checkedk150=== 'NOT PROVIDED' ? 'checked' : 'unchecked'
                      }
                      onPress={() => setCheckedk150('NOT PROVIDED')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk213 => {
                      setremarkk213(remarkk213);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Thirty One Section End  */}


{/* Form Entry Thirty Two Section End  */}


              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>32. D.B(1230 mm) &C.N bkt  </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                    <RadioButton
                      value="PROVIDED"
                      status={checkedk150 === 'PROVIDED' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk150('PROVIDED')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                    <RadioButton
                      value="NOT PROVIDED"
                      status={
                        checkedk150=== 'NOT PROVIDED' ? 'checked' : 'unchecked'
                      }
                      onPress={() => setCheckedk150('NOT PROVIDED')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk213 => {
                      setremarkk213(remarkk213);
                    }}
                  />
                </View>
              </View>


{/* Form Entry Thirty Two Section End  */}



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
  
  export default QMF2011_LPC_E;
  
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
  