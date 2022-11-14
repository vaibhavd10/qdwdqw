import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import axios from 'axios';

// npm install @react-navigation/material-top-tabs react-native-tab-view
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useFocusEffect} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

export default function TabB({navigation, route}) {
  const id = route.params.idname;
  //  console.log(id,"------TAB BBBBBBBBBBBBBBBBB")

  const [providers, setProviders] = useState([]);

  const [jobcondition1, setJobCondition1] = useState();
  const [jobcondition2, setJobCondition2] = useState();
  const [jobcondition3, setJobCondition3] = useState();
  const [jobcondition4, setJobCondition4] = useState();
  const [jobcondition5, setJobCondition5] = useState();
  const [rework1,setRework1] = useState();
  const [rework2,setRework2] = useState();
  const [rework3,setRework3] = useState();
  const [rework4,setRework4] = useState();
  const [rework5,setRework5] = useState();
  const [count1,setCount1] = useState();
  const [count2,setCount2] = useState();
  const [count3,setCount3] = useState();
  const [count4,setCount4] = useState();
  const [count5,setCount5] = useState();
  

  const [shop,setShop] = useState();
  const [formname, setFormname] = useState();
  const [passed, setPassed] = useState();
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [value3, setValue3] = useState();
  const [value4, setValue4] = useState();
  const [value5, setValue5] = useState();
  const [value6, setValue6] = useState();
  const [value7, setValue7] = useState();
  const [value8, setValue8] = useState();
  const [value9, setValue9] = useState();
  const [value10, setValue10] = useState();
  const [value11, setValue11] = useState();
  const [value12, setValue12] = useState();
  const [value13, setValue13] = useState();
  const [value14, setValue14] = useState();
  const [value15, setValue15] = useState();
  const [value16, setValue16] = useState();
  const [value17, setValue17] = useState();
  const [value18, setValue18] = useState();
  const [value19, setValue19] = useState();
  const [demo, setDemo] = useState();
  const [m5008, setM5008] = useState([]);
  const [m5008A, setM5008A] = useState([]);

  const [m5017, setM5017] = useState([]);
  const [m5023, setM5023] = useState([]);
  const [mainform, setMainform] = useState([]);
  const [stage1, setStage1] = useState([]);
  const [stage2, setStage2] = useState([]);
  const [stage3, setStage3] = useState([]);
  const [stage4n5, setStage4n5] = useState([]);
  const [stage6, setStage6] = useState([]);



  // useEffect(() => {

  //   async function getAllProvider() {
  //  try {
  //    const providers = await axios.get(
  //      ` http://10.109.148.231:8000/api/get/${id}`,
  //    );
  //   // console.log(providers.data);
  //   setProviders([providers.data]);
  //    // setJobId(providers.data._id);
  //    setFormname(providers.data.BOGIE_TYPE)

  //  } catch (error) {
  //    console.log(error);
  //  }
  // }

  // getAllProvider();
  // },[providers]);

  //console.log(jobcondition1,"hello")
  // console.log(stage1,"stage1")
  // console.log(rework1,"hi")

  useEffect(() => {
    async function getAllProvider() {
      try {  
        const providers = await axios.get(
          `  http://10.109.148.231:8000/api/joblink/${id}`,
        );
        setProviders([providers.data]);

        const ac2Array = providers.data.jobData[0].AC2_LINK;
        var length = ac2Array.length;

          providers.data.jobData.forEach(element => {
          // console.log( element.JOB_ASSIGNED_A,"hiiiiiiiiiiii")
          setFormname(element.BOGIE_TYPE);
          setShop(element.SHOP_TYPE);
          setJobCondition1(element.JOB_ASSIGNED_A);
          setJobCondition2(element.JOB_ASSIGNED_B);
          setJobCondition3(element.JOB_ASSIGNED_C);
          setJobCondition4(element.JOB_ASSIGNED_D);
          setJobCondition5(element.JOB_ASSIGNED_E);
          setRework1(element.REWORK_ASSIGNED_A);
          setRework2(element.REWORK_ASSIGNED_B);
          setRework3(element.REWORK_ASSIGNED_C);
          setRework4(element.REWORK_ASSIGNED_D);
          setRework5(element.REWORK_ASSIGNED_E);
          setCount1(element.COUNTER_A);
          setCount2(element.COUNTER_B);
          setCount3(element.COUNTER_C);
          setCount4(element.COUNTER_D);
          setCount5(element.COUNTER_E);
        //   console.log(jobcondition1,"lalalalalalallal")

        for (var i = 0; i < length; i++) {
          //console.log(ac2Array[i].FORM_TYPE)
          if (jobcondition1 === true && ac2Array[i].FORM_TYPE === 'M5008') {
            // setDemo(ac2Array[i].FORM_TYPE)
            // console.log(ac2Array[i],"ac2222")
            setM5008(ac2Array[i]);
          } else if (
            jobcondition1 === true &&
            ac2Array[i].FORM_TYPE === 'M5008A'
          ) {
            setM5008A(ac2Array[i]);
          } 
          else if (
            jobcondition1 === true &&
            ac2Array[i].FORM_TYPE === 'STAGE1' &&
            rework1 === false &&
            ac2Array[i].TEST_PASSED ===true &&
            count1 === 0
          ) {
            setStage1(ac2Array[i]);
          } 
          else if (
            jobcondition1 === true &&
            ac2Array[i].FORM_TYPE === 'STAGE1' &&
            rework1 === false &&
            count1 === 1 &&
            ac2Array[i].TEST_PASSED ===true
          ) {
            setStage1(ac2Array[i]);
          } 
          else if (
            jobcondition1 === true &&
            ac2Array[i].FORM_TYPE === 'STAGE1' &&
            rework1 === false &&
            count1 === 2 &&
            ac2Array[i].TEST_PASSED ===true
          ) {
            setStage1(ac2Array[i]);
          }
          else if (
            jobcondition1 === true &&
            ac2Array[i].FORM_TYPE === 'STAGE1' &&
            rework1 === false &&
            count1 === 3 &&
            ac2Array[i].TEST_PASSED ===true
          ) {
            setStage1(ac2Array[i]);
          }
          else if (
            jobcondition2 === true &&
            ac2Array[i].FORM_TYPE === 'STAGE2' &&
            rework2 === false &&
            ac2Array[i].TEST_PASSED ===true &&
            count2 === 0
          ) {
            setStage2(ac2Array[i]);
          } 
          else if (
            jobcondition2 === true &&
            ac2Array[i].FORM_TYPE === 'STAGE2' &&
            rework2 === false &&
            count2 === 1 &&
            ac2Array[i].TEST_PASSED ===true
          ) {
            setStage2(ac2Array[i]);
          } 
          else if (
            jobcondition2 === true &&
            ac2Array[i].FORM_TYPE === 'STAGE2' &&
            rework2 === false &&
            count2 === 2 &&
            ac2Array[i].TEST_PASSED ===true
          ) {
            setStage2(ac2Array[i]);
          } 
          else if (
            jobcondition2 === true &&
            ac2Array[i].FORM_TYPE === 'STAGE2' &&
            rework2 === false &&
            count2 === 3 &&
            ac2Array[i].TEST_PASSED ===true
          ) {
            setStage2(ac2Array[i]);
          } 

          else if (
            jobcondition3 === true &&
            ac2Array[i].FORM_TYPE === 'STAGE3' &&
            rework3 === false &&
            ac2Array[i].TEST_PASSED ===true &&
            count3 === 0
          ) {
            setStage3(ac2Array[i]);
          } 
          else if (
            jobcondition3 === true &&
            ac2Array[i].FORM_TYPE === 'STAGE3' &&
            rework3 === false &&
            count3 === 1 &&
            ac2Array[i].TEST_PASSED ===true
          ) {
            setStage3(ac2Array[i]);
          } 
          else if (
            jobcondition3 === true &&
            ac2Array[i].FORM_TYPE === 'STAGE3' &&
            rework3 === false &&
            count3 === 2 &&
            ac2Array[i].TEST_PASSED ===true
          ) {
            setStage3(ac2Array[i]);
          } 
          else if (
            jobcondition3 === true &&
            ac2Array[i].FORM_TYPE === 'STAGE3' &&
            rework3 === false &&
            count3 === 3 &&
            ac2Array[i].TEST_PASSED ===true
          ) {
            setStage3(ac2Array[i]);
          } 
          else if (
            jobcondition4 === true &&
            ac2Array[i].FORM_TYPE === 'STAGE45' &&
            rework4 === false &&
            ac2Array[i].TEST_PASSED ===true &&
            count4 === 0
          ) {
            setStage4n5(ac2Array[i]);
          } 
          else if (
            jobcondition4 === true &&
            ac2Array[i].FORM_TYPE === 'STAGE45' &&
            rework4 === false && 
            count4 === 1 &&
            ac2Array[i].TEST_PASSED ===true
          ) {
            setStage4n5(ac2Array[i]);
          } 
          else if (
            jobcondition4 === true &&
            ac2Array[i].FORM_TYPE === 'STAGE45' &&
            rework4 === false && 
            count4 === 2 &&
            ac2Array[i].TEST_PASSED ===true
          ) {
            setStage4n5(ac2Array[i]);
          } 
          else if (
            jobcondition4 === true &&
            ac2Array[i].FORM_TYPE === 'STAGE45' &&
            rework4 === false && 
            count4 === 3 &&
            ac2Array[i].TEST_PASSED ===true
          ) {
            setStage4n5(ac2Array[i]);
          } 
          else if (
            jobcondition5 === true &&
            ac2Array[i].FORM_TYPE === 'STAGE6' &&
            rework5 === false &&
            ac2Array[i].TEST_PASSED ===true &&
            count5 === 0
          ) {
            setStage6(ac2Array[i]);
          } 
          else if (
            jobcondition5 === true &&
            ac2Array[i].FORM_TYPE === 'STAGE6' &&
            rework5 === false &&
            count5 === 1 &&
            ac2Array[i].TEST_PASSED ===true
          ) {
            setStage6(ac2Array[i]);
          } 
          else if (
            jobcondition5 === true &&
            ac2Array[i].FORM_TYPE === 'STAGE6' &&
            rework5 === false &&
            count5 === 2 &&
            ac2Array[i].TEST_PASSED ===true
          ) {
            setStage6(ac2Array[i]);
          } 
          else if (
            jobcondition5 === true &&
            ac2Array[i].FORM_TYPE === 'STAGE6' &&
            rework5 === false &&
            count5 === 3 &&
            ac2Array[i].TEST_PASSED ===true
          ) {
            setStage6(ac2Array[i]);
          } 
          else if (
            jobcondition3 === true &&
            ac2Array[i].FORM_TYPE === 'M5017'
          ) {
            setM5017(ac2Array[i]);
          } else if (
            jobcondition4 === true &&
            ac2Array[i].FORM_TYPE === 'M5023'
          ) {
            setM5023(ac2Array[i]);
          } else if (jobcondition2 === true) {
            setMainform(ac2Array[i]);
          }
        }

        //  console.log(providers.data.jobData[0],"dataaaaa")
        //console.log('hello',providers.data)
        // Loop Starts
        //setFormname(providers.data.jobData[1].BOGIE_TYPE)
      
          




          // AC_Link

          //   setValue1(element.AC2_LINK.SHIFT)
          //   setValue2(element.AC2_LINK.APPLICABLE_WI_NO)
          //   setValue3(element.AC2_LINK.FRAME_NO_MAKE)
          //   setValue4(element.AC2_LINK.WHEEL_AXLE_NO)
          //   setValue5(element.AC2_LINK.BRAKE_CYLINDER_NO_MAKE)
          //   setValue6(element.AC2_LINK.VSA_PRIMARY_SUSP_NO_MAKE)
          //   setValue7(element.AC2_LINK.VSA_SECONDARY_SUSP_NO_MAKE)
          //   setValue8(element.AC2_LINK.LATERAL_SHOCK_ABSORBER_NO_MAKE)
          //   setValue9(element.AC2_LINK.BOLSTER_NO_MAKE)
          //  setValue10(element.AC2_LINK.Z11_TARE)
          //  setValue11(element.AC2_LINK.Z31_TARE)
          //  setValue12(element.AC2_LINK.Z11_GROSS)
          //  setValue13(element.AC2_LINK.Z31_GROSS)
          //  setValue14(element.AC2_LINK.Z41_TARE)
          //  setValue15(element.AC2_LINK.Z41_GROSS)
          //  setValue16(element.AC2_LINK.Z21_TARE)
          //  setValue17(element.AC2_LINK.Z21_GROSS)
          //  setValue18(element.AC2_LINK.X_TARE)
          //  setValue19(element.AC2_LINK.X_GROSS)
          //   setPassed(element.AC2_LINK.TEST_PASSED)
          // setDemo(element.AC2_LINK[1].FORM_TYPE)
        });

        //Loop Ends
        // console.log(demo,"ayyyyyy")

        //console.log(formname)
        //console.log(first)

        // console.log(m5008,"abe yaha hu maiii")

        //     setFormname(providers.data.jobData[1].BOGIE_TYPE)
        // setJobCondition1(providers.data.jobData[1].JOB_ASSIGNED_A)
        // setJobCondition2(providers.data.jobData[1].JOB_ASSIGNED_B)
        // setJobCondition3(providers.data.jobData[1].JOB_ASSIGNED_C)
        // setJobCondition4(providers.data.jobData[1].JOB_ASSIGNED_D)

        //  setValue1(providers.data.jobData[1].AC2_LINK.SHIFT)
        //  setValue2(providers.data.jobData[1].AC2_LINK.APPLICABLE_WI_NO)
        //  setValue3(providers.data.jobData[1].AC2_LINK.FRAME_NO_MAKE)
        //  setValue4(providers.data.jobData[1].AC2_LINK.WHEEL_AXLE_NO)
        //  setValue5(providers.data.jobData[1].AC2_LINK.BRAKE_CYLINDER_NO_MAKE)
        //  setValue6(providers.data.jobData[1].AC2_LINK.VSA_PRIMARY_SUSP_NO_MAKE)
        //  setValue7(providers.data.jobData[1].AC2_LINK.VSA_SECONDARY_SUSP_NO_MAKE)
        //  setValue8(providers.data.jobData[1].AC2_LINK.LATERAL_SHOCK_ABSORBER_NO_MAKE)
        //  setValue9(providers.data.jobData[1].AC2_LINK.BOLSTER_NO_MAKE)
        // setValue10(providers.data.jobData[1].AC2_LINK.Z11_TARE)
        // setValue11(providers.data.jobData[1].AC2_LINK.Z31_TARE)
        // setValue12(providers.data.jobData[1].AC2_LINK.Z11_GROSS)
        // setValue13(providers.data.jobData[1].AC2_LINK.Z31_GROSS)
        // setValue14(providers.data.jobData[1].AC2_LINK.Z41_TARE)
        // setValue15(providers.data.jobData[1].AC2_LINK.Z41_GROSS)
        // setValue16(providers.data.jobData[1].AC2_LINK.Z21_TARE)
        // setValue17(providers.data.jobData[1].AC2_LINK.Z21_GROSS)
        // setValue18(providers.data.jobData[1].AC2_LINK.X_TARE)
        // setValue19(providers.data.jobData[1].AC2_LINK.X_GROSS)
        //console.log(formname,"ye hai yeeeeeeeeeeeeeeeeee")

        // const valpass= providers.data.jobData[1].AC2_LINK.TEST_PASSED;
        //   if(valpass===true || valpass === false){
        //     setPassed(valpass);
        //   }

        // setJobId(providers.data._id);
        // console.log(providers.data.jobData[1].FORM_NUMBER);
      } catch (error) {
        console.log(error);
      }
    }
    getAllProvider();
  }, [providers]);

  //console.log(mainform,'ac2t wala')
  // pdf main form part starts

  const [filePath, setFilePath] = useState('');

  const isPermitted = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs access to Storage data',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        alert('Write permission err', err);
        return false;
      }
    } else {
      return true;
    }
  };

  const createPDF = async () => {
    if (await isPermitted()) {
      let options = {
        //Content to print
        html: `
          <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
     
      </style>
  </head>
  <body style="text-align: center;">
      <h1>Modern Coach Factory Raebareli <br> SELF INSPECTION PROFORMA (FIAT BOGIE /EOG WITH AIR SPRING)</h1>
  <table width="100%" border="1px">
        <tr  style="padding: 2px;">
        <th width="200" bgcolor="lightgrey">BOGIE STAGE</th>
        <td width="200" >STATIC TESTING</td>
        <th width="200" bgcolor="lightgrey">BOGIE TYPE& NO</th>
        <td width="200" > ${formname}</td>
          
      </tr>
      <tr >
        <tr>
            <tr >
              <th bgcolor="lightgrey">Date</th>
              <td >19/10/2022</td>
              <th bgcolor="lightgrey" >FORM NO.</th>
              <td >MCF/RBL/QMF-5016</td>
            </tr>
          
          <tr>
            <th bgcolor="lightgrey">SHIFT</th>
            <td >${mainform.SHIFT}</td>
            <th bgcolor="lightgrey">VERSION</th>
            <td >07/2019</td>
          </tr>
        </tr>       
      </tr>
     
  </table>
  
  <table width="100%" style="margin-top: 3vh;" border="1px">
    
    <tr  style="padding: 2px;">
    <th width="200" bgcolor="lightgrey">Drawing No</th>
    <td width="200" >LW90033 Alt-b</td>
    <th width="200" bgcolor="lightgrey">W.I  No</th>
    <td width="200" >${mainform.APPLICABLE_WI_NO}</td>
     
  </tr>
  <tr >
    <tr>
        <tr >
          <th bgcolor="lightgrey">FRAME NO.& MAKE.</th>
          <td >${mainform.FRAME_NO_MAKE}</td>
          <th bgcolor="lightgrey" >Type of Wheel</th>
          <td >FORGE</td>
        </tr>
      
      <tr>
        <th bgcolor="lightgrey">Wheel Axle No.(PA/NPA)</th>
        <td >${mainform.WHEEL_AXLE_NO}</td>
        <th bgcolor="lightgrey">Brake Cylinder No & Make</th>
        <td >${mainform.BRAKE_CYLINDER_NO_MAKE}</td>
      </tr>
    </tr>       
  </tr>
  
  <tr >
    <tr>
        <tr >
          <th bgcolor="lightgrey">V.S.A.(AT PRIMARY SUSP)No& Make</th>
          <td >${mainform.VSA_PRIMARY_SUSP_NO_MAKE}</td>
          <th bgcolor="lightgrey" >V.S.A.(AT SECONDRY SUSP.) NO. & MAKE</th>
          <td >${mainform.VSA_SECONDARY_SUSP_NO_MAKE}</td>
        </tr>
      
      <tr>
        <th bgcolor="lightgrey">LATERAL SHOCK ABSORBER NO. &  MAKE:</th>
        <td >${mainform.LATERAL_SHOCK_ABSORBER_NO_MAKE}</td>
        <th bgcolor="lightgrey">LATERAL SHOCK ABSORBER NO & MAKE:</th>
        <td >${mainform.LATERAL_SHOCK_ABSORBER_NO_MAKE}</td>
      </tr>
    </tr>       
  </tr>
  
  <tr >
    <tr>
        <tr >
          <th bgcolor="lightgrey">Bolster No & Make</th>
          <td >${mainform.BOLSTER_NO_MAKE}</td>
          <th bgcolor="lightgrey" >Secondary air spring No & Make</th>
          <td >${mainform.VSA_SECONDARY_SUSP_NO_MAKE}</td>
        </tr>
    </tr>       
  </tr>
  
  </table>
  
  <table width="100%" border="1px" style="margin-top: 4vh;">
    <tr  style="padding: 2px;" border="1px">
    <th  bgcolor="lightgrey" rowspan="5">TESTING LOAD IN TONNES</th>
    <th  bgcolor="lightgrey" colspan="8">UNDER TEST LOAD AT BOGIE SHOP</th>
    <th  bgcolor="lightgrey" colspan="4">FOR REFERENCE ONLY</th>
    
      
  </tr>
  <tr >
    <tr>
        <tr >
          <th bgcolor="lightgrey" colspan="4">RAIL LEVEL TO THE
            CONTROL  ARM BRACKET <br>
            460  4 ± MM TARE  <br> 
            454  4 ± MM GROSS </th>
          <th bgcolor="lightgrey" colspan="4">DIFFERENCE IN
            ALL FOUR
            SIDE < 3 MM</th>
          
          <th bgcolor="lightgrey" colspan="4">AVERAGE HEIGHT FROM  
            RAIL LEVEL TO PIN BRACKET TOP <br> 
            930 +6/-2 MM TARE  <br>   
            924 +6/-2 MM GROSS </th>
        </tr>
      
      <tr>
        <th bgcolor="lightgrey">Z11</th>
        <th bgcolor="lightgrey">Z31</th>
        <th bgcolor="lightgrey">Z41</th>
        <th bgcolor="lightgrey">Z21</th>
        <th bgcolor="lightgrey" colspan="4">X</th>
        <th bgcolor="lightgrey" colspan="2">(Z12+Z22)/2</th>
        <th bgcolor="lightgrey" colspan="2">(Z32+Z42)/2</th>
      </tr>
      <tr>
        <th>TARE 16.02</th>
        <th>${mainform.Z11_TARE}</th>
        <th>${mainform.Z31_TARE}</th>
        <th>${mainform.Z41_TARE}</th>
        <th>${mainform.Z21_TARE}</th>
  
        <th colspan="4">${mainform.X_TARE}</th>
        <th colspan="2">${mainform.Z12_PLUS_Z22_BY2_TARE}</th>
        <th colspan="2">${mainform.Z32_PLUS_Z42_BY2_TARE}</th>
      </tr>
  
      <tr>
        <th>GROSS 18.90</th>
        <th>${mainform.Z11_GROSS}</th>
        <th>${mainform.Z31_GROSS}</th>
        <th>${mainform.Z41_GROSS}</th>
        <th>${mainform.Z21_GROSS}</th>
  
        <th colspan="4">${mainform.X_GROSS}</th>
        <th colspan="2">${mainform.Z12_PLUS_Z22_BY2_GROSS}</th>
        <th colspan="2">${mainform.Z32_PLUS_Z42_BY2_GROSS}</th>
      </tr>
    </tr>     
  </tr>
  </table>
  
  <table width="100%" border="1px" style="margin-top: 4vh;">
    <tr  style="padding: 2px;" border="1px">
    <th  bgcolor="lightgrey" rowspan="5">TESTING LOAD IN TONNES</th>
    <th  bgcolor="lightgrey" colspan="12">THESE SHALL BE ENSURED AT FURNISHING SHOP AFTER GIVING AIR CONNECTION TO THE AIR SPRING & CONTROL SYSTEM</th>
  </tr>
  <tr >
    <tr>
        <tr >
          <th bgcolor="lightgrey" colspan="4">LONGITUDINAL BUMP STOP GAP <br>
            08 +5/-2 TARE</th>
          <th bgcolor="lightgrey" colspan="4">LATERAL BUMP STOP GAP <br> 25 ± 5  TARE</th>
          
          <th bgcolor="lightgrey" colspan="4">SECONDARY SPRING HEIGHT <br>
            292+0/-5</th>
        </tr>
      
      <tr>
        <th colspan="2">X14</th>
        <th colspan="2">X24</th>
        <th colspan="2">Y13</th>
        <th colspan="2">Y33</th>
        <th colspan="2">A SIDE</th>
        <th colspan="2">B SIDE</th>
      </tr>
      <tr>
        <th>TARE 16.02</th>
        <th>${mainform.X14_TARE}</th>
        <th>${mainform.X24_TARE}</th>
        <th>${mainform.Y13_TARE}</th>
        <th>${mainform.Y33_TARE}</th>
  
        <th colspan="4">${mainform.A_SIDE_TARE}</th>
        <th colspan="2">${mainform.B_SIDE_TARE}</th>
      </tr>
  
      <tr>
        <th>GROSS 18.90</th>
        <th>${mainform.X14_GROSS}</th>
        <th>${mainform.X24_GROSS}</th>
        <th>${mainform.Y13_GROSS}</th>
        <th>${mainform.Y33_GROSS}</th>
  
        <th colspan="4">${mainform.A_SIDE_GROSS}</th>
        <th colspan="2">${mainform.B_SIDE_GROSS}</th>
      </tr>
    </tr>     
  </tr>
  </table>
  <h3 style="margin-top: 5px;">Confirming / Non Confirming</h3>
  
  <div style="display: flex; padding: 20px;"> 
    <div style=" padding: 20px; margin-right: 50%;">
      <h4>Signature of In Charge</h4>
      <div style="display: flex;">
        <h3>Name:</h3>
        <p>______</p>
      </div>
      <div style="display: flex;">
        <h3>Desgnation:</h3>
        <p>______</p>
      </div>
    </div>
  
    <div >
      <h4>Signature of Stage supervisor</h4>
      <div style="display: flex;padding: 20px; ">
        <h3>Name:</h3>
        <p>______</p>
      </div>
      <div style="display: flex;">
        <h3>Desgnation:</h3>
        <p>______</p>
      </div>
    </div>
    <div>
  
    </div>
  </div>
  </body>
  </html>`,
        //File Name
        fileName: `${formname}`,
        //File directory
        directory: 'docs',
      };
      let file = await RNHTMLtoPDF.convert(options);
      console.log(file.filePath);
      setFilePath(file.filePath);
      ToastAndroid.show(`${formname} Form Downloaded in ${filePath}`, 2000);
    }
  };
  // pdf ends
  //console.log(m5008.M5008_Drawing_No,"Teja mai hu")
  //M5008 pdf starts

  const createPDF5008 = async () => {
    if (await isPermitted()) {
      let options = {
        //Content to print
        html: `
          <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
     
      </style>
  </head>
  <body style="text-align: center;">
      <h1>Modern Coach Factory Raebareli <br> SELF INSPECTION PROFORMA (FIAT BOGIE /EOG WITH AIR SPRING)</h1>
  <table width="100%" border="1px">
        <tr  style="padding: 2px;">
        <th width="200" bgcolor="lightgrey">BOGIE STAGE</th>
        <td width="200" >STATIC TESTING</td>
        <th width="200" bgcolor="lightgrey">BOGIE NO</th>
        <td width="200" >${m5008.M5008_Bogie_No}</td>
          
      </tr>
      <tr >
        <tr>
            <tr >
             
              <th bgcolor="lightgrey" >FORM NO.</th>
              <td >MCF/RBL/QMF-5008</td>
            </tr>
          
          <tr>
            <th bgcolor="lightgrey">DATE and SHIFT</th>
            <td >DATE</td>
            <th bgcolor="lightgrey">VERSION</th>
            <td >10/2021</td>
          </tr>
        </tr>       
      </tr>
     
  </table>
  
  <table width="100%" style="margin-top: 3vh;" border="1px">
    
    <tr  style="padding: 2px;">
    <th width="200" bgcolor="lightgrey">Drawing No</th>
    <td width="200" >${m5008.M5008_Drawing_No}</td>
    <th width="200" bgcolor="lightgrey">Bolster No. No</th>
    <td width="200" >${m5008.M5008_bolster_no}</td>
    
     
  </tr>
  <tr >
    <tr>
        <tr >
          <th bgcolor="lightgrey">BOGIE FRAME NO.</th>
          <td >${m5008.M5008_Bogie_Frame_No}</td>
          <th bgcolor="lightgrey" >Cross Section No.</th>
          <td >${m5008.M5008_cross_section_No}</td>
        </tr>
      
      <tr>
        <th bgcolor="lightgrey">Axle No. EE.</th>
        <td >${m5008.M5008_Axle_Nos_EE}</td>
        <th bgcolor="lightgrey">NEE</th>
        <td >${m5008.M5008_Nee}</td>
      </tr>
    </tr>       
  </tr>
  
  <tr >
    <tr>
        <tr >
          <th bgcolor="lightgrey">Brake Cylinder No.1</th>
          <td >${m5008.M5008_Brake_Cylinder_No1}</td>
          <th bgcolor="lightgrey" >Brake Caliper No.1</th>
          <td >${m5008.M5008_Brake_Caliper_No1}</td>
        </tr>
      
        <tr >
        <th bgcolor="lightgrey">Brake Cylinder No.2</th>
        <td >${m5008.M5008_Brake_Cylinder_No2}</td>
        <th bgcolor="lightgrey" >Brake Caliper No.2</th>
        <td >${m5008.M5008_Brake_Caliper_No2}</td>
      </tr>
    </tr>       
  </tr>
  
  <tr >
    <tr>
        <tr >
          <th bgcolor="lightgrey">Brake Cylinder No.3</th>
          <td >${m5008.M5008_Brake_Cylinder_No3}</td>
          <th bgcolor="lightgrey" >Brake Caliper No.3</th>
          <td >${m5008.M5008_Brake_Caliper_No3}</td>
        </tr>
      
        <tr >
        <th bgcolor="lightgrey">Brake Cylinder No.4</th>
        <td >${m5008.M5008_Brake_Cylinder_No4}</td>
        <th bgcolor="lightgrey" >Brake Caliper No.4</th>
        <td >${m5008.M5008_Brake_Caliper_No4}</td>
      </tr>
    </tr>       
  </tr>
  
       
  
  
  </table>
  
  <table width="100%" style="margin-top: 3vh;" border="1px">
  <tr>
  <tr >
  <th bgcolor="lightgrey">PARAMETER</th>
  <th bgcolor="lightgrey">SPECIFIED</th>
 
  
</tr>

  <tr >
    <th bgcolor="lightgrey">Primary & Secondary suspension spring color coding</th>
    <td >As prescribed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008.M5008_Actual1}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008.M5008_Remark1}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of Anti roll bar assembly with screws,spring washer & security plate</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008.M5008_Actual2}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008.M5008_Remark2}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment Longitudinal stop assembly</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008.M5008_Actual3}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008.M5008_Remark3}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of Traction Lever joint with  Disc & nut</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008.M5008_Actual4}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008.M5008_Remark4}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of Lateral dampers bkt. on cross section with Disc & screws</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008.M5008_Actual5}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008.M5008_Remark5}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of Lateral dampers with Disc, nut & screws</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008.M5008_Actual6}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008.M5008_Remark6}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of secondary vertical dampers with Disc,screws & nut</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008.M5008_Actual7}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008.M5008_Remark7}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of Cross section with distance bush, Disc & screw</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008.M5008_Actual8}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008.M5008_Remark8}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of lateral bump stop with shim, punch washer, screw & nut</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008.M5008_Actual9}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008.M5008_Remark9}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment on Control Arm top with bottom with disc, screw & nut</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008.M5008_Actual10}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008.M5008_Remark10}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of Axle end cover with control arm with disc, screw & nut</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008.M5008_Actual11}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008.M5008_Remark11}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of Control Arm with control arm Bkt</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008.M5008_Actual12}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008.M5008_Remark12}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of Primary Shock absorbers</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008.M5008_Actual13}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008.M5008_Remark13}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of traction centre with pivot pin with silent block,disc,safety plate,screw & nut</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008.M5008_Actual14}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008.M5008_Remark14}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of primary bump stop with centering disc & nut</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008.M5008_Actual15}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008.M5008_Remark15}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of roll link on roll link bkt</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008.M5008_Actual16}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008.M5008_Remark16}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of Locking plate on Bracket control arm assembly</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008.M5008_Actual17}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008.M5008_Remark17}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of Security plate and locking plate on axle with Disc & screw</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008.M5008_Actual18}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008.M5008_Remark18}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of Rubber spring with Socket head</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008.M5008_Actual19}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008.M5008_Remark19}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">No. Plate of Shock Absorber should be in front</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008.M5008_Actual20}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008.M5008_Remark20}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">All Cotter should be Splited properly</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008.M5008_Actual21}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008.M5008_Remark21}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">All Nut, Bolts & Screws should be properly tightened</th>
    <td >fitted properly</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008.M5008_Actual22}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008.M5008_Remark22}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Welding of Bogie No. Plate and Bogie number punched properly</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008.M5008_Actual23}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008.M5008_Remark23}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Painting  of complete Bogie</th>
    <td >Painted Properly</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008.M5008_Actual24}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008.M5008_Remark24}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Checking of pipes for any leakage by soap foam (check visually)</th>
    <td >No Leakage</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008.M5008_Actual25}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008.M5008_Remark25}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of Brake cylinders /caliper with disc, screw & nut</th>
    <td >Fitted properly</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008.M5008_Actual26}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008.M5008_Remark26}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of phonic wheel</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008.M5008_Actual27}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008.M5008_Remark27}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of Air Pipes with clamps and screws etc</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008.M5008_Actual28}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008.M5008_Remark28}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Movement of Brake rigging should be free</th>
    <td >Free Movement</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008.M5008_Actual29}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008.M5008_Remark29}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Visually checked of all Rubber items should not be Painted</th>
    <td >Not Painted</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008.M5008_Actual30}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008.M5008_Remark30}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Visually checked of all ball joints for crack</th>
    <td >Not cracked</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008.M5008_Actual31}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008.M5008_Remar31}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">All four side control arm locking pin visually checked for crack</th>
    <td >Not cracked</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008.M5008_Actual32}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008.M5008_Remark32}</td>
  </tr>
  
  </tr>       
  </tr>
  
  
  </table>
  
  
  
  
  
  
  <h3 style="margin-top: 5px;">Confirming / Non Confirming</h3>
  
  <div style="display: flex; padding: 20px;"> 
    <div style=" padding: 20px; margin-right: 50%;">
      <h4>Signature of In Charge</h4>
      <div style="display: flex;">
        <h3>Name:</h3>
        <p>______</p>
      </div>
      <div style="display: flex;">
        <h3>Desgnation:</h3>
        <p>______</p>
      </div>
    </div>
  
    <div >
      <h4>Signature of Stage supervisor</h4>
      <div style="display: flex;padding: 20px; ">
        <h3>Name:</h3>
        <p>______</p>
      </div>
      <div style="display: flex;">
        <h3>Desgnation:</h3>
        <p>______</p>
      </div>
    </div>
    <div>
  
    </div>
  </div>
  </body>
  </html>`,
        //File Name
        fileName: 'M5008',
        //File directory
        directory: 'docs',
      };
      let file = await RNHTMLtoPDF.convert(options);
      console.log(file.filePath);
      setFilePath(file.filePath);
      ToastAndroid.show(`M5008 Form Downloaded in ${filePath}`, 2000);
    }
  };

  // pdf ends

  // M5008A PDF
  const createPDF5008A = async () => {
    if (await isPermitted()) {
      let options = {
        //Content to print
        html: `
          <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
     
      </style>
  </head>
  <body style="text-align: center;">
      <h1>Modern Coach Factory Raebareli <br> SELF INSPECTION PROFORMA (FIAT BOGIE /EOG WITH AIR SPRING)</h1>
  <table width="100%" border="1px">
        <tr  style="padding: 2px;">
        <th width="200" bgcolor="lightgrey">BOGIE STAGE</th>
        <td width="200" >STATIC TESTING</td>
        <th width="200" bgcolor="lightgrey">BOGIE NO</th>
        <td width="200" >${m5008A.M5008_Bogie_No}</td>
          
      </tr>
      <tr >
        <tr>
            <tr >
             
              <th bgcolor="lightgrey" >FORM NO.</th>
              <td >MCF/RBL/QMF-5008A</td>
            </tr>
          
          <tr>
            <th bgcolor="lightgrey">DATE and SHIFT</th>
            <td >DATE</td>
            <th bgcolor="lightgrey">VERSION</th>
            <td >10/2021</td>
          </tr>
        </tr>       
      </tr>
     
  </table>
  
  <table width="100%" style="margin-top: 3vh;" border="1px">
    
    <tr  style="padding: 2px;">
    <th width="200" bgcolor="lightgrey">Drawing No</th>
    <td width="200" >${m5008A.M5008_Drawing_No}</td>
    <th width="200" bgcolor="lightgrey">Bolster No. No</th>
    <td width="200" >${m5008A.M5008_bolster_no}</td>
    
     
  </tr>
  <tr >
    <tr>
        <tr >
          <th bgcolor="lightgrey">BOGIE FRAME NO.</th>
          <td >${m5008A.M5008_Bogie_Frame_No}</td>
          <th bgcolor="lightgrey" >Cross Section No.</th>
          <td >${m5008A.M5008_cross_section_No}</td>
        </tr>
      
      <tr>
        <th bgcolor="lightgrey">Axle No. EE.</th>
        <td >${m5008A.M5008_Axle_Nos_EE}</td>
        <th bgcolor="lightgrey">NEE</th>
        <td >${m5008A.M5008_Nee}</td>
      </tr>
    </tr>       
  </tr>
  
  <tr >
    <tr>
        <tr >
          <th bgcolor="lightgrey">Brake Cylinder No.1</th>
          <td >${m5008A.M5008_Brake_Cylinder_No1}</td>
          <th bgcolor="lightgrey" >Brake Caliper No.1</th>
          <td >${m5008A.M5008_Brake_Caliper_No1}</td>
        </tr>
      
        <tr >
        <th bgcolor="lightgrey">Brake Cylinder No.2</th>
        <td >${m5008A.M5008_Brake_Cylinder_No2}</td>
        <th bgcolor="lightgrey" >Brake Caliper No.2</th>
        <td >${m5008A.M5008_Brake_Caliper_No2}</td>
      </tr>
    </tr>       
  </tr>
  
  <tr >
    <tr>
        <tr >
          <th bgcolor="lightgrey">Brake Cylinder No.3</th>
          <td >${m5008A.M5008_Brake_Cylinder_No3}</td>
          <th bgcolor="lightgrey" >Brake Caliper No.3</th>
          <td >${m5008A.M5008_Brake_Caliper_No3}</td>
        </tr>
      
        <tr >
        <th bgcolor="lightgrey">Brake Cylinder No.4</th>
        <td >${m5008A.M5008_Brake_Cylinder_No4}</td>
        <th bgcolor="lightgrey" >Brake Caliper No.4</th>
        <td >${m5008A.M5008_Brake_Caliper_No4}</td>
      </tr>
    </tr>       
  </tr>
  
       
  
  
  </table>
  
  <table width="100%" style="margin-top: 3vh;" border="1px">
  <tr>
  <tr >
  <th bgcolor="lightgrey">PARAMETER</th>
  <th bgcolor="lightgrey">SPECIFIED</th>
 
  
</tr>

  <tr >
    <th bgcolor="lightgrey">Primary & Secondary suspension spring color coding</th>
    <td >As prescribed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008A.M5008_Actual1}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008A.M5008_Remark1}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of Anti roll bar assembly with screws,spring washer & security plate</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008A.M5008_Actual2}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008A.M5008_Remark2}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment Longitudinal stop assembly</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008A.M5008_Actual3}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008A.M5008_Remark3}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of Traction Lever joint with  Disc & nut</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008A.M5008_Actual4}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008A.M5008_Remark4}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of Lateral dampers bkt. on cross section with Disc & screws</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008A.M5008_Actual5}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008A.M5008_Remark5}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of Lateral dampers with Disc, nut & screws</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008A.M5008_Actual6}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008A.M5008_Remark6}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of secondary vertical dampers with Disc,screws & nut</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008A.M5008_Actual7}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008A.M5008_Remark7}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of Cross section with distance bush, Disc & screw</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008A.M5008_Actual8}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008A.M5008_Remark8}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of lateral bump stop with shim, punch washer, screw & nut</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008A.M5008_Actual9}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008A.M5008_Remark9}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment on Control Arm top with bottom with disc, screw & nut</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008A.M5008_Actual10}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008A.M5008_Remark10}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of Axle end cover with control arm with disc, screw & nut</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008A.M5008_Actual11}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008A.M5008_Remark11}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of Control Arm with control arm Bkt</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008A.M5008_Actual12}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008A.M5008_Remark12}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of Primary Shock absorbers</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008A.M5008_Actual13}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008A.M5008_Remark13}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of traction centre with pivot pin with silent block,disc,safety plate,screw & nut</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008A.M5008_Actual14}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008A.M5008_Remark14}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of primary bump stop with centering disc & nut</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008A.M5008_Actual15}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008A.M5008_Remark15}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of roll link on roll link bkt</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008A.M5008_Actual16}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008A.M5008_Remark16}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of Locking plate on Bracket control arm assembly</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008A.M5008_Actual17}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008A.M5008_Remark17}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of Security plate and locking plate on axle with Disc & screw</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008A.M5008_Actual18}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008A.M5008_Remark18}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of Rubber spring with Socket head</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008A.M5008_Actual19}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008A.M5008_Remark19}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">No. Plate of Shock Absorber should be in front</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008A.M5008_Actual20}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008A.M5008_Remark20}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">All Cotter should be Splited properly</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008A.M5008_Actual21}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008A.M5008_Remark21}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">All Nut, Bolts & Screws should be properly tightened</th>
    <td >fitted properly</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008A.M5008_Actual22}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008A.M5008_Remark22}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Welding of Bogie No. Plate and Bogie number punched properly</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008A.M5008_Actual23}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008A.M5008_Remark23}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Painting  of complete Bogie</th>
    <td >Painted Properly</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008A.M5008_Actual24}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008A.M5008_Remark24}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Checking of pipes for any leakage by soap foam (check visually)</th>
    <td >No Leakage</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008A.M5008_Actual25}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008A.M5008_Remark25}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of Brake cylinders /caliper with disc, screw & nut</th>
    <td >Fitted properly</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008A.M5008_Actual26}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008A.M5008_Remark26}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of phonic wheel</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008A.M5008_Actual27}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008A.M5008_Remark27}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Fitment of Air Pipes with clamps and screws etc</th>
    <td >completed</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008A.M5008_Actual28}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008A.M5008_Remark28}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Movement of Brake rigging should be free</th>
    <td >Free Movement</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008A.M5008_Actual29}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008A.M5008_Remark29}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Visually checked of all Rubber items should not be Painted</th>
    <td >Not Painted</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008A.M5008_Actual30}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008A.M5008_Remark30}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">Visually checked of all ball joints for crack</th>
    <td >Not cracked</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008A.M5008_Actual31}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008A.M5008_Remar31}</td>
  </tr>
  
  <tr >
    <th bgcolor="lightgrey">All four side control arm locking pin visually checked for crack</th>
    <td >Not cracked</td>
    <th bgcolor="lightgrey" >Actual</th>
    <td >${m5008A.M5008_Actual32}</td>
    <th bgcolor="lightgrey" >Remark</th>
    <td >${m5008A.M5008_Remark32}</td>
  </tr>
  
  </tr>       
  </tr>
  
  
  </table>
  
  
  
  
  
  
  <h3 style="margin-top: 5px;">Confirming / Non Confirming</h3>
  
  <div style="display: flex; padding: 20px;"> 
    <div style=" padding: 20px; margin-right: 50%;">
      <h4>Signature of In Charge</h4>
      <div style="display: flex;">
        <h3>Name:</h3>
        <p>______</p>
      </div>
      <div style="display: flex;">
        <h3>Desgnation:</h3>
        <p>______</p>
      </div>
    </div>
  
    <div >
      <h4>Signature of Stage supervisor</h4>
      <div style="display: flex;padding: 20px; ">
        <h3>Name:</h3>
        <p>______</p>
      </div>
      <div style="display: flex;">
        <h3>Desgnation:</h3>
        <p>______</p>
      </div>
    </div>
    <div>
  
    </div>
  </div>
  </body>
  </html>`,
        //File Name
        fileName: 'M5008A',
        //File directory
        directory: 'docs',
      };
      let file = await RNHTMLtoPDF.convert(options);
      console.log(file.filePath);
      setFilePath(file.filePath);
      ToastAndroid.show(`M5008A Form Downloaded in ${filePath}`, 2000);
    }
  };

  // pdf ends

  //M5017 pdf

  const createPDF5017 = async () => {
    if (await isPermitted()) {
      let options = {
        //Content to print
        html: `
        <html lang="en">

<body style="text-align: center;">
    <h1>Modern Coach Factory Raebareli <br> INSPECTION REPORT</h1>
<table width="100%" border="1px">
      <tr  style="padding: 2px;">
      <th width="200" bgcolor="lightgrey">Bogie Bolster no:-</th>
      <td width="200" >${m5017.M5008_bolster_no}</td>
      <th width="200" bgcolor="lightgrey">Form No.:</th>
      <td width="200" >MCF/RBL/QMF-5017</td>
        
    </tr>
    <tr >
      <tr>
          <tr >
            <th bgcolor="lightgrey">Date</th>
            <td >${m5017.M5008_Date}</td>
            <th bgcolor="lightgrey" >Version</th>
            <td > 09/2017  </td>
          </tr>
      </tr>       
    </tr>
   
</table>

<table width="100%" style="margin-top: 3vh;" border="1px">
  
  <tr  style="padding: 2px;">
  <th width="200" bgcolor="lightgrey">Nature of QC Inspection</th>
  <td width="200" >Audit/100%</td>
  <th width="200" bgcolor="lightgrey">Sub Assembly/ Assembly</th>
  <td width="200" >Complete bogie bolster fabricated at MCF/RBL</td>
   
</tr>
<tr >
  <tr>
      <tr >
        <th bgcolor="lightgrey">Component No.</th>
        <td >${m5017.M5008_Drawing_No}</td>
        <th bgcolor="lightgrey" >Stage</th>
        <td >Bogie bolster fabrication</td>
      </tr>
    
    <tr>
      <th bgcolor="lightgrey">Status</th>
      <td >${m5017.M5008_Actual8}</td>
      <th bgcolor="lightgrey">Observation as under</th>
      <td >${m5017.M5008_Remark1}</td>
    </tr>
  </tr>       
</tr>




</table>

<table width="100%" style="margin-top: 3vh;" border="1px">
  <tr>
    <th>SL.NO</th>
    <th>PARAMETER</th>
    <th>ACTUAL(mm)</th>
    <th>M5008_Actual(mm)</th>
    <th>REMARKS</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Length of bogie bolster</td>
    <td>3030 ± 6.0</td>
    <td>${m5017.M5008_Actual1}</td>
    <td>${m5017.M5008_Remark2}</td>
  </tr>

  <tr>
    <td>2</td>
    <td>Height of bogie bolster.</td>
    <td>733 ± 3</td>
    <td>${m5017.M5008_Actual2}</td>
    <td>${m5017.M5008_Remark3}</td>
  </tr>

  <tr>
    <td>3</td>
    <td>Outer width of bogie bolster (LH)</td>
    <td>1040 ± 4</td>
    <td>${m5017.M5008_Actual3}</td>
    <td>${m5017.M5008_Remark4}</td>
  </tr>

  <tr>
    <td>4</td>
    <td>Outer width of bogie bolster (RH)</td>
    <td>1040 ± 4</td>
    <td>${m5017.M5008_Actual4}</td>
    <td>${m5017.M5008_Remark5}</td>
  </tr>

  <tr>
    <td>5</td>
    <td>Distance between metal stop in length (LH)</td>
    <td>~1945</td>
    <td>${m5017.M5008_Actual5}</td>
    <td>${m5017.M5008_Remark6}</td>
  </tr>

  <tr>
    <td>6</td>
    <td>Distance between metal stop in length (RH)</td>
    <td>~1945</td>
    <td>${m5017.M5008_Actual6}</td>
    <td>${m5017.M5008_Remark7}</td>
  </tr>

  <tr>
    <td>7</td>
    <td>Visually Check Welding and grinding of bolster</td>
    <td>${m5017.M5008_Actual9}</td>
    <td>${m5017.M5008_Actual7}</td>
    <td>${m5017.M5008_Remark8}</td>
  </tr>
</table>
<h3 style="margin-top: 5px;">Welding should be free from any visual harmful defects.</h3>

<div style="display: flex; padding: 20px;"> 
  <div style=" padding: 20px; margin-right: 50%;">
    <h4>Signature of SSE/Stage</h4>
    <div style="display: flex;">
      <h3>Name:</h3>
      <p>______</p>
    </div>
    <div style="display: flex;">
      <h3>Desgnation:</h3>
      <p>______</p>
    </div>
  </div>

  <div >
    <h4>Signature of supervisor/QC</h4>
    <div style="display: flex;padding: 20px; ">
      <h3>Name:</h3>
      <p>______</p>
    </div>
    <div style="display: flex;">
      <h3>Desgnation:</h3>
      <p>______</p>
    </div>
  </div>
 
</div>
</body>
</html>

        `,
        //File Name
        fileName: 'M5017',
        //File directory
        directory: 'docs',
      };
      let file = await RNHTMLtoPDF.convert(options);
      console.log(file.filePath);
      setFilePath(file.filePath);
      ToastAndroid.show(`M5017 Form Downloaded in ${filePath}`, 2000);
    }
  };

  // pdf ends

  // M5023 Pdf starts

  const createPDF5023 = async () => {
    if (await isPermitted()) {
      let options = {
        //Content to print
        html: `
        <html lang="en">

<body style="text-align: center;">
    <h1>Modern Coach Factory Raebareli <br> INSPECTION REPORT</h1>
<table width="100%" border="1px">
      <tr  style="padding: 2px;">
      <th width="200" bgcolor="lightgrey">Bogie frame No:-</th>
      <td width="200" >${m5023.M5008_bolster_no}</td>
      <th width="200" bgcolor="lightgrey">Form No.:</th>
      <td width="200" >MCF/RBL/QMF-5023</td>
        
    </tr>
    <tr >
      <tr>
          <tr >
            <th bgcolor="lightgrey">Date</th>
            <td >${m5023.M5008_Date}</td>
            <th bgcolor="lightgrey" >Version</th>
            <td > 10/2021</td>
          </tr>
      </tr>       
    </tr>
   
</table>

<table width="100%" style="margin-top: 3vh;" border="1px">
  
  <tr  style="padding: 2px;">
  <th width="200" bgcolor="lightgrey">Nature of QC Inspection</th>
  <td width="200" >Audit/100%</td>
  <th width="200" bgcolor="lightgrey">Sub Assembly/ Assembly</th>
  <td width="200" >Complete bogie bolster fabricated at MCF/RBL</td>
   
</tr>
<tr >
  <tr>
      <tr >
        <th bgcolor="lightgrey">Component No.</th>
        <td >${m5023.M5008_Drawing_No}</td>
        <th bgcolor="lightgrey" >Stage</th>
        <td >Bogie frame fabrication</td>
      </tr>
    
    <tr>
      <th bgcolor="lightgrey">Status</th>
      <td >${m5023.M5008_Actual13}</td>
      <th bgcolor="lightgrey">Observation as under</th>
      <td >${m5023.M5008_Remark1}</td>
    </tr>
  </tr>       
</tr>




</table>

<table width="100%" style="margin-top: 3vh;" border="1px">
  <tr>
    <th>SL.NO</th>
    <th>PARAMETER</th>
    <th>ACTUAL(mm)</th>
    <th>OBSERVED(mm)</th>
    <th>REMARKS</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Bogie frame centre to centre distance</td>
    <td>2240 ± 2.0</td>
    <td>${m5023.M5008_Actual1}</td>
    <td>${m5023.M5008_Remark2}</td>
  </tr>

  <tr>
    <td>2</td>
    <td>Side frame length</td>
    <td>3035 ± 6.0</td>
    <td>${m5023.M5008_Actual2}</td>
    <td>${m5023.M5008_Remark3}</td>
  </tr>

  <tr>
    <td>3</td>
    <td>Height of bogie frame</td>
    <td>699 ± 3</td>
    <td>${m5023.M5008_Actual3}</td>
    <td>${m5023.M5008_Remark4}</td>
  </tr>

  <tr>
    <td>4</td>
    <td>Outer width of bogie frame</td>
    <td>2946.5 ± 6</td>
    <td>${m5023.M5008_Actual4}</td>
    <td>${m5023.M5008_Remark5}</td>
  </tr>

  <tr>
    <td>5</td>
    <td>Distance between anti roll bar bkt</td>
    <td>1361 ± 4</td>
    <td>${m5023.M5008_Actual5}</td>
    <td>${m5023.M5008_Remark6}</td>
  </tr>

  <tr>
    <td>6</td>
    <td>Control arm support to control arm support distance</td>
    <td>2068 ± 2</td>
    <td>${m5023.M5008_Actual6}</td>
    <td>${m5023.M5008_Remark7}</td>
  </tr>

  <tr>
    <td>7</td>
    <td>Distance between brake support</td>
    <td>914 ± 2</td>
    <td>${m5023.M5008_Actual7}</td>
    <td>${m5023.M5008_Remark8}</td>
  </tr>

  <tr>
    <td>8</td>
    <td>Height of antiroll bar bkt.  top plate</td>
    <td>605 ± 2</td>
    <td>${m5023.M5008_Actual8}</td>
    <td>${m5023.M5008_Remark9}</td>
  </tr>

  <tr>
    <td>9</td>
    <td>Distance between control arm sup. in same side frame</td>
    <td>170 ± 2</td>
    <td>${m5023.M5008_Actual9}</td>
    <td>${m5023.M5008_Remark10}</td>
  </tr>

  <tr>
    <td>10</td>
    <td>Yaw damper bracket inner to side frame outer web</td>
    <td>169 ± 2</td>
    <td>${m5023.M5008_Actual10}</td>
    <td>${m5023.M5008_Remark11}</td>
  </tr>

  <tr>
    <td>11</td>
    <td>Visually Check Welding and grinding of side frames</td>
    <td>${m5023.M5008_Actual14}</td>
    <td>${m5023.M5008_Actual11}</td>
    <td>${m5023.M5008_Remark12}</td>
  </tr>

  <tr>
    <td>12</td>
    <td>Visually Check control arm support for crack all four sides</td>
    <td>${m5023.M5008_Actual15}</td>
    <td>${m5023.M5008_Actual11}</td>
    <td>${m5023.M5008_Remark12}</td>
  </tr>
</table>
<h3 style="margin-top: 5px;">Welding should be free from any visual harmful defects.</h3>

<div style="display: flex; padding: 20px;"> 
  <div style=" padding: 20px; margin-right: 50%;">
    <h4>Signature of SSE/Stage</h4>
    <div style="display: flex;">
      <h3>Name:</h3>
      <p>______</p>
    </div>
    <div style="display: flex;">
      <h3>Desgnation:</h3>
      <p>______</p>
    </div>
  </div>

  <div >
    <h4>Signature of supervisor/QC</h4>
    <div style="display: flex;padding: 20px; ">
      <h3>Name:</h3>
      <p>______</p>
    </div>
    <div style="display: flex;">
      <h3>Desgnation:</h3>
      <p>______</p>
    </div>
  </div>
 
</div>
</body>
</html>

        `,
        //File Name
        fileName: 'M5023',
        //File directory
        directory: 'docs',
      };
      let file = await RNHTMLtoPDF.convert(options);
      console.log(file.filePath);
      setFilePath(file.filePath);
      ToastAndroid.show(`M5023 Form Downloaded in ${filePath}`, 2000);
    }
  };


  // pdf ends


  // stage 1 pdf
  const createPDFstage1 = async () => {
    console.log("hello")
    if (await isPermitted()) {
      let options = {
        //Content to print
        format:"A4",
        margin:{
          top:"80px",
          right:"80px",
          bottom:"100px",
          left:"80px"
        },
        html: `
        <html lang="en">

<body style="text-align: center;">
    <h1>M/S RITES LTD <br> Quality Inspection Report Wheel & Axle</h1>
    <h2>Stage 1</h2>
<table width="100%" style="margin-top: 3vh;" border="1px">
  <tr>
    <th colspan="4" bgcolor="lightgrey">Date</th>
    <th colspan="4" >${stage1.wheel_Date}</th>

    <th colspan="4" bgcolor="lightgrey">Shift</th>
    <th colspan="4">${stage1.input1}</th>
  </tr>
  <tr>
    <th bgcolor="lightgrey" colspan="2">Reference Drg</th>
    <td colspan="2">Axle – LW02100</td>
    <th bgcolor="lightgrey" colspan="2">REF. DOC. No</th>
    <td colspan="2">MCF-QMS-2018-19- QC01</td>
    <th bgcolor="lightgrey" colspan="2">Vol</th>
    <td>-1</td>
    <th bgcolor="lightgrey"colspan="2">Dated</th>
    <td>${stage1.wheel_Date}</td>
 </tr>
 <tr >
  <th bgcolor="lightgrey" rowspan="2">Sr no.</th>
  <th bgcolor="lightgrey" rowspan="2">Axle no</th>
  <th bgcolor="lightgrey" rowspan="2">RBL no.</th>
  <th bgcolor="lightgrey" colspan="2">Journal Dia 130 mm <br> +.043 to +0.068</th>
  <th bgcolor="lightgrey" colspan="2">Collar Dia 160 mm<br>+ 0.134 to +0.174</th>
  <th bgcolor="lightgrey" colspan="2">Wheel Seat Dia 195 mm <br> +0.284 to +0.313</th>
  <th bgcolor="lightgrey" colspan="2">Brake Disc Seat Dia 199 mm <br>+0.236 to +0.282</th>
  <th bgcolor="lightgrey">Threaded Hole Dia</th>
  <th bgcolor="lightgrey" colspan="2">Surface Finish <br> (Journal,Collar,Wheel Seat, Brake Disk)br (N6,N7,N7,N7)</th>
</tr>

<tr>
 <th bgcolor="lightgrey">Right</th>
 <th bgcolor="lightgrey">Left</th>

 <th bgcolor="lightgrey">Right</th>
 <th bgcolor="lightgrey">Left</th>

 <th bgcolor="lightgrey">Right</th>
 <th bgcolor="lightgrey">Left</th>
 
 <th bgcolor="lightgrey">Right</th>
 <th bgcolor="lightgrey">Left</th>
 
 <th bgcolor="lightgrey">Ok/Not Ok</th>

 <th bgcolor="lightgrey">Right</th>
 <th bgcolor="lightgrey">Left</th>
</tr>

<tr>
  <th bgcolor="lightgrey">1</th>
  <th>${stage1.input2}</th>
  <th>${stage1.input3}</th>
  <th>${stage1.input4}</th>
  <th>${stage1.input5}</th>
  <th>${stage1.input6}</th>
  <th>${stage1.input7}</th>
  <th>${stage1.input8}</th>
  <th>${stage1.input9}</th>
  <th>${stage1.input10}</th>
  <th>${stage1.input11}</th>
  <th>${stage1.wheel_checked1}</th>
  <th>${stage1.input12}</th>
  <th>${stage1.input13}</th>
 </tr>

 <tr>
  <th bgcolor="lightgrey">2</th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
 </tr>

 <tr>
  <th bgcolor="lightgrey">3</th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
 </tr>

 <tr>
  <th bgcolor="lightgrey">4</th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
 </tr>

 <tr>
  <th bgcolor="lightgrey">5</th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
 </tr>

 <tr>
  <th bgcolor="lightgrey">6</th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
 </tr>
 <tr>
  <td bgcolor="lightgrey">Note:</td>
  <td colspan="14">${stage1.note}</td>
 </tr>

</table>

<h3 style="margin-top: 5px;">Confirming/Not Confirming</h3>

<div style="display: flex; padding: 20px; justify-content: space-around;"> 
  
  
      <h3>Checked By:</h3>
      <h3>Checked By:</h3>

</div>

</body>
</html>
        `,
        //File Name
        fileName: 'Stage1',
        //File directory
        directory: 'docs',
      };

      let file = await RNHTMLtoPDF.convert(options);
      console.log(file.filePath);
      setFilePath(file.filePath);
      ToastAndroid.show(`Stage 1 Form Downloaded in ${filePath}`, 1000);
    }
  };


  // ends stage 1


  // stage 2 pdf
  const createPDFstage2 = async () => {
    if (await isPermitted()) {
      let options = {
        //Content to print
        format:"A4",
        margin:{
          top:"80px",
          right:"80px",
          bottom:"100px",
          left:"80px"
        },
        html: `
        <html lang="en">

<body style="text-align: center;">
    <h1>M/S RITES LTD <br> Quality Inspection Report Wheel & Axle</h1>
    <h2>Stage 2</h2>
<table width="100%" style="margin-top: 3vh;" border="1px">
  <tr>
    <th colspan="2" bgcolor="lightgrey">Date</th>
    <th colspan="2" >${stage2.wheel_Date}</th>
    <th colspan="2" bgcolor="lightgrey">Shift</th>
    <th>${stage2.input1}</th>
    <th>Heat No.</th>
    <th>${stage2.input11}</th>
  </tr>
  <tr>
    <th bgcolor="lightgrey" >Reference Drg</th>
    <td> Wheel – LW02115, Brake Disc-128336F81</td>
    <th bgcolor="lightgrey">REF. DOC. No</th>
    <td colspan="2">MCF-QMS-2018-19- QC01</td>
    <th bgcolor="lightgrey" >Vol</th>
    <td>-1</td>
    <th bgcolor="lightgrey" >Dated</th>
    <td>${stage2.wheel_Date}</td>
 </tr>
 <tr >
    
  <th bgcolor="lightgrey" rowspan="2">Sr no.</th>
  <th bgcolor="lightgrey" colspan="3">Wheel Details</th>
  <th bgcolor="lightgrey" rowspan="2">Wheel Bore 195 <br>+0.046 to 0 mm</th>
  <th bgcolor="lightgrey" rowspan="2">Roughness of Wheel Bore(N7)</th>

  <th bgcolor="lightgrey" colspan="2">Brake Disc Details</th>
  <th bgcolor="lightgrey" rowspan="2" >Brake Disc Bore 199
    +0.0 to +0.029 mm</th>

  
 
</tr>

<tr>
 <th bgcolor="lightgrey">Make</th>
 <th bgcolor="lightgrey">No.</th>
 <th bgcolor="lightgrey">Date of Mfg.</th>
 <th bgcolor="lightgrey" >Make</th>
 <th bgcolor="lightgrey" >Sr.no</th>
 
 
</tr>

<tr>
  <th bgcolor="lightgrey">1</th>
  <th>${stage2.input2}</th>
  <th>${stage2.input3}</th>
  <th>${stage2.input4}</th>
  <th>${stage2.input5}</th>
  <th>${stage2.input6}</th>
  <th>${stage2.input7}</th>
  <th>${stage2.input8}</th>
  <th>${stage2.input9}</th>
 </tr>

 <tr>
    <th bgcolor="lightgrey">2</th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
</tr>

<tr>
    <th bgcolor="lightgrey">3</th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
</tr>

<tr>
    <th bgcolor="lightgrey">4</th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
</tr>

<tr>
    <th bgcolor="lightgrey">5</th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
</tr>
 <tr>
  <td bgcolor="lightgrey">Note:</td>
  <td colspan="8">${stage2.note}</td>
 </tr>

</table>

<h3 style="margin-top: 5px;">Confirming/Not Confirming</h3>

<div style="display: flex; padding: 20px; justify-content: space-around;"> 
  
  
      <h3>Checked By:</h3>
      <h3>Checked By:</h3>

</div>

</body>
</html>
        `,
        //File Name
        fileName: 'Stage2',
        //File directory
        directory: 'docs',
      };
      let file = await RNHTMLtoPDF.convert(options);
      console.log(file.filePath);
      setFilePath(file.filePath);
      ToastAndroid.show(`Stage 2 Form Downloaded in ${filePath}`, 1000);
    }
  };


  // ends stage 2

   // stage 3 pdf
   const createPDFstage3 = async () => {
    if (await isPermitted()) {
      let options = {
        format:"A4",
        margin:{
          top:"80px",
          right:"80px",
          bottom:"100px",
          left:"80px"
        },
        //Content to print
        html: `
        <html lang="en">

<body style="text-align: center;">
    <h1>M/S RITES LTD <br> Quality Inspection Report Wheel & Axle</h1>
    <h2>Stage 3</h2>
<table width="100%" style="margin-top: 3vh;" border="1px">
<tr>
<th colspan="3" bgcolor="lightgrey">Date</th>
<th colspan="3" >${stage3.wheel_Date}</th>
<th colspan="3" bgcolor="lightgrey">Shift</th>
<th>${stage3.input1}</th>
<th>Heat No.</th>
<th>${stage3.input11}</th>

</tr>
<tr>
<th colspan="2" bgcolor="lightgrey" >Reference Drg</th>
<td colspan="2" > Wheel & Axle Complete – LW02001</td>

<th  colspan="2" bgcolor="lightgrey">REF. DOC. No</th>
<td  >MCF-QMS-2018-19- QC01</td>
<th  bgcolor="lightgrey" >Vol</th>
<td  >-1</td>
<th colspan="2" bgcolor="lightgrey" >Dated</th>
<td  >${stage3.wheel_Date}</td>
</tr>





 <tr >
    
  <th bgcolor="lightgrey" rowspan="2">Sr no.</th>
  <th bgcolor="lightgrey" rowspan="2">RBL No.</th>
 
  <th bgcolor="lightgrey" colspan="2">Wheel No.</th>
  <th bgcolor="lightgrey" colspan="2">Wheel Fitment pressure</th>
  <th bgcolor="lightgrey" colspan="2">Disc No.
</th>
<th bgcolor="lightgrey" colspan="2">Disk Fitment Pres.
    Make  K / FV/PFL
</th>

<th bgcolor="lightgrey" colspan="2">Wheel Treed Dia. 915+4 to 0
</th>
  

  
 
</tr>

<tr>
 <th bgcolor="lightgrey">Left</th>
 <th bgcolor="lightgrey">Right</th>
 
 <th bgcolor="lightgrey">Left</th>
 <th bgcolor="lightgrey">Right</th>

 <th bgcolor="lightgrey">Left</th>
 <th bgcolor="lightgrey">Right</th>

 <th bgcolor="lightgrey">Left</th>
 <th bgcolor="lightgrey">Right</th>

 <th bgcolor="lightgrey">Left</th>
 <th bgcolor="lightgrey">Right</th>

 
 
</tr>

<tr>
  <th bgcolor="lightgrey">1</th>
  <th>${stage3.input2}</th>
  <th>${stage3.input3}</th>
  <th>${stage3.input4}</th>
  <th>${stage3.input5}</th>
  <th>${stage3.input6}</th>
  <th>${stage3.input7}</th>
  <th>${stage3.input8}</th>
  <th>${stage3.input9}</th>
  <th>${stage3.input10}</th>
  <th>${stage3.input11}</th>
  <th>${stage3.input12}</th>
</tr>

<tr>
    <th bgcolor="lightgrey">2</th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
     </tr>

     <tr>
        <th bgcolor="lightgrey">3</th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
         </tr>

         <tr>
            <th bgcolor="lightgrey">4</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
             </tr>

             <tr>
                <th bgcolor="lightgrey">5</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
           </tr>


 <tr>
  <td bgcolor="lightgrey">Note:</td>
  <td colspan="13">${stage3.note}</td>
 </tr>

</table>

<h3 style="margin-top: 5px;">Confirming/Not Confirming</h3>

<div style="display: flex; padding: 20px; justify-content: space-around;"> 
  
  
      <h3>Checked By:</h3>
      <h3>Checked By:</h3>

</div>

</body>
</html>
        `,
        //File Name
        fileName: 'Stage3',
        //File directory
        directory: 'docs',
      };
      let file = await RNHTMLtoPDF.convert(options);
      console.log(file.filePath);
      setFilePath(file.filePath);
      ToastAndroid.show(`Stage 3 Form Downloaded in ${filePath}`, 1000);
    }
  };


  // ends stage 3


     // stage 4n5 pdf
     const createPDFstage4n5 = async () => {
      if (await isPermitted()) {
        let options = {
          format:"A4",
        margin:{
          top:"80px",
          right:"80px",
          bottom:"100px",
          left:"80px"
        },
          //Content to print
          html: `
          <html lang="en">

<body style="text-align: center;">
    <h1>M/S RITES LTD <br> Quality Inspection Report Wheel & Axle</h1>
    <h2>Stage 4 & 5</h2>
<table width="100%" style="margin-top: 3vh;" border="1px">
  <tr>
    <th colspan="3" bgcolor="lightgrey">Date</th>
    <th colspan="3" >${stage4n5.wheel_Date}</th>
    <th colspan="3" bgcolor="lightgrey">Shift</th>
    <th colspan="3">${stage4n5.input1}</th>
  </tr>
  <tr>

    <th bgcolor="lightgrey" colspan="2">Reference Drg</th>
    <td >Axle – LW02100</td>
    <th bgcolor="lightgrey" colspan="2">REF. DOC. No</th>
    <td colspan="2">MCF-QMS-2018-19- QC01</td>
    <th bgcolor="lightgrey" >Vol</th>
    <td>-1</td>
    <th bgcolor="lightgrey" colspan="2">Dated</th>
    <td>${stage4n5.wheel_Date}</td>
 </tr>
 <tr >
  <th bgcolor="lightgrey" rowspan="2">Sr no.</th>
  <th bgcolor="lightgrey" rowspan="2">RBL no.</th>
  <th bgcolor="lightgrey" colspan="2">Journal Dia 130mm +.043 to +0.068</th>
  <th bgcolor="lightgrey" colspan="2">Collar Dia 160 mm + 0.134 to +0.174</th>

  <th bgcolor="lightgrey" rowspan="2">Wheel to Wheel Dist. 1600 mm±1</th>

  <th bgcolor="lightgrey">Wheel balancing Reiv.Prod. Report</th>
  <th bgcolor="lightgrey" colspan="2">Distance Btwn. Wheel & Brake Disc 175 mm±0.5</th>
  <th bgcolor="lightgrey" rowspan="2">Diff.btwn. treed dia of wheel on same Axle  0.5mm Max</th>

  <th bgcolor="lightgrey">Wheel Profile</th>
  
</tr>

<tr>
 
 <th bgcolor="lightgrey">Left</th>
 <th bgcolor="lightgrey">Right</th>

 <th bgcolor="lightgrey">Left</th>
 <th bgcolor="lightgrey">Right</th>


 <th bgcolor="lightgrey">OK/NOT OK</th>
 
 <th bgcolor="lightgrey">Left</th>
 <th bgcolor="lightgrey">Right</th>
 
 <th bgcolor="lightgrey">Ok/Not Ok</th>
</tr>

<tr>
  <th bgcolor="lightgrey">1</th>
  <th>${stage4n5.input2}</th>
  <th>${stage4n5.input3}</th>
  <th>${stage4n5.input4}</th>
  <th>${stage4n5.input5}</th>
 
  <th>${stage4n5.input6}</th>
  <th>${stage4n5.input7}</th>
 
  <th>${stage4n5.wheel_checked1}</th>
  <th>${stage4n5.input8}</th>
  
  <th>${stage4n5.input9}</th>
  <th>${stage4n5.input10}</th>
  
  <th>${stage4n5.wheel_checked2}</th>
 
 </tr>

 <tr>
    <th bgcolor="lightgrey">2</th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
   </tr>

   <tr>
    <th bgcolor="lightgrey">3</th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
   </tr>

   <tr>
    <th bgcolor="lightgrey">4</th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
   </tr>
   <tr>
    <th bgcolor="lightgrey">5</th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
   </tr>
 <tr>
  <td bgcolor="lightgrey">Note:</td>
  <td colspan="14">${stage4n5.note}</td>
 </tr>

</table>

<h3 style="margin-top: 5px;">Confirming/Not Confirming</h3>

<div style="display: flex; padding: 20px; justify-content: space-around;"> 
  
  
      <h3>Checked By:</h3>
      <h3>Checked By:</h3>

</div>

</body>
</html>
          `,
          //File Name
          fileName: 'Stage4_5',
          //File directory
          directory: 'docs',
        };
        let file = await RNHTMLtoPDF.convert(options);
        console.log(file.filePath);
        setFilePath(file.filePath);
        ToastAndroid.show(`Stage 4 & 5 Form Downloaded in ${filePath}`, 1000);
      }
    };
  
  
    // ends stage 4n5

     // stage 6 pdf
     const createPDFstage6 = async () => {
      if (await isPermitted()) {
        let options = {
          format:"A4",
        margin:{
          top:"80px",
          right:"80px",
          bottom:"100px",
          left:"80px"
        },
          //Content to print
          html: `
          <html lang="en">

<body style="text-align: center;">
    <h1>M/S RITES LTD <br> Quality Inspection Report Wheel & Axle</h1>
    <h2>Stage 6</h2>
<table width="100%" style="margin-top: 3vh;" border="1px">
  <tr>
    <th colspan="3" bgcolor="lightgrey">Date</th>
    <th colspan="3" >${stage6.wheel_Date}</th>

    <th colspan="3" bgcolor="lightgrey">Shift</th>
    <th colspan="3">${stage6.input1}</th>
  </tr>
  <tr>
    <th  bgcolor="lightgrey" >Reference Drg</th>
    <td > Wheel – LW02115</td>
    <th  bgcolor="lightgrey" > Brake Disc</th>
    <td  >128336F81</td>
    <th  bgcolor="lightgrey">REF. DOC. No</th>
    <td  >MCF-QMS-2018-19- QC01</td>
    <th  bgcolor="lightgrey" >Vol</th>
    <td  >-1</td>
    <th  bgcolor="lightgrey">Dated</th>
    <td  >${stage6.wheel_Date}</td>
 </tr>
 <tr >
    
  <th bgcolor="lightgrey" rowspan="2">Sr no.</th>
  <th bgcolor="lightgrey" rowspan="2">RBL No.</th>
  <th bgcolor="lightgrey" colspan="4">CTRB Left</th>

  <th bgcolor="lightgrey" colspan="4">CTRB Right</th>
  

  
 
</tr>

<tr>
 <th bgcolor="lightgrey">CTRB No.</th>
 <th bgcolor="lightgrey">Make/Date</th>
 <th bgcolor="lightgrey">Fitment Pressure</th>
 <th bgcolor="lightgrey" >Lateral clearance</th>

 <th bgcolor="lightgrey">CTRB No.</th>
 <th bgcolor="lightgrey">Make/Date</th>
 <th bgcolor="lightgrey">Fitment Pressure</th>
 <th bgcolor="lightgrey" >Lateral clearance</th>
</tr>

<tr>
  <th bgcolor="lightgrey">1</th>
  <th>${stage6.input2}</th>
  <th>${stage6.input3}</th>
  <th>${stage6.input4}</th>
  <th>${stage6.input5}</th>
  <th>${stage6.input6}</th>
  <th>${stage6.input7}</th>
  <th>${stage6.input8}</th>
  <th>${stage6.input9}</th>
  <th>${stage6.input10}</th>
<tr>
  <th bgcolor="lightgrey">2</th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
</tr>
<tr>
  <th bgcolor="lightgrey">3</th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
</tr>
<tr>
  <th bgcolor="lightgrey">4</th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
</tr>
<tr>
  <th bgcolor="lightgrey">5</th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
  <th></th>
 </tr>
 <tr>
  <td bgcolor="lightgrey">Note:</td>
  <td colspan="9">${stage6.note}</td>
 </tr>

</table>

<h3 style="margin-top: 5px;">Confirming/Not Confirming</h3>

<div style="display: flex; padding: 20px; justify-content: space-around;"> 
  
  
      <h3>Checked By:</h3>
      <h3>Checked By:</h3>

</div>

</body>
</html>
          `,
          //File Name
          fileName: 'Stage6',
          //File directory
          directory: 'docs',
        };
        let file = await RNHTMLtoPDF.convert(options);
        console.log(file.filePath);
        setFilePath(file.filePath);
        ToastAndroid.show(`Stage 6 Form Downloaded in ${filePath}`, 1000);
      }
    };
  
  
    // ends stage 6

  return (
    <ScrollView>
      <View>
        {shop === 'BOGIE' ? (
          <><View style={styles.container}>
            {m5008.TEST_PASSED === true && jobcondition1 === true ? (
              <View style={{ flexDirection: 'column' }}>
                <TouchableOpacity onPress={createPDF5008}>
                  <Text style={styles.text}>M5008</Text>
                  <Text>Download Report</Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View><View style={styles.container}>
              {mainform.TEST_PASSED === true && jobcondition2 === true ? (
                <View style={{ flexDirection: 'column' }}>
                  <TouchableOpacity onPress={createPDF}>
                    <Text style={styles.text}>{formname}</Text>
                    <Text>Download Report</Text>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View><View style={styles.container}>
              {m5017.TEST_PASSED === true && jobcondition3 === true ? (
                <View style={{ flexDirection: 'column' }}>
                  <TouchableOpacity onPress={createPDF5017}>
                    <Text style={styles.text}>M5017</Text>
                    <Text>Download Report</Text>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View><View style={styles.container}>
              {m5023.TEST_PASSED === true && jobcondition4 === true ? (
                <View style={{ flexDirection: 'column' }}>
                  <TouchableOpacity onPress={createPDF5023}>
                    <Text style={styles.text}>M5023</Text>
                    <Text>Download Report</Text>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View></>
        ):(<><View style={styles.container}>
            {stage1.TEST_PASSED === true && jobcondition1 === true ? (
              <View style={{ flexDirection: 'column' }}>
                <TouchableOpacity
                onPress={createPDFstage1}>
                  <Text style={styles.text}>Stage 1</Text>
                  <Text>Download Report</Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View><View style={styles.container}>
              {stage2.TEST_PASSED === true && jobcondition2 === true ? (
                <View style={{ flexDirection: 'column' }}>
                  <TouchableOpacity
                  onPress={createPDFstage2}>
                    <Text style={styles.text}>Stage 2</Text>
                    <Text>Download Report</Text>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View><View style={styles.container}>
              {stage3.TEST_PASSED === true && jobcondition3 === true ? (
                <View style={{ flexDirection: 'column' }}>
                  <TouchableOpacity
                  onPress={createPDFstage3}>
                    <Text style={styles.text}>Stage 3</Text>
                    <Text>Download Report</Text>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View><View style={styles.container}>
              {stage4n5.TEST_PASSED === true && jobcondition4 === true ? (
                <View style={{ flexDirection: 'column' }}>
                  <TouchableOpacity
                  onPress={createPDFstage4n5}>
                    <Text style={styles.text}>Stage 4 & 5</Text>
                    <Text>Download Report</Text>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View><View style={styles.container}>
              {stage6.TEST_PASSED === true && jobcondition5 === true ? (
                <View style={{ flexDirection: 'column' }}>
                  <TouchableOpacity
                  onPress={createPDFstage6}>
                    <Text style={styles.text}>Stage 6</Text>
                    <Text>Download Report</Text>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View></>
        
        
        )}
      
      </View>
    </ScrollView>
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
