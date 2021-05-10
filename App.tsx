import useCachedResources from '@hooks/useCachedResources';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import store from './redux/store/store';
import '@configs/axios';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
const qc = new QueryClient();
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <QueryClientProvider client={qc}>
        <Provider store={store}>
          <SafeAreaProvider style={{backgroundColor: '#fafafa'}}>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
        </Provider>
      </QueryClientProvider>
    );
  }
}
