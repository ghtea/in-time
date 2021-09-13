import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HomeTodayScreen } from './Today';
import { HomeWeekScreen } from './Week';

// import {Colors} from 'react-native/Libraries/NewNavigatorScreen';

export type NavigatorProps = {};

const Tab = createMaterialTopTabNavigator();

export const HomeNavigator: React.FunctionComponent<NavigatorProps> = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
      <Tab.Navigator>
        <Tab.Screen
          name="today"
          component={HomeTodayScreen}
          options={{title: 'Today'}}
        />
        <Tab.Screen
          name="week"
          component={HomeWeekScreen}
          options={{title: 'Week'}}
        />
      </Tab.Navigator>
  );
};