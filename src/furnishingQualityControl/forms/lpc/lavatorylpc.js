import { StyleSheet, Text, View,SafeAreaView,TextInput,ScrollView,TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'

const Lavatory = ({navigation}) => {

    const[check1,setCheck1] = useState('')

    const lpcListNav = ()=>{
        navigation.navigate('LPC List')
    }



  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
        <View style={styles.header}>
        <View style={styles.imageTag}>
            <Image
                source={require('../../../../assets/images.png')}
                style={{
                  width: 70,
                  height: 70,
                  resizeMode: 'contain',
                }}
              />
            </View>
            <View style={styles.headerTag}>
                <Text style={styles.headerText}>Modern Coach Factory Raebareli</Text>
                        <Text style={styles.headerText}>QUALITY CONTROL INSPECTION REPORT (QCI) </Text>
                   <Text style={styles.headerText}>LPC (FURNISHING QUALITY)</Text> 
                
            </View>
            <View style={styles.headerInput}>
                    <View style={styles.headerInputRow}>
                            <View style={styles.headerInputRowItem}>
                                <Text style={styles.headerInputRowText}>Doc No:</Text>
                                <TextInput
                                style={styles.headerInputRowInput}
                                
                                />
                            </View>
                            <View style={styles.headerInputRowItem}>
                                <Text style={styles.headerInputRowText}>Rev No:</Text>
                                <TextInput
                                style={styles.headerInputRowInput}
                                
                                />
                            </View>
                            <View style={styles.headerInputRowItem}>
                                <Text style={styles.headerInputRowText}>DAte:</Text>
                                <TextInput
                                style={styles.headerInputRowInput}
                                
                                />
                            </View>
                            <View style={styles.headerInputRowItem}>
                                <Text style={styles.headerInputRowText}>Fur No:</Text>
                                <TextInput
                                style={styles.headerInputRowInput}
                                
                                />
                            </View>
                            <View style={styles.headerInputRowItem}>
                                <Text style={styles.headerInputRowText}>Booked TO:</Text>
                                <TextInput
                                style={styles.headerInputRowInput}
                                
                                />
                            </View>
                            <View style={styles.headerInputRowItem}>
                                <Text style={styles.headerInputRowText}>Shell No:</Text>
                                <TextInput
                                style={styles.headerInputRowInput}
                                
                                />
                            </View>
                            <View style={styles.headerInputRowItem}>
                                <Text style={styles.headerInputRowText}>Coach NO:</Text>
                                <TextInput
                                style={styles.headerInputRowInput}
                                
                                />
                            </View>
                           
                    </View>

                    <View style={styles.headerInputRow}>
                            
                    <View style={styles.headerInputRowItem}>
                                <Text style={styles.headerInputRowText}>Bogie No:</Text>
                                <TextInput
                                style={styles.headerInputRowInput}
                                
                                />
                            </View>
                            <View style={styles.headerInputRowItem}>
                                <Text style={styles.headerInputRowText}>Date:</Text>
                                <TextInput
                                style={styles.headerInputRowInput}
                                
                                />
                            </View>
                            <View style={styles.headerInputRowItem}>
                                <Text style={styles.headerInputRowText}>RLY:</Text>
                                <TextInput
                                style={styles.headerInputRowInput}
                                
                                />
                            </View>
                            <View style={styles.headerInputRowItem}>
                                <Text style={styles.headerInputRowText}>PP:</Text>
                                <TextInput
                                style={styles.headerInputRowInput}
                                
                                />
                            </View>
                            <View style={styles.headerInputRowItem}>
                                <Text style={styles.headerInputRowText}>NPP:</Text>
                                <TextInput
                                style={styles.headerInputRowInput}
                                
                                />
                            </View>
                            <View style={styles.headerInputRowItem}>
                                <Text style={styles.headerInputRowText}>Shift:</Text>
                                <TextInput
                                style={styles.headerInputRowInput}
                                
                                />
                            </View>
                    </View>

            
            </View>
            
        </View>
        <View style={styles.form}>
              {/* <View style={styles.formTag}>
                <Text style={styles.formTagText}>7-LAVATORY</Text>
              </View> */}
              {/* form entry */}
                <View style={styles.serialEntry}>
                    <View style={styles.formInput}>
                <View style={styles.serialNo}>
                <Text style={styles.serialNoText}>S.NO:-</Text>
                <Text>1</Text>
              </View>
              <View style={styles.itemTag}>
                 <Text style={styles.itemTagText}>Item:-</Text>
                <Text>Loro Pipe</Text>
             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                      <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                   <Text  style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Loose-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                               
                            </View>
                                                
                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Hardware loose-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                 
                            </View>
                        </View>
                     
                </View>
                </View>
                {/* form entry */}


             
                    {/* form entry */}
                <View style={styles.serialEntry}>
                    <View style={styles.formInput}>
                <View style={styles.serialNo}>
                <Text style={styles.serialNoText}>S.NO:-</Text>
                <Text>2</Text>
              </View>
              <View style={styles.itemTag}>
                 <Text style={styles.itemTagText}>Item:-</Text>
                <Text>Attachment Wall</Text>
             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                      <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                   <Text  style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Hinge hardware loose-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>

                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Tower bolt screw missing- </Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Loose-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                           
                            </View>
                                                
                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Missing-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Dent mark-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Bolt damage-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>

                                
                                 
                            </View>
                        </View>
                     
                </View>
                </View>
                {/* form entry */}

                        {/* form entry */}
                <View style={styles.serialEntry}>
                    <View style={styles.formInput}>
                <View style={styles.serialNo}>
                <Text style={styles.serialNoText}>S.NO:-</Text>
                <Text>3</Text>
              </View>
              <View style={styles.itemTag}>
                 <Text style={styles.itemTagText}>Item:-</Text>
                <Text>Tower Bolt</Text>
             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                      <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                   <Text  style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Not fitted -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                           
                            </View>
                                                
                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Hole not done for tower bolt-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                
                            </View>
                        </View>
                     
                </View>
                </View>
                {/* form entry */}


                {/* form entry */}
                <View style={styles.serialEntry}> 
                    <View style={styles.formInput}>
                <View style={styles.serialNo}>
                <Text style={styles.serialNoText}>S.NO:-</Text>
                <Text>4</Text>
              </View>
              <View style={styles.itemTag}>
                 <Text style={styles.itemTagText}>Item:-</Text>
                <Text>Soap Case</Text>
             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                      <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                   <Text  style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Screw missing -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Taper-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                           
                            </View>

                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Screw loose-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                
                            </View>
                                                
                            
                        </View>
                     
                </View>
                </View>
                {/* form entry */}

              {/* form entry */}
              <View style={styles.serialEntry}> 
                    <View style={styles.formInput}>
                <View style={styles.serialNo}>
                <Text style={styles.serialNoText}>S.NO:-</Text>
                <Text>5</Text>
              </View>
              <View style={styles.itemTag}>
                 <Text style={styles.itemTagText}>Item:-</Text>
                <Text>Wash Basin</Text>
             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                      <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                   <Text  style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Not sealed outside -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Roughly sealed  outside -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>I/S Mounting hardware missing-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                           
                            </View>

                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>I/S Wash basin loose-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Inside-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>I/S Wash basin not tighten -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                
                            </View>
                                                
                            
                        </View>
                     
                </View>
                </View>
                {/* form entry */}

              {/* form entry */}
              <View style={styles.serialEntry}> 
                    <View style={styles.formInput}>
                <View style={styles.serialNo}>
                <Text style={styles.serialNoText}>S.NO:-</Text>
                <Text>6</Text>
              </View>
              <View style={styles.itemTag}>
                 <Text style={styles.itemTagText}>Item:-</Text>
                <Text>Steel Dustbin Box</Text>
             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                      <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                   <Text  style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Not provided -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Bkt hardware loose -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Mounting bracket hardware loose-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                           
                            </View>

                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Unlocked-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Screw missing-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View> 
                            </View>
                                                
                            
                        </View>
                     
                </View>
                </View>
                {/* form entry */}

                 {/* form entry */}
              <View style={styles.serialEntry}> 
                    <View style={styles.formInput}>
                <View style={styles.serialNo}>
                <Text style={styles.serialNoText}>S.NO:-</Text>
                <Text>7</Text>
              </View>
              <View style={styles.itemTag}>
                 <Text style={styles.itemTagText}>Item:-</Text>
                <Text>Waste Bin</Text>
             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                      <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                   <Text  style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Mounting hardware loose -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Dent mark-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Less no of screw fitted cover plate-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Cover plate grazing with module-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Outside Mounting hardware loose-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                           
                            </View>

                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Screw missing-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Cover plate rusted-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Magnet not pasted-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Not tighten properly-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                
                            </View>
                                                
                            
                        </View>
                     
                </View>
                </View>
                {/* form entry */}

                 {/* form entry */}
              <View style={styles.serialEntry}> 
                    <View style={styles.formInput}>
                <View style={styles.serialNo}>
                <Text style={styles.serialNoText}>S.NO:-</Text>
                <Text>8</Text>
              </View>
              <View style={styles.itemTag}>
                 <Text style={styles.itemTagText}>Item:-</Text>
                <Text>Soap Dispenser</Text>
             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                      <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                   <Text  style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Loose-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Liquid not provide-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                
                            </View>

                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Taper-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Screw missing-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View> 
                            </View>
                                                
                            
                        </View>
                     
                </View>
                </View>
                {/* form entry */}

                 {/* form entry */}
              <View style={styles.serialEntry}> 
                    <View style={styles.formInput}>
                <View style={styles.serialNo}>
                <Text style={styles.serialNoText}>S.NO:-</Text>
                <Text>9</Text>
              </View>
              <View style={styles.itemTag}>
                 <Text style={styles.itemTagText}>Item:-</Text>
                <Text>Sleeve</Text>
             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                      <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                   <Text  style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Screw missing-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Not properly sited-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                
                            </View>

                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Not in level with floor-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                
                            </View>
                                                
                            
                        </View>
                     
                </View>
                </View>
                {/* form entry */}

                 {/* form entry */}
              <View style={styles.serialEntry}> 
                    <View style={styles.formInput}>
                <View style={styles.serialNo}>
                <Text style={styles.serialNoText}>S.NO:-</Text>
                <Text>10</Text>
              </View>
              <View style={styles.itemTag}>
                 <Text style={styles.itemTagText}>Item:-</Text>
                <Text>Drain Pipe</Text>
             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                      <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                   <Text  style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Leakage -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Outside sleeve not sited-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                
                            </View>

                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Not sealed-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                
                            </View>
                                                
                            
                        </View>
                     
                </View>
                </View>
                {/* form entry */}

                 {/* form entry */}
              <View style={styles.serialEntry}> 
                    <View style={styles.formInput}>
                <View style={styles.serialNo}>
                <Text style={styles.serialNoText}>S.NO:-</Text>
                <Text>11</Text>
              </View>
              <View style={styles.itemTag}>
                 <Text style={styles.itemTagText}>Item:-</Text>
                <Text>Lavatory Door</Text>
             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                      <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                   <Text  style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Pivot loose -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Screw not sited-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Unnecessary sound during movement-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Frame corner not properly sited-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                
                            </View>

                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Screw missing-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Taper-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Handle loose-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Missing/not fitted-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                
                            </View>
                                                
                            
                        </View>
                     
                </View>
                </View>
                {/* form entry */}

                {/* form entry */}
              <View style={styles.serialEntry}> 
                    <View style={styles.formInput}>
                <View style={styles.serialNo}>
                <Text style={styles.serialNoText}>S.NO:-</Text>
                <Text>12</Text>
              </View>
              <View style={styles.itemTag}>
                 <Text style={styles.itemTagText}>Item:-</Text>
                <Text>Coat Hook</Text>
             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                      <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                   <Text  style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Loose in lavatory no.-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                
                            </View>

                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Missing/not fitted-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                
                            </View>
                                                
                            
                        </View>
                     
                </View>
                </View>
                {/* form entry */}

                {/* form entry */}
              <View style={styles.serialEntry}> 
                    <View style={styles.formInput}>
                <View style={styles.serialNo}>
                <Text style={styles.serialNoText}>S.NO:-</Text>
                <Text>12</Text>
              </View>
              <View style={styles.itemTag}>
                 <Text style={styles.itemTagText}>Item:-</Text>
                <Text>E/V Lock</Text>
             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                      <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                   <Text  style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Not working smoothly-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Female part loose -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Male part loose -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                
                            </View>

                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Male-female part mismatch-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Screw missing-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Screw missing-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                
                            </View>
                                                
                            
                        </View>
                     
                </View>
                </View>
                {/* form entry */}

                {/* form entry */}
              <View style={styles.serialEntry}> 
                    <View style={styles.formInput}>
                <View style={styles.serialNo}>
                <Text style={styles.serialNoText}>S.NO:-</Text>
                <Text>13</Text>
              </View>
              <View style={styles.itemTag}>
                 <Text style={styles.itemTagText}>Item:-</Text>
                <Text>Swing Lock</Text>
             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                      <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                   <Text  style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Catch loose -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Catch hardware excess in length -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                
                            </View>

                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Latch loose-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Burr found on swing lock H/W-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                               
                                
                            </View>
                                                
                            
                        </View>
                     
                </View>
                </View>
                {/* form entry */}

                {/* form entry */}
              <View style={styles.serialEntry}> 
                    <View style={styles.formInput}>
                <View style={styles.serialNo}>
                <Text style={styles.serialNoText}>S.NO:-</Text>
                <Text>14</Text>
              </View>
              <View style={styles.itemTag}>
                 <Text style={styles.itemTagText}>Item:-</Text>
                <Text>Lav.Door Closer</Text>
             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                      <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                   <Text  style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Screw not tighten properly -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Movement not smooth-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                
                            </View>

                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Rusted -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                
                            </View>
                                                
                            
                        </View>
                     
                </View>
                </View>
                {/* form entry */}

                {/* form entry */}
              <View style={styles.serialEntry}> 
                    <View style={styles.formInput}>
                <View style={styles.serialNo}>
                <Text style={styles.serialNoText}>S.NO:-</Text>
                <Text>15</Text>
              </View>
              <View style={styles.itemTag}>
                 <Text style={styles.itemTagText}>Item:-</Text>
                <Text>Lotah Tap Strainer</Text>

             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                      <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                   <Text  style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Level up with respect to floor level-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Roughly sealed -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                
                            </View>

                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Strainer not sealed -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Screw missing-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                
                            </View>
                                                
                            
                        </View>
                     
                </View>
                </View>
                {/* form entry */}

                {/* form entry */}
              <View style={styles.serialEntry}> 
                    <View style={styles.formInput}>
                <View style={styles.serialNo}>
                <Text style={styles.serialNoText}>S.NO:-</Text>
                <Text>16</Text>
              </View>
              <View style={styles.itemTag}>
                 <Text style={styles.itemTagText}>Item:-</Text>
                <Text>Additional Wall</Text>

             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                      <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                   <Text  style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Handle cap not pasted-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                            
                            </View>

                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Handle screw loose-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                
                            </View>
                                                
                            
                        </View>
                     
                </View>
                </View>
                {/* form entry */}

                {/* form entry */}
              <View style={styles.serialEntry}> 
                    <View style={styles.formInput}>
                <View style={styles.serialNo}>
                <Text style={styles.serialNoText}>S.NO:-</Text>
                <Text>17</Text>
              </View>
              <View style={styles.itemTag}>
                 <Text style={styles.itemTagText}>Item:-</Text>
                <Text>Pan</Text>

             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                      <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                   <Text  style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Level up with respect to floor level-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                            
                            </View>

                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Roughly sealed -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                
                            </View>
                                                
                            
                        </View>
                     
                </View>
                </View>
                {/* form entry */}

                {/* form entry */}
              <View style={styles.serialEntry}> 
                    <View style={styles.formInput}>
                <View style={styles.serialNo}>
                <Text style={styles.serialNoText}>S.NO:-</Text>
                <Text>18</Text>
              </View>
              <View style={styles.itemTag}>
                 <Text style={styles.itemTagText}>Item:-</Text>
                <Text>Module</Text>

             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                      <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                   <Text  style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Dent on Module -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Joint not sealed-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Hardware with side wall loose-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                            
                            </View>

                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Dent on HPL sheet-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Roughly sealed-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                
                            </View>
                                                
                            
                        </View>
                     
                </View>
                </View>
                {/* form entry */}

                {/* form entry */}
              <View style={styles.serialEntry}> 
                    <View style={styles.formInput}>
                <View style={styles.serialNo}>
                <Text style={styles.serialNoText}>S.NO:-</Text>
                <Text>19</Text>
              </View>
              <View style={styles.itemTag}>
                 <Text style={styles.itemTagText}>Item:-</Text>
                <Text>Ceiling/Door</Text>

             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                      <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                   <Text  style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Plastic film not removed -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                               
                            </View>

                        </View>
                     
                </View>
                </View>
                {/* form entry */}

                 {/* form entry */}
              <View style={styles.serialEntry}> 
                    <View style={styles.formInput}>
                <View style={styles.serialNo}>
                <Text style={styles.serialNoText}>S.NO:-</Text>
                <Text>20</Text>
              </View>
              <View style={styles.itemTag}>
                 <Text style={styles.itemTagText}>Item:-</Text>
                <Text>Hopper Window</Text>

             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                      <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                   <Text  style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Frame not sited-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Excess in length-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Hopper window glass crack-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                            
                            </View>

                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Short in length-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Rubber uprooted-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                
                            </View>
                                                
                            
                        </View>
                     
                </View>
                </View>
                {/* form entry */}

                 {/* form entry */}
              <View style={styles.serialEntry}> 
                    <View style={styles.formInput}>
                <View style={styles.serialNo}>
                <Text style={styles.serialNoText}>S.NO:-</Text>
                <Text>21</Text>
              </View>
              <View style={styles.itemTag}>
                 <Text style={styles.itemTagText}>Item:-</Text>
                <Text>Mirror</Text>

             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                      <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                   <Text  style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Holder loose-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>APD not done-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                
                            </View>

                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Mirror holder taper -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                
                                
                            </View>
                        
                        </View>
                     
                </View>
                </View>
                {/* form entry */}

                {/* form entry */}
              <View style={styles.serialEntry}> 
                    <View style={styles.formInput}>
                <View style={styles.serialNo}>
                <Text style={styles.serialNoText}>S.NO:-</Text>
                <Text>22</Text>
              </View>
              <View style={styles.itemTag}>
                 <Text style={styles.itemTagText}>Item:-</Text>
                <Text>Inlay/Door Frame</Text>

             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                      <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                   <Text  style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Gap found between inlay{'\n'} and door frame</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>

                            </View>

                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Condition of level -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                
                                
                            </View>
                        
                        </View>
                     
                </View>
                </View>
                {/* form entry */}

                {/* form entry */}
              <View style={styles.serialEntry}> 
                    <View style={styles.formInput}>
                <View style={styles.serialNo}>
                <Text style={styles.serialNoText}>S.NO:-</Text>
                <Text>23</Text>
              </View>
              <View style={styles.itemTag}>
                 <Text style={styles.itemTagText}>Item:-</Text>
                <Text>I/S Lavatory</Text>

             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                      <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                   <Text  style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Excess cutting of HPL sheet at corner -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>

                            </View>
                        
                        </View>
                     
                </View>
                </View>
                {/* form entry */}

                {/* form entry */}
              <View style={styles.serialEntry}> 
                    <View style={styles.formInput}>
                <View style={styles.serialNo}>
                <Text style={styles.serialNoText}>S.NO:-</Text>
                <Text>24f</Text>
              </View>
              <View style={styles.itemTag}>
                 <Text style={styles.itemTagText}>Item:-</Text>
                <Text>Ceiling</Text>

             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                      <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                   <Text  style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Hardware loose-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>

                            </View>

                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Flat moulding bulged-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                
                                
                            </View>
                        
                        </View>
                     
                </View>
                </View>
                {/* form entry */}
        
        </View>
        <View style={styles.submitButton}>
            <TouchableOpacity style={styles.forBomx} onPress={lpcListNav}>
                <Text style={styles.forBomxText}>Submit</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    </SafeAreaView>
    
  )
}

