import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// refurnishing imports
import Login from '../login';
import QciList from '../qciList';

import FormList from '../furnishingQualityControl/formList';

import lwbacList from '../furnishingQualityControl/forms/lwbac/lwbacList';
import airBreak from '../furnishingQualityControl/forms/lwbac/airBrake';
import coachLowering from '../furnishingQualityControl/forms/lwbac/coachLowering';
import coachCleaning from '../furnishingQualityControl/forms/lwbac/coachCleaning';
import floorAndPvc from '../furnishingQualityControl/forms/lwbac/floorAndPvc';
import lavatory from '../furnishingQualityControl/forms/lwbac/lavatory';
import moulding from '../furnishingQualityControl/forms/lwbac/moulding';
import paint from '../furnishingQualityControl/forms/lwbac/paint';
import panel from '../furnishingQualityControl/forms/lwbac/panel';
import partition from '../furnishingQualityControl/forms/lwbac/partition';
import plumbing from '../furnishingQualityControl/forms/lwbac/plumbing';
import SeatAndBerth from '../furnishingQualityControl/forms/lwbac/seatAndBerth';
import WindowAndceiling from '../furnishingQualityControl/forms/lwbac/windowAndCeiling';

import FacList from '../furnishingQualityControl/forms/fac/facList';
import FloorAndPvcFAC from '../furnishingQualityControl/forms/fac/floorAndPvc';
import PartitionFAC from '../furnishingQualityControl/forms/fac/partition';
import PanelFAC from '../furnishingQualityControl/forms/fac/panel';
import WindowAndCeilingFAC from '../furnishingQualityControl/forms/fac/windowAndCeiling';
import MouldingFAC from '../furnishingQualityControl/forms/fac/moulding';
import SeatAndBerthFAC from '../furnishingQualityControl/forms/fac/seatAndBerth';
import LavatoryFAC from '../furnishingQualityControl/forms/fac/lavatory';
import PlumbingFAC from '../furnishingQualityControl/forms/fac/plumbing';
import AirBrakeFac from '../furnishingQualityControl/forms/fac/airBrake';
import CoachLoweringFac from '../furnishingQualityControl/forms/fac/coachLowering';
import PaintFac from '../furnishingQualityControl/forms/fac/paint';
import CoachCleaningFAc from '../furnishingQualityControl/forms/fac/coachCleaning';

import LvphList from '../furnishingQualityControl/forms/lvph/lvphList';
import floorAndChequerSheetLVPH from '../furnishingQualityControl/forms/lvph/floorAndChequerSheet';
import CeilingLVPH from '../furnishingQualityControl/forms/lvph/ceiling';
import PanelLVPH from '../furnishingQualityControl/forms/lvph/panel';
import MouldingAndDoorLVPH from '../furnishingQualityControl/forms/lvph/mouldingAndDoor';
import AirBrakeLVPH from '../furnishingQualityControl/forms/lvph/airBrake';
import CoachLoweringLVPH from '../furnishingQualityControl/forms/lvph/coachLowering';
import PaintLVPH from '../furnishingQualityControl/forms/lvph/paint';
import CoachCleaningLVPH from '../furnishingQualityControl/forms/lvph/coachCleaning';

import TejasList from '../furnishingQualityControl/forms/tejas/tejasList';
import FloorAndPvcTejas from '../furnishingQualityControl/forms/tejas/floorAndPvc';
import PartitionTejas from '../furnishingQualityControl/forms/tejas/partition';
import PanelTejas from '../furnishingQualityControl/forms/tejas/panel';
import WindowAndCeilingTejas from '../furnishingQualityControl/forms/tejas/windowAndCeiling';
import Moulding from '../furnishingQualityControl/forms/tejas/moulding';
import SeatBerthTejas from '../furnishingQualityControl/forms/tejas/seatAndBerth';
import LavatoryTejas from '../furnishingQualityControl/forms/tejas/lavatory';
import PlumbingTejas from '../furnishingQualityControl/forms/tejas/plumbing';
import AirBreakTejas from '../furnishingQualityControl/forms/tejas/airBrake';
import CoachLoweringTejas from '../furnishingQualityControl/forms/tejas/coachLowering';
import PaintTejas from '../furnishingQualityControl/forms/tejas/paint';
import CoachCleaningTejas from '../furnishingQualityControl/forms/tejas/coachCleaning';

import LPCList from '../furnishingQualityControl/forms/lpc/lpcList';
import FloorAndPvcLPC from '../furnishingQualityControl/forms/lpc/floorAndPvclpc';
import PartitionLPC from '../furnishingQualityControl/forms/lpc/partitionlpc';
import PanelLPC from '../furnishingQualityControl/forms/lpc/panellpc';
import WindowAndCeilingLPC from '../furnishingQualityControl/forms/lpc/windowAndCeilinglpc';
import MouldingLPC from '../furnishingQualityControl/forms/lpc/mouldinglpc';
import LavatoryLPC from '../furnishingQualityControl/forms/lpc/lavatorylpc';
import SeatBerthLPC from '../furnishingQualityControl/forms/lpc/seatAndBerthlpc';
import AirBreakLPC from '../furnishingQualityControl/forms/lpc/airBrakelpc';
import PlumbingLPC from '../furnishingQualityControl/forms/lpc/plumbinglpc';
import CoachLoweringLPC from '../furnishingQualityControl/forms/lpc/coachLoweringlpc';
import CoachCleaningLPC from '../furnishingQualityControl/forms/lpc/coachCleaninglpc';
import PaintLPC from '../furnishingQualityControl/forms/lpc/paintlpc';

import LWSList from '../furnishingQualityControl/forms/lws/lwsList';
import FloorAndPvcLWS from '../furnishingQualityControl/forms/lws/floorAndPvc';
import PartitionLWS from '../furnishingQualityControl/forms/lws/partition';
import PanelLWS from '../furnishingQualityControl/forms/lws/panel';
import WindowAndCeilingLWS from '../furnishingQualityControl/forms/lws/windowCeiling';
import MouldingLWS from '../furnishingQualityControl/forms/lws/moulding';
import SeatBerthLWS from '../furnishingQualityControl/forms/lws/seatAndBerth';
import LavatoryLWS from '../furnishingQualityControl/forms/lws/lavatory';
import PlumbingLWS from '../furnishingQualityControl/forms/lws/plumbing';
import AirBreakLWS from '../furnishingQualityControl/forms/lws/airBrake';
import CoachLoweringLWS from '../furnishingQualityControl/forms/lws/coachLowering';
import PaintLWS from '../furnishingQualityControl/forms/lws/paint';
import CoachCleaningLWS from '../furnishingQualityControl/forms/lws/coachCleaning';

import SCZList from '../furnishingQualityControl/forms/scz/sczList';
import FloorAndPvcSCZ from '../furnishingQualityControl/forms/scz/floorAndPvc';
import PartitionSCZ from '../furnishingQualityControl/forms/scz/partition';
import PanelSCZ from '../furnishingQualityControl/forms/scz/panel';
import WindowAndCeilingSCZ from '../furnishingQualityControl/forms/scz/windowCeiling';
import MouldingSCZ from '../furnishingQualityControl/forms/scz/moulding';
import SeatBerthSCZ from '../furnishingQualityControl/forms/scz/seatAndBerth';
import LavatorySCZ from '../furnishingQualityControl/forms/scz/lavatory';
import PlumbingSCZ from '../furnishingQualityControl/forms/scz/plumbing';
import AirBreakSCZ from '../furnishingQualityControl/forms/scz/airBrake';
import CoachLoweringSCZ from '../furnishingQualityControl/forms/scz/coachLowering';
import PaintSCZ from '../furnishingQualityControl/forms/scz/paint';
import CoachCleaningSCZ from '../furnishingQualityControl/forms/scz/coachCleaning';

import SLRDList from '../furnishingQualityControl/forms/slrd/slrdList';
import CoachCleaningSLRD from '../furnishingQualityControl/forms/slrd/coachCleaning';
import PaintSLRD from '../furnishingQualityControl/forms/slrd/paint';
import CoachLoweringSLRD from '../furnishingQualityControl/forms/slrd/coachLowering';
import AirBreakSLRD from '../furnishingQualityControl/forms/slrd/airBrake';
import PlumbingSLRD from '../furnishingQualityControl/forms/slrd/plumbing';
import LavatorySLRD from '../furnishingQualityControl/forms/slrd/lavatory';
import SeatBerthSLRD from '../furnishingQualityControl/forms/slrd/seatAndBerth';
import MouldingSLRD from '../furnishingQualityControl/forms/slrd/moulding';
import WindowAndCeilingSLRD from '../furnishingQualityControl/forms/slrd/windowCeiling';
import PanelSLRD from '../furnishingQualityControl/forms/slrd/panel';
import FloorAndPvcSLRD from '../furnishingQualityControl/forms/slrd/floorandPvc';

import SczacList from '../furnishingQualityControl/forms/sczac/sczacList';
import FloorAndPvcSCZAC from '../furnishingQualityControl/forms/sczac/floorAndPvc';
import PartitionSCZAC from '../furnishingQualityControl/forms/sczac/partition';
import PanelSCZAC from '../furnishingQualityControl/forms/sczac/panel';
import WindowAndCeilingSCZAC from '../furnishingQualityControl/forms/sczac/windowAndCeiling';
import MouldingSCZAC from '../furnishingQualityControl/forms/sczac/moulding';
import SeatAndBerthSCZAC from '../furnishingQualityControl/forms/sczac/seatAndBerth';
import LavatorySCZAC from '../furnishingQualityControl/forms/sczac/lavatory';
import PlumbingSCZAC from '../furnishingQualityControl/forms/sczac/plumbing';
import CoachLoweringSCZAC from '../furnishingQualityControl/forms/sczac/coachLowering';
import AirBreakSCZAC from '../furnishingQualityControl/forms/sczac/airBrake';
import PaintSCZAC from '../furnishingQualityControl/forms/sczac/paint';
import CoachCleaningSCZAC from '../furnishingQualityControl/forms/sczac/coachCleaning';

// bogie imports
import FormListBogie from '../Bogie/formList';
import Ac2t from '../Bogie/forms/ac2t';
import Ac3t from '../Bogie/forms/ac3t';
import Accw from '../Bogie/forms/accw';
import Ldslr from '../Bogie/forms/ldslr';
import Lgs from '../Bogie/forms/lgs';
import Lscn from '../Bogie/forms/lscn';
import Lslrd from '../Bogie/forms/lslrd';
import LslrdAsp from '../Bogie/forms/lslrdAsp';
import Lvph from '../Bogie/forms/lvph';
import Lwaccn from '../Bogie/forms/lwaccn';
import Lwcbac from '../Bogie/forms/lwcbac';
import Lwlrrm from '../Bogie/forms/lwlrrm';
import Lwlrrm2 from '../Bogie/forms/lwlrrm2';
import LwlrrmAsp1 from '../Bogie/forms/lwlrrmAsp1';
import LwlrrmAsp2 from '../Bogie/forms/lwlrrmAsp2';
import LwlrrmKNAsp1 from '../Bogie/forms/lwlrrnKNAsp1';
import LwlrrmKNAsp2 from '../Bogie/forms/lwlrrnKNAsp2';
import M5008 from '../Bogie/forms/M5008';
import M5008A from '../Bogie/forms/M5008A';
import M5023 from '../Bogie/forms/M5023';
import M5017 from '../Bogie/forms/M5017';

// shell shop
//ShellShop Imports
import SHELLLIST from '../SHELL_SHOP/ShellList';
import QMF2011_A from '../SHELL_SHOP/QMF2011/QMF2011_A';
import QMF2011_B from '../SHELL_SHOP/QMF2011/QMF2011_B';
import QMF2011_C from '../SHELL_SHOP/QMF2011/QM2011_C';
import QMF2011_D from '../SHELL_SHOP/QMF2011/QMF_2011_D';
import QMF2011_E from '../SHELL_SHOP/QMF2011/QMF2011_E';
import QMF2011_L2TL3T from '../SHELL_SHOP/QMF2011/QMF2011_L2TL3T';
import QMF2011_L2TL3T_B from '../SHELL_SHOP/QMF2011/QMF2011_L2TL3T_B';
import QMF2011_L2TL3T_C from '../SHELL_SHOP/QMF2011/QMF2011_L2TL3T_C';
import QMF2011_L2TL3T_D from '../SHELL_SHOP/QMF2011/QMF2011_L2TL3T_D';
import QMF2011_L2TL3T_E from '../SHELL_SHOP/QMF2011/QMF2011_L2TL3T_E';
import QMF2011_LGLSCN_A from '../SHELL_SHOP/QMF2011/QMF2011_LGSLSCN_A';
import QMF2011_LGLSCN_B from '../SHELL_SHOP/QMF2011/QMF2011_LGLSCN_B';
import QMF2011_LGLSCN_C from '../SHELL_SHOP/QMF2011/QMF2011_LGSLSCN_C';
import QMF2011_LGLSCN_D from '../SHELL_SHOP/QMF2011/QMF2011_LGSLSCN_D';
import QMF2011_LGLSCN_E from '../SHELL_SHOP/QMF2011/QMF2011_LGSLSCN_E';
import QMF2011_LPC_A from '../SHELL_SHOP/QMF2011/QMF2011_LPC_A';
import QMF2011_LPC_B from '../SHELL_SHOP/QMF2011/QMF2011_LPC_B';
import QMF2011_LPC_C from '../SHELL_SHOP/QMF2011/QMF2011_LPC_C';
import QMF2011_LPC_D from '../SHELL_SHOP/QMF2011/QMF2011_LPC_D';
import QMF2011_LPC_E from '../SHELL_SHOP/QMF2011/QMF2011_LPC_E';
import QMF2011_LSCZ_A from '../SHELL_SHOP/QMF2011/QMF2011_LSCZ_A';
import QMF2011_LSCZ_B from '../SHELL_SHOP/QMF2011/QMF2011_LSCZ_B';
import QMF2011_LSCZ_C from '../SHELL_SHOP/QMF2011/QMF2011_LSCZ_C';
import QMF2011_LSCZ_D from '../SHELL_SHOP/QMF2011/QMF2011_LSCZ_D';
import QMF2011_LSCZ_E from '../SHELL_SHOP/QMF2011/QMF2011_LSCZ_E';
import QMF2011_LBAC_A from '../SHELL_SHOP/QMF2011/QMF2011_LBAC_A';
import QMF2011_LBAC_B from '../SHELL_SHOP/QMF2011/QMF2011_LBAC_B';
import QMF2011_LBAC_C from '../SHELL_SHOP/QMF2011/QMF2011_LBAC_C';
import QMF2011_LBAC_D from '../SHELL_SHOP/QMF2011/QMF2011_LBAC_D';
import QMF2011_LBAC_E from '../SHELL_SHOP/QMF2011/QMF2011_LBAC_E';
import QMF2011_LIST from '../SHELL_SHOP/QMF2011/QMF2011List';
//Vaibhav
import QMF2011_LDSLR_A from '../SHELL_SHOP/QMF2011/QMF2011_LDSLR_A';

//Shell Shop imports 2
//QMF2011LDSLR
import AunderframeLdslr from '../SHELL_SHOP/QMF2011LDSLR/AunderframeLdslr';
import BSideWallLdslr from '../SHELL_SHOP/QMF2011LDSLR/BSideWallLdslr';
import CEndWallLdslr from '../SHELL_SHOP/QMF2011LDSLR/CEndWallLdslr';
import DRoofLdslr from '../SHELL_SHOP/QMF2011LDSLR/DRoofLdslr';
import EshellLdslr from '../SHELL_SHOP/QMF2011LDSLR/EShellLdslr';
import QMF2011LdslrList from '../SHELL_SHOP/QMF2011LDSLR/QMF2011LdslrList';

//Shell Shop imports 2-A
//QMF2011LFWAC

import AunderframeLWFAC from '../SHELL_SHOP/QMF2011LWFAC/AunderframeLWFAC';
import BSideWallLWFAC from '../SHELL_SHOP/QMF2011LWFAC/BSideWallLWFAC';
import CEndWallLWFAC from '../SHELL_SHOP/QMF2011LWFAC/CEndwallLWFAC';
import DRoofLWFAC from '../SHELL_SHOP/QMF2011LWFAC/DRoofLWFAC';
import EShellLWFAC from '../SHELL_SHOP/QMF2011LWFAC/EShellLWFAC';
import QMF2011LWFACLIST from '../SHELL_SHOP/QMF2011LWFAC/QMF2011LWFACLIST';

//Shell Shop imports 2-B

import AUnderFrameLBACT from '../SHELL_SHOP/QMF2011TEJAS/AUnderFrameLBACT';
import BSideWallLBACT from '../SHELL_SHOP/QMF2011TEJAS/BSideWallLBACT';
import CEndWallLBACT from '../SHELL_SHOP/QMF2011TEJAS/CEndWallLBACT';
import DRoofLBACT from '../SHELL_SHOP/QMF2011TEJAS/DRoofLBACT';
import EShellLBACT from '../SHELL_SHOP/QMF2011TEJAS/EShellLBACT';
import QMF2011TEJASLIST from '../SHELL_SHOP/QMF2011TEJAS/QMF2011TEJASLIST';



//First PAge import
import Firstpage from '../firstpage';
import ProdMfirst from '../prodMfirst';
import Jobdetails from '../jobdetails';
import McfAdmin from '../mcfAdmin';
import McfJobAssign from '../mcfJobAssign';
import RitesQci from '../ritesQci';
import Ritesjobs from '../ritesjobs';
import LogInLogOutButton from '../components/logInLogOutButton';
import ProdWheel from '../prodwheel';
import ProdWheelJob from '../prodwheeljob';
import McfChoice from '../mcfadminchoice';
import McfWheel from '../mcfwheel';

//Wheel shop import
import WheelJobdetails from '../wheeljobdetails';
import Stage1 from '../Wheel_SHOP/Stage1';
import Stage2 from '../Wheel_SHOP/Stage2';
import Stage3 from '../Wheel_SHOP/Stage3';
import Stage4_5 from '../Wheel_SHOP/Stage4_5';
import Stage6 from '../Wheel_SHOP/Stage6';
   // users import 
  //  import ProductionAdmin from '../Users/ProductionAdmin';
  //  import RitesAdmin from '../Users/RitesAdmin';
  //  import McfAdmin from '../Users/McfAdmin';
  //  import RitesQci from '../Users/RitesQci';


  // import { RootNavigator } from '.';

//  export  type RootStackParamList = {
//     Home: undefined;
//     Device: { device: Device };
//   };
  
//   const Stack2 = createStackNavigator<RootStackParamList>();
//   export const RootNavigator = () => (
//     <Stack2.Navigator>
//         <Stack2.Screen name="Home" component={HomeScreen} />
//         <Stack2.Screen name="Device" component={DeviceScreen} />
//         </Stack2.Navigator>
//   )
    
  
       
  

  

const Stack = createStackNavigator();

const stackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerStyle: {backgroundColor: 'lightblue'}}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="First Prod Page" component={ProdMfirst} />
        <Stack.Screen name="First Page" component={Firstpage} />
        <Stack.Screen name="Job Details" component={Jobdetails} />
        <Stack.Screen name="QA" component={McfAdmin} />
        <Stack.Screen name="QA Choice" component={McfChoice} />
        <Stack.Screen name="QA Wheel" component={McfWheel} />


        <Stack.Screen name="QA Job Assign" component={McfJobAssign} />
        <Stack.Screen name="Rites Qci" component={RitesQci} />
        <Stack.Screen name="Rites Jobs" component={Ritesjobs} />


        {/* Wheel_SHOP Start */}
        <Stack.Screen name="Wheel Prod" component={ProdWheel} />
        <Stack.Screen name="Wheel Prod Job" component={ProdWheelJob} />

        <Stack.Screen name="Wheel Job" component={WheelJobdetails} />

        <Stack.Screen name="Stage1" component={Stage1} />
        <Stack.Screen name="Stage2" component={Stage2} />
        <Stack.Screen name="Stage3" component={Stage3} />
        <Stack.Screen name="Stage4_5" component={Stage4_5} />
        <Stack.Screen name="Stage6" component={Stage6} />
      
        




        {/* Users Stack Screens
        <Stack.Screen name="Production Admin" component={ProductionAdmin} />
        <Stack.Screen name="QA" component={McfAdmin} />
        <Stack.Screen name="RITES Admin" component={RitesAdmin} />
        <Stack.Screen name="RITES QCI" component={RitesQci} /> */}

     





        <Stack.Screen name="Shell Shop List" component={QciList} />
        <Stack.Screen name="Refurnishing List" component={FormList} />

        {/* refurnishing imports */}
        {/* LWBAC */}
        <Stack.Screen name="Lwbac List" component={lwbacList} />
        <Stack.Screen name="Air Brake" component={airBreak} />
        <Stack.Screen name="Coach Lowering" component={coachLowering} />
        <Stack.Screen name="Floor And PVC" component={floorAndPvc} />
        <Stack.Screen name="Coach CLeaning" component={coachCleaning} />
        <Stack.Screen name="Lavatory" component={lavatory} />
        <Stack.Screen name="Moulding" component={moulding} />
        <Stack.Screen name="Paint" component={paint} />
        <Stack.Screen name="Partition" component={partition} />
        <Stack.Screen name="Plumbing" component={plumbing} />
        <Stack.Screen name="Seat And Berth" component={SeatAndBerth} />
        <Stack.Screen name="Window Ceiling" component={WindowAndceiling} />
        <Stack.Screen name="Panel" component={panel} />

        {/* FAC */}
        <Stack.Screen name="FAC List" component={FacList} />
        <Stack.Screen
          name="FACfloorAndPvc"
          options={{title: 'Floor And PVC'}}
          component={FloorAndPvcFAC}
        />
        <Stack.Screen
          name="FACpartition"
          options={{title: 'Partition'}}
          component={PartitionFAC}
        />
        <Stack.Screen
          name="FACpanel"
          options={{title: 'Panel'}}
          component={PanelFAC}
        />
        <Stack.Screen
          name="FACwindowAndCeiling"
          options={{title: 'Window Ceiling'}}
          component={WindowAndCeilingFAC}
        />
        <Stack.Screen
          name="FACmoulding"
          options={{title: 'Moulding'}}
          component={MouldingFAC}
        />
        <Stack.Screen
          name="FACseatAndBerth"
          options={{title: 'Seat And Berth'}}
          component={SeatAndBerthFAC}
        />
        <Stack.Screen
          name="FAClavatory"
          options={{title: 'Lavatory'}}
          component={LavatoryFAC}
        />
        <Stack.Screen
          name="FACplumbing"
          options={{title: 'Plumbing'}}
          component={PlumbingFAC}
        />
        <Stack.Screen
          name="FACairBrake"
          options={{title: 'Air Brake'}}
          component={AirBrakeFac}
        />
        <Stack.Screen
          name="FACcoachLowering"
          options={{title: 'Coach Lowering'}}
          component={CoachLoweringFac}
        />
        <Stack.Screen
          name="FACpaint"
          options={{title: 'Paint'}}
          component={PaintFac}
        />
        <Stack.Screen
          name="FACcoachCleaning"
          options={{title: 'Coach Cleaning'}}
          component={CoachCleaningFAc}
        />

        {/* LVPH */}
        <Stack.Screen name="LVPH List" component={LvphList} />
        <Stack.Screen
          name="floorAndChequer"
          options={{title: 'Floor And Chequer Sheet'}}
          component={floorAndChequerSheetLVPH}
        />
        <Stack.Screen
          name="ceilingLVPH"
          options={{title: 'Ceiling'}}
          component={CeilingLVPH}
        />
        <Stack.Screen
          name="panelLVPH"
          options={{title: 'Panel'}}
          component={PanelLVPH}
        />
        <Stack.Screen
          name="mouldingAndDoorLVPH"
          options={{title: 'Moulding And Door'}}
          component={MouldingAndDoorLVPH}
        />
        <Stack.Screen
          name="airBrakeLVPH"
          options={{title: 'Air Brake'}}
          component={AirBrakeLVPH}
        />
        <Stack.Screen
          name="coachLoweringLVPH"
          options={{title: 'Coach Lowering'}}
          component={CoachLoweringLVPH}
        />
        <Stack.Screen
          name="paintLVPH"
          options={{title: 'Paint'}}
          component={PaintLVPH}
        />
        <Stack.Screen
          name="coachCleaningLVPH"
          options={{title: 'Coach Cleaning'}}
          component={CoachCleaningLVPH}
        />

        {/* L2T,L3T,L2T(T),HUMSAFAR,TEJAS */}
        <Stack.Screen name="HUMSAFAR,TEJAS List" component={TejasList} />
        <Stack.Screen
          name="floorAndPVCTejas"
          options={{title: 'Floor And PVC'}}
          component={FloorAndPvcTejas}
        />
        <Stack.Screen
          name="partitionTejas"
          options={{title: 'Partition'}}
          component={PartitionTejas}
        />
        <Stack.Screen
          name="panelTejas"
          options={{title: 'Panel'}}
          component={PanelTejas}
        />
        <Stack.Screen
          name="windowAndCeilingTejas"
          options={{title: 'Window And Ceiling'}}
          component={WindowAndCeilingTejas}
        />
        <Stack.Screen
          name="mouldingTejas"
          options={{title: 'Moulding'}}
          component={Moulding}
        />
        <Stack.Screen
          name="seatAndBerthTejas"
          options={{title: 'Seat And Berth'}}
          component={SeatBerthTejas}
        />
        <Stack.Screen
          name="lavatoryTejas"
          options={{title: 'Lavatory'}}
          component={LavatoryTejas}
        />
        <Stack.Screen
          name="plumbingTejas"
          options={{title: 'Plumbing'}}
          component={PlumbingTejas}
        />
        <Stack.Screen
          name="airBrakeTejas"
          options={{title: 'Air Brake'}}
          component={AirBreakTejas}
        />
        <Stack.Screen
          name="coachLoweringTejas"
          options={{title: 'Coach Lowering'}}
          component={CoachLoweringTejas}
        />
        <Stack.Screen
          name="paintTejas"
          options={{title: 'Paint'}}
          component={PaintTejas}
        />
        <Stack.Screen
          name="coahcCleaningTejas"
          options={{title: 'Coach Cleaning'}}
          component={CoachCleaningTejas}
        />

        {/* LPC */}
        <Stack.Screen name="LPC List" component={LPCList} />
        <Stack.Screen
          name="floorAndPvcLPC"
          options={{title: 'Floor And PVC'}}
          component={FloorAndPvcLPC}
        />
        <Stack.Screen
          name="partitionLPC"
          options={{title: 'Partition'}}
          component={PartitionLPC}
        />
        <Stack.Screen
          name="panelLPC"
          options={{title: 'Panel'}}
          component={PanelLPC}
        />
        <Stack.Screen
          name="windowAndCeilingLPC"
          options={{title: 'Window And Ceiling'}}
          component={WindowAndCeilingLPC}
        />
        <Stack.Screen
          name="mouldingLPC"
          options={{title: 'Moulding'}}
          component={MouldingLPC}
        />
        <Stack.Screen
          name="lavatoryLPC"
          options={{title: 'Lavatory'}}
          component={LavatoryLPC}
        />
        <Stack.Screen
          name="seatAndBerthLPC"
          options={{title: 'Seat And Berth'}}
          component={SeatBerthLPC}
        />
        <Stack.Screen
          name="airBrakeLPC"
          options={{title: 'Air Brake'}}
          component={AirBreakLPC}
        />
        <Stack.Screen
          name="plumbingLPC"
          options={{title: 'Plumbing'}}
          component={PlumbingLPC}
        />
        <Stack.Screen
          name="coachCleaningLPC"
          options={{title: 'Coach Cleaning'}}
          component={CoachCleaningLPC}
        />
        <Stack.Screen
          name="coachLoweringLPC"
          options={{title: 'Coach Lowering'}}
          component={CoachLoweringLPC}
        />
        <Stack.Screen
          name="paintLPC"
          options={{title: 'Paint'}}
          component={PaintLPC}
        />

        {/* LWS */}
        <Stack.Screen name="LWS List" component={LWSList} />
        <Stack.Screen
          name="floorAndPvcLWS"
          options={{title: 'Floor And PVC'}}
          component={FloorAndPvcLWS}
        />
        <Stack.Screen
          name="partitionLWS"
          options={{title: 'Partition'}}
          component={PartitionLWS}
        />
        <Stack.Screen
          name="panelLWS"
          options={{title: 'Panel'}}
          component={PanelLWS}
        />
        <Stack.Screen
          name="windowAndCeilingLWS"
          options={{title: 'Window And Ceiling'}}
          component={WindowAndCeilingLWS}
        />
        <Stack.Screen
          name="mouldingLWS"
          options={{title: 'Moulding'}}
          component={MouldingLWS}
        />
        <Stack.Screen
          name="seatAndBerthLWS"
          options={{title: 'Seat And Berth'}}
          component={SeatBerthLWS}
        />
        <Stack.Screen
          name="lavatoryLWS"
          options={{title: 'Lavatory'}}
          component={LavatoryLWS}
        />
        <Stack.Screen
          name="plumbingLWS"
          options={{title: 'Plumbing'}}
          component={PlumbingLWS}
        />
        <Stack.Screen
          name="airBrakeLWS"
          options={{title: 'Air Brake'}}
          component={AirBreakLWS}
        />
        <Stack.Screen
          name="coachLoweringLWS"
          options={{title: 'Coach Lowering'}}
          component={CoachLoweringLWS}
        />
        <Stack.Screen
          name="paintLWS"
          options={{title: 'Paint'}}
          component={PaintLWS}
        />
        <Stack.Screen
          name="coachCleaningLWS"
          options={{title: 'Coach Cleaning'}}
          component={CoachCleaningLWS}
        />

        {/* scz */}
        <Stack.Screen name="SCZ List" component={SCZList} />
        <Stack.Screen
          name="floorAndPvcSCZ"
          options={{title: 'Floor And PVC'}}
          component={FloorAndPvcSCZ}
        />
        <Stack.Screen
          name="partitionSCZ"
          options={{title: 'Partition'}}
          component={PartitionSCZ}
        />
        <Stack.Screen
          name="panelSCZ"
          options={{title: 'Panel'}}
          component={PanelSCZ}
        />
        <Stack.Screen
          name="windowAndCeilingSCZ"
          options={{title: 'Window And Ceiling'}}
          component={WindowAndCeilingSCZ}
        />
        <Stack.Screen
          name="mouldingSCZ"
          options={{title: 'Moulding'}}
          component={MouldingSCZ}
        />
        <Stack.Screen
          name="seatAndBerthSCZ"
          options={{title: 'Seat And Berth'}}
          component={SeatBerthSCZ}
        />
        <Stack.Screen
          name="lavatorySCZ"
          options={{title: 'Lavatory'}}
          component={LavatorySCZ}
        />
        <Stack.Screen
          name="plumbingSCZ"
          options={{title: 'Plumbing'}}
          component={PlumbingSCZ}
        />
        <Stack.Screen
          name="airBrakeSCZ"
          options={{title: 'Air Brake'}}
          component={AirBreakSCZ}
        />
        <Stack.Screen
          name="coachLoweringSCZ"
          options={{title: 'Coach Lowering'}}
          component={CoachLoweringSCZ}
        />
        <Stack.Screen
          name="paintSCZ"
          options={{title: 'Paint'}}
          component={PaintSCZ}
        />
        <Stack.Screen
          name="coachCleaningSCZ"
          options={{title: 'Coach Cleaning'}}
          component={CoachCleaningSCZ}
        />

        {/* LDSLR &SLRD   */}
        <Stack.Screen name="SLRD List" component={SLRDList} />

        <Stack.Screen
          name="coachLoweringSLRD"
          options={{title: 'Coach Lowering'}}
          component={CoachLoweringSLRD}
        />
        <Stack.Screen
          name="paintSLRD"
          options={{title: 'Paint'}}
          component={PaintSLRD}
        />
        <Stack.Screen
          name="coachCleaningSLRD"
          options={{title: 'Coach Cleaning'}}
          component={CoachCleaningSLRD}
        />
        <Stack.Screen
          name="airBrakeSLRD"
          options={{title: 'Air Brake'}}
          component={AirBreakSLRD}
        />
        <Stack.Screen
          name="plumbingSLRD"
          options={{title: 'Plumbing'}}
          component={PlumbingSLRD}
        />
        <Stack.Screen
          name="lavatorySLRD"
          options={{title: 'Lavatory'}}
          component={LavatorySLRD}
        />
        <Stack.Screen
          name="seatAndBerthSLRD"
          options={{title: 'Seat And Berth'}}
          component={SeatBerthSLRD}
        />
        <Stack.Screen
          name="mouldingSLRD"
          options={{title: 'Moulding'}}
          component={MouldingSLRD}
        />
        <Stack.Screen
          name="windowAndCeilingSLRD"
          options={{title: 'Window And Ceiling'}}
          component={WindowAndCeilingSLRD}
        />
        <Stack.Screen
          name="panelSLRD"
          options={{title: 'Panel'}}
          component={PanelSLRD}
        />
        <Stack.Screen
          name="floorAndPvcSLRD"
          options={{title: 'Floor And PVC'}}
          component={FloorAndPvcSLRD}
        />

        {/* SCZAC */}
        <Stack.Screen name="SCZAC List" component={SczacList} />
        <Stack.Screen
          name="floorAndPvcSCZAC"
          options={{title: 'Floor And PVC'}}
          component={FloorAndPvcSCZAC}
        />
        <Stack.Screen
          name="partitionSCZAC"
          options={{title: 'Partition'}}
          component={PartitionSCZAC}
        />
        <Stack.Screen
          name="panelSCZAC"
          options={{title: 'Panel'}}
          component={PanelSCZAC}
        />
        <Stack.Screen
          name="lavatorySCZAC"
          options={{title: 'Lavatory'}}
          component={LavatorySCZAC}
        />
        <Stack.Screen
          name="plumbingSCZAC"
          options={{title: 'Plumbing'}}
          component={PlumbingSCZAC}
        />
        <Stack.Screen
          name="mouldingSCZAC"
          options={{title: 'Moulding'}}
          component={MouldingSCZAC}
        />
        <Stack.Screen
          name="coachLoweringSCZAC"
          options={{title: 'Coach Lowering'}}
          component={CoachLoweringSCZAC}
        />
        <Stack.Screen
          name="airBrakeSCZAC"
          options={{title: 'Air Brake'}}
          component={AirBreakSCZAC}
        />
        <Stack.Screen
          name="paintSCZAC"
          options={{title: 'Paint'}}
          component={PaintSCZAC}
        />
        <Stack.Screen
          name="coachCleaningSCZAC"
          options={{title: 'Coach Cleaning'}}
          component={CoachCleaningSCZAC}
        />
        <Stack.Screen
          name="SeatBerthSCZAC"
          options={{title: 'Seat and Berth'}}
          component={SeatAndBerthSCZAC}
        />
        <Stack.Screen
          name="WindowCeilingCZAC"
          options={{title: 'Window and Ceiling'}}
          component={WindowAndCeilingSCZAC}
        />

        {/* refurnishing imports */}

        {/* bogie imports */}


        <Stack.Screen name="Bogie List" component={FormListBogie} />

        <Stack.Screen name="Ac2t" component={Ac2t} />
        <Stack.Screen name="Ac3t" component={Ac3t} />
        <Stack.Screen name="Accw" component={Accw} />
        <Stack.Screen name="Ldslr" component={Ldslr} />
        <Stack.Screen name="Lgs" component={Lgs} />
        <Stack.Screen name="Lscn" component={Lscn} />
        <Stack.Screen name="Lslrd" component={Lslrd} />
        <Stack.Screen name="LslrdAsp" component={LslrdAsp} />
        <Stack.Screen name="Lvph" component={Lvph} />
        <Stack.Screen name="Lwaccn" component={Lwaccn} />
        <Stack.Screen name="Lwcbac" component={Lwcbac} />
        <Stack.Screen name="Lwlrrm" component={Lwlrrm} />
        <Stack.Screen name="Lwlrrm2" component={Lwlrrm2} />
        <Stack.Screen name="LwlrrmAsp1" component={LwlrrmAsp1} />
        <Stack.Screen name="LwlrrmAsp2" component={LwlrrmAsp2} />
        <Stack.Screen name="LwlrrmKNAsp1" component={LwlrrmKNAsp1} />
        <Stack.Screen name="LwlrrmKNAsp2" component={LwlrrmKNAsp2} />
        <Stack.Screen name="M5008" component={M5008} />
        <Stack.Screen name="M5008A" component={M5008A} />
        <Stack.Screen name="M5017" component={M5017} />
        <Stack.Screen name="M5023" component={M5023} />

        {/* bogie imports */}

        {/* Shell Shop Imports */}
        <Stack.Screen name="SHELLLIST" component={SHELLLIST} />

        <Stack.Screen name="QMF List" component={QMF2011_LIST} />
        <Stack.Screen
          name="QMF2011_A"
          options={{title: 'A-UNDERFRAME'}}
          component={QMF2011_A}
        />
        <Stack.Screen
          name="QMF2011_B"
          options={{title: 'B-SIDE WALL'}}
          component={QMF2011_B}
        />
        <Stack.Screen
          name="QMF2011_C"
          options={{title: 'C-END WALL'}}
          component={QMF2011_C}
        />
        <Stack.Screen
          name="QMF2011_D"
          options={{title: 'D-ROOF'}}
          component={QMF2011_D}
        />
        <Stack.Screen
          name="QMF2011_E"
          options={{title: 'E-SHELL'}}
          component={QMF2011_E}
        />
        <Stack.Screen
          name="QMF2011_L2TL3T"
          options={{title: 'A-UNDERFRAME'}}
          component={QMF2011_L2TL3T}
        />
        <Stack.Screen
          name="QMF2011_L2TL3T_B"
          options={{title: 'B-SIDE WALL'}}
          component={QMF2011_L2TL3T_B}
        />
        <Stack.Screen
          name="QMF2011_L2TL3T_C"
          options={{title: 'C-END WALL'}}
          component={QMF2011_L2TL3T_C}
        />
        <Stack.Screen
          name="QMF2011_L2TL3T_D"
          options={{title: 'D-ROOF'}}
          component={QMF2011_L2TL3T_D}
        />
        <Stack.Screen
          name="QMF2011_L2TL3T_E"
          options={{title: 'E-SHELL'}}
          component={QMF2011_L2TL3T_E}
        />
        <Stack.Screen
          name="QMF2011_LGLSCN_A"
          options={{title: 'A-UNDERFRAME'}}
          component={QMF2011_LGLSCN_A}
        />
        <Stack.Screen
          name="QMF2011_LGLSCN_B"
          options={{title: 'B-SIDE WALL'}}
          component={QMF2011_LGLSCN_B}
        />
        <Stack.Screen
          name="QMF2011_LGLSCN_C"
          options={{title: 'C-END WALL'}}
          component={QMF2011_LGLSCN_C}
        />
        <Stack.Screen
          name="QMF2011_LGLSCN_D"
          options={{title: 'D-ROOF'}}
          component={QMF2011_LGLSCN_D}
        />
        <Stack.Screen
          name="QMF2011_LGLSCN_E"
          options={{title: 'E-SHELL'}}
          component={QMF2011_LGLSCN_E}
        />
        <Stack.Screen
          name="QMF2011_LPC_A"
          options={{title: 'A-UNDERFRAME'}}
          component={QMF2011_LPC_A}
        />
        <Stack.Screen
          name="QMF2011_LPC_B"
          options={{title: 'B-SIDE WALL'}}
          component={QMF2011_LPC_B}
        />
        <Stack.Screen
          name="QMF2011_LPC_C"
          options={{title: 'C-END WALL'}}
          component={QMF2011_LPC_C}
        />
        <Stack.Screen
          name="QMF2011_LPC_D"
          options={{title: 'D-ROOF'}}
          component={QMF2011_LPC_D}
        />
        <Stack.Screen
          name="QMF2011_LPC_E"
          options={{title: 'E-ROOF'}}
          component={QMF2011_LPC_E}
        />
        <Stack.Screen
          name="QMF2011_LSCZ_A"
          options={{title: 'A-UNDERFRAME'}}
          component={QMF2011_LSCZ_A}
        />
        <Stack.Screen
          name="QMF2011_LSCZ_B"
          options={{title: 'B-SIDE WALL'}}
          component={QMF2011_LSCZ_B}
        />
        <Stack.Screen
          name="QMF2011_LSCZ_C"
          options={{title: 'B-SIDE WALL'}}
          component={QMF2011_LSCZ_C}
        />
        <Stack.Screen
          name="QMF2011_LSCZ_D"
          options={{title: 'B-SIDE WALL'}}
          component={QMF2011_LSCZ_D}
        />
        <Stack.Screen
          name="QMF2011_LSCZ_E"
          options={{title: 'B-SIDE WALL'}}
          component={QMF2011_LSCZ_E}
        />
        <Stack.Screen
          name="QMF2011_LBAC_A"
          options={{title: 'B-SIDE WALL'}}
          component={QMF2011_LBAC_A}
        />
        <Stack.Screen
          name="QMF2011_LBAC_B"
          options={{title: 'B-SIDE WALL'}}
          component={QMF2011_LBAC_B}
        />
        <Stack.Screen
          name="QMF2011_LBAC_C"
          options={{title: 'B-SIDE WALL'}}
          component={QMF2011_LBAC_C}
        />
        <Stack.Screen
          name="QMF2011_LBAC_D"
          options={{title: 'B-SIDE WALL'}}
          component={QMF2011_LBAC_D}
        />
        <Stack.Screen
          name="QMF2011_LBAC_E"
          options={{title: 'E-SHELL'}}
          component={QMF2011_LBAC_E}
        />
        {/* Vaibhav */}
       <Stack.Screen
          name="QMF2011_LDSLR_A"
          options={{title: 'A-UNDERFRAME'}}
          component={QMF2011_LDSLR_A}
        />



        <Stack.Screen
          name="AunderframeLdslr"
          options={{title: 'A-UNDERFRAME'}}
          component={AunderframeLdslr}
        />
        <Stack.Screen
          name="BSideWallLdslr"
          options={{title: 'B-SIDE WALL'}}
          component={BSideWallLdslr}
        />
        <Stack.Screen
          name="CEndWallLdslr"
          options={{title: 'C-END WALL'}}
          component={CEndWallLdslr}
        />
        <Stack.Screen
          name="DRoofLdslr"
          options={{title: 'D-ROOF'}}
          component={DRoofLdslr}
        />
        <Stack.Screen
          name="EshellLdslr"
          options={{title: 'E-SHELL'}}
          component={EshellLdslr}
        />

        <Stack.Screen
          name="AunderframeLWFAC"
          options={{title: 'A-UNDERFRAME'}}
          component={AunderframeLWFAC}
        />
        <Stack.Screen
          name="BSideWallLWFAC"
          options={{title: 'B-SIDE WALL'}}
          component={BSideWallLWFAC}
        />
        <Stack.Screen
          name="CEndWallLWFAC"
          options={{title: 'C-END WALL'}}
          component={CEndWallLWFAC}
        />
        <Stack.Screen
          name="DRoofLWFAC"
          options={{title: 'D-ROOF'}}
          component={DRoofLWFAC}
        />
        <Stack.Screen
          name="EShellLWFAC"
          options={{title: 'E-SHELL'}}
          component={EShellLWFAC}
        />

        <Stack.Screen
          name="AUnderFrameLBACT"
          options={{title: 'A-UNDERFRAME'}}
          component={AUnderFrameLBACT}
        />
        <Stack.Screen
          name="BSideWallLBACT"
          options={{title: 'B-SIDE WALL'}}
          component={BSideWallLBACT}
        />
        <Stack.Screen
          name="CEndWallLBACT"
          options={{title: 'C-END WALL'}}
          component={CEndWallLBACT}
        />
        <Stack.Screen
          name="DRoofLBACT"
          options={{title: 'D-ROOF'}}
          component={DRoofLBACT}
        />
        <Stack.Screen
          name="EShellLBACT"
          options={{title: 'E-SHELL'}}
          component={EShellLBACT}
        />

        <Stack.Screen
          name="QMF2011LDSLR_LIST"
          options={{title: 'QMF2011 LDSLR LIST'}}
          component={QMF2011LdslrList}
        />
        <Stack.Screen
          name="QMF2011LWFAC_LIST"
          options={{title: 'QMF2011 LWFAC LIST'}}
          component={QMF2011LWFACLIST}
        />
        <Stack.Screen
          name="QMF2011TEJAS_LIST"
          options={{title: 'QMF2011 TEJAS LIST'}}
          component={QMF2011TEJASLIST}
        />

        {/* Shell Shop Imports */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default stackNavigator;
