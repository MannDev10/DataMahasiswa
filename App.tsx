import React from 'react';
import { NativeBaseProvider } from "native-base";
import { StatusBar, LogBox } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import AppNavigator from './src/router/routes';
import { Colors } from './src/utils/utilities';
import 'moment/locale/id'
import moment from 'moment';

moment.locale('id')
function App(): React.JSX.Element {
  const [init, setInit] = React.useState(false)
  const [isAppReady, setAppReady] = React.useState(false)

  React.useEffect(() => {
    async function Initial() {
      setAppReady(false)

      setAppReady(true)
    }

    Initial()

    if (__DEV__) {
      // RemoteDebugger()
      LogBox.ignoreLogs(['Warning: ...']);
      LogBox.ignoreAllLogs();
    }
  }, [init])

  return (
    <PaperProvider>
      <NativeBaseProvider>
        <StatusBar barStyle={'light-content'} backgroundColor={Colors.PRIMARY} />
        <AppNavigator />
      </NativeBaseProvider>
    </PaperProvider>
  );
}

export default App;
