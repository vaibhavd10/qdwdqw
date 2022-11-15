import React, { useState ,useEffect} from 'react';
import { StyleSheet, Text, View,PermissionsAndroid,Platform, TouchableOpacity,ToastAndroid } from 'react-native';
import axios from 'axios';

// npm install @react-navigation/material-top-tabs react-native-tab-view
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

import TabA from './tabA';
import TabB from './tabB';
import TabC from './tabC';







// function TabA({navigation,route}) {

 
  

//   const id =route.params.idname;


//   //console.log(id,"------TAB AAAAAAAAAAAAAAAAAAAAAAAAA")
//  // console.log(id,"job detail")
//  // const jb = route.params.jb
// //console.log(a,b,c,d,"props")
// //const [name,setName] =useState('');
// //console.log(id)
 
// const [providers,setProviders]= useState([]);
// const [ jobcondition1,setJobCondition1] = useState();
// const [ jobcondition2,setJobCondition2] = useState();
// const [ jobcondition3,setJobCondition3] = useState();
// const [ jobcondition4,setJobCondition4] = useState();
// const [formname,setFormname] = useState();
// const [formno,setFormno] = useState();

// //console.log(jobcondition1,"hello")


//  useEffect(() => {

//    async function getAllProvider() {
//   try {
//     const providers = await axios.get(
//       ` http://192.168.2.122:8000/api/get/${id}`,
//     );
//    // console.log(providers.data);
//    setProviders([providers.data]);
//     // setJobId(providers.data._id);
//     setJobCondition1(providers.data.JOB_ASSIGNED_A)
//     setJobCondition2(providers.data.JOB_ASSIGNED_B)
//     setJobCondition3(providers.data.JOB_ASSIGNED_C)
//     setJobCondition4(providers.data.JOB_ASSIGNED_D)
//     setFormname(providers.data.BOGIE_TYPE)

   

//   } catch (error) {
//     console.log(error);
//   }
// }


// getAllProvider();
// },[providers]);


// //console.log(jobcondition1)


//   return (
//  <ScrollView>
//     <View style={styles.container}>
//       {jobcondition1 === false ? (
//         <Text style={styles.text}>M5008</Text>
//       ):(null)}
//     </View>

//     <View style={styles.container}>
//       {jobcondition2 === false ? (
//         <Text style={styles.text}>{formname}</Text>
//       ):(null)}
//     </View>

//     <View style={styles.container}>
//       {jobcondition3 === false ? (
//         <Text style={styles.text}>M5017</Text>
//       ):(null)}
//     </View>

//     <View style={styles.container}>
//       {jobcondition4 === false ? (
//         <Text style={styles.text}>M5023</Text>
//       ):(null)}
//     </View>
//     </ScrollView>
   
    
//   );
// }
// function TabB({navigation,route}) {
  
//   const id =route.params.idname;
//   //console.log(id,"------TAB BBBBBBBBBBBBBBBBB")

//   const [providers,setProviders]= useState([]);
 

// const [ jobcondition1,setJobCondition1] = useState();
// const [ jobcondition2,setJobCondition2] = useState();
// const [ jobcondition3,setJobCondition3] = useState();
// const [ jobcondition4,setJobCondition4] = useState();
// const [formname,setFormname] = useState();
// const [passed,setPassed]= useState();
// const  [value1,setValue1] = useState();
// const  [value2,setValue2] = useState();
// const  [value3,setValue3] = useState();
// const  [value4,setValue4] = useState();
// const  [value5,setValue5] = useState();
// const  [value6,setValue6] = useState();
// const  [value7,setValue7] = useState();
// const  [value8,setValue8] = useState();
// const  [value9,setValue9] = useState();
// const  [value10,setValue10] = useState();
// const  [value11,setValue11] = useState();
// const  [value12,setValue12] = useState();
// const  [value13,setValue13] = useState();
// const  [value14,setValue14] = useState();
// const  [value15,setValue15] = useState();
// const  [value16,setValue16] = useState();
// const  [value17,setValue17] = useState();
// const  [value18,setValue18] = useState();
// const  [value19,setValue19] = useState();


// // useEffect(() => {

