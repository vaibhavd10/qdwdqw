import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {RadioButton} from 'react-native-paper';

const AunderframeLWFAC = () => {
  //  -------------------MainForm Shell Info Variables-----------------

  // Observed Values Variable
  const [observedValues90, setObservedValues90] = useState('');
  const [observedValues91, setObservedValues91] = useState('');
  const [observedValues92, setObservedValues92] = useState('');
  const [observedValues93, setObservedValues93] = useState('');
  const [observedValues94, setObservedValues94] = useState('');
  const [observedValues95, setObservedValues95] = useState('');
  const [observedValues96, setObservedValues96] = useState('');
  const [observedValues97, setObservedValues97] = useState('');
  const [observedValues98, setObservedValues98] = useState('');
  const [observedValues99, setObservedValues99] = useState('');
  const [observedValues100, setObservedValues100] = useState('');
  const [observedValues101, setObservedValues101] = useState('');
  const [observedValues102, setObservedValues102] = useState('');
  const [observedValues103, setObservedValues103] = useState('');
  const [observedValues104, setObservedValues104] = useState('');
  const [observedValues105, setObservedValues105] = useState('');
  const [observedValues106, setObservedValues106] = useState('');
  const [observedValues107, setObservedValues107] = useState('');
  const [observedValues108, setObservedValues108] = useState('');
  const [observedValues109, setObservedValues109] = useState('');
  const [observedValues110, setObservedValues110] = useState('');

  // Checked Variable
  const [checked139, setChecked139] = useState('');
  const [checked140, setChecked140] = useState('');
  const [checked141, setChecked141] = useState('');
  const [checked142, setChecked142] = useState('');
  const [checked143, setChecked143] = useState('');
  const [checked144, setChecked144] = useState('');
  const [checked145, setChecked145] = useState('');
  const [checked146, setChecked146] = useState('');
  const [checked147, setChecked147] = useState('');
  const [checked148, setChecked148] = useState('');
  const [checked149, setChecked149] = useState('');
  const [checked150, setChecked150] = useState('');
  const [checked151, setChecked151] = useState('');
  const [checked152, setChecked152] = useState('');
  const [checked153, setChecked153] = useState('');
  const [checked154, setChecked154] = useState('');
  const [checked155, setChecked155] = useState('');
  const [checked156, setChecked156] = useState('');

  // Remarks Variables
  const [remarks228, setRemarks228] = useState('');
  const [remarks229, setRemarks229] = useState('');
  const [remarks230, setRemarks230] = useState('');
  const [remarks231, setRemarks231] = useState('');
  const [remarks232, setRemarks232] = useState('');
  const [remarks233, setRemarks233] = useState('');
  const [remarks234, setRemarks234] = useState('');
  const [remarks235, setRemarks235] = useState('');
  const [remarks236, setRemarks236] = useState('');
  const [remarks237, setRemarks237] = useState('');
  const [remarks238, setRemarks238] = useState('');
  const [remarks239, setRemarks239] = useState('');
  const [remarks240, setRemarks240] = useState('');
  const [remarks241, setRemarks241] = useState('');
  const [remarks242, setRemarks242] = useState('');
  const [remarks243, setRemarks243] = useState('');
  const [remarks244, setRemarks244] = useState('');
  const [remarks245, setRemarks245] = useState('');
  const [remarks246, setRemarks246] = useState('');
  const [remarks247, setRemarks247] = useState('');
  const [remarks248, setRemarks248] = useState('');
  const [remarks249, setRemarks249] = useState('');
  const [remarks250, setRemarks250] = useState('');
  const [remarks251, setRemarks251] = useState('');
  const [remarks252, setRemarks252] = useState('');
  const [remarks253, setRemarks253] = useState('');
  const [remarks254, setRemarks254] = useState('');
  const [remarks255, setRemarks255] = useState('');
  const [remarks256, setRemarks256] = useState('');
  const [remarks257, setRemarks257] = useState('');
  const [remarks258, setRemarks258] = useState('');
  const [remarks259, setRemarks259] = useState('');
  const [remarks260, setRemarks260] = useState('');
  const [remarks261, setRemarks261] = useState('');
  const [remarks262, setRemarks262] = useState('');
  const [remarks263, setRemarks263] = useState('');
  const [remarks264, setRemarks264] = useState('');
  const [remarks265, setRemarks265] = useState('');
  const [remarks266, setRemarks266] = useState('');

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
            {/* Form Entry First Sub1 Section Start */}
            <View style={styles.FiveEntryPart}>
              <Text style={styles.FirstEntText}>
                1a. Distance between foot step brackets
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChange={setObservedValues90}
                  value={observedValues90}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChange={setRemarks228}
                  value={remarks228}
                />
              </View>
            </View>
            {/* Form Entry First Sub1 Section End */}

            {/* Form Entry First Sub2 Section Start */}
            <View style={styles.FiveEntryPart}>
              <Text style={styles.FirstEntText}>
                1b. Welding of bio tank bkt
              </Text>
              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checked139 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked139('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checked139 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked139('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChange={setRemarks229}
                  value={remarks229}
                />
              </View>
              {/* Form Entry First Sub2 Section End */}
            </View>
            <View style={styles.FiveEntryPart}>
              <Text style={styles.FirstEntText}>
                1c. Alignment of floor support bkt & pillar mounting channel and
                welding
              </Text>
              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <View style={styles.EntryObserveRadio}>
                  <Text style={styles.FirstEntObserveRadio}>OK</Text>
                  <RadioButton
                    value="OK"
                    status={checked140 === 'OK' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked140('OK')}
                  />
                  <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                  <RadioButton
                    value="NOT OK"
                    status={checked140 === 'NOT OK' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked140('NOT OK')}
                  />
                </View>
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChange={setRemarks230}
                  value={remarks230}
                />
              </View>
            </View>
          </View>
          {/* Form Entry First Section End */}

          {/* Form Entry Second Section Start */}
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
                  status={checked141 === 'OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked141('OK')}
                />
                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                <RadioButton
                  value="NOT OK"
                  status={checked141 === 'NOT OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked141('NOT OK')}
                />
              </View>
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks231}
                value={remarks231}
              />
            </View>
          </View>
          {/* Form Entry Second Section End */}

          {/* Form Entry Three Section Start */}
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
                  onChange={setObservedValues91}
                  value={observedValues91}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChange={setRemarks232}
                  value={remarks232}
                />
              </View>
            </View>
            <View style={styles.FiveEntryPart}>
              <Text style={styles.FirstEntText}>3b. Indicator BKT holes </Text>
              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChange={setObservedValues92}
                  value={observedValues92}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChange={setRemarks233}
                  value={remarks233}
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
                  onChange={setObservedValues93}
                  value={observedValues93}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChange={setRemarks234}
                  value={remarks234}
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
                  onChange={setObservedValues94}
                  value={observedValues94}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChange={setRemarks235}
                  value={remarks235}
                />
              </View>
            </View>
          </View>
          {/* Form Entry Three Section End */}

          {/* Form Entry Four Section Start */}
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
                  status={checked142 === 'OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked142('OK')}
                />
                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                <RadioButton
                  value="NOT OK"
                  status={checked142 === 'NOT OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked142('NOT OK')}
                />
              </View>
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks236}
                value={remarks236}></TextInput>
            </View>
          </View>
          {/* Form Entry Four Section End */}

          {/* Form Entry Five Section Start */}
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
                  status={checked143 === 'OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked143('OK')}
                />
                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                <RadioButton
                  value="NOT OK"
                  status={checked143 === 'NOT OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked143('NOT OK')}
                />
              </View>
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks237}
                value={remarks237}></TextInput>
            </View>
          </View>
          {/* Form Entry Five Section End */}

          {/* Form Entry Six Section Start */}
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
                  status={checked144 === 'OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked144('OK')}
                />
                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                <RadioButton
                  value="NOT OK"
                  status={checked144 === 'NOT OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked144('NOT OK')}
                />
              </View>
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks238}
                value={remarks238}></TextInput>
            </View>
          </View>
          {/* Form Entry Six Section End */}

          {/* Form Entry Seven Section Start */}
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
                  status={checked145 === 'OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked145('OK')}
                />
                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                <RadioButton
                  value="NOT OK"
                  status={checked145 === 'NOT OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked145('NOT OK')}
                />
              </View>
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks239}
                value={remarks239}></TextInput>
            </View>
          </View>
          {/* Form Entry Seven Section End */}

          {/* Form Entry Eight Section Start */}
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
                onChange={setObservedValues95}
                value={observedValues95}></TextInput>
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks240}
                value={remarks240}></TextInput>
            </View>
          </View>
          {/* Form Entry Eight Section End */}

          {/* -----------------Form Entry Nine Section Start --------------*/}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>9. Pillar mounting distance</Text>
            {/* -----------------Form Entry Sub1 Section Start --------------*/}
            <View style={styles.FiveEntryPart}>
              <Text style={styles.FirstEntText}>
                9a. LFAC (longitudinal){'\n'}
                PP to NPP
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChange={setObservedValues96}
                  value={observedValues96}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChange={setRemarks241}
                  value={remarks241}
                />
              </View>
            </View>

            {/* -----------------Form Entry Sub1 Section End --------------*/}

            {/* -----------------Form Entry Sub2 Section Start --------------*/}
            <View style={styles.FiveEntryPart}>
              <Text style={styles.FirstEntText}>9b. Lateral </Text>
              <View style={styles.SubObserve}>
                <Text style={styles.SubObserveText}>
                  Observed value/condition
                </Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChange={setObservedValues97}
                  value={observedValues97}
                />
              </View>
              <View style={styles.SubObserveRemark}>
                <Text style={styles.SubObserveRemarkText}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChange={setRemarks242}
                  value={remarks242}
                />
              </View>
            </View>

            {/* -----------------Form Entry Sub2 Section End --------------*/}
          </View>
          {/* ----------- Form Entry Nine Section End -------------- */}

          {/* -----------------Form Entry Ten Section Start --------------*/}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>
              10.Pillar mounting for door support
            </Text>
            {/* -----------------Form Entry Sub1 Section Start --------------*/}
            <View style={styles.FiveEntryPart}>
              <Text style={styles.FirstEntText}>
                10a. Longitudinal (PP to NPP)
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChange={setObservedValues98}
                  value={observedValues98}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChange={setRemarks243}
                  value={remarks243}
                />
              </View>
            </View>

            {/* -----------------Form Entry Sub1 Section End --------------*/}

            {/* -----------------Form Entry Sub2 Section Start --------------*/}
            <View style={styles.FiveEntryPart}>
              <Text style={styles.FirstEntText}>9b. Lateral </Text>
              <View style={styles.SubObserve}>
                <Text style={styles.SubObserveText}>
                  Observed value/condition
                </Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChange={setObservedValues99}
                  value={observedValues99}
                />
              </View>
              <View style={styles.SubObserveRemark}>
                <Text style={styles.SubObserveRemarkText}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  onChange={setRemarks244}
                  value={remarks244}
                />
              </View>
            </View>

            {/* -----------------Form Entry Sub2 Section End --------------*/}
          </View>
          {/* ----------- Form Entry Ten Section End -------------- */}

          {/* Form Entry Eleven Section Start */}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>
              11. Longitudinal distance between bio tank brackets.
            </Text>

            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setObservedValues100}
                value={observedValues100}
              />
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks245}
                value={remarks245}
              />
            </View>
          </View>
          {/* Form Entry Eleven Section End */}

          {/* Form Entry Twelve Section Start */}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>
              12. Bio tank bracket between distance outer side for U/F center
              line (lateral){' '}
            </Text>

            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setObservedValues101}
                value={observedValues101}
              />
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks246}
                value={remarks246}
              />
            </View>
          </View>
          {/* Form Entry Twelve Section End */}

          {/* Form Entry Thirteen Section Start */}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>
              13. Bio tank bracket between distance inner side for U/F center
              line (lateral)
            </Text>

            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setObservedValues102}
                value={observedValues102}
              />
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks247}
                value={remarks247}
              />
            </View>
          </View>
          {/* Form Entry Thirteen Section End */}

          {/* Form Entry Fourteen Section Start */}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>14. Shunting bracket.</Text>

            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setObservedValues103}
                value={observedValues103}
              />
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks248}
                value={remarks248}
              />
            </View>
          </View>
          {/* Form Entry Fourteen Section End */}

          {/* ----------Form Entry Fifteen Section Start -----------*/}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>15. Lifting pad.</Text>

            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setObservedValues104}
                value={observedValues104}
              />
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks249}
                value={remarks249}
              />
            </View>
          </View>
          {/* -----------Form Entry Fifteen Section End------------- */}

          {/* Form Entry Sixteen Section Start */}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>
              16. Twine pipe hole and BKT(50mm)
            </Text>

            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <View style={styles.EntryObserveRadio}>
                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                <RadioButton
                  value="OK"
                  status={checked146 === 'OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked146('OK')}
                />
                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                <RadioButton
                  value="NOT OK"
                  status={checked146 === 'NOT OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked146('NOT OK')}
                />
              </View>
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks250}
                value={remarks250}></TextInput>
            </View>
          </View>
          {/* Form Entry Sixteen Section End */}

          {/* Form Entry Seventeen Section Start */}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>
              17. Both sides covering plate welding.
            </Text>

            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <View style={styles.EntryObserveRadio}>
                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                <RadioButton
                  value="OK"
                  status={checked147 === 'OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked147('OK')}
                />
                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                <RadioButton
                  value="NOT OK"
                  status={checked147 === 'NOT OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked147('NOT OK')}
                />
              </View>
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks251}
                value={remarks251}></TextInput>
            </View>
          </View>
          {/* Form Entry Seventeen Section End */}

          {/* Form Entry Eighteen Section Start */}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>
              18. Pan head bracket welding.
            </Text>

            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <View style={styles.EntryObserveRadio}>
                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                <RadioButton
                  value="OK"
                  status={checked148 === 'OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked148('OK')}
                />
                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                <RadioButton
                  value="NOT OK"
                  status={checked148 === 'NOT OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked148('NOT OK')}
                />
              </View>
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks252}
                value={remarks252}></TextInput>
            </View>
          </View>
          {/* Form Entry Eighteen Section End */}

          {/* Form Entry Nineteen Section Start */}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>
              19. Supporting member on trough sheet welding.
            </Text>

            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <View style={styles.EntryObserveRadio}>
                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                <RadioButton
                  value="OK"
                  status={checked149 === 'OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked149('OK')}
                />
                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                <RadioButton
                  value="NOT OK"
                  status={checked149 === 'NOT OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked149('NOT OK')}
                />
              </View>
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks253}
                value={remarks253}></TextInput>
            </View>
          </View>
          {/* Form Entry Nineteen Section End */}

          {/* ----------Form Entry Twenty Section Start -----------*/}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>
              20. Battery box bracket hole (18 Ø) distance from hole center to
              center and diagonal should be equal
            </Text>

            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setObservedValues105}
                value={observedValues105}
              />
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks254}
                value={remarks254}
              />
            </View>
          </View>
          {/* -----------Form Entry Twenty  Section End------------- */}

          {/* ----------Form Entry Twenty One Section Start -----------*/}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>
              21. Transformer bracket hole (18 Ø,8 nos. ) distance from hole
              center to center. (2T,3T) and diagonal should be equal
            </Text>

            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setObservedValues106}
                value={observedValues106}
              />
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks255}
                value={remarks255}
              />
            </View>
          </View>
          {/* -----------Form Entry Twenty One  Section End------------- */}

          {/* ----------Form Entry Twenty Two Section Start -----------*/}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>
              22. Air brake module hole (12 Ø) distance from hole center to
              center. and diagonal should be equal
            </Text>

            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setObservedValues107}
                value={observedValues107}
              />
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks256}
                value={remarks256}
              />
            </View>
          </View>
          {/* -----------Form Entry Twenty Two  Section End------------- */}

          {/* Form Entry Twenty Three Section Start */}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>
              23. Feeder junction hole(11 Ø) on head stock{' '}
            </Text>

            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <View style={styles.EntryObserveRadio}>
                <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                <RadioButton
                  value="Provided"
                  status={checked150 === 'Provided' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked150('Provided')}
                />
                <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                <RadioButton
                  value="Not Provided"
                  status={
                    checked150 === 'Not Provided' ? 'checked' : 'unchecked'
                  }
                  onPress={() => setChecked150('Not Provided')}
                />
              </View>
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks257}
                value={remarks257}></TextInput>
            </View>
          </View>
          {/* Form Entry Twenty Three Section End */}

          {/* Form Entry Twenty Four Section Start */}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>
              24. CBC uncoupling device hole{' '}
            </Text>

            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <View style={styles.EntryObserveRadio}>
                <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                <RadioButton
                  value="Provided"
                  status={checked151 === 'Provided' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked151('Provided')}
                />
                <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                <RadioButton
                  value="Not Provided"
                  status={
                    checked151 === 'Not Provided' ? 'checked' : 'unchecked'
                  }
                  onPress={() => setChecked151('Not Provided')}
                />
              </View>
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks258}
                value={remarks258}></TextInput>
            </View>
          </View>
          {/* Form Entry Twenty Four Section End */}

          {/* Form Entry Twenty Five Section Start */}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>
              25. Drain hole on trough sheet{' '}
            </Text>

            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <View style={styles.EntryObserveRadio}>
                <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                <RadioButton
                  value="Provided"
                  status={checked152 === 'Provided' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked152('Provided')}
                />
                <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                <RadioButton
                  value="Not Provided"
                  status={
                    checked152 === 'Not Provided' ? 'checked' : 'unchecked'
                  }
                  onPress={() => setChecked152('Not Provided')}
                />
              </View>
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks259}
                value={remarks259}></TextInput>
            </View>
          </View>
          {/* Form Entry Twenty Five Section End */}

          {/* Form Entry Twenty Six Section Start */}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>
              26. Both side front part area wash washing drain hole{' '}
            </Text>

            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <View style={styles.EntryObserveRadio}>
                <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                <RadioButton
                  value="Provided"
                  status={checked153 === 'Provided' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked153('Provided')}
                />
                <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                <RadioButton
                  value="Not Provided"
                  status={
                    checked153 === 'Not Provided' ? 'checked' : 'unchecked'
                  }
                  onPress={() => setChecked153('Not Provided')}
                />
              </View>
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks260}
                value={remarks260}></TextInput>
            </View>
          </View>
          {/* Form Entry Twenty Six Section End */}

          {/* Form Entry Twenty Seven Section Start */}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>27. Sole bar joint welding</Text>

            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <View style={styles.EntryObserveRadio}>
                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                <RadioButton
                  value="OK"
                  status={checked154 === 'OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked154('OK')}
                />
                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                <RadioButton
                  value="NOT OK"
                  status={checked154 === 'NOT OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked154('NOT OK')}
                />
              </View>
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks261}
                value={remarks261}></TextInput>
            </View>
          </View>
          {/* Form Entry Twenty Seven Section End */}

          {/* Form Entry Twenty Eight Section Start */}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>
              28. Door corner joint welding and grinding
            </Text>

            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <View style={styles.EntryObserveRadio}>
                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                <RadioButton
                  value="OK"
                  status={checked155 === 'OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked155('OK')}
                />
                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                <RadioButton
                  value="NOT OK"
                  status={checked155 === 'NOT OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked155('NOT OK')}
                />
              </View>
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks262}
                value={remarks262}></TextInput>
            </View>
          </View>
          {/* Form Entry Twenty Eight Section End */}

          {/* Form Entry Twenty Nine Section Start */}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>
              29. Sensor bracket location.
            </Text>

            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <View style={styles.EntryObserveRadio}>
                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                <RadioButton
                  value="OK"
                  status={checked156 === 'OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked156('OK')}
                />
                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                <RadioButton
                  value="NOT OK"
                  status={checked156 === 'NOT OK' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked156('NOT OK')}
                />
              </View>
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks263}
                value={remarks263}></TextInput>
            </View>
          </View>
          {/* Form Entry Twenty Nine Section End */}

          {/* ----------Form Entry Thirty  Section Start -----------*/}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>
              30. Both side Fiba bkt for air spring bogie
            </Text>

            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setObservedValues108}
                value={observedValues108}
              />
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks264}
                value={remarks264}
              />
            </View>
          </View>
          {/* -----------Form Entry Thirty  Section End------------- */}

          {/* ----------Form Entry Thirty One Section Start -----------*/}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>
              31. Reservoir tank bkt for air spring bogie
            </Text>

            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setObservedValues109}
                value={observedValues109}
              />
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks265}
                value={remarks265}
              />
            </View>
          </View>
          {/* -----------Form Entry Thirty One Section End------------- */}

          {/* ----------Form Entry Thirty Two Section Start -----------*/}
          <View style={styles.MainFormFirstEntery}>
            <Text style={styles.FirstEntText}>32. Curve roll stopper bktr</Text>

            <View style={styles.FirstEntObserve}>
              <Text style={styles.FirstEntObserveText1}>
                Observed value/condition
              </Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setObservedValues110}
                value={observedValues110}
              />
            </View>
            <View style={styles.FirstEntRemark}>
              <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
              <TextInput
                style={styles.FirstEntRemarkInput}
                onChange={setRemarks266}
                value={remarks266}
              />
            </View>
          </View>
          {/* -----------Form Entry Thirty Two Section End------------- */}

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

export default AunderframeLWFAC;

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
