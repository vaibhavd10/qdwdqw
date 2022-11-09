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

const QMF2011_B = ({navigation}) => {
  const [checkedk18, setCheckedk18] = useState('');
  const [checkedk19, setCheckedk19] = useState('');
  const [checkedk20, setCheckedk20] = useState('');
  const [checkedk21, setCheckedk21] = useState('');
  const [checkedk22, setCheckedk22] = useState('');
  const [checkedk23, setCheckedk23] = useState('');
  const [checkedk24, setCheckedk24] = useState('');
  const [checkedk25, setCheckedk25] = useState('');
  const [checkedk26, setCheckedk26] = useState('');
  const [checkedk27, setCheckedk27] = useState('');
  const [checkedk28, setCheckedk28] = useState('');
  const [checkedk29, setCheckedk29] = useState('');
  const [checkedk30, setCheckedk30] = useState('');
  const [checkedk31, setCheckedk31] = useState('');
  const [checkedk32, setCheckedk32] = useState('');
  const [checkedk33, setCheckedk33] = useState('');
  const [checkedk34, setCheckedk34] = useState('');

  const [observedvaluek21, setobservedvaluek21] = useState('');
  const [observedvaluek22, setobservedvaluek22] = useState('');
  const [observedvaluek23, setobservedvaluek23] = useState('');

  const [remarkk35, setremarkk35] = useState('');
  const [remarkk36, setremarkk36] = useState('');
  const [remarkk37, setremarkk37] = useState('');
  const [remarkk38, setremarkk38] = useState('');
  const [remarkk39, setremarkk39] = useState('');
  const [remarkk40, setremarkk40] = useState('');
  const [remarkk41, setremarkk41] = useState('');
  const [remarkk42, setremarkk42] = useState('');
  const [remarkk43, setremarkk43] = useState('');
  const [remarkk44, setremarkk44] = useState('');
  const [remarkk45, setremarkk45] = useState('');
  const [remarkk46, setremarkk46] = useState('');
  const [remarkk47, setremarkk47] = useState('');
  const [remarkk48, setremarkk48] = useState('');
  const [remarkk49, setremarkk49] = useState('');
  const [remarkk50, setremarkk50] = useState('');
  const [remarkk51, setremarkk51] = useState('');
  const [remarkk52, setremarkk52] = useState('');
  const [remarkk53, setremarkk53] = useState('');
  const [remarkk54, setremarkk54] = useState('');
  const [remarkk55, setremarkk55] = useState('');

  const Submit = () => {
    navigation.navigate('QMF List');
  };

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
            <Text style={styles.headerText}>
              Modern Coach Factory Raebareli
            </Text>
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
                    status={checkedk18 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk18('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk18 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk18('NOT OK')}
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
                    status={checkedk19 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk19('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk19 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk19('NOT OK')}
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
                    status={checkedk20 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk20('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk20 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk20('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk37 => {
                    setremarkk37(remarkk37);
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
                    status={checkedk21 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk21('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk21 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk21('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk38 => {
                    setremarkk38(remarkk38);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Six Section End */}

            {/* Form Entry Seven Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                5. Provision of channel assembly (L2T,L3T)
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk22 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk22('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk22 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk22('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk39 => {
                    setremarkk39(remarkk39);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Seven Section End */}

            {/* Form Entry Eight Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>6. Dents in side wall</Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk23 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk23('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="third"
                    status={checkedk23 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk23('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk40 => {
                    setremarkk40(remarkk40);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Eight Section End */}

            {/* Form Entry Nine Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>7. Condition of RWG</Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk24 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk24('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk24 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk24('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk41 => {
                    setremarkk41(remarkk41);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Nine Section End */}

            {/* Form Entry Ten Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                8.Side wall and Lav. side wall with member spots welding
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk25 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk25('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk25 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk25('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk42 => {
                    setremarkk42(remarkk42);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Ten Section End */}

            {/* Form Entry Eleven Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                9.Roof flange joint leveling and welding
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk26 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk26('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk26 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk26('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk43 => {
                    setremarkk43(remarkk43);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Eleven Section End */}

            {/* Form Entry Twelve Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                10. Conduit hole on roof flange
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.flexcorrect}>
                  <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                  <RadioButton
                    value="Provided"
                    status={checkedk27 === 'Provided' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk27('Provided')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                  <RadioButton
                    value="Not Provided"
                    status={
                      checkedk27 === 'Not Provided' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk27('NOT Provided')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk44 => {
                    setremarkk44(remarkk44);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Twelve Section End */}

            {/* Form Entry Thirteen Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                11. Car line joint welding and leakage test
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk28 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk28('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk28 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk28('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk45 => {
                    setremarkk45(remarkk45);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Thirteen Section End */}

            {/* Form Entry Fourteen Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                12. Pull box distance from center line
              </Text>
              <View style={styles.FiveEntryPart}>
                <Text style={styles.FirstEntText}>L2T</Text>

                <View style={styles.FirstEntObserve}>
                  <Text style={styles.FirstEntObserveText1}>
                    Observed value/condition
                  </Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={observedvaluek21 => {
                      setobservedvaluek21(observedvaluek21);
                    }}
                  />
                </View>
                <View style={styles.FirstEntRemark}>
                  <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk46 => {
                      setremarkk46(remarkk46);
                    }}
                  />
                </View>
              </View>
              <View style={styles.FiveEntryPart}>
                <Text style={styles.FirstEntText}>L3T</Text>
                <View style={styles.SubObserve}>
                  <Text style={styles.SubObserveText}>
                    Observed value/condition
                  </Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={observedvaluek22 => {
                      setobservedvaluek22(observedvaluek22);
                    }}
                  />
                </View>
                <View style={styles.SubObserveRemark}>
                  <Text style={styles.SubObserveRemarkText}>REMARKS</Text>
                  <TextInput
                    style={styles.FirstEntRemarkInput}
                    onChangeText={remarkk47 => {
                      setremarkk47(remarkk47);
                    }}
                  />
                </View>
              </View>
            </View>
            {/* Form Entry Fourteen Section End */}

            {/* Form Entry Fifteen Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                13. Window seal joint elevation and leakage test
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk29 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk29('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk29 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk29('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk48 => {
                    setremarkk48(remarkk48);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Fifteen Section End */}

            {/* Form Entry Sixteen Section Start */}

            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                14. Power panel indictor hole at Lav. side wall(PP side)
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.flexcorrect}>
                  <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                  <RadioButton
                    value="Provided"
                    status={checkedk30 === 'Provided' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk30('Provided')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                  <RadioButton
                    value="Not Provided"
                    status={
                      checkedk30 === 'Not Provided' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk30('NOT Provided')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk49 => {
                    setremarkk49(remarkk49);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Sixteen Section End */}

            {/* Form Entry Seventeen Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                15. Exhaust profile cutting in Lav. side wall( LSCN/LGS)
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checkedk31 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk31('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checkedk31 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk31('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk50 => {
                    setremarkk50(remarkk50);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Seventeen Section End */}

            {/* Form Entry Eighteen Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                16. Wogo bkt for electrical(LSCN/LGS)
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.flexcorrect}>
                  <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                  <RadioButton
                    value="Provided"
                    status={checkedk32 === 'Provided' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk32('Provided')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                  <RadioButton
                    value="Not Provided"
                    status={
                      checkedk32 === 'Not Provided' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedk32('Not Provided')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk51 => {
                    setremarkk51(remarkk51);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Eighteen Section End */}

            {/* Form Entry Nineteen Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                17. Car line with side wall joint brazing
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.flexcorrect}>
                
                  <Text style={styles.FirstEntObserveRadio}>DONE</Text>
                  <RadioButton
                    value="DONE"
                    status={checkedk32 === 'DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk32('DONE')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT DONE</Text>
                  <RadioButton
                    value="NOT DONE"
                    status={checkedk32 === 'NOT DONE' ? 'checked' : 'unchecked'}
                    onPress={() => setCheckedk32('NOT DONE')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk52 => {
                    setremarkk52(remarkk52);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Nineteen Section End */}

            {/* Form Entry Twenty Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                18. Side wall channel for Wider window
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text><View style={styles.flexcorrect}>
                <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                <RadioButton
                  value="Provided"
                  status={checkedk33 === 'Provided' ? 'checked' : 'unchecked'}
                  onPress={() => setCheckedk33('Provided')}
                />
                <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                <RadioButton
                  value="Not Provided"
                  status={
                    checkedk33 === 'Not Provided' ? 'checked' : 'unchecked'
                  }
                  onPress={() => setCheckedk33('NOT Provided')}
                /></View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk53 => {
                    setremarkk53(remarkk53);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Twenty Section End */}

            {/* Form Entry Twenty One Section Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                19. Side wall member joint grinding work
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.flexcorrect}><Text style={styles.FirstEntObserveRadio}>DONE</Text>
                <RadioButton
                  value="DONE"
                  status={checkedk34 === 'DONE' ? 'checked' : 'unchecked'}
                  onPress={() => setCheckedk34('DONE')}
                />
                <Text style={styles.FirstEntObserveRadio}>NOT DONE</Text>
                <RadioButton
                  value="NOT DONE"
                  status={checkedk34 === 'NOT DONE' ? 'checked' : 'unchecked'}
                  onPress={() => setCheckedk34('NOT DONE')}
                /></View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk54 => {
                    setremarkk54(remarkk54);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Twenty One Section End */}

            {/* Form Entry Twenty Two Start */}
            <View style={styles.MainFormFirstEntery}>
              <Text style={styles.FirstEntText}>
                20. Mounting angle for lower luggage rake bkt height from bottom
                of side wall(LGS in without )
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={observedvaluek23 => {
                    setobservedvaluek23(observedvaluek23);
                  }}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChangeText={remarkk55 => {
                    setremarkk55(remarkk55);
                  }}
                />
              </View>
            </View>
            {/* Form Entry Twenty Two Section End */}
          </View>

          {/* Form Entery Section 1St End */}
        </View>
        <View style={styles.submitButton}>
          <TouchableOpacity style={styles.forBomx} onPress={Submit}>
            <Text style={styles.forBomxText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default QMF2011_B;

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
