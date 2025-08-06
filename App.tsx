import React from 'react';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigation/StackNavigation/Navigation';
import {LogBox, StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';

LogBox.ignoreAllLogs();
export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <PersistGate loading={null} persistor={persistor}>
          <GestureHandlerRootView>
            <NavigationContainer>
              {/* <StatusBar barStyle="dark-content" backgroundColor="#fff" /> */}
              <AppNavigator />;
            </NavigationContainer>
          </GestureHandlerRootView>
        </PersistGate>
      </PaperProvider>
    </Provider>
  );
}
