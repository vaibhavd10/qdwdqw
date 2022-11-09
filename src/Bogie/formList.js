import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';

const FormList = ({navigation}) => {
  const Ac2t = () => {
    navigation.replace('Ac2t');
  };
  const Ac3t = () => {
    navigation.replace('Ac3t');
  };
  const Accw = () => {
    navigation.replace('Accw');
  };
  const Ldslr = () => {
    navigation.replace('Ldslr');
  };
  const Lgs = () => {
    navigation.replace('Lgs');
  };
  const Lscn = () => {
    navigation.replace('Lscn');
  };
  const Lslrd = () => {
    navigation.replace('Lslrd');
  };
  const LslrdAsp = () => {
    navigation.replace('LslrdAsp');
  };
  const Lvph = () => {
    navigation.replace('Lvph');
  };
  const Lwaccn = () => {
    navigation.replace('Lwaccn');
  };
  const Lwcbac = () => {
    navigation.replace('Lwcbac');
  };
  const Lwlrrm = () => {
    navigation.replace('Lwlrrm');
  };
  const Lwlrrm2 = () => {
    navigation.replace('Lwlrrm2');
  };
  const LwlrrmAsp1 = () => {
    navigation.replace('LwlrrmAsp1');
  };
  const LwlrrmAsp2 = () => {
    navigation.replace('LwlrrmAsp2');
  };
  const LwlrrmKNAsp1 = () => {
    navigation.replace('LwlrrmKNAsp1');
  };
  const LwlrrmKNAsp2 = () => {
    navigation.replace('LwlrrmKNAsp2');
  };
  const M5008 = () => {
    navigation.replace('M5008');
  };
  const M5008A = () => {
    navigation.replace('M5008A');
  };
  const M5017 = () => {
    navigation.replace('M5017');
  };
  const M5023 = () => {
    navigation.replace('M5023');
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.containerHead}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.forBomx} onPress={M5008}>
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
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FormList;

const styles = StyleSheet.create({
  containerHead: {
    backgroundColor: '#ccffff',
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
