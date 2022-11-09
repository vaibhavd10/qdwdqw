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

const QMF2011_L2TL3T = ({navigation}) => {
  const [checkedk81, setCheckedk81] = useState('');
  const [checkedk82, setCheckedk82] = useState('');
  const [checkedk83, setCheckedk83] = useState('');
  const [checkedk84, setCheckedk84] = useState('');
  const [checkedk85, setCheckedk85] = useState('');
  const [checkedk86, setCheckedk86] = useState('');
  const [checkedk87, setCheckedk87] = useState('');
  const [checkedk88, setCheckedk88] = useState('');
  const [checkedk89, setCheckedk89] = useState('');
  const [checkedk90, setCheckedk90] = useState('');
  const [checkedk91, setCheckedk91] = useState('');
  const [checkedk92, setCheckedk92] = useState('');
  const [checkedk93, setCheckedk93] = useState('');
  const [checkedk94, setCheckedk94] = useState('');
  const [checkedk95, setCheckedk95] = useState('');
  const [checkedk96, setCheckedk96] = useState('');
  const [checkedk97, setCheckedk97] = useState('');
  const [checkedk98, setCheckedk98] = useState('');


  const [observedvaluek41, setobservedvaluek41] = useState('');
  const [observedvaluek42, setobservedvaluek42] = useState('');
  const [observedvaluek43, setobservedvaluek43] = useState('');
  const [observedvaluek44, setobservedvaluek44] = useState('');
  const [observedvaluek45, setobservedvaluek45] = useState('');
  const [observedvaluek46, setobservedvaluek46] = useState('');
  const [observedvaluek47, setobservedvaluek47] = useState('');
  const [observedvaluek48, setobservedvaluek48] = useState('');
  const [observedvaluek49, setobservedvaluek49] = useState('');
  const [observedvaluek50, setobservedvaluek50] = useState('');
  const [observedvaluek51, setobservedvaluek51] = useState('');
  const [observedvaluek52, setobservedvaluek52] = useState('');
  const [observedvaluek53, setobservedvaluek53] = useState('');
  const [observedvaluek54, setobservedvaluek54] = useState('');
  const [observedvaluek55, setobservedvaluek55] = useState('');
  const [observedvaluek56, setobservedvaluek56] = useState('');
  const [observedvaluek57, setobservedvaluek57] = useState('');
  const [observedvaluek58, setobservedvaluek58] = useState('');
  const [observedvaluek59, setobservedvaluek59] = useState('');
  const [observedvaluek60, setobservedvaluek60] = useState('');

  const [remarkk118, setremarkk118] = useState('');
  const [remarkk119, setremarkk119] = useState('');
  const [remarkk120, setremarkk120] = useState('');
  const [remarkk121, setremarkk121] = useState('');
  const [remarkk122, setremarkk122] = useState('');
  const [remarkk123, setremarkk123] = useState('');
  const [remarkk124, setremarkk124] = useState('');
  const [remarkk125, setremarkk125] = useState('');
  const [remarkk126, setremarkk126] = useState('');
  const [remarkk127, setremarkk127] = useState('');
  const [remarkk128, setremarkk128] = useState('');
  const [remarkk129, setremarkk129] = useState('');
  const [remarkk130, setremarkk130] = useState('');
  const [remarkk131, setremarkk131] = useState('');
  const [remarkk132, setremarkk132] = useState('');
  const [remarkk133, setremarkk133] = useState('');
  const [remarkk134, setremarkk134] = useState('');
  const [remarkk135, setremarkk135] = useState('');
  const [remarkk136, setremarkk136] = useState('');
  const [remarkk137, setremarkk137] = useState('');
  const [remarkk138, setremarkk138] = useState('');
  const [remarkk139, setremarkk139] = useState('');
  const [remarkk140, setremarkk140] = useState('');
  const [remarkk141, setremarkk141] = useState('');
  const [remarkk142, setremarkk142] = useState('');
  const [remarkk143, setremarkk143] = useState('');
  const [remarkk144, setremarkk144] = useState('');
  const [remarkk145, setremarkk145] = useState('');
  const [remarkk146, setremarkk146] = useState('');
  const [remarkk147, setremarkk147] = useState('');
  const [remarkk148, setremarkk148] = useState('');
  const [remarkk149, setremarkk149] = useState('');
  const [remarkk150, setremarkk150] = useState('');
  const [remarkk151, setremarkk151] = useState('');
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
                    onChangeText={observedvaluek41 => {
                      setobservedvaluek41(observedvaluek41);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk118 => {
                      setremarkk118(remarkk118);
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
                    onChangeText={observedvaluek42 => {
                      setobservedvaluek42(observedvaluek42);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk119 => {
                      setremarkk119(remarkk119);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry First Section Start */}
              <View style={styles.FiveEntryPart}>
                <Text style={styles.FirstEntText}>
                  1c. Welding of bio tank bkt{' '}
                </Text>
                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={observedvaluek43 => {
                      setobservedvaluek43(observedvaluek43);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk120 => {
                      setremarkk120(remarkk120);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry First Section Start */}
              <View style={styles.FiveEntryPart}>
                <Text style={styles.FirstEntText}>
                  1d.alignment of floor support bkt& pillar mounting channel and
                  welding{' '}
                </Text>

                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={observedvaluek44 => {
                      setobservedvaluek44(observedvaluek44);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk121 => {
                      setremarkk121(remarkk121);
                    }}
                  />
                </View>
              </View>
              {/* Form Entry First Section Start */}
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
                    status={checkedk81 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk81('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk81 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk81('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk122 => {
                    setremarkk122(remarkk122);
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
                    onChangeText={observedvaluek45 => {
                      setobservedvaluek45(observedvaluek45);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk123 => {
                      setremarkk123(remarkk123);
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
                    onChangeText={observedvaluek46 => {
                      setobservedvaluek46(observedvaluek46);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk124 => {
                      setremarkk124(remarkk124);
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
                    onChangeText={observedvaluek47 => {
                      setobservedvaluek47(observedvaluek47);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk125 => {
                      setremarkk125(remarkk125);
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
                    onChangeText={observedvaluek48 => {
                      setobservedvaluek48(observedvaluek48);
                    }}>
                    {' '}
                  </TextInput>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk126 => {
                      setremarkk126(remarkk126);
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
                    status={checkedk82 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk82('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk82 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk82('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk127 => {
                    setremarkk127(remarkk127);
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
                    status={checkedk83 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk83('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk83 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk83('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={observedvaluek49 => {
                    setobservedvaluek49(observedvaluek49);
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
                    status={checkedk84 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk84('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="third"
                    status={checkedk84 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk84('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk128 => {
                    setremarkk128(remarkk128);
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
                    status={checkedk85 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk85('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk85 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk85('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk129 => {
                    setremarkk129(remarkk129);
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
                  onChangeText={observedvaluek50 => {
                    setobservedvaluek50(observedvaluek50);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remark130 => {
                    setremarkk130(remark130);
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
                <Text style={styles.FirstEntText}>3T</Text>

                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={observedvaluek51 => {
                      setobservedvaluek51(observedvaluek51);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk131 => {
                      setremarkk131(remarkk131);
                    }}
                  />
                </View>
              </View>
              <View style={styles.FiveEntryPart}>
                <Text style={styles.FirstEntText}>2T</Text>
                <View style={styles.SubObserve}>
                  <Text style={styles.SubObserveText}>
                    Observed value/condition
                  </Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={observedvaluek52 => {
                      setobservedvaluek52(observedvaluek52);
                    }}
                  />
                </View>
                <View style={styles.SubObserveRemark}>
                  <Text style={styles.SubObserveRemarkText}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk132 => {
                      setremarkk132(remarkk132);
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
                  onChangeText={observedvaluek53 => {
                    setobservedvaluek53(observedvaluek53);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk133 => {
                    setremarkk133(remarkk133);
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
                  onChangeText={observedvaluek54 => {
                    setobservedvaluek54(observedvaluek54);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk134 => {
                    setremarkk134(remarkk134);
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
                  onChangeText={observedvaluek55 => {
                    setobservedvaluek55(observedvaluek55);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk135 => {
                    setremarkk135(remarkk135);
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
                  onChangeText={observedvaluek56 => {
                    setobservedvaluek56(observedvaluek56);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk136 => {
                    setremarkk136(remarkk136);
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
                  onChangeText={observedvaluek57 => {
                    setobservedvaluek57(observedvaluek57);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk137 => {
                    setremarkk137(remarkk137);
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
                    status={checkedk86 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk86('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk86 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk86('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk138 => {
                    setremarkk138(remarkk138);
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
                    status={checkedk87 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk87('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk87 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk87('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk139 => {
                    setremarkk139(remarkk139);
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
                    status={checkedk88 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk88('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk88 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk88('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk140 => {
                    setremarkk140(remarkk140);
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
                    status={checkedk89 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk89('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk89 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk89('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk141 => {
                    setremarkk141(remarkk141);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Twenty Section End */}

            {/* Form Entry Twenty One Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                19. Battery box bracket hole (18 Ø) distance from hole center to
                center. (L2T,L3T)and diagonal should be equal
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={observedvaluek58 => {
                    setobservedvaluek58(observedvaluek58);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk142 => {
                    setremarkk142(remarkk142);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Twenty One Section End */}

            {/* Form Entry Twenty Two Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                20. Transformer bracket hole (18 Ø,8 nos. ) distance from hole
                center to center. (2T,3T) and diagonal should be equal
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={observedvaluek59 => {
                    setobservedvaluek59(observedvaluek59);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk143 => {
                    setremarkk143(remarkk143);
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
                  onChangeText={observedvaluek60 => {
                    setobservedvaluek60(observedvaluek60);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk144 => {
                    setremarkk144(remarkk144);
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
                    status={checkedk90 === 'Provided' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk90('Provided')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                  <RadioButton
                    value="Not Provided"
                    status={
                      checkedk90 === 'Not Provided' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk90('Not Provided')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk145 => {
                    setremarkk145(remarkk145);
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
                    status={checkedk91 === 'Provided' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk91('Not Provided')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                  <RadioButton
                    value="Not Provided"
                    status={
                      checkedk91 === 'Not Provided' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk91('Not Provided')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk146 => {
                    setremarkk146(remarkk146);
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
                    status={checkedk92 === 'Provided' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk92('Provided')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                  <RadioButton
                    value="Not Provided"
                    status={
                      checkedk92 === 'Not Provided' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk92('Not Provided')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk147 => {
                    setremarkk147(remarkk147);
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
                    status={checkedk93 === 'Provided' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk93('Provided')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                  <RadioButton
                    value="Not Provided"
                    status={
                      checkedk93 === 'Not Provided' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk93('Not Provided')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk148 => {
                    setremarkk148(remarkk148);
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
                    status={checkedk94 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk94('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk94 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk94('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk149 => {
                    setremarkk149(remarkk149);
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
                    status={checkedk95 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk95('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="third"
                    status={checkedk95 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk95('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk150 => {
                    setremarkk150(remarkk150);
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
                    status={checkedk96 === 'Provided' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk96('Provided')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                  <RadioButton
                    value="Provided"
                    status={checkedk96 === 'Provided' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk96('Provided')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk151 => {
                    setremarkk151(remarkk151);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Twenty Four Section End */}
            {/* Form Entry Twenty Four Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                29. Both side Fiba bkt for air spring bogie
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                  <RadioButton
                    value="Provided"
                    status={checkedk97 === 'Provided' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk97('Provided')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                  <RadioButton
                    value="Not Provided"
                    status={
                      checkedk97 === 'Not Provided' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk97('Not Provided')}
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

            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                30. Reservoir tank bkt for air spring bogie
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                  <RadioButton
                    value="Provided"
                    status={checkedk98 === 'Provided' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk98('Provided')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                  <RadioButton
                    value="Not Provided"
                    status={
                      checkedk98 === 'Not Provided' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk98('Not Provided')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={setremarkk153 => {
                    setremarkk153(setremarkk153);
                  }}
                />
              </View>
            </View>

            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                31. Curve roll stopper bktr
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={observedvaluek61 => {
                    setobservedvaluek61(observedvaluek61);
                  }}
                />
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

            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                32. Feeder pipe clamping bkt hole distance
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={observedvaluek62 => {
                    setobservedvaluek62(observedvaluek62);
                  }}
                />
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

export default QMF2011_L2TL3T;

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