export default Lavatory

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white'
    },
    header:{
        margin:10,
        },
    imageTag:{
        justifyContent:'center',
        alignItems:'center',
    },
    headerTag:{
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10
    },
    headerText:{
       color:'black',
       fontSize:20
    },
   
    headerInput:{
        marginTop:10,
        paddingTop:20,
        flexDirection:'row',
        justifyContent:"space-around",
        borderWidth:1,
        paddingBottom:10,
        backgroundColor:'#CCFFFF'
        
    },
    
    headerInputRow:{
        width:'50%'
       
    },
    headerInputRowItem:{
        alignItems:'center',
       flexDirection:'row',
       paddingHorizontal:5
       
    },
    headerInputRowText:{
        flex:1,
     color:'black'
    },
    headerInputRowInput:{
        flex:2,
        backgroundColor:'white',
        margin:2,
        borderRadius:3
    },

    form:{
        borderTopWidth:3,
        borderColor:'lightblue',
        borderStyle:'solid',
       
    },
    // formTag:{
    //     justifyContent:'center',
    //     alignItems:'center',
    //     paddingTop:5
    // },
    // formTagText:{
    //     fontSize:20,
    //     color:'black',
    //     fontWeight:'600'
    // },
    serialEntry:{
        borderWidth:0.5,
        margin:10,
        backgroundColor:"#CCFFFF"
    },
    serialNo:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    itemTag:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    formInput:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        paddingTop:5
    },
    checkInput:{
        flexDirection:'column',
        // justifyContent:'center',
        // alignItems:'center'
    },
    checkPoint:{
        justifyContent:'center',
        alignItems:'center'
    },
    checkPointSection:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
       
    },
    checkPointSectionHeader:{
        justifyContent:'center',
        alignItems:'center'
    },
    checkPointInput:{
        flexDirection:'column',
       padding:5
       
        
    },
    checkPointSectionA:{
        justifyContent:'center',
        alignItems:'center'
    },
    checkPointSectionB:{
        justifyContent:'center',
        alignItems:'center'
    },
    checkText:{
        color:'black',
       paddingBottom:3,
       justifyContent:'center',
       fontSize:17
    },
    checkInputBox:{
        width:300,
       borderWidth:1,
       backgroundColor:'white'
    },
    checkPointSectionHeaderText:{
        color:'black'
    },
    serialNoText:{
        color:'black'
    },
    itemTagText:{
        color:'black'

    },
    checkPointText:{
        color:'black'
    },
    submitButton:{
        justifyContent:'center',
        alignItems:'center',
        
    },
    forBomx:{
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10,
        borderWidth:1,
        width:"35%",
        height:50,
        borderRadius:5,
        backgroundColor:"black",
        

     },
     forBomxText:{
        color:'white',
        fontSize:25,
        fontWeight:'400'
     }
})