// //   async function getAllProvider() {
// //  try {
// //    const providers = await axios.get(
// //      ` http://192.168.2.122:8000/api/get/${id}`,
// //    );
// //   // console.log(providers.data);
// //   setProviders([providers.data]);
// //    // setJobId(providers.data._id);
// //    setFormname(providers.data.BOGIE_TYPE)

  

// //  } catch (error) {
// //    console.log(error);
// //  }
// // }


// // getAllProvider();
// // },[providers]);


// //console.log(jobcondition1,"hello")


//  useEffect(() => {

// async function getAllProvider() {
//   try {
//     const providers = await axios.get(`  http://192.168.2.122:8000/api/joblink/${id}`);
//     setProviders([providers.data]);
//     console.log(providers.data.jobData,"dataaaaa")
//     //console.log('hello',providers.data.jobData[1].AC2_LINK.TEST_PASSED)
//      // Loop Starts
//         //setFormname(providers.data.jobData[1].BOGIE_TYPE)
//         providers.data.jobData.forEach(element => {
         
//     //      console.log( element.JOB_ASSIGNED_A,"hiiiiiiiiiiii")
//                setFormname(element.BOGIE_TYPE)
//           setJobCondition1(element.JOB_ASSIGNED_A)
//           setJobCondition2(element.JOB_ASSIGNED_B)
//           setJobCondition3(element.JOB_ASSIGNED_C)
//           setJobCondition4(element.JOB_ASSIGNED_D)

//           // AC_Link 
          
//           setValue1(element.AC2_LINK.SHIFT)
//           setValue2(element.AC2_LINK.APPLICABLE_WI_NO)
//           setValue3(element.AC2_LINK.FRAME_NO_MAKE)
//           setValue4(element.AC2_LINK.WHEEL_AXLE_NO)
//           setValue5(element.AC2_LINK.BRAKE_CYLINDER_NO_MAKE)
//           setValue6(element.AC2_LINK.VSA_PRIMARY_SUSP_NO_MAKE)
//           setValue7(element.AC2_LINK.VSA_SECONDARY_SUSP_NO_MAKE)
//           setValue8(element.AC2_LINK.LATERAL_SHOCK_ABSORBER_NO_MAKE)
//           setValue9(element.AC2_LINK.BOLSTER_NO_MAKE)
//          setValue10(element.AC2_LINK.Z11_TARE)  
//          setValue11(element.AC2_LINK.Z31_TARE)  
//          setValue12(element.AC2_LINK.Z11_GROSS)  
//          setValue13(element.AC2_LINK.Z31_GROSS)  
//          setValue14(element.AC2_LINK.Z41_TARE)
//          setValue15(element.AC2_LINK.Z41_GROSS)   
//          setValue16(element.AC2_LINK.Z21_TARE)  
//          setValue17(element.AC2_LINK.Z21_GROSS)   
//          setValue18(element.AC2_LINK.X_TARE)   
//          setValue19(element.AC2_LINK.X_GROSS) 
//           setPassed(element.AC2_LINK.TEST_PASSED)
        

//         });

