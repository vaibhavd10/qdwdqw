import { StyleSheet, Text, View,SafeAreaView,TextInput,ScrollView,TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'

const Panel = ({navigation}) => {
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
    

    const[check1,setCheck1] = useState('')

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
                <Text style={styles.formTagText}>3-PANEL</Text>
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
                <Text style={styles.itemTagText}>Panel</Text>
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
                                    <Text style={styles.checkText}>Unwanted hole at B.No-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput1}
                                    value={input1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Mounting screw loose -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput2}
                                    value={input2}
                                    />
                                </View> 
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Dent mark at B.No-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput3}
                                    value={input3}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Excess gap between panel &partition -</Text>
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
                                    <Text style={styles.checkText}>Extra Screw provided-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput5}
                                    value={input5}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Missing-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput6}
                                    value={input6}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Cracked at B.No-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput7}
                                    value={input7}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Not properly locked C/N-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput8}
                                    value={input8}
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
                <Text style={styles.itemTagText}>Aluminium  Extrusion</Text>
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
                                    <Text style={styles.checkText}>Joint not in level -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput9}
                                    value={input9}
                                    />
                                </View>

                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Bottom extrusion screw missing-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput10}
                                    value={input10}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Not properly fitted C/N-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput11}
                                    value={input11}
                                    />
                                </View>
                           
                            </View>
                                                
                            <View style={styles.checkPointSectionB}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Bend-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput12}
                                    value={input12}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Hardware loose-</Text>
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
                <Text style={styles.serialNoText}>3</Text>
              </View>
              <View style={styles.itemTag}>
                <Text style={styles.itemTagText}>Item:-</Text>
                <Text style={styles.itemTagText}>Compartment Grill</Text>
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
                                    <Text style={styles.checkText}>Fitment not ok-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput14}
                                    value={input14}
                                    />
                                </View>

                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Screw loose -</Text>
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
                                    <Text style={styles.checkText}>Screw missing-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput16}
                                    value={input16}
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
                <Text style={styles.itemTagText}>Window Rubber</Text>
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
                                    <Text style={styles.checkText}>Short in length BN-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setInput17}
                                    value={input17}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Uprooted B.no-</Text>
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
                                    <Text style={styles.checkText}>Excess in length B.No -</Text>
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

export default Panel

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