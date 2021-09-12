import React from 'react';
// import {useColorScheme} from 'react-native';

import {RootNavigator} from '@/screens';
// import {Colors} from 'react-native/Libraries/NewAppScreen';

export type AppProps = {
  name: string;
  baseEnthusiasmLevel?: number;
};

const App: React.FC<AppProps> = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return <RootNavigator />;
};

export default App;
