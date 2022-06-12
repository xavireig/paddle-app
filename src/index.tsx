import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from './common/config/apollo-client';
import LoginForm from './screens/Login';
import MainContainer from './navigation/MainContainer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'

const apolloClient = createApolloClient();
const Drawer = createDrawerNavigator();

function LoginScreen({ navigation }) {
  return (
    <LoginForm />
  );
}

function HomeScreen({ navigation }) {
  return (
    <MainContainer />
  );
}

const App = () => {
  const Drawer = createDrawerNavigator();
  const MyTheme = {
    colors: {
      primary: '#66cc00',
    },
  };
  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer theme={MyTheme}>
        <Drawer.Navigator useLegacyImplementation={true} initialRouteName="Home" screenOptions={{headerTintColor: '#66cc00', headerShown: false}}>
          <Drawer.Screen name="Login" component={LoginScreen} />
          <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;