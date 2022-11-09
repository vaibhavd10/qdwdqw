import { StyleSheet, Text, View,SafeAreaView,TextInput,ScrollView,TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'

const Moulding = ({navigation}) => {

    const[check1,setCheck1] = useState('')



    const SlrdListNav = ()=>{
        navigation.navigate('SLRD List')
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
            <Text style={styles.headerText}>LDSLR &SLRD(FURNISHING QUALITY)</Text> 
            
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
          <View style={styles.formTag}>
            <Text style={styles.formTagText}>Guard Room</Text>
          </View>
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
                                <Text style={styles.checkText}>Cover hardware loose-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Not tighten-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Not sliding smoothly-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Lock not in align-</Text>
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
                                <Text style={styles.checkText}>Hardware missing -</Text>
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
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Rail screw missing-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Bracket hardware loose-</Text>
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
                                <Text style={styles.checkText}>Movement hard-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Handle rusted-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Lock is not properly working-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Latch catch mismatch-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Grazing with chequer sheet-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Excess play found on pivot-</Text>
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
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Pivot loose-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Pivot screw not sited-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Bottom pivot excess in length-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Frame rubber-</Text>
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
            <Text style={styles.itemTagText}>Horizontal Steel Strip</Text>
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
                                <Text style={styles.checkText}>Screw not tighten-</Text>
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
                                            
                        <View style={styles.checkPointSectionB}>
                            <View style={styles.checkPointSectionHeader}>
                                <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Unwanted hole-</Text>
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
                                            
                        <View style={styles.checkPointSectionB}>
                            <View style={styles.checkPointSectionHeader}>
                                <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                            </View>
                           
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Unwanted hole-</Text>
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
                                <Text style={styles.checkText}>Vertical rubber  not pasted-</Text>
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
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Bulge-</Text>
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
            <Text style={styles.itemTagText}>FRP</Text>
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
                                <Text style={styles.checkText}>Vertical loose fitted-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Horizontal loose fitted-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Edge uneven cut out-</Text>
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
                                <Text style={styles.checkText}>Vertical screw missing-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Horizontal screw missing-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Roughly putty applied-</Text>
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
            <Text style={styles.itemTagText}>J Moulding</Text>
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
                                <Text style={styles.checkText}>Not sited on floor doorway area-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            

                            
                             
                        </View>
                        <View style={styles.checkPointSectionB}>
                            <View style={styles.checkPointSectionHeader}>
                                <Text  style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>H/w not fitted with back piece--</Text>
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
            <Text style={styles.serialNoText}>9</Text>
          </View>
          <View style={styles.itemTag}>
            <Text style={styles.itemTagText}>Item:-</Text>
            <Text style={styles.itemTagText}>Arch</Text>
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
                                <Text style={styles.checkText}>Not sited doorway area-</Text>
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
                                <Text style={styles.checkText}>Unwanted hole B.N.-</Text>
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
            <Text style={styles.serialNoText}>10</Text>
          </View>
          <View style={styles.itemTag}>
            <Text style={styles.itemTagText}>Item:-</Text>
            <Text style={styles.itemTagText}>Cover Sheet</Text>
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
                                <Text style={styles.checkText}>Not sited properly-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Joint cover not properly sited B.N.-</Text>
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
                                <Text style={styles.checkText}>Rivet missing-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Unwanted hole--</Text>
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
            <Text style={styles.serialNoText}>11</Text>
          </View>
          <View style={styles.itemTag}>
            <Text style={styles.itemTagText}>Item:-</Text>
            <Text style={styles.itemTagText}>Moulding</Text>
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
                                <Text style={styles.checkText}>L  MLD.-not properly sited B.N.-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Unwanted hole B.N.-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Rivet missing from vertical moulding-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            

                            
                             
                        </View>
                        <View style={styles.checkPointSectionB}>
                            <View style={styles.checkPointSectionHeader}>
                                <Text  style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>L –MLD. Rivet not provided B.N.-</Text>
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
            <Text style={styles.serialNoText}>12</Text>
          </View>
          <View style={styles.itemTag}>
            <Text style={styles.itemTagText}>Item:-</Text>
            <Text style={styles.itemTagText}>E Junction Box</Text>
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
                                <Text style={styles.checkText}>Less screw-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            

                            
                             
                        </View>
                        <View style={styles.checkPointSectionB}>
                            <View style={styles.checkPointSectionHeader}>
                                <Text  style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Open-</Text>
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
            <Text style={styles.serialNoText}>13</Text>
          </View>
          <View style={styles.itemTag}>
            <Text style={styles.itemTagText}>Item:-</Text>
            <Text style={styles.itemTagText}>Stretcher Room</Text>
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
                                <Text style={styles.checkText}>Fitment-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                           
                            

                            
                             
                        </View>
                        <View style={styles.checkPointSectionB}>
                            <View style={styles.checkPointSectionHeader}>
                                <Text  style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Fitment of self-</Text>
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
            <Text style={styles.serialNoText}>14</Text>
          </View>
          <View style={styles.itemTag}>
            <Text style={styles.itemTagText}>Item:-</Text>
            <Text style={styles.itemTagText}>Folding Door</Text>
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
                                <Text style={styles.checkText}>Fitment-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                           
                            

                            
                             
                        </View>
                        <View style={styles.checkPointSectionB}>
                            <View style={styles.checkPointSectionHeader}>
                                <Text  style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Working-</Text>
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
            <Text style={styles.serialNoText}>15</Text>
          </View>
          <View style={styles.itemTag}>
            <Text style={styles.itemTagText}>Item:-</Text>
            <Text style={styles.itemTagText}>Dog Box</Text>
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
                                <Text style={styles.checkText}>Fitment-</Text>
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
            <Text style={styles.serialNoText}>16</Text>
          </View>
          <View style={styles.itemTag}>
            <Text style={styles.itemTagText}>Item:-</Text>
            <Text style={styles.itemTagText}>E/W Door</Text>
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
                                <Text style={styles.checkText}>Check For proper fitment of End Wall{'\n'} & Saloon Sliding Doors.& smooth {'\n'}movement Without Jerks & Noise</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Ensure Max. Opening Force of End {'\n'}Wall & Saloon Sliding Door shell be {'\n'}50-80 Newton & 50-60 Newton  
                                {'\n'}respectively</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Movement of sliding Doors should be{'\n'}lower at the End of closing stroke for {'\n'}last 200 mm (0.05m/Sec)</Text>
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

        {/* form2 for passenger */}
    <View style={styles.form}>
          <View style={styles.formTag}>
            <Text style={styles.formTagText}>Passenger  Room</Text>
          </View>
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
                                <Text style={styles.checkText}>Cover hardware loose-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Not tighten-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Not sliding smoothly-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Lock not in align-</Text>
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
                                <Text style={styles.checkText}>Hardware missing -</Text>
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
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Rail screw missing-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Bracket hardware loose-</Text>
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
                                <Text style={styles.checkText}>Movement hard-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Handle rusted-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Lock is not properly working-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Latch catch mismatch-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Grazing with chequer sheet-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Excess play found on pivot-</Text>
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
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Pivot loose-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Pivot screw not sited-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Bottom pivot excess in length-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Frame rubber-</Text>
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
            <Text style={styles.itemTagText}>Horizontal Steel Strip</Text>
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
                                <Text style={styles.checkText}>Screw not tighten-</Text>
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
                                            
                        <View style={styles.checkPointSectionB}>
                            <View style={styles.checkPointSectionHeader}>
                                <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Unwanted hole-</Text>
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
                                            
                        <View style={styles.checkPointSectionB}>
                            <View style={styles.checkPointSectionHeader}>
                                <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                            </View>
                           
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Unwanted hole-</Text>
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
                                <Text style={styles.checkText}>Vertical rubber  not pasted-</Text>
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
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Bulge-</Text>
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
            <Text style={styles.itemTagText}>FRP</Text>
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
                                <Text style={styles.checkText}>Vertical loose fitted-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Horizontal loose fitted-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Edge uneven cut out-</Text>
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
                                <Text style={styles.checkText}>Vertical screw missing-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Horizontal screw missing-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Roughly putty applied-</Text>
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
            <Text style={styles.itemTagText}>J Moulding</Text>
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
                                <Text style={styles.checkText}>Not sited on floor doorway area-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            

                            
                             
                        </View>
                        <View style={styles.checkPointSectionB}>
                            <View style={styles.checkPointSectionHeader}>
                                <Text  style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>H/w not fitted with back piece--</Text>
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
            <Text style={styles.serialNoText}>9</Text>
          </View>
          <View style={styles.itemTag}>
            <Text style={styles.itemTagText}>Item:-</Text>
            <Text style={styles.itemTagText}>Arch</Text>
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
                                <Text style={styles.checkText}>Not sited doorway area-</Text>
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
                                <Text style={styles.checkText}>Unwanted hole B.N.-</Text>
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
            <Text style={styles.serialNoText}>10</Text>
          </View>
          <View style={styles.itemTag}>
            <Text style={styles.itemTagText}>Item:-</Text>
            <Text style={styles.itemTagText}>Cover Sheet</Text>
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
                                <Text style={styles.checkText}>Not sited properly-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Joint cover not properly sited B.N.-</Text>
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
                                <Text style={styles.checkText}>Rivet missing-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Unwanted hole--</Text>
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
            <Text style={styles.serialNoText}>11</Text>
          </View>
          <View style={styles.itemTag}>
            <Text style={styles.itemTagText}>Item:-</Text>
            <Text style={styles.itemTagText}>Moulding</Text>
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
                                <Text style={styles.checkText}>L  MLD.-not properly sited B.N.-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Unwanted hole B.N.-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            
                            

                            
                             
                        </View>
                        <View style={styles.checkPointSectionB}>
                            <View style={styles.checkPointSectionHeader}>
                                <Text  style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>L –MLD. Rivet not provided B.N.-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>

                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Rivet missing from vertical moulding-</Text>
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
            <Text style={styles.serialNoText}>12</Text>
          </View>
          <View style={styles.itemTag}>
            <Text style={styles.itemTagText}>Item:-</Text>
            <Text style={styles.itemTagText}>E Junction Box</Text>
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
                                <Text style={styles.checkText}>Damage-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            

                            
                             
                        </View>
                        <View style={styles.checkPointSectionB}>
                            <View style={styles.checkPointSectionHeader}>
                                <Text  style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Open-</Text>
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

    {/* FOrm for (Disabled Room) */}
    <View style={styles.form}>
          <View style={styles.formTag}>
            <Text style={styles.formTagText}>Disabled Room</Text>
          </View>
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
                                <Text style={styles.checkText}>Cover hardware loose-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Not tighten-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Not sliding smoothly-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Lock not in align-</Text>
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
                                <Text style={styles.checkText}>Hardware missing -</Text>
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
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Rail screw missing-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Bracket hardware loose-</Text>
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
                                <Text style={styles.checkText}>Movement hard-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Handle rusted-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Lock is not properly working-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Latch catch mismatch-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Grazing with chequer sheet-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Excess play found on pivot-</Text>
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
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Pivot loose-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Pivot screw not sited-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Bottom pivot excess in length-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Frame rubber-</Text>
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
            <Text style={styles.itemTagText}>Horizontal Steel Strip</Text>
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
                                <Text style={styles.checkText}>Screw not tighten-</Text>
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
                                            
                        <View style={styles.checkPointSectionB}>
                            <View style={styles.checkPointSectionHeader}>
                                <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Unwanted hole-</Text>
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
                                            
                        <View style={styles.checkPointSectionB}>
                            <View style={styles.checkPointSectionHeader}>
                                <Text style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                            </View>
                           
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Unwanted hole-</Text>
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
                                <Text style={styles.checkText}>Vertical rubber  not pasted-</Text>
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
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Bulge-</Text>
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
            <Text style={styles.itemTagText}>FRP</Text>
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
                                <Text style={styles.checkText}>Vertical loose fitted-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Horizontal loose fitted-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Edge uneven cut out-</Text>
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
                                <Text style={styles.checkText}>Vertical screw missing-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Horizontal screw missing-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Roughly putty applied-</Text>
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
            <Text style={styles.itemTagText}>J Moulding</Text>
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
                                <Text style={styles.checkText}>Not sited on floor doorway area-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            

                            
                             
                        </View>
                        <View style={styles.checkPointSectionB}>
                            <View style={styles.checkPointSectionHeader}>
                                <Text  style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>H/w not fitted with back piece--</Text>
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
            <Text style={styles.serialNoText}>9</Text>
          </View>
          <View style={styles.itemTag}>
            <Text style={styles.itemTagText}>Item:-</Text>
            <Text style={styles.itemTagText}>Arch</Text>
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
                                <Text style={styles.checkText}>Not sited doorway area-</Text>
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
                                <Text style={styles.checkText}>Unwanted hole B.N.-</Text>
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
            <Text style={styles.serialNoText}>10</Text>
          </View>
          <View style={styles.itemTag}>
            <Text style={styles.itemTagText}>Item:-</Text>
            <Text style={styles.itemTagText}>Cover Sheet</Text>
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
                                <Text style={styles.checkText}>Not sited properly-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Joint cover not properly sited B.N.-</Text>
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
                                <Text style={styles.checkText}>Rivet missing-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Unwanted hole--</Text>
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
            <Text style={styles.serialNoText}>11</Text>
          </View>
          <View style={styles.itemTag}>
            <Text style={styles.itemTagText}>Item:-</Text>
            <Text style={styles.itemTagText}>Moulding</Text>
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
                                <Text style={styles.checkText}>L  MLD.-not properly sited B.N.-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Unwanted hole B.N.-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Rivet missing from vertical moulding-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            

                            
                             
                        </View>
                        <View style={styles.checkPointSectionB}>
                            <View style={styles.checkPointSectionHeader}>
                                <Text  style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>L –MLD. Rivet not provided B.N.-</Text>
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
            <Text style={styles.serialNoText}>12</Text>
          </View>
          <View style={styles.itemTag}>
            <Text style={styles.itemTagText}>Item:-</Text>
            <Text style={styles.itemTagText}>E Junction Box</Text>
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
                                <Text style={styles.checkText}>Damage-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            <View style={styles.checkPointInput}>
                                <Text style={styles.checkText}>Open-</Text>
                                <TextInput 
                                style={styles.checkInputBox}
                                onChangeText={setCheck1}
                                value={check1}
                                />
                            </View>
                            

                            
                             
                        </View>
                        <View style={styles.checkPointSectionB}>
                            <View style={styles.checkPointSectionHeader}>
                                <Text  style={styles.checkPointSectionHeaderText}>B)Details:- Location</Text>
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

          
            
            
          
    </View>

    <View style={styles.submitButton}>
            <TouchableOpacity style={styles.forBomx}  onPress={SlrdListNav}>
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