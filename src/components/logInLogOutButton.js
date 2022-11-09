
import React from "react";
import {View,Text,StyleSheet,Pressable} from 'react-native'

const LogInLogOutButton = ({children,onPress,onPressOut})=>{
    return(
        
            <Pressable style={styles.button} onPress={onPress}
            onPressOut={onPressOut}
            android_ripple={{color:'#152420'}}
            pressRetentionOffset
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
     
    )
}

export default LogInLogOutButton


const styles = StyleSheet.create({

     button:{
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10,
        borderWidth:1,
        width:250,
        height:50,
        borderRadius:5,
        backgroundColor:"black",
        
     
     },
     buttonText:{
        color:'white',
        fontSize:25,
        
     },
})