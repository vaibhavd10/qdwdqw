import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useState,useEffect} from 'react';
import axios from 'axios';

const FormList = ({navigation, route}) => {
  const [providers, setProviders] = useState([]);
  const coach = route.params.coachs;
  const bogie = route.params.bogies;
  const id = route.params.user_id;

  var [jobCondition1,setJobCondition1] =  useState();
  var [jobCondition2,setJobCondition2] =  useState();
  var [jobCondition3,setJobCondition3] =  useState();
  var [jobCondition4,setJobCondition4] =  useState();
  var [jobCondition5,setJobCondition5] =  useState();



  async function getAllProvider() {
    try {
      const providers = await axios.get(`  http://10.109.148.232:8000/api/get/${id}`);
      setProviders([providers.data]);
      // setJobId(providers.data._);
      setJobCondition1(providers.data.JOB_ASSIGNED_A)
      setJobCondition2(providers.data.JOB_ASSIGNED_B)
      setJobCondition3(providers.data.JOB_ASSIGNED_C)
      setJobCondition4(providers.data.JOB_ASSIGNED_D)
      setJobCondition5(providers.data.JOB_ASSIGNED_E)


    } catch (error) {
      console.log(error);
    }
  }

 
  useEffect(() => {
    getAllProvider();
  }, [providers]);

 

  // console.log(jobCondition,"++++++++++++");

  // const Ac2t = () => {
  //   navigation.replace('Ac2t');
  // };
  // const Ac3t = () => {
  //   navigation.replace('Ac3t');
  // };
  // const Accw = () => {
  //   navigation.replace('Accw');
  // };
  // const Ldslr = () => {
  //   navigation.replace('Ldslr');
  // };
  // const Lgs = () => {
  //   navigation.replace('Lgs');
  // };
  // const Lscn = () => {
  //   navigation.replace('Lscn');
  // };
  // const Lslrd = () => {
  //   navigation.replace('Lslrd');
  // };
  // const LslrdAsp = () => {
  //   navigation.replace('LslrdAsp');
  // };
  // const Lvph = () => {
  //   navigation.replace('Lvph');
  // };
  // const Lwaccn = () => {
  //   navigation.replace('Lwaccn');
  // };
  // const Lwcbac = () => {
  //   navigation.replace('Lwcbac');
  // };
  // const Lwlrrm = () => {
  //   navigation.replace('Lwlrrm');
  // };
  // const Lwlrrm2 = () => {
  //   navigation.replace('Lwlrrm2');
  // };
  // const LwlrrmAsp1 = () => {
  //   navigation.replace('LwlrrmAsp1');
  // };
  // const LwlrrmAsp2 = () => {
  //   navigation.replace('LwlrrmAsp2');
  // };
  // const LwlrrmKNAsp1 = () => {
  //   navigation.replace('LwlrrmKNAsp1');
  // };
  // const LwlrrmKNAsp2 = () => {
  //   navigation.replace('LwlrrmKNAsp2');
  // };
  // const M5008 = () => {
  //   {jobCondition===false ?(
  //     navigation.replace('M5008')
      

  //   ):(null)}
  //   ;
  // };
  async function M5008() {
    if(jobCondition1 === false){
      const providers2 = await axios
      .put(`  http://10.109.148.232:8000/api/get/${id}`, {
        JOB_ASSIGNED_A: true,
      })
      .then(function (response) {
        navigation.replace('M5008',{
          user_id:id,
          coachs:coach,
          bogies:bogie,
         })
      })
      .catch(function (response) {
        console.log(error);
      });
    }else alert('Job Submitted')
    
  }

  async function M5008A() {
    if(jobCondition1 === false){
      const providers2 = await axios
      .put(`  http://10.109.148.232:8000/api/get/${id}`, {
        JOB_ASSIGNED_A: true,
      })
      .then(function (response) {
        navigation.replace('M5008',{
          user_id:id,
          coachs:coach,
          bogies:bogie,
         })
      })
      .catch(function (response) {
        console.log(error);
      });
    }else alert('Job Submitted')
    
  }
  async function M5017() {
    if(jobCondition3 === false){
      const providers2 = await axios
      .put(`  http://10.109.148.232:8000/api/get/${id}`, {
        JOB_ASSIGNED_C: true,
      })
      .then(function (response) {
        navigation.replace('M5017',{
          user_id:id,
          coachs:coach,
          bogies:bogie,
         })
      })
      .catch(function (response) {
        console.log(error);
      });
    }else alert('Job Submitted')
    
  }
  async function M5023() {
    if(jobCondition4 === false){
      const providers2 = await axios
      .put(`  http://10.109.148.232:8000/api/get/${id}`, {
        JOB_ASSIGNED_D: true,
      })
      .then(function (response) {
        navigation.replace('M5023',{
          user_id:id,
          coachs:coach,
          bogies:bogie,
         })
      })
      .catch(function (response) {
        console.log(error);
      });
    }else alert('Job Submitted')
    
  }

  async function Ac2t() {
    console.log(id)
    if(jobCondition2 === false){
      console.log("if ke andar")
      const providers2 = await axios
      .put(`  http://10.109.148.232:8000/api/get/${id}`, {
        JOB_ASSIGNED_B: true,
      })
      .then(function (response) {
        navigation.replace('Ac2t',{
         user_id:id,
         coachs:coach,
         bogies:bogie,
        })
      })
      .catch(function (response) {
        console.log(error);
      });
    }else alert('Job Submitted')
    
  }

  async function Ac3t() {
    if(jobCondition2 === false){
      const providers2 = await axios
      .put(`  http://10.109.148.232:8000/api/get/${id}`, {
        JOB_ASSIGNED_B: true,
      })
      .then(function (response) {
        navigation.replace('Ac3t',{
          user_id:id,
          coachs:coach,
          bogies:bogie,
         })
      })
      .catch(function (response) {
        console.log(error);
      });
    }else alert('Job Submitted')
    
  }
  async function Accw() {
    if(jobCondition2 === false){
      const providers2 = await axios
      .put(`  http://10.109.148.232:8000/api/get/${id}`, {
        JOB_ASSIGNED_B: true,
      })
      .then(function (response) {
        navigation.replace('Accw',{
          user_id:id,
          coachs:coach,
          bogies:bogie,
         })
      })
      .catch(function (response) {
        console.log(error);
      });
    }else alert('Job Submitted')
    
  }

  async function Ldslr() {
    if(jobCondition2 === false){
      const providers2 = await axios
      .put(`  http://10.109.148.232:8000/api/get/${id}`, {
        JOB_ASSIGNED_B: true,
      })
      .then(function (response) {
        navigation.replace('Ldslr',{
          user_id:id,
          coachs:coach,
          bogies:bogie,
         })
      })
      .catch(function (response) {
        console.log(error);
      });
    }else alert('Job Submitted')
    
  }
  async function Lgs() {
    if(jobCondition2 === false){
      const providers2 = await axios
      .put(`  http://10.109.148.232:8000/api/get/${id}`, {
        JOB_ASSIGNED_B: true,
      })
      .then(function (response) {
        navigation.replace('Lgs',{
          user_id:id,
          coachs:coach,
          bogies:bogie,
         })
      })
      .catch(function (response) {
        console.log(error);
      });
    }else alert('Job Submitted')
    
  }
  async function Lscn() {
    if(jobCondition2 === false){
      const providers2 = await axios
      .put(`  http://10.109.148.232:8000/api/get/${id}`, {
        JOB_ASSIGNED_B: true,
      })
      .then(function (response) {
        navigation.replace('Lscn',{
          user_id:id,
          coachs:coach,
          bogies:bogie,
         })
      })
      .catch(function (response) {
        console.log(error);
      });
    }else alert('Job Submitted')
    
  }
  async function Lslrd() {
    if(jobCondition2 === false){
      const providers2 = await axios
      .put(`  http://10.109.148.232:8000/api/get/${id}`, {
        JOB_ASSIGNED_B: true,
      })
      .then(function (response) {
        navigation.replace('Lslrd',{
          user_id:id,
          coachs:coach,
          bogies:bogie,
         })
      })
      .catch(function (response) {
        console.log(error);
      });
    }else alert('Job Submitted')
    
  }
  async function LslrdAsp() {
    if(jobCondition2 === false){
      const providers2 = await axios
      .put(`  http://10.109.148.232:8000/api/get/${id}`, {
        JOB_ASSIGNED_B: true,
      })
      .then(function (response) {
        navigation.replace('LslrdAsp',{
          user_id:id,
          coachs:coach,
          bogies:bogie,
         })
      })
      .catch(function (response) {
        console.log(error);
      });
    }else alert('Job Submitted')
    
  }
  async function Lvph() {
    if(jobCondition2 === false){
      const providers2 = await axios
      .put(`  http://10.109.148.232:8000/api/get/${id}`, {
        JOB_ASSIGNED_B: true,
      })
      .then(function (response) {
        navigation.replace('Lvph',{
          user_id:id,
          coachs:coach,
          bogies:bogie,
         })
      })
      .catch(function (response) {
        console.log(error);
      });
    }else alert('Job Submitted')
    
  }
  async function Lwaccn() {
    if(jobCondition2 === false){
      const providers2 = await axios
      .put(`  http://10.109.148.232:8000/api/get/${id}`, {
        JOB_ASSIGNED_B: true,
      })
      .then(function (response) {
        navigation.replace('Lwaccn',{
          user_id:id,
          coachs:coach,
          bogies:bogie,
         })
      })
      .catch(function (response) {
        console.log(error);
      });
    }else alert('Job Submitted')
    
  }
  async function Lwcbac() {
    if(jobCondition2 === false){
      const providers2 = await axios
      .put(`  http://10.109.148.232:8000/api/get/${id}`, {
        JOB_ASSIGNED_B: true,
      })
      .then(function (response) {
        navigation.replace('Lwcbac',{
          user_id:id,
          coachs:coach,
          bogies:bogie,
         })
      })
      .catch(function (response) {
        console.log(error);
      });
    }else alert('Job Submitted')
    
  }
  async function Lwlrrm() {
    if(jobCondition2 === false){
      const providers2 = await axios
      .put(`  http://10.109.148.232:8000/api/get/${id}`, {
        JOB_ASSIGNED_B: true,
      })
      .then(function (response) {
        navigation.replace('Lwlrrm',{
          user_id:id,
          coachs:coach,
          bogies:bogie,
         })
      })
      .catch(function (response) {
        console.log(error);
      });
    }else alert('Job Submitted')
    
  }
  async function Lwlrrm2() {
    if(jobCondition2 === false){
      const providers2 = await axios
      .put(`  http://10.109.148.232:8000/api/get/${id}`, {
        JOB_ASSIGNED_B: true,
      })
      .then(function (response) {
        navigation.replace('Lwlrrm2',{
          user_id:id,
          coachs:coach,
          bogies:bogie,
         })
      })
      .catch(function (response) {
        console.log(error);
      });
    }else alert('Job Submitted')
    
  }
  async function LwlrrmAsp1() {
    if(jobCondition2 === false){
      const providers2 = await axios
      .put(`  http://10.109.148.232:8000/api/get/${id}`, {
        JOB_ASSIGNED_B: true,
      })
      .then(function (response) {
        navigation.replace('LwlrrmAsp1',{
          user_id:id,
          coachs:coach,
          bogies:bogie,
         })
      })
      .catch(function (response) {
        console.log(error);
      });
    }else alert('Job Submitted')
    
  }
  async function LwlrrmAsp2() {
    if(jobCondition2 === false){
      const providers2 = await axios
      .put(`  http://10.109.148.232:8000/api/get/${id}`, {
        JOB_ASSIGNED_B: true,
      })
      .then(function (response) {
        navigation.replace('LwlrrmAsp2',{
          user_id:id,
          coachs:coach,
          bogies:bogie,
         })
      })
      .catch(function (response) {
        console.log(error);
      });
    }else alert('Job Submitted')
    
  }
  async function LwlrrmKNAsp1() {
    if(jobCondition2 === false){
      const providers2 = await axios
      .put(`  http://10.109.148.232:8000/api/get/${id}`, {
        JOB_ASSIGNED_B: true,
      })
      .then(function (response) {
        navigation.replace('LwlrrmKNAsp1',{
          user_id:id,
          coachs:coach,
          bogies:bogie,
         })
      })
      .catch(function (response) {
        console.log(error);
      });
    }else alert('Job Submitted')
    
  }
  async function LwlrrmKNAsp2() {
    if(jobCondition2 === false){
      const providers2 = await axios
      .put(`  http://10.109.148.232:8000/api/get/${id}`, {
        JOB_ASSIGNED_B: true,
      })
      .then(function (response) {
        navigation.replace('LwlrrmKNAsp2',{
          user_id:id,
          coachs:coach,
          bogies:bogie,
         })
      })
      .catch(function (response) {
        console.log(error);
      });
    }else alert('Job Submitted')
    
  }

  async function Stage1() {
    console.log(jobCondition1,"dev is best")
    if(jobCondition1 === false){
      const providers2 = await axios
      .put(`  http://10.109.148.232:8000/api/get/${id}`, {
        JOB_ASSIGNED_A: true,
      })
      .then(function (response) {
        navigation.replace('Stage1',{
          user_id:id,
          
         })
         
      })
      .catch(function (response) {
        console.log(error);
      });
    }else alert('Job Submitted')
    
  }

  async function Stage2() {
    if(jobCondition2 === false){
      const providers2 = await axios
      .put(`  http://10.109.148.232:8000/api/get/${id}`, {
        JOB_ASSIGNED_B: true,
      })
      .then(function (response) {
        navigation.replace('Stage2',{
          user_id:id,
         })
      })
      .catch(function (response) {
        console.log(error);
      });
    }else alert('Job Submitted')
    
  }

  async function Stage3() {
    if(jobCondition3 === false){
      const providers2 = await axios
      .put(`  http://10.109.148.232:8000/api/get/${id}`, {
        JOB_ASSIGNED_C: true,
      })
      .then(function (response) {
        navigation.replace('Stage3',{
          user_id:id
         })
      })
      .catch(function (response) {
        console.log(error);
      });
    }else alert('Job Submitted')
    
  }

  async function Stage4n5() {
    if(jobCondition4 === false){
      const providers2 = await axios
      .put(`  http://10.109.148.232:8000/api/get/${id}`, {
        JOB_ASSIGNED_D: true,
      })
      .then(function (response) {
        navigation.replace('Stage4_5',{
          user_id:id,
         })
      })
      .catch(function (response) {
        console.log(error);
      });
    }else alert('Job Submitted')
    
  }

  async function Stage6() {
    if(jobCondition5 === false){
      const providers2 = await axios
      .put(`  http://10.109.148.232:8000/api/get/${id}`, {
        JOB_ASSIGNED_E: true,
      })
      .then(function (response) {
        navigation.replace('Stage6',{
          user_id:id,
         })
      })
      .catch(function (response) {
        console.log(error);
      });
    }else alert('Job Submitted')
    
  }












  // const M5008A = () => {
  //   navigation.replace('M5008A');
  // };
  // const M5017 = () => {
  //   navigation.replace('M5017');
  // };
  // const M5023 = () => {
  //   navigation.replace('M5023');
  // };

  return (
    <SafeAreaView style={styles.containerHead}>
      <View style={styles.container}>
        {coach === 'LHB' && bogie === 'Lwaccn' ? (
          <View>
            <TouchableOpacity style={styles.forBomx} onPress={M5008}>
              <Text style={styles.forBomxText}>1: M5008</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={Lwaccn}>
              <Text style={styles.forBomxText}>3: LWACCN</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5017}>
              <Text style={styles.forBomxText}>10: M5017</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5023}>
              <Text style={styles.forBomxText}>16: M5023</Text>
            </TouchableOpacity>
          </View>
        ) : coach === 'LHBASP' && bogie === 'Lwaccn' ? (
          <View>
            <TouchableOpacity style={styles.forBomx} onPress={M5008A}>
              <Text style={styles.forBomxText}>2: M5008A</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forBomx} onPress={Lwaccn}>
              <Text style={styles.forBomxText}>3: LWACCN</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5017}>
              <Text style={styles.forBomxText}>10: M5017</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5023}>
              <Text style={styles.forBomxText}>16: M5023</Text>
            </TouchableOpacity>

          </View>

        ): coach === 'LHB' && bogie === 'Accw' ?(
          <View>
          <TouchableOpacity style={styles.forBomx} onPress={M5008}>
              <Text style={styles.forBomxText}>1: M5008</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={Accw}>
              <Text style={styles.forBomxText}>4: ACCW</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5017}>
              <Text style={styles.forBomxText}>10: M5017</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5023}>
              <Text style={styles.forBomxText}>16: M5023</Text>
            </TouchableOpacity>
          </View>
        ) : coach === 'LHBASP' && bogie === 'Accw' ? (
          <View>
            <TouchableOpacity style={styles.forBomx} onPress={M5008A}>
              <Text style={styles.forBomxText}>M5008</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={Accw}>
              <Text style={styles.forBomxText}>ACCW</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5017}>
              <Text style={styles.forBomxText}>M5017</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5023}>
              <Text style={styles.forBomxText}>M5023</Text>
            </TouchableOpacity>
          </View>
          

        ) :  coach === 'LHB' && bogie === 'Lscn' ?(
          <View>
          <TouchableOpacity style={styles.forBomx} onPress={M5008}>
              <Text style={styles.forBomxText}>1: M5008</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={Lscn}>
              <Text style={styles.forBomxText}>5: LSCN</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5017}>
              <Text style={styles.forBomxText}>10: M5017</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5023}>
              <Text style={styles.forBomxText}>16: M5023</Text>
            </TouchableOpacity>
          </View>

        ) :  coach === 'LHBASP' && bogie === 'Lscn' ? (
          <View>
          <TouchableOpacity style={styles.forBomx} onPress={M5008A}>
              <Text style={styles.forBomxText}>M5008</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={Lscn}>
              <Text style={styles.forBomxText}>LSCN</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5017}>
              <Text style={styles.forBomxText}> M5017</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5023}>
              <Text style={styles.forBomxText}>M5023</Text>
            </TouchableOpacity>
          </View>
        )  :  coach === 'LHB' && bogie === 'Lwlrrm' ? (
          <View>
          <TouchableOpacity style={styles.forBomx} onPress={M5008}>
              <Text style={styles.forBomxText}>1: M5008</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={Lwlrrm}>
              <Text style={styles.forBomxText}>6: LWLRRM</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5017}>
              <Text style={styles.forBomxText}>10: M5017</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5023}>
              <Text style={styles.forBomxText}>16: M5023</Text>
            </TouchableOpacity>
          </View>
        ) :  coach === 'LHBASP' && bogie === 'Lwlrrm' ? (
          <View>
          <TouchableOpacity style={styles.forBomx} onPress={M5008A}>
              <Text style={styles.forBomxText}> M5008A</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={Lwlrrm}>
              <Text style={styles.forBomxText}>LWLRRM</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5017}>
              <Text style={styles.forBomxText}> M5017</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5023}>
              <Text style={styles.forBomxText}> M5023</Text>
            </TouchableOpacity>
          </View>
        ) : coach === 'LHB' && bogie === 'Lwlrrm2' ? (
          <View>
          <TouchableOpacity style={styles.forBomx} onPress={M5008}>
              <Text style={styles.forBomxText}>1: M5008</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={Lwlrrm2}>
              <Text style={styles.forBomxText}>7: LWLRRM2</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5017}>
              <Text style={styles.forBomxText}>10: M5017</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5023}>
              <Text style={styles.forBomxText}>16: M5023</Text>
            </TouchableOpacity>
          </View>
        )  : coach === 'LHBASP' && bogie === 'Lwlrrm2' ? (
          <View>
          <TouchableOpacity style={styles.forBomx} onPress={M5008A}>
              <Text style={styles.forBomxText}>1: M5008</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={Lwlrrm2}>
              <Text style={styles.forBomxText}>7: LWLRRM2</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5017}>
              <Text style={styles.forBomxText}>10: M5017</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5023}>
              <Text style={styles.forBomxText}>16: M5023</Text>
            </TouchableOpacity>
          </View>
        ) : coach === 'LHB' && bogie === 'Lgs' ? (
          <View>
          <TouchableOpacity style={styles.forBomx} onPress={M5008}>
              <Text style={styles.forBomxText}>1: M5008</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={Lgs}>
              <Text style={styles.forBomxText}>LGS/LWSCZ</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5017}>
              <Text style={styles.forBomxText}>10: M5017</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5023}>
              <Text style={styles.forBomxText}>16: M5023</Text>
            </TouchableOpacity>
          </View>
        ) : coach === 'LHBASP' && bogie === 'Lgs' ? (
          <View>
          <TouchableOpacity style={styles.forBomx} onPress={M5008A}>
              <Text style={styles.forBomxText}>1: M5008A</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={Lgs}>
              <Text style={styles.forBomxText}>LGS/LWSCZ</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5017}>
              <Text style={styles.forBomxText}>10: M5017</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5023}>
              <Text style={styles.forBomxText}>16: M5023</Text>
            </TouchableOpacity>
          </View>
        ) : coach === 'LHB' && bogie === 'Ac2t' ? (
          <View>
          <TouchableOpacity style={styles.forBomx} onPress={M5008}>
              <Text style={styles.forBomxText}>1: M5008</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={Ac2t}>
              <Text style={styles.forBomxText}>9: AC-2T</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5017}>
              <Text style={styles.forBomxText}>10: M5017</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5023}>
              <Text style={styles.forBomxText}>16: M5023</Text>
            </TouchableOpacity>
          </View>
        ) : coach === 'LHBASP' && bogie === 'Ac2t' ? (
          <View>
          <TouchableOpacity style={styles.forBomx} onPress={M5008A}>
              <Text style={styles.forBomxText}>1: M5008</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={Ac2t}>
              <Text style={styles.forBomxText}>9: AC-2T</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5017}>
              <Text style={styles.forBomxText}>10: M5017</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5023}>
              <Text style={styles.forBomxText}>16: M5023</Text>
            </TouchableOpacity>
          </View>
        ) : coach === 'LHB' && bogie === 'LslrdAsp' ? (
          <View>
          <TouchableOpacity style={styles.forBomx} onPress={M5008A}>
              <Text style={styles.forBomxText}>1: M5008</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={Lslrd}>
              <Text style={styles.forBomxText}>11: LSLRD</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5017}>
              <Text style={styles.forBomxText}>10: M5017</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5023}>
              <Text style={styles.forBomxText}>16: M5023</Text>
            </TouchableOpacity>
          </View>
        ) : coach === 'LHBASP' && bogie === 'LslrdAsp' ? (
          <View>
          <TouchableOpacity style={styles.forBomx} onPress={M5008A}>
              <Text style={styles.forBomxText}>1: M5008</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={Lslrd}>
              <Text style={styles.forBomxText}>11: LSLRD</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5017}>
              <Text style={styles.forBomxText}>10: M5017</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5023}>
              <Text style={styles.forBomxText}>16: M5023</Text>
            </TouchableOpacity>
          </View>
        ) : coach === 'LHB' && bogie === 'Lwcbac' ? (
          <View>
          <TouchableOpacity style={styles.forBomx} onPress={M5008}>
              <Text style={styles.forBomxText}>1: M5008</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={Lwcbac}>
              <Text style={styles.forBomxText}>12: LWCBAC</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5017}>
              <Text style={styles.forBomxText}>10: M5017</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5023}>
              <Text style={styles.forBomxText}>16: M5023</Text>
            </TouchableOpacity>
          </View>
        ) : coach === 'LHBASP' && bogie === 'Lwcbac' ? (
          <View>
          <TouchableOpacity style={styles.forBomx} onPress={M5008A}>
              <Text style={styles.forBomxText}>1: M5008</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={Lwcbac}>
              <Text style={styles.forBomxText}>12: LWCBAC</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5017}>
              <Text style={styles.forBomxText}>10: M5017</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5023}>
              <Text style={styles.forBomxText}>16: M5023</Text>
            </TouchableOpacity>
          </View>
        ) : coach === 'LHB' && bogie === 'Lslrd' ? (
          <View>
          <TouchableOpacity style={styles.forBomx} onPress={M5008A}>
              <Text style={styles.forBomxText}>1: M5008</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={LslrdAsp}>
              <Text style={styles.forBomxText}>21: LSLRDASP</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5017}>
              <Text style={styles.forBomxText}>10: M5017</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5023}>
              <Text style={styles.forBomxText}>16: M5023</Text>
            </TouchableOpacity>
          </View>
        ) : coach === 'LHBASP' && bogie === 'Lslrd' ? (
          <View>
          <TouchableOpacity style={styles.forBomx} onPress={M5008A}>
              <Text style={styles.forBomxText}>1: M5008</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={LslrdAsp}>
              <Text style={styles.forBomxText}>21: LSLRDASP</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5017}>
              <Text style={styles.forBomxText}>10: M5017</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5023}>
              <Text style={styles.forBomxText}>16: M5023</Text>
            </TouchableOpacity>
          </View>
        ) : coach === 'LHB' && bogie === 'LwlrrmAsp1' ? (
          <View>
          <TouchableOpacity style={styles.forBomx} onPress={M5008A}>
              <Text style={styles.forBomxText}>1: M5008</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={LwlrrmAsp1}>
              <Text style={styles.forBomxText}>14: LWLRRMASP1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5017}>
              <Text style={styles.forBomxText}>10: M5017</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5023}>
              <Text style={styles.forBomxText}>16: M5023</Text>
            </TouchableOpacity>
          </View>
        ) : coach === 'LHBASP' && bogie === 'LwlrrmAsp1' ? (
          <View>
          <TouchableOpacity style={styles.forBomx} onPress={M5008A}>
              <Text style={styles.forBomxText}>1: M5008</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={LwlrrmAsp1}>
              <Text style={styles.forBomxText}>14: LWLRRMASP1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5017}>
              <Text style={styles.forBomxText}>10: M5017</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5023}>
              <Text style={styles.forBomxText}>16: M5023</Text>
            </TouchableOpacity>
          </View>
        ) : coach === 'LHB' && bogie === 'LwlrrmAsp2' ? (
          <View>
          <TouchableOpacity style={styles.forBomx} onPress={M5008A}>
              <Text style={styles.forBomxText}>1: M5008</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={LwlrrmAsp2}>
              <Text style={styles.forBomxText}>15: LWLRRMASP2</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5017}>
              <Text style={styles.forBomxText}>10: M5017</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5023}>
              <Text style={styles.forBomxText}>16: M5023</Text>
            </TouchableOpacity>
          </View>
        ) : coach === 'LHBASP' && bogie === 'LwlrrmAsp2' ? (
          <View>
          <TouchableOpacity style={styles.forBomx} onPress={M5008A}>
              <Text style={styles.forBomxText}>1: M5008</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={LwlrrmAsp2}>
              <Text style={styles.forBomxText}>15: LWLRRMASP2</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5017}>
              <Text style={styles.forBomxText}>10: M5017</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5023}>
              <Text style={styles.forBomxText}>16: M5023</Text>
            </TouchableOpacity>
          </View>
        ) : coach === 'LHB' && bogie === 'LwlrrmKNAsp1' ? (
          <View>
          <TouchableOpacity style={styles.forBomx} onPress={M5008A}>
              <Text style={styles.forBomxText}>1: M5008</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={LwlrrmKNAsp1}>
              <Text style={styles.forBomxText}>17: LWLRRMKNASP1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5017}>
              <Text style={styles.forBomxText}>10: M5017</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5023}>
              <Text style={styles.forBomxText}>16: M5023</Text>
            </TouchableOpacity>
          </View>
        ) : coach === 'LHBASP' && bogie === 'LwlrrmKNAsp1' ? (
          <View>
          <TouchableOpacity style={styles.forBomx} onPress={M5008A}>
              <Text style={styles.forBomxText}>1: M5008</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={LwlrrmKNAsp1}>
              <Text style={styles.forBomxText}>17: LWLRRMKNASP1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5017}>
              <Text style={styles.forBomxText}>10: M5017</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5023}>
              <Text style={styles.forBomxText}>16: M5023</Text>
            </TouchableOpacity>
          </View>
        ) : coach === 'LHB' && bogie === 'LwlrrmKNAsp2' ? (
          <View>
          <TouchableOpacity style={styles.forBomx} onPress={M5008A}>
              <Text style={styles.forBomxText}>1: M5008</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={LwlrrmKNAsp2}>
              <Text style={styles.forBomxText}>17: LWLRRMKNASP1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5017}>
              <Text style={styles.forBomxText}>10: M5017</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5023}>
              <Text style={styles.forBomxText}>16: M5023</Text>
            </TouchableOpacity>
          </View>
        ) : coach === 'LHBASP' && bogie === 'LwlrrmKNAsp2' ? (
          <View>
          <TouchableOpacity style={styles.forBomx} onPress={M5008A}>
              <Text style={styles.forBomxText}>1: M5008</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={LwlrrmKNAsp2}>
              <Text style={styles.forBomxText}>17: LWLRRMKNASP1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5017}>
              <Text style={styles.forBomxText}>10: M5017</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5023}>
              <Text style={styles.forBomxText}>16: M5023</Text>
            </TouchableOpacity>
          </View>
        ) : coach === 'LHB' && bogie === 'Ac3t' ? (
          <View>
          <TouchableOpacity style={styles.forBomx} onPress={M5008A}>
              <Text style={styles.forBomxText}>1: M5008</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={Ac3t}>
              <Text style={styles.forBomxText}>19: AC-3T</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5017}>
              <Text style={styles.forBomxText}>10: M5017</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5023}>
              <Text style={styles.forBomxText}>16: M5023</Text>
            </TouchableOpacity>
          </View>
        ) : coach === 'LHBASP' && bogie === 'Ac3t' ? (
          <View>
          <TouchableOpacity style={styles.forBomx} onPress={M5008A}>
              <Text style={styles.forBomxText}>1: M5008</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={Ac3t}>
              <Text style={styles.forBomxText}>19: AC-3T</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5017}>
              <Text style={styles.forBomxText}>10: M5017</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5023}>
              <Text style={styles.forBomxText}>16: M5023</Text>
            </TouchableOpacity>
          </View>
        ) : coach === 'LHB' && bogie === 'Lvph' ? (
          <View>
          <TouchableOpacity style={styles.forBomx} onPress={M5008A}>
              <Text style={styles.forBomxText}>1: M5008</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={Lvph}>
              <Text style={styles.forBomxText}>20: LVPH</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5017}>
              <Text style={styles.forBomxText}>10: M5017</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5023}>
              <Text style={styles.forBomxText}>16: M5023</Text>
            </TouchableOpacity>
          </View>
        ) : coach === 'LHBASP' && bogie === 'Lvph' ? (
          <View>
          <TouchableOpacity style={styles.forBomx} onPress={M5008A}>
              <Text style={styles.forBomxText}>1: M5008</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={Lvph}>
              <Text style={styles.forBomxText}>20: LVPH</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5017}>
              <Text style={styles.forBomxText}>10: M5017</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5023}>
              <Text style={styles.forBomxText}>16: M5023</Text>
            </TouchableOpacity>
          </View>
        ) : coach === 'LHB' && bogie === 'LslrdAsp' ? (
          <View>
          <TouchableOpacity style={styles.forBomx} onPress={M5008A}>
              <Text style={styles.forBomxText}>1: M5008</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={LslrdAsp}>
              <Text style={styles.forBomxText}>21: LSLRDASP</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5017}>
              <Text style={styles.forBomxText}>10: M5017</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5023}>
              <Text style={styles.forBomxText}>16: M5023</Text>
            </TouchableOpacity>
          </View>
        ) : coach === 'LHBASP' && bogie === 'LslrdAsp' ? (
          <View>
          <TouchableOpacity style={styles.forBomx} onPress={M5008A}>
              <Text style={styles.forBomxText}>1: M5008</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={LslrdAsp}>
              <Text style={styles.forBomxText}>21: LSLRDASP</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5017}>
              <Text style={styles.forBomxText}>10: M5017</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={M5023}>
              <Text style={styles.forBomxText}>16: M5023</Text>
            </TouchableOpacity>
          </View>
        ): coach === undefined && bogie === undefined ? (
          <View>
          <TouchableOpacity style={styles.forBomx} onPress={Stage1}>
              <Text style={styles.forBomxText}>STAGE 1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={Stage2}>
              <Text style={styles.forBomxText}>STAGE 2</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={Stage3}>
              <Text style={styles.forBomxText}>STAGE 3</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={Stage4n5}>
              <Text style={styles.forBomxText}>STAGE 4&5</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forBomx} onPress={Stage6}>
              <Text style={styles.forBomxText}>STAGE 6</Text>
            </TouchableOpacity>
          </View>
        ):(null)
      }
        {/* <TouchableOpacity style={styles.forBomx} onPress={M5008}>
              <Text style={styles.forBomxText}>1: M5008</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.forBomx} onPress={M5008A}>
              <Text style={styles.forBomxText}>2: M5008A</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.forBomx} onPress={Lwaccn}>
              <Text style={styles.forBomxText}>3: LWACCN</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.forBomx} onPress={Accw}>
              <Text style={styles.forBomxText}>4: ACCW</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.forBomx} onPress={Lscn}>
              <Text style={styles.forBomxText}>5: LSCN</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.forBomx} onPress={Lwlrrm}>
              <Text style={styles.forBomxText}>6: LWLRRM</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.forBomx} onPress={Lwlrrm2}>
              <Text style={styles.forBomxText}>7: LWLRRM2</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.forBomx} onPress={Lgs}>
              <Text style={styles.forBomxText}>8: LGS</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.forBomx} onPress={Ac2t}>
              <Text style={styles.forBomxText}>9: AC-2T</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.forBomx} onPress={M5017}>
              <Text style={styles.forBomxText}>10: M5017</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.forBomx} onPress={Lslrd}>
              <Text style={styles.forBomxText}>11: LSLRD</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.forBomx} onPress={Lwcbac}>
              <Text style={styles.forBomxText}>12: LWCBAC</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.forBomx} onPress={Ldslr}>
              <Text style={styles.forBomxText}>13: LDSLR</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.forBomx} onPress={LwlrrmAsp1}>
              <Text style={styles.forBomxText}>14: LWLRRMASP1</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.forBomx} onPress={LwlrrmAsp2}>
              <Text style={styles.forBomxText}>15: LWLRRMASP2</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.forBomx} onPress={M5023}>
              <Text style={styles.forBomxText}>16: M5023</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.forBomx} onPress={LwlrrmKNAsp1}>
              <Text style={styles.forBomxText}>17: LWLRRMKNASP1</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.forBomx} onPress={LwlrrmKNAsp2}>
              <Text style={styles.forBomxText}>18: LWLRRMKNASP2</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.forBomx} onPress={Ac3t}>
              <Text style={styles.forBomxText}>19: AC-3T</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.forBomx} onPress={Lvph}>
              <Text style={styles.forBomxText}>20: LVPH</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.forBomx} onPress={LslrdAsp}>
              <Text style={styles.forBomxText}>21: LSLRDASP</Text>
            </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
};

export default FormList;

const styles = StyleSheet.create({
  containerHead: {
    backgroundColor: 'white',
  },
  container: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forBomx: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 1,
    width: 250,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#00cc99',
  },
  forBomxText: {
    fontWeight: '500',
    color: 'black',
    fontsize: 35,
  },
});





