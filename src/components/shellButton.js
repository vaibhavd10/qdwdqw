
import React from "react";
import {View,Text,StyleSheet,Pressable} from 'react-native'

const ShellButton = ({children,onPress})=>{
    return(
        
            <Pressable style={styles.button} onPress={onPress}
            android_ripple={{color:'#038a68'}}
            pressRetentionOffset
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
     
    )
}

export default ShellButton
const styles = StyleSheet.create({
    button:{
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10,
        borderWidth:1,
        width:250,
        height:50,
        borderRadius:5,
        backgroundColor:"#00cc99"
     },
     
     buttonText:{
        color:'black',
        fontsize:25
     }
})