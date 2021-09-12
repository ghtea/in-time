import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingMainScreen } from './Main';

// import {Colors} from 'react-native/Libraries/NewNavigatorScreen';

export type NavigatorProps = {};

const Stack = createNativeStackNavigator();

export const SettingNavigator: React.FunctionComponent<NavigatorProps> = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
      <Stack.Navigator>
        <Stack.Screen
          name="main"
          component={SettingMainScreen}
          options={{title: 'Setting'}}
        />
      </Stack.Navigator>
  );
};
