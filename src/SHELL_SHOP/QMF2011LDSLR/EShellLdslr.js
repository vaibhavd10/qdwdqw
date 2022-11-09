import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View , Image} from 'react-native';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';

const EShellLdslr = () => {
    //  -------------------MainForm Shell Info Variables-----------------
  


    // Observed Values Variable
    const [observedValues72, setObservedValues72] = useState(''); 
    const [observedValues73, setObservedValues73] = useState('');
    const [observedValues74, setObservedValues74] = useState('');
    const [observedValues75, setObservedValues75] = useState('');
    const [observedValues76, setObservedValues76] = useState('');
    const [observedValues77, setObservedValues77] = useState('');
    const [observedValues78, setObservedValues78] = useState('');
    const [observedValues79, setObservedValues79] = useState('');
    const [observedValues80, setObservedValues80] = useState('');
    const [observedValues81, setObservedValues81] = useState('');
    const [observedValues82, setObservedValues82] = useState('');
    const [observedValues83, setObservedValues83] = useState('');
    const [observedValues84, setObservedValues84] = useState('');
    const [observedValues85, setObservedValues85] = useState('');
    const [observedValues86, setObservedValues86] = useState('');
    const [observedValues87, setObservedValues87] = useState('');
    const [observedValues88, setObservedValues88] = useState('');
    const [observedValues89, setObservedValues89] = useState('');


    // Checked Variable
    const [checked120, setChecked120] = useState(''); 
    const [checked121, setChecked121] = useState('');
    const [checked122, setChecked122] = useState('');
    const [checked123, setChecked123] = useState('');
    const [checked124, setChecked124] = useState('');
    const [checked125, setChecked125] = useState('');
    const [checked126, setChecked126] = useState('');
    const [checked127, setChecked127] = useState('');
    const [checked128, setChecked128] = useState('');
    const [checked129, setChecked129] = useState('');
    const [checked130, setChecked130] = useState('');
    const [checked131, setChecked131] = useState('');
    const [checked132, setChecked132] = useState('');
    const [checked133, setChecked133] = useState('');
    const [checked134, setChecked134] = useState('');
    const [checked135, setChecked135] = useState('');
    const [checked136, setChecked136] = useState('');
    const [checked137, setChecked137] = useState('');
    const [checked138, setChecked138] = useState('');
    
    
    // Remarks Variables
    const [remarks191, setRemarks191] = useState(''); 
    const [remarks192, setRemarks192] = useState('');
    const [remarks193, setRemarks193] = useState('');
    const [remarks194, setRemarks194] = useState('');
    const [remarks195, setRemarks195] = useState('');
    const [remarks196, setRemarks196] = useState('');
    const [remarks197, setRemarks197] = useState('');
    const [remarks198, setRemarks198] = useState('');
    const [remarks199, setRemarks199] = useState('');
    const [remarks200, setRemarks200] = useState('');
    const [remarks201, setRemarks201] = useState('');
    const [remarks202, setRemarks202] = useState('');
    const [remarks203, setRemarks203] = useState('');
    const [remarks204, setRemarks204] = useState('');
    const [remarks205, setRemarks205] = useState('');
    const [remarks206, setRemarks206] = useState('');
    const [remarks207, setRemarks207] = useState('');
    const [remarks208, setRemarks208] = useState('');
    const [remarks209, setRemarks209] = useState('');
    const [remarks210, setRemarks210] = useState('');
    const [remarks211, setRemarks211] = useState('');
    const [remarks212, setRemarks212] = useState('');
    const [remarks213, setRemarks213] = useState('');
    const [remarks214, setRemarks214] = useState('');
    const [remarks215, setRemarks215] = useState('');
    const [remarks216, setRemarks216] = useState('');
    const [remarks217, setRemarks217] = useState('');
    const [remarks218, setRemarks218] = useState('');
    const [remarks219, setRemarks219] = useState('');
    const [remarks220, setRemarks220] = useState('');
    const [remarks221, setRemarks221] = useState('');
    const [remarks222, setRemarks222] = useState('');
    const [remarks223, setRemarks223] = useState('');
    const [remarks224, setRemarks224] = useState('');
    const [remarks225, setRemarks225] = useState('');
    const [remarks226, setRemarks226] = useState('');
    const [remarks227, setRemarks227] = useState('');
   
    
    
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
                                    status={checked120 === 'OK' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked120('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                    value="NOT OK"
                                    status={checked120 === 'NOT OK' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked120('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks191}
                                value = {remarks191}
                            />
                        </View>
                    </View>
                    {/* Form Entry First Section End */}   

                     {/* Form Entry Second Section Start */}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>2. Welding &grinding of small RWG </Text>
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                    value="OK"
                                    status={checked121 === 'OK' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked121('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                    value="NOT OK"
                                    status={checked121 === 'NOT OK' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked121('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks192}
                                value = {remarks192}
                            />
                        </View>
                    </View>
                    {/* Form Entry Second Section End */}

                     {/* Form Entry Third Section Start */}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>3. Door cut out back pieces</Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                                <RadioButton
                                     value="Provided"
                                     status={checked122 === 'Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked122('Provided')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                                <RadioButton
                                     value="Not Provided"
                                     status={checked122 === 'Not Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked122('Not Provided')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks193}
                                 value = {remarks193}
                            />
                        </View>
                    </View>
                    {/* Form Entry Third Section End */}

                     {/* Form Entry Fourth Section Start */}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style={styles.FirstEntText}>
                        4. Car line and roof sheet joint leakage test
                        </Text>
                        <View style={styles.FirstEntObserve}>
                        <Text style={styles.FirstEntObserveText1}>
                            Observed value/condition
                        </Text>
                        <View style={styles.EntryObserveRadio}>
                            <Text style={styles.FirstEntObserveRadio}>Done</Text>
                            <RadioButton
                            value="Done"
                            status={checked123 === 'Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked123('Done')}
                            />
                            <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                            <RadioButton
                            value="Not Done"
                            status={checked123 === 'Not Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked123('Not Done')}
                            />
                        </View>
                        </View>
                        <View style={styles.FirstEntRemark}>
                        <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                        <TextInput
                            style={styles.FirstEntRemarkInput}
                            onChange={setRemarks194}
                            value={remarks194}/>
                        </View>
                    </View>
                    {/* Form Entry Fourth Section End */}

                     {/* Form Entry Fifth Section Start */}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style={styles.FirstEntText}>
                        5. Welding &grinding of side wall with sole bar               
                        </Text>
                        <View style={styles.FirstEntObserve}>
                        <Text style={styles.FirstEntObserveText1}>
                            Observed value/condition
                        </Text>
                        <View style={styles.EntryObserveRadio}>
                            <Text style={styles.FirstEntObserveRadio}>Done</Text>
                            <RadioButton
                            value="Done"
                            status={checked124 === 'Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked124('Done')}
                            />
                            <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                            <RadioButton
                            value="Not Done"
                            status={checked124 === 'Not Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked124('Not Done')}
                            />
                        </View>
                        </View>
                        <View style={styles.FirstEntRemark}>
                        <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                        <TextInput
                            style={styles.FirstEntRemarkInput}
                            onChange={setRemarks195}
                            value={remarks195}/>
                        </View>
                    </View>
                    {/* Form Entry Fifth Section End */}

                     {/* Form Entry Six Section Start */}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style={styles.FirstEntText}>
                        6. Carline and roof sheet welding both side               
                        </Text>
                        <View style={styles.FirstEntObserve}>
                        <Text style={styles.FirstEntObserveText1}>
                            Observed value/condition
                        </Text>
                        <View style={styles.EntryObserveRadio}>
                            <Text style={styles.FirstEntObserveRadio}>Done</Text>
                            <RadioButton
                            value="Done"
                            status={checked125 === 'Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked125('Done')}
                            />
                            <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                            <RadioButton
                            value="Not Done"
                            status={checked125 === 'Not Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked125('Not Done')}
                            />
                        </View>
                        </View>
                        <View style={styles.FirstEntRemark}>
                        <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                        <TextInput
                            style={styles.FirstEntRemarkInput}
                            onChange={setRemarks196}
                            value={remarks196}/>
                        </View>
                    </View>
                    {/* Form Entry Six Section End */}

                    {/* Form Entry Seven Section Start */}
                   <View style={styles.MainFormFirstEntery}>
                        <Text style={styles.FirstEntText}>
                        7. Roof arch & carline sheet both side welding             
                        </Text>
                        <View style={styles.FirstEntObserve}>
                        <Text style={styles.FirstEntObserveText1}>
                            Observed value/condition
                        </Text>
                        <View style={styles.EntryObserveRadio}>
                            <Text style={styles.FirstEntObserveRadio}>Done</Text>
                            <RadioButton
                            value="Done"
                            status={checked126 === 'Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked126('Done')}
                            />
                            <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                            <RadioButton
                            value="Not Done"
                            status={checked126 === 'Not Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked126('Not Done')}
                            />
                        </View>
                        </View>
                        <View style={styles.FirstEntRemark}>
                        <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                        <TextInput
                            style={styles.FirstEntRemarkInput}
                            onChange={setRemarks197}
                            value={remarks197}/>
                        </View>
                    </ View>
                    {/* Form Entry Seven Section End */}

                    {/* Form Entry Eight Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style={styles.FirstEntText}>
                        8. Both side Sidewall vertical pillar & U/F covering plate welding               
                        </Text>
                        <View style={styles.FirstEntObserve}>
                        <Text style={styles.FirstEntObserveText1}>
                            Observed value/condition
                        </Text>
                        <View style={styles.EntryObserveRadio}>
                            <Text style={styles.FirstEntObserveRadio}>Done</Text>
                            <RadioButton
                            value="Done"
                            status={checked127 === 'Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked127('Done')}
                            />
                            <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                            <RadioButton
                            value="Not Done"
                            status={checked127 === 'Not Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked127('Not Done')}
                            />
                        </View>
                        </View>
                        <View style={styles.FirstEntRemark}>
                        <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                        <TextInput
                            style={styles.FirstEntRemarkInput}
                            onChange={setRemarks198}
                            value={remarks198}/>
                        </View>
                    </View>
                    {/* Form Entry Eight Section End */}

                    {/* Form Entry Nine Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style={styles.FirstEntText}>
                        9. Door cut out welding bottom side with Under frame door profile               
                        </Text>
                        <View style={styles.FirstEntObserve}>
                        <Text style={styles.FirstEntObserveText1}>
                            Observed value/condition
                        </Text>
                        <View style={styles.EntryObserveRadio}>
                            <Text style={styles.FirstEntObserveRadio}>Done</Text>
                            <RadioButton
                            value="Done"
                            status={checked128 === 'Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked128('Done')}
                            />
                            <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                            <RadioButton
                            value="Not Done"
                            status={checked128 === 'Not Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked128('Not Done')}
                            />
                        </View>
                        </View>
                        <View style={styles.FirstEntRemark}>
                        <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                        <TextInput
                            style={styles.FirstEntRemarkInput}
                            onChange={setRemarks199}
                            value={remarks199}/>
                        </View>
                    </View>
                    {/* Form Entry Nine Section End */}

                     {/* Form Entry Ten Section Start */}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style={styles.FirstEntText}>
                        10. Roof element & Lav. Sidewall welding inside & out side               
                        </Text>
                        <View style={styles.FirstEntObserve}>
                        <Text style={styles.FirstEntObserveText1}>
                            Observed value/condition
                        </Text>
                        <View style={styles.EntryObserveRadio}>
                            <Text style={styles.FirstEntObserveRadio}>Done</Text>
                            <RadioButton
                            value="Done"
                            status={checked129 === 'Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked129('Done')}
                            />
                            <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                            <RadioButton
                            value="Not Done"
                            status={checked129 === 'Not Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked129('Not Done')}
                            />
                        </View>
                        </View>
                        <View style={styles.FirstEntRemark}>
                        <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                        <TextInput
                            style={styles.FirstEntRemarkInput}
                            onChange={setRemarks200}
                            value={remarks200}/>
                        </View>
                    </View>
                    {/* Form Entry Ten Section End */}

                     {/* Form Entry Eleven Section Start */}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style={styles.FirstEntText}>
                        11. Lav. sidewall & sidewall both side welding with door cut out              
                        </Text>
                        <View style={styles.FirstEntObserve}>
                        <Text style={styles.FirstEntObserveText1}>
                            Observed value/condition
                        </Text>
                        <View style={styles.EntryObserveRadio}>
                            <Text style={styles.FirstEntObserveRadio}>Done</Text>
                            <RadioButton
                            value="Done"
                            status={checked130 === 'Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked130('Done')}
                            />
                            <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                            <RadioButton
                            value="Not Done"
                            status={checked130 === 'Not Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked130('Not Done')}
                            />
                        </View>
                        </View>
                        <View style={styles.FirstEntRemark}>
                        <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                        <TextInput
                            style={styles.FirstEntRemarkInput}
                            onChange={setRemarks201}
                            value={remarks201}/>
                        </View>
                    </View>
                    {/* Form Entry Eleven Section End */}

                      {/* Form Entry Twelve Section Start */}
                      <View style={styles.MainFormFirstEntery}>
                        <Text style={styles.FirstEntText}>
                        12. Both side end wall with Lav. Sidewall &U/F front part welding              
                        </Text>
                        <View style={styles.FirstEntObserve}>
                        <Text style={styles.FirstEntObserveText1}>
                            Observed value/condition
                        </Text>
                        <View style={styles.EntryObserveRadio}>
                            <Text style={styles.FirstEntObserveRadio}>Done</Text>
                            <RadioButton
                            value="Done"
                            status={checked131 === 'Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked131('Done')}
                            />
                            <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                            <RadioButton
                            value="Not Done"
                            status={checked131 === 'Not Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked131('Not Done')}
                            />
                        </View>
                        </View>
                        <View style={styles.FirstEntRemark}>
                        <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                        <TextInput
                            style={styles.FirstEntRemarkInput}
                            onChange={setRemarks202}
                            value={remarks202}/>
                        </View>
                    </View>
                    {/* Form Entry Twelve Section End */}

                    {/* Form Entry Thirteen Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style={styles.FirstEntText}>
                        13. Complete shell assembly outside & inside grinding work               
                        </Text>
                        <View style={styles.FirstEntObserve}>
                        <Text style={styles.FirstEntObserveText1}>
                            Observed value/condition
                        </Text>
                        <View style={styles.EntryObserveRadio}>
                            <Text style={styles.FirstEntObserveRadio}>Done</Text>
                            <RadioButton
                            value="Done"
                            status={checked132 === 'Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked132('Done')}
                            />
                            <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                            <RadioButton
                            value="Not Done"
                            status={checked132 === 'Not Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked132('Not Done')}
                            />
                        </View>
                        </View>
                        <View style={styles.FirstEntRemark}>
                        <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                        <TextInput
                            style={styles.FirstEntRemarkInput}
                            onChange={setRemarks203}
                            value={remarks203}/>
                        </View>
                    </View>
                    {/* Form Entry Thirteen Section End */}

                     {/* Form Entry Fourteen Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style={styles.FirstEntText}>
                        14. Carline and roof sheet welding both side               
                        </Text>
                        <View style={styles.FirstEntObserve}>
                        <Text style={styles.FirstEntObserveText1}>
                            Observed value/condition
                        </Text>
                        <View style={styles.EntryObserveRadio}>
                            <Text style={styles.FirstEntObserveRadio}>Done</Text>
                            <RadioButton
                            value="Done"
                            status={checked133 === 'Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked133('Done')}
                            />
                            <Text style={styles.FirstEntObserveRadio}>Not Done</Text>
                            <RadioButton
                            value="Not Done"
                            status={checked133 === 'Not Done' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked133('Not Done')}
                            />
                        </View>
                        </View>
                        <View style={styles.FirstEntRemark}>
                        <Text style={styles.FirstEntRemarkText1}>REMARKS</Text>
                        <TextInput
                            style={styles.FirstEntRemarkInput}
                            onChange={setRemarks204}
                            value={remarks204}/>
                        </View>
                    </View>
                    {/* Form Entry Fourteen Section End */}

                     {/* Form Entry Fifteen Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>15. Body width(inside)</Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput} 
                                onChange = {setObservedValues72}
                                value = {observedValues72}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks205}
                                value = {remarks205}
                            />
                        </View>
                    </View>
                    {/* Form Entry Fifteen Section End */}

                    {/* Form Entry Sixteen Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>16. Insulating pins</Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                                <RadioButton
                                     value="Provided"
                                     status={checked134 === 'Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked134('Provided')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                                <RadioButton
                                     value="Not Provided"
                                     status={checked134 === 'Not Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked134('Not Provided')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks206}
                                 value = {remarks206}
                            />
                        </View>
                    </View>
                    {/* Form Entry Sixteen Section End */}

                     {/* Form Entry Seventeen Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>17. Sliding door height and width</Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput} 
                                onChange = {setObservedValues73}
                                value = {observedValues73}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks207}
                                value = {remarks207}
                            />
                        </View>
                    </View>
                    {/* Form Entry Seventeen Section End */}

                     {/* Form Entry Eighteen Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>18.  Both side Sliding door conduction </Text>
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>OK</Text>
                                <RadioButton
                                    value="OK"
                                    status={checked135 === 'OK' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked135('OK')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>NOT OK</Text>
                                <RadioButton
                                    value="NOT OK"
                                    status={checked135 === 'NOT OK' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked135('NOT OK')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks208}
                                value = {remarks208}
                            />
                        </View>
                    </View>
                    {/* Form Entry Eighteen Section End */}

                     {/* Form Entry Nineteen Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>19. Sliding door stopper</Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                                <RadioButton
                                     value="Provided"
                                     status={checked136 === 'Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked136('Provided')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                                <RadioButton
                                     value="Not Provided"
                                     status={checked136 === 'Not Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked136('Not Provided')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks209}
                                 value = {remarks209}
                            />
                        </View>
                    </View>
                    {/* Form Entry Nineteen Section End */} 

                    {/* Form Entry Twenty Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>20. Roof height from trough sheet to roof sheet </Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput} 
                                onChange = {setObservedValues74}
                                value = {observedValues74}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks210}
                                value = {remarks210}
                            />
                        </View>
                    </View>
                    {/* Form Entry Twenty Section End */}

                    {/* Form Entry Twenty One Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>21. Disable compartment cabin width </Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput} 
                                onChange = {setObservedValues75}
                                value = {observedValues75}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks211}
                                value = {remarks211}
                            />
                        </View>
                    </View>
                    {/* Form Entry Twenty One Section End */}

                    {/* Form Entry Twenty Two Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>22. Disable compartment pillar distance from side wall </Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput} 
                                onChange = {setObservedValues76}
                                value = {observedValues76}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks212}
                                value = {remarks212}
                            />
                        </View>
                    </View>
                    {/* Form Entry Twenty Two Section End */}

                    {/* Form Entry Twenty three Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>23. Disable door width</Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput} 
                                onChange = {setObservedValues77}
                                value = {observedValues77}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks213}
                                value = {remarks213}
                            />
                        </View>
                    </View>
                    {/* Form Entry Twenty three Section End */}

                     {/* Form Entry Twenty Four Section Start */}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>24. Disable Lav. width </Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput} 
                                onChange = {setObservedValues78}
                                value = {observedValues78}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks214}
                                value = {remarks214}
                            />
                        </View>
                    </View>
                    {/* Form Entry Twenty Four Section End */}

                     {/* Form Entry Twenty Five Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>25. Disable Lav.  door width </Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput} 
                                onChange = {setObservedValues79}
                                value = {observedValues79}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks215}
                                value = {remarks215}
                            />
                        </View>
                    </View>
                    {/* Form Entry Twenty Five Section End */}

                     {/* Form Entry Twenty Six Section Start */}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>26. Passenger Lav. width </Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput} 
                                onChange = {setObservedValues80}
                                value = {observedValues80}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks216}
                                value = {remarks216}
                            />
                        </View>
                    </View>
                    {/* Form Entry Twenty Six Section End */}

                    {/* Form Entry Twenty Seven Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>27. Passenger compartment cabin width </Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput} 
                                onChange = {setObservedValues81}
                                value = {observedValues81}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks217}
                                value = {remarks217}
                            />
                        </View>
                    </View>
                    {/* Form Entry Twenty Seven Section End */}

                     {/* Form Entry Twenty Eight Section Start */}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>28. Passenger compartment pillar distance from side wall </Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput} 
                                onChange = {setObservedValues82}
                                value = {observedValues82}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks218}
                                value = {remarks218}
                            />
                        </View>
                    </View>
                    {/* Form Entry Twenty Eight Section End */}

                    {/* Form Entry Twenty Nine Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>29. Guard room Lav. width</Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput} 
                                onChange = {setObservedValues83}
                                value = {observedValues83}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks219}
                                value = {remarks219}
                            />
                        </View>
                    </View>
                    {/* Form Entry Twenty Nine Section End */}

                     {/* Form Entry Thirty Section Start */}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>30. Dog box PRT width </Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput} 
                                onChange = {setObservedValues84}
                                value = {observedValues84}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks220}
                                value = {remarks220}
                            />
                        </View>
                    </View>
                    {/* Form Entry Thirty Section End */}

                       {/* Form Entry Thirty One Section Start */}
                       <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>31. Passenger Lav. door width </Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput} 
                                onChange = {setObservedValues85}
                                value = {observedValues85}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks221}
                                value = {remarks221}
                            />
                        </View>
                    </View>
                    {/* Form Entry Thirty One  Section End */}

                    {/* Form Entry Thirty two Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>32. Stretcher room width</Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput} 
                                onChange = {setObservedValues86}
                                value = {observedValues86}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks222}
                                value = {remarks222}
                            />
                        </View>
                    </View>
                    {/* Form Entry Thirty two  Section End */}

                      {/* Form Entry Thirty Three Section Start */}
                      <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>33. Stretcher room door width </Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput} 
                                onChange = {setObservedValues87}
                                value = {observedValues87}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks223}
                                value = {remarks223}
                            />
                        </View>
                    </View>
                    {/* Form Entry Thirty Three  Section End */}

                    
                    {/* Form Entry Thirty Four Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>34. Control room width </Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput} 
                                onChange = {setObservedValues88}
                                value = {observedValues88}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks224}
                                value = {remarks224}
                            />
                        </View>
                    </View>
                    {/* Form Entry Thirty Four  Section End */}

                     {/* Form Entry Thirty Five Section Start */}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>35. Control room PRT distance from side wall </Text>
                        
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <TextInput style= {styles.FirstEntRemarkInput} 
                                onChange = {setObservedValues89}
                                value = {observedValues89}
                            />
                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                onChange = {setRemarks225}
                                value = {remarks225}
                            />
                        </View>
                    </View>
                    {/* Form Entry Thirty Five  Section End */}

                     {/* Form Entry Thirty Six Section Start */}
                     <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>36. D.B(1230 mm/1232mm) </Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                                <RadioButton
                                     value="Provided"
                                     status={checked137 === 'Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked137('Provided')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                                <RadioButton
                                     value="Not Provided"
                                     status={checked137 === 'Not Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked137('Not Provided')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks226}
                                 value = {remarks226}
                            />
                        </View>
                    </View>
                    {/* Form Entry Thirty Six Section End */} 

                    {/* Form Entry Thirty Seven Section Start */}
                    <View style={styles.MainFormFirstEntery}>
                        <Text style = {styles.FirstEntText}>37. Sliding door stopper </Text>
                    
                        <View style = {styles.FirstEntObserve}>
                            <Text style = {styles.FirstEntObserveText1}>Observed value/condition</Text>
                            <View style = {styles.EntryObserveRadio}>
                                <Text style={styles.FirstEntObserveRadio}>Provided</Text>
                                <RadioButton
                                     value="Provided"
                                     status={checked138 === 'Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked138('Provided')}
                                />
                                <Text style={styles.FirstEntObserveRadio}>Not Provided</Text>
                                <RadioButton
                                     value="Not Provided"
                                     status={checked138 === 'Not Provided' ? 'checked' : 'unchecked'}
                                     onPress={() => setChecked138('Not Provided')}
                                />
                            </View>

                        </View>
                        <View style = {styles.FirstEntRemark}>
                            <Text style = {styles.FirstEntRemarkText1}>REMARKS</Text>
                            <TextInput style= {styles.FirstEntRemarkInput}
                                 onChange = {setRemarks227}
                                 value = {remarks227}
                            />
                        </View>
                    </View>
                    {/* Form Entry Thirty Seven Section End */} 









                    
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

export default EShellLdslr;

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