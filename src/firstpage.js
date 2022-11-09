import {StyleSheet, Text, View, TouchableOpacity, Picker} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {Dropdown} from 'react-native-element-dropdown';
import moment from 'moment';
import axios from 'axios';


const Firstpage = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const bogie = "BOGIE";
  const datee = ` ${moment(date).format('MMMM Do YYYY')}`;
  const [open, setOpen] = useState(false);
  const [pushValue, setPushvalue] = useState('');
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');

  const [isFocus, setIsFocus] = useState(false);

  const data = [{label: 'Bogie', value: 'Bogie'}];

  const data2 = [
    {label: 'LWACCN', value: 'Lwaccn'},
    {label: 'ACCZ/ACCB/ACCW/ACFC', value: 'Accw'},
    {label: 'LGS/LSCN', value: 'Lscn'},
    {label: 'LWLRRM (Gen. Van Side 1 Hand brake)', value: 'Lwlrrm'},
    {label: 'LWLRRM (Gen. Van Side 2)', value: 'Lwlrrm2'},
    {label: 'LGS/LSCN/LWSCZ/EOG WITH BIO-TANKS(AIR SPRING)', value: 'Lgs'},
    {label: 'AC-2T/EOG WITH(120KN AIR SPRING)', value: 'Ac2t'},
    {label: 'LSLRD/EOG WITH (AIR SPRING)', value: 'LslrdAsp'},
    {label: 'LWCBAC/LWFAC/LSCZAC/LFCWAC/EOG WITH(AIR SPRING)', value: 'Lwcbac'},
    {label: 'LSLRD/US,LDSLR×1,LDSLR750×2 WITH AIR SPRING', value: 'Lslrd'},
    {
      label: 'LWLRRM(Gen.van)(750X2) Side 1 Hand brake (AIR SPRING)',
      value: 'LwlrrmAsp1',
    },
    {label: 'LWLRRM(Gen.van)(750X2) Side 2(AIR SPRING)', value: 'LwlrrmAsp2'},
    {
      label: 'Tejas-LWLRRM(Gen.van)Side 1 Hand brake (120 KN AIR SPRING)',
      value: 'LwlrrmKNAsp1',
    },
    {
      label: 'Tejas-LWLRRM(Gen.van)Side 2(120 KN AIR SPRING)',
      value: 'LwlrrmKNAsp2',
    },
    {label: 'AC-3T/EOG WITH (120KN AIR SPRING)', value: 'Ac3t'},
    {label: 'LVPH WITH (140KN AIR SPRING)', value: 'Lvph'},
    {label: 'LSLRD/EOG WITH (AIR SPRING)', value: 'LslrdAsp'},
  ];

  const data3 = [
    {label: '1-Static Load Testing', value: 'loadtest'},
    {label: '2-Fabrication', value: 'fabrication'},
  ];
  const data4 = [
    {label: 'Ramesh', value: 'ramesh'},
    {label: 'Suresh', value: 'suresh'},
    {label: 'Mahesh', value: 'mahesh'},
    {label: 'Ganesh', value: 'ganesh'},
    {label: 'Jignesh', value: 'jignesh'},
  ];
  const data5 = [{label: 'Vikram Singh Thakur', value: 'vikram'}];
  const data6 = [
    {label: 'Shift A', value: 'shiftA'},
    {label: 'Shift B', value: 'shiftB'},
  ];
  const data7 = [
    {label: 'LHB coaches with coil spring ', value: 'LHB'},
    {label: 'LHB coaches with air spring ', value: 'LHBASP'},
  ];


  const renderLabel = () => {
    if (value2 || isFocus) {
      return <Text style={[styles.label, isFocus && {color: 'blue'}]}></Text>;
    }
    return null;
  };
  const renderLabel2 = () => {
    if (value3 || isFocus) {
      return <Text style={[styles.label, isFocus && {color: 'blue'}]}></Text>;
    }
    return null;
  };
  const renderLabel3 = () => {
    if (value4 || isFocus) {
      return <Text style={[styles.label, isFocus && {color: 'blue'}]}></Text>;
    }
    return null;
  };


  const[user,setUser] = useState();

  const text1 = 'MCF/RBL/QMF-5009';
  const text2 = 'MCF/RBL/QMF-5010';
  const text3 = 'MCF/RBL/QMF-5011';
  const text4 = 'MCF/RBL/QMF-5012';
  const text5 = 'MCF/RBL/QMF-5013';
  const text6 = 'MCF/RBL/QMF-5014';
  const text7 = 'MCF/RBL/QMF-5016';
  const text8 = 'MCF/RBL/QMF-5018';
  const text9 = 'MCF/RBL/QMF-5019';
  const text10 = 'MCF/RBL/QMF-5020';
  const text11 = 'MCF/RBL/QMF-5021';
  const text12 = 'MCF/RBL/QMF-5022';
  const text13 = 'MCF/RBL/QMF-5024';
  const text14 = 'MCF/RBL/QMF-5025';
  const text15 = 'MCF/RBL/QMF-5026';
  const text16 = 'MCF/RBL/QMF-5027';
  const text17 = 'MCF/RBL/QMF-5028';

  useEffect(() => {
    setPushvalue(text1);
    // console.log(pushValue, 'useeffect se saayaz hai');
  });

  const foo = () => {
    console.log(pushValue, 'else wali hain');
    axios
      .post(' http://10.109.148.232:8000/api/prod', {
        SHOP_TYPE: bogie,
        BOGIE_TYPE: value3,
        COACH_TYPE: value4,
        FORM_NUMBER: pushValue,
        DATE_CREATED: datee,
      })

      .then(function (response) {
        // handle success
       // alert(JSON.stringify(response.data));
       alert('Job Created Successfully')
        navigation.navigate('First Prod Page');
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      });
  };

  const postData = () => {
    // if (!value2) {
    //   alert('Please Select Shop Type');
    // }
    if (!value3) {
      alert('Please Select Bogie Type');
    }
    if (!value4) {
      alert('Please Select Coach Type');
    }


    if (value3 === 'Lwaccn') {
      setPushvalue(text1);
      foo();
    } else if (value3 === 'Accw') {
      setPushvalue(text2);
      foo();
    } else if (value3 === 'Lscn') {
      setPushvalue(text3);

      foo();
    } else if (value3 === 'Lwlrrm') {
      setPushvalue(text4);
      foo();
    } else if (value3 === 'Lwlrrm2') {
      setPushvalue(text5);
      foo();
    } else if (value3 === 'Lgs') {
      setPushvalue(text6);
      foo();
    } else if (value3 === 'Ac2t') {
      setPushvalue(text7);
      foo();
    } else if (value3 === 'LslrdAsp') {
      setPushvalue(text8);
      foo();
    } else if (value3 === 'Lwcbac') {
      setPushvalue(text9);
      foo();
    } else if (value3 === 'Lslrd') {
      setPushvalue(text10);
      foo();
    } else if (value3 === 'LwlrrmAsp1') {
      setPushvalue(text11);
      foo();
    } else if (value3 === 'LwlrrmAsp2') {
      setPushvalue(text12);
      foo();
    } else if (value3 === 'LwlrrmKNAsp1') {
      setPushvalue(text13);
      foo();
    } else if (value3 === 'LwlrrmKNAsp2') {
      setPushvalue(text14);
      foo();
    } else if (value3 === 'Ac3t') {
      setPushvalue(text15);
      foo();
    } else if (value3 === 'Lvph') {
      setPushvalue(text16);
      foo();
    } else if (value3 === 'LslrdAsp') {
      setPushvalue(text17);
      foo();
    } else console.log(pushValue);
  };


  const getAllProvider= async() =>{
    try {
      const providers = await axios.get(
        'http://10.109.148.232:8000/api/userno',
      );
      // console.log(providers.data);
      setUser(providers.data);
      // console.log(providers.data)
      // setJobId(providers.data._id);
      // setQA(user.QA_NUMBER)
      // setProd(user.PROD_NUMBER)
  
    } catch (error) {
      console.log(error);
    }
  }
   // sms part
  const msg = ()=>{
    var data = new FormData();
   data.append('cavcvd', 'vadsdvs vn ');
   data.append('aCCas mc ', 'acs, ns v,');
  
   
   
   var config = {
     method: 'post',
     url: `http://sms.heightsconsultancy.com/api/mt/SendSMS?user=software1&password=password&senderid=INFOMS&channel=TRANS&DCS=0&flashsms=0&number=${user[0].QA_NUMBER},${user[0].PROD_NUMBER}&text=Job_has_been_created`,
     headers: data.getHeaders ? data.getHeaders() : { 'Content-Type': 'multipart/form-data' },
     data : data
   };
   
   axios(config)
   .then(function (response) {
     console.log(JSON.stringify(response.data));  
   })
   .catch(function (error) {
     console.log(error);
   });
  }

  useEffect(() => {
    getAllProvider();
    // console.log(pushValue, 'useeffect se saayaz hai');
  },[user]);


  const woo =()=>{
    postData();
    msg();
  }



  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{marginHorizontal: 10}}>
          <View style={styles.boxstyle}>
            <Text style={styles.textstyle}>SHOP TYPE</Text>
            <Text style={styles.textstyle}>{bogie}</Text>
            
          </View>
          
            <View style={styles.boxstyle}>
              <Text style={styles.textstyle}>BOGIE TYPE</Text>
              {renderLabel2()}
              <Dropdown
                style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data2}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select item' : '...'}
                searchPlaceholder="Search..."
                value={value3}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setValue3(item.value);
                  setIsFocus(false);
                  console.log(pushValue, 'dropdown se aya hu bc');
                }}
              />
            </View>
          
          <View style={styles.boxstyle}>
            <Text style={styles.textstyle}>COACH TYPE</Text>
            {renderLabel3()}
            <Dropdown
              style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data7}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select item' : '...'}
              searchPlaceholder="Search..."
              value={value4}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue4(item.value);
                setIsFocus(false);
              }}
            />
          </View>

          {/* <View style={styles.boxstyle}>
            <Text style={styles.textstyle}>Form Number</Text>
            {value3 === 'LWACCN' ? (
              <Text style={styles.textstyle}>MCF/RBL/QMF-5009</Text>
            ) : value3 === 'ACCW' ? (
              <Text style={styles.textstyle}>MCF/RBL/QMF-5010</Text>
            ) : value3 === 'LSCN' ? (
              <Text style={styles.textstyle}>MCF/RBL/QMF-5011</Text>
            ) : value3 === 'LWLRRM' ? (
              <Text style={styles.textstyle}>MCF/RBL/QMF-5012</Text>
            ) : value3 === 'LWLRRM2' ? (
              <Text style={styles.textstyle}>MCF/RBL/QMF-5013</Text>
            ) : value3 === 'LWSCZ' ? (
              <Text style={styles.textstyle}>MCF/RBL/QMF-5014</Text>
            ) : value3 === 'AC2T' ? (
              <Text style={styles.textstyle}>MCF/RBL/QMF-5016</Text>
            ) : value3 === 'LSLRD' ? (
              <Text style={styles.textstyle}>MCF/RBL/QMF-5018</Text>
            ) : value3 === 'LWCBAC' ? (
              <Text style={styles.textstyle}>MCF/RBL/QMF-5019</Text>
            ) : value3 === 'LSLRDASP' ? (
              <Text style={styles.textstyle}>MCF/RBL/QMF-5020</Text>
            ) : value3 === 'LWLRRMASP1' ? (
              <Text style={styles.textstyle}>MCF/RBL/QMF-5021</Text>
            ) : value3 === 'LWLRRMASP2' ? (
              <Text style={styles.textstyle}>MCF/RBL/QMF-5022</Text>
            ) : value3 === 'LWLRRMKNASP1' ? (
              <Text style={styles.textstyle}>MCF/RBL/QMF-5024</Text>
            ) : value3 === 'LWLRRMKNASP2' ? (
              <Text style={styles.textstyle}>MCF/RBL/QMF-5025</Text>
            ) : value3 === 'AC3T' ? (
              <Text style={styles.textstyle}>MCF/RBL/QMF-5026</Text>
            ) : value3 === 'LVPH' ? (
              <Text style={styles.textstyle}>MCF/RBL/QMF-5027</Text>
            ) : value3 === 'LSLRDASP2' ? (
              <Text style={styles.textstyle}>MCF/RBL/QMF-5028</Text>
            ) : null}
          </View> */}
          <View style={styles.boxstyle}>
            <Text style={styles.textstyle}>DATE</Text>
            <Text style={styles.textstyle}>{`${moment(date).format(
              'MMMM Do YYYY',
            )}`}</Text>
          </View>

          <TouchableOpacity
            style={styles.button1}
            onPress={woo}
            >
            <Text style={{color: 'white'}}> Create Job</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Firstpage;

const styles = StyleSheet.create({
  checkbox: {
    alignSelf: 'center',
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'white',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  headertext: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'black',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginBottom: 20,
    borderRadius: 25,
    backgroundColor: 'black',
    marginHorizontal: 120,
    marginTop: 20,
    height: 40,
  },
  boxstyle: {
    borderRadius: 10,
    paddingVertical: 20,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  textstyle: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    paddingBottom: 10,
    color: 'black',
  },
  viewstyle1: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  viewstyle2: {
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 65,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
  },
});
