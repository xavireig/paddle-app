import * as React from 'react';
import LoginScreen from "react-native-login-screen";

const LoginForm = () => {
    return (
        <LoginScreen
            logoImageSource={require("../assets/logo.png")}
            onLoginPress={() => {  alert('User logged in!')}}
            onSignupPress={() => {}}
            onEmailChange={(email: string) => {}}
            onPasswordChange={(password: string) => {}}
            
            >
        </LoginScreen>
    );
  };
  
  export default LoginForm;