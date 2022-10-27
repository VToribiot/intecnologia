import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Notification from './Notification.jsx';
import Home from './Home.jsx';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} labelStyle={{fontSize: 24}} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer({}) {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{headerShown: false, labelStyle: {fontSize : 24}}}
    >
      <Drawer.Screen name="Inicio" component={Home} 
      options={{
        drawerIcon: config => <FontAwesome name="home" size={24} color="gray" />,
        drawerLabelStyle : {fontSize : 24, color : "#515A5A"}}} />
      <Drawer.Screen name="Notificación" component={Notification}
      options={{
        drawerIcon: config => <MaterialCommunityIcons name="bell" size={24} color="gray" />,
        drawerLabelStyle : {fontSize : 24, color : "#515A5A"}}}/>
    </Drawer.Navigator>
  );
}

export default MyDrawer;
