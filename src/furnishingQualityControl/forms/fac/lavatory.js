import { StyleSheet, Text, View,SafeAreaView,TextInput,ScrollView,TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'

const Lavatory = ({navigation}) => {
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
    const[input52,setInput52]=useState('')
    const[input53,setInput53]=useState('')
    const[input54,setInput54]=useState('')
    const[input55,setInput55]=useState('')
    const[input56,setInput56]=useState('')
    const[input57,setInput57]=useState('')
    const[input58,setInput58]=useState('')
    const[input59,setInput59]=useState('')
    const[input60,setInput60]=useState('')
    const[input61,setInput61]=useState('')
    const[input62,setInput62]=useState('')
    const[input63,setInput63]=useState('')
    const[input64,setInput64]=useState('')
    const[input65,setInput65]=useState('')
    const[input66,setInput66]=useState('')
    const[input67,setInput67]=useState('')
    const[input68,setInput68]=useState('')
    const[input69,setInput69]=useState('')
    const[input70,setInput70]=useState('')
    const[input71,setInput71]=useState('')
    const[input72,setInput72]=useState('')
    const[input73,setInput73]=useState('')
    const[input74,setInput74]=useState('')
    const[input75,setInput75]=useState('')
    const[input76,setInput76]=useState('')
    const[input77,setInput77]=useState('')
    const[input78,setInput78]=useState('')
    const[input79,setInput79]=useState('')
    const[input80,setInput80]=useState('')
    const[input81,setInput81]=useState('')
    const[input82,setInput82]=useState('')
    const[input83,setInput83]=useState('')
    const[input84,setInput84]=useState('')
    const[input85,setInput85]=useState('')
    const[input86,setInput86]=useState('')
    const[input87,setInput87]=useState('')
    const[input88,setInput88]=useState('')
    const[input89,setInput89]=useState('')
    const[input90,setInput90]=useState('')
    const[input91,setInput91]=useState('')
    const[input92,setInput92]=useState('')
    const[input93,setInput93]=useState('')
  


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
                <Text style={styles.itemTagText}>Loro Pipe</Text>
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
                                    onChangeText={setInput1}
                                    value={input1}
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
                                    onChangeText={setInput2}
                                    value={input2}
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
                                    <Text style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Hinge hardware  loose-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput3}
                                    value={input3}
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
                                    onChangeText={setInput4}
                                    value={input4}
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
                                    <Text style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Screw loose -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput5}
                                    value={input5}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Grazing with chequer sheet-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput6}
                                    value={input6}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Not fitted -</Text>
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
                                    <Text style={styles.checkText}>Missing-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput8}
                                    value={input8}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Grazing with ceiling-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput9}
                                    value={input9}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Hole not done-</Text>
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
                                    <Text style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Screw missing -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput11}
                                    value={input11}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Taper-</Text>
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
                                    <Text style={styles.checkText}>Screw loose-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput13}
                                    value={input13}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Damage-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput14}
                                    value={input14}
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
                <Text>Wash Basin inside</Text>
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
                                    <Text style={styles.checkText}>Not sealed-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput15}
                                    value={input15}
                                    />
                                </View>
                                
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>H/W loose-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput16}
                                    value={input16}
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
                                    onChangeText={setInput17}
                                    value={input17}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>H/w missing-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput18}
                                    value={input18}
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
                <Text>Wash Basin outside</Text>
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
                                    <Text style={styles.checkText}>Not sealed-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput19}
                                    value={input19}
                                    />
                                </View>
                                
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>H/W loose-</Text>
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
                                    <Text style={styles.checkText}>Roughly sealed-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput21}
                                    value={input21}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>H/w missing-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput22}
                                    value={input22}
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
                <Text>Dustbin Box</Text>
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
                                    <Text style={styles.checkText}>Not provided -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput23}
                                    value={input23}
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
                                    onChangeText={setInput24}
                                    value={input24}
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
                <Text>Dustbin</Text>
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
                                    <Text style={styles.checkText}>Bkt hardware  loose -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput25}
                                    value={input25}
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
                                    onChangeText={setInput26}
                                    value={input26}
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
                <Text> Steel Dustbin </Text>
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
                                    <Text style={styles.checkText}>Mounting bkt. H/w  loose</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput27}
                                    value={input27}
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
                                    onChangeText={setInput28}
                                    value={input28}
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
                <Text>Waste Bin</Text>
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
                                    <Text style={styles.checkText}>Bkt hardware  loose -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput29}
                                    value={input29}
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
                <Text>11</Text>
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
                                    <Text style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Cover plate rusted-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput31}
                                    value={input31}
                                    />
                                </View>
                                
                           
                            </View>

                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Magnet not pasted-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput32}
                                    value={input32}
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
                <Text>Waste Bin</Text>
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
                                    <Text style={styles.checkText}>Cover plate screw missing-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput33}
                                    value={input33}
                                    />
                                </View>
                                
                           
                            </View>

                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Cover plate grazing with module-</Text>
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
                <Text>13</Text>
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
                                    <Text style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Mounting h/w  loose-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput35}
                                    value={input35}
                                    />
                                </View>
                                
                           
                            </View>

                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>H/w missing--</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput36}
                                    value={input36}
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
                <Text>Sleeve</Text>
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
                                    <Text style={styles.checkText}>Screw missing -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput37}
                                    value={input37}
                                    />
                                </View>
                                
                                
                            </View>

                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Level with floor -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput38}
                                    value={input38}
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
                <Text>Drain pipe</Text>
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
                                    <Text style={styles.checkText}>Leakage -</Text>
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
                                    <Text style={styles.checkText}>Not sealed-</Text>
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
                <Text>16</Text>
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
                                    <Text style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Pivot loose -</Text>
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
                                    <Text style={styles.checkText}>Screw missing-</Text>
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
                <Text>17</Text>
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
                                    <Text style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Taper -</Text>
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
                                    <Text style={styles.checkText}>Movement  of door -</Text>
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
                <Text>18</Text>
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
                                    <Text style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Frame not properly  sited-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput45}
                                    value={input45}
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
                <Text>Lavatory Door</Text>
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
                                    <Text style={styles.checkText}>Handle loose-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput46}
                                    value={input46}
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
                                    onChangeText={setInput47}
                                    value={input47}
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
                <Text>Coat Hook</Text>
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
                                    <Text style={styles.checkText}>Loose in lavatory no.-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput48}
                                    value={input48}
                                    />
                                </View>
                                
                            </View>

                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>H/W missing</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput49}
                                    value={input49}
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
                <Text>E/V Lock</Text>
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
                                    <Text style={styles.checkText}>Not working smoothly-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput50}
                                    value={input50}
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
                                    onChangeText={setInput51}
                                    value={input51}
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
                <Text>E/V Lock</Text>
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
                                    <Text style={styles.checkText}>Female part loose -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput52}
                                    value={input52}
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
                                    onChangeText={setInput53}
                                    value={input53}
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
                <Text>E/V Lock</Text>
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
                                    <Text style={styles.checkText}>Male part loose -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput54}
                                    value={input54}
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
                                    onChangeText={setInput55}
                                    value={input55}
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
                <Text>24</Text>
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
                                    <Text style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Catch loose -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput56}
                                    value={input56}
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
                                    onChangeText={setInput57}
                                    value={input57}
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
                <Text>25</Text>
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
                                    <Text style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                               
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Catch hardware excess in length -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput58}
                                    value={input58}
                                    />
                                </View>
                                
                            </View>

                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                               
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Burr found on swing lock H/W-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput59}
                                    value={input59}
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
                <Text>26</Text>
              </View>
              <View style={styles.itemTag}>
                <Text style={styles.itemTagText}>Item:-</Text>
                <Text>Lav.  D/closer</Text>
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
                                    <Text style={styles.checkText}>Screw loose-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput60}
                                    value={input60}
                                    />
                                </View>
                               
                                
                            </View>

                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Movement not smooth-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput61}
                                    value={input61}
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
                <Text>27</Text>
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
                                    <Text style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Level up with floor-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput62}
                                    value={input62}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Strainer not sealed -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput63}
                                    value={input63}
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
                                    onChangeText={setInput64}
                                    value={input64}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Roughly sealed -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput65}
                                    value={input65}
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
                <Text>28</Text>
              </View>
              <View style={styles.itemTag}>
                <Text style={styles.itemTagText}>Item:-</Text>
                <Text>Additional wall</Text>

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
                                    <Text style={styles.checkText}>Handle cap not pasted-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput66}
                                    value={input66}
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
                                    onChangeText={setInput67}
                                    value={input67}
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
                <Text>29</Text>
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
                                    <Text style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Roughly sealed -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput68}
                                    value={input68}
                                    />
                                </View>
                            
                            </View>

                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Not sealed -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput69}
                                    value={input69}
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
                <Text>30</Text>
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
                                    <Text style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Dent mark-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput70}
                                    value={input70}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Joint not sealed-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput71}
                                    value={input71}
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
                                    onChangeText={setInput72}
                                    value={input72}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Roughly sealed-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput73}
                                    value={input73}
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
                <Text>31</Text>
              </View>
              <View style={styles.itemTag}>
                <Text style={styles.itemTagText}>Item:-</Text>
                <Text>Commode</Text>

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
                                    <Text style={styles.checkText}>Hardware loose-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput74}
                                    value={input74}
                                    />
                                </View>
                                
                            
                            </View>

                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Missing -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput75}
                                    value={input75}
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
                <Text>32</Text>
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
                                    <Text style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Plastic film not removed -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput76}
                                    value={input76}
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
                                    onChangeText={setInput77}
                                    value={input77}
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
                <Text>33</Text>
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
                                    <Text style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Hardware With s/w Loose-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput78}
                                    value={input78}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Short in length-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput79}
                                    value={input79}
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
                                    onChangeText={setInput80}
                                    value={input80}
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
                <Text>34</Text>
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
                                    <Text style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Frame not sited-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput81}
                                    value={input81}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Rubber uprooted-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput82}
                                    value={input82}
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
                                    onChangeText={setInput83}
                                    value={input83}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Glass crack-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput84}
                                    value={input84}
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
                <Text>35</Text>
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
                                    <Text style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Holder loose-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput85}
                                    value={input85}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Mirror holder taper -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput86}
                                    value={input86}
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
                                    onChangeText={setInput87}
                                    value={input87}
                                    />
                                </View>
                                
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>APD not done/Roughly Done-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput88}
                                    value={input88}
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
                <Text>36</Text>
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
                                    <Text style={styles.checkPointSectionHeaderText}>A)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Gap found between door frame</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput89}
                                    value={input89}
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
                <Text>37</Text>
              </View>
              <View style={styles.itemTag}>
                <Text style={styles.itemTagText}>Item:-</Text>
                <Text>Commode</Text>

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
                                    <Text style={styles.checkText}>Non Standard H/w Provided-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput90}
                                    value={input90}
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
                                    onChangeText={setInput91}
                                    value={input91}
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
                <Text>38</Text>
              </View>
              <View style={styles.itemTag}>
                <Text style={styles.itemTagText}>Item:-</Text>
                <Text>Furnishing plate</Text>

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
                                    <Text style={styles.checkText}>Not fitted-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput92}
                                    value={input92}
                                    />
                                </View>

                            </View>

                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Less no. screw-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput93}
                                    value={input93}
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