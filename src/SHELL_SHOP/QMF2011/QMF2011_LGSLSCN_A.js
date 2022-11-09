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
  
  const QMF2011_LGLSCN_A = ({navigation}) => {

    const [checkedk152, setCheckedk152] = useState('');
    const [checkedk153, setCheckedk153] = useState('');
    const [checkedk154, setCheckedk154] = useState('');
    const [checkedk155, setCheckedk155] = useState('');
    const [checkedk156, setCheckedk156] = useState('');
    const [checkedk157, setCheckedk157] = useState('');
    const [checkedk158, setCheckedk158] = useState('');
    const [checkedk159, setCheckedk159] = useState('');
    const [checkedk160, setCheckedk160] = useState('');
    const [checkedk161, setCheckedk161] = useState('');
    const [checkedk162, setCheckedk162] = useState('');
    const [checkedk163, setCheckedk163] = useState('');
    const [checkedk164, setCheckedk164] = useState('');
    const [checkedk165, setCheckedk165] = useState('');
    const [checkedk166, setCheckedk166 ]= useState('');
    const [checkedk167, setCheckedk167] = useState('');
    const [checkedk168, setCheckedk168] = useState('');
    const [checkedk169, setCheckedk169] = useState('');
    const [checkedk170, setCheckedk170] = useState('');
    const [checkedk171, setCheckedk171] = useState('');


    const [observedvaluek76, setobservedvaluek76] = useState('');
    const [observedvaluek78, setobservedvaluek78] = useState('');
    const [observedvaluek79, setobservedvaluek79] = useState('');
    const [observedvaluek80, setobservedvaluek80] = useState('');
    const [observedvaluek81, setobservedvaluek81] = useState('');
    const [observedvaluek82, setobservedvaluek82] = useState('');
    const [observedvaluek83, setobservedvaluek83] = useState('');
    const [observedvaluek84, setobservedvaluek84] = useState('');
    const [observedvaluek85, setobservedvaluek85] = useState('');
    const [observedvaluek86, setobservedvaluek86] = useState('');
    const [observedvaluek87, setobservedvaluek87] = useState('');
    const [observedvaluek88, setobservedvaluek88] = useState('');
    const [observedvaluek89, setobservedvaluek89] = useState('');
    const [observedvaluek90, setobservedvaluek90] = useState('');
    const [observedvaluek91, setobservedvaluek91] = useState('');
    const [observedvaluek92, setobservedvaluek92] = useState('');
    const [observedvaluek93, setobservedvaluek93] = useState('');
    const [observedvaluek94, setobservedvaluek94] = useState('');
   
  
    const [remarkk215, setremarkk215] = useState('');
    const [remarkk216, setremarkk216] = useState('');
    const [remarkk217,setremarkk217] = useState('');
    const [remarkk218, setremarkk218] = useState('');
    const [remarkk219, setremarkk219] = useState('');
    const [remarkk220, setremarkk220] = useState('');
    const [remarkk221, setremarkk221] = useState('');
    const [remarkk222, setremarkk222] = useState('');
    const [remarkk223, setremarkk223] = useState('');
    const [remarkk224, setremarkk224] = useState('');
    const [remarkk225, setremarkk225] = useState('');
    const [remarkk226, setremarkk226] = useState('');
    const [remarkk227, setremarkk227] = useState('')
    const [remarkk228, setremarkk228] = useState('')
    const [remarkk229, setremarkk229] = useState('')
    const [remarkk230, setremarkk230] = useState('')
    const [remarkk231, setremarkk231] = useState('')
    const [remarkk232, setremarkk232] = useState('')
    const [remarkk233, setremarkk233] = useState('')
    const [remarkk234, setremarkk234] = useState('')
    const [remarkk235, setremarkk235] = useState('')
    const [remarkk236, setremarkk236] = useState('');
    const [remarkk237, setremarkk237] = useState('');
    const [remarkk238, setremarkk238] = useState('');
    const [remarkk239, setremarkk239] = useState('');
    const [remarkk240, setremarkk240] = useState('');
    const [remarkk241, setremarkk241] = useState('');
    const [remarkk242, setremarkk242] = useState('');
    const [remarkk243, setremarkk243] = useState('')
    const [remarkk244, setremarkk244] = useState('')
    const [remarkk245, setremarkk245] = useState('')
    const [remarkk246, setremarkk246] = useState('')
    const [remarkk247, setremarkk247] = useState('')
    const [remarkk248, setremarkk248] = useState('')
    const [remarkk249, setremarkk249] = useState('')
    const [remarkk250, setremarkk250] = useState('')
    
  
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
              <Text style={styles.MainFormTagText}>A-UNDERFRAME:</Text>
            </View>
            {/* Form Title End*/}
  
            {/* Form Entery Section Start */}
  
            <View style={styles.MainFormEntry}>
              {/* Form Entry First Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <View style={styles.FiveEntryPart}>
                  <Text style={styles.FirstEntText}>
                    1a. Distance between foot step brackets{' '}
                  </Text>
  
                  <View style={styles.FirstEntObserve}>
                    <Text style={styles.FirstEntObserveText1}>
                      Observed value/condition
                    </Text>
                    <TextInput
                      style={styles.FirstEntRemarkInput}
                      onChangeText={observedvaluek76 => {
                        setobservedvaluek76(observedvaluek76);
                      }}
                    />
                  </View>
                  <View style={styles.FirstEntRemark}>
                    <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                    <TextInput
                      style={styles.FirstEntRemarkInput}
                      onChangeText={remarkk215 => {
                        setremarkk215(remarkk215);
                      }}
                    />
                  </View>
                </View>
                <View style={styles.FiveEntryPart}>
                  <Text style={styles.FirstEntText}>
                    1b. Welding of bio tank bkt{' '}
                  </Text>
                  <View style={styles.FirstEntObserve}>
                    <Text style={styles.FirstEntObserveText1}>
                      Observed value/condition
                    </Text>
                    <TextInput
                      style={styles.FirstEntRemarkInput}
                      onChangeText={observedvaluek77 => {
                        setobservedvaluek77(observedvaluek77);
                      }}
                    />
                  </View>
                  <View style={styles.FirstEntRemark}>
                    <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                    <TextInput
                      style={styles.FirstEntRemarkInput}
                      onChangeText={remarkk216 => {
                        setremarkk216(remarkk216);
                      }}
                    />
                  </View>
                </View>
                <View style={styles.FiveEntryPart}>
                  <Text style={styles.FirstEntText}>
                    1c.alignment of floor support bkt& pillar mounting channel and
                    welding{' '}
                  </Text>
  
                  <View style={styles.FirstEntObserve}>
                    <Text style={styles.FirstEntObserveText1}>
                      Observed value/condition
                    </Text>
                    <TextInput
                      style={styles.FirstEntRemarkInput}
                      onChangeText={observedvaluek78 => {
                        setobservedvaluek78(observedvaluek78);
                      }}
                    />
                  </View>
                  <View style={styles.FirstEntRemark}>
                    <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                    <TextInput
                      style={styles.FirstEntRemarkInput}
                      onChangeText={remarkk216 => {
                        setremarkk216(remarkk216);
                      }}
                    />
                  </View>
                </View>
              </View>
              {/* Form Entry Third Section End */}
  
              {/* Form Entry Fourth Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  2. Fitment & welding of water tank bracket
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>OK</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk152 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk152('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk152 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk152('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk217=> {
                      setremarkk217(remarkk217);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Fourth Section End */}
  
              {/* Form Entry Five Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <View style={styles.FiveEntryPart}>
                  <Text style={styles.FirstEntText}>
                    3a. Provision of LORO pipe BKT
                  </Text>
  
                  <View style={styles.FirstEntObserve}>
                    <Text style={styles.FirstEntObserveText1}>
                      Observed value/condition
                    </Text>
                    <TextInput
                      style={styles.FirstEntRemarkInput}
                      onChangeText={observedvaluek79 => {
                        setobservedvaluek79(observedvaluek79);
                      }}
                    />
                  </View>
                  <View style={styles.FirstEntRemark}>
                    <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                    <TextInput
                      style={styles.FirstEntRemarkInput}
                      onChangeText={remarkk218 => {
                        setremarkk218(remarkk218);
                      }}
                    />
                  </View>
                </View>
                <View style={styles.FiveEntryPart}>
                  <Text style={styles.FirstEntText}>
                    3b. Indicator BKT holes{' '}
                  </Text>
                  <View style={styles.FirstEntObserve}>
                    <Text style={styles.FirstEntObserveText1}>
                      Observed value/condition
                    </Text>
                    <TextInput
                      style={styles.FirstEntRemarkInput}
                      onChangeText={observedvaluek80 => {
                        setobservedvaluek80(observedvaluek80);
                      }}
                    />
                  </View>
                  <View style={styles.FirstEntRemark}>
                    <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                    <TextInput
                      style={styles.FirstEntRemarkInput}
                      onChangeText={remarkk219 => {
                        setremarkk219(remarkk219);
                      }}
                    />
                  </View>
                </View>
                <View style={styles.FiveEntryPart}>
                  <Text style={styles.FirstEntText}>
                    3c. Anti skid valve holes{' '}
                  </Text>
  
                  <View style={styles.FirstEntObserve}>
                    <Text style={styles.FirstEntObserveText1}>
                      Observed value/condition
                    </Text>
                    <TextInput
                      style={styles.FirstEntRemarkInput}
                      onChangeText={observedvaluek81 => {
                        setobservedvaluek81(observedvaluek81);
                      }}
                    />
                  </View>
                  <View style={styles.FirstEntRemark}>
                    <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                    <TextInput
                      style={styles.FirstEntRemarkInput}
                      onChangeText={remarkk220 => {
                        setremarkk220(remarkk220);
                      }}
                    />
                  </View>
                </View>
                <View style={styles.FiveEntryPart}>
                  <Text style={styles.FirstEntText}>
                    3d. Releasing device hole{' '}
                  </Text>
  
                  <View style={styles.FirstEntObserve}>
                    <Text style={styles.FirstEntObserveText1}>
                      Observed value/condition
                    </Text>
                    <TextInput
                      style={styles.FirstEntRemarkInput}
                      onChangeText={observedvaluek82 => {
                        setobservedvaluek82(observedvaluek82);
                      }}>
                      {' '}
                    </TextInput>
                  </View>
                  <View style={styles.FirstEntRemark}>
                    <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                    <TextInput
                      style={styles.FirstEntRemarkInput}
                      onChangeText={remarkk221 => {
                        setremarkk221(remarkk221);
                      }}
                    />
                  </View>
                </View>
              </View>
              {/* Form Entry Five Section End */}
  
              {/* Form Entry Six Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  4. Fitment & welding of water pump bracket
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>OK</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk153 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk153('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk153 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk153('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk222 => {
                      setremarkk222(remarkk222);
                    }}>
                    {' '}
                  </TextInput>
                </View>
              </View>
              {/* Form Entry Six Section End */}
  
              {/* Form Entry Seven Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  5. Fitment & welding of console{' '}
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>OK</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk154 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk154('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk154 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk154('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={observedvaluek83 => {
                      setobservedvaluek83(observedvaluek83);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Seven Section End */}
  
              {/* Form Entry Eight Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  6. Cross member rib with sole bar and member joint welding
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>OK</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk155 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk155('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="third"
                      status={checkedk155 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk155('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk223 => {
                      setremarkk223(remarkk223);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Eight Section End */}
  
              {/* Form Entry Nine Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  7. Welding of pillar mounting member
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>OK</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk156 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk156('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk156 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk156('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk224 => {
                      setremarkk224(remarkk224);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Nine Section End */}
  
              {/* Form Entry Ten Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  8. Guide distance (longitudinal/lateral distance)
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={observedvaluek84 => {
                      setobservedvaluek84(observedvaluek84);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remark225 => {
                      setremarkk225(remark225);
                    }}>
                    {' '}
                  </TextInput>
                </View>
              </View>
              {/* Form Entry Ten Section End */}
  
              {/* Form Entry Eleven Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  9. Pillar mounting distance
                </Text>
              
                <View style={styles.FiveEntryPart}>
                  <Text style={styles.FirstEntText}>LSCN</Text>
  
                  <View style={styles.FirstEntObserve}>
                    <Text style={styles.FirstEntObserveText1}>
                      Observed value/condition
                    </Text>
                    <TextInput
                      style={styles.FirstEntRemarkInput}
                      onChangeText={observedvaluek85 => {
                        setobservedvaluek85(observedvaluek85);
                      }}
                    />
                  </View>
                  <View style={styles.FirstEntRemark}>
                    <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                    <TextInput
                      style={styles.FirstEntRemarkInput}
                      onChangeText={remarkk226 => {
                        setremarkk226(remarkk226);
                      }}
                    />
                  </View>
                </View>
                <View style={styles.FiveEntryPart}>
                  <Text style={styles.FirstEntText}>LGS</Text>
                  <View style={styles.SubObserve}>
                    <Text style={styles.SubObserveText}>
                      Observed value/condition
                    </Text>
                    <TextInput
                      style={styles.SubObserveInput}
                      onChangeText={observedvaluek86 => {
                        setobservedvaluek86(observedvaluek86);
                      }}
                    />
                  </View>
                  <View style={styles.SubObserveRemark}>
                    <Text style={styles.SubObserveRemarkText}>REMARKS</Text>
                    <TextInput
                      style={styles.SubObserveRemarkInput}
                      onChangeText={remarkk227 => {
                        setremarkk227(remarkk227);
                      }}
                    />
                  </View>
                </View>
              </View>
              {/* Form Entry Eleven Section End */}
  
              {/* Form Entry Twelve Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  10. Longitudinal distance between bio tank brackets.
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={observedvaluek87 => {
                      setobservedvaluek87(observedvaluek87);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk228 => {
                      setremarkk228(remarkk228);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Twelve Section End */}
  
              {/* Form Entry Thirteen Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  11. Bio tank bracket between distance outer side for U/F center
                  line (lateral){' '}
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={observedvaluek88 => {
                      setobservedvaluek88(observedvaluek88);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk229 => {
                      setremarkk229(remarkk229);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Thirteen Section End */}
  
              {/* Form Entry Fourteen Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  12. Bio tank bracket between distance inner side for U/F center
                  line (lateral)
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={observedvaluek89 => {
                      setobservedvaluek89(observedvaluek89);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk230 => {
                      setremarkk230(remarkk230);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Fourteen Section End */}
  
              {/* Form Entry Fifteen Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>13. Shunting bracket.</Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={observedvaluek90 => {
                      setobservedvaluek90(observedvaluek90);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk231 => {
                      setremarkk231(remarkk231);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Fifteen Section End */}
  
              {/* Form Entry Sixteen Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>14. Lifting pad.</Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={observedvaluek91 => {
                      setobservedvaluek91(observedvaluek91);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk232 => {
                      setremarkk232(remarkk232);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Sixteen Section End */}
  
              {/* Form Entry Seventeen Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  15. Twine pipe hole and BKT
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>OK</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk157=== 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk157('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk157 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk157('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk233 => {
                      setremarkk233(remarkk233);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Seventeen Section End */}
  
              {/* Form Entry Eighteen Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  16. Both sides covering plate welding.
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>OK</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk158 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk158('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk158 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk158('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk234 => {
                      setremarkk234(remarkk234);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Eighteen Section End */}
  
              {/* Form Entry Nineteen Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  17. Pan head bracket welding.
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>OK</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk159=== 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk159('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk159 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk159('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk235 => {
                      setremarkk235(remarkk235);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Nineteen Section End */}
  
              {/* Form Entry Twenty Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  18. Supporting member on trough sheet welding.
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>OK</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk160 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk160('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk160 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk160('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk236 => {
                      setremarkk236(remarkk236);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Twenty Section End */}
  
              {/* Form Entry Twenty One Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  19. Battery box bracket hole (17 Ø,10 nos.)distance from hole center to center.{'\n'} (LSCN,LGS and diagonal should be equal
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={observedvaluek92 => {
                      setobservedvaluek92(observedvaluek92);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk237 => {
                      setremarkk237(remarkk237);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Twenty One Section End */}
  
              {/* Form Entry Twenty Two Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  20. Transformer bracket hole (14 Ø,8 nos )distance from hole center to center.{'\n'}(LSCN,LGS) in and diagonal should be equal
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={observedvaluek93 => {
                      setobservedvaluek93(observedvaluek93);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk238 => {
                      setremarkk238(remarkk238);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Twenty Two Section End */}
  
              {/* Form Entry Twenty Third Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  21. Air brake module hole (12 Ø) distance from hole center to
                  center. and diagonal should be equal
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={observedvaluek94 => {
                      setobservedvaluek94(observedvaluek94);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk239 => {
                      setremarkk239(remarkk239);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Twenty Third Section End */}
  
              {/* Form Entry Twenty Four Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  22. Feeder junction hole(11 Ø) on head stock{' '}
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                    <RadioButton
                      value="Provided"
                      status={checkedk161 === 'Provided' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk161('Provided')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                    <RadioButton
                      value="Not Provided"
                      status={
                        checkedk161 === 'Not Provided' ? 'checked' : 'unchecked'
                      }
                      onPress={() => setCheckedk161('Not Provided')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk240 => {
                      setremarkk240(remarkk240);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Twenty Four Section End */}
  
              {/* Form Entry Twenty Five Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  23. CBC uncoupling device hole{' '}
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                    <RadioButton
                      value="Provided"
                      status={checkedk162 === 'Provided' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk162('Not Provided')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                    <RadioButton
                      value="Not Provided"
                      status={
                        checkedk162 === 'Not Provided' ? 'checked' : 'unchecked'
                      }
                      onPress={() => setCheckedk162('Not Provided')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk240 => {
                      setremarkk240(remarkk240);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Twenty Five Section End */}
  
              {/* Form Entry Twenty Six Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  24.Drain hole on trough sheet{' '}
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                    <RadioButton
                      value="Provided"
                      status={checkedk163 === 'Provided' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk163('Provided')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                    <RadioButton
                      value="Not Provided"
                      status={
                        checkedk163 === 'Not Provided' ? 'checked' : 'unchecked'
                      }
                      onPress={() => setCheckedk163('Not Provided')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk241 => {
                      setremarkk241(remarkk241);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Twenty Six Section End */}
  
              {/* Form Entry Twenty Seven Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  25. Both side front part area wash washing drain hole{' '}
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                    <RadioButton
                      value="Provided"
                      status={checkedk164 === 'Provided' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk164('Provided')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                    <RadioButton
                      value="Not Provided"
                      status={
                        checkedk164 === 'Not Provided' ? 'checked' : 'unchecked'
                      }
                      onPress={() => setCheckedk164('Not Provided')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk242 => {
                      setremarkk242(remarkk242);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Twenty Seven Section End */}
  
              {/* Form Entry Twenty Eight Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  26. Sole bar joint welding{' '}
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>OK</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk165 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk165('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="NOT OK"
                      status={checkedk165 === 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk165('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk243 => {
                      setremarkk243(remarkk243);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Twenty Eight Section End */}
  
              {/* Form Entry Twenty Nine Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  27. Door corner joint welding and grinding{' '}
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>OK</Text>
                    <RadioButton
                      value="OK"
                      status={checkedk166 === 'OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk166('OK')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                    <RadioButton
                      value="third"
                      status={checkedk166=== 'NOT OK' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk166('NOT OK')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk244 => {
                      setremarkk244(remarkk244);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Twenty Four Section End */}
              {/* Form Entry Twenty Four Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  28. Sensor bracket location.{' '}
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                    <RadioButton
                      value="Provided"
                      status={checkedk167 === 'Provided' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk167('Provided')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                    <RadioButton
                      value="Provided"
                      status={checkedk167 === 'Provided' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk167('Provided')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk245 => {
                      setremarkk245(remarkk245);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry Twenty Four Section End */}
              {/* Form Entry Twenty Four Section Start */}
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  29.Switch box bracket hole (14 Ø,8 nos.){'\n'} distance from
                  hole center to center.{'\n'}(LSCN/LGS) and diagonal should be
                  equal{' '}
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                    <RadioButton
                      value="Provided"
                      status={checkedk168 === 'Provided' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk168('Provided')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                    <RadioButton
                      value="Not Provided"
                      status={
                        checkedk167 === 'Not Provided' ? 'checked' : 'unchecked'
                      }
                      onPress={() => setCheckedk168('Not Provided')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk246 => {
                      setremarkk246(remarkk246);
                    }}
                  />
                </View>
              </View>
  
              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  30.Battery charger bracket hole (14 Ø,6 nos.){'\n'} distance
                  from hole center to center.{'\n'}(LSCN/LGS) and diagonal should
                  be equal
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                    <RadioButton
                      value="Provided"
                      status={checkedk169 === 'Provided' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk169('Provided')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                    <RadioButton
                      value="Not Provided"
                      status={
                        checkedk169 === 'Not Provided' ? 'checked' : 'unchecked'
                      }
                      onPress={() => setCheckedk169('Not Provided')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={setremarkk247 => {
                      setremarkk247(setremarkk247);
                    }}
                  />
                </View>
              </View>





              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  31. Both side Fiba bkt for air spring bogie
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                    <RadioButton
                      value="Provided"
                      status={checkedk170 === 'Provided' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk170('Provided')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                    <RadioButton
                      value="Not Provided"
                      status={
                        checkedk170 === 'Not Provided' ? 'checked' : 'unchecked'
                      }
                      onPress={() => setCheckedk170('Not Provided')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={setremarkk248 => {
                      setremarkk248(setremarkk248);
                    }}
                  />
                </View>
              </View>

              <View style={styles.MainFormFirstEntery}>
                <Text style={styles.FirstEntText}>
                  32. Reservoir tank bkt for air spring bogie
                </Text>
  
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <View style={styles.EntryObserveRadio}>
                    <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                    <RadioButton
                      value="Provided"
                      status={checkedk171 === 'Provided' ? 'checked' : 'unchecked'}
                      onPress={() => setCheckedk171('Provided')}
                    />
                    <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                    <RadioButton
                      value="Not Provided"
                      status={
                        checkedk171 === 'Not Provided' ? 'checked' : 'unchecked'
                      }
                      onPress={() => setCheckedk171('Not Provided')}
                    />
                  </View>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={setremarkk249 => {
                      setremarkk249(setremarkk249);
                    }}
                  />
                </View>
              </View>
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
  
  export default QMF2011_LGLSCN_A;
  
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
  