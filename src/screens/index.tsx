import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer'; // import {HomeScreen} from './screen/Home';
import { HomeNavigator } from './Home';
import { SettingNavigator } from './Setting';
// import {ResultsScreen} from './screen/Results';

// import {Colors} from 'react-native/Libraries/NewNavigatorScreen';

export type NavigatorProps = {};

const Drawer = createDrawerNavigator();

export const RootNavigator: React.FunctionComponent<NavigatorProps> = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="home"
          component={HomeNavigator}
          options={{title: 'Home'}}
        />
        <Drawer.Screen
          name="setting"
          component={SettingNavigator}
          options={{title: 'Setting'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
