import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View , Image} from 'react-native';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';

const EShellLWFAC = () => {
    //  -------------------MainForm Shell Info Variables-----------------
   const [shelltypes5, setShellTypes5] = useState('');
   const [shifts5, SetShifts5] = useState('');
   const [dates5, setDates5] = useState('');


    // Observed Values Variable
    const [observedValues27, setObservedValues27] = useState(''); 
    const [observedValues28, setObservedValues28] = useState('');
    const [observedValues29, setObservedValues29] = useState('');
    const [observedValues30, setObservedValues30] = useState('');
    const [observedValues31, setObservedValues31] = useState('');
    const [observedValues32, setObservedValues32] = useState('');
    const [observedValues33, setObservedValues33] = useState('');
    const [observedValues34, setObservedValues34] = useState('');
    const [observedValues35, setObservedValues35] = useState('');
    const [observedValues36, setObservedValues36] = useState('');
    const [observedValues37, setObservedValues37] = useState('');
    const [observedValues38, setObservedValues38] = useState('');
    const [observedValues39, setObservedValues39] = useState('');
    
    // Checked Variable
    const [checked51, setChecked51] = useState(''); 
    const [checked52, setChecked52] = useState('');
    const [checked53, setChecked53] = useState('');
    const [checked54, setChecked54] = useState('');
    const [checked55, setChecked55] = useState('');
    const [checked56, setChecked56] = useState('');
    const [checked57, setChecked57] = useState('');
    const [checked58, setChecked58] = useState('');
    const [checked59, setChecked59] = useState('');
    const [checked60, setChecked60] = useState('');
    const [checked61, setChecked61] = useState('');
    const [checked62, setChecked62] = useState('');
    const [checked63, setChecked63] = useState('');
    const [checked64, setChecked64] = useState('');
    const [checked65, setChecked65] = useState('');
    const [checked66, setChecked66] = useState('');
    const [checked67, setChecked67] = useState('');
    const [checked68, setChecked68] = useState('');
    const [checked69, setChecked69] = useState('');
    const [checked70, setChecked70] = useState('');
    const [checked71, setChecked71] = useState('');
    
    // Remarks Variables
    const [remarks77, setRemarks77] = useState(''); 
    const [remarks78, setRemarks78] = useState('');
    const [remarks79, setRemarks79] = useState('');
    const [remarks80, setRemarks80] = useState(''); 
    const [remarks81, setRemarks81] = useState('');
    const [remarks82, setRemarks82] = useState('');
    const [remarks83, setRemarks83] = useState('');
    const [remarks84, setRemarks84] = useState('');
    const [remarks85, setRemarks85] = useState('');
    const [remarks86, setRemarks86] = useState('');
    const [remarks87, setRemarks87] = useState('');
    const [remarks88, setRemarks88] = useState('');
    const [remarks89, setRemarks89] = useState('');
    const [remarks90, setRemarks90] = useState('');
    const [remarks91, setRemarks91] = useState('');
    const [remarks92, setRemarks92] = useState('');
    const [remarks93, setRemarks93] = useState('');
    const [remarks94, setRemarks94] = useState('');
    const [remarks95, setRemarks95] = useState('');
    const [remarks96, setRemarks96] = useState('');
    const [remarks97, setRemarks97] = useState('');
    const [remarks98, setRemarks98] = useState('');
    const [remarks99, setRemarks99] = useState('');
    const [remarks100, setRemarks100] = useState('');
    const [remarks101, setRemarks101] = useState('');
    const [remarks102, setRemarks102] = useState('');
    const [remarks103, setRemarks103] = useState('');
    const [remarks104, setRemarks104] = useState('');
    const [remarks105, setRemarks105] = useState('');
    const [remarks106, setRemarks106] = useState('');
    const [remarks107, setRemarks107] = useState('');
    const [remarks108, setRemarks108] = useState('');
    const [remarks109, setRemarks109] = useState('');
    const [remarks110, setRemarks110] = useState('');
    
    
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
                        <Text style = {styles.FirstEntText}>1. Alignment of roof  arch, carline arch,  body pillar & U/F center line</Text>
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                    value="OK"
                                    status={checked51 === 'OK' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked51('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                    value="NOT OK"
                                    status={checked51 === 'NOT OK' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked51('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks77}
                                value = {remarks77}
                            ></TextInput>
                        </View>
                    </View>
                    {/* Form Entry fIRST Section End */}   

                     {/* Form Entry Second Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                    <Text style = {styles.FirstEntText}>2. Width & height of main entrance door (For plug door)</Text>
                        <View style={styles.FiveEntryPart}>
                            <Text style = {styles.FirstEntText}>2a. D1(1010(+3/-2)(Tejas))</Text>
                        
                            <View style = {styles.FirstEntObserve}>
                                <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setObservedValues27}
                                    value = {observedValues27}
                                ></TextInput>

                            </View>
                            <View style = {styles.FirstEntRemark}>
                                <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setRemarks78}
                                    value = {remarks78}
                                ></TextInput>
                            </View>

                        </View>
                        <View style={styles.FiveEntryPart}>
                            <Text style = {styles.FirstEntText}>2b. D1(1870±4,2006±6)</Text>
                            <View style = {styles.FirstEntObserve}>
                                <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setObservedValues28}
                                    value = {observedValues28}
                                ></TextInput>

                            </View>
                            <View style = {styles.FirstEntRemark}>
                                <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setRemarks79}
                                    value = {remarks79}
                                ></TextInput>
                            </View>

                        </View>
                        <View style={styles.FiveEntryPart}>
                            <Text style = {styles.FirstEntText}>2c. D2(1010(+3/-2)(Tejas)) </Text>
                
                            <View style = {styles.FirstEntObserve}>
                                <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setObservedValues29}
                                    value = {observedValues29}
                                ></TextInput>

                            </View>
                            <View style = {styles.FirstEntRemark}>
                                <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setRemarks80}
                                    value = {remarks80}
                                ></TextInput>
                            </View>

                        </View>
                        <View style={styles.FiveEntryPart}>
                            <Text style = {styles.FirstEntText}>2d. D2(1870±4,2006±6)</Text>
                        
                            <View style = {styles.FirstEntObserve}>
                                <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setObservedValues30}
                                    value = {observedValues30}
                                ></TextInput>

                            </View>
                            <View style = {styles.FirstEntRemark}>
                                <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setRemarks81}
                                    value = {remarks81}
                                ></TextInput>
                            </View>

                        </View>
                        <View style={styles.FiveEntryPart}>
                            <Text style = {styles.FirstEntText}>2e. D3(1010(+3/-2)(Tejas)) </Text>
                
                            <View style = {styles.FirstEntObserve}>
                                <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setObservedValues29}
                                    value = {observedValues29}
                                ></TextInput>

                            </View>
                            <View style = {styles.FirstEntRemark}>
                                <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setRemarks80}
                                    value = {remarks80}
                                ></TextInput>
                            </View>

                        </View>
                        <View style={styles.FiveEntryPart}>
                            <Text style = {styles.FirstEntText}>2f. D3(1870±4,2006±6)</Text>
                        
                            <View style = {styles.FirstEntObserve}>
                                <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setObservedValues30}
                                    value = {observedValues30}
                                ></TextInput>

                            </View>
                            <View style = {styles.FirstEntRemark}>
                                <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setRemarks81}
                                    value = {remarks81}
                                ></TextInput>
                            </View>

                        </View>

                        <View style={styles.FiveEntryPart}>
                            <Text style = {styles.FirstEntText}>2g. D4(1010(+3/-2)(Tejas)) </Text>
                
                            <View style = {styles.FirstEntObserve}>
                                <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setObservedValues29}
                                    value = {observedValues29}
                                ></TextInput>

                            </View>
                            <View style = {styles.FirstEntRemark}>
                                <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setRemarks80}
                                    value = {remarks80}
                                ></TextInput>
                            </View>

                        </View>
                        <View style={styles.FiveEntryPart}>
                            <Text style = {styles.FirstEntText}>2h. D4(1870±4,2006±6)</Text>
                        
                            <View style = {styles.FirstEntObserve}>
                                <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setObservedValues30}
                                    value = {observedValues30}
                                ></TextInput>

                            </View>
                            <View style = {styles.FirstEntRemark}>
                                <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setRemarks81}
                                    value = {remarks81}
                                ></TextInput>
                            </View>

                        </View>
                    </View>
                    {/* Form Entry Second Section End */} 

                    {/* Form Entry Third Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>3. Door straightening condition(For plug door)</Text>
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                    value="OK"
                                    status={checked52 === 'OK' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked52('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                    value="NOT OK"
                                    status={checked52 === 'NOT OK' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked52('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks82}
                                value = {remarks82}
                            ></TextInput>
                        </View>
                    </View>
                    {/* Form Entry Third Section End */}   

                    {/* Form Entry Fourth Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                    <Text style = {styles.FirstEntText}>4. Door diagonal(For plug door)</Text>
                        <View style={styles.FiveEntryPart}>
                            <Text style = {styles.FirstEntText}>4a. D1</Text>
                        
                            <View style = {styles.FirstEntObserve}>
                                <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setObservedValues31}
                                    value = {observedValues31}
                                ></TextInput>

                            </View>
                            <View style = {styles.FirstEntRemark}>
                                <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setRemarks83}
                                    value = {remarks83}
                                ></TextInput>
                            </View>

                        </View>
                        <View style={styles.FiveEntryPart}>
                            <Text style = {styles.FirstEntText}>4b. D2</Text>
                            <View style = {styles.FirstEntObserve}>
                                <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setObservedValues32}
                                    value = {observedValues32}
                                ></TextInput>

                            </View>
                            <View style = {styles.FirstEntRemark}>
                                <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setRemarks84}
                                    value = {remarks84}
                                ></TextInput>
                            </View>

                        </View>
                        <View style={styles.FiveEntryPart}>
                            <Text style = {styles.FirstEntText}>4c. D3</Text>
                        
                            <View style = {styles.FirstEntObserve}>
                                <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setObservedValues31}
                                    value = {observedValues31}
                                ></TextInput>

                            </View>
                            <View style = {styles.FirstEntRemark}>
                                <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setRemarks83}
                                    value = {remarks83}
                                ></TextInput>
                            </View>

                        </View>
                        <View style={styles.FiveEntryPart}>
                            <Text style = {styles.FirstEntText}>4d. D4</Text>
                            <View style = {styles.FirstEntObserve}>
                                <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setObservedValues32}
                                    value = {observedValues32}
                                ></TextInput>

                            </View>
                            <View style = {styles.FirstEntRemark}>
                                <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setRemarks84}
                                    value = {remarks84}
                                ></TextInput>
                            </View>

                        </View>
                    </View>
                    {/* Form Entry Fourth Section End */} 

                    {/* Form Entry Five Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>5. Welding &grinding of small RWG </Text>
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                    value="OK"
                                    status={checked53 === 'OK' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked53('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                    value="NOT OK"
                                    status={checked53 === 'NOT OK' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked53('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks85}
                                value = {remarks85}
                            ></TextInput>
                        </View>
                    </View>
                    {/* Form Entry Five Section End */}

                    
                     {/* Form Entry Six Section Start */}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>6. Door cut out back pieces</Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                                <RadioButton
                                     value="Provided"
                                     status={checked54 === 'Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked54('Provided')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                                <RadioButton
                                     value="Not Provided"
                                     status={checked54 === 'Not Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked54('Not Provided')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks86}
                                 value = {remarks86}
                            ></TextInput>
                        </View>
                    </View>
                    {/* Form Entry Six Section End */}

                    {/* Form Entry Seven Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style={styles.FirstEntText}>
                        7. Car line and roof sheet joint leakage test
                        </Text>
                        <View style={styles.FirstEntObserve}>
                        <Text style={styles.FirstEntObserveText1}>
                            Observed value/condition
                        </Text>
                        <View style={styles.EntryObserveRadio}>
                            <Text style={styles.FirstEntObserveRadio}>Done</Text>
                            <RadioButton
                            value="Done"
                            status={checked55 === 'Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked55('Done')}
                            />
                            <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                            <RadioButton
                            value="Not Done"
                            status={checked55 === 'Not Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked55('Not Done')}
                            />
                        </View>
                        </View>
                        <View style={styles.FirstEntRemark}>
                        <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                        <TextInput
                            style={styles.FirstEntRemarkInput}
                            onChange={setRemarks87}
                            value={remarks87}></TextInput>
                        </View>
                    </View>
                    {/* Form Entry Seven Section End */}

                    {/* Form Entry Eight Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style={styles.FirstEntText}>
                        8. Welding of attachment wall holding BKT  (300,1018,1762mm)
                        </Text>
                        <View style={styles.FirstEntObserve}>
                        <Text style={styles.FirstEntObserveText1}>
                            Observed value/condition
                        </Text>
                        <View style={styles.EntryObserveRadio}>
                            <Text style={styles.FirstEntObserveRadio}>Done</Text>
                            <RadioButton
                            value="Done"
                            status={checked56 === 'Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked56('Done')}
                            />
                            <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                            <RadioButton
                            value="Not Done"
                            status={checked56 === 'Not Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked56('Not Done')}
                            />
                        </View>
                        </View>
                        <View style={styles.FirstEntRemark}>
                        <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                        <TextInput
                            style={styles.FirstEntRemarkInput}
                            onChange={setRemarks88}
                            value={remarks88}></TextInput>
                        </View>
                    </View>
                    {/* Form Entry Eight Section End */}

                    {/* Form Entry Nine Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style={styles.FirstEntText}>
                        9. Welding  of auxiliary water tank BKT  (620mm)                       
                        </Text>
                        <View style={styles.FirstEntObserve}>
                        <Text style={styles.FirstEntObserveText1}>
                            Observed value/condition
                        </Text>
                        <View style={styles.EntryObserveRadio}>
                            <Text style={styles.FirstEntObserveRadio}>Done</Text>
                            <RadioButton
                            value="Done"
                            status={checked57 === 'Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked57('Done')}
                            />
                            <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                            <RadioButton
                            value="Not Done"
                            status={checked57 === 'Not Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked57('Not Done')}
                            />
                        </View>
                        </View>
                        <View style={styles.FirstEntRemark}>
                        <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                        <TextInput
                            style={styles.FirstEntRemarkInput}
                            onChange={setRemarks89}
                            value={remarks89}></TextInput>
                        </View>
                    </View>
                    {/* Form Entry Nine Section End */}

                    {/* Form Entry ten Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style={styles.FirstEntText}>
                        10. Welding &grinding of side wall with sole bar               
                        </Text>
                        <View style={styles.FirstEntObserve}>
                        <Text style={styles.FirstEntObserveText1}>
                            Observed value/condition
                        </Text>
                        <View style={styles.EntryObserveRadio}>
                            <Text style={styles.FirstEntObserveRadio}>Done</Text>
                            <RadioButton
                            value="Done"
                            status={checked58 === 'Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked58('Done')}
                            />
                            <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                            <RadioButton
                            value="Not Done"
                            status={checked58 === 'Not Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked58('Not Done')}
                            />
                        </View>
                        </View>
                        <View style={styles.FirstEntRemark}>
                        <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                        <TextInput
                            style={styles.FirstEntRemarkInput}
                            onChange={setRemarks90}
                            value={remarks90}></TextInput>
                        </View>
                    </View>
                    {/* Form Entry ten Section End */}

                    {/* Form Entry Eleven Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style={styles.FirstEntText}>
                        11. Welding  of stiffening plate(both side)         
                        </Text>
                        <View style={styles.FirstEntObserve}>
                        <Text style={styles.FirstEntObserveText1}>
                            Observed value/condition
                        </Text>
                        <View style={styles.EntryObserveRadio}>
                            <Text style={styles.FirstEntObserveRadio}>Done</Text>
                            <RadioButton
                            value="Done"
                            status={checked59 === 'Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked59('Done')}
                            />
                            <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                            <RadioButton
                            value="Not Done"
                            status={checked59 === 'Not Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked59('Not Done')}
                            />
                        </View>
                        </View>
                        <View style={styles.FirstEntRemark}>
                        <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                        <TextInput
                            style={styles.FirstEntRemarkInput}
                            onChange={setRemarks91}
                            value={remarks91}></TextInput>
                        </View>
                    </View>
                    {/* Form Entry Eleven Section End */}


                    {/* Form Entry Twelve Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>12. Diagonal of RMPU mounting  stud  ( Should be equal)</Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput} 
                                onChange = {setObservedValues33}
                                value = {observedValues33}
                            >

                            </TextInput>
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks92}
                                value = {remarks92}
                            ></TextInput>
                        </View>
                    </View>
                    {/* Form Entry Twelve Section End */}

                      {/* Form Entry Eleven Section Start */}
                      <View style={styles.MainFormFirstEntery}>
                        <Text style={styles.FirstEntText}>
                        13. Roof element with end wall joint level       
                        </Text>
                        <View style={styles.FirstEntObserve}>
                        <Text style={styles.FirstEntObserveText1}>
                            Observed value/condition
                        </Text>
                        <View style={styles.EntryObserveRadio}>
                            <Text style={styles.FirstEntObserveRadio}>Done</Text>
                            <RadioButton
                            value="Done"
                            status={checked59 === 'Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked59('Done')}
                            />
                            <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                            <RadioButton
                            value="Not Done"
                            status={checked59 === 'Not Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked59('Not Done')}
                            />
                        </View>
                        </View>
                        <View style={styles.FirstEntRemark}>
                        <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                        <TextInput
                            style={styles.FirstEntRemarkInput}
                            onChange={setRemarks91}
                            value={remarks91}></TextInput>
                        </View>
                    </View>
                    {/* Form Entry Eleven Section End */}

                    {/* Form Entry Thirteen Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>14. Dimension for AC Opening for RMPU (Lateral/longitudinal)</Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput} 
                                onChange = {setObservedValues34}
                                value = {observedValues34}
                            >

                            </TextInput>
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks93}
                                value = {remarks93}
                            ></TextInput>
                        </View>
                    </View>
                    {/* Form Entry Thirteen Section End */}

                    {/* Form Entry Fourteen Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>15. Lav. Mounting bracket distance(L2T,L3T)</Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput} 
                                onChange = {setObservedValues35}
                                value = {observedValues35}
                            >

                            </TextInput>
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks94}
                                value = {remarks94}
                            ></TextInput>
                        </View>
                    </View>
                    {/* Form Entry Fourteen Section End */}

                    {/* Form Entry Fifteen Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style={styles.FirstEntText}>
                        16. Carline and roof sheet welding both side         
                        </Text>
                        <View style={styles.FirstEntObserve}>
                        <Text style={styles.FirstEntObserveText1}>
                            Observed value/condition
                        </Text>
                        <View style={styles.EntryObserveRadio}>
                            <Text style={styles.FirstEntObserveRadio}>Done</Text>
                            <RadioButton
                            value="Done"
                            status={checked60 === 'Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked60('Done')}
                            />
                            <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                            <RadioButton
                            value="Not Done"
                            status={checked60 === 'Not Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked60('Not Done')}
                            />
                        </View>
                        </View>
                        <View style={styles.FirstEntRemark}>
                        <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                        <TextInput
                            style={styles.FirstEntRemarkInput}
                            onChange={setRemarks95}
                            value={remarks95}/>
                        </View>
                    </View>
                    {/* Form Entry Fifteen Section End */}
                    
                    {/* Form Entry Sixteen Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style={styles.FirstEntText}>
                        17. Roof arch & carline sheet both side welding        
                        </Text>
                        <View style={styles.FirstEntObserve}>
                        <Text style={styles.FirstEntObserveText1}>
                            Observed value/condition
                        </Text>
                        <View style={styles.EntryObserveRadio}>
                            <Text style={styles.FirstEntObserveRadio}>Done</Text>
                            <RadioButton
                            value="Done"
                            status={checked61 === 'Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked61('Done')}
                            />
                            <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                            <RadioButton
                            value="Not Done"
                            status={checked61 === 'Not Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked61('Not Done')}
                            />
                        </View>
                        </View>
                        <View style={styles.FirstEntRemark}>
                        <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                        <TextInput
                            style={styles.FirstEntRemarkInput}
                            onChange={setRemarks96}
                            value={remarks96} />
                        </View>
                    </View>
                    {/* Form Entry Sixteen Section End */}
                    
                    {/* Form Entry Seventeen Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style={styles.FirstEntText}>
                        18. Both side Sidewall vertical pillar & U/F covering plate welding         
                        </Text>
                        <View style={styles.FirstEntObserve}>
                        <Text style={styles.FirstEntObserveText1}>
                            Observed value/condition
                        </Text>
                        <View style={styles.EntryObserveRadio}>
                            <Text style={styles.FirstEntObserveRadio}>Done</Text>
                            <RadioButton
                            value="Done"
                            status={checked62 === 'Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked62('Done')}
                            />
                            <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                            <RadioButton
                            value="Not Done"
                            status={checked62 === 'Not Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked62('Not Done')}
                            />
                        </View>
                        </View>
                        <View style={styles.FirstEntRemark}>
                        <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                        <TextInput
                            style={styles.FirstEntRemarkInput}
                            onChange={setRemarks97}
                            value={remarks97}/>
                        </View>
                    </View>
                    {/* Form Entry Seventeen Section End */}
                    
                    {/* Form Entry Eightteen Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style={styles.FirstEntText}>
                        19. Door cut out welding bottom side with Under frame door profile         
                        </Text>
                        <View style={styles.FirstEntObserve}>
                        <Text style={styles.FirstEntObserveText1}>
                            Observed value/condition
                        </Text>
                        <View style={styles.EntryObserveRadio}>
                            <Text style={styles.FirstEntObserveRadio}>Done</Text>
                            <RadioButton
                            value="Done"
                            status={checked63 === 'Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked63('Done')}
                            />
                            <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                            <RadioButton
                            value="Not Done"
                            status={checked63 === 'Not Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked63('Not Done')}
                            />
                        </View>
                        </View>
                        <View style={styles.FirstEntRemark}>
                        <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                        <TextInput
                            style={styles.FirstEntRemarkInput}
                            onChange={setRemarks98}
                            value={remarks98}/>
                        </View>
                    </View>
                    {/* Form Entry Eighteen Section End */}
                    
                    {/* Form Entry Ninteen Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style={styles.FirstEntText}>
                        20. Roof element & Lav. Sidewall welding inside & out side         
                        </Text>
                        <View style={styles.FirstEntObserve}>
                        <Text style={styles.FirstEntObserveText1}>
                            Observed value/condition
                        </Text>
                        <View style={styles.EntryObserveRadio}>
                            <Text style={styles.FirstEntObserveRadio}>Done</Text>
                            <RadioButton
                            value="Done"
                            status={checked64 === 'Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked64('Done')}
                            />
                            <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                            <RadioButton
                            value="Not Done"
                            status={checked64 === 'Not Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked64('Not Done')}
                            />
                        </View>
                        </View>
                        <View style={styles.FirstEntRemark}>
                        <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                        <TextInput
                            style={styles.FirstEntRemarkInput}
                            onChange={setRemarks99}
                            value={remarks99}/>
                        </View>
                    </View>
                    {/* Form Entry Ninteen Section End */}
                    
                   
                    {/* Form Entry Twenty Two Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style={styles.FirstEntText}>
                        21. Roof bkt. Fitment in stage IV          
                        </Text>
                        <View style={styles.FirstEntObserve}>
                        <Text style={styles.FirstEntObserveText1}>
                            Observed value/condition
                        </Text>
                        <View style={styles.EntryObserveRadio}>
                            <Text style={styles.FirstEntObserveRadio}>Done</Text>
                            <RadioButton
                            value="Done"
                            status={checked67 === 'Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked67('Done')}
                            />
                            <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                            <RadioButton
                            value="Not Done"
                            status={checked67 === 'Not Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked67('Not Done')}
                            />
                        </View>
                        </View>
                        <View style={styles.FirstEntRemark}>
                        <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                        <TextInput
                            style={styles.FirstEntRemarkInput}
                            onChange={setRemarks102}
                            value={remarks102}/>
                        </View>
                    </View>
                    {/* Form Entry twenty two Section End */}

                     {/* Form Entry Twenty Three Section Start */}
                     <View style={styles.MainFormFirstEntery}>
                    <Text style = {styles.FirstEntText}>22. Cross brace height (LFAC)</Text>
                       
                           
                        
                            <View style = {styles.FirstEntObserve}>
                                <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setObservedValues36}
                                    value = {observedValues36}
                                />

                            </View>
                            <View style = {styles.FirstEntRemark}>
                                <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                                <TextInput style= {styles.FirstEntRemarkInput}
                                    onChange = {setRemarks103}
                                    value = {remarks103}
                                />
                            </View>

                        
                      
                        
                    </View>
                    {/* Form Entry Twenty Three Section End */} 

                     {/* Form Entry Twenty Section Start */}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style={styles.FirstEntText}>
                        23. Roof element RMPU socket hole die and alignment with end wall       
                        </Text>
                        <View style={styles.FirstEntObserve}>
                        <Text style={styles.FirstEntObserveText1}>
                            Observed value/condition
                        </Text>
                        <View style={styles.EntryObserveRadio}>
                            <Text style={styles.FirstEntObserveRadio}>OK</Text>
                            <RadioButton
                            value="OK"
                            status={checked65 === 'OK' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked65('OK')}
                            />
                            <Text style={styles.FirstEntObserveRadio}>Not OK</Text>
                            <RadioButton
                            value="Not OK"
                            status={checked65 === 'Not OK' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked65('Not OK')}
                            />
                        </View>
                        </View>
                        <View style={styles.FirstEntRemark}>
                        <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                        <TextInput
                            style={styles.FirstEntRemarkInput}
                            onChange={setRemarks100}
                            value={remarks100}/>
                        </View>
                    </View>
                    {/* Form Entry twenty Section End */}

                     {/* Form Entry Twenty Section Start */}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style={styles.FirstEntText}>
                        24. Lav. sidewall & sidewall both side welding with door cut out        
                        </Text>
                        <View style={styles.FirstEntObserve}>
                        <Text style={styles.FirstEntObserveText1}>
                            Observed value/condition
                        </Text>
                        <View style={styles.EntryObserveRadio}>
                            <Text style={styles.FirstEntObserveRadio}>Done</Text>
                            <RadioButton
                            value="Done"
                            status={checked65 === 'Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked65('Done')}
                            />
                            <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                            <RadioButton
                            value="Not Done"
                            status={checked65 === 'Not Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked65('Not Done')}
                            />
                        </View>
                        </View>
                        <View style={styles.FirstEntRemark}>
                        <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                        <TextInput
                            style={styles.FirstEntRemarkInput}
                            onChange={setRemarks100}
                            value={remarks100}/>
                        </View>
                    </View>
                    {/* Form Entry twenty Section End */}
                    
                    {/* Form Entry Twenty One Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style={styles.FirstEntText}>
                        25. Both side end wall with Lav. Sidewall, roof element &U/F front part welding         
                        </Text>
                        <View style={styles.FirstEntObserve}>
                        <Text style={styles.FirstEntObserveText1}>
                            Observed value/condition
                        </Text>
                        <View style={styles.EntryObserveRadio}>
                            <Text style={styles.FirstEntObserveRadio}>Done</Text>
                            <RadioButton
                            value="Done"
                            status={checked66 === 'Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked66('Done')}
                            />
                            <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                            <RadioButton
                            value="Not Done"
                            status={checked66 === 'Not Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked66('Not Done')}
                            />
                        </View>
                        </View>
                        <View style={styles.FirstEntRemark}>
                        <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                        <TextInput
                            style={styles.FirstEntRemarkInput}
                            onChange={setRemarks101}
                            value={remarks101}/>
                        </View>
                    </View>
                    {/* Form Entry Twenty One Section End */}
                    

                    {/* Form Entry Twenty Four Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style={styles.FirstEntText}>
                        26. Complete shell assembly outside & inside grinding work        
                        </Text>
                        <View style={styles.FirstEntObserve}>
                        <Text style={styles.FirstEntObserveText1}>
                            Observed value/condition
                        </Text>
                        <View style={styles.EntryObserveRadio}>
                            <Text style={styles.FirstEntObserveRadio}>Done</Text>
                            <RadioButton
                            value="Done"
                            status={checked68 === 'Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked68('Done')}
                            />
                            <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                            <RadioButton
                            value="Not Done"
                            status={checked68 === 'Not Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked68('Not Done')}
                            />
                        </View>
                        </View>
                        <View style={styles.FirstEntRemark}>
                        <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                        <TextInput
                            style={styles.FirstEntRemarkInput}
                            onChange={setRemarks105}
                            value={remarks105}/>
                        </View>
                    </View>
                    {/* Form Entry twenty Four Section End */}

                    {/* Form Entry Twenty Five Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>27. Roof element RMPU socket hole die and alignment with end wall </Text>
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                    value="OK"
                                    status={checked69 === 'OK' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked69('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                    value="NOT OK"
                                    status={checked69 === 'NOT OK' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked69('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks106}
                                value = {remarks106}
                            />
                        </View>
                    </View>
                    {/* Form Entry Twenty Five Section End */}

                    {/* Form Entry Twenty Six Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>28. Body width(inside)</Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setObservedValues38}
                                value = {observedValues38}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks107}
                                 value = {remarks107}
                            />
                        </View>
                    </View>
                    {/* Form Entry Twenty Six Section End */}

                    {/* Form Entry Twenty Seven Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>29. Roof height from trough sheet to roof sheet </Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setObservedValues39}
                                value = {observedValues39}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks108}
                                 value = {remarks108}
                            />
                        </View>
                    </View>
                    {/* Form Entry Twenty Seven Section End */}

                    
                    {/* Form Entry Twenty Eight Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>30. D.B(1230 mm) &C.N bkt</Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                                <RadioButton
                                     value="Provided"
                                     status={checked70 === 'Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked70('Provided')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                                <RadioButton
                                     value="Not Provided"
                                     status={checked70 === 'Not Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked70('Not Provided')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks109}
                                 value = {remarks109}
                            />
                        </View>
                    </View>
                    {/* Form Entry Twenty Eight Section End */}

                    {/* Form Entry Twenty Seven Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>31. Distance from under frame to Upper berth channel </Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setObservedValues39}
                                value = {observedValues39}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks108}
                                 value = {remarks108}
                            />
                        </View>
                    </View>
                    {/* Form Entry Twenty Seven Section End */}

                    {/* Form Entry Twenty Seven Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>32. Distance from  vertical member to upper berth channel(PP to NPP)</Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setObservedValues39}
                                value = {observedValues39}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks108}
                                 value = {remarks108}
                            />
                        </View>
                    </View>
                    {/* Form Entry Twenty Seven Section End */}

                    {/* Form Entry Twenty Seven Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>33.Channel for mounting PRT frame from door center(PP side/NPP side)</Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setObservedValues39}
                                value = {observedValues39}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks108}
                                 value = {remarks108}
                            />
                        </View>
                    </View>
                    {/* Form Entry Twenty Seven Section End */}

                    {/* Form Entry Twenty Eight Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>34. Venturi fitted in Lav.( 04)</Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                                <RadioButton
                                     value="Provided"
                                     status={checked70 === 'Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked70('Provided')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                                <RadioButton
                                     value="Not Provided"
                                     status={checked70 === 'Not Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked70('Not Provided')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks109}
                                 value = {remarks109}
                            />
                        </View>
                    </View>
                    {/* Form Entry Twenty Eight Section End */}

                   
                    
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

  )
}

export default EShellLWFAC;

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