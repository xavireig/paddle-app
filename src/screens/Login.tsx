import * as React from 'react';
import LoginScreen from "react-native-login-screen";
import { useNavigation } from '@react-navigation/native';

const LoginForm = () => {
    const navigation = useNavigation();
    return (
        <LoginScreen
            logoImageSource={require("../assets/logo.png")}
            onLoginPress={() => {  navigation.navigate('Home')}}
            onSignupPress={() => {}}
            onEmailChange={(email: string) => {}}
            onPasswordChange={(password: string) => {}}
            
            >
        </LoginScreen>
    );
  };
  
  export default LoginForm;