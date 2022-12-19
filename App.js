import React from 'react';
import 'react-native-gesture-handler';
import {QueryClient, QueryClientProvider} from 'react-query';

import styled from 'styled-components/native';
import MainNav from './src/nav/MainNav';
import Toast from 'react-native-toast-message';
import {NavigationContainer} from '@react-navigation/native';

const MainView = styled.SafeAreaView`
  flex: 1;
`;

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MainView>
        <NavigationContainer>
          <MainNav />
        </NavigationContainer>
        <Toast />
      </MainView>
    </QueryClientProvider>
  );
};

export default App;
