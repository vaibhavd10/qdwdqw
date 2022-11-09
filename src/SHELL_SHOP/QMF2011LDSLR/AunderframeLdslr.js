import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';

const AunderframeLdslr = ({navigation}) => {
     //  -----------------}--MainForm Shell Info Variables-----------------
   const [shelltypes6, setShellTypes6] = useState('');
   const [shifts6, SetShifts6] = useState('');
   const [dates6, setDates6] = useState('');



    // Observed Values Variable
    const [observedValues40, setObservedValues40] = useState('');
    const [observedValues41, setObservedValues41] = useState('');
    const [observedValues42, setObservedValues42] = useState('');
    const [observedValues43, setObservedValues43] = useState('');
    const [observedValues44, setObservedValues44] = useState('');
    const [observedValues45, setObservedValues45] = useState('');
    const [observedValues46, setObservedValues46] = useState('');
    const [observedValues47, setObservedValues47] = useState('');
    const [observedValues48, setObservedValues48] = useState('');
    const [observedValues49, setObservedValues49] = useState('');
    const [observedValues50, setObservedValues50] = useState('');
    const [observedValues51, setObservedValues51] = useState('');
    const [observedValues52, setObservedValues52] = useState('');
    const [observedValues53, setObservedValues53] = useState('');
    const [observedValues54, setObservedValues54] = useState('');
    const [observedValues55, setObservedValues55] = useState('');
    const [observedValues56, setObservedValues56] = useState('');
    const [observedValues57, setObservedValues57] = useState('');
    const [observedValues58, setObservedValues58] = useState('');
    const [observedValues59, setObservedValues59] = useState('');
    const [observedValues60, setObservedValues60] = useState('');
    const [observedValues61, setObservedValues61] = useState('');
    const [observedValues62, setObservedValues62] = useState('');
    const [observedValues63, setObservedValues63] = useState('');
    const [observedValues64, setObservedValues64] = useState('');
    const [observedValues65, setObservedValues65] = useState('');
    const [observedValues66, setObservedValues66] = useState('');
    const [observedValues67, setObservedValues67] = useState('');
    const [observedValues68, setObservedValues68] = useState('');
    const [observedValues69, setObservedValues69] = useState('');

    // Checked Variable
    const [checked72, setChecked72] = useState('');
    const [checked73, setChecked73] = useState('');
    const [checked74, setChecked74] = useState('');
    const [checked75, setChecked75] = useState('');
    const [checked76, setChecked76] = useState('');
    const [checked77, setChecked77] = useState('');
    const [checked78, setChecked78] = useState('');
    const [checked79, setChecked79] = useState('');
    const [checked80, setChecked80] = useState('');
    const [checked81, setChecked81] = useState('');
    const [checked82, setChecked82] = useState('');
    const [checked83, setChecked83] = useState('');
    const [checked84, setChecked84] = useState('');
    const [checked85, setChecked85] = useState('');
    const [checked86, setChecked86] = useState('');
    const [checked87, setChecked87] = useState('');
    const [checked88, setChecked88] = useState('');
    const [checked89, setChecked89] = useState('');
    const [checked90, setChecked90] = useState('');
    
    
    // Remarks Variables
    const [remarks111, setRemarks111] = useState('');
    const [remarks112, setRemarks112] = useState('');
    const [remarks113, setRemarks113] = useState('');
    const [remarks114, setRemarks114] = useState('');
    const [remarks115, setRemarks115] = useState('');
    const [remarks116, setRemarks116] = useState('');
    const [remarks117, setRemarks117] = useState('');
    const [remarks118, setRemarks118] = useState('');
    const [remarks119, setRemarks119] = useState('');
    const [remarks120, setRemarks120] = useState('');
    const [remarks121, setRemarks121] = useState('');
    const [remarks122, setRemarks122] = useState('');
    const [remarks123, setRemarks123] = useState('');
    const [remarks124, setRemarks124] = useState('');
    const [remarks125, setRemarks125] = useState('');
    const [remarks126, setRemarks126] = useState('');
    const [remarks127, setRemarks127] = useState('');
    const [remarks128, setRemarks128] = useState('');
    const [remarks129, setRemarks129] = useState('');
    const [remarks130, setRemarks130] = useState('');
    const [remarks131, setRemarks131] = useState('');
    const [remarks132, setRemarks132] = useState('');
    const [remarks133, setRemarks133] = useState('');
    const [remarks134, setRemarks134] = useState('');
    const [remarks135, setRemarks135] = useState('');
    const [remarks136, setRemarks136] = useState('');
    const [remarks137, setRemarks137] = useState('');
    const [remarks138, setRemarks138] = useState('');
    const [remarks139, setRemarks139] = useState('');
    const [remarks140, setRemarks140] = useState('');
    const [remarks141, setRemarks141] = useState('');
    const [remarks142, setRemarks142] = useState('');
    const [remarks143, setRemarks143] = useState('');
    const [remarks144, setRemarks144] = useState('');
    const [remarks145, setRemarks145] = useState('');
    const [remarks146, setRemarks146] = useState('');
    const [remarks147, setRemarks147] = useState('');
    const [remarks148, setRemarks148] = useState('');
    const [remarks149, setRemarks149] = useState('');
    const [remarks150, setRemarks150] = useState('');
    const [remarks151, setRemarks151] = useState('');
    const [remarks152, setRemarks152] = useState('');
    const [remarks153, setRemarks153] = useState('');
    const [remarks154, setRemarks154] = useState('');
    const [remarks155, setRemarks155] = useState('');
    const [remarks156, setRemarks156] = useState('');
    const [remarks157, setRemarks157] = useState('');
    const [remarks158, setRemarks158] = useState('');
    const [remarks159, setRemarks159] = useState('');

   
   




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
                        {/* Form Entry First Sub1 Section Start */}
                        <View style={styles.FiveEntryPart}>
                            <Text style = {styles.FirstEntText}>1a. Distance between foot step brackets</Text>
                        
                            <View style = {styles.FirstEntObserve}>
                                <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setObservedValues40}
                                    value = {observedValues40}
                                />

                            </View>
                            <View style = {styles.FirstEntRemark}>
                                <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setRemarks111}
                                    value = {remarks111}
                                />
                            </View>

                        </View>
                        {/* Form Entry First Sub1 Section End */}
                        
                        {/* Form Entry First Sub2 Section Start */}
                        <View style={styles.FiveEntryPart}>
                            <Text style = {styles.FirstEntText}>1b. Welding  of bio tank bkt</Text>
                            <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                    value="OK"
                                    status={checked72 === 'OK' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked72('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                    value="NOT OK"
                                    status={checked72 === 'NOT OK' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked72('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks112}
                                value = {remarks112}
                            />
                        </View>
                        {/* Form Entry First Sub2 Section End */}

                        </View>
                        <View style={styles.FiveEntryPart}>
                        <Text style = {styles.FirstEntText}>1c. Alignment of floor support bkt & pillar mounting channel and welding</Text>
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked73 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked73('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked73 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked73('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks113}
                                value = {remarks113}
                            />
                        </View>

                        </View>
                        
                    </View>
                    {/* Form Entry First Section End */}

                    {/* Form Entry Second Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>2. Fitment & welding of water tank bracket</Text>

                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked74 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked74('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked74 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked74('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks114}
                                value = {remarks114}
                            />
                        </View>
                    </View>
                    {/* Form Entry Second Section End */}
                    
                    {/* Form Entry Three Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <View style={styles.FiveEntryPart}>
                            <Text style = {styles.FirstEntText}>3a. Provision of LORO pipe BKT</Text>
                        
                            <View style = {styles.FirstEntObserve}>
                                <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setObservedValues41}
                                    value = {observedValues41}
                                />

                            </View>
                            <View style = {styles.FirstEntRemark}>
                                <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setRemarks115}
                                    value = {remarks115}
                                />
                            </View>

                        </View>
                        <View style={styles.FiveEntryPart}>
                            <Text style = {styles.FirstEntText}>3b. Indicator BKT holes </Text>
                            <View style = {styles.FirstEntObserve}>
                                <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setObservedValues42}
                                    value = {observedValues42}
                                />

                            </View>
                            <View style = {styles.FirstEntRemark}>
                                <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setRemarks116}
                                    value = {remarks116}
                                />
                            </View>

                        </View>
                        <View style={styles.FiveEntryPart}>
                            <Text style = {styles.FirstEntText}>3c. Anti skid valve holes </Text>
                
                            <View style = {styles.FirstEntObserve}>
                                <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setObservedValues43}
                                    value = {observedValues43}
                                />

                            </View>
                            <View style = {styles.FirstEntRemark}>
                                <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setRemarks117}
                                    value = {remarks117}
                                />
                            </View>

                        </View>
                        <View style={styles.FiveEntryPart}>
                            <Text style = {styles.FirstEntText}>3d. Releasing device hole </Text>
                        
                            <View style = {styles.FirstEntObserve}>
                                <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setObservedValues44}
                                    value = {observedValues44}
                                />

                            </View>
                            <View style = {styles.FirstEntRemark}>
                                <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setRemarks118}
                                    value = {remarks118}
                                />
                            </View>

                        </View>
                    </View>
                    {/* Form Entry Three Section End */}

                    {/* Form Entry Four Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>4. Fitment & welding of water pump bracket</Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked75 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked75('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked75 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked75('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks119}
                                value = {remarks119}
                            ></TextInput>
                        </View>
                    </View>
                    {/* Form Entry Four Section End */}
                    
                    {/* Form Entry Five Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>5. Fitment & welding of console </Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked76 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked76('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked76 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked76('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks120}
                                value = {remarks120}
                            ></TextInput>
                        </View>
                    </View>
                    {/* Form Entry Five Section End */}

                    
                    {/* Form Entry Six Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>6. Cross member rib with sole bar and member joint welding</Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked77 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked77('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked77 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked77('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks121}
                                value = {remarks121}
                            ></TextInput>
                        </View>
                    </View>
                    {/* Form Entry Six Section End */}

                     {/* Form Entry Seven Section Start */}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>7. Welding of pillar mounting member</Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked78 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked78('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked78 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked78('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks122}
                                value = {remarks122}
                            ></TextInput>
                        </View>
                    </View>
                    {/* Form Entry Seven Section End */}

                    {/* Form Entry Eight Section Start */}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>8. Guide distance (longitudinal/lateral distance)</Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setObservedValues45}
                                value = {observedValues45}
                            ></TextInput>
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks123}
                                 value = {remarks123}
                            ></TextInput>
                        </View>
                    </View>
                    {/* Form Entry Eight Section End */}

                    {/* -----------------Form Entry Nine Section Start --------------*/}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>9. Pillar mounting distance (Passenger area)</Text>
                        {/* -----------------Form Entry Sub1 Section Start --------------*/}
                        <View style={styles.FiveEntryPart}>
                            <Text style = {styles.FirstEntText}>9a. Lateral </Text>
                        
                            <View style = {styles.FirstEntObserve}>
                                <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setObservedValues46}
                                 value = {observedValues46}
                            />

                            </View>
                            <View style = {styles.FirstEntRemark}>
                                <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks124}
                                 value = {remarks124}
                            />
                            </View>

                        </View>

                        {/* -----------------Form Entry Sub1 Section End --------------*/}

                        {/* -----------------Form Entry Sub2 Section Start --------------*/}
                        <View style={styles.FiveEntryPart}>
                            <Text style = {styles.FirstEntText}>9b. Longitudinal </Text>
                            <View style = {styles.SubObserve}>
                                <Text style = {styles.SubObserveText}>Observed value/condition</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setObservedValues47}
                                 value = {observedValues47}
                            />

                            </View>
                            <View style = {styles.SubObserveRemark}>
                                <Text style = {styles.SubObserveRemarkText}>REMARKS</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks125}
                                 value = {remarks125}
                            />
                            </View>

                        </View>

                        {/* -----------------Form Entry Sub2 Section End --------------*/}
                    </View>
                    {/* ----------- Form Entry Nine Section End -------------- */}

                    {/* Form Entry Ten Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>10. Pillar mounting distance ( Disabled Passenger area) </Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setObservedValues48}
                                 value = {observedValues48}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks126}
                                 value = {remarks126}
                            />
                        </View>
                    </View>
                    {/* Form Entry Ten Section End */}

                     {/* -----------------Form Entry Eleven Section Start --------------*/}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>11. Lav. area channel between distance</Text>
                        {/* -----------------Form Entry Sub1 Section Start --------------*/}
                        <View style={styles.FiveEntryPart}>
                            <Text style = {styles.FirstEntText}>11a.Disabled area</Text>
                        
                            <View style = {styles.FirstEntObserve}>
                                <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setObservedValues49}
                                 value = {observedValues49}
                            />

                            </View>
                            <View style = {styles.FirstEntRemark}>
                                <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks127}
                                 value = {remarks127}
                            />
                            </View>

                        </View>

                        {/* -----------------Form Entry Sub1 Section End --------------*/}

                        {/* -----------------Form Entry Sub2 Section Start --------------*/}
                        <View style={styles.FiveEntryPart}>
                            <Text style = {styles.FirstEntText}>11b. Passenger area </Text>
                            <View style = {styles.SubObserve}>
                                <Text style = {styles.SubObserveText}>Observed value/condition</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setObservedValues50}
                                 value = {observedValues50}
                            />

                            </View>
                            <View style = {styles.SubObserveRemark}>
                                <Text style = {styles.SubObserveRemarkText}>REMARKS</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks128}
                                 value = {remarks128}
                            />
                            </View>

                        </View>

                        {/* -----------------Form Entry Sub2 Section End --------------*/}
                    </View>
                    {/* ----------- Form Entry Eleven Section End -------------- */}

                     {/* Form Entry Twelve Section Start */}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>12. Distance between bio tank brackets Holes.(Longitudinal x Lateral</Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setObservedValues51}
                                 value = {observedValues51}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks129}
                                 value = {remarks129}
                            />
                        </View>
                    </View>
                    {/* Form Entry Twelve Section End */}

                     {/* Form Entry Thirteen Section Start */}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>13. Longitudinal distance between bio tank brackets hole center in guard room.</Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setObservedValues52}
                                 value = {observedValues52}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks130}
                                 value = {remarks130}
                            />
                        </View>
                    </View>
                    {/* Form Entry Thirteen Section End */}

                     {/* Form Entry Fourteen Section Start */}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>14. Shunting bracket.</Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setObservedValues53}
                                 value = {observedValues53}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks131}
                                 value = {remarks131}
                            />
                        </View>
                    </View>
                    {/* Form Entry Fourteen Section End */}

                     {/* ----------Form Entry Fifteen Section Start -----------*/}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>15. Lifting pad.</Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setObservedValues54}
                                 value = {observedValues54}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks132}
                                 value = {remarks132}
                            />
                        </View>
                    </View>
                    {/* -----------Form Entry Fifteen Section End------------- */}

                       {/* Form Entry Sixteen Section Start */}
                       <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>16. Twine pipe hole and BKT(50mm)</Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked79 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked79('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked79 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked79('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks133}
                                value = {remarks133}
                            ></TextInput>
                        </View>
                    </View>
                    {/* Form Entry Sixteen Section End */}

                       {/* Form Entry Seventeen Section Start */}
                       <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>17. Both sides covering plate welding.</Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked80 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked80('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked80 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked80('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks134}
                                value = {remarks134}
                            ></TextInput>
                        </View>
                    </View>
                    {/* Form Entry Seventeen Section End */}

                       {/* Form Entry Eighteen Section Start */}
                       <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>18. Pan head bracket welding.</Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked81 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked81('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked81 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked81('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks135}
                                value = {remarks135}
                            ></TextInput>
                        </View>
                    </View>
                    {/* Form Entry Eighteen Section End */}

                    {/* Form Entry Nineteen Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>19. Supporting member on trough sheet welding.</Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked82 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked82('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked82 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked82('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks136}
                                value = {remarks136}
                            ></TextInput>
                        </View>
                    </View>
                    {/* Form Entry Nineteen Section End */}

                    {/* ----------Form Entry Twenty Section Start -----------*/}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>20. Battery box bracket hole (18 Ø) distance from hole center to center 
                            and diagonal should be equal
                        </Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setObservedValues55}
                                 value = {observedValues55}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks137}
                                 value = {remarks137}
                            />
                        </View>
                    </View>
                    {/* -----------Form Entry Twenty  Section End------------- */}

                    {/* -----------------Form Entry Twenty One Section Start --------------*/}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>21. Transformer bracket hole (18 Ø,8 nos. ) distance from hole center to center
                            and diagonal should be equal
                        </Text>
                        {/* -----------------Form Entry Sub1 Section Start --------------*/}
                        <View style={styles.FiveEntryPart}>
                            <Text style = {styles.FirstEntText}>21a. LH side</Text>
                        
                            <View style = {styles.FirstEntObserve}>
                                <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setObservedValues56}
                                 value = {observedValues56}
                            />

                            </View>
                            <View style = {styles.FirstEntRemark}>
                                <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks138}
                                 value = {remarks138}
                            />
                            </View>

                        </View>

                        {/* -----------------Form Entry Sub1 Section End --------------*/}

                        {/* -----------------Form Entry Sub2 Section Start --------------*/}
                        <View style={styles.FiveEntryPart}>
                            <Text style = {styles.FirstEntText}>11b. RH side </Text>
                            <View style = {styles.SubObserve}>
                                <Text style = {styles.SubObserveText}>Observed value/condition</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setObservedValues57}
                                 value = {observedValues57}
                            />

                            </View>
                            <View style = {styles.SubObserveRemark}>
                                <Text style = {styles.SubObserveRemarkText}>REMARKS</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks139}
                                 value = {remarks139}
                            />
                            </View>

                        </View>

                        {/* -----------------Form Entry Sub2 Section End --------------*/}
                    </View>
                    {/* ----------- Form Entry Twenty One Section End -------------- */}

                     {/* ----------Form Entry Twenty Two Section Start -----------*/}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>22. Air brake module hole (12 Ø) distance from hole center line 
                            and hole between distance 
                        </Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setObservedValues58}
                                 value = {observedValues58}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks140}
                                 value = {remarks140}
                            />
                        </View>
                    </View>
                    {/* -----------Form Entry Twenty Two  Section End------------- */}

                     {/* Form Entry Twenty Three Section Start */}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>23. Feeder junction hole(11 Ø) on head stock </Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                                <RadioButton
                                     value="Provided"
                                     status={checked83 === 'Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked83('Provided')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                                <RadioButton
                                     value="Not Provided"
                                     status={checked83 === 'Not Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked83('Not Provided')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks141}
                                value = {remarks141}
                            ></TextInput>
                        </View>
                    </View>
                    {/* Form Entry Twenty Three Section End */}

                     {/* ----------Form Entry Twenty Four Section Start -----------*/}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>24. Air brake module hole (12 Ø) distance from hole center line</Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setObservedValues59}
                                 value = {observedValues59}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks142}
                                 value = {remarks142}
                            />
                        </View>
                    </View>
                    {/* -----------Form Entry Twenty Four Section End------------- */}  

                     {/* Form Entry Twenty Five Section Start */}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>25. CBC uncoupling device hole </Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                                <RadioButton
                                     value="Provided"
                                     status={checked84 === 'Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked84('Provided')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                                <RadioButton
                                     value="Not Provided"
                                     status={checked84 === 'Not Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked84('Not Provided')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks143}
                                value = {remarks143}
                            ></TextInput>
                        </View>
                    </View>
                    {/* Form Entry Twenty Five Section End */}

                     {/* Form Entry Twenty Six Section Start */}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>26. Drain hole on trough sheet </Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                                <RadioButton
                                     value="Provided"
                                     status={checked85 === 'Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked85('Provided')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                                <RadioButton
                                     value="Not Provided"
                                     status={checked85 === 'Not Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked85('Not Provided')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks144}
                                value = {remarks144}
                            ></TextInput>
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
                                     status={checked86 === 'Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked86('Provided')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                                <RadioButton
                                     value="Not Provided"
                                     status={checked86 === 'Not Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked86('Not Provided')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks145}
                                value = {remarks145}
                            ></TextInput>
                        </View>
                    </View>
                    {/* Form Entry Twenty Seven Section End */}

                    {/* Form Entry Twenty Eight Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>28. Sole bar joint welding</Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked87 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked87('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked87 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked87('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks146}
                                value = {remarks146}
                            ></TextInput>
                        </View>
                    </View>
                    {/* Form Entry Twenty Eight Section End */}

                    {/* Form Entry Twenty Nine Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>29. Door corner joint welding and grinding</Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                     value="OK"
                                     status={checked88 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked88('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked88 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked88('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks147}
                                value = {remarks147}
                            ></TextInput>
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
                                     status={checked89 === 'OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked89('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                     value="NOT OK"
                                     status={checked89 === 'NOT OK' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked89('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks148}
                                value = {remarks148}
                            ></TextInput>
                        </View>
                    </View>
                    {/* Form Entry Thirty Section End */}

                     {/* ----------Form Entry Thirty One Section Start -----------*/}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>31. Capacitor bank hole distance (13 Ø, 04 nos.)</Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setObservedValues60}
                                 value = {observedValues60}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks149}
                                 value = {remarks149}
                            />
                        </View>
                    </View>
                    {/* -----------Form Entry Thirty One Section End------------- */} 

                     {/* ----------Form Entry Thirty Two Section Start -----------*/}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>32. Distance of module for D.A. set mounting(Lateral distance)</Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setObservedValues61}
                                 value = {observedValues61}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks150}
                                 value = {remarks150}
                            />
                        </View>
                    </View>
                    {/* -----------Form Entry Thirty Two Section End------------- */} 

                     {/* Form Entry Thirty Three Section Start */}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>33. Distance of module for D.A. set mounting(Longitudinal distance) </Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                                <RadioButton
                                     value="Provided"
                                     status={checked90 === 'Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked90('Provided')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                                <RadioButton
                                     value="Not Provided"
                                     status={checked90 === 'Not Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked90('Not Provided')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks151}
                                value = {remarks151}
                            ></TextInput>
                        </View>
                    </View>
                    {/* Form Entry Thirty Three Section End */}


                     {/* ----------Form Entry Thirty Four Section Start -----------*/}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>34. Both side Fiba bkt for air spring bogie</Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setObservedValues62}
                                 value = {observedValues62}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks152}
                                 value = {remarks152}
                            />
                        </View>
                    </View>
                    {/* -----------Form Entry Thirty Four Section End------------- */} 

                     {/* ----------Form Entry Thirty Five Section Start -----------*/}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>35. Reservoir  tank bkt between distance and  hole for air spring bogie</Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setObservedValues63}
                                 value = {observedValues63}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks153}
                                 value = {remarks153}
                            />
                        </View>
                    </View>
                    {/* -----------Form Entry Thirty Five Section End------------- */} 

                     {/* ----------Form Entry Thirty Six Section Start -----------*/}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>36. Distance between CA mounting arrangement hole(longitudinal/lateral)</Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setObservedValues64}
                                 value = {observedValues64}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks154}
                                 value = {remarks154}
                            />
                        </View>
                    </View>
                    {/* -----------Form Entry Thirty Six Section End------------- */} 

                     {/* ----------Form Entry Thirty Seven Section Start -----------*/}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>37. Battery charging bkt hole distance</Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setObservedValues65}
                                 value = {observedValues65}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks155}
                                 value = {remarks155}
                            />
                        </View>
                    </View>
                    {/* -----------Form Entry Thirty Seven Section End------------- */} 

                     {/* ----------Form Entry Thirty Eight Section Start -----------*/}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>38. Bkt for air reservoir </Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setObservedValues66}
                                 value = {observedValues66}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks156}
                                 value = {remarks156}
                            />
                        </View>
                    </View>
                    {/* -----------Form Entry Thirty Eight Section End------------- */} 

                     {/* ----------Form Entry Thirty Nine Section Start -----------*/}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>39. Fuel tank mounting bkt distance(Lateral distance)</Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setObservedValues67}
                                 value = {observedValues67}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks157}
                                 value = {remarks157}
                            />
                        </View>
                    </View>
                    {/* -----------Form Entry Thirty Nine Section End------------- */} 

                     {/* ----------Form Entry Fourty Section Start -----------*/}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>40. Fuel tank mounting bkt  hole distance(Longitudinal side) </Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setObservedValues68}
                                 value = {observedValues68}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks158}
                                 value = {remarks158}
                            />
                        </View>
                    </View>
                    {/* -----------Form Entry Fourty Section End------------- */} 

                     {/* ----------Form Entry Fourty One Section Start -----------*/}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>41. Curve roll stopper bktr</Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setObservedValues69}
                                 value = {observedValues69}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks159}
                                 value = {remarks159}
                            />
                        </View>
                    </View>
                    {/* -----------Form Entry Fourty One Section End------------- */} 











                    
                   {/* ********************    Submit Button Code Start   ************ */}

          <View style={styles.submitButton}>
            <TouchableOpacity style={styles.forBomx} >
              <Text style={styles.forBomxText}>Submit</Text>
            </TouchableOpacity>
          </View>
          {/* ********************    Submit Button Code End   ************ */}
                </View>

                {/* Form Entery Section 1St End */}
                
            </View>
        </ScrollView>

  )
}

export default AunderframeLdslr;

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


