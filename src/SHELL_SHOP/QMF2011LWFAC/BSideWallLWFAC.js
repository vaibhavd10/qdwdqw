import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';

const BSideWallLWFAC = () => {
    //  -------------------MainForm Shell Info Variables-----------------
    const [shelltypes7, setShellTypes7] = useState('');
    const [shifts7, SetShifts7] = useState('');
    const [dates7, setDates7] = useState('');

    // Checked Variable
    const [checked91, setChecked91] = useState('');
    const [checked92, setChecked92] = useState('');
    const [checked93, setChecked93] = useState('');
    const [checked94, setChecked94] = useState('');
    const [checked95, setChecked95] = useState('');
    const [checked96, setChecked96] = useState('');
    const [checked97, setChecked97] = useState('');
    const [checked98, setChecked98] = useState('');
    const [checked99, setChecked99] = useState('');
    const [checked100, setChecked100] = useState('');
    const [checked101, setChecked101] = useState('');
    const [checked102, setChecked102] = useState('');
    const [checked103, setChecked103] = useState('');
    const [checked104, setChecked104] = useState('');
    const [checked105, setChecked105] = useState('');
    const [checked106, setChecked106] = useState('');
    const [checked107, setChecked107] = useState('');
    
    

    
    // Remarks Variables
    const [remarks160, setRemarks160] = useState('');
    const [remarks161, setRemarks161] = useState('');
    const [remarks162, setRemarks162] = useState('');
    const [remarks163, setRemarks163] = useState('');
    const [remarks164, setRemarks164] = useState('');
    const [remarks165, setRemarks165] = useState('');
    const [remarks166, setRemarks166] = useState('');
    const [remarks167, setRemarks167] = useState('');
    const [remarks168, setRemarks168] = useState('');
    const [remarks169, setRemarks169] = useState('');
    const [remarks170, setRemarks170] = useState('');
    const [remarks171, setRemarks171] = useState('');
    const [remarks172, setRemarks172] = useState('');
    const [remarks173, setRemarks173] = useState('');
    const [remarks174, setRemarks174] = useState('');
    const [remarks175, setRemarks175] = useState('');
    const [remarks176, setRemarks176] = useState('');


    const onPress = ()=>{
        console.log('onPress');
    }

  return (
    
        <ScrollView style= {styles.MainContainers} >
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
            <View style = {styles.MainForm}>
              
                

               
                
                {/* Form Entery Section Start */}

                <View style= {styles.MainFormEntry}>
                    {/* Form Entry First Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>1. Side wall laser joint (visually check)</Text>
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                    value="OK"
                                    status={checked91 === 'OK' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked91('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                    value="NOT OK"
                                    status={checked91 === 'NOT OK' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked91('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks160}
                                value = {remarks160}
                            />
                        </View>
                    </View>
                    {/* Form Entry First Section End */}
                    
                    {/* Form Entry Second Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>2. welding & grinding of  Side wall sheet joint  ***</Text>
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked92 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked92('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked92 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked92('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks161}
                                value = {remarks161}
                            />
                        </View>
                    </View>
                    {/* Form Entry Second Section End */}

                    {/* Form Entry Third Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>3. Condition of window profile </Text>

                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked93 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked93('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked93 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked93('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks162}
                                value = {remarks162}
                            />
                        </View>
                    </View>
                    {/* Form Entry Third Section End */}

                    {/* Form Entry Fourth Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>4. Welding of vertical & horizontal members   ***</Text>

                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked94 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked94('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked94 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked94('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks163}
                                value = {remarks163}
                            />
                        </View>
                    </View>
                    {/* Form Entry Fourth Section End */}

                    {/* Form Entry Five Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>5. Provision of channel assembly </Text>

                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked94 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked94('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked94 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked94('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks163}
                                value = {remarks163}
                            />
                        </View>
                    </View>
                    {/* Form Entry Five Section End */}

                   
                    {/* Form Entry Six Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>6. Dents in side wall </Text>

                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked97 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked97('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked97 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked97('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks166}
                                value = {remarks166}
                            />
                        </View>
                    </View>
                    {/* Form Entry Six Section End */}

                    {/* Form Entry Eight Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>7. Condition of RWG </Text>

                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked98 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked98('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked98 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked98('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks167}
                                value = {remarks167}
                            />
                        </View>
                    </View>
                    {/* Form Entry Eight Section End */}

                    {/* Form Entry Nine Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>8. Side wall and Lav. side wall with member  spots welding</Text>

                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked99 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked99('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked99 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked99('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks168}
                                value = {remarks168}
                            />
                        </View>
                    </View>
                    {/* Form Entry Nine Section End */}

                    {/* Form Entry Ten Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>9. Roof flange joint  leveling and welding </Text>

                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked100 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked100('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked100 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked100('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks169}
                                value = {remarks169}
                            />
                        </View>
                    </View>
                    {/* Form Entry Ten Section End */}

                    {/* Form Entry Eleven Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>10. Conduit hole on  roof flange   </Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                                <RadioButton
                                     value="Provided"
                                     status={checked101 === 'Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked101('Provided')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                                <RadioButton
                                     value="Not Provided"
                                     status={checked101 === 'Not Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked101('Not Provided')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks170}
                                 value = {remarks170}
                            />
                        </View>
                    </View>
                    {/* Form Entry Eleven Section End */}
                    
                    {/* Form Entry Twelve Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>11. Car line joint welding and  leakage test</Text>

                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked102 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked102('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked102 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked102('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks171}
                                value = {remarks171}
                            />
                        </View>
                    </View>
                    {/* Form Entry Twelve Section End */}

                     {/* Form Entry First Section Start */}
          <View style={styles.MainFormFirstEntery}>
          <Text style={styles.FirstEntText}>
                12. Distance from horizontal channel to bkt 
              </Text>

            {/* Form Entry First Sub1 Section Start */}
            <View style={styles.FiveEntryPart}>
              <Text style={styles.FirstEntText}>
                12a. From horizontal 
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  // onChange={setObservedValues90}
                  // value={observedValues90}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  // onChange={setRemarks228}
                  // value={remarks228}
                />
              </View>
            </View>
            {/* Form Entry First Sub1 Section End */}
            {/* Form Entry First Sub1 Section Start */}
            <View style={styles.FiveEntryPart}>
              <Text style={styles.FirstEntText}>
                12b. From vertical 
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  // onChange={setObservedValues90}
                  // value={observedValues90}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  // onChange={setRemarks228}
                  // value={remarks228}
                />
              </View>
            </View>
            {/* Form Entry First Sub1 Section End */}

    
          
          </View>
          {/* Form Entry First Section End */}
                     {/* Form Entry First Section Start */}
          <View style={styles.MainFormFirstEntery}>
          <Text style={styles.FirstEntText}>
                13. Distance from under frame to lower berth channel
              </Text>

            {/* Form Entry First Sub1 Section Start */}
            <View style={styles.FiveEntryPart}>
              <Text style={styles.FirstEntText}>
                13a. Berth channel center 
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  // onChange={setObservedValues90}
                  // value={observedValues90}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  // onChange={setRemarks228}
                  // value={remarks228}
                />
              </View>
            </View>
            {/* Form Entry First Sub1 Section End */}
            {/* Form Entry First Sub1 Section Start */}
            <View style={styles.FiveEntryPart}>
              <Text style={styles.FirstEntText}>
                13b. Berth channel distance from  pillar PP to NPP 
              </Text>

              <View style={styles.FirstEntObserve}>
                <Text style={styles.FirstEntObserveText1}>
                  Observed value/condition
                </Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  // onChange={setObservedValues90}
                  // value={observedValues90}
                />
              </View>
              <View style={styles.FirstEntRemark}>
                <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                <TextInput
                  style={styles.FirstEntRemarkInput}
                  // onChange={setRemarks228}
                  // value={remarks228}
                />
              </View>
            </View>
            {/* Form Entry First Sub1 Section End */}

    
          
          </View>
          {/* Form Entry First Section End */}


                    
                    {/* Form Entry Thirteen Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>14. Power panel indictor hole at Lav. side wall(PP side)</Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                                <RadioButton
                                     value="Provided"
                                     status={checked103 === 'Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked103('Provided')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                                <RadioButton
                                     value="Not Provided"
                                     status={checked103 === 'Not Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked103('Not Provided')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks172}
                                 value = {remarks172}
                            />
                        </View>
                    </View>
                    {/* Form Entry Thirteen Section End */}


                    {/* Form Entry Sixteen Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>15. Car line with side wall joint brazing </Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>Done</Text>
                                <RadioButton
                                     value="Done"
                                     status={checked106 === 'Done' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked106('Done')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                                <RadioButton
                                     value="Not Done"
                                     status={checked106 === 'Not Done' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked106('Not Done')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks175}
                                 value = {remarks175}
                            />
                        </View>
                    </View>
                    {/* Form Entry Sixteen Section End */}


                    {/* Form Entry Seventeen Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>16. Side wall member  joint grinding work </Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>Done</Text>
                                <RadioButton
                                     value="Done"
                                     status={checked107 === 'Done' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked107('Done')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                                <RadioButton
                                     value="Not Done"
                                     status={checked107 === 'Not Done' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked107('Not Done')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks176}
                                 value = {remarks176}
                            />
                        </View>
                    </View>
                    {/* Form Entry Seventeen Section End */}

                   
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
            {/* -------------------MainForm Part End----------------- */}
        </ScrollView>

  )
}

export default BSideWallLWFAC;

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