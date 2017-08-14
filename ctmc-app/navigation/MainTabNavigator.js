import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import AnnoncesScreen from '../screens/AnnoncesScreen';
import DocumentsScreen from '../screens/DocumentsScreen';
import ToolsScreen from '../screens/ToolsScreen';
import SettingsScreen from '../screens/SettingsScreen';

export default TabNavigator(
  {
    News: {
      screen: HomeScreen,
    },
    Annonces: {
      screen: AnnoncesScreen,
    },
    Documents: {
      screen: DocumentsScreen,
    },
    Outils: {
      screen: ToolsScreen,
    },
    About: {
      screen: SettingsScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'News':
            iconName = Platform.OS === 'ios'
              ? `ios-paper${focused ? '' : '-outline'}`
              : 'md-paper';
            break;
          case 'Annonces':
            iconName = Platform.OS === 'ios'
              ? `ios-pricetags${focused ? '' : '-outline'}`
              : 'md-pricetags';
            break;
          case 'Documents':
            iconName = Platform.OS === 'ios'
              ? `ios-briefcase${focused ? '' : '-outline'}`
              : 'md-briefcase';
              break;
          case 'Outils':
            iconName = Platform.OS === 'ios'
              ? `ios-podium${focused ? '' : '-outline'}`
              : 'md-podium';
              break;
          case 'About':
            iconName = Platform.OS === 'ios'
              ? `ios-information-circle${focused ? '' : '-outline'}`
              : 'md-information-circle';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
