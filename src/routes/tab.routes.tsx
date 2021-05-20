import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PlantSelect from '../pages/PlantSelect';
import MyPlants from '../pages/MyPlants';

import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../styles/colors';

const TabRoutes = createBottomTabNavigator();

const AppTabsRoutes: React.FC = () => (
  <TabRoutes.Navigator
    tabBarOptions={{
      activeTintColor: colors.green,
      inactiveTintColor: colors.heading,
      labelPosition: 'beside-icon',
      style: { paddingVertical: Platform.OS === 'ios' ? 20 : 0, height: 88 },
    }}
  >
    <TabRoutes.Screen
      name="Nova Planta"
      component={PlantSelect}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="add-circle-outline" size={size} color={color} />
        ),
      }}
    />

    <TabRoutes.Screen
      name="Minhas Plantas"
      component={MyPlants}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons
            name="format-list-bulleted"
            size={size}
            color={color}
          />
        ),
      }}
    />
  </TabRoutes.Navigator>
);

export default AppTabsRoutes;