//        //Loop Ends
        
    
//      //console.log(formname)
//      //console.log(first)





  
//     //     setFormname(providers.data.jobData[1].BOGIE_TYPE)
//     // setJobCondition1(providers.data.jobData[1].JOB_ASSIGNED_A)
//     // setJobCondition2(providers.data.jobData[1].JOB_ASSIGNED_B)
//     // setJobCondition3(providers.data.jobData[1].JOB_ASSIGNED_C)
//     // setJobCondition4(providers.data.jobData[1].JOB_ASSIGNED_D)

    
//   //  setValue1(providers.data.jobData[1].AC2_LINK.SHIFT)
//   //  setValue2(providers.data.jobData[1].AC2_LINK.APPLICABLE_WI_NO)
//   //  setValue3(providers.data.jobData[1].AC2_LINK.FRAME_NO_MAKE)
//   //  setValue4(providers.data.jobData[1].AC2_LINK.WHEEL_AXLE_NO)
//   //  setValue5(providers.data.jobData[1].AC2_LINK.BRAKE_CYLINDER_NO_MAKE)
//   //  setValue6(providers.data.jobData[1].AC2_LINK.VSA_PRIMARY_SUSP_NO_MAKE)
//   //  setValue7(providers.data.jobData[1].AC2_LINK.VSA_SECONDARY_SUSP_NO_MAKE)
//   //  setValue8(providers.data.jobData[1].AC2_LINK.LATERAL_SHOCK_ABSORBER_NO_MAKE)
//   //  setValue9(providers.data.jobData[1].AC2_LINK.BOLSTER_NO_MAKE)
//   // setValue10(providers.data.jobData[1].AC2_LINK.Z11_TARE)  
//   // setValue11(providers.data.jobData[1].AC2_LINK.Z31_TARE)  
//   // setValue12(providers.data.jobData[1].AC2_LINK.Z11_GROSS)  
//   // setValue13(providers.data.jobData[1].AC2_LINK.Z31_GROSS)  
//   // setValue14(providers.data.jobData[1].AC2_LINK.Z41_TARE)
//   // setValue15(providers.data.jobData[1].AC2_LINK.Z41_GROSS)   
//   // setValue16(providers.data.jobData[1].AC2_LINK.Z21_TARE)  
//   // setValue17(providers.data.jobData[1].AC2_LINK.Z21_GROSS)   
//   // setValue18(providers.data.jobData[1].AC2_LINK.X_TARE)   
//   // setValue19(providers.data.jobData[1].AC2_LINK.X_GROSS)   
//   //console.log(formname,"ye hai yeeeeeeeeeeeeeeeeee")
  
//   // const valpass= providers.data.jobData[1].AC2_LINK.TEST_PASSED;
//   //   if(valpass===true || valpass === false){
//   //     setPassed(valpass);
//   //   }

//     // setJobId(providers.data._id);
//     // console.log(providers.data.jobData[1].FORM_NUMBER);
//   } catch (error) {
//     console.log(error,"hiiiiiii");
//   }
// }
// getAllProvider();
//  },[providers]);

// // pdf part starts

// const [filePath, setFilePath] = useState('');
 

//   const isPermitted = async () => {
//     if (Platform.OS === 'android') {
//       try {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//           {
//             title: 'External Storage Write Permission',
//             message: 'App needs access to Storage data',
//           },
//         );
//         return granted === PermissionsAndroid.RESULTS.GRANTED;
//       } catch (err) {
//         alert('Write permission err', err);
//         return false;
//       }
//     } else {
//       return true;
//     }
//   };
 
//   const createPDF = async () => {
//     if (await isPermitted()) {
//       let options = {
//         //Content to print
//         html:
//         `
//         <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <style>
   
//     </style>
// </head>
// <body style="text-align: center;">
//     <h1>Modern Coach Factory Raebareli <br> SELF INSPECTION PROFORMA (FIAT BOGIE /EOG WITH AIR SPRING)</h1>
// <table width="100%" border="1px">
//       <tr  style="padding: 2px;">
//       <th width="200" bgcolor="lightgrey">BOGIE STAGE</th>
//       <td width="200" >STATIC TESTING</td>
//       <th width="200" bgcolor="lightgrey">BOGIE TYPE& NO</th>
//       <td width="200" > ${formname}</td>
        
//     </tr>
//     <tr >
//       <tr>
//           <tr >
//             <th bgcolor="lightgrey">Date</th>
//             <td >19/10/2022</td>
//             <th bgcolor="lightgrey" >FORM NO.</th>
//             <td >MCF/RBL/QMF-5016</td>
//           </tr>
        
//         <tr>
//           <th bgcolor="lightgrey">SHIFT</th>
//           <td >${value1}</td>
//           <th bgcolor="lightgrey">VERSION</th>
//           <td >07/2019</td>
//         </tr>
//       </tr>       
//     </tr>
   
// </table>

// <table width="100%" style="margin-top: 3vh;" border="1px">
  
//   <tr  style="padding: 2px;">
//   <th width="200" bgcolor="lightgrey">Drawing No</th>
//   <td width="200" >LW90033 Alt-b</td>
//   <th width="200" bgcolor="lightgrey">W.I  No</th>
//   <td width="200" >${value2}</td>
   
