import { StyleSheet, Text, View,SafeAreaView,TextInput,ScrollView,TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'


const FloorAndPvc = ({navigation}) => {
    const[headerinput1,setHeaderinput1] = useState('')
    const[headerInput2,setHeaderInput2] = useState('')
    const[headerInput3,setHeaderInput3] = useState('')
    const[headerInput4,setHeaderInput4] = useState('')
    const[headerInput5,setHeaderInput5] = useState('')
    const[headerInput6,setHeaderInput6] = useState('')
    const[headerInput7,setHeaderInput7] = useState('')
    const[headerInput8,setHeaderInput8] = useState('')
    const[headerInput9,setHeaderInput9] = useState('')
    const[headerinput10,setHeaderinput10] = useState('')
    const[headerinput11,setHeaderinput11] = useState('')
    const[headerinput12,setHeaderinput12] = useState('')
    const[headerinput13,setHeaderinput13] = useState('')

    const[input1,setInput1]=useState('')
    const[input2,setInput2]=useState('')
    const[input3,setInput3]=useState('')
    const[input4,setInput4]=useState('')
    const[input5,setInput5]=useState('')
    const[input6,setInput6]=useState('')
    const[input7,setInput7]=useState('')
    const[input8,setInput8]=useState('')
    const[input9,setInput9]=useState('')
    const[input10,setInput10]=useState('')
    const[input11,setInput11]=useState('')
    const[input12,setInput12]=useState('')
    const[input13,setInput13]=useState('')
    const[input14,setInput14]=useState('')
    const[input15,setInput15]=useState('')
    const[input16,setInput16]=useState('')
    const[input17,setInput17]=useState('')
    const[input18,setInput18]=useState('')
    const[input19,setInput19]=useState('')
    const[input20,setInput20]=useState('')
    const[input21,setInput21]=useState('')
    const[input22,setInput22]=useState('')
    const[input23,setInput23]=useState('')
    const[input24,setInput24]=useState('')
    const[input25,setInput25]=useState('')
    const[input26,setInput26]=useState('')
    const[input27,setInput27]=useState('')
    const[input28,setInput28]=useState('')
    const[input29,setInput29]=useState('')
    const[input30,setInput30]=useState('')
    const[input31,setInput31]=useState('')
    const[input32,setInput32]=useState('')
    const[input33,setInput33]=useState('')
    const[input34,setInput34]=useState('')
    const[input35,setInput35]=useState('')
    const[input36,setInput36]=useState('')
    const[input37,setInput37]=useState('')
    const[input38,setInput38]=useState('')
    const[input39,setInput39]=useState('')
    const[input40,setInput40]=useState('')
    const[input41,setInput41]=useState('')
    const[input42,setInput42]=useState('')
    const[input43,setInput43]=useState('')
    const[input44,setInput44]=useState('')
    const[input45,setInput45]=useState('')
    const[input46,setInput46]=useState('')
    const[input47,setInput47]=useState('')
    const[input48,setInput48]=useState('')




    const lwbacListNav = ()=>{
        navigation.navigate('FAC List')
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
                   <Text style={styles.headerText}>FAC (FURNISHING QUALITY)</Text> 
                
            </View>
            <View style={styles.headerInput}>
                    <View style={styles.headerInputRow}>
                            <View style={styles.headerInputRowItem}>
                                <Text style={styles.headerInputRowText}>Doc No:</Text>
                                <TextInput
                                
                                style={styles.headerInputRowInput}
                                onChangeText={setHeaderinput1}
                                value={headerinput1}
                                
                                />
                            </View>
                            <View style={styles.headerInputRowItem}>
                                <Text style={styles.headerInputRowText}>Rev No:</Text>
                                <TextInput
                                style={styles.headerInputRowInput}
                                onChangeText={setHeaderInput2}
                                value={headerInput2}
                                
                                />
                            </View>
                            <View style={styles.headerInputRowItem}>
                                <Text style={styles.headerInputRowText}>Date:</Text>
                                
                                <TextInput
                                style={styles.headerInputRowInput}
                                onChangeText={setHeaderInput3}
                                value={headerInput3}
                                
                                />
                            </View>
                            <View style={styles.headerInputRowItem}>
                                <Text style={styles.headerInputRowText}>Fur No:</Text>
                                <TextInput
                                style={styles.headerInputRowInput}
                                onChangeText={setHeaderInput4}
                                value={headerInput4}
                                
                                />
                            </View>
                            <View style={styles.headerInputRowItem}>
                                <Text style={styles.headerInputRowText}>Booked TO:</Text>
                                <TextInput
                                style={styles.headerInputRowInput}
                                onChangeText={setHeaderInput5}
                                value={headerInput5}
                                
                                />
                            </View>
                            <View style={styles.headerInputRowItem}>
                                <Text style={styles.headerInputRowText}>Shell No:</Text>
                                <TextInput
                                style={styles.headerInputRowInput}
                                onChangeText={setHeaderInput6}
                                value={headerInput6}
                                
                                />
                            </View>
                            <View style={styles.headerInputRowItem}>
                                <Text style={styles.headerInputRowText}>Coach NO:</Text>
                                <TextInput
                                style={styles.headerInputRowInput}
                                onChangeText={setHeaderInput7}
                                value={headerInput7}
                                
                                />
                            </View>
                           
                    </View>

                    <View style={styles.headerInputRow}>
                            
                    <View style={styles.headerInputRowItem}>
                                <Text style={styles.headerInputRowText}>Bogie No:</Text>
                                <TextInput
                                style={styles.headerInputRowInput}
                                onChangeText={setHeaderInput8}
                                value={headerInput8}
                                
                                />
                            </View>
                            <View style={styles.headerInputRowItem}>
                                <Text style={styles.headerInputRowText}>Date:</Text>
                                <TextInput
                                style={styles.headerInputRowInput}
                                onChangeText={setHeaderInput9}
                                value={headerInput9}
                                
                                />
                            </View>
                            <View style={styles.headerInputRowItem}>
                                <Text style={styles.headerInputRowText}>RLY:</Text>
                                <TextInput
                                style={styles.headerInputRowInput}
                                onChangeText={setHeaderinput10}
                                value={headerinput10}
                                
                                />
                            </View>
                            <View style={styles.headerInputRowItem}>
                                <Text style={styles.headerInputRowText}>PP:</Text>
                                <TextInput
                                style={styles.headerInputRowInput}
                                onChangeText={setHeaderinput11}
                                value={headerinput11}
                                
                                />
                            </View>
                            <View style={styles.headerInputRowItem}>
                                <Text style={styles.headerInputRowText}>NPP:</Text>
                                <TextInput
                                style={styles.headerInputRowInput}
                                onChangeText={setHeaderinput12}
                                value={headerinput12}
                                
                                />
                            </View>
                            <View style={styles.headerInputRowItem}>
                                <Text style={styles.headerInputRowText}>Shift:</Text>
                                <TextInput
                                style={styles.headerInputRowInput}
                                onChangeText={setHeaderinput13}
                                value={headerinput13}
                                
                                />
                            </View>
                    </View>

            
            </View>
            
        </View>
        <View style={styles.form}>
              {/* <View style={styles.formTag}>
                <Text style={styles.formTagText}>1-FLOOR & PVC</Text>
              </View> */}
              {/* form entry */}
                <View style={styles.serialEntry}>
                    <View style={styles.formInput}>
                <View style={styles.serialNo}>
                <Text style={styles.serialNoText}>S.NO:-</Text>
                <Text style={styles.serialNoText}>1</Text>
              </View>
              <View style={styles.itemTag}>
                <Text style={styles.itemTagText}>Item:-</Text>
                <Text style={styles.itemTagText}>Foot Plate</Text>
             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                        <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Jam-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput1}
                                    value={input1}
                                    />
                                </View>

                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Spring harware loose</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput2}
                                    value={input2}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Side rubber pad H/W loose-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput3}
                                    value={input3}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Engagement of foot plate and {'\n'}End wall door-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput4}
                                    value={input4}
                                    />
                                </View>
                                 
                            </View>
                                                
                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Movement Hard-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput5}
                                    value={input5}
                                    />
                                </View>

                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Spring harware missing</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput6}
                                    value={input6}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}> H/W missing-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput7}
                                    value={input7}
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
                <Text style={styles.serialNoText}>2</Text>
              </View>
              <View style={styles.itemTag}>
                <Text style={styles.itemTagText}>Item:-</Text>
                <Text style={styles.itemTagText}>UIC Vestibule</Text>
             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                        <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Loose-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput8}
                                    value={input8}
                                    />
                                </View>

                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Craked</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput9}
                                    value={input9}
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
                                    onChangeText={setInput10}
                                    value={input10}
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
                <Text style={styles.serialNoText}>3</Text>
              </View>
              <View style={styles.itemTag}>
                <Text style={styles.itemTagText}>Item:-</Text>
                <Text style={styles.itemTagText}>Tail Lamp</Text>
             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                        <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Taper fitted-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput11}
                                    value={input11}
                                    />
                                </View>

                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Welding Done on tail lamp {'\n'}instead of nut bolt-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput12}
                                    value={input12}
                                    />
                                </View>
                           
                            </View>
                                                
                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>H/W missing-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput13}
                                    value={input13}
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
                <Text style={styles.serialNoText}>4</Text>
              </View>
              <View style={styles.itemTag}>
                <Text style={styles.itemTagText}>Item:-</Text>
                <Text style={styles.itemTagText}>Foot Step</Text>
             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                        <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Found Loose-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput14}
                                    value={input14}
                                    />
                                </View>

                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Rested-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput15}
                                    value={input15}
                                    />
                                </View>
                           
                            </View>
                                                
                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>H/W missing-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput16}
                                    value={input16}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Taper fitteds-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput17}
                                    value={input17}
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
                <Text style={styles.serialNoText}>5</Text>
              </View>
              <View style={styles.itemTag}>
                <Text style={styles.itemTagText}>Item:-</Text>
                <Text style={styles.itemTagText}>Entrance Hand Rail</Text>
             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                        <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>H/W loose-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput18}
                                    value={input18}
                                    />
                                </View>

                                
                           
                            </View>
                                                
                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Tack Welding-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput19}
                                    value={input19}
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
                <Text style={styles.serialNoText}>6</Text>
              </View>
              <View style={styles.itemTag}>
                <Text style={styles.itemTagText}>Item:-</Text>
                <Text style={styles.itemTagText}>Step Rail</Text>
             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                        <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Mounting screw not sited-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput20}
                                    value={input20}
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
                                    onChangeText={setInput21}
                                    value={input21}
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
                <Text style={styles.serialNoText}>7</Text>
              </View>
              <View style={styles.itemTag}>
                <Text style={styles.itemTagText}>Item:-</Text>
                <Text style={styles.itemTagText}>Chequer Sheet</Text>
             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                        <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Corner not sealed-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput22}
                                    value={input22}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Roughly cutting at corner-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput23}
                                    value={input23}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Screw not properly not sited{'\n'}in counter-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput24}
                                    value={input24}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Screw missing-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput25}
                                    value={input25}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Screw loose-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput26}
                                    value={input26}
                                    />
                                </View>

                                
                           
                            </View>
                                                
                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Roughly sealed-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput27}
                                    value={input27}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Not sited properly at corner-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput28}
                                    value={input28}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Unwanted hole-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput29}
                                    value={input29}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Bulge-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput30}
                                    value={input30}
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
                <Text style={styles.serialNoText}>8</Text>
              </View>
              <View style={styles.itemTag}>
                <Text style={styles.itemTagText}>Item:-</Text>
                <Text style={styles.itemTagText}>Door Stopper</Text>
             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                        <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Not fitted at 90 degree-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput31}
                                    value={input31}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Packing provided-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput32}
                                    value={input32}
                                    />
                                </View>

                                
                           
                            </View>
                                                
                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Loose-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput33}
                                    value={input33}
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
                <Text style={styles.serialNoText}>9</Text>
              </View>
              <View style={styles.itemTag}>
                <Text style={styles.itemTagText}>Item:-</Text>
                <Text style={styles.itemTagText}>E/Wall Safety Handle</Text>
             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                        <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Loose-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput34}
                                    value={input34}
                                    />
                                </View>
                                
                                
                           
                            </View>
                                                
                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>H/W missing-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput35}
                                    value={input35}
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
                <Text style={styles.serialNoText}>10</Text>
              </View>
              <View style={styles.itemTag}>
                <Text style={styles.itemTagText}>Item:-</Text>
                <Text style={styles.itemTagText}>PVC</Text>
             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                        <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Not properly cutting and pasting {'\n'}near end wall door-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput36}
                                    value={input36}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>In cabin-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput37}
                                    value={input37}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Joint welding roughly done-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput38}
                                    value={input38}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Air bubble found-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput39}
                                    value={input39}
                                    />
                                </View>
                                

                                
                           
                            </View>
                                                
                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Near Lavatory door frame-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput40}
                                    value={input40}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>In Pantry-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput41}
                                    value={input41}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Excess in length at-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput42}
                                    value={input42}
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
                <Text style={styles.serialNoText}>11</Text>
              </View>
              <View style={styles.itemTag}>
                <Text style={styles.itemTagText}>Item:-</Text>
                <Text style={styles.itemTagText}>Floor</Text>
             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                        <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Not in level at corridor area-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput43}
                                    value={input43}
                                    />
                                </View>
                                
                                
                           
                            </View>
                                                
                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>In cabin-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput44}
                                    value={input44}
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
                <Text style={styles.serialNoText}>12</Text>
              </View>
              <View style={styles.itemTag}>
                <Text style={styles.itemTagText}>Item:-</Text>
                <Text style={styles.itemTagText}>Foam Sealing</Text>
             </View>

                

              </View>
              <View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                        <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Not done-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput45}
                                    value={input45}
                                    />
                                </View>
                                
                                
                           
                            </View>
                                                
                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Roughly done-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput46}
                                    value={input46}
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
                <Text style={styles.serialNoText}>13</Text>
              </View>
              <View style={styles.itemTag}>
                <Text style={styles.itemTagText}>Item:-</Text>
                <Text style={styles.itemTagText}>FAM Sealing</Text>
             </View>

                

              </View><View style={styles.checkInput}>
                    <View style={styles.checkPoint}> 
                        <Text style={styles.checkPointText}>Check Points</Text>
                    </View>

                        <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Not done-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput47}
                                    value={input47}
                                    />
                                </View>
                                
                                
                           
                            </View>
                                                
                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Roughly done-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput48}
                                    value={input48}
                                    />
                                </View>

                                
                                 
                            </View>
                        </View>
                     
                </View>
                </View>
                {/* form entry */}



              
                
              
        </View>
        <View style={styles.submitButton}>
            <TouchableOpacity style={styles.forBomx}  onPress={lwbacListNav}>
                <Text style={styles.forBomxText}>Submit</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    </SafeAreaView>
    
  )
}

export default FloorAndPvc

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