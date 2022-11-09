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

const QMF2011_A = ({navigation}) => {
  const [checkedk1, setCheckedk1] = useState('');
  const [checkedk2, setCheckedk2] = useState('');
  const [checkedk3, setCheckedk3] = useState('');
  const [checkedk4, setCheckedk4] = useState('');
  const [checkedk5, setCheckedk5] = useState('');
  const [checkedk6, setCheckedk6] = useState('');
  const [checkedk7, setCheckedk7] = useState('');
  const [checkedk8, setCheckedk8] = useState('');
  const [checkedk9, setCheckedk9] = useState('');
  const [checkedk10, setCheckedk10] = useState('');
  const [checkedk11, setCheckedk11] = useState('');
  const [checkedk12, setCheckedk12] = useState('');
  const [checkedk13, setCheckedk13] = useState('');
  const [checkedk14, setCheckedk14] = useState('');
  const [checkedk15, setCheckedk15] = useState('');
  const [checkedk16, setCheckedk16] = useState('');
  const [checkedk17, setCheckedk17] = useState('');

  const [observedvaluek1, setobservedvaluek1] = useState('');
  const [observedvaluek2, setobservedvaluek2] = useState('');
  const [observedvaluek3, setobservedvaluek3] = useState('');
  const [observedvaluek4, setobservedvaluek4] = useState('');
  const [observedvaluek5, setobservedvaluek5] = useState('');
  const [observedvaluek6, setobservedvaluek6] = useState('');
  const [observedvaluek7, setobservedvaluek7] = useState('');
  const [observedvaluek8, setobservedvaluek8] = useState('');
  const [observedvaluek9, setobservedvaluek9] = useState('');
  const [observedvaluek10, setobservedvaluek10] = useState('');
  const [observedvaluek11, setobservedvaluek11] = useState('');
  const [observedvaluek12, setobservedvaluek12] = useState('');
  const [observedvaluek13, setobservedvaluek13] = useState('');
  const [observedvaluek14, setobservedvaluek14] = useState('');
  const [observedvaluek15, setobservedvaluek15] = useState('');
  const [observedvaluek16, setobservedvaluek16] = useState('');
  const [observedvaluek17, setobservedvaluek17] = useState('');
  const [observedvaluek18, setobservedvaluek18] = useState('');
  const [observedvaluek19, setobservedvaluek19] = useState('');
  const [observedvaluek20, setobservedvaluek20] = useState('');

  const [remarkk1, setremarkk1] = useState('');
  const [remarkk2, setremarkk2] = useState('');
  const [remarkk3, setremarkk3] = useState('');
  const [remarkk4, setremarkk4] = useState('');
  const [remarkk5, setremarkk5] = useState('');
  const [remarkk6, setremarkk6] = useState('');
  const [remarkk7, setremarkk7] = useState('');
  const [remarkk8, setremarkk8] = useState('');
  const [remarkk9, setremarkk9] = useState('');
  const [remarkk10, setremarkk10] = useState('');
  const [remarkk11, setremarkk11] = useState('');
  const [remarkk12, setremarkk12] = useState('');
  const [remarkk13, setremarkk13] = useState('');
  const [remarkk14, setremarkk14] = useState('');
  const [remarkk15, setremarkk15] = useState('');
  const [remarkk16, setremarkk16] = useState('');
  const [remarkk17, setremarkk17] = useState('');
  const [remarkk18, setremarkk18] = useState('');
  const [remarkk19, setremarkk19] = useState('');
  const [remarkk20, setremarkk20] = useState('');
  const [remarkk21, setremarkk21] = useState('');
  const [remarkk22, setremarkk22] = useState('');
  const [remarkk23, setremarkk23] = useState('');
  const [remarkk24, setremarkk24] = useState('');
  const [remarkk25, setremarkk25] = useState('');
  const [remarkk26, setremarkk26] = useState('');
  const [remarkk27, setremarkk27] = useState('');
  const [remarkk28, setremarkk28] = useState('');
  const [remarkk29, setremarkk29] = useState('');
  const [remarkk30, setremarkk30] = useState('');
  const [remarkk31, setremarkk31] = useState('');
  const [remarkk32, setremarkk32] = useState('');
  const [remarkk33, setremarkk33] = useState('');
  const [remarkk34, setremarkk34] = useState('');
   
  const Submit=()=>{

    navigation.navigate('QMF List')
  }
  return (
    <ScrollView>
      <View style={styles.Maincontainer}>
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

        <View style={styles.MainForm}>
          
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
                    onChangeText={observedvaluek1 => {
                      setobservedvaluek1(observedvaluek1);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk1 => {
                      setremarkk1(remarkk1);
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
                    onChangeText={observedvaluek2 => {
                      setobservedvaluek2(observedvaluek2);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk2 => {
                      setremarkk2(remarkk2);
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
                    onChangeText={observedvaluek3 => {
                      setobservedvaluek3(observedvaluek3);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk3 => {
                      setremarkk3(remarkk3);
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
                    status={checkedk1 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk1('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk1 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk1('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk4 => {
                    setremarkk4(remarkk4);
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
                    onChangeText={observedvaluek4 => {
                      setobservedvaluek4(observedvaluek4);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk5 => {
                      setremarkk5(remarkk5);
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
                    onChangeText={observedvaluek5 => {
                      setobservedvaluek5(observedvaluek5);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk6 => {
                      setremarkk6(remarkk6);
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
                    onChangeText={observedvaluek6 => {
                      setobservedvaluek6(observedvaluek6);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk7 => {
                      setremarkk7(remarkk7);
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
                    onChangeText={observedvaluek7 => {
                      setobservedvaluek7(observedvaluek7);
                    }}>
                    {' '}
                  </TextInput>
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk8 => {
                      setremarkk8(remarkk8);
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
                    status={checkedk2 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk2('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk2 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk2('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk9 => {
                    setremarkk9(remarkk9);
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
                    status={checkedk3 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk3('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk3 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk3('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={observedvaluek8 => {
                    setobservedvaluek8(observedvaluek8);
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
                    status={checkedk4 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk4('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="third"
                    status={checkedk4 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk4('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk10 => {
                    setremarkk10(remarkk10);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Eight Section End */}

            {/* Form Entry Nine Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                7. Lav. profile cutting for commode in Lav.-2,3,4{' '}
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                  <RadioButton
                    value="Provided"
                    status={checkedk10 === 'Provided' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk10('Provided')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                  <RadioButton
                    value="Not Provided"
                    status={
                      checkedk10 === 'Not Provided' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk10('Not Provided')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk29 => {
                    setremarkk29(remarkk29);
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
                  style={styles. FirstEntRemarkInput}
                  onChangeText={observedvaluek8 => {
                    setobservedvaluek8(observedvaluek8);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remark12 => {
                    setremarkk12(remark12);
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
                    onChangeText={observedvaluek9 => {
                      setobservedvaluek9(observedvaluek9);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk13 => {
                      setremarkk13(remarkk13);
                    }}
                  />
                </View>
              </View>
              <View style={styles.FiveEntryPart}>
                <Text style={styles.FirstEntText}>4T</Text>
                <View style={styles.SubObserve}>
                  <Text style={styles.SubObserveText}>
                    Observed value/condition
                  </Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={observedvaluek10 => {
                      setobservedvaluek10(observedvaluek10);
                    }}
                  />
                </View>
                <View style={styles.SubObserveRemark}>
                  <Text style={styles.SubObserveRemarkText}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk14 => {
                      setremarkk14(remarkk14);
                    }}
                  />
                </View>
              </View>
              <View style={styles.FiveEntryPart}>
                <Text style={styles.FirstEntText}>LSCN</Text>

                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={observedvaluek11 => {
                      setobservedvaluek11(observedvaluek11);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk15 => {
                      setremarkk15(remarkk15);
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
                    style={styles.FirstEntRemarkInput}
                    onChangeText={observedvaluek12 => {
                      setobservedvaluek12(observedvaluek12);
                    }}
                  />
                </View>
                <View style={styles.SubObserveRemark}>
                  <Text style={styles.SubObserveRemarkText}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk16 => {
                      setremarkk16(remarkk16);
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
                  style={styles. FirstEntRemarkInput}
                  onChangeText={observedvaluek13 => {
                    setobservedvaluek13(observedvaluek13);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk17 => {
                    setremarkk17(remarkk17);
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
                  style={styles. FirstEntRemarkInput}
                  onChangeText={observedvaluek14 => {
                    setobservedvaluek14(observedvaluek14);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk18 => {
                    setremarkk18(remarkk18);
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
                  style={styles. FirstEntRemarkInput}
                  onChangeText={observedvaluek15 => {
                    setobservedvaluek15(observedvaluek15);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk19 => {
                    setremarkk19(remarkk19);
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
                  style={styles. FirstEntRemarkInput}
                  onChangeText={observedvaluek16 => {
                    setobservedvaluek16(observedvaluek16);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk20 => {
                    setremarkk20(remarkk20);
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
                  style={styles. FirstEntRemarkInput}
                  onChangeText={observedvaluek17 => {
                    setobservedvaluek17(observedvaluek17);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk21 => {
                    setremarkk21(remarkk21);
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
                    status={checkedk6 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk6('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk6 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk6('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk22 => {
                    setremarkk22(remarkk22);
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
                    status={checkedk7 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk7('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk7 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk7('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk23 => {
                    setremarkk23(remarkk23);
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
                    status={checkedk8 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk8('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk8 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk8('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk24 => {
                    setremarkk24(remarkk24);
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
                    status={checkedk9 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk9('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk9 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk9('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk25 => {
                    setremarkk25(remarkk25);
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
                  style={styles. FirstEntRemarkInput}
                  onChangeText={observedvaluek18 => {
                    setobservedvaluek18(observedvaluek18);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk26 => {
                    setremarkk26(remarkk26);
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
                  style={styles. FirstEntRemarkInput}
                  onChangeText={observedvaluek19 => {
                    setobservedvaluek19(observedvaluek19);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk27 => {
                    setremarkk27(remarkk27);
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
                  style={styles. FirstEntRemarkInput}
                  onChangeText={observedvaluek20 => {
                    setobservedvaluek20(observedvaluek20);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk28 => {
                    setremarkk28(remarkk28);
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
                    status={checkedk10 === 'Provided' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk10('Provided')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                  <RadioButton
                    value="Not Provided"
                    status={
                      checkedk10 === 'Not Provided' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk10('Not Provided')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk29 => {
                    setremarkk29(remarkk29);
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
                    status={checkedk11 === 'Provided' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk11('Not Provided')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                  <RadioButton
                    value="Not Provided"
                    status={
                      checkedk11 === 'Not Provided' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk11('Not Provided')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk30 => {
                    setremarkk30(remarkk30);
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
                    status={checkedk12 === 'Provided' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk12('Provided')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                  <RadioButton
                    value="Not Provided"
                    status={
                      checkedk12 === 'Not Provided' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk12('Not Provided')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk31 => {
                    setremarkk31(remarkk31);
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
                    status={checkedk13 === 'Provided' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk13('Provided')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                  <RadioButton
                    value="Not Provided"
                    status={
                      checkedk13 === 'Not Provided' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk13('Not Provided')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk32 => {
                    setremarkk32(remarkk32);
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
                    status={checkedk14 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk14('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk14 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk14('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk33 => {
                    setremarkk33(remarkk33);
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
                    status={checkedk15 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk15('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="third"
                    status={checkedk15 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk15('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk34 => {
                    setremarkk34(remarkk34);
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
                    status={checkedk16 === 'Provided' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk16('Provided')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                  <RadioButton
                    value="Provided"
                    status={checkedk16 === 'Provided' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk16('Provided')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk35 => {
                    setremarkk35(remarkk35);
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
                    status={checkedk16 === 'Provided' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk16('Provided')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                  <RadioButton
                    value="Not Provided"
                    status={
                      checkedk16 === 'Not Provided' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk16('Not Provided')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk36 => {
                    setremarkk36(remarkk36);
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
                    status={checkedk17 === 'Provided' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk17('Provided')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                  <RadioButton
                    value="Not Provided"
                    status={
                      checkedk17 === 'Not Provided' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk17('Not Provided')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={setremarkk37 => {
                    setremarkk37(setremarkk37);
                  }}
                />
              </View>

              
            </View>

            <View style={styles.submitButton}>
            <TouchableOpacity style={styles.forBomx} onPress={Submit}>
              <Text style={styles.forBomxText}>Submit</Text>
            </TouchableOpacity>
          </View>
          </View>

          {/* Form Entery Section 1St End */}
        </View>
      </View>
    </ScrollView>
  );
};

export default QMF2011_A;

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
