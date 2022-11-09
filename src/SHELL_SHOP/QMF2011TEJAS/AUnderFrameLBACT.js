import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View,Image } from 'react-native';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';


const AUnderFrameLBACT = () => {
    //  -------------------MainForm Shell Info Variables-----------------
    const [shelltypes1, setShellTypes1] = useState('');
    const [shifts1, SetShifts1] = useState('');
    const [dates1, setDates1] = useState('');



    // Observed Values Variable
    const [observedValues1, setObservedValues1] = useState('');
    const [observedValues2, setObservedValues2] = useState('');
    const [observedValues3, setObservedValues3] = useState('');
    const [observedValues4, setObservedValues4] = useState('');
    const [observedValues5, setObservedValues5] = useState('');
    const [observedValues6, setObservedValues6] = useState('');
    const [observedValues7, setObservedValues7] = useState('');
    const [observedValues8, setObservedValues8] = useState('');
    const [observedValues9, setObservedValues9] = useState('');
    const [observedValues10, setObservedValues10] = useState('');
    const [observedValues11, setObservedValues11] = useState('');
    const [observedValues12, setObservedValues12] = useState('');
    const [observedValues13, setObservedValues13] = useState('');
    const [observedValues14, setObservedValues14] = useState('');
    const [observedValues15, setObservedValues15] = useState('');
    const [observedValues16, setObservedValues16] = useState('');
    const [observedValues17, setObservedValues17] = useState('');

    // Checked Variable
    const [checked1, setChecked1] = useState('');
    const [checked2, setChecked2] = useState('');
    const [checked3, setChecked3] = useState('');
    const [checked4, setChecked4] = useState('');
    const [checked5, setChecked5] = useState('');
    const [checked6, setChecked6] = useState('');
    const [checked7, setChecked7] = useState('');
    const [checked8, setChecked8] = useState('');
    const [checked9, setChecked9] = useState('');
    const [checked10, setChecked10] = useState('');
    const [checked11, setChecked11] = useState('');
    const [checked12, setChecked12] = useState('');
    const [checked13, setChecked13] = useState('');
    const [checked14, setChecked14] = useState('');
    const [checked15, setChecked15] = useState('');
    const [checked16, setChecked16] = useState('');
    const [checked17, setChecked17] = useState('');
    const [checked18, setChecked18] = useState('');
    const [checked19, setChecked19] = useState('');
    const [checked20, setChecked20] = useState('');
    

    
    // Remarks Variables
    const [remarks1, setRemarks1] = useState('');
    const [remarks2, setRemarks2] = useState('');
    const [remarks3, setRemarks3] = useState('');
    const [remarks4, setRemarks4] = useState('');
    const [remarks5, setRemarks5] = useState('');
    const [remarks6, setRemarks6] = useState('');
    const [remarks7, setRemarks7] = useState('');
    const [remarks8, setRemarks8] = useState('');
    const [remarks9, setRemarks9] = useState('');
    const [remarks10, setRemarks10] = useState('');
    const [remarks11, setRemarks11] = useState('');
    const [remarks12, setRemarks12] = useState('');
    const [remarks13, setRemarks13] = useState('');
    const [remarks14, setRemarks14] = useState('');
    const [remarks15, setRemarks15] = useState('');
    const [remarks16, setRemarks16] = useState('');
    const [remarks17, setRemarks17] = useState('');
    const [remarks18, setRemarks18] = useState('');
    const [remarks19, setRemarks19] = useState('');
    const [remarks20, setRemarks20] = useState('');
    const [remarks21, setRemarks21] = useState('');
    const [remarks22, setRemarks22] = useState('');
    const [remarks23, setRemarks23] = useState('');
    const [remarks24, setRemarks24] = useState('');
    const [remarks25, setRemarks25] = useState('');
    const [remarks26, setRemarks26] = useState('');
    const [remarks27, setRemarks27] = useState('');
    const [remarks28, setRemarks28] = useState('');
    const [remarks29, setRemarks29] = useState('');
    const [remarks30, setRemarks30] = useState('');
    const [remarks31, setRemarks31] = useState('');
    const [remarks32, setRemarks32] = useState('');
    const [remarks33, setRemarks33] = useState('');
    const [remarks34, setRemarks34] = useState('');
    const [remarks35, setRemarks35] = useState('');
    const [remarks36, setRemarks36] = useState('');
    const [remarks37, setRemarks37] = useState('');


    

    // ------------ Submit Data to database Start ------------------- 
    const onPresss = ()=>{
        console.log('onPress');
    }

    // ------------ Submit Data to database Start -------------------

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
                        <Text style = {styles.FirstEntText}>1. Distance between foot step brackets</Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput} 
                                onChange = {setObservedValues1}
                                value = {observedValues1}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks1}
                                value = {remarks1}
                            />
                        </View>
                    </View>
                    {/* Form Entry First Section End */}
                    
                    {/* Form Entry Second Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>2. Welding  of bio tank bkt</Text>
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                    value="OK"
                                    status={checked1 === 'OK' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked1('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                    value="NOT OK"
                                    status={checked1 === 'NOT OK' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked1('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks2}
                                value = {remarks2}
                            />
                        </View>
                    </View>
                    {/* Form Entry Second Section End */}
                    
                    {/* Form Entry Third Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>3. Alignment of floor support bkt & pillar mounting channel and welding</Text>
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked2 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked2('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked2 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked2('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks3}
                                value = {remarks3}
                            />
                        </View>
                    </View>
                    {/* Form Entry Third Section End */}

                    {/* Form Entry Fourth Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>4. Fitment & welding of water tank bracket</Text>

                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked3 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked3('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked3 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked3('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks4}
                                value = {remarks4}
                            />
                        </View>
                    </View>
                    {/* Form Entry Fourth Section End */}
                    
                    {/* Form Entry Five Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <View style={styles.FiveEntryPart}>
                            <Text style = {styles.FirstEntText}>5a. Provision of LORO pipe BKT</Text>
                        
                            <View style = {styles.FirstEntObserve}>
                                <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setObservedValues2}
                                    value = {observedValues2}
                                />

                            </View>
                            <View style = {styles.FirstEntRemark}>
                                <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setRemarks5}
                                    value = {remarks5}
                                />
                            </View>

                        </View>
                        <View style={styles.FiveEntryPart}>
                            <Text style = {styles.FirstEntText}>5b. Indicator BKT holes </Text>
                            <View style = {styles.FirstEntObserve}>
                                <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setObservedValues3}
                                    value = {observedValues3}
                                ></TextInput>

                            </View>
                            <View style = {styles.FirstEntRemark}>
                                <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setRemarks6}
                                    value = {remarks6}
                                ></TextInput>
                            </View>

                        </View>
                        <View style={styles.FiveEntryPart}>
                            <Text style = {styles.FirstEntText}>5c. Anti skid valve holes </Text>
                
                            <View style = {styles.FirstEntObserve}>
                                <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setObservedValues4}
                                    value = {observedValues4}
                                ></TextInput>

                            </View>
                            <View style = {styles.FirstEntRemark}>
                                <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setRemarks7}
                                    value = {remarks7}
                                ></TextInput>
                            </View>

                        </View>
                        <View style={styles.FiveEntryPart}>
                            <Text style = {styles.FirstEntText}>5d. Releasing device hole </Text>
                        
                            <View style = {styles.FirstEntObserve}>
                                <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setObservedValues5}
                                    value = {observedValues5}
                                ></TextInput>

                            </View>
                            <View style = {styles.FirstEntRemark}>
                                <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setRemarks8}
                                    value = {remarks8}
                                ></TextInput>
                            </View>

                        </View>
                    </View>
                    {/* Form Entry Five Section End */}

                    {/* Form Entry Six Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>6. Fitment & welding of water pump bracket</Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked4 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked4('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked4 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked4('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks9}
                                value = {remarks9}
                            />
                        </View>
                    </View>
                    {/* Form Entry Six Section End */}
                    
                    {/* Form Entry Seven Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>7. Fitment & welding of console </Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked5 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked5('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked5 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked5('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks10}
                                value = {remarks10}
                            />
                        </View>
                    </View>
                    {/* Form Entry Seven Section End */}

                    
                    {/* Form Entry Eight Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>8. Cross member rib with sole bar and member joint welding</Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked6 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked6('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked6 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked6('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks11}
                                value = {remarks11}
                            />
                        </View>
                    </View>
                    {/* Form Entry Eight Section End */}

                     {/* Form Entry Nine Section Start */}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>9. Welding of pillar mounting member</Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked7 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked7('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked7 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked7('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks12}
                                value = {remarks12}
                            />
                        </View>
                    </View>
                    {/* Form Entry Nine Section End */}

                    {/* Form Entry Ten Section Start */}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>10. Guide distance (longitudinal/lateral distance)</Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setObservedValues6}
                                value = {observedValues6}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks13}
                                 value = {remarks13}
                            />
                        </View>
                    </View>
                    {/* Form Entry Ten Section End */}

                    {/* Form Entry Eleven Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                            <Text style = {styles.FirstEntText}>11. Pillar mounting distance</Text>
                        <View style={styles.FiveEntryPart}>
                            <Text style = {styles.FirstEntText}>a. Lateral center line to pillar center line at (PP to NPP)</Text>
                        
                            <View style = {styles.FirstEntObserve}>
                                <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setObservedValues7}
                                 value = {observedValues7}
                            />

                            </View>
                            <View style = {styles.FirstEntRemark}>
                                <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks14}
                                 value = {remarks14}
                            />
                            </View>

                        </View>
                        <View style={styles.FiveEntryPart}>
                            <Text style = {styles.FirstEntText}>b. Longitudinal center line to pillar center line at (PP to NPP)</Text>
                            <View style = {styles.SubObserve}>
                                <Text style = {styles.SubObserveText}>Observed value/condition</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setObservedValues8}
                                 value = {observedValues8}
                            ></TextInput>

                            </View>
                            <View style = {styles.SubObserveRemark}>
                                <Text style = {styles.SubObserveRemarkText}>REMARKS</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks15}
                                 value = {remarks15}
                            ></TextInput>
                            </View>

                        </View>
                    </View>
                    {/* Form Entry Eleven Section End */}

                    {/* Form Entry Twelve Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>12. Longitudinal distance between bio tank brackets.</Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setObservedValues9}
                                 value = {observedValues9}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks16}
                                 value = {remarks16}
                            />
                        </View>
                    </View>
                    {/* Form Entry Twelve Section End */}

                    {/* Form Entry Thirteen Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>13. Bio tank bracket between distance outer side for U/F center line (lateral) </Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setObservedValues10}
                                 value = {observedValues10}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks17}
                                 value = {remarks17}
                            />
                        </View>
                    </View>
                    {/* Form Entry Thirteen Section End */}

                    {/* Form Entry Fourteen Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>14. Bio tank bracket between distance inner side for U/F center line (lateral)</Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setObservedValues11}
                                 value = {observedValues11}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks18}
                                 value = {remarks18}
                            />
                        </View>
                    </View>
                    {/* Form Entry Fourteen Section End */}

                    {/* Form Entry Fifteen Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>15. Shunting bracket.</Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setObservedValues12}
                                 value = {observedValues12}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks19}
                                 value = {remarks19}
                            />
                        </View>
                    </View>
                    {/* Form Entry Fifteen Section End */}

                    {/* Form Entry Sixteen Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>16. Lifting pad.</Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setObservedValues13}
                                 value = {observedValues13}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks20}
                                 value = {remarks20}
                            />
                        </View>
                    </View>
                    {/* Form Entry Sixteen Section End */}

                    {/* Form Entry Seventeen Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>17. Twine pipe hole and BKT</Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked8 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked8('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked8 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked8('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks21}
                                 value = {remarks21}
                            />
                        </View>
                    </View>
                    {/* Form Entry Seventeen Section End */}
                    
                    {/* Form Entry Eighteen Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>18. Both sides covering plate welding.</Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked9 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked9('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked9 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked9('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks22}
                                 value = {remarks22}
                            />
                        </View>
                    </View>
                    {/* Form Entry Eighteen Section End */}

                    {/* Form Entry Nineteen Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>19. Pan head bracket welding.</Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked10 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked10('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked10 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked10('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks23}
                                 value = {remarks23}
                            />
                        </View>
                    </View>
                    {/* Form Entry Nineteen Section End */}

                    {/* Form Entry Twenty Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>20. Supporting member on trough sheet welding.</Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked11 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked11('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked11 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked11('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks24}
                                 value = {remarks24}
                            />
                        </View>
                    </View>
                    {/* Form Entry Twenty Section End */}

                    {/* Form Entry Twenty One Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>21. Battery box bracket hole (18 Ø) distance from hole center to center. 
                            (L2T,L3T)and diagonal should be equal
                        </Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setObservedValues14}
                                 value = {observedValues14}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks25}
                                 value = {remarks25}
                            />
                        </View>
                    </View>
                    {/* Form Entry Twenty One Section End */}

                    {/* Form Entry Twenty Two Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>22. Transformer bracket hole (18 Ø,8 nos. ) distance from hole center to center.
                            (2T,3T) and diagonal should be equal
                        </Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setObservedValues15}
                                 value = {observedValues15}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks26}
                                 value = {remarks26}
                            />
                        </View>
                    </View>
                    {/* Form Entry Twenty Two Section End */}

                    {/* Form Entry Twenty Third Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>23. Air brake module hole (12 Ø) distance from hole center to center. 
                            and diagonal should be equal  
                        </Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setObservedValues16}
                                 value = {observedValues16}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks27}
                                 value = {remarks27}
                            />
                        </View>
                    </View>
                    {/* Form Entry Twenty Third Section End */}

                    {/* Form Entry Twenty Four Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>24. Feeder junction hole(11 Ø) on head stock  </Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                                <RadioButton
                                     value="Provided"
                                     status={checked12 === 'Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked12('Provided')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                                <RadioButton
                                     value="Not Provided"
                                     status={checked12 === 'Not Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked12('Not Provided')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks28}
                                 value = {remarks28}
                            />
                        </View>
                    </View>
                    {/* Form Entry Twenty Four Section End */}

                    {/* Form Entry Twenty Five Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>25. CBC uncoupling device hole  </Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                                <RadioButton
                                     value="Provided"
                                     status={checked13 === 'Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked13('Provided')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                                <RadioButton
                                     value="Not Provided"
                                     status={checked13 === 'Not Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked13('Not Provided')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks29}
                                 value = {remarks29}
                            />
                        </View>
                    </View>
                    {/* Form Entry Twenty Five Section End */}

                    {/* Form Entry Twenty Six Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>26.Drain hole on trough sheet </Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                                <RadioButton
                                     value="Provided"
                                     status={checked14 === 'Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked14('Provided')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                                <RadioButton
                                     value="Not Provided"
                                     status={checked14 === 'Not Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked14('Not Provided')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks30}
                                 value = {remarks30}
                            />
                        </View>
                    </View>
                    {/* Form Entry Twenty Six Section End */}

                    {/* Form Entry Twenty Seven Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>27. Both side front part area wash washing drain hole </Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                                <RadioButton
                                     value="Provided"
                                     status={checked15 === 'Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked15('Provided')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                                <RadioButton
                                     value="Not Provided"
                                     status={checked15 === 'Not Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked15('Not Provided')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks31}
                                 value = {remarks31}
                            />
                        </View>
                    </View>
                    {/* Form Entry Twenty Seven Section End */}

                    {/* Form Entry Twenty Eight Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>28. Sole bar joint welding </Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked16 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked16('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked16 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked16('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks32}
                                 value = {remarks32}
                            />
                        </View>
                    </View>
                    {/* Form Entry Twenty Eight Section End */}

                    {/* Form Entry Twenty Nine Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>29. Door corner joint welding and grinding  </Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked17 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked17('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked17 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked17('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks33}
                                 value = {remarks33}
                            />
                        </View>
                    </View>
                    {/* Form Entry Twenty Nine Section End */}

                    {/* Form Entry Thirty Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>30. Sensor bracket location.</Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked18 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked18('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked18 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked18('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks34}
                                 value = {remarks34}
                            />
                        </View>
                    </View>
                    {/* Form Entry Thirty Section End */}

                    {/* Form Entry Thirty One Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>31. Both side Fiba bkt for air spring bogie </Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                                <RadioButton
                                     value="Provided"
                                     status={checked19 === 'Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked19('Provided')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                                <RadioButton
                                     value="Not Provided"
                                     status={checked19 === 'Not Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked19('Not Provided')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks35}
                                 value = {remarks35}
                            />
                        </View>
                    </View>
                    {/* Form Entry Thirty One  Section End */}

                    {/* Form Entry Thirty Two Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>32. Reservoir tank bkt for air spring bogie </Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                                <RadioButton
                                     value="Provided"
                                     status={checked20 === 'Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked20('Provided')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                                <RadioButton
                                     value="Not Provided"
                                     status={checked20 === 'Not Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked20('Not Provided')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks36}
                                 value = {remarks36}
                            />
                        </View>
                    </View>
                    {/* Form Entry Thirty Two  Section End */}

                    {/* Form Entry Thirty Third Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>33. Curve roll stopper bktr </Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setObservedValues17}
                                 value = {observedValues17}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks37}
                                 value = {remarks37}
                            />
                        </View>
                    </View>
                    {/* Form Entry Thirty Third Section End */}

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

         {/* -------------------Mainheading Part End----------------- */}    
        </ScrollView>

  )
}

export default AUnderFrameLBACT;

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