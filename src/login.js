import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View,Image,ScrollView} from "react-native";
import React,{ useState,useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import LogInLogOutButton from "./components/logInLogOutButton";



const Login = ({ navigation }) => {
  
  var [count, setCount] = useState();
   


  const [userName, setUsername] = useState("");
 
  const [password, setPassword] = useState("");




  const submit =() =>{
    if(userName == "" && password ==""){
      Alert.alert('Enter Username/Password');
    }else if(userName == "production" && password =="1234"){
        Alert.alert('Welcome to Production admin');
        navigation.replace("First Prod Page");
      }else if(userName=="qa" && password=="1234"){
        Alert.alert('Welcome to QA');
        navigation.replace('QA Choice');
      
      }else if(userName=="qci" && password=="1234"){
        Alert.alert('Welcome to RITES QCI');
        navigation.replace('Rites Qci');
      }else if(userName=="wheel" && password=="1234"){
        Alert.alert('Welcome to Wheel Shop Production');
        navigation.replace('Wheel Prod');
      }
      
       
      // else{
      //   Alert.alert("wrong username/password");
      // }
};


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

      
     
        <View style={styles.mainContainer}>
      <View style={styles.imageTag}>
        <Image
            source={require('../assets/images.png')}
            style={{
              width: 90,
              height: 90,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View style={styles.headerTag}>
                <Text style={styles.headerText}>Modern Coach Factory Raebareli</Text>
                <Text style={styles.headerText}>QUALITY CONTROL </Text>
                <Text style={styles.headerText}>INSPECTION REPORT (QCI) </Text>
                
                
            </View>
        <View style={styles.mainHeaderContainer}>
          <Text style={styles.mainHeader}>Login Form</Text>
        </View>
      
    
    <View style={styles.inputContainer}>
        <Text style={styles.labels}>User Name</Text>
        <TextInput style={styles.inputStyle}
          value={userName}
          onChangeText={setUsername}
        />
      </View>
      
        <View style={styles.inputContainer}>
       
        <Text style={styles.labels}>Password</Text>
         
        <TextInput style={styles.inputStyle}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        
      </View>
                   
            <View style={styles.submitButton}>
            
            <LogInLogOutButton onPress={()=>submit()}>Login</LogInLogOutButton>
        </View>
      
     
      </View>
      </ScrollView>
      
    </SafeAreaView>
  
  
    
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: "white",
    flex:1
  },
  mainContainer:{
    
    marginHorizontal:20,
    marginTop:30
    
  },
  imageTag:{
    justifyContent:'center',
    alignItems:'center',
},
  mainHeader:{
    fontSize: 30,
    color:"black",
    fontWeight:"500",
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: "capitalize",

 },
 mainHeaderContainer:{
    justifyContent:'center',
    alignItems:'center'
 },
 inputContainer:{
  marginTop: 20,
  justifyContent:'center',
    alignItems:'center',
    

 },
 labels:{
  fontSize: 25,
  color: "grey",
  marginTop: 10,
  marginBottom: 10,
  lineHeight: 25,
  color:'black'

 },
 inputStyle:{
  borderWidth: 1,
  borderColor: "rgba(0,0,0,0.3)",
  paddingHorizontal: 15,
  paddingVertical: 7,
  borderRadius: 20,
  fontSize: 18,
  width:'70%',
  height:60
},
 checkbox:{
  marginTop: 20,        
 },

wrapperText:{
  fontSize: 20,
  marginTop: 20,

},
button:{
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginVertical: 20,
  borderRadius: 4,
  backgroundColor: "grey",
  width: 200,
  height: 50,
  padding: 10,

},
buttonText:{
  fontSize: 20,


},
submitButton:{
  justifyContent:'center',
  alignItems:'center',
  marginTop:20
  
},
forBomx:{
  marginTop:20,
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
},
headerTag:{
  justifyContent:'center',
  alignItems:'center',
  marginVertical:10
},
headerText:{
 color:'black',
 fontSize:20,
 
    fontWeight:"500",
},


})

export default Login;