// </tr>
// <tr >
//   <tr>
//       <tr >
//         <th bgcolor="lightgrey">FRAME NO.& MAKE.</th>
//         <td >${value3}</td>
//         <th bgcolor="lightgrey" >Type of Wheel</th>
//         <td >FORGE</td>
//       </tr>
    
//     <tr>
//       <th bgcolor="lightgrey">Wheel Axle No.(PA/NPA)</th>
//       <td >${value4}</td>
//       <th bgcolor="lightgrey">Brake Cylinder No & Make</th>
//       <td >${value5}</td>
//     </tr>
//   </tr>       
// </tr>

// <tr >
//   <tr>
//       <tr >
//         <th bgcolor="lightgrey">V.S.A.(AT PRIMARY SUSP)No& Make</th>
//         <td >${value6}</td>
//         <th bgcolor="lightgrey" >V.S.A.(AT SECONDRY SUSP.) NO. & MAKE</th>
//         <td >${value7}</td>
//       </tr>
    
//     <tr>
//       <th bgcolor="lightgrey">LATERAL SHOCK ABSORBER NO. &  MAKE:</th>
//       <td >${value8}</td>
//       <th bgcolor="lightgrey">LATERAL SHOCK ABSORBER NO & MAKE:</th>
//       <td >${value8}</td>
//     </tr>
//   </tr>       
// </tr>

// <tr >
//   <tr>
//       <tr >
//         <th bgcolor="lightgrey">Bolster No & Make</th>
//         <td >${value9}</td>
//         <th bgcolor="lightgrey" >Secondary air spring No & Make</th>
//         <td >${value9}</td>
//       </tr>
//   </tr>       
// </tr>

// </table>

// <table width="100%" border="1px" style="margin-top: 4vh;">
//   <tr  style="padding: 2px;" border="1px">
//   <th  bgcolor="lightgrey" rowspan="5">TESTING LOAD IN TONNES</th>
//   <th  bgcolor="lightgrey" colspan="8">UNDER TEST LOAD AT BOGIE SHOP</th>
//   <th  bgcolor="lightgrey" colspan="4">FOR REFERENCE ONLY</th>
  
    
// </tr>
// <tr >
//   <tr>
//       <tr >
//         <th bgcolor="lightgrey" colspan="4">RAIL LEVEL TO THE
//           CONTROL  ARM BRACKET <br>
//           460  4 ± MM TARE  <br> 
//           454  4 ± MM GROSS </th>
//         <th bgcolor="lightgrey" colspan="4">DIFFERENCE IN
//           ALL FOUR
//           SIDE < 3 MM</th>
        
//         <th bgcolor="lightgrey" colspan="4">AVERAGE HEIGHT FROM  
//           RAIL LEVEL TO PIN BRACKET TOP <br> 
//           930 +6/-2 MM TARE  <br>   
//           924 +6/-2 MM GROSS </th>
//       </tr>
    
//     <tr>
//       <th bgcolor="lightgrey">Z11</th>
//       <th bgcolor="lightgrey">Z31</th>
//       <th bgcolor="lightgrey">Z41</th>
//       <th bgcolor="lightgrey">Z21</th>
//       <th bgcolor="lightgrey" colspan="4">X</th>
//       <th bgcolor="lightgrey" colspan="2">(Z12+Z22)/2</th>
//       <th bgcolor="lightgrey" colspan="2">(Z32+Z42)/2</th>
//     </tr>
//     <tr>
//       <th>TARE 16.02</th>
//       <th>${value10}</th>
//       <th>${value11}</th>
//       <th>${value14}</th>
//       <th>${value16}</th>

//       <th colspan="4">${value18}</th>
//       <th colspan="2">1234</th>
//       <th colspan="2">1234</th>
//     </tr>

//     <tr>
//       <th>GROSS 18.90</th>
//       <th>${value12}</th>
//       <th>${value13}</th>
//       <th>${value15}</th>
//       <th>${value17}</th>

//       <th colspan="4">1234</th>
//       <th colspan="2">1234</th>
//       <th colspan="2">1234</th>
//     </tr>
//   </tr>     
// </tr>
// </table>

// <table width="100%" border="1px" style="margin-top: 4vh;">
//   <tr  style="padding: 2px;" border="1px">
//   <th  bgcolor="lightgrey" rowspan="5">TESTING LOAD IN TONNES</th>
//   <th  bgcolor="lightgrey" colspan="12">THESE SHALL BE ENSURED AT FURNISHING SHOP AFTER GIVING AIR CONNECTION TO THE AIR SPRING & CONTROL SYSTEM</th>
// </tr>
// <tr >
//   <tr>
//       <tr >
//         <th bgcolor="lightgrey" colspan="4">LONGITUDINAL BUMP STOP GAP <br>
//           08 +5/-2 TARE</th>
//         <th bgcolor="lightgrey" colspan="4">LATERAL BUMP STOP GAP <br> 25 ± 5  TARE</th>
        
//         <th bgcolor="lightgrey" colspan="4">SECONDARY SPRING HEIGHT <br>
//           292+0/-5</th>
//       </tr>
    
//     <tr>
//       <th colspan="2">X14</th>
//       <th colspan="2">X24</th>
//       <th colspan="2">Y13</th>
//       <th colspan="2">Y33</th>
//       <th colspan="2">A SIDE</th>
//       <th colspan="2">B SIDE</th>
//     </tr>
//     <tr>
//       <th>TARE 16.02</th>
//       <th>1234</th>
//       <th>1234</th>
//       <th>1234</th>
//       <th>1234</th>

//       <th colspan="4">1234</th>
//       <th colspan="2">1234</th>
//       <th colspan="2">1234</th>
//     </tr>

//     <tr>
//       <th>GROSS 18.90</th>
//       <th>1234</th>
//       <th>1234</th>
//       <th>1234</th>
//       <th>1234</th>

//       <th colspan="4">1234</th>
//       <th colspan="2">1234</th>
//       <th colspan="2">1234</th>
//     </tr>
//   </tr>     
// </tr>
// </table>
// <h3 style="margin-top: 5px;">Confirming / Non Confirming</h3>

// <div style="display: flex; padding: 20px;"> 
//   <div style=" padding: 20px; margin-right: 50%;">
//     <h4>Signature of In Charge</h4>
//     <div style="display: flex;">
//       <h3>Name:</h3>
//       <p>______</p>
//     </div>
//     <div style="display: flex;">
//       <h3>Desgnation:</h3>
//       <p>______</p>
//     </div>
//   </div>

//   <div >
//     <h4>Signature of Stage supervisor</h4>
//     <div style="display: flex;padding: 20px; ">
//       <h3>Name:</h3>
//       <p>______</p>
//     </div>
//     <div style="display: flex;">
//       <h3>Desgnation:</h3>
//       <p>______</p>
//     </div>
//   </div>
//   <div>

//   </div>
// </div>
// </body>
// </html>`,
//         //File Name
//         fileName: `${formname}`,
//         //File directory
//         directory: 'docs',
//       };
//       let file = await RNHTMLtoPDF.convert(options);
//       console.log(file.filePath);
//       setFilePath(file.filePath);
//       ToastAndroid.show(`${formname} Form Downloaded in ${filePath}`,2000)
//     }
//   };



// // pdf ends
//   return (
//     <ScrollView>
//     <View style={styles.container}>
//       {passed === true && jobcondition1===true?(
//          <Text style={styles.text}>M5008</Text>
//       ):(null)}
     
//     </View>
//     <View style={styles.container}>
//       {passed === true && jobcondition2===true?(
//         <View style={{flexDirection:"column"}}>
//            <TouchableOpacity
//         onPress={createPDF}
//         >
//           <Text style={styles.text}
//          >{formname}</Text>
//          <Text>Download Report</Text>

//         </TouchableOpacity>
//         </View>
       
         
//       ):(null)}
     
//     </View>
    

//     <View style={styles.container}>
//       {passed === true && jobcondition3===true?(
//          <Text style={styles.text}>M5017</Text>
//       ):(null)}
     
//     </View>

//     <View style={styles.container}>
//       {passed === true && jobcondition4===true?(
//          <Text style={styles.text}>M5023</Text>
//       ):(null)}
     
//     </View>
//     </ScrollView>
//   );
// }

// function TabC({navigation,route}) {
  
//   const id =route.params.idname;
//   //console.log(id,"TAB CCCCCCCCCCCCCCCCCCCCCCCCCC")

//   const [providers,setProviders]= useState([]);

// const [ jobcondition1,setJobCondition1] = useState();
// const [ jobcondition2,setJobCondition2] = useState();
// const [ jobcondition3,setJobCondition3] = useState();
// const [ jobcondition4,setJobCondition4] = useState();
// const [formname,setFormname] = useState();
// const [passed,setPassed]= useState();


// // useEffect(() => {

// //   async function getAllProvider() {
// //  try {
// //    const providers = await axios.get(
// //      ` http://192.168.2.122:8000/api/get/${id}`,
// //    );
// //   // console.log(providers.data);
// //   setProviders([providers.data]);
// //    // setJobId(providers.data._id);
// //    setFormname(providers.data.BOGIE_TYPE)

  

// //  } catch (error) {
// //    console.log(error);
// //  }
// // }


// // getAllProvider();
// // },[providers]);

// //console.log(jobcondition1,"hello")


//  useEffect(() => {

// async function getAllProvider() {
//   try {
//     const providers = await axios.get(`  http://192.168.2.122:8000/api/joblink/${id}`);
//     setProviders([providers.data]);
//     //console.log('hello',providers.data.jobData[1].AC2_LINK.TEST_PASSED)
//    //setPassed(providers.data.jobData[1].AC2_LINK.TEST_PASSED)

//    //Loop Starts
//    providers.data.jobData.forEach(element => {

//     setFormname(element.BOGIE_TYPE)
//     setJobCondition1(element.JOB_ASSIGNED_A)
//     setJobCondition2(element.JOB_ASSIGNED_B)
//     setJobCondition3(element.JOB_ASSIGNED_C)
//     setJobCondition4(element.JOB_ASSIGNED_D)

//     // AC2_LINK
//     setPassed(element.AC2_LINK.TEST_PASSED)

    
//    });



//    // Loop Ends



//     //     setFormname(providers.data.jobData[1].BOGIE_TYPE)
//     // setJobCondition1(providers.data.jobData[1].JOB_ASSIGNED_A)
//     // setJobCondition2(providers.data.jobData[1].JOB_ASSIGNED_B)
//     // setJobCondition3(providers.data.jobData[1].JOB_ASSIGNED_C)
//     // setJobCondition4(providers.data.jobData[1].JOB_ASSIGNED_D)

//     //   setPassed(providers.data.jobData[1].AC2_LINK.TEST_PASSED)
    



//     // setJobId(providers.data._id);
//     // console.log(providers.data.jobData[1].FORM_NUMBER);
//   } catch (error) {
//    console.log(error);
//   }
// }
// getAllProvider();
//  },[providers]);
 
// //console.log(passed,"test pass kiya ki nhi")
//   return (
//     <ScrollView>
//     <View style={styles.container}>
//       {passed === false && jobcondition1===true?(
//          <Text style={styles.text}>M5008</Text>
//       ):(null)}
     
//     </View>

//     <View style={styles.container}>
//       {passed === false && jobcondition2===true?(
//          <Text style={styles.text}>{formname}</Text>
//       ):(null)}
     
//     </View>

//     <View style={styles.container}>
//       {passed === false && jobcondition3===true?(
//          <Text style={styles.text}>M5017</Text>
//       ):(null)}
     
//     </View>

//     <View style={styles.container}>
//       {passed === false && jobcondition4===true?(
//          <Text style={styles.text}>M5023</Text>
//       ):(null)}
     
//     </View>
//     </ScrollView>
    
//   );
// }

const Tab = createMaterialTopTabNavigator();
export default function WheelJobdetails({navigation,route}) {
  const id =route.params.user_id;

 //console.log(jobcondition1,"hello")
 

 
 
//console.log(jobcondition1);



  return (
    <Tab.Navigator>
      <Tab.Screen name='Pending' component= {TabA}  initialParams={{idname:id}}/>
      <Tab.Screen name='Passed' component={TabB}  initialParams={{idname:id}} />
      <Tab.Screen name='Rejected' component={TabC} initialParams={{idname:id}} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});