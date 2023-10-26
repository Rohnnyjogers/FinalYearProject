import React from 'react'
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Saved from '../screens/Saved';
import Rewards from '../screens/Rewards';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
   <BottomTab.Navigator>
        <BottomTab.Screen name='home' component={Home}/>
        <BottomTab.Screen name="rewards" component={Rewards} />
        <BottomTab.Screen name="saved" component={Saved} />
        <BottomTab.Screen name="profile" component={Profile} />
   </BottomTab.Navigator>
  )
}

export default TabNavigator