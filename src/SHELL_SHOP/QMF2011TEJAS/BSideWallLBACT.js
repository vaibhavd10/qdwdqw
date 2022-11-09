import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';

const BSideWallLBACT = () => {
    //  -------------------MainForm Shell Info Variables-----------------
    const [shelltypes2, setShellTypes2] = useState('');
    const [shifts2, SetShifts2] = useState('');
    const [dates2, setDates2] = useState('');




    // Observed Values Variable
    const [observedValues18, setObservedValues18] = useState('');
    const [observedValues19, setObservedValues19] = useState('');
    const [observedValues20, setObservedValues20] = useState('');
    const [observedValues21, setObservedValues21] = useState('');
    const [observedValues22, setObservedValues22] = useState('');

    // Checked Variable
    const [checked21, setChecked21] = useState('');
    const [checked22, setChecked22] = useState('');
    const [checked23, setChecked23] = useState('');
    const [checked24, setChecked24] = useState('');
    const [checked25, setChecked25] = useState('');
    const [checked26, setChecked26] = useState('');
    const [checked27, setChecked27] = useState('');
    const [checked28, setChecked28] = useState('');
    const [checked29, setChecked29] = useState('');
    const [checked30, setChecked30] = useState('');
    const [checked31, setChecked31] = useState('');
    const [checked32, setChecked32] = useState('');
    const [checked33, setChecked33] = useState('');
    const [checked34, setChecked34] = useState('');
    const [checked35, setChecked35] = useState('');
    const [checked36, setChecked36] = useState('');
    

    
    // Remarks Variables
    const [remarks38, setRemarks38] = useState('');//38
    const [remarks39, setRemarks39] = useState('');// 39
    const [remarks40, setRemarks40] = useState('');
    const [remarks41, setRemarks41] = useState('');
    const [remarks42, setRemarks42]= useState('');
    const [remarks43, setRemarks43] = useState('');
    const [remarks44, setRemarks44] = useState('');
    const [remarks45, setRemarks45] = useState('');
    const [remarks46, setRemarks46] = useState('');
    const [remarks47, setRemarks47] = useState('');
    const [remarks48, setRemarks48] = useState('');
    const [remarks49, setRemarks49] = useState('');
    const [remarks50, setRemarks50] = useState('');
    const [remarks51, setRemarks51] = useState('');
    const [remarks52, setRemarks52] = useState('');
    const [remarks53, setRemarks53] = useState('');
    const [remarks54, setRemarks54] = useState('');
    const [remarks55, setRemarks55] = useState('');
    const [remarks56, setRemarks56] = useState('');
    const [remarks57, setRemarks57] = useState('');
    const [remarks58, setRemarks58] = useState('');
    
    

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
                                    status={checked21 === 'OK' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked21('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                    value="NOT OK"
                                    status={checked21 === 'NOT OK' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked21('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks38}
                                value = {remarks38}
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
                                     status={checked22 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked22('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked22 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked22('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks39}
                                value = {remarks39}
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
                                     status={checked23 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked23('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked23 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked23('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks40}
                                value = {remarks40}
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
                                     status={checked24 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked24('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked24 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked24('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks41}
                                value = {remarks41}
                            />
                        </View>
                    </View>
                    {/* Form Entry Fourth Section End */}

                    {/* Form Entry Five Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>5. Provision of channel for boiler   </Text>

                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked25 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked25('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked25 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked25('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks42}
                                value = {remarks42}
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
                                     status={checked26 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked26('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked26 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked26('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks43}
                                value = {remarks43}
                            />
                        </View>
                    </View>
                    {/* Form Entry Six Section End */}

                    {/* Form Entry Seven Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>7. Condition of RWG </Text>

                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked27 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked27('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked27 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked27('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks44}
                                value = {remarks44}
                            />
                        </View>
                    </View>
                    {/* Form Entry Seven Section End */}

                    {/* Form Entry Eight Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>8. Side wall and Lav. side wall with member  spots welding</Text>

                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked28 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked28('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked28 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked28('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks45}
                                value = {remarks45}
                            />
                        </View>
                    </View>
                    {/* Form Entry Eight Section End */}

                    {/* Form Entry Nine Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>9. Roof flange joint  leveling and welding </Text>

                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked29 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked29('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked29 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked29('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks46}
                                value = {remarks46}
                            />
                        </View>
                    </View>
                    {/* Form Entry Nine Section End */}

                    {/* Form Entry Ten Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>10. Conduit hole on  roof flange   </Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                                <RadioButton
                                     value="Provided"
                                     status={checked30 === 'Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked30('Provided')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                                <RadioButton
                                     value="Not Provided"
                                     status={checked30 === 'Not Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked30('Not Provided')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks47}
                                 value = {remarks47}
                            />
                        </View>
                    </View>
                    {/* Form Entry Ten Section End */}
                    
                    {/* Form Entry Eleven Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>11. Car line joint welding and  leakage test</Text>

                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked31 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked31('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked31 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked31('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks48}
                                value = {remarks48}
                            />
                        </View>
                    </View>
                    {/* Form Entry Eleven Section End */}

                    {/* Form Entry Twelve Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <View style={styles.FiveEntryPart}>
                            <Text style = {styles.FirstEntText}>12a. Pull box distance from center line</Text>
                        
                            <View style = {styles.FirstEntObserve}>
                                <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setObservedValues18}
                                    value = {observedValues18}
                                />

                            </View>
                            <View style = {styles.FirstEntRemark}>
                                <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setRemarks49}
                                    value = {remarks49}
                                />
                            </View>

                        </View>
                        <View style={styles.FiveEntryPart}>
                            <Text style = {styles.FirstEntText}>12b. LBAC </Text>
                            <View style = {styles.FirstEntObserve}>
                                <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setObservedValues19}
                                    value = {observedValues19}
                                />

                            </View>
                            <View style = {styles.FirstEntRemark}>
                                <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setRemarks50}
                                    value = {remarks50}
                                />
                            </View>

                        </View>
                    </View>
                    {/* Form Entry Twelve Section End */}

                    {/* Form Entry Thirteen Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>13. Window seal joint elevation and leakage test</Text>

                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked32 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked32('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked32 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked32('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks51}
                                value = {remarks51}
                            />
                        </View>
                    </View>
                    {/* Form Entry Thirteen Section End */}

                    {/* Form Entry Fourteen Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>14. Power panel indictor hole at Lav. side wall(PP side)</Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                                <RadioButton
                                     value="Provided"
                                     status={checked33 === 'Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked33('Provided')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                                <RadioButton
                                     value="Not Provided"
                                     status={checked33 === 'Not Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked33('Not Provided')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks52}
                                 value = {remarks52}
                            />
                        </View>
                    </View>
                    {/* Form Entry Fourteen Section End */}

                    {/* Form Entry Fifteen Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>15. Distance from under frame  to channel for water boiler</Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setObservedValues20}
                                value = {observedValues20}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks53}
                                 value = {remarks53}
                            />
                        </View>
                    </View>
                    {/* Form Entry Fifteen Section End */}

                    {/* Form Entry Sixteen Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <View style={styles.FiveEntryPart}>
                            <Text style = {styles.FirstEntText}>16a. Distance from center line to channel for water boiler</Text>
                        
                            <View style = {styles.FirstEntObserve}>
                                <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setObservedValues21}
                                    value = {observedValues21}
                                />

                            </View>
                            <View style = {styles.FirstEntRemark}>
                                <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setRemarks54}
                                    value = {remarks54}
                                />
                            </View>

                        </View>
                        <View style={styles.FiveEntryPart}>
                            <Text style = {styles.FirstEntText}>16b. Distance from center line to channel for water boiler </Text>
                            <View style = {styles.FirstEntObserve}>
                                <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setObservedValues22}
                                    value = {observedValues22}
                                />

                            </View>
                            <View style = {styles.FirstEntRemark}>
                                <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setRemarks55}
                                    value = {remarks55}
                                />
                            </View>

                        </View>
                    </View>
                    {/* Form Entry Sixteen Section End */}

                    {/* Form Entry Seventeen Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>17. Car line with side wall joint brazing </Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>Done</Text>
                                <RadioButton
                                     value="Done"
                                     status={checked34 === 'Done' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked34('Done')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                                <RadioButton
                                     value="Not Done"
                                     status={checked34 === 'Not Done' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked34('Not Done')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks56}
                                 value = {remarks56}
                            />
                        </View>
                    </View>
                    {/* Form Entry Seventeen Section End */}

                    {/* Form Entry Eightteen Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>18. Side wall channel for Wider window  </Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                                <RadioButton
                                     value="Provided"
                                     status={checked35 === 'Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked35('Provided')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                                <RadioButton
                                     value="Not Provided"
                                     status={checked35 === 'Not Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked35('Not Provided')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks57}
                                 value = {remarks57}
                            />
                        </View>
                    </View>
                    {/* Form Entry Eighteen Section End */}

                    {/* Form Entry Nineteen Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>19. Side wall member  joint grinding work </Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>Done</Text>
                                <RadioButton
                                     value="Done"
                                     status={checked36 === 'Done' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked36('Done')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                                <RadioButton
                                     value="Not Done"
                                     status={checked36 === 'Not Done' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked36('Not Done')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks58}
                                 value = {remarks58}
                            />
                        </View>
                    </View>
                    {/* Form Entry Nineteen Section End */}

                   
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

export default BSideWallLBACT;

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