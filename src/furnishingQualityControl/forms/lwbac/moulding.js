import { StyleSheet, Text, View,SafeAreaView,TextInput,ScrollView,TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'

const Moulding = ({navigation}) => {
    const[headerInput1,setHeaderInput1] = useState('')
    const[headerInput2,setHeaderInput2] = useState('')
    const[headerInput3,setHeaderInput3] = useState('')
    const[headerInput4,setHeaderInput4] = useState('')
    const[headerInput5,setHeaderInput5] = useState('')
    const[headerInput6,setHeaderInput6] = useState('')
    const[headerInput7,setHeaderInput7] = useState('')
    const[headerInput8,setHeaderInput8] = useState('')
    const[headerInput9,setHeaderInput9] = useState('')
    const[headerInput10,setHeaderInput10] = useState('')
    const[headerInput11,setHeaderInput11] = useState('')
    const[headerInput12,setHeaderInput12] = useState('')
    const[headerInput13,setHeaderInput13] = useState('')
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
    const[input49,setInput49]=useState('')
    const[input50,setInput50]=useState('')
    const[input51,setInput51]=useState('')
    


    



    const lwbacListNav = ()=>{
        navigation.navigate('Lwbac List')
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
            <Text style={styles.headerText}>LWBAC (FURNISHING QUALITY)</Text> 
            
        </View>
        <View style={styles.headerInput}>
                    <View style={styles.headerInputRow}>
                            <View style={styles.headerInputRowItem}>
                                <Text style={styles.headerInputRowText}>Doc No:</Text>
                                <TextInput
                                
                                style={styles.headerInputRowInput}
                                onChangeText={setHeaderInput1}
                                value={headerInput1}
                                
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
                                onChangeText={setHeaderInput10}
                                value={headerInput10}
                                
                                />
                            </View>
                            <View style={styles.headerInputRowItem}>
                                <Text style={styles.headerInputRowText}>PP:</Text>
                                <TextInput
                                style={styles.headerInputRowInput}
                                onChangeText={setHeaderInput11}
                                value={headerInput11}
                                
                                />
                            </View>
                            <View style={styles.headerInputRowItem}>
                                <Text style={styles.headerInputRowText}>NPP:</Text>
                                <TextInput
                                style={styles.headerInputRowInput}
                                onChangeText={setHeaderInput12}
                                value={headerInput12}
                                
                                />
                            </View>
                            <View style={styles.headerInputRowItem}>
                                <Text style={styles.headerInputRowText}>Shift:</Text>
                                <TextInput
                                style={styles.headerInputRowInput}
                                onChangeText={setHeaderInput13}
                                value={headerInput13}
                                
                                />
                            </View>
                    </View>

            
            </View>
    </View>
    <View style={styles.form}>
          {/* <View style={styles.formTag}>
            <Text style={styles.formTagText}>5-MOULDING</Text>
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
            <Text style={styles.itemTagText}>END WALL DOOR</Text>
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
                                <Text style={styles.checkText}>Cover  loose-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput1}
                                value={input1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Not sliding smoothly-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput2}
                                value={input2}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Manual Lock not in align.-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput3}
                                value={input3}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Bracket hardware loose-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput4}
                                value={input4}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Check For proper fitment of End Wall{'\n'} & Saloon Sliding Doors.& smooth {'\n'}movement Without Jerks {'\n'}& Noise</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput5}
                                value={input5}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Ensure Max. Opening Force of End {'\n'}Wall & Saloon Sliding Door shell be {'\n'}50-80 Newton & 50-60 Newton  
                                {'\n'}respectively</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput6}
                                value={input6}
                                />
                            </View>
                            
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Movement of sliding Doors should be{'\n'}lower at the End of closing stroke for {'\n'}last 200 mm (0.05m/Sec)</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput7}
                                value={input7}
                                />
                            </View>

                            
                             
                        </View>
                                            
                        <View style={styles.checkPointSectionB}>
                            <View style={styles.checkPointSectionHeader}>
                                <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>H/w missing-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput8}
                                value={input8}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Unwanted hole--</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput9}
                                value={input9}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Rail screw missing-</Text>
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
            <Text style={styles.serialNoText}>2</Text>
          </View>
          <View style={styles.itemTag}>
            <Text style={styles.itemTagText}>Item:-</Text>
            <Text style={styles.itemTagText}>Entrance Door</Text>
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
                                <Text style={styles.checkText}>Manual handle movement hard-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput11}
                                value={input11}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Movement is  not smooth-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput12}
                                value={input12}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Top pivot loose-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput13}
                                value={input13}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Manual lock is not properly working-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput14}
                                value={input14}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Bottom pivot excess in length-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput15}
                                value={input15}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Grazing with chequer sheet -</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput16}
                                value={input16}
                                />
                            </View>
                            
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Excess play found on entrance door-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput17}
                                value={input17}
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
                                onChangeText={setInput18}
                                value={input18}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Handle rusted-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput19}
                                value={input19}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Bottom pivot loose-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput20}
                                value={input20}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Latch catch mismatch-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput21}
                                value={input21}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Unwanted hole-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput22}
                                value={input22}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Grazing with frame rubber-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput23}
                                value={input23}
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
            <Text style={styles.itemTagText}>H/ Stell Strip</Text>
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
                                <Text style={styles.checkText}>Strip screw not properly tighten-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput24}
                                value={input24}
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
                                onChangeText={setInput25}
                                value={input25}
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
            <Text style={styles.itemTagText}>Vertical Steel Strip</Text>
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
                                <Text style={styles.checkText}>Screw not properly tighten-</Text>
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
                                <Text style={styles.checkText}>Screw missing-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput27}
                                value={input27}
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
            <Text style={styles.itemTagText}>Rubber</Text>
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
                                <Text style={styles.checkText}>Horizontal rubber not pasted-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput28}
                                value={input28}
                                />
                            </View>
                            

                            
                             
                        </View>
                                            
                        <View style={styles.checkPointSectionB}>
                            <View style={styles.checkPointSectionHeader}>
                                <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Vertical rubber  not pasted-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput29}
                                value={input29}
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
            <Text style={styles.itemTagText}>Tilli Panel</Text>
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
                                <Text style={styles.checkText}>Loose Fitted-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput30}
                                value={input30}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Edge cutting jig jag-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput31}
                                value={input31}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Short in width-</Text>
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
                                <Text style={styles.checkText}>Bulge-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput33}
                                value={input33}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Unwanted Hole-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput34}
                                value={input34}
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
            <Text style={styles.itemTagText}>Vertical FRP</Text>
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
                                <Text style={styles.checkText}>Loose Fitted-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput35}
                                value={input35}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Unwanted hole-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput36}
                                value={input36}
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
                                onChangeText={setInput37}
                                value={input37}
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
            <Text style={styles.itemTagText}>Horizontal FRP</Text>
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
                                <Text style={styles.checkText}>Loose Fitted-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput38}
                                value={input38}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Screw Missing-</Text>
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
                                <Text style={styles.checkText}>Unwanted Hole-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput40}
                                value={input40}
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
            <Text style={styles.itemTagText}>H/Vertical FRP</Text>
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
                                <Text style={styles.checkText}>Joint mismatch-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput41}
                                value={input41}
                                />
                            </View>
                            

                            
                             
                        </View>
                                            
                        <View style={styles.checkPointSectionB}>
                            <View style={styles.checkPointSectionHeader}>
                                <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Roughly putty applied-</Text>
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
            <Text style={styles.serialNoText}>10</Text>
          </View>
          <View style={styles.itemTag}>
            <Text style={styles.itemTagText}>Item:-</Text>
            <Text style={styles.itemTagText}>Store Room</Text>
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
                                <Text style={styles.checkText}>Shutter movement hard-</Text>
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
                                <Text style={styles.checkText}>Tower bolt miss-match-</Text>
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
            <Text style={styles.serialNoText}>11</Text>
          </View>
          <View style={styles.itemTag}>
            <Text style={styles.itemTagText}>Item:-</Text>
            <Text style={styles.itemTagText}>Compartment Door</Text>
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
                                <Text style={styles.checkText}>Frame not properly sited with{'\n'}partition pillar--</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput45}
                                value={input45}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Handle missing-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput46}
                                value={input46}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Stopper is not properly working-</Text>
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
                                <Text style={styles.checkText}>Hinge screw loose-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput48}
                                value={input48}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Handle loose-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput49}
                                value={input49}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Brush missing-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput50}
                                value={input50}
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
            <Text style={styles.itemTagText}>Saloon Sliding Doors</Text>
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
                                <Text style={styles.checkText}>Smooth movement without jerks & noise-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setInput51}
                                value={input51}
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

export default Moulding

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