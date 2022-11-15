import {StyleSheet, Text, View, TouchableOpacity, Picker,Linking, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {Dropdown} from 'react-native-element-dropdown';
import moment from 'moment';
import axios from 'axios';
import DocumentPicker from 'react-native-document-picker';


const ProdWheelJob = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const wheel = "Wheel";
  const datee = ` ${moment(date).format('MMMM Do YYYY')}`;
  const [open, setOpen] = useState(false);
  const [pushValue, setPushvalue] = useState('');
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [drg,setDrg] = useState();
  var [file,setFile] = useState();
  const[input1,setinput1] = useState();
  const[input2,setInput2] = useState();
  const[input3,setInput3] = useState();
  const[input4,setInput4] = useState();

  const [user,setUser] = useState();


  const [isFocus, setIsFocus] = useState(false);

  const [singleFile, setSingleFile] = useState();


  const data2 = [
    {label: 'STAGE 1', value: 'Stage1'},
    {label: 'STAGE 2', value: 'Stage2'},
    {label: 'STAGE 3', value: 'Stage3'},
    {label: 'STAGE 4 & 5', value: 'Stage4_5'},
    {label: 'STAGE 6', value: 'Stage6'},

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

  const text1 = 9;

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



  // console.log(qa,"hiiiiiiiiiiii")



  useEffect(() => {
    setPushvalue(text1);
    getAllProvider();
    // console.log(pushValue, 'useeffect se saayaz hai');
  },[user]);

  // console.log(user.QA_NUMBER,user.PROD_NUMBER,"DBGNGESTOUN")
 
  const foo = () => {
    // console.log(pushValue, 'else wali hain');
    axios
      .post(' http://192.168.2.122:8000/api/prod', {
        SHOP_TYPE: wheel,
        DATE_CREATED: datee,
        REF_WHEEL:drg,
        AXEL_NO_MAKE:input1,
        WHEEL_DISK_1:input2,
        WHEEL_DISK_2:input3,
      })

      .then(function (response) {
        // handle success
        Alert.alert("Job Created Successfully")
        navigation.navigate('Wheel Prod');
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      });
  };



  // docs picker

  const uploadImage = async () => {
    // Check if any file is selected or not
    if (file != null) {
      // If file selected then create FormData
      const fileToUpload = file;
      const data = new FormData();
      data.append('name', 'Image Upload');
      data.append('file_attachment', fileToUpload);
      // Please change file upload URL
      let res = await axios(
        'http://192.168.2.122:8000/api/upload',
        {
          method: 'post',
          body: data,
          headers: {
            'Content-Type': 'application/pdf',
          },
        }
      );
      let responseJson = await res.json();
      if (responseJson.status == 1) {
        alert('Upload Successful');
      }
    } else {
      // If no file selected the show alert
      alert('Please Select File first');
    }
  };
 
  const selectFile = async () => {
    // Opening Document Picker to select one file
    try {
      const res = await DocumentPicker.pick({
        // Provide which type of file you want user to pick
        type: [DocumentPicker.types.allFiles],
        // There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      // Printing the log realted to the file
      // console.log('res : ' + JSON.stringify(res));
      setFile(res);
      // console.log(file[0].size,"oooo");
   
      // Setting the state to show single file attributes
      // setSingleFile([res]);
      // console.log(singleFile,'filee')
    } catch (err) {
      setSingleFile(null);
      // Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        // If user canceled the document selection
        alert('Canceled');
      } else {
        // For Unknown Error
       // alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

 //   end
  const getAllProvider= async() =>{
  try {
    const providers = await axios.get(
      'http://192.168.2.122:8000/api/userno',
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
   url: `http://sms.heightsconsultancy.com/api/mt/SendSMS?user=software1&password=password&senderid=INFOMS&channel=TRANS&DCS=0&flashsms=0&number=${user[0].QA_NUMBER},${user[0].PROD_NUMBER}&text=Job_has_been_created_WHEEL`,
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


 
 // 
 const postData = () => {
  foo();
   msg();
};


// web socket

//  ----------


  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{marginHorizontal: 10}}>
          <View style={styles.boxstyle}>
            <Text style={styles.textstyle}>SHOP TYPE</Text>
            <Text style={styles.textstyle}>{wheel}</Text>
            
          </View>
          
            <View style={styles.boxstyle}>
              <Text style={styles.textstyle}>Applicable WI (if any)</Text>
             <TextInput
             style={styles.input}
             value={drg}
             onChangeText={setDrg}
            

             />
            </View>

            <View style={styles.boxstyle}>
              <Text style={styles.textstyle}>Axel No. & Make</Text>
             <TextInput
             style={styles.input}
             value={input1}
             onChangeText={setinput1}
            

             />
            </View>

            <View style={styles.boxstyle}>
              <Text style={styles.textstyle}>Wheel Disk No.& Heat No. (1)</Text>
             <TextInput
             style={styles.input}
             value={input2}
             onChangeText={setInput2}
            

             />
            </View>

            <View style={styles.boxstyle}>
              <Text style={styles.textstyle}>Wheel Disk No.& Heat No. (2)</Text>
             <TextInput
             style={styles.input}
             value={input3}
             onChangeText={setInput3}
            

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
          {/* Showing the data of selected Single file */}
      {file != null ? (
        <Text style={styles.textStyle}>
          File Name: {file[0].name ? file[0].name : ''}
          {'\n'}
          Type: {file[0].type ? file[0].type : ''}
          {'\n'}
        </Text>
      ) : null}
          <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={selectFile}>
        <Text style={styles.buttonTextStyle}>Select File</Text>
      </TouchableOpacity>

          <TouchableOpacity
            style={styles.button1}
            onPress={postData}
            >
            <Text style={{color: 'white'}}> Create Job</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProdWheelJob;

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
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    textAlign: 'center',
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
  input: {
    height: 40,
    width: "100%",
 
    marginBottom: 5,
    backgroundColor:"white",
    borderRadius:5
  },
  buttonStyle: {
    backgroundColor: '#307ecc',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#307ecc',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
});
