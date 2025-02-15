import { StyleSheet, Text, View,SafeAreaView,ScrollView,TextInput,TouchableOpacity,Image } from 'react-native'
import React,{useState} from 'react'

const WindowAndCeiling = ({navigation}) => {

    const[check1,setCheck1] = useState('')

    const SCZListNav = ()=>{
        navigation.navigate('SCZ List')
    }

  return (
    <SafeAreaView>
        <ScrollView style={styles.container}>
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
                <Text style={styles.headerText}>SCZ(FURNISHING QUALITY)</Text> 
                
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
                <Text style={styles.formTagText}>4-Window And Ceiling</Text>
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
                <Text style={styles.itemTagText}>D/ Area Ceiling</Text>
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
                                    <Text style={styles.checkText}>Unwanted hole -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Joint Flap Moulding not sited-</Text>
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
                                    <Text style={styles.checkText}>Level mismatch-</Text>
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
                <Text style={styles.serialNoText}>2</Text>
              </View>
              <View style={styles.itemTag}>
                <Text style={styles.itemTagText}>Item:-</Text>
                <Text style={styles.itemTagText}>Side Ceiling</Text>
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
                                    <Text style={styles.checkText}>Excess gap each other</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                
                               

                                
                                 
                            </View>

                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text  style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Dent mark-</Text>
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
                <Text style={styles.serialNoText}>3</Text>
              </View>
              <View style={styles.itemTag}>
                <Text style={styles.itemTagText}>Item:-</Text>
                <Text style={styles.itemTagText}>Centre Ceiling</Text>
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
                                    <Text style={styles.checkText}>Bulged-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                
                               

                                
                                 
                            </View>

                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text  style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Dent mark-</Text>
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
                <Text style={styles.serialNoText}>4</Text>
              </View>
              <View style={styles.itemTag}>
                <Text style={styles.itemTagText}>Item:-</Text>
                <Text style={styles.itemTagText}>Side Ceiling</Text>
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
                                    <Text style={styles.checkText}>Not In level to each other-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                
                               

                                
                                 
                            </View>

                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text  style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Gap found on ceiling and pantry-</Text>
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
                <Text style={styles.serialNoText}>5</Text>
              </View>
              <View style={styles.itemTag}>
                <Text style={styles.itemTagText}>Item:-</Text>
                <Text style={styles.itemTagText}>H –Moulding</Text>
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
                                    <Text style={styles.checkText}>Zigzag-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                
                               

                                
                                 
                            </View>

                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text  style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Not sited with Ceiling-</Text>
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
                <Text style={styles.serialNoText}>6</Text>
              </View>
              <View style={styles.itemTag}>
                <Text style={styles.itemTagText}>Item:-</Text>
                <Text style={styles.itemTagText}>Pillar Cover</Text>
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
                                    <Text style={styles.checkText}>Not seated-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                
                               

                                
                                 
                            </View>

                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text  style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>U/w hole-</Text>
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
                <Text style={styles.serialNoText}>7</Text>
              </View>
              <View style={styles.itemTag}>
                <Text style={styles.itemTagText}>Item:-</Text>
                <Text style={styles.itemTagText}>Window Shutter</Text>
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
                                    <Text style={styles.checkText}>Lock not working-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Grazing with its frame-</Text>
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
                                    <Text style={styles.checkText}>Lock loose -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Jam s no.-</Text>
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
                <Text style={styles.serialNoText}>8</Text>
              </View>
              <View style={styles.itemTag}>
                <Text style={styles.itemTagText}>Item:-</Text>
                <Text style={styles.itemTagText}>Window Glass</Text>
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
                                    <Text style={styles.checkText}>Lock not working-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Grazing with seat backrest-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                               

                                
                                 
                            </View>
                            <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text  style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Lock loose-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Jam-</Text>
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
                <Text style={styles.itemTagText}>Window Frame</Text>
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
                                    <Text style={styles.checkText}>Not sited -</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Screw Missing-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                               

                                
                                 
                            </View>
                            <View style={styles.checkPointSection}>
                            <View style={styles.checkPointSectionA}>
                                <View style={styles.checkPointSectionHeader}>
                                    <Text  style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>U/w hole-</Text>
                                    <TextInput 
                                    style={styles.checkInputBox}
                                    onChangeText={setCheck1}
                                    value={check1}
                                    />
                                </View>
                                <View style={styles.checkPointInput}>
                                    <Text style={styles.checkText}>Grill loose-</Text>
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
                </View>
                {/* form entry */}

      
              
        </View>
        <View style={styles.submitButton}>
            <TouchableOpacity style={styles.forBomx}  onPress={SCZListNav}>
                <Text style={styles.forBomxText}>Submit</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default WindowAndCeiling